/* eslint-disable no-prototype-builtins */
/** @jsx jsx */
/**
  Licensing

  Copyright 2022 Esri

  Licensed under the Apache License, Version 2.0 (the "License"); You
  may not use this file except in compliance with the License. You may
  obtain a copy of the License at
  http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
  implied. See the License for the specific language governing
  permissions and limitations under the License.

  A copy of the license is available in the repository's
  LICENSE file.
*/
import { React, type AllWidgetProps, css, jsx } from 'jimu-core'
import {
  loadArcGISJSAPIModules,
  JimuMapViewComponent,
  type JimuMapView
} from 'jimu-arcgis'

import type { IMConfig } from '../config'

import defaultMessages from './translations/default'

interface IState {
  ideaSearchInput: string
  jimuMapView: JimuMapView
  featureLayer: __esri.FeatureLayer
  loading: boolean
  initialExtent: __esri.Extent
}

export default class Widget extends React.PureComponent<
AllWidgetProps<IMConfig>,
IState
> {
  // Give types to the modules we import from the ArcGIS API for JavaScript
  // to tell TypeScript what types they are.
  FeatureLayer: typeof __esri.FeatureLayer
  Query: typeof __esri.Query
  SpatialReference: typeof __esri.SpatialReference

  state = {
    ideaSearchInput: '',
    jimuMapView: null,
    featureLayer: null,
    loading: false,
    initialExtent: null
  }

  // URL fixa da camada
  readonly FEATURE_SERVICE_URL = 'https://meioambiente.sistemas.mpba.mp.br/server/rest/services/Hosted/alertas_regional_lapa/FeatureServer'
  
  // URL da ferramenta de geoprocessamento
  readonly GP_SERVICE_URL = 'https://meioambiente.sistemas.mpba.mp.br/server/rest/services/testeoutput/processaralerta_idea/GPServer'
  
  // URL fixa do submitJob
  readonly GP_SUBMIT_JOB_URL = 'https://meioambiente.sistemas.mpba.mp.br/server/rest/services/testeoutput/processaralerta_idea/GPServer/relatorio_analise_lapa/submitJob'
  
  // Nome da task específica dentro da GP
  readonly GP_TASK_NAME = 'Processamento de alertas'

  // Função chamada quando o valor da pesquisa muda
  handleIdeaSearchInputChange = (event) => {
    this.setState({
      ideaSearchInput: event.target.value
    })
  }

  // Carrega a camada automaticamente quando o componente é montado ou o mapa está disponível
  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.jimuMapView && !this.state.featureLayer && !prevState.jimuMapView) {
      // Salva a visualização inicial quando o mapa é detectado pela primeira vez
      if (this.state.jimuMapView.view && !this.state.initialExtent) {
        const currentExtent = this.state.jimuMapView.view.extent
        if (currentExtent) {
          this.setState({
            initialExtent: currentExtent.clone()
          })
        }
      }
      this.loadFeatureLayer()
    }
  }

  // Carrega a camada de feature service
  loadFeatureLayer = () => {
    if (!this.state.jimuMapView) {
      return
    }

    this.setState({ loading: true })

    loadArcGISJSAPIModules([
      'esri/layers/FeatureLayer',
      'esri/geometry/SpatialReference'
    ]).then((modules) => {
      [this.FeatureLayer, this.SpatialReference] = modules

      // Cria a camada com a URL fixa
      const layer = new this.FeatureLayer({
        url: this.FEATURE_SERVICE_URL
      })

      // Adiciona a camada ao mapa
      this.state.jimuMapView.view.map.add(layer)

      // Aguarda a camada ser criada
      layer.on('layerview-create', () => {
        // Salva a visualização inicial do mapa se ainda não foi salva
        if (!this.state.initialExtent && this.state.jimuMapView && this.state.jimuMapView.view) {
          const currentExtent = this.state.jimuMapView.view.extent
          if (currentExtent) {
            this.setState({
              featureLayer: layer,
              loading: false,
              initialExtent: currentExtent.clone()
            })
          } else {
            this.setState({
              featureLayer: layer,
              loading: false
            })
          }
        } else {
          this.setState({
            featureLayer: layer,
            loading: false
          })
        }
      })

      layer.on('layerview-create-error', () => {
        console.error('Erro ao carregar a camada')
        this.setState({ loading: false })
      })
    })
  }

  // Função para filtrar e dar zoom no polígono baseado na pesquisa
  handleFilterAndZoom = async (evt) => {
    evt.preventDefault()

    // Casos de erro
    if (!this.state.jimuMapView) {
      alert('Por favor, configure um mapa no widget.')
      return
    }
    if (!this.state.featureLayer) {
      alert('A camada ainda não foi carregada. Aguarde...')
      return
    }
    if (this.state.ideaSearchInput === '' || this.state.ideaSearchInput.trim() === '') {
      alert('Por favor, digite um número para pesquisar na coluna idea.')
      return
    }

    this.setState({ loading: true })

    // Carrega os módulos necessários
    loadArcGISJSAPIModules([
      'esri/layers/FeatureLayer',
      'esri/geometry/SpatialReference'
    ]).then((modules) => {
      [this.FeatureLayer, this.SpatialReference] = modules

      const layer = this.state.featureLayer
      const searchValue = this.state.ideaSearchInput.trim()
      
      // Escapa aspas simples para evitar SQL injection
      const escapedValue = searchValue.replace(/'/g, "''")

      // Verifica se a camada está carregada e obtém informações dos campos
      // Aguarda a camada estar completamente carregada
      const checkAndQuery = () => {
        // Lista de possíveis nomes de coluna (case-insensitive)
        const possibleFieldNames = ['idea', 'IDEA', 'Idea', 'ID', 'id', 'Id']
        let fieldName = 'idea' // Padrão
        
        // Tenta encontrar o campo correto
        if (layer.fields && layer.fields.length > 0) {
          const foundField = layer.fields.find(field => 
            possibleFieldNames.includes(field.name)
          )
          if (foundField) {
            fieldName = foundField.name
          } else {
            // Se não encontrar, tenta fazer uma busca case-insensitive
            const caseInsensitiveField = layer.fields.find(field => 
              field.name.toLowerCase() === 'idea'
            )
            if (caseInsensitiveField) {
              fieldName = caseInsensitiveField.name
            } else {
              // Log dos campos disponíveis para debug
              console.log('Campos disponíveis na camada:', layer.fields.map(f => f.name))
              // Tenta usar o primeiro campo que parece ser um ID
              const idField = layer.fields.find(field => 
                field.type === 'esriFieldTypeString' || field.type === 'esriFieldTypeInteger' || field.type === 'esriFieldTypeDouble'
              )
              if (idField) {
                fieldName = idField.name
                console.log(`Usando campo: ${fieldName}`)
              }
            }
          }
        }

        // Cria uma query para buscar o polígono pela coluna
        // Usa LIKE para busca mais flexível e trata como string
        const query = layer.createQuery()
        
        // Tenta diferentes abordagens de query
        // 1. Busca exata como string
        // 2. Busca com LIKE para valores parciais
        // 3. Busca como número (se o valor for numérico)
        const hasSpecialChars = searchValue.indexOf('.') !== -1 || searchValue.indexOf('/') !== -1
        
        // Para valores com caracteres especiais (como "003.9.427074/2025"), usa apenas como string
        if (hasSpecialChars) {
          query.where = `${fieldName} = '${escapedValue}'`
        } else {
          // Se for um número simples, tenta como número e como string
          const isNumeric = !isNaN(parseFloat(searchValue)) && isFinite(parseFloat(searchValue))
          if (isNumeric) {
            query.where = `${fieldName} = ${searchValue} OR ${fieldName} = '${escapedValue}'`
          } else {
            query.where = `${fieldName} = '${escapedValue}'`
          }
        }
        
        query.returnGeometry = true

        // Executa a query
        layer.queryFeatures(query).then((results) => {
          if (results.features.length === 0) {
            // Se não encontrou, tenta com LIKE
            const likeQuery = layer.createQuery()
            likeQuery.where = `${fieldName} LIKE '%${escapedValue}%'`
            likeQuery.returnGeometry = true
            
            return layer.queryFeatures(likeQuery).then((likeResults) => {
              if (likeResults.features.length === 0) {
                alert(`Nenhum polígono encontrado com ${fieldName} = ${searchValue}`)
                this.setState({ loading: false })
                return
              }
              
              // Se encontrou com LIKE, usa o primeiro resultado
              const foundGraphic = likeResults.features[0]
              const actualValue = foundGraphic.attributes[fieldName]
              this.applyFilterAndZoom(layer, foundGraphic, fieldName, actualValue)
            })
          }

          // Se encontrou, aplica filtro e zoom
          const foundGraphic = results.features[0]
          const actualValue = foundGraphic.attributes[fieldName]
          this.applyFilterAndZoom(layer, foundGraphic, fieldName, actualValue)
        }).catch((error) => {
          console.error('Erro ao pesquisar features:', error)
          console.error('Detalhes do erro:', {
            message: error.message,
            details: error.details,
            fieldName: fieldName,
            searchValue: searchValue
          })
          
          // Tenta mostrar informações mais úteis
          let errorMessage = 'Erro ao pesquisar. '
          if (layer.fields && layer.fields.length > 0) {
            const fieldNames = layer.fields.map(f => f.name).join(', ')
            errorMessage += `\n\nCampos disponíveis: ${fieldNames}`
          }
          errorMessage += `\n\nVerifique se a coluna "${fieldName}" existe e se o valor "${searchValue}" está correto.`
          
          alert(errorMessage)
          this.setState({ loading: false })
        })
      }
      
      // Se a camada já está carregada, executa diretamente
      if (layer.loaded) {
        checkAndQuery()
      } else {
        // Aguarda a camada carregar
        layer.when(() => {
          checkAndQuery()
        }).catch((error) => {
          console.error('Erro ao carregar informações da camada:', error)
          alert('Erro ao carregar informações da camada. Verifique se a camada está acessível.')
          this.setState({ loading: false })
        })
      }
    })
  }

  // Função auxiliar para aplicar filtro e zoom
  applyFilterAndZoom = (layer, graphic, fieldName, actualValue) => {
    // Obtém o valor real do atributo do graphic
    const attributeValue = graphic.attributes[fieldName]
    
    // Se o valor não foi passado, usa o do atributo
    const valueToFilter = actualValue !== undefined ? actualValue : attributeValue
    
    // Escapa o valor para SQL (trata strings, números e null)
    let definitionExpression
    if (valueToFilter === null || valueToFilter === undefined) {
      definitionExpression = `${fieldName} IS NULL`
    } else if (typeof valueToFilter === 'number') {
      definitionExpression = `${fieldName} = ${valueToFilter}`
    } else {
      // É uma string, precisa escapar aspas simples
      const escapedValue = String(valueToFilter).replace(/'/g, "''")
      definitionExpression = `${fieldName} = '${escapedValue}'`
    }
    
    console.log(`Aplicando filtro: ${fieldName} = ${valueToFilter}`)
    console.log(`Definition Expression: ${definitionExpression}`)

    // Aplica o filtro na camada usando definitionExpression
    // Isso é o método correto para filtrar uma FeatureLayer e ocultar outros polígonos
    layer.definitionExpression = definitionExpression
    
    // Força a atualização imediata da camada para aplicar o filtro
    layer.refresh()
    
    console.log('Filtro aplicado. A camada deve mostrar APENAS o polígono selecionado')
    console.log('Definition Expression:', definitionExpression)
    
    // Aguarda um pouco para garantir que o filtro seja processado
    // Aguarda que a camada esteja completamente carregada antes de aplicar o filtro
    if (layer.loaded) {
      // A camada já está carregada, aplica o filtro diretamente
      // Aguarda um pouco para garantir que o filtro seja aplicado
      setTimeout(() => {
        // Verifica se o filtro foi aplicado
        if (layer.definitionExpression === definitionExpression) {
          console.log('Filtro confirmado na camada')
        }
        this.applyZoomAfterFilter(layer, graphic)
      }, 300)
    } else {
      // Aguarda a camada carregar primeiro
      layer.when(() => {
        // Aplica o filtro novamente após carregar (garantia)
        layer.definitionExpression = definitionExpression
        layer.refresh()
        setTimeout(() => {
          this.applyZoomAfterFilter(layer, graphic)
        }, 300)
      }).catch((error) => {
        console.error('Erro ao aguardar camada:', error)
        // Mesmo assim tenta aplicar o zoom
        this.applyZoomAfterFilter(layer, graphic)
      })
    }
  }

  // Função auxiliar para aplicar zoom após o filtro
  applyZoomAfterFilter = (layer, graphic) => {
    // Aguarda um pouco para garantir que o filtro seja processado pela camada
    // O definitionExpression precisa de tempo para ser processado
    setTimeout(() => {
      // Dá zoom no polígono encontrado com padding para não cortar
      if (graphic.geometry && this.state.jimuMapView && this.state.jimuMapView.view) {
        // Usa goTo com target e padding em pixels para controlar melhor o zoom
        // Padding de 50 pixels em cada lado para não cortar o polígono
        this.state.jimuMapView.view.goTo({
          target: graphic.geometry,
          padding: {
            left: 50,
            right: 50,
            top: 50,
            bottom: 50
          }
        }, {
          duration: 500
        }).then(() => {
          console.log('Zoom aplicado no polígono filtrado com padding')
          this.setState({ loading: false })
        }).catch((error) => {
          console.error('Erro ao dar zoom:', error)
          // Fallback: tenta zoom com extent calculado manualmente
          try {
            const extent = graphic.geometry.extent
            // Adiciona 10% de padding calculado a partir do tamanho do extent
            const paddingFactor = 0.1
            const width = extent.width
            const height = extent.height
            const paddedExtent = extent.expand(width * paddingFactor, height * paddingFactor)
            
            this.state.jimuMapView.view.goTo(paddedExtent, {
              duration: 500
            }).then(() => {
              console.log('Zoom aplicado usando extent com padding calculado')
              this.setState({ loading: false })
            }).catch((fallbackError) => {
              console.error('Erro no zoom de fallback:', fallbackError)
              this.setState({ loading: false })
            })
          } catch (calcError) {
            console.error('Erro ao calcular extent:', calcError)
            this.setState({ loading: false })
          }
        })
      } else {
        this.setState({ loading: false })
      }
    }, 500)
  }

  // Função para limpar o filtro
  handleClearFilter = () => {
    if (this.state.featureLayer) {
      // Remove o filtro definindo definitionExpression como vazio ou null
      this.state.featureLayer.definitionExpression = null
      this.state.featureLayer.refresh()
      console.log('Filtro removido - todos os alertas devem aparecer novamente')
      
      // Aguarda um pouco para garantir que o filtro seja removido
      setTimeout(() => {
        // Verifica se o filtro foi removido
        if (!this.state.featureLayer.definitionExpression || this.state.featureLayer.definitionExpression === '') {
          console.log('Filtro confirmado como removido')
        }
        
        // Restaura a visualização inicial do mapa
        if (this.state.jimuMapView && this.state.jimuMapView.view) {
          if (this.state.initialExtent) {
            // Restaura a extensão inicial salva
            this.state.jimuMapView.view.goTo(this.state.initialExtent, {
              duration: 500
            }).then(() => {
              console.log('Visualização inicial restaurada')
            }).catch((error) => {
              console.error('Erro ao restaurar visualização inicial:', error)
              // Se falhar, tenta fazer zoom para a camada completa
              if (this.state.featureLayer && this.state.featureLayer.fullExtent) {
                this.state.jimuMapView.view.goTo(this.state.featureLayer.fullExtent, {
                  duration: 500
                })
              }
            })
          } else {
            // Se não tiver extensão inicial salva, tenta fazer zoom para a camada completa
            if (this.state.featureLayer && this.state.featureLayer.fullExtent) {
              this.state.jimuMapView.view.goTo(this.state.featureLayer.fullExtent, {
                duration: 500
              }).then(() => {
                console.log('Zoom para camada completa aplicado')
              }).catch((error) => {
                console.error('Erro ao fazer zoom para camada completa:', error)
              })
            }
          }
        }
      }, 300)
      
      this.setState({
        ideaSearchInput: ''
      })
    }
  }

  // Função para gerar relatório usando a ferramenta de geoprocessamento
  handleGenerateReport = async () => {
    // Declara variáveis no escopo da função para que estejam acessíveis no catch
    let ideaNumber = ''
    let paramName = null
    let executeUrl = ''
    let token = null
    
    // Validações iniciais
    if (this.state.ideaSearchInput === '' || this.state.ideaSearchInput.trim() === '') {
      alert('Por favor, digite um número de idea para gerar o relatório.')
      return
    }

    ideaNumber = this.state.ideaSearchInput.trim()
    
    // Validação do formato do número de idea
    // Formato esperado: XXX.X.XXXXXX/YYYY (ex: 003.9.427384/2025)
    const ideaPattern = /^\d{1,3}\.\d{1,2}\.\d{1,6}\/\d{4}$/
    if (!ideaPattern.test(ideaNumber)) {
      console.warn('Formato do número de idea pode estar incorreto:', ideaNumber)
      console.warn('Formato esperado: XXX.X.XXXXXX/YYYY (ex: 003.9.427384/2025)')
      // Não bloqueia, apenas avisa no console
    }
    
    // Remove espaços extras e caracteres invisíveis
    ideaNumber = ideaNumber.replace(/\s+/g, '').trim()
    
    // Validação de comprimento mínimo
    if (ideaNumber.length < 10) {
      alert('O número de idea parece estar incompleto. Verifique o formato: XXX.X.XXXXXX/YYYY')
      return
    }
    
    console.log('=== VALIDAÇÃO DO VALOR ===')
    console.log('Valor original:', this.state.ideaSearchInput)
    console.log('Valor processado:', ideaNumber)
    console.log('Comprimento:', ideaNumber.length)
    console.log('Formato válido:', ideaPattern.test(ideaNumber))
    
    this.setState({ loading: true })

    try {
      console.log('Iniciando geração de relatório para idea:', ideaNumber)
      
      // Carrega IdentityManager para obter token de autenticação
      console.log('Carregando IdentityManager para autenticação...')
      const identityModules = await loadArcGISJSAPIModules([
        'esri/identity/IdentityManager'
      ])
      const [IdentityManager] = identityModules
      
      // Obtém o token para a URL do serviço (já declarado no início da função)
      try {
        const credential = IdentityManager.findCredential(this.GP_SERVICE_URL)
        if (credential && credential.token) {
          token = credential.token
          console.log('Token encontrado via IdentityManager')
        } else {
          // Tenta gerar token automaticamente
          const serverInfo = IdentityManager.findServerInfo(this.GP_SERVICE_URL)
          if (serverInfo) {
            console.log('Obtendo token automaticamente...')
            await IdentityManager.checkSignInStatus(this.GP_SERVICE_URL)
            const updatedCredential = IdentityManager.findCredential(this.GP_SERVICE_URL)
            if (updatedCredential && updatedCredential.token) {
              token = updatedCredential.token
              console.log('Token obtido automaticamente')
            }
          }
        }
      } catch (tokenError) {
        console.warn('Erro ao obter token, tentando sem autenticação:', tokenError)
      }
      
      // Função auxiliar para adicionar token às URLs
      const addTokenToUrl = (url) => {
        if (!token) {
          return url
        }
        try {
          const urlObj = new URL(url)
          urlObj.searchParams.set('token', token)
          return urlObj.toString()
        } catch (e) {
          // Se a URL não for absoluta, trata como string
          const separator = url.includes('?') ? '&' : '?'
          return `${url}${separator}token=${encodeURIComponent(token)}`
        }
      }
      
      // Primeiro, vamos obter informações sobre a task específica para descobrir os parâmetros
      // Tenta primeiro com a task relatorio_analise_lapa (que corresponde à URL fixa)
      console.log('Obtendo informações da task específica...')
      
      // Tenta primeiro com relatorio_analise_lapa (nome da task na URL fixa)
      const taskNameFromUrl = 'relatorio_analise_lapa'
      const taskNameEncoded = encodeURIComponent(taskNameFromUrl)
      let infoUrl = addTokenToUrl(`${this.GP_SERVICE_URL}/${taskNameEncoded}?f=json`)
      console.log('Tentando URL de informações da task (relatorio_analise_lapa):', infoUrl)
      
      // Se não funcionar, tenta com o nome original
      const fallbackTaskName = this.GP_TASK_NAME
      const fallbackTaskNameEncoded = encodeURIComponent(fallbackTaskName)
      const fallbackInfoUrl = addTokenToUrl(`${this.GP_SERVICE_URL}/${fallbackTaskNameEncoded}?f=json`)
      console.log('URL alternativa (fallback):', fallbackInfoUrl)
      
      // Tenta obter informações da task específica primeiro
      let gpInfo
      try {
        let taskInfoResponse = await fetch(infoUrl)
        if (!taskInfoResponse.ok) {
          // Se falhar, tenta com o nome alternativo
          console.warn(`Não foi possível obter informações da task ${taskNameFromUrl}, tentando com ${fallbackTaskName}...`)
          taskInfoResponse = await fetch(fallbackInfoUrl)
        }
        
        if (taskInfoResponse.ok) {
          gpInfo = await taskInfoResponse.json()
          console.log('Informações da task específica obtidas com sucesso')
          console.log('Informações completas da task:', JSON.stringify(gpInfo, null, 2))
        } else {
          // Se falhar, tenta da GP geral
          console.warn('Não foi possível obter informações da task, tentando da GP geral...')
          const gpInfoUrl = addTokenToUrl(`${this.GP_SERVICE_URL}?f=json`)
          const gpInfoResponse = await fetch(gpInfoUrl)
          
          if (!gpInfoResponse.ok) {
            throw new Error(`Erro ao obter informações: ${taskInfoResponse.status} ${taskInfoResponse.statusText}`)
          }
          
          gpInfo = await gpInfoResponse.json()
          console.log('Usando informações da GP geral')
          console.log('Informações completas da GP:', JSON.stringify(gpInfo, null, 2))
        }
      } catch (infoError) {
        // Se falhar, tenta da GP geral
        console.warn('Erro ao obter informações da task, tentando da GP geral...', infoError)
        try {
          const gpInfoUrl = addTokenToUrl(`${this.GP_SERVICE_URL}?f=json`)
          const gpInfoResponse = await fetch(gpInfoUrl)
          
          if (!gpInfoResponse.ok) {
            throw new Error(`Erro ao obter informações da GP geral: ${gpInfoResponse.status} ${gpInfoResponse.statusText}`)
          }
          
          gpInfo = await gpInfoResponse.json()
          console.log('Usando informações da GP geral (fallback)')
          console.log('Informações completas da GP:', JSON.stringify(gpInfo, null, 2))
        } catch (fallbackError) {
          console.error('Erro ao obter informações da GP geral:', fallbackError)
          throw new Error(`Não foi possível acessar a ferramenta de geoprocessamento. Verifique se a URL está correta e acessível.`)
        }
      }
      
      // Verifica se gpInfo foi obtido corretamente
      if (!gpInfo) {
        console.error('gpInfo está vazio ou undefined')
        throw new Error('Não foi possível obter informações da ferramenta de geoprocessamento.')
      }
      
      // Descobre qual é o parâmetro de entrada da GP
      // IMPORTANTE: Devemos usar exatamente o nome do parâmetro que a GP espera
      // O widget recebe o valor da coluna "idea", mas envia com o nome que a GP espera
      let paramName = null
      let paramInfo = null
      
      // Log da estrutura recebida para debug
      console.log('=== ESTRUTURA DA RESPOSTA DA GP ===')
      console.log('gpInfo existe?', !!gpInfo)
      console.log('gpInfo.parameters existe?', !!gpInfo.parameters)
      console.log('gpInfo.parameters é array?', Array.isArray(gpInfo.parameters))
      console.log('Estrutura completa de gpInfo:', JSON.stringify(gpInfo, null, 2))
      
      if (gpInfo.parameters && Array.isArray(gpInfo.parameters)) {
        console.log('=== PARÂMETROS DISPONÍVEIS NA GP ===')
        const allParams = gpInfo.parameters.map(p => ({
          name: p.name,
          displayName: p.displayName || p.name,
          dataType: p.dataType,
          direction: p.direction,
          parameterType: p.parameterType,
          required: p.parameterType === 'esriGPParameterTypeRequired' || p.required === true
        }))
        console.log('Todos os parâmetros:', JSON.stringify(allParams, null, 2))
        
        // Procura pelo primeiro parâmetro de entrada (input)
        const inputParams = gpInfo.parameters.filter(p => 
          (p.direction === 'esriGPParameterDirectionInput' || p.direction === 'GPParameterDirectionInput') &&
          p.name
        )
        
        console.log('Parâmetros de entrada encontrados:', inputParams.map(p => ({
          name: p.name,
          displayName: p.displayName || p.name,
          dataType: p.dataType,
          required: p.parameterType === 'esriGPParameterTypeRequired' || p.required === true
        })))
        
        if (inputParams.length > 0) {
          // Usa o primeiro parâmetro de entrada (que é o que a GP espera)
          paramInfo = inputParams[0]
          paramName = paramInfo.name // Usa exatamente o nome que a GP espera (pode ter caracteres especiais)
          console.log('=== PARÂMETRO SELECIONADO ===')
          console.log('Nome técnico do parâmetro (será usado no request):', paramName)
          console.log('Nome de exibição (label na interface):', paramInfo.displayName || paramInfo.name)
          console.log('Detalhes completos:', {
            name: paramInfo.name,
            displayName: paramInfo.displayName || paramInfo.name,
            dataType: paramInfo.dataType,
            direction: paramInfo.direction,
            required: paramInfo.parameterType === 'esriGPParameterTypeRequired' || paramInfo.required === true
          })
        } else {
          console.error('Nenhum parâmetro de entrada encontrado na GP!')
          throw new Error('Não foi possível identificar o parâmetro de entrada da ferramenta de geoprocessamento.')
        }
      } else {
        console.error('Não foi possível obter parâmetros da GP!')
        console.error('Estrutura de gpInfo recebida:', JSON.stringify(gpInfo, null, 2))
        console.error('gpInfo.parameters:', gpInfo.parameters)
        console.error('Tipo de gpInfo.parameters:', typeof gpInfo.parameters)
        
        // Tenta usar a task específica diretamente se não conseguir obter parâmetros
        if (gpInfo.tasks && Array.isArray(gpInfo.tasks) && gpInfo.tasks.length > 0) {
          console.warn('Tentando usar informações da primeira task disponível...')
          const firstTask = gpInfo.tasks[0]
          if (firstTask.parameters && Array.isArray(firstTask.parameters)) {
            gpInfo.parameters = firstTask.parameters
            // Tenta novamente com os parâmetros da task
            const inputParams = gpInfo.parameters.filter(p => 
              (p.direction === 'esriGPParameterDirectionInput' || p.direction === 'GPParameterDirectionInput') &&
              p.name
            )
            if (inputParams.length > 0) {
              paramInfo = inputParams[0]
              paramName = paramInfo.name
              console.log('Usando parâmetros da task:', paramName)
            }
          }
        }
        
        if (!paramName) {
          throw new Error('Não foi possível obter informações dos parâmetros da ferramenta de geoprocessamento. Verifique se a ferramenta está configurada corretamente.')
        }
      }
      
      // Confirma qual parâmetro será usado (deve ser exatamente o que a GP espera)
      console.log('=== PARÂMETRO PARA ENVIAR À GP ===')
      console.log('Nome do parâmetro (exatamente como a GP espera):', paramName)
      console.log('Valor que será enviado (da coluna idea do widget):', ideaNumber)
      console.log('Detalhes completos do parâmetro:', paramInfo)
      
      // Verifica o tipo do parâmetro para formatar corretamente
      let paramValue = ideaNumber
      if (paramInfo) {
        console.log('Tipo de dado do parâmetro:', paramInfo.dataType)
        console.log('Tipo de parâmetro:', paramInfo.parameterType)
        
        // Se o parâmetro for do tipo GPString ou similar, envia como string
        // Se for URL ou outro tipo complexo, pode precisar de formato diferente
        if (paramInfo.dataType === 'GPString' || paramInfo.dataType === 'esriGPTypeString') {
          paramValue = String(ideaNumber)
        } else if (paramInfo.dataType === 'GPDouble' || paramInfo.dataType === 'esriGPTypeDouble' || 
                   paramInfo.dataType === 'GPLong' || paramInfo.dataType === 'esriGPTypeLong') {
          // Se for numérico, tenta converter
          const numValue = parseFloat(ideaNumber)
          if (!isNaN(numValue)) {
            paramValue = numValue
          }
        }
      }
      
      // Prepara os parâmetros para a execução
      // IMPORTANTE: f=json vai na URL, não no body
      // Apenas os parâmetros da GP vão no body
      const params = {
        [paramName]: paramValue
      }
      
      console.log('=== PARÂMETROS PARA ENVIAR ===')
      console.log('Parâmetros preparados (para o body):', params)
      console.log('Valor do parâmetro:', paramValue, 'Tipo:', typeof paramValue)
      console.log('Nome do parâmetro (exato):', paramName)
      console.log('Nome do parâmetro (JSON):', JSON.stringify(paramName))
      
      // Formata os parâmetros como form-urlencoded
      const formData = new URLSearchParams()
      
      // Adiciona os parâmetros (exceto f=json que vai na URL)
      // IMPORTANTE: Usa o nome exato do parâmetro como está na GP (pode ter caracteres especiais)
      console.log('=== PREPARANDO FORM DATA ===')
      Object.keys(params).forEach(key => {
        if (key !== 'f') {
          const paramKey = key // Usa exatamente o nome que veio da GP (ex: "N° IDEA", "valor_alerta", etc.)
          const paramVal = String(params[key])
          formData.append(paramKey, paramVal)
          console.log(`Parâmetro adicionado: nome="${paramKey}" valor="${paramVal}"`)
          console.log(`  - Nome (JSON): ${JSON.stringify(paramKey)}`)
          console.log(`  - Nome (bytes): ${Array.from(paramKey).map(c => c.charCodeAt(0)).join(',')}`)
          console.log(`  - Valor (JSON): ${JSON.stringify(paramVal)}`)
        }
      })
      
      const formDataString = formData.toString()
      console.log('FormData completo (string):', formDataString)
      console.log('FormData completo (URL decoded):', decodeURIComponent(formDataString))
      
      // Adiciona token ao body
      if (token) {
        formData.append('token', token)
        console.log('Token adicionado ao body')
      }
      
      // Função auxiliar para fazer a requisição
      const makeExecuteRequest = async (url) => {
        // Adiciona token na URL também (alguns servidores ArcGIS exigem isso)
        let finalUrl = url
        if (token) {
          const urlWithToken = new URL(url)
          urlWithToken.searchParams.set('token', token)
          urlWithToken.searchParams.set('f', 'json')
          finalUrl = urlWithToken.toString()
        } else {
          // Se não tiver token, adiciona apenas f=json
          const urlObj = new URL(url)
          urlObj.searchParams.set('f', 'json')
          finalUrl = urlObj.toString()
        }
        
        console.log('Tentando URL:', finalUrl)
        console.log('Body (formData):', formData.toString())
        console.log('Token presente:', !!token)
        console.log('Parâmetros enviados:', Object.keys(params))
        
        const response = await fetch(finalUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: formData
        })
        
        return response
      }
      
      // Verifica se a task é assíncrona para decidir qual endpoint usar
      const isAsync = gpInfo.executionType === 'esriExecutionTypeAsynchronous'
      console.log('=== TENTANDO EXECUTAR GP ===')
      console.log('Tipo de execução:', gpInfo.executionType)
      console.log('É assíncrona?', isAsync)
      console.log('Tentando primeiro com task específica:', this.GP_TASK_NAME)
      console.log('Parâmetro que será enviado:', paramName)
      console.log('Valor que será enviado:', ideaNumber)
      
      // Se for assíncrona, usa submitJob; caso contrário, usa execute
      if (isAsync) {
        executeUrl = this.GP_SUBMIT_JOB_URL
        console.log('Usando endpoint /submitJob (tarefa assíncrona):', executeUrl)
      } else {
        executeUrl = `${this.GP_SERVICE_URL}/${taskNameEncoded}/execute`
        console.log('Usando endpoint /execute (tarefa síncrona):', executeUrl)
      }
      
      let executeResponse = await makeExecuteRequest(executeUrl)
      
      // Se der erro 500, pode ser que o endpoint da task específica não exista
      // Tenta com o endpoint da GP raiz
      if (!executeResponse.ok) {
        let resultText = await executeResponse.text()
        console.warn('Primeira tentativa falhou. Status:', executeResponse.status)
        console.warn('Resposta (primeiros 500 chars):', resultText.substring(0, 500))
        
        try {
          const resultJson = JSON.parse(resultText)
          if (resultJson.error && resultJson.error.code === 500) {
            console.warn('Erro 500 com task específica, tentando com endpoint da GP raiz...')
            // Tenta com o endpoint raiz usando o mesmo tipo (submitJob ou execute)
            if (isAsync) {
              executeUrl = this.GP_SUBMIT_JOB_URL
              console.log('Tentando com endpoint da GP raiz (submitJob):', executeUrl)
            } else {
              executeUrl = `${this.GP_SERVICE_URL}/execute`
              console.log('Tentando com endpoint da GP raiz (execute):', executeUrl)
            }
            executeResponse = await makeExecuteRequest(executeUrl)
          }
        } catch (e) {
          console.error('Erro ao parsear resposta:', e)
          // Se não conseguir parsear, continua com o erro original
        }
      }
      
      // Lê a resposta mesmo se não for OK para ver o erro detalhado
      let result
      try {
        result = await executeResponse.json()
        console.log('Resposta do execute (JSON):', JSON.stringify(result, null, 2))
      } catch (jsonError) {
        // Se não conseguir ler como JSON, lê como texto
        const textResponse = await executeResponse.text()
        console.error('Resposta não é JSON:', textResponse)
        console.error('Status HTTP:', executeResponse.status, executeResponse.statusText)
        throw new Error(`Erro ao executar tarefa: ${executeResponse.status} ${executeResponse.statusText} - Resposta: ${textResponse.substring(0, 500)}`)
      }
      
      if (!executeResponse.ok) {
        // Se a resposta tem um erro no JSON, usa ele
        if (result.error) {
          console.error('=== ERRO DETALHADO DA GP ===')
          console.error('Código do erro:', result.error.code)
          console.error('Mensagem:', result.error.message)
          console.error('Detalhes:', result.error.details)
          console.error('Erro completo:', JSON.stringify(result.error, null, 2))
          
          // Mensagem de erro mais amigável
          let errorMessage = 'Erro ao executar a ferramenta de geoprocessamento.\n\n'
          
          if (result.error.code === 500) {
            errorMessage += 'Erro interno do servidor (500).\n\n'
            errorMessage += 'Possíveis causas:\n'
            errorMessage += '1. O número de idea pode não existir no servidor\n'
            errorMessage += '2. Problema no processamento da ferramenta\n'
            errorMessage += '3. O servidor pode estar temporariamente indisponível\n\n'
            errorMessage += `Valor enviado: ${ideaNumber}\n`
            errorMessage += `Parâmetro usado: ${paramName}\n\n`
            errorMessage += 'Verifique:\n'
            errorMessage += '- Se o número de idea está correto\n'
            errorMessage += '- Se o valor existe na camada de alertas\n'
            errorMessage += '- Abra o console (F12) para mais detalhes'
          } else {
            errorMessage += `Código: ${result.error.code}\n`
            errorMessage += `Mensagem: ${result.error.message}\n\n`
            if (result.error.details && result.error.details.length > 0) {
              errorMessage += `Detalhes: ${result.error.details.join(', ')}\n\n`
            }
          }
          
          alert(errorMessage)
          throw new Error(`Erro na GP: ${JSON.stringify(result.error)}`)
        }
        // Se não tiver campo error, mas o status não é OK, mostra o resultado completo
        console.error('Erro HTTP:', executeResponse.status, executeResponse.statusText)
        console.error('Resposta completa:', result)
        alert(`Erro ao executar tarefa: ${executeResponse.status} ${executeResponse.statusText}\n\nVerifique o console (F12) para mais detalhes.`)
        throw new Error(`Erro ao executar tarefa: ${executeResponse.status} ${executeResponse.statusText} - ${JSON.stringify(result)}`)
      }
      
      // Verifica se a resposta contém um jobId (tarefa assíncrona)
      // Para tarefas assíncronas, submitJob sempre retorna jobId
      if (result.jobId || isAsync) {
        const jobId = result.jobId
        if (!jobId) {
          throw new Error('Tarefa assíncrona mas não recebeu jobId na resposta')
        }
        console.log('Tarefa assíncrona detectada. Job ID:', jobId)
        
        // Polling do status do job
        let attempts = 0
        const maxAttempts = 60
        let jobStatus = null
        
        while (attempts < maxAttempts) {
          await new Promise(resolve => setTimeout(resolve, 1000))
          
          // URL para verificar status do job
          // Usa a mesma URL base que funcionou (pode ser submitJob ou execute)
          const baseUrl = executeUrl.replace('/submitJob', '').replace('/execute', '')
          const statusUrl = token 
            ? `${baseUrl}/jobs/${jobId}?token=${token}&f=json`
            : `${baseUrl}/jobs/${jobId}?f=json`
          
          console.log('Verificando status do job:', statusUrl)
          const statusResponse = await fetch(statusUrl)
          
          if (!statusResponse.ok) {
            throw new Error(`Erro ao verificar status do job: ${statusResponse.status}`)
          }
          
          jobStatus = await statusResponse.json()
          console.log(`Status do job (tentativa ${attempts + 1}):`, jobStatus.jobStatus)
          
          if (jobStatus.jobStatus === 'esriJobSucceeded') {
            // Obtém os resultados
            // Usa a mesma URL base que funcionou (pode ser submitJob ou execute)
            const baseUrl = executeUrl.replace('/submitJob', '').replace('/execute', '')
            const resultUrl = token
              ? `${baseUrl}/jobs/${jobId}/results?token=${token}&f=json`
              : `${baseUrl}/jobs/${jobId}/results?f=json`
            
            const resultResponse = await fetch(resultUrl)
            
            if (!resultResponse.ok) {
              throw new Error(`Erro ao obter resultados: ${resultResponse.status}`)
            }
            
            result = await resultResponse.json()
            console.log('Resultado da execução assíncrona:', result)
            break
          } else if (jobStatus.jobStatus === 'esriJobFailed') {
            throw new Error(`Job falhou: ${jobStatus.messages ? JSON.stringify(jobStatus.messages) : 'Erro desconhecido'}`)
          } else if (jobStatus.jobStatus === 'esriJobCancelled') {
            throw new Error('Job foi cancelado')
          }
          
          attempts++
        }
        
        if (attempts >= maxAttempts) {
          throw new Error('Timeout: O job demorou mais de 60 segundos para completar')
        }
      } else {
        // Tarefa síncrona - resultado já está disponível
        console.log('Tarefa síncrona - resultado já disponível')
      }
      
      console.log('Resultado completo da GP:', JSON.stringify(result, null, 2))

      // Processa o resultado - procura pela URL do HTML
      let htmlUrl = null

      // Para tarefas assíncronas, os resultados podem estar em uma estrutura diferente
      // Primeiro, verifica se há erros
      if (result.error) {
        console.error('Erro encontrado no resultado:', result.error)
        throw new Error(`Erro na GP: ${JSON.stringify(result.error)}`)
      }

      // Procura em result.results (estrutura comum para tarefas síncronas)
      if (result.results && Array.isArray(result.results)) {
        for (const resultItem of result.results) {
          // O resultado pode estar diretamente no resultItem ou em resultItem.value
          const value = resultItem.value !== undefined ? resultItem.value : resultItem
          
          if (typeof value === 'string' && value.includes('.html')) {
            htmlUrl = value
            break
          } else if (value && typeof value === 'object') {
            // Procura por propriedades comuns que contêm URLs
            if (value.url && typeof value.url === 'string' && value.url.includes('.html')) {
              htmlUrl = value.url
              break
            } else if (value.pathUrl && typeof value.pathUrl === 'string') {
              htmlUrl = value.pathUrl
              break
            } else if (value.value && typeof value.value === 'string' && value.value.includes('.html')) {
              htmlUrl = value.value
              break
            }
          }
        }
      }

      // Para tarefas assíncronas, os resultados podem estar em result.results como objeto
      if (!htmlUrl && result.results && typeof result.results === 'object' && !Array.isArray(result.results)) {
        // Itera sobre as propriedades do objeto results
        for (const key in result.results) {
          const resultItem = result.results[key]
          if (resultItem && resultItem.value) {
            const value = resultItem.value
            if (typeof value === 'string' && value.includes('.html')) {
              htmlUrl = value
              break
            } else if (value.url && typeof value.url === 'string' && value.url.includes('.html')) {
              htmlUrl = value.url
              break
            } else if (value.pathUrl && typeof value.pathUrl === 'string') {
              htmlUrl = value.pathUrl
              break
            }
          }
        }
      }

      // Procura em outras propriedades do resultado
      if (!htmlUrl && result.outputUrl) {
        htmlUrl = result.outputUrl
      }
      if (!htmlUrl && result.url) {
        htmlUrl = result.url
      }
      if (!htmlUrl && result.fileUrl) {
        htmlUrl = result.fileUrl
      }
      if (!htmlUrl && result.outputFile) {
        htmlUrl = result.outputFile
      }

      // Busca por regex em todo o objeto (último recurso)
      if (!htmlUrl) {
        const resultString = JSON.stringify(result)
        const urlMatch = resultString.match(/https?:\/\/[^\s"<>]+\.html/g)
        if (urlMatch && urlMatch.length > 0) {
          htmlUrl = urlMatch[0]
        }
      }

      if (htmlUrl) {
        console.log('URL do HTML encontrada:', htmlUrl)
        // Abre o HTML em uma nova guia
        window.open(htmlUrl, '_blank')
        this.setState({ loading: false })
      } else {
        // Se não encontrou a URL, mostra o resultado completo para debug
        console.warn('Não foi possível encontrar a URL do HTML no resultado:', result)
        console.warn('Resultado completo:', JSON.stringify(result, null, 2))
        alert('Relatório gerado, mas não foi possível encontrar a URL do HTML. Verifique o console do navegador (F12) para ver os detalhes do resultado.')
        this.setState({ loading: false })
      }
    } catch (error) {
      console.error('=== ERRO COMPLETO AO EXECUTAR GP ===')
      console.error('Erro:', error)
      console.error('Mensagem:', error.message)
      console.error('Stack trace:', error.stack)
      console.error('Tipo do erro:', error.constructor.name)
      
      // Informações de contexto para debug
      console.error('=== CONTEXTO DO ERRO ===')
      console.error('Valor enviado:', ideaNumber)
      console.error('Parâmetro usado:', paramName)
      console.error('URL tentada:', executeUrl)
      console.error('Token presente:', !!token)

      let errorMessage = 'Erro ao gerar relatório.\n\n'

      if (error.message) {
        // Remove informações técnicas muito longas para o usuário
        let cleanMessage = error.message
        if (cleanMessage.length > 200) {
          cleanMessage = cleanMessage.substring(0, 200) + '...'
        }
        errorMessage += `Mensagem: ${cleanMessage}\n\n`
      }

      if (error.details && Array.isArray(error.details) && error.details.length > 0) {
        errorMessage += `Detalhes: ${error.details[0]}\n\n`
      }

      errorMessage += 'Verifique:\n'
      errorMessage += `1. Se o número de idea "${ideaNumber}" está correto\n`
      errorMessage += '2. Se o valor existe na camada de alertas_regional_lapa\n'
      errorMessage += '3. Se a ferramenta de geoprocessamento está acessível\n'
      errorMessage += '4. Abra o console do navegador (F12) para mais detalhes técnicos\n\n'
      errorMessage += 'Dica: Tente usar o botão "Filtrar" primeiro para verificar se o número existe.'

      alert(errorMessage)
      this.setState({ loading: false })
    }
  }

  render () {
    const style = css`
      .widget-container {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      form > div {
        display: flex;
        gap: 8px;
        justify-content: space-between;
        input {
          flex: 1;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 20px;
        }
        button {
          min-width: 100px;
          padding: 8px 16px;
          border: none;
          border-radius: 20px;
          background-color: #266640;
          color: white;
          cursor: pointer;
          &:hover {
            background-color: #1e4f32;
          }
          &:disabled {
            background-color: #ccc;
            cursor: not-allowed;
          }
        }
      }
      .report-button {
        background-color: #266640;
        color: white;
        border: none;
        border-radius: 20px;
        padding: 8px 16px;
        cursor: pointer !important;
        transition: all 0.2s ease;
        pointer-events: auto;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        &:hover:not(:disabled) {
          background-color: #1e4f32;
          cursor: pointer !important;
        }
        &:active:not(:disabled) {
          cursor: pointer !important;
        }
        &:focus:not(:disabled) {
          cursor: pointer !important;
        }
        &:disabled {
          background-color: #ccc;
          color: #9e9e9e;
          cursor: not-allowed !important;
          opacity: 0.6;
          pointer-events: none;
        }
        &:not(:disabled) {
          cursor: pointer !important;
        }
      }
      .spinner {
        display: inline-block;
        width: 16px;
        height: 16px;
        border: 2px solid rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        border-top-color: white;
        animation: spin 0.8s linear infinite;
      }
      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }
      .clear-button {
        background-color: #e0e0e0;
        color: #424242;
        border: none;
        border-radius: 20px;
        padding: 8px 16px;
        cursor: pointer;
        transition: all 0.2s ease;
        &:hover {
          background-color: #bdbdbd;
          color: #212121;
        }
        &:disabled {
          background-color: #f5f5f5;
          color: #9e9e9e;
          cursor: not-allowed;
        }
      }
      .status-message {
        padding: 8px;
        background-color: #e7f3ff;
        border-radius: 4px;
        font-size: 14px;
      }
      .loading {
        color: #0079c1;
      }
    `
    return (
      <div className="widget-filtrar-e-gerar-relatorio jimu-widget p-2" css={style}>
        {this.props.hasOwnProperty('useMapWidgetIds') &&
          this.props.useMapWidgetIds &&
          this.props.useMapWidgetIds.length === 1 && (
            <JimuMapViewComponent
              useMapWidgetId={this.props.useMapWidgetIds?.[0]}
              onActiveViewChange={(jmv: JimuMapView) => {
                this.setState({
                  jimuMapView: jmv
                })
              }}
            />
        )}

        <div className="widget-container">
          <p>{defaultMessages.instructions}</p>


          <form onSubmit={this.handleFilterAndZoom}>
            <div>
              <input
                type="text"
                placeholder={defaultMessages.searchIdea}
                value={this.state.ideaSearchInput}
                onChange={this.handleIdeaSearchInputChange}
                disabled={!this.state.featureLayer || this.state.loading}
              />
              <button 
                type="submit"
                disabled={!this.state.featureLayer || this.state.loading}
              >
                {defaultMessages.filterAndZoom}
              </button>
            </div>
          </form>

          {this.state.featureLayer && (
            <>
              <button
                className="report-button"
                onClick={this.handleGenerateReport}
                disabled={this.state.loading || !this.state.ideaSearchInput || this.state.ideaSearchInput.trim() === ''}
                title={this.state.loading || !this.state.ideaSearchInput || this.state.ideaSearchInput.trim() === '' 
                  ? 'Digite um número de idea para gerar o relatório' 
                  : 'Gerar relatório para o número de idea informado'}
              >
                {this.state.loading && <span className="spinner"></span>}
                {defaultMessages.generateReport}
              </button>
              <button
                className="clear-button"
                onClick={this.handleClearFilter}
                disabled={this.state.loading}
              >
                {defaultMessages.clearFilter}
              </button>
            </>
          )}
        </div>
      </div>
    )
  }
}
