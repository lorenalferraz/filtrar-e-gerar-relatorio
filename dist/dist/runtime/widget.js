System.register(["jimu-core","jimu-arcgis"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_arcgis__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./your-extensions/widgets/filtrar-e-gerar-relatorio/src/runtime/translations/default.ts":
/*!***********************************************************************************************!*\
  !*** ./your-extensions/widgets/filtrar-e-gerar-relatorio/src/runtime/translations/default.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    _widgetLabel: 'Filtrar e Gerar Relatório',
    addLayer: 'Adicionar Camada',
    featureServiceUrl: 'URL do Feature Service',
    instructions: 'Digite o nº IDEA',
    searchIdea: 'Pesquisar por número (idea)',
    filterAndZoom: 'Filtrar',
    generateReport: 'Gerar Relatório',
    clearFilter: 'Limpar Filtro',
    loading: 'Carregando...',
    layerLoaded: 'Camada carregada com sucesso!'
});


/***/ }),

/***/ "jimu-arcgis":
/*!******************************!*\
  !*** external "jimu-arcgis" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_arcgis__;

/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**********************************************************************************!*\
  !*** ./your-extensions/widgets/filtrar-e-gerar-relatorio/src/runtime/widget.tsx ***!
  \**********************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-arcgis */ "jimu-arcgis");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translations/default */ "./your-extensions/widgets/filtrar-e-gerar-relatorio/src/runtime/translations/default.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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



class Widget extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            ideaSearchInput: '',
            jimuMapView: null,
            featureLayer: null,
            loading: false,
            initialExtent: null
        };
        // URL fixa da camada
        this.FEATURE_SERVICE_URL = 'https://meioambiente.sistemas.mpba.mp.br/server/rest/services/Hosted/alertas_regional_lapa/FeatureServer';
        // URL da ferramenta de geoprocessamento
        this.GP_SERVICE_URL = 'https://meioambiente.sistemas.mpba.mp.br/server/rest/services/testeoutput/processaralerta_idea/GPServer';
        // URL fixa do submitJob
        this.GP_SUBMIT_JOB_URL = 'https://meioambiente.sistemas.mpba.mp.br/server/rest/services/testeoutput/processaralerta_idea/GPServer/relatorio_analise_lapa/submitJob';
        // Nome da task específica dentro da GP
        this.GP_TASK_NAME = 'Processamento de alertas';
        // Função chamada quando o valor da pesquisa muda
        this.handleIdeaSearchInputChange = (event) => {
            this.setState({
                ideaSearchInput: event.target.value
            });
        };
        // Carrega a camada automaticamente quando o componente é montado ou o mapa está disponível
        this.componentDidUpdate = (prevProps, prevState) => {
            if (this.state.jimuMapView && !this.state.featureLayer && !prevState.jimuMapView) {
                // Salva a visualização inicial quando o mapa é detectado pela primeira vez
                if (this.state.jimuMapView.view && !this.state.initialExtent) {
                    const currentExtent = this.state.jimuMapView.view.extent;
                    if (currentExtent) {
                        this.setState({
                            initialExtent: currentExtent.clone()
                        });
                    }
                }
                this.loadFeatureLayer();
            }
        };
        // Carrega a camada de feature service
        this.loadFeatureLayer = () => {
            if (!this.state.jimuMapView) {
                return;
            }
            this.setState({ loading: true });
            (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)([
                'esri/layers/FeatureLayer',
                'esri/geometry/SpatialReference'
            ]).then((modules) => {
                [this.FeatureLayer, this.SpatialReference] = modules;
                // Cria a camada com a URL fixa
                const layer = new this.FeatureLayer({
                    url: this.FEATURE_SERVICE_URL
                });
                // Adiciona a camada ao mapa
                this.state.jimuMapView.view.map.add(layer);
                // Aguarda a camada ser criada
                layer.on('layerview-create', () => {
                    // Salva a visualização inicial do mapa se ainda não foi salva
                    if (!this.state.initialExtent && this.state.jimuMapView && this.state.jimuMapView.view) {
                        const currentExtent = this.state.jimuMapView.view.extent;
                        if (currentExtent) {
                            this.setState({
                                featureLayer: layer,
                                loading: false,
                                initialExtent: currentExtent.clone()
                            });
                        }
                        else {
                            this.setState({
                                featureLayer: layer,
                                loading: false
                            });
                        }
                    }
                    else {
                        this.setState({
                            featureLayer: layer,
                            loading: false
                        });
                    }
                });
                layer.on('layerview-create-error', () => {
                    console.error('Erro ao carregar a camada');
                    this.setState({ loading: false });
                });
            });
        };
        // Função para filtrar e dar zoom no polígono baseado na pesquisa
        this.handleFilterAndZoom = (evt) => __awaiter(this, void 0, void 0, function* () {
            evt.preventDefault();
            // Casos de erro
            if (!this.state.jimuMapView) {
                alert('Por favor, configure um mapa no widget.');
                return;
            }
            if (!this.state.featureLayer) {
                alert('A camada ainda não foi carregada. Aguarde...');
                return;
            }
            if (this.state.ideaSearchInput === '' || this.state.ideaSearchInput.trim() === '') {
                alert('Por favor, digite um número para pesquisar na coluna idea.');
                return;
            }
            this.setState({ loading: true });
            // Carrega os módulos necessários
            (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)([
                'esri/layers/FeatureLayer',
                'esri/geometry/SpatialReference'
            ]).then((modules) => {
                [this.FeatureLayer, this.SpatialReference] = modules;
                const layer = this.state.featureLayer;
                const searchValue = this.state.ideaSearchInput.trim();
                // Escapa aspas simples para evitar SQL injection
                const escapedValue = searchValue.replace(/'/g, "''");
                // Verifica se a camada está carregada e obtém informações dos campos
                // Aguarda a camada estar completamente carregada
                const checkAndQuery = () => {
                    // Lista de possíveis nomes de coluna (case-insensitive)
                    const possibleFieldNames = ['idea', 'IDEA', 'Idea', 'ID', 'id', 'Id'];
                    let fieldName = 'idea'; // Padrão
                    // Tenta encontrar o campo correto
                    if (layer.fields && layer.fields.length > 0) {
                        const foundField = layer.fields.find(field => possibleFieldNames.includes(field.name));
                        if (foundField) {
                            fieldName = foundField.name;
                        }
                        else {
                            // Se não encontrar, tenta fazer uma busca case-insensitive
                            const caseInsensitiveField = layer.fields.find(field => field.name.toLowerCase() === 'idea');
                            if (caseInsensitiveField) {
                                fieldName = caseInsensitiveField.name;
                            }
                            else {
                                // Log dos campos disponíveis para debug
                                console.log('Campos disponíveis na camada:', layer.fields.map(f => f.name));
                                // Tenta usar o primeiro campo que parece ser um ID
                                const idField = layer.fields.find(field => field.type === 'esriFieldTypeString' || field.type === 'esriFieldTypeInteger' || field.type === 'esriFieldTypeDouble');
                                if (idField) {
                                    fieldName = idField.name;
                                    console.log(`Usando campo: ${fieldName}`);
                                }
                            }
                        }
                    }
                    // Cria uma query para buscar o polígono pela coluna
                    // Usa LIKE para busca mais flexível e trata como string
                    const query = layer.createQuery();
                    // Tenta diferentes abordagens de query
                    // 1. Busca exata como string
                    // 2. Busca com LIKE para valores parciais
                    // 3. Busca como número (se o valor for numérico)
                    const hasSpecialChars = searchValue.indexOf('.') !== -1 || searchValue.indexOf('/') !== -1;
                    // Para valores com caracteres especiais (como "003.9.427074/2025"), usa apenas como string
                    if (hasSpecialChars) {
                        query.where = `${fieldName} = '${escapedValue}'`;
                    }
                    else {
                        // Se for um número simples, tenta como número e como string
                        const isNumeric = !isNaN(parseFloat(searchValue)) && isFinite(parseFloat(searchValue));
                        if (isNumeric) {
                            query.where = `${fieldName} = ${searchValue} OR ${fieldName} = '${escapedValue}'`;
                        }
                        else {
                            query.where = `${fieldName} = '${escapedValue}'`;
                        }
                    }
                    query.returnGeometry = true;
                    // Executa a query
                    layer.queryFeatures(query).then((results) => {
                        if (results.features.length === 0) {
                            // Se não encontrou, tenta com LIKE
                            const likeQuery = layer.createQuery();
                            likeQuery.where = `${fieldName} LIKE '%${escapedValue}%'`;
                            likeQuery.returnGeometry = true;
                            return layer.queryFeatures(likeQuery).then((likeResults) => {
                                if (likeResults.features.length === 0) {
                                    alert(`Nenhum polígono encontrado com ${fieldName} = ${searchValue}`);
                                    this.setState({ loading: false });
                                    return;
                                }
                                // Se encontrou com LIKE, usa o primeiro resultado
                                const foundGraphic = likeResults.features[0];
                                const actualValue = foundGraphic.attributes[fieldName];
                                this.applyFilterAndZoom(layer, foundGraphic, fieldName, actualValue);
                            });
                        }
                        // Se encontrou, aplica filtro e zoom
                        const foundGraphic = results.features[0];
                        const actualValue = foundGraphic.attributes[fieldName];
                        this.applyFilterAndZoom(layer, foundGraphic, fieldName, actualValue);
                    }).catch((error) => {
                        console.error('Erro ao pesquisar features:', error);
                        console.error('Detalhes do erro:', {
                            message: error.message,
                            details: error.details,
                            fieldName: fieldName,
                            searchValue: searchValue
                        });
                        // Tenta mostrar informações mais úteis
                        let errorMessage = 'Erro ao pesquisar. ';
                        if (layer.fields && layer.fields.length > 0) {
                            const fieldNames = layer.fields.map(f => f.name).join(', ');
                            errorMessage += `\n\nCampos disponíveis: ${fieldNames}`;
                        }
                        errorMessage += `\n\nVerifique se a coluna "${fieldName}" existe e se o valor "${searchValue}" está correto.`;
                        alert(errorMessage);
                        this.setState({ loading: false });
                    });
                };
                // Se a camada já está carregada, executa diretamente
                if (layer.loaded) {
                    checkAndQuery();
                }
                else {
                    // Aguarda a camada carregar
                    layer.when(() => {
                        checkAndQuery();
                    }).catch((error) => {
                        console.error('Erro ao carregar informações da camada:', error);
                        alert('Erro ao carregar informações da camada. Verifique se a camada está acessível.');
                        this.setState({ loading: false });
                    });
                }
            });
        });
        // Função auxiliar para aplicar filtro e zoom
        this.applyFilterAndZoom = (layer, graphic, fieldName, actualValue) => {
            // Obtém o valor real do atributo do graphic
            const attributeValue = graphic.attributes[fieldName];
            // Se o valor não foi passado, usa o do atributo
            const valueToFilter = actualValue !== undefined ? actualValue : attributeValue;
            // Escapa o valor para SQL (trata strings, números e null)
            let definitionExpression;
            if (valueToFilter === null || valueToFilter === undefined) {
                definitionExpression = `${fieldName} IS NULL`;
            }
            else if (typeof valueToFilter === 'number') {
                definitionExpression = `${fieldName} = ${valueToFilter}`;
            }
            else {
                // É uma string, precisa escapar aspas simples
                const escapedValue = String(valueToFilter).replace(/'/g, "''");
                definitionExpression = `${fieldName} = '${escapedValue}'`;
            }
            console.log(`Aplicando filtro: ${fieldName} = ${valueToFilter}`);
            console.log(`Definition Expression: ${definitionExpression}`);
            // Aplica o filtro na camada usando definitionExpression
            // Isso é o método correto para filtrar uma FeatureLayer e ocultar outros polígonos
            layer.definitionExpression = definitionExpression;
            // Força a atualização imediata da camada para aplicar o filtro
            layer.refresh();
            console.log('Filtro aplicado. A camada deve mostrar APENAS o polígono selecionado');
            console.log('Definition Expression:', definitionExpression);
            // Aguarda um pouco para garantir que o filtro seja processado
            // Aguarda que a camada esteja completamente carregada antes de aplicar o filtro
            if (layer.loaded) {
                // A camada já está carregada, aplica o filtro diretamente
                // Aguarda um pouco para garantir que o filtro seja aplicado
                setTimeout(() => {
                    // Verifica se o filtro foi aplicado
                    if (layer.definitionExpression === definitionExpression) {
                        console.log('Filtro confirmado na camada');
                    }
                    this.applyZoomAfterFilter(layer, graphic);
                }, 300);
            }
            else {
                // Aguarda a camada carregar primeiro
                layer.when(() => {
                    // Aplica o filtro novamente após carregar (garantia)
                    layer.definitionExpression = definitionExpression;
                    layer.refresh();
                    setTimeout(() => {
                        this.applyZoomAfterFilter(layer, graphic);
                    }, 300);
                }).catch((error) => {
                    console.error('Erro ao aguardar camada:', error);
                    // Mesmo assim tenta aplicar o zoom
                    this.applyZoomAfterFilter(layer, graphic);
                });
            }
        };
        // Função auxiliar para aplicar zoom após o filtro
        this.applyZoomAfterFilter = (layer, graphic) => {
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
                        console.log('Zoom aplicado no polígono filtrado com padding');
                        this.setState({ loading: false });
                    }).catch((error) => {
                        console.error('Erro ao dar zoom:', error);
                        // Fallback: tenta zoom com extent calculado manualmente
                        try {
                            const extent = graphic.geometry.extent;
                            // Adiciona 10% de padding calculado a partir do tamanho do extent
                            const paddingFactor = 0.1;
                            const width = extent.width;
                            const height = extent.height;
                            const paddedExtent = extent.expand(width * paddingFactor, height * paddingFactor);
                            this.state.jimuMapView.view.goTo(paddedExtent, {
                                duration: 500
                            }).then(() => {
                                console.log('Zoom aplicado usando extent com padding calculado');
                                this.setState({ loading: false });
                            }).catch((fallbackError) => {
                                console.error('Erro no zoom de fallback:', fallbackError);
                                this.setState({ loading: false });
                            });
                        }
                        catch (calcError) {
                            console.error('Erro ao calcular extent:', calcError);
                            this.setState({ loading: false });
                        }
                    });
                }
                else {
                    this.setState({ loading: false });
                }
            }, 500);
        };
        // Função para limpar o filtro
        this.handleClearFilter = () => {
            if (this.state.featureLayer) {
                // Remove o filtro definindo definitionExpression como vazio ou null
                this.state.featureLayer.definitionExpression = null;
                this.state.featureLayer.refresh();
                console.log('Filtro removido - todos os alertas devem aparecer novamente');
                // Aguarda um pouco para garantir que o filtro seja removido
                setTimeout(() => {
                    // Verifica se o filtro foi removido
                    if (!this.state.featureLayer.definitionExpression || this.state.featureLayer.definitionExpression === '') {
                        console.log('Filtro confirmado como removido');
                    }
                    // Restaura a visualização inicial do mapa
                    if (this.state.jimuMapView && this.state.jimuMapView.view) {
                        if (this.state.initialExtent) {
                            // Restaura a extensão inicial salva
                            this.state.jimuMapView.view.goTo(this.state.initialExtent, {
                                duration: 500
                            }).then(() => {
                                console.log('Visualização inicial restaurada');
                            }).catch((error) => {
                                console.error('Erro ao restaurar visualização inicial:', error);
                                // Se falhar, tenta fazer zoom para a camada completa
                                if (this.state.featureLayer && this.state.featureLayer.fullExtent) {
                                    this.state.jimuMapView.view.goTo(this.state.featureLayer.fullExtent, {
                                        duration: 500
                                    });
                                }
                            });
                        }
                        else {
                            // Se não tiver extensão inicial salva, tenta fazer zoom para a camada completa
                            if (this.state.featureLayer && this.state.featureLayer.fullExtent) {
                                this.state.jimuMapView.view.goTo(this.state.featureLayer.fullExtent, {
                                    duration: 500
                                }).then(() => {
                                    console.log('Zoom para camada completa aplicado');
                                }).catch((error) => {
                                    console.error('Erro ao fazer zoom para camada completa:', error);
                                });
                            }
                        }
                    }
                }, 300);
                this.setState({
                    ideaSearchInput: ''
                });
            }
        };
        // Função para gerar relatório usando a ferramenta de geoprocessamento
        this.handleGenerateReport = () => __awaiter(this, void 0, void 0, function* () {
            // Declara variáveis no escopo da função para que estejam acessíveis no catch
            let ideaNumber = '';
            let paramName = null;
            let executeUrl = '';
            let token = null;
            // Validações iniciais
            if (this.state.ideaSearchInput === '' || this.state.ideaSearchInput.trim() === '') {
                alert('Por favor, digite um número de idea para gerar o relatório.');
                return;
            }
            ideaNumber = this.state.ideaSearchInput.trim();
            // Validação do formato do número de idea
            // Formato esperado: XXX.X.XXXXXX/YYYY (ex: 003.9.427384/2025)
            const ideaPattern = /^\d{1,3}\.\d{1,2}\.\d{1,6}\/\d{4}$/;
            if (!ideaPattern.test(ideaNumber)) {
                console.warn('Formato do número de idea pode estar incorreto:', ideaNumber);
                console.warn('Formato esperado: XXX.X.XXXXXX/YYYY (ex: 003.9.427384/2025)');
                // Não bloqueia, apenas avisa no console
            }
            // Remove espaços extras e caracteres invisíveis
            ideaNumber = ideaNumber.replace(/\s+/g, '').trim();
            // Validação de comprimento mínimo
            if (ideaNumber.length < 10) {
                alert('O número de idea parece estar incompleto. Verifique o formato: XXX.X.XXXXXX/YYYY');
                return;
            }
            console.log('=== VALIDAÇÃO DO VALOR ===');
            console.log('Valor original:', this.state.ideaSearchInput);
            console.log('Valor processado:', ideaNumber);
            console.log('Comprimento:', ideaNumber.length);
            console.log('Formato válido:', ideaPattern.test(ideaNumber));
            this.setState({ loading: true });
            try {
                console.log('Iniciando geração de relatório para idea:', ideaNumber);
                // Carrega IdentityManager para obter token de autenticação
                console.log('Carregando IdentityManager para autenticação...');
                const identityModules = yield (0,jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.loadArcGISJSAPIModules)([
                    'esri/identity/IdentityManager'
                ]);
                const [IdentityManager] = identityModules;
                // Obtém o token para a URL do serviço (já declarado no início da função)
                try {
                    const credential = IdentityManager.findCredential(this.GP_SERVICE_URL);
                    if (credential && credential.token) {
                        token = credential.token;
                        console.log('Token encontrado via IdentityManager');
                    }
                    else {
                        // Tenta gerar token automaticamente
                        const serverInfo = IdentityManager.findServerInfo(this.GP_SERVICE_URL);
                        if (serverInfo) {
                            console.log('Obtendo token automaticamente...');
                            yield IdentityManager.checkSignInStatus(this.GP_SERVICE_URL);
                            const updatedCredential = IdentityManager.findCredential(this.GP_SERVICE_URL);
                            if (updatedCredential && updatedCredential.token) {
                                token = updatedCredential.token;
                                console.log('Token obtido automaticamente');
                            }
                        }
                    }
                }
                catch (tokenError) {
                    console.warn('Erro ao obter token, tentando sem autenticação:', tokenError);
                }
                // Função auxiliar para adicionar token às URLs
                const addTokenToUrl = (url) => {
                    if (!token) {
                        return url;
                    }
                    try {
                        const urlObj = new URL(url);
                        urlObj.searchParams.set('token', token);
                        return urlObj.toString();
                    }
                    catch (e) {
                        // Se a URL não for absoluta, trata como string
                        const separator = url.includes('?') ? '&' : '?';
                        return `${url}${separator}token=${encodeURIComponent(token)}`;
                    }
                };
                // Primeiro, vamos obter informações sobre a task específica para descobrir os parâmetros
                console.log('Obtendo informações da task específica...');
                const taskNameEncoded = encodeURIComponent(this.GP_TASK_NAME);
                const infoUrl = addTokenToUrl(`${this.GP_SERVICE_URL}/${taskNameEncoded}?f=json`);
                console.log('URL de informações da task:', infoUrl);
                // Tenta obter informações da task específica primeiro
                let gpInfo;
                try {
                    const taskInfoResponse = yield fetch(infoUrl);
                    if (taskInfoResponse.ok) {
                        gpInfo = yield taskInfoResponse.json();
                        console.log('Informações da task específica obtidas com sucesso');
                        console.log('Informações completas da task:', JSON.stringify(gpInfo, null, 2));
                    }
                    else {
                        // Se falhar, tenta da GP geral
                        console.warn('Não foi possível obter informações da task, tentando da GP geral...');
                        const gpInfoUrl = addTokenToUrl(`${this.GP_SERVICE_URL}?f=json`);
                        const gpInfoResponse = yield fetch(gpInfoUrl);
                        if (!gpInfoResponse.ok) {
                            throw new Error(`Erro ao obter informações: ${taskInfoResponse.status} ${taskInfoResponse.statusText}`);
                        }
                        gpInfo = yield gpInfoResponse.json();
                        console.log('Usando informações da GP geral');
                        console.log('Informações completas da GP:', JSON.stringify(gpInfo, null, 2));
                    }
                }
                catch (infoError) {
                    // Se falhar, tenta da GP geral
                    console.warn('Erro ao obter informações da task, tentando da GP geral...', infoError);
                    const gpInfoUrl = addTokenToUrl(`${this.GP_SERVICE_URL}?f=json`);
                    const gpInfoResponse = yield fetch(gpInfoUrl);
                    gpInfo = yield gpInfoResponse.json();
                    console.log('Usando informações da GP geral (fallback)');
                    console.log('Informações completas da GP:', JSON.stringify(gpInfo, null, 2));
                }
                // Descobre qual é o parâmetro de entrada da GP
                // IMPORTANTE: Devemos usar exatamente o nome do parâmetro que a GP espera
                // O widget recebe o valor da coluna "idea", mas envia com o nome que a GP espera
                let paramName = null;
                let paramInfo = null;
                if (gpInfo.parameters && Array.isArray(gpInfo.parameters)) {
                    console.log('=== PARÂMETROS DISPONÍVEIS NA GP ===');
                    const allParams = gpInfo.parameters.map(p => ({
                        name: p.name,
                        displayName: p.displayName || p.name,
                        dataType: p.dataType,
                        direction: p.direction,
                        parameterType: p.parameterType,
                        required: p.parameterType === 'esriGPParameterTypeRequired' || p.required === true
                    }));
                    console.log('Todos os parâmetros:', JSON.stringify(allParams, null, 2));
                    // Procura pelo primeiro parâmetro de entrada (input)
                    const inputParams = gpInfo.parameters.filter(p => (p.direction === 'esriGPParameterDirectionInput' || p.direction === 'GPParameterDirectionInput') &&
                        p.name);
                    console.log('Parâmetros de entrada encontrados:', inputParams.map(p => ({
                        name: p.name,
                        displayName: p.displayName || p.name,
                        dataType: p.dataType,
                        required: p.parameterType === 'esriGPParameterTypeRequired' || p.required === true
                    })));
                    if (inputParams.length > 0) {
                        // Usa o primeiro parâmetro de entrada (que é o que a GP espera)
                        paramInfo = inputParams[0];
                        paramName = paramInfo.name; // Usa exatamente o nome que a GP espera (pode ter caracteres especiais)
                        console.log('=== PARÂMETRO SELECIONADO ===');
                        console.log('Nome técnico do parâmetro (será usado no request):', paramName);
                        console.log('Nome de exibição (label na interface):', paramInfo.displayName || paramInfo.name);
                        console.log('Detalhes completos:', {
                            name: paramInfo.name,
                            displayName: paramInfo.displayName || paramInfo.name,
                            dataType: paramInfo.dataType,
                            direction: paramInfo.direction,
                            required: paramInfo.parameterType === 'esriGPParameterTypeRequired' || paramInfo.required === true
                        });
                    }
                    else {
                        console.error('Nenhum parâmetro de entrada encontrado na GP!');
                        throw new Error('Não foi possível identificar o parâmetro de entrada da ferramenta de geoprocessamento.');
                    }
                }
                else {
                    console.error('Não foi possível obter parâmetros da GP!');
                    throw new Error('Não foi possível obter informações dos parâmetros da ferramenta de geoprocessamento.');
                }
                // Confirma qual parâmetro será usado (deve ser exatamente o que a GP espera)
                console.log('=== PARÂMETRO PARA ENVIAR À GP ===');
                console.log('Nome do parâmetro (exatamente como a GP espera):', paramName);
                console.log('Valor que será enviado (da coluna idea do widget):', ideaNumber);
                console.log('Detalhes completos do parâmetro:', paramInfo);
                // Verifica o tipo do parâmetro para formatar corretamente
                let paramValue = ideaNumber;
                if (paramInfo) {
                    console.log('Tipo de dado do parâmetro:', paramInfo.dataType);
                    console.log('Tipo de parâmetro:', paramInfo.parameterType);
                    // Se o parâmetro for do tipo GPString ou similar, envia como string
                    // Se for URL ou outro tipo complexo, pode precisar de formato diferente
                    if (paramInfo.dataType === 'GPString' || paramInfo.dataType === 'esriGPTypeString') {
                        paramValue = String(ideaNumber);
                    }
                    else if (paramInfo.dataType === 'GPDouble' || paramInfo.dataType === 'esriGPTypeDouble' ||
                        paramInfo.dataType === 'GPLong' || paramInfo.dataType === 'esriGPTypeLong') {
                        // Se for numérico, tenta converter
                        const numValue = parseFloat(ideaNumber);
                        if (!isNaN(numValue)) {
                            paramValue = numValue;
                        }
                    }
                }
                // Prepara os parâmetros para a execução
                // IMPORTANTE: f=json vai na URL, não no body
                // Apenas os parâmetros da GP vão no body
                const params = {
                    [paramName]: paramValue
                };
                console.log('=== PARÂMETROS PARA ENVIAR ===');
                console.log('Parâmetros preparados (para o body):', params);
                console.log('Valor do parâmetro:', paramValue, 'Tipo:', typeof paramValue);
                console.log('Nome do parâmetro (exato):', paramName);
                console.log('Nome do parâmetro (JSON):', JSON.stringify(paramName));
                // Formata os parâmetros como form-urlencoded
                const formData = new URLSearchParams();
                // Adiciona os parâmetros (exceto f=json que vai na URL)
                // IMPORTANTE: Usa o nome exato do parâmetro como está na GP (pode ter caracteres especiais)
                console.log('=== PREPARANDO FORM DATA ===');
                Object.keys(params).forEach(key => {
                    if (key !== 'f') {
                        const paramKey = key; // Usa exatamente o nome que veio da GP (ex: "N° IDEA", "valor_alerta", etc.)
                        const paramVal = String(params[key]);
                        formData.append(paramKey, paramVal);
                        console.log(`Parâmetro adicionado: nome="${paramKey}" valor="${paramVal}"`);
                        console.log(`  - Nome (JSON): ${JSON.stringify(paramKey)}`);
                        console.log(`  - Nome (bytes): ${Array.from(paramKey).map(c => c.charCodeAt(0)).join(',')}`);
                        console.log(`  - Valor (JSON): ${JSON.stringify(paramVal)}`);
                    }
                });
                const formDataString = formData.toString();
                console.log('FormData completo (string):', formDataString);
                console.log('FormData completo (URL decoded):', decodeURIComponent(formDataString));
                // Adiciona token ao body
                if (token) {
                    formData.append('token', token);
                    console.log('Token adicionado ao body');
                }
                // Função auxiliar para fazer a requisição
                const makeExecuteRequest = (url) => __awaiter(this, void 0, void 0, function* () {
                    // Adiciona token na URL também (alguns servidores ArcGIS exigem isso)
                    let finalUrl = url;
                    if (token) {
                        const urlWithToken = new URL(url);
                        urlWithToken.searchParams.set('token', token);
                        urlWithToken.searchParams.set('f', 'json');
                        finalUrl = urlWithToken.toString();
                    }
                    else {
                        // Se não tiver token, adiciona apenas f=json
                        const urlObj = new URL(url);
                        urlObj.searchParams.set('f', 'json');
                        finalUrl = urlObj.toString();
                    }
                    console.log('Tentando URL:', finalUrl);
                    console.log('Body (formData):', formData.toString());
                    console.log('Token presente:', !!token);
                    console.log('Parâmetros enviados:', Object.keys(params));
                    const response = yield fetch(finalUrl, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        body: formData
                    });
                    return response;
                });
                // Verifica se a task é assíncrona para decidir qual endpoint usar
                const isAsync = gpInfo.executionType === 'esriExecutionTypeAsynchronous';
                console.log('=== TENTANDO EXECUTAR GP ===');
                console.log('Tipo de execução:', gpInfo.executionType);
                console.log('É assíncrona?', isAsync);
                console.log('Tentando primeiro com task específica:', this.GP_TASK_NAME);
                console.log('Parâmetro que será enviado:', paramName);
                console.log('Valor que será enviado:', ideaNumber);
                // Se for assíncrona, usa submitJob; caso contrário, usa execute
                if (isAsync) {
                    executeUrl = this.GP_SUBMIT_JOB_URL;
                    console.log('Usando endpoint /submitJob (tarefa assíncrona):', executeUrl);
                }
                else {
                    executeUrl = `${this.GP_SERVICE_URL}/${taskNameEncoded}/execute`;
                    console.log('Usando endpoint /execute (tarefa síncrona):', executeUrl);
                }
                let executeResponse = yield makeExecuteRequest(executeUrl);
                // Se der erro 500, pode ser que o endpoint da task específica não exista
                // Tenta com o endpoint da GP raiz
                if (!executeResponse.ok) {
                    let resultText = yield executeResponse.text();
                    console.warn('Primeira tentativa falhou. Status:', executeResponse.status);
                    console.warn('Resposta (primeiros 500 chars):', resultText.substring(0, 500));
                    try {
                        const resultJson = JSON.parse(resultText);
                        if (resultJson.error && resultJson.error.code === 500) {
                            console.warn('Erro 500 com task específica, tentando com endpoint da GP raiz...');
                            // Tenta com o endpoint raiz usando o mesmo tipo (submitJob ou execute)
                            if (isAsync) {
                                executeUrl = this.GP_SUBMIT_JOB_URL;
                                console.log('Tentando com endpoint da GP raiz (submitJob):', executeUrl);
                            }
                            else {
                                executeUrl = `${this.GP_SERVICE_URL}/execute`;
                                console.log('Tentando com endpoint da GP raiz (execute):', executeUrl);
                            }
                            executeResponse = yield makeExecuteRequest(executeUrl);
                        }
                    }
                    catch (e) {
                        console.error('Erro ao parsear resposta:', e);
                        // Se não conseguir parsear, continua com o erro original
                    }
                }
                // Lê a resposta mesmo se não for OK para ver o erro detalhado
                let result;
                try {
                    result = yield executeResponse.json();
                    console.log('Resposta do execute (JSON):', JSON.stringify(result, null, 2));
                }
                catch (jsonError) {
                    // Se não conseguir ler como JSON, lê como texto
                    const textResponse = yield executeResponse.text();
                    console.error('Resposta não é JSON:', textResponse);
                    console.error('Status HTTP:', executeResponse.status, executeResponse.statusText);
                    throw new Error(`Erro ao executar tarefa: ${executeResponse.status} ${executeResponse.statusText} - Resposta: ${textResponse.substring(0, 500)}`);
                }
                if (!executeResponse.ok) {
                    // Se a resposta tem um erro no JSON, usa ele
                    if (result.error) {
                        console.error('=== ERRO DETALHADO DA GP ===');
                        console.error('Código do erro:', result.error.code);
                        console.error('Mensagem:', result.error.message);
                        console.error('Detalhes:', result.error.details);
                        console.error('Erro completo:', JSON.stringify(result.error, null, 2));
                        // Mensagem de erro mais amigável
                        let errorMessage = 'Erro ao executar a ferramenta de geoprocessamento.\n\n';
                        if (result.error.code === 500) {
                            errorMessage += 'Erro interno do servidor (500).\n\n';
                            errorMessage += 'Possíveis causas:\n';
                            errorMessage += '1. O número de idea pode não existir no servidor\n';
                            errorMessage += '2. Problema no processamento da ferramenta\n';
                            errorMessage += '3. O servidor pode estar temporariamente indisponível\n\n';
                            errorMessage += `Valor enviado: ${ideaNumber}\n`;
                            errorMessage += `Parâmetro usado: ${paramName}\n\n`;
                            errorMessage += 'Verifique:\n';
                            errorMessage += '- Se o número de idea está correto\n';
                            errorMessage += '- Se o valor existe na camada de alertas\n';
                            errorMessage += '- Abra o console (F12) para mais detalhes';
                        }
                        else {
                            errorMessage += `Código: ${result.error.code}\n`;
                            errorMessage += `Mensagem: ${result.error.message}\n\n`;
                            if (result.error.details && result.error.details.length > 0) {
                                errorMessage += `Detalhes: ${result.error.details.join(', ')}\n\n`;
                            }
                        }
                        alert(errorMessage);
                        throw new Error(`Erro na GP: ${JSON.stringify(result.error)}`);
                    }
                    // Se não tiver campo error, mas o status não é OK, mostra o resultado completo
                    console.error('Erro HTTP:', executeResponse.status, executeResponse.statusText);
                    console.error('Resposta completa:', result);
                    alert(`Erro ao executar tarefa: ${executeResponse.status} ${executeResponse.statusText}\n\nVerifique o console (F12) para mais detalhes.`);
                    throw new Error(`Erro ao executar tarefa: ${executeResponse.status} ${executeResponse.statusText} - ${JSON.stringify(result)}`);
                }
                // Verifica se a resposta contém um jobId (tarefa assíncrona)
                // Para tarefas assíncronas, submitJob sempre retorna jobId
                if (result.jobId || isAsync) {
                    const jobId = result.jobId;
                    if (!jobId) {
                        throw new Error('Tarefa assíncrona mas não recebeu jobId na resposta');
                    }
                    console.log('Tarefa assíncrona detectada. Job ID:', jobId);
                    // Polling do status do job
                    let attempts = 0;
                    const maxAttempts = 60;
                    let jobStatus = null;
                    while (attempts < maxAttempts) {
                        yield new Promise(resolve => setTimeout(resolve, 1000));
                        // URL para verificar status do job
                        // Usa a mesma URL base que funcionou (pode ser submitJob ou execute)
                        const baseUrl = executeUrl.replace('/submitJob', '').replace('/execute', '');
                        const statusUrl = token
                            ? `${baseUrl}/jobs/${jobId}?token=${token}&f=json`
                            : `${baseUrl}/jobs/${jobId}?f=json`;
                        console.log('Verificando status do job:', statusUrl);
                        const statusResponse = yield fetch(statusUrl);
                        if (!statusResponse.ok) {
                            throw new Error(`Erro ao verificar status do job: ${statusResponse.status}`);
                        }
                        jobStatus = yield statusResponse.json();
                        console.log(`Status do job (tentativa ${attempts + 1}):`, jobStatus.jobStatus);
                        if (jobStatus.jobStatus === 'esriJobSucceeded') {
                            // Obtém os resultados
                            // Usa a mesma URL base que funcionou (pode ser submitJob ou execute)
                            const baseUrl = executeUrl.replace('/submitJob', '').replace('/execute', '');
                            const resultUrl = token
                                ? `${baseUrl}/jobs/${jobId}/results?token=${token}&f=json`
                                : `${baseUrl}/jobs/${jobId}/results?f=json`;
                            const resultResponse = yield fetch(resultUrl);
                            if (!resultResponse.ok) {
                                throw new Error(`Erro ao obter resultados: ${resultResponse.status}`);
                            }
                            result = yield resultResponse.json();
                            console.log('Resultado da execução assíncrona:', result);
                            break;
                        }
                        else if (jobStatus.jobStatus === 'esriJobFailed') {
                            throw new Error(`Job falhou: ${jobStatus.messages ? JSON.stringify(jobStatus.messages) : 'Erro desconhecido'}`);
                        }
                        else if (jobStatus.jobStatus === 'esriJobCancelled') {
                            throw new Error('Job foi cancelado');
                        }
                        attempts++;
                    }
                    if (attempts >= maxAttempts) {
                        throw new Error('Timeout: O job demorou mais de 60 segundos para completar');
                    }
                }
                else {
                    // Tarefa síncrona - resultado já está disponível
                    console.log('Tarefa síncrona - resultado já disponível');
                }
                console.log('Resultado completo da GP:', JSON.stringify(result, null, 2));
                // Processa o resultado - procura pela URL do HTML
                let htmlUrl = null;
                // Para tarefas assíncronas, os resultados podem estar em uma estrutura diferente
                // Primeiro, verifica se há erros
                if (result.error) {
                    console.error('Erro encontrado no resultado:', result.error);
                    throw new Error(`Erro na GP: ${JSON.stringify(result.error)}`);
                }
                // Procura em result.results (estrutura comum para tarefas síncronas)
                if (result.results && Array.isArray(result.results)) {
                    for (const resultItem of result.results) {
                        // O resultado pode estar diretamente no resultItem ou em resultItem.value
                        const value = resultItem.value !== undefined ? resultItem.value : resultItem;
                        if (typeof value === 'string' && value.includes('.html')) {
                            htmlUrl = value;
                            break;
                        }
                        else if (value && typeof value === 'object') {
                            // Procura por propriedades comuns que contêm URLs
                            if (value.url && typeof value.url === 'string' && value.url.includes('.html')) {
                                htmlUrl = value.url;
                                break;
                            }
                            else if (value.pathUrl && typeof value.pathUrl === 'string') {
                                htmlUrl = value.pathUrl;
                                break;
                            }
                            else if (value.value && typeof value.value === 'string' && value.value.includes('.html')) {
                                htmlUrl = value.value;
                                break;
                            }
                        }
                    }
                }
                // Para tarefas assíncronas, os resultados podem estar em result.results como objeto
                if (!htmlUrl && result.results && typeof result.results === 'object' && !Array.isArray(result.results)) {
                    // Itera sobre as propriedades do objeto results
                    for (const key in result.results) {
                        const resultItem = result.results[key];
                        if (resultItem && resultItem.value) {
                            const value = resultItem.value;
                            if (typeof value === 'string' && value.includes('.html')) {
                                htmlUrl = value;
                                break;
                            }
                            else if (value.url && typeof value.url === 'string' && value.url.includes('.html')) {
                                htmlUrl = value.url;
                                break;
                            }
                            else if (value.pathUrl && typeof value.pathUrl === 'string') {
                                htmlUrl = value.pathUrl;
                                break;
                            }
                        }
                    }
                }
                // Procura em outras propriedades do resultado
                if (!htmlUrl && result.outputUrl) {
                    htmlUrl = result.outputUrl;
                }
                if (!htmlUrl && result.url) {
                    htmlUrl = result.url;
                }
                if (!htmlUrl && result.fileUrl) {
                    htmlUrl = result.fileUrl;
                }
                if (!htmlUrl && result.outputFile) {
                    htmlUrl = result.outputFile;
                }
                // Busca por regex em todo o objeto (último recurso)
                if (!htmlUrl) {
                    const resultString = JSON.stringify(result);
                    const urlMatch = resultString.match(/https?:\/\/[^\s"<>]+\.html/g);
                    if (urlMatch && urlMatch.length > 0) {
                        htmlUrl = urlMatch[0];
                    }
                }
                if (htmlUrl) {
                    console.log('URL do HTML encontrada:', htmlUrl);
                    // Abre o HTML em uma nova guia
                    window.open(htmlUrl, '_blank');
                    this.setState({ loading: false });
                }
                else {
                    // Se não encontrou a URL, mostra o resultado completo para debug
                    console.warn('Não foi possível encontrar a URL do HTML no resultado:', result);
                    console.warn('Resultado completo:', JSON.stringify(result, null, 2));
                    alert('Relatório gerado, mas não foi possível encontrar a URL do HTML. Verifique o console do navegador (F12) para ver os detalhes do resultado.');
                    this.setState({ loading: false });
                }
            }
            catch (error) {
                console.error('=== ERRO COMPLETO AO EXECUTAR GP ===');
                console.error('Erro:', error);
                console.error('Mensagem:', error.message);
                console.error('Stack trace:', error.stack);
                console.error('Tipo do erro:', error.constructor.name);
                // Informações de contexto para debug
                console.error('=== CONTEXTO DO ERRO ===');
                console.error('Valor enviado:', ideaNumber);
                console.error('Parâmetro usado:', paramName);
                console.error('URL tentada:', executeUrl);
                console.error('Token presente:', !!token);
                let errorMessage = 'Erro ao gerar relatório.\n\n';
                if (error.message) {
                    // Remove informações técnicas muito longas para o usuário
                    let cleanMessage = error.message;
                    if (cleanMessage.length > 200) {
                        cleanMessage = cleanMessage.substring(0, 200) + '...';
                    }
                    errorMessage += `Mensagem: ${cleanMessage}\n\n`;
                }
                if (error.details && Array.isArray(error.details) && error.details.length > 0) {
                    errorMessage += `Detalhes: ${error.details[0]}\n\n`;
                }
                errorMessage += 'Verifique:\n';
                errorMessage += `1. Se o número de idea "${ideaNumber}" está correto\n`;
                errorMessage += '2. Se o valor existe na camada de alertas_regional_lapa\n';
                errorMessage += '3. Se a ferramenta de geoprocessamento está acessível\n';
                errorMessage += '4. Abra o console do navegador (F12) para mais detalhes técnicos\n\n';
                errorMessage += 'Dica: Tente usar o botão "Filtrar" primeiro para verificar se o número existe.';
                alert(errorMessage);
                this.setState({ loading: false });
            }
        });
    }
    render() {
        var _a;
        const style = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.css) `
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
    `;
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "widget-filtrar-e-gerar-relatorio jimu-widget p-2", css: style },
            this.props.hasOwnProperty('useMapWidgetIds') &&
                this.props.useMapWidgetIds &&
                this.props.useMapWidgetIds.length === 1 && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_arcgis__WEBPACK_IMPORTED_MODULE_1__.JimuMapViewComponent, { useMapWidgetId: (_a = this.props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0], onActiveViewChange: (jmv) => {
                    this.setState({
                        jimuMapView: jmv
                    });
                } })),
            (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "widget-container" },
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", null, _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].instructions),
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("form", { onSubmit: this.handleFilterAndZoom },
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", null,
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "text", placeholder: _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].searchIdea, value: this.state.ideaSearchInput, onChange: this.handleIdeaSearchInputChange, disabled: !this.state.featureLayer || this.state.loading }),
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { type: "submit", disabled: !this.state.featureLayer || this.state.loading }, _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].filterAndZoom))),
                this.state.featureLayer && ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)(jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null,
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "report-button", onClick: this.handleGenerateReport, disabled: this.state.loading || !this.state.ideaSearchInput || this.state.ideaSearchInput.trim() === '', title: this.state.loading || !this.state.ideaSearchInput || this.state.ideaSearchInput.trim() === ''
                            ? 'Digite um número de idea para gerar o relatório'
                            : 'Gerar relatório para o número de idea informado' },
                        this.state.loading && (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "spinner" }),
                        _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].generateReport),
                    (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "clear-button", onClick: this.handleClearFilter, disabled: this.state.loading }, _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].clearFilter))))));
    }
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9maWx0cmFyLWUtZ2VyYXItcmVsYXRvcmlvL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFlO0lBQ2IsWUFBWSxFQUFFLDJCQUEyQjtJQUN6QyxRQUFRLEVBQUUsa0JBQWtCO0lBQzVCLGlCQUFpQixFQUFFLHdCQUF3QjtJQUMzQyxZQUFZLEVBQ1Ysa0JBQWtCO0lBQ3BCLFVBQVUsRUFBRSw2QkFBNkI7SUFDekMsYUFBYSxFQUFFLFNBQVM7SUFDeEIsY0FBYyxFQUFFLGlCQUFpQjtJQUNqQyxXQUFXLEVBQUUsZUFBZTtJQUM1QixPQUFPLEVBQUUsZUFBZTtJQUN4QixXQUFXLEVBQUUsK0JBQStCO0NBQzdDOzs7Ozs7Ozs7Ozs7QUNaRDs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCxxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0puRCwwQ0FBMEM7QUFDMUMsZUFBZTtBQUNmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFrQkU7QUFDOEQ7QUFLNUM7QUFJZ0M7QUFVckMsTUFBTSxNQUFPLFNBQVEsNENBQUssQ0FBQyxhQUd6QztJQUhEOztRQVVFLFVBQUssR0FBRztZQUNOLGVBQWUsRUFBRSxFQUFFO1lBQ25CLFdBQVcs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LENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2ZpbHRyYXItZS1nZXJhci1yZWxhdG9yaW8vc3JjL3J1bnRpbWUvdHJhbnNsYXRpb25zL2RlZmF1bHQudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9maWx0cmFyLWUtZ2VyYXItcmVsYXRvcmlvL3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICBfd2lkZ2V0TGFiZWw6ICdGaWx0cmFyIGUgR2VyYXIgUmVsYXTDs3JpbycsXG4gIGFkZExheWVyOiAnQWRpY2lvbmFyIENhbWFkYScsXG4gIGZlYXR1cmVTZXJ2aWNlVXJsOiAnVVJMIGRvIEZlYXR1cmUgU2VydmljZScsXG4gIGluc3RydWN0aW9uczpcbiAgICAnRGlnaXRlIG8gbsK6IElERUEnLFxuICBzZWFyY2hJZGVhOiAnUGVzcXVpc2FyIHBvciBuw7ptZXJvIChpZGVhKScsXG4gIGZpbHRlckFuZFpvb206ICdGaWx0cmFyJyxcbiAgZ2VuZXJhdGVSZXBvcnQ6ICdHZXJhciBSZWxhdMOzcmlvJyxcbiAgY2xlYXJGaWx0ZXI6ICdMaW1wYXIgRmlsdHJvJyxcbiAgbG9hZGluZzogJ0NhcnJlZ2FuZG8uLi4nLFxuICBsYXllckxvYWRlZDogJ0NhbWFkYSBjYXJyZWdhZGEgY29tIHN1Y2Vzc28hJ1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvdHlwZS1idWlsdGlucyAqL1xuLyoqIEBqc3gganN4ICovXG4vKipcbiAgTGljZW5zaW5nXG5cbiAgQ29weXJpZ2h0IDIwMjIgRXNyaVxuXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IFlvdVxuICBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heVxuICBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4gIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3JcbiAgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nXG4gIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cblxuICBBIGNvcHkgb2YgdGhlIGxpY2Vuc2UgaXMgYXZhaWxhYmxlIGluIHRoZSByZXBvc2l0b3J5J3NcbiAgTElDRU5TRSBmaWxlLlxuKi9cbmltcG9ydCB7IFJlYWN0LCB0eXBlIEFsbFdpZGdldFByb3BzLCBjc3MsIGpzeCB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7XG4gIGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMsXG4gIEppbXVNYXBWaWV3Q29tcG9uZW50LFxuICB0eXBlIEppbXVNYXBWaWV3XG59IGZyb20gJ2ppbXUtYXJjZ2lzJ1xuXG5pbXBvcnQgdHlwZSB7IElNQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJ1xuXG5pbXBvcnQgZGVmYXVsdE1lc3NhZ2VzIGZyb20gJy4vdHJhbnNsYXRpb25zL2RlZmF1bHQnXG5cbmludGVyZmFjZSBJU3RhdGUge1xuICBpZGVhU2VhcmNoSW5wdXQ6IHN0cmluZ1xuICBqaW11TWFwVmlldzogSmltdU1hcFZpZXdcbiAgZmVhdHVyZUxheWVyOiBfX2VzcmkuRmVhdHVyZUxheWVyXG4gIGxvYWRpbmc6IGJvb2xlYW5cbiAgaW5pdGlhbEV4dGVudDogX19lc3JpLkV4dGVudFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaWRnZXQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFxuQWxsV2lkZ2V0UHJvcHM8SU1Db25maWc+LFxuSVN0YXRlXG4+IHtcbiAgLy8gR2l2ZSB0eXBlcyB0byB0aGUgbW9kdWxlcyB3ZSBpbXBvcnQgZnJvbSB0aGUgQXJjR0lTIEFQSSBmb3IgSmF2YVNjcmlwdFxuICAvLyB0byB0ZWxsIFR5cGVTY3JpcHQgd2hhdCB0eXBlcyB0aGV5IGFyZS5cbiAgRmVhdHVyZUxheWVyOiB0eXBlb2YgX19lc3JpLkZlYXR1cmVMYXllclxuICBRdWVyeTogdHlwZW9mIF9fZXNyaS5RdWVyeVxuICBTcGF0aWFsUmVmZXJlbmNlOiB0eXBlb2YgX19lc3JpLlNwYXRpYWxSZWZlcmVuY2VcblxuICBzdGF0ZSA9IHtcbiAgICBpZGVhU2VhcmNoSW5wdXQ6ICcnLFxuICAgIGppbXVNYXBWaWV3OiBudWxsLFxuICAgIGZlYXR1cmVMYXllcjogbnVsbCxcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBpbml0aWFsRXh0ZW50OiBudWxsXG4gIH1cblxuICAvLyBVUkwgZml4YSBkYSBjYW1hZGFcbiAgcmVhZG9ubHkgRkVBVFVSRV9TRVJWSUNFX1VSTCA9ICdodHRwczovL21laW9hbWJpZW50ZS5zaXN0ZW1hcy5tcGJhLm1wLmJyL3NlcnZlci9yZXN0L3NlcnZpY2VzL0hvc3RlZC9hbGVydGFzX3JlZ2lvbmFsX2xhcGEvRmVhdHVyZVNlcnZlcidcbiAgXG4gIC8vIFVSTCBkYSBmZXJyYW1lbnRhIGRlIGdlb3Byb2Nlc3NhbWVudG9cbiAgcmVhZG9ubHkgR1BfU0VSVklDRV9VUkwgPSAnaHR0cHM6Ly9tZWlvYW1iaWVudGUuc2lzdGVtYXMubXBiYS5tcC5ici9zZXJ2ZXIvcmVzdC9zZXJ2aWNlcy90ZXN0ZW91dHB1dC9wcm9jZXNzYXJhbGVydGFfaWRlYS9HUFNlcnZlcidcbiAgXG4gIC8vIFVSTCBmaXhhIGRvIHN1Ym1pdEpvYlxuICByZWFkb25seSBHUF9TVUJNSVRfSk9CX1VSTCA9ICdodHRwczovL21laW9hbWJpZW50ZS5zaXN0ZW1hcy5tcGJhLm1wLmJyL3NlcnZlci9yZXN0L3NlcnZpY2VzL3Rlc3Rlb3V0cHV0L3Byb2Nlc3NhcmFsZXJ0YV9pZGVhL0dQU2VydmVyL3JlbGF0b3Jpb19hbmFsaXNlX2xhcGEvc3VibWl0Sm9iJ1xuICBcbiAgLy8gTm9tZSBkYSB0YXNrIGVzcGVjw61maWNhIGRlbnRybyBkYSBHUFxuICByZWFkb25seSBHUF9UQVNLX05BTUUgPSAnUHJvY2Vzc2FtZW50byBkZSBhbGVydGFzJ1xuXG4gIC8vIEZ1bsOnw6NvIGNoYW1hZGEgcXVhbmRvIG8gdmFsb3IgZGEgcGVzcXVpc2EgbXVkYVxuICBoYW5kbGVJZGVhU2VhcmNoSW5wdXRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlkZWFTZWFyY2hJbnB1dDogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgfSlcbiAgfVxuXG4gIC8vIENhcnJlZ2EgYSBjYW1hZGEgYXV0b21hdGljYW1lbnRlIHF1YW5kbyBvIGNvbXBvbmVudGUgw6kgbW9udGFkbyBvdSBvIG1hcGEgZXN0w6EgZGlzcG9uw612ZWxcbiAgY29tcG9uZW50RGlkVXBkYXRlID0gKHByZXZQcm9wcywgcHJldlN0YXRlKSA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUuamltdU1hcFZpZXcgJiYgIXRoaXMuc3RhdGUuZmVhdHVyZUxheWVyICYmICFwcmV2U3RhdGUuamltdU1hcFZpZXcpIHtcbiAgICAgIC8vIFNhbHZhIGEgdmlzdWFsaXphw6fDo28gaW5pY2lhbCBxdWFuZG8gbyBtYXBhIMOpIGRldGVjdGFkbyBwZWxhIHByaW1laXJhIHZlelxuICAgICAgaWYgKHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldyAmJiAhdGhpcy5zdGF0ZS5pbml0aWFsRXh0ZW50KSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRFeHRlbnQgPSB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcuZXh0ZW50XG4gICAgICAgIGlmIChjdXJyZW50RXh0ZW50KSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpbml0aWFsRXh0ZW50OiBjdXJyZW50RXh0ZW50LmNsb25lKClcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmxvYWRGZWF0dXJlTGF5ZXIoKVxuICAgIH1cbiAgfVxuXG4gIC8vIENhcnJlZ2EgYSBjYW1hZGEgZGUgZmVhdHVyZSBzZXJ2aWNlXG4gIGxvYWRGZWF0dXJlTGF5ZXIgPSAoKSA9PiB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmppbXVNYXBWaWV3KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KVxuXG4gICAgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbXG4gICAgICAnZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyJyxcbiAgICAgICdlc3JpL2dlb21ldHJ5L1NwYXRpYWxSZWZlcmVuY2UnXG4gICAgXSkudGhlbigobW9kdWxlcykgPT4ge1xuICAgICAgW3RoaXMuRmVhdHVyZUxheWVyLCB0aGlzLlNwYXRpYWxSZWZlcmVuY2VdID0gbW9kdWxlc1xuXG4gICAgICAvLyBDcmlhIGEgY2FtYWRhIGNvbSBhIFVSTCBmaXhhXG4gICAgICBjb25zdCBsYXllciA9IG5ldyB0aGlzLkZlYXR1cmVMYXllcih7XG4gICAgICAgIHVybDogdGhpcy5GRUFUVVJFX1NFUlZJQ0VfVVJMXG4gICAgICB9KVxuXG4gICAgICAvLyBBZGljaW9uYSBhIGNhbWFkYSBhbyBtYXBhXG4gICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcubWFwLmFkZChsYXllcilcblxuICAgICAgLy8gQWd1YXJkYSBhIGNhbWFkYSBzZXIgY3JpYWRhXG4gICAgICBsYXllci5vbignbGF5ZXJ2aWV3LWNyZWF0ZScsICgpID0+IHtcbiAgICAgICAgLy8gU2FsdmEgYSB2aXN1YWxpemHDp8OjbyBpbmljaWFsIGRvIG1hcGEgc2UgYWluZGEgbsOjbyBmb2kgc2FsdmFcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmluaXRpYWxFeHRlbnQgJiYgdGhpcy5zdGF0ZS5qaW11TWFwVmlldyAmJiB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcpIHtcbiAgICAgICAgICBjb25zdCBjdXJyZW50RXh0ZW50ID0gdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3LmV4dGVudFxuICAgICAgICAgIGlmIChjdXJyZW50RXh0ZW50KSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgZmVhdHVyZUxheWVyOiBsYXllcixcbiAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgIGluaXRpYWxFeHRlbnQ6IGN1cnJlbnRFeHRlbnQuY2xvbmUoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIGZlYXR1cmVMYXllcjogbGF5ZXIsXG4gICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGZlYXR1cmVMYXllcjogbGF5ZXIsXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGxheWVyLm9uKCdsYXllcnZpZXctY3JlYXRlLWVycm9yJywgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGFvIGNhcnJlZ2FyIGEgY2FtYWRhJylcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICAvLyBGdW7Dp8OjbyBwYXJhIGZpbHRyYXIgZSBkYXIgem9vbSBubyBwb2zDrWdvbm8gYmFzZWFkbyBuYSBwZXNxdWlzYVxuICBoYW5kbGVGaWx0ZXJBbmRab29tID0gYXN5bmMgKGV2dCkgPT4ge1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAvLyBDYXNvcyBkZSBlcnJvXG4gICAgaWYgKCF0aGlzLnN0YXRlLmppbXVNYXBWaWV3KSB7XG4gICAgICBhbGVydCgnUG9yIGZhdm9yLCBjb25maWd1cmUgdW0gbWFwYSBubyB3aWRnZXQuJylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAoIXRoaXMuc3RhdGUuZmVhdHVyZUxheWVyKSB7XG4gICAgICBhbGVydCgnQSBjYW1hZGEgYWluZGEgbsOjbyBmb2kgY2FycmVnYWRhLiBBZ3VhcmRlLi4uJylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5pZGVhU2VhcmNoSW5wdXQgPT09ICcnIHx8IHRoaXMuc3RhdGUuaWRlYVNlYXJjaElucHV0LnRyaW0oKSA9PT0gJycpIHtcbiAgICAgIGFsZXJ0KCdQb3IgZmF2b3IsIGRpZ2l0ZSB1bSBuw7ptZXJvIHBhcmEgcGVzcXVpc2FyIG5hIGNvbHVuYSBpZGVhLicpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KVxuXG4gICAgLy8gQ2FycmVnYSBvcyBtw7NkdWxvcyBuZWNlc3PDoXJpb3NcbiAgICBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcbiAgICAgICdlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXInLFxuICAgICAgJ2VzcmkvZ2VvbWV0cnkvU3BhdGlhbFJlZmVyZW5jZSdcbiAgICBdKS50aGVuKChtb2R1bGVzKSA9PiB7XG4gICAgICBbdGhpcy5GZWF0dXJlTGF5ZXIsIHRoaXMuU3BhdGlhbFJlZmVyZW5jZV0gPSBtb2R1bGVzXG5cbiAgICAgIGNvbnN0IGxheWVyID0gdGhpcy5zdGF0ZS5mZWF0dXJlTGF5ZXJcbiAgICAgIGNvbnN0IHNlYXJjaFZhbHVlID0gdGhpcy5zdGF0ZS5pZGVhU2VhcmNoSW5wdXQudHJpbSgpXG4gICAgICBcbiAgICAgIC8vIEVzY2FwYSBhc3BhcyBzaW1wbGVzIHBhcmEgZXZpdGFyIFNRTCBpbmplY3Rpb25cbiAgICAgIGNvbnN0IGVzY2FwZWRWYWx1ZSA9IHNlYXJjaFZhbHVlLnJlcGxhY2UoLycvZywgXCInJ1wiKVxuXG4gICAgICAvLyBWZXJpZmljYSBzZSBhIGNhbWFkYSBlc3TDoSBjYXJyZWdhZGEgZSBvYnTDqW0gaW5mb3JtYcOnw7VlcyBkb3MgY2FtcG9zXG4gICAgICAvLyBBZ3VhcmRhIGEgY2FtYWRhIGVzdGFyIGNvbXBsZXRhbWVudGUgY2FycmVnYWRhXG4gICAgICBjb25zdCBjaGVja0FuZFF1ZXJ5ID0gKCkgPT4ge1xuICAgICAgICAvLyBMaXN0YSBkZSBwb3Nzw612ZWlzIG5vbWVzIGRlIGNvbHVuYSAoY2FzZS1pbnNlbnNpdGl2ZSlcbiAgICAgICAgY29uc3QgcG9zc2libGVGaWVsZE5hbWVzID0gWydpZGVhJywgJ0lERUEnLCAnSWRlYScsICdJRCcsICdpZCcsICdJZCddXG4gICAgICAgIGxldCBmaWVsZE5hbWUgPSAnaWRlYScgLy8gUGFkcsOjb1xuICAgICAgICBcbiAgICAgICAgLy8gVGVudGEgZW5jb250cmFyIG8gY2FtcG8gY29ycmV0b1xuICAgICAgICBpZiAobGF5ZXIuZmllbGRzICYmIGxheWVyLmZpZWxkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29uc3QgZm91bmRGaWVsZCA9IGxheWVyLmZpZWxkcy5maW5kKGZpZWxkID0+IFxuICAgICAgICAgICAgcG9zc2libGVGaWVsZE5hbWVzLmluY2x1ZGVzKGZpZWxkLm5hbWUpXG4gICAgICAgICAgKVxuICAgICAgICAgIGlmIChmb3VuZEZpZWxkKSB7XG4gICAgICAgICAgICBmaWVsZE5hbWUgPSBmb3VuZEZpZWxkLm5hbWVcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gU2UgbsOjbyBlbmNvbnRyYXIsIHRlbnRhIGZhemVyIHVtYSBidXNjYSBjYXNlLWluc2Vuc2l0aXZlXG4gICAgICAgICAgICBjb25zdCBjYXNlSW5zZW5zaXRpdmVGaWVsZCA9IGxheWVyLmZpZWxkcy5maW5kKGZpZWxkID0+IFxuICAgICAgICAgICAgICBmaWVsZC5uYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdpZGVhJ1xuICAgICAgICAgICAgKVxuICAgICAgICAgICAgaWYgKGNhc2VJbnNlbnNpdGl2ZUZpZWxkKSB7XG4gICAgICAgICAgICAgIGZpZWxkTmFtZSA9IGNhc2VJbnNlbnNpdGl2ZUZpZWxkLm5hbWVcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIExvZyBkb3MgY2FtcG9zIGRpc3BvbsOtdmVpcyBwYXJhIGRlYnVnXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDYW1wb3MgZGlzcG9uw612ZWlzIG5hIGNhbWFkYTonLCBsYXllci5maWVsZHMubWFwKGYgPT4gZi5uYW1lKSlcbiAgICAgICAgICAgICAgLy8gVGVudGEgdXNhciBvIHByaW1laXJvIGNhbXBvIHF1ZSBwYXJlY2Ugc2VyIHVtIElEXG4gICAgICAgICAgICAgIGNvbnN0IGlkRmllbGQgPSBsYXllci5maWVsZHMuZmluZChmaWVsZCA9PiBcbiAgICAgICAgICAgICAgICBmaWVsZC50eXBlID09PSAnZXNyaUZpZWxkVHlwZVN0cmluZycgfHwgZmllbGQudHlwZSA9PT0gJ2VzcmlGaWVsZFR5cGVJbnRlZ2VyJyB8fCBmaWVsZC50eXBlID09PSAnZXNyaUZpZWxkVHlwZURvdWJsZSdcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBpZiAoaWRGaWVsZCkge1xuICAgICAgICAgICAgICAgIGZpZWxkTmFtZSA9IGlkRmllbGQubmFtZVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBVc2FuZG8gY2FtcG86ICR7ZmllbGROYW1lfWApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDcmlhIHVtYSBxdWVyeSBwYXJhIGJ1c2NhciBvIHBvbMOtZ29ubyBwZWxhIGNvbHVuYVxuICAgICAgICAvLyBVc2EgTElLRSBwYXJhIGJ1c2NhIG1haXMgZmxleMOtdmVsIGUgdHJhdGEgY29tbyBzdHJpbmdcbiAgICAgICAgY29uc3QgcXVlcnkgPSBsYXllci5jcmVhdGVRdWVyeSgpXG4gICAgICAgIFxuICAgICAgICAvLyBUZW50YSBkaWZlcmVudGVzIGFib3JkYWdlbnMgZGUgcXVlcnlcbiAgICAgICAgLy8gMS4gQnVzY2EgZXhhdGEgY29tbyBzdHJpbmdcbiAgICAgICAgLy8gMi4gQnVzY2EgY29tIExJS0UgcGFyYSB2YWxvcmVzIHBhcmNpYWlzXG4gICAgICAgIC8vIDMuIEJ1c2NhIGNvbW8gbsO6bWVybyAoc2UgbyB2YWxvciBmb3IgbnVtw6lyaWNvKVxuICAgICAgICBjb25zdCBoYXNTcGVjaWFsQ2hhcnMgPSBzZWFyY2hWYWx1ZS5pbmRleE9mKCcuJykgIT09IC0xIHx8IHNlYXJjaFZhbHVlLmluZGV4T2YoJy8nKSAhPT0gLTFcbiAgICAgICAgXG4gICAgICAgIC8vIFBhcmEgdmFsb3JlcyBjb20gY2FyYWN0ZXJlcyBlc3BlY2lhaXMgKGNvbW8gXCIwMDMuOS40MjcwNzQvMjAyNVwiKSwgdXNhIGFwZW5hcyBjb21vIHN0cmluZ1xuICAgICAgICBpZiAoaGFzU3BlY2lhbENoYXJzKSB7XG4gICAgICAgICAgcXVlcnkud2hlcmUgPSBgJHtmaWVsZE5hbWV9ID0gJyR7ZXNjYXBlZFZhbHVlfSdgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gU2UgZm9yIHVtIG7Dum1lcm8gc2ltcGxlcywgdGVudGEgY29tbyBuw7ptZXJvIGUgY29tbyBzdHJpbmdcbiAgICAgICAgICBjb25zdCBpc051bWVyaWMgPSAhaXNOYU4ocGFyc2VGbG9hdChzZWFyY2hWYWx1ZSkpICYmIGlzRmluaXRlKHBhcnNlRmxvYXQoc2VhcmNoVmFsdWUpKVxuICAgICAgICAgIGlmIChpc051bWVyaWMpIHtcbiAgICAgICAgICAgIHF1ZXJ5LndoZXJlID0gYCR7ZmllbGROYW1lfSA9ICR7c2VhcmNoVmFsdWV9IE9SICR7ZmllbGROYW1lfSA9ICcke2VzY2FwZWRWYWx1ZX0nYFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBxdWVyeS53aGVyZSA9IGAke2ZpZWxkTmFtZX0gPSAnJHtlc2NhcGVkVmFsdWV9J2BcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHF1ZXJ5LnJldHVybkdlb21ldHJ5ID0gdHJ1ZVxuXG4gICAgICAgIC8vIEV4ZWN1dGEgYSBxdWVyeVxuICAgICAgICBsYXllci5xdWVyeUZlYXR1cmVzKHF1ZXJ5KS50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3VsdHMuZmVhdHVyZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAvLyBTZSBuw6NvIGVuY29udHJvdSwgdGVudGEgY29tIExJS0VcbiAgICAgICAgICAgIGNvbnN0IGxpa2VRdWVyeSA9IGxheWVyLmNyZWF0ZVF1ZXJ5KClcbiAgICAgICAgICAgIGxpa2VRdWVyeS53aGVyZSA9IGAke2ZpZWxkTmFtZX0gTElLRSAnJSR7ZXNjYXBlZFZhbHVlfSUnYFxuICAgICAgICAgICAgbGlrZVF1ZXJ5LnJldHVybkdlb21ldHJ5ID0gdHJ1ZVxuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gbGF5ZXIucXVlcnlGZWF0dXJlcyhsaWtlUXVlcnkpLnRoZW4oKGxpa2VSZXN1bHRzKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChsaWtlUmVzdWx0cy5mZWF0dXJlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBhbGVydChgTmVuaHVtIHBvbMOtZ29ubyBlbmNvbnRyYWRvIGNvbSAke2ZpZWxkTmFtZX0gPSAke3NlYXJjaFZhbHVlfWApXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC8vIFNlIGVuY29udHJvdSBjb20gTElLRSwgdXNhIG8gcHJpbWVpcm8gcmVzdWx0YWRvXG4gICAgICAgICAgICAgIGNvbnN0IGZvdW5kR3JhcGhpYyA9IGxpa2VSZXN1bHRzLmZlYXR1cmVzWzBdXG4gICAgICAgICAgICAgIGNvbnN0IGFjdHVhbFZhbHVlID0gZm91bmRHcmFwaGljLmF0dHJpYnV0ZXNbZmllbGROYW1lXVxuICAgICAgICAgICAgICB0aGlzLmFwcGx5RmlsdGVyQW5kWm9vbShsYXllciwgZm91bmRHcmFwaGljLCBmaWVsZE5hbWUsIGFjdHVhbFZhbHVlKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBTZSBlbmNvbnRyb3UsIGFwbGljYSBmaWx0cm8gZSB6b29tXG4gICAgICAgICAgY29uc3QgZm91bmRHcmFwaGljID0gcmVzdWx0cy5mZWF0dXJlc1swXVxuICAgICAgICAgIGNvbnN0IGFjdHVhbFZhbHVlID0gZm91bmRHcmFwaGljLmF0dHJpYnV0ZXNbZmllbGROYW1lXVxuICAgICAgICAgIHRoaXMuYXBwbHlGaWx0ZXJBbmRab29tKGxheWVyLCBmb3VuZEdyYXBoaWMsIGZpZWxkTmFtZSwgYWN0dWFsVmFsdWUpXG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gcGVzcXVpc2FyIGZlYXR1cmVzOicsIGVycm9yKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0RldGFsaGVzIGRvIGVycm86Jywge1xuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcbiAgICAgICAgICAgIGRldGFpbHM6IGVycm9yLmRldGFpbHMsXG4gICAgICAgICAgICBmaWVsZE5hbWU6IGZpZWxkTmFtZSxcbiAgICAgICAgICAgIHNlYXJjaFZhbHVlOiBzZWFyY2hWYWx1ZVxuICAgICAgICAgIH0pXG4gICAgICAgICAgXG4gICAgICAgICAgLy8gVGVudGEgbW9zdHJhciBpbmZvcm1hw6fDtWVzIG1haXMgw7p0ZWlzXG4gICAgICAgICAgbGV0IGVycm9yTWVzc2FnZSA9ICdFcnJvIGFvIHBlc3F1aXNhci4gJ1xuICAgICAgICAgIGlmIChsYXllci5maWVsZHMgJiYgbGF5ZXIuZmllbGRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkTmFtZXMgPSBsYXllci5maWVsZHMubWFwKGYgPT4gZi5uYW1lKS5qb2luKCcsICcpXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgKz0gYFxcblxcbkNhbXBvcyBkaXNwb27DrXZlaXM6ICR7ZmllbGROYW1lc31gXG4gICAgICAgICAgfVxuICAgICAgICAgIGVycm9yTWVzc2FnZSArPSBgXFxuXFxuVmVyaWZpcXVlIHNlIGEgY29sdW5hIFwiJHtmaWVsZE5hbWV9XCIgZXhpc3RlIGUgc2UgbyB2YWxvciBcIiR7c2VhcmNoVmFsdWV9XCIgZXN0w6EgY29ycmV0by5gXG4gICAgICAgICAgXG4gICAgICAgICAgYWxlcnQoZXJyb3JNZXNzYWdlKVxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgXG4gICAgICAvLyBTZSBhIGNhbWFkYSBqw6EgZXN0w6EgY2FycmVnYWRhLCBleGVjdXRhIGRpcmV0YW1lbnRlXG4gICAgICBpZiAobGF5ZXIubG9hZGVkKSB7XG4gICAgICAgIGNoZWNrQW5kUXVlcnkoKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQWd1YXJkYSBhIGNhbWFkYSBjYXJyZWdhclxuICAgICAgICBsYXllci53aGVuKCgpID0+IHtcbiAgICAgICAgICBjaGVja0FuZFF1ZXJ5KClcbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBhbyBjYXJyZWdhciBpbmZvcm1hw6fDtWVzIGRhIGNhbWFkYTonLCBlcnJvcilcbiAgICAgICAgICBhbGVydCgnRXJybyBhbyBjYXJyZWdhciBpbmZvcm1hw6fDtWVzIGRhIGNhbWFkYS4gVmVyaWZpcXVlIHNlIGEgY2FtYWRhIGVzdMOhIGFjZXNzw612ZWwuJylcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLy8gRnVuw6fDo28gYXV4aWxpYXIgcGFyYSBhcGxpY2FyIGZpbHRybyBlIHpvb21cbiAgYXBwbHlGaWx0ZXJBbmRab29tID0gKGxheWVyLCBncmFwaGljLCBmaWVsZE5hbWUsIGFjdHVhbFZhbHVlKSA9PiB7XG4gICAgLy8gT2J0w6ltIG8gdmFsb3IgcmVhbCBkbyBhdHJpYnV0byBkbyBncmFwaGljXG4gICAgY29uc3QgYXR0cmlidXRlVmFsdWUgPSBncmFwaGljLmF0dHJpYnV0ZXNbZmllbGROYW1lXVxuICAgIFxuICAgIC8vIFNlIG8gdmFsb3IgbsOjbyBmb2kgcGFzc2FkbywgdXNhIG8gZG8gYXRyaWJ1dG9cbiAgICBjb25zdCB2YWx1ZVRvRmlsdGVyID0gYWN0dWFsVmFsdWUgIT09IHVuZGVmaW5lZCA/IGFjdHVhbFZhbHVlIDogYXR0cmlidXRlVmFsdWVcbiAgICBcbiAgICAvLyBFc2NhcGEgbyB2YWxvciBwYXJhIFNRTCAodHJhdGEgc3RyaW5ncywgbsO6bWVyb3MgZSBudWxsKVxuICAgIGxldCBkZWZpbml0aW9uRXhwcmVzc2lvblxuICAgIGlmICh2YWx1ZVRvRmlsdGVyID09PSBudWxsIHx8IHZhbHVlVG9GaWx0ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZGVmaW5pdGlvbkV4cHJlc3Npb24gPSBgJHtmaWVsZE5hbWV9IElTIE5VTExgXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWVUb0ZpbHRlciA9PT0gJ251bWJlcicpIHtcbiAgICAgIGRlZmluaXRpb25FeHByZXNzaW9uID0gYCR7ZmllbGROYW1lfSA9ICR7dmFsdWVUb0ZpbHRlcn1gXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIMOJIHVtYSBzdHJpbmcsIHByZWNpc2EgZXNjYXBhciBhc3BhcyBzaW1wbGVzXG4gICAgICBjb25zdCBlc2NhcGVkVmFsdWUgPSBTdHJpbmcodmFsdWVUb0ZpbHRlcikucmVwbGFjZSgvJy9nLCBcIicnXCIpXG4gICAgICBkZWZpbml0aW9uRXhwcmVzc2lvbiA9IGAke2ZpZWxkTmFtZX0gPSAnJHtlc2NhcGVkVmFsdWV9J2BcbiAgICB9XG4gICAgXG4gICAgY29uc29sZS5sb2coYEFwbGljYW5kbyBmaWx0cm86ICR7ZmllbGROYW1lfSA9ICR7dmFsdWVUb0ZpbHRlcn1gKVxuICAgIGNvbnNvbGUubG9nKGBEZWZpbml0aW9uIEV4cHJlc3Npb246ICR7ZGVmaW5pdGlvbkV4cHJlc3Npb259YClcblxuICAgIC8vIEFwbGljYSBvIGZpbHRybyBuYSBjYW1hZGEgdXNhbmRvIGRlZmluaXRpb25FeHByZXNzaW9uXG4gICAgLy8gSXNzbyDDqSBvIG3DqXRvZG8gY29ycmV0byBwYXJhIGZpbHRyYXIgdW1hIEZlYXR1cmVMYXllciBlIG9jdWx0YXIgb3V0cm9zIHBvbMOtZ29ub3NcbiAgICBsYXllci5kZWZpbml0aW9uRXhwcmVzc2lvbiA9IGRlZmluaXRpb25FeHByZXNzaW9uXG4gICAgXG4gICAgLy8gRm9yw6dhIGEgYXR1YWxpemHDp8OjbyBpbWVkaWF0YSBkYSBjYW1hZGEgcGFyYSBhcGxpY2FyIG8gZmlsdHJvXG4gICAgbGF5ZXIucmVmcmVzaCgpXG4gICAgXG4gICAgY29uc29sZS5sb2coJ0ZpbHRybyBhcGxpY2Fkby4gQSBjYW1hZGEgZGV2ZSBtb3N0cmFyIEFQRU5BUyBvIHBvbMOtZ29ubyBzZWxlY2lvbmFkbycpXG4gICAgY29uc29sZS5sb2coJ0RlZmluaXRpb24gRXhwcmVzc2lvbjonLCBkZWZpbml0aW9uRXhwcmVzc2lvbilcbiAgICBcbiAgICAvLyBBZ3VhcmRhIHVtIHBvdWNvIHBhcmEgZ2FyYW50aXIgcXVlIG8gZmlsdHJvIHNlamEgcHJvY2Vzc2Fkb1xuICAgIC8vIEFndWFyZGEgcXVlIGEgY2FtYWRhIGVzdGVqYSBjb21wbGV0YW1lbnRlIGNhcnJlZ2FkYSBhbnRlcyBkZSBhcGxpY2FyIG8gZmlsdHJvXG4gICAgaWYgKGxheWVyLmxvYWRlZCkge1xuICAgICAgLy8gQSBjYW1hZGEgasOhIGVzdMOhIGNhcnJlZ2FkYSwgYXBsaWNhIG8gZmlsdHJvIGRpcmV0YW1lbnRlXG4gICAgICAvLyBBZ3VhcmRhIHVtIHBvdWNvIHBhcmEgZ2FyYW50aXIgcXVlIG8gZmlsdHJvIHNlamEgYXBsaWNhZG9cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyBWZXJpZmljYSBzZSBvIGZpbHRybyBmb2kgYXBsaWNhZG9cbiAgICAgICAgaWYgKGxheWVyLmRlZmluaXRpb25FeHByZXNzaW9uID09PSBkZWZpbml0aW9uRXhwcmVzc2lvbikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdGaWx0cm8gY29uZmlybWFkbyBuYSBjYW1hZGEnKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYXBwbHlab29tQWZ0ZXJGaWx0ZXIobGF5ZXIsIGdyYXBoaWMpXG4gICAgICB9LCAzMDApXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEFndWFyZGEgYSBjYW1hZGEgY2FycmVnYXIgcHJpbWVpcm9cbiAgICAgIGxheWVyLndoZW4oKCkgPT4ge1xuICAgICAgICAvLyBBcGxpY2EgbyBmaWx0cm8gbm92YW1lbnRlIGFww7NzIGNhcnJlZ2FyIChnYXJhbnRpYSlcbiAgICAgICAgbGF5ZXIuZGVmaW5pdGlvbkV4cHJlc3Npb24gPSBkZWZpbml0aW9uRXhwcmVzc2lvblxuICAgICAgICBsYXllci5yZWZyZXNoKClcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5hcHBseVpvb21BZnRlckZpbHRlcihsYXllciwgZ3JhcGhpYylcbiAgICAgICAgfSwgMzAwKVxuICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gYWd1YXJkYXIgY2FtYWRhOicsIGVycm9yKVxuICAgICAgICAvLyBNZXNtbyBhc3NpbSB0ZW50YSBhcGxpY2FyIG8gem9vbVxuICAgICAgICB0aGlzLmFwcGx5Wm9vbUFmdGVyRmlsdGVyKGxheWVyLCBncmFwaGljKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICAvLyBGdW7Dp8OjbyBhdXhpbGlhciBwYXJhIGFwbGljYXIgem9vbSBhcMOzcyBvIGZpbHRyb1xuICBhcHBseVpvb21BZnRlckZpbHRlciA9IChsYXllciwgZ3JhcGhpYykgPT4ge1xuICAgIC8vIEFndWFyZGEgdW0gcG91Y28gcGFyYSBnYXJhbnRpciBxdWUgbyBmaWx0cm8gc2VqYSBwcm9jZXNzYWRvIHBlbGEgY2FtYWRhXG4gICAgLy8gTyBkZWZpbml0aW9uRXhwcmVzc2lvbiBwcmVjaXNhIGRlIHRlbXBvIHBhcmEgc2VyIHByb2Nlc3NhZG9cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIC8vIETDoSB6b29tIG5vIHBvbMOtZ29ubyBlbmNvbnRyYWRvIGNvbSBwYWRkaW5nIHBhcmEgbsOjbyBjb3J0YXJcbiAgICAgIGlmIChncmFwaGljLmdlb21ldHJ5ICYmIHRoaXMuc3RhdGUuamltdU1hcFZpZXcgJiYgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3KSB7XG4gICAgICAgIC8vIFVzYSBnb1RvIGNvbSB0YXJnZXQgZSBwYWRkaW5nIGVtIHBpeGVscyBwYXJhIGNvbnRyb2xhciBtZWxob3IgbyB6b29tXG4gICAgICAgIC8vIFBhZGRpbmcgZGUgNTAgcGl4ZWxzIGVtIGNhZGEgbGFkbyBwYXJhIG7Do28gY29ydGFyIG8gcG9sw61nb25vXG4gICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5nb1RvKHtcbiAgICAgICAgICB0YXJnZXQ6IGdyYXBoaWMuZ2VvbWV0cnksXG4gICAgICAgICAgcGFkZGluZzoge1xuICAgICAgICAgICAgbGVmdDogNTAsXG4gICAgICAgICAgICByaWdodDogNTAsXG4gICAgICAgICAgICB0b3A6IDUwLFxuICAgICAgICAgICAgYm90dG9tOiA1MFxuICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgIGR1cmF0aW9uOiA1MDBcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ1pvb20gYXBsaWNhZG8gbm8gcG9sw61nb25vIGZpbHRyYWRvIGNvbSBwYWRkaW5nJylcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBhbyBkYXIgem9vbTonLCBlcnJvcilcbiAgICAgICAgICAvLyBGYWxsYmFjazogdGVudGEgem9vbSBjb20gZXh0ZW50IGNhbGN1bGFkbyBtYW51YWxtZW50ZVxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBleHRlbnQgPSBncmFwaGljLmdlb21ldHJ5LmV4dGVudFxuICAgICAgICAgICAgLy8gQWRpY2lvbmEgMTAlIGRlIHBhZGRpbmcgY2FsY3VsYWRvIGEgcGFydGlyIGRvIHRhbWFuaG8gZG8gZXh0ZW50XG4gICAgICAgICAgICBjb25zdCBwYWRkaW5nRmFjdG9yID0gMC4xXG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IGV4dGVudC53aWR0aFxuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gZXh0ZW50LmhlaWdodFxuICAgICAgICAgICAgY29uc3QgcGFkZGVkRXh0ZW50ID0gZXh0ZW50LmV4cGFuZCh3aWR0aCAqIHBhZGRpbmdGYWN0b3IsIGhlaWdodCAqIHBhZGRpbmdGYWN0b3IpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5nb1RvKHBhZGRlZEV4dGVudCwge1xuICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1pvb20gYXBsaWNhZG8gdXNhbmRvIGV4dGVudCBjb20gcGFkZGluZyBjYWxjdWxhZG8nKVxuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcbiAgICAgICAgICAgIH0pLmNhdGNoKChmYWxsYmFja0Vycm9yKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gbm8gem9vbSBkZSBmYWxsYmFjazonLCBmYWxsYmFja0Vycm9yKVxuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBjYXRjaCAoY2FsY0Vycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGFvIGNhbGN1bGFyIGV4dGVudDonLCBjYWxjRXJyb3IpXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcbiAgICAgIH1cbiAgICB9LCA1MDApXG4gIH1cblxuICAvLyBGdW7Dp8OjbyBwYXJhIGxpbXBhciBvIGZpbHRyb1xuICBoYW5kbGVDbGVhckZpbHRlciA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5mZWF0dXJlTGF5ZXIpIHtcbiAgICAgIC8vIFJlbW92ZSBvIGZpbHRybyBkZWZpbmluZG8gZGVmaW5pdGlvbkV4cHJlc3Npb24gY29tbyB2YXppbyBvdSBudWxsXG4gICAgICB0aGlzLnN0YXRlLmZlYXR1cmVMYXllci5kZWZpbml0aW9uRXhwcmVzc2lvbiA9IG51bGxcbiAgICAgIHRoaXMuc3RhdGUuZmVhdHVyZUxheWVyLnJlZnJlc2goKVxuICAgICAgY29uc29sZS5sb2coJ0ZpbHRybyByZW1vdmlkbyAtIHRvZG9zIG9zIGFsZXJ0YXMgZGV2ZW0gYXBhcmVjZXIgbm92YW1lbnRlJylcbiAgICAgIFxuICAgICAgLy8gQWd1YXJkYSB1bSBwb3VjbyBwYXJhIGdhcmFudGlyIHF1ZSBvIGZpbHRybyBzZWphIHJlbW92aWRvXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gVmVyaWZpY2Egc2UgbyBmaWx0cm8gZm9pIHJlbW92aWRvXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5mZWF0dXJlTGF5ZXIuZGVmaW5pdGlvbkV4cHJlc3Npb24gfHwgdGhpcy5zdGF0ZS5mZWF0dXJlTGF5ZXIuZGVmaW5pdGlvbkV4cHJlc3Npb24gPT09ICcnKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ0ZpbHRybyBjb25maXJtYWRvIGNvbW8gcmVtb3ZpZG8nKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBSZXN0YXVyYSBhIHZpc3VhbGl6YcOnw6NvIGluaWNpYWwgZG8gbWFwYVxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5qaW11TWFwVmlldyAmJiB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcpIHtcbiAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5pbml0aWFsRXh0ZW50KSB7XG4gICAgICAgICAgICAvLyBSZXN0YXVyYSBhIGV4dGVuc8OjbyBpbmljaWFsIHNhbHZhXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcuZ29Ubyh0aGlzLnN0YXRlLmluaXRpYWxFeHRlbnQsIHtcbiAgICAgICAgICAgICAgZHVyYXRpb246IDUwMFxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdWaXN1YWxpemHDp8OjbyBpbmljaWFsIHJlc3RhdXJhZGEnKVxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gcmVzdGF1cmFyIHZpc3VhbGl6YcOnw6NvIGluaWNpYWw6JywgZXJyb3IpXG4gICAgICAgICAgICAgIC8vIFNlIGZhbGhhciwgdGVudGEgZmF6ZXIgem9vbSBwYXJhIGEgY2FtYWRhIGNvbXBsZXRhXG4gICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmZlYXR1cmVMYXllciAmJiB0aGlzLnN0YXRlLmZlYXR1cmVMYXllci5mdWxsRXh0ZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3LmdvVG8odGhpcy5zdGF0ZS5mZWF0dXJlTGF5ZXIuZnVsbEV4dGVudCwge1xuICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDUwMFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFNlIG7Do28gdGl2ZXIgZXh0ZW5zw6NvIGluaWNpYWwgc2FsdmEsIHRlbnRhIGZhemVyIHpvb20gcGFyYSBhIGNhbWFkYSBjb21wbGV0YVxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZmVhdHVyZUxheWVyICYmIHRoaXMuc3RhdGUuZmVhdHVyZUxheWVyLmZ1bGxFeHRlbnQpIHtcbiAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3LmdvVG8odGhpcy5zdGF0ZS5mZWF0dXJlTGF5ZXIuZnVsbEV4dGVudCwge1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDBcbiAgICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1pvb20gcGFyYSBjYW1hZGEgY29tcGxldGEgYXBsaWNhZG8nKVxuICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGFvIGZhemVyIHpvb20gcGFyYSBjYW1hZGEgY29tcGxldGE6JywgZXJyb3IpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCAzMDApXG4gICAgICBcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBpZGVhU2VhcmNoSW5wdXQ6ICcnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIEZ1bsOnw6NvIHBhcmEgZ2VyYXIgcmVsYXTDs3JpbyB1c2FuZG8gYSBmZXJyYW1lbnRhIGRlIGdlb3Byb2Nlc3NhbWVudG9cbiAgaGFuZGxlR2VuZXJhdGVSZXBvcnQgPSBhc3luYyAoKSA9PiB7XG4gICAgLy8gRGVjbGFyYSB2YXJpw6F2ZWlzIG5vIGVzY29wbyBkYSBmdW7Dp8OjbyBwYXJhIHF1ZSBlc3RlamFtIGFjZXNzw612ZWlzIG5vIGNhdGNoXG4gICAgbGV0IGlkZWFOdW1iZXIgPSAnJ1xuICAgIGxldCBwYXJhbU5hbWUgPSBudWxsXG4gICAgbGV0IGV4ZWN1dGVVcmwgPSAnJ1xuICAgIGxldCB0b2tlbiA9IG51bGxcbiAgICBcbiAgICAvLyBWYWxpZGHDp8O1ZXMgaW5pY2lhaXNcbiAgICBpZiAodGhpcy5zdGF0ZS5pZGVhU2VhcmNoSW5wdXQgPT09ICcnIHx8IHRoaXMuc3RhdGUuaWRlYVNlYXJjaElucHV0LnRyaW0oKSA9PT0gJycpIHtcbiAgICAgIGFsZXJ0KCdQb3IgZmF2b3IsIGRpZ2l0ZSB1bSBuw7ptZXJvIGRlIGlkZWEgcGFyYSBnZXJhciBvIHJlbGF0w7NyaW8uJylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlkZWFOdW1iZXIgPSB0aGlzLnN0YXRlLmlkZWFTZWFyY2hJbnB1dC50cmltKClcbiAgICBcbiAgICAvLyBWYWxpZGHDp8OjbyBkbyBmb3JtYXRvIGRvIG7Dum1lcm8gZGUgaWRlYVxuICAgIC8vIEZvcm1hdG8gZXNwZXJhZG86IFhYWC5YLlhYWFhYWC9ZWVlZIChleDogMDAzLjkuNDI3Mzg0LzIwMjUpXG4gICAgY29uc3QgaWRlYVBhdHRlcm4gPSAvXlxcZHsxLDN9XFwuXFxkezEsMn1cXC5cXGR7MSw2fVxcL1xcZHs0fSQvXG4gICAgaWYgKCFpZGVhUGF0dGVybi50ZXN0KGlkZWFOdW1iZXIpKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0Zvcm1hdG8gZG8gbsO6bWVybyBkZSBpZGVhIHBvZGUgZXN0YXIgaW5jb3JyZXRvOicsIGlkZWFOdW1iZXIpXG4gICAgICBjb25zb2xlLndhcm4oJ0Zvcm1hdG8gZXNwZXJhZG86IFhYWC5YLlhYWFhYWC9ZWVlZIChleDogMDAzLjkuNDI3Mzg0LzIwMjUpJylcbiAgICAgIC8vIE7Do28gYmxvcXVlaWEsIGFwZW5hcyBhdmlzYSBubyBjb25zb2xlXG4gICAgfVxuICAgIFxuICAgIC8vIFJlbW92ZSBlc3Bhw6dvcyBleHRyYXMgZSBjYXJhY3RlcmVzIGludmlzw612ZWlzXG4gICAgaWRlYU51bWJlciA9IGlkZWFOdW1iZXIucmVwbGFjZSgvXFxzKy9nLCAnJykudHJpbSgpXG4gICAgXG4gICAgLy8gVmFsaWRhw6fDo28gZGUgY29tcHJpbWVudG8gbcOtbmltb1xuICAgIGlmIChpZGVhTnVtYmVyLmxlbmd0aCA8IDEwKSB7XG4gICAgICBhbGVydCgnTyBuw7ptZXJvIGRlIGlkZWEgcGFyZWNlIGVzdGFyIGluY29tcGxldG8uIFZlcmlmaXF1ZSBvIGZvcm1hdG86IFhYWC5YLlhYWFhYWC9ZWVlZJylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBcbiAgICBjb25zb2xlLmxvZygnPT09IFZBTElEQcOHw4NPIERPIFZBTE9SID09PScpXG4gICAgY29uc29sZS5sb2coJ1ZhbG9yIG9yaWdpbmFsOicsIHRoaXMuc3RhdGUuaWRlYVNlYXJjaElucHV0KVxuICAgIGNvbnNvbGUubG9nKCdWYWxvciBwcm9jZXNzYWRvOicsIGlkZWFOdW1iZXIpXG4gICAgY29uc29sZS5sb2coJ0NvbXByaW1lbnRvOicsIGlkZWFOdW1iZXIubGVuZ3RoKVxuICAgIGNvbnNvbGUubG9nKCdGb3JtYXRvIHbDoWxpZG86JywgaWRlYVBhdHRlcm4udGVzdChpZGVhTnVtYmVyKSlcbiAgICBcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnNvbGUubG9nKCdJbmljaWFuZG8gZ2VyYcOnw6NvIGRlIHJlbGF0w7NyaW8gcGFyYSBpZGVhOicsIGlkZWFOdW1iZXIpXG4gICAgICBcbiAgICAgIC8vIENhcnJlZ2EgSWRlbnRpdHlNYW5hZ2VyIHBhcmEgb2J0ZXIgdG9rZW4gZGUgYXV0ZW50aWNhw6fDo29cbiAgICAgIGNvbnNvbGUubG9nKCdDYXJyZWdhbmRvIElkZW50aXR5TWFuYWdlciBwYXJhIGF1dGVudGljYcOnw6NvLi4uJylcbiAgICAgIGNvbnN0IGlkZW50aXR5TW9kdWxlcyA9IGF3YWl0IGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xuICAgICAgICAnZXNyaS9pZGVudGl0eS9JZGVudGl0eU1hbmFnZXInXG4gICAgICBdKVxuICAgICAgY29uc3QgW0lkZW50aXR5TWFuYWdlcl0gPSBpZGVudGl0eU1vZHVsZXNcbiAgICAgIFxuICAgICAgLy8gT2J0w6ltIG8gdG9rZW4gcGFyYSBhIFVSTCBkbyBzZXJ2acOnbyAoasOhIGRlY2xhcmFkbyBubyBpbsOtY2lvIGRhIGZ1bsOnw6NvKVxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY3JlZGVudGlhbCA9IElkZW50aXR5TWFuYWdlci5maW5kQ3JlZGVudGlhbCh0aGlzLkdQX1NFUlZJQ0VfVVJMKVxuICAgICAgICBpZiAoY3JlZGVudGlhbCAmJiBjcmVkZW50aWFsLnRva2VuKSB7XG4gICAgICAgICAgdG9rZW4gPSBjcmVkZW50aWFsLnRva2VuXG4gICAgICAgICAgY29uc29sZS5sb2coJ1Rva2VuIGVuY29udHJhZG8gdmlhIElkZW50aXR5TWFuYWdlcicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gVGVudGEgZ2VyYXIgdG9rZW4gYXV0b21hdGljYW1lbnRlXG4gICAgICAgICAgY29uc3Qgc2VydmVySW5mbyA9IElkZW50aXR5TWFuYWdlci5maW5kU2VydmVySW5mbyh0aGlzLkdQX1NFUlZJQ0VfVVJMKVxuICAgICAgICAgIGlmIChzZXJ2ZXJJbmZvKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnT2J0ZW5kbyB0b2tlbiBhdXRvbWF0aWNhbWVudGUuLi4nKVxuICAgICAgICAgICAgYXdhaXQgSWRlbnRpdHlNYW5hZ2VyLmNoZWNrU2lnbkluU3RhdHVzKHRoaXMuR1BfU0VSVklDRV9VUkwpXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkQ3JlZGVudGlhbCA9IElkZW50aXR5TWFuYWdlci5maW5kQ3JlZGVudGlhbCh0aGlzLkdQX1NFUlZJQ0VfVVJMKVxuICAgICAgICAgICAgaWYgKHVwZGF0ZWRDcmVkZW50aWFsICYmIHVwZGF0ZWRDcmVkZW50aWFsLnRva2VuKSB7XG4gICAgICAgICAgICAgIHRva2VuID0gdXBkYXRlZENyZWRlbnRpYWwudG9rZW5cbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1Rva2VuIG9idGlkbyBhdXRvbWF0aWNhbWVudGUnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAodG9rZW5FcnJvcikge1xuICAgICAgICBjb25zb2xlLndhcm4oJ0Vycm8gYW8gb2J0ZXIgdG9rZW4sIHRlbnRhbmRvIHNlbSBhdXRlbnRpY2HDp8OjbzonLCB0b2tlbkVycm9yKVxuICAgICAgfVxuICAgICAgXG4gICAgICAvLyBGdW7Dp8OjbyBhdXhpbGlhciBwYXJhIGFkaWNpb25hciB0b2tlbiDDoHMgVVJMc1xuICAgICAgY29uc3QgYWRkVG9rZW5Ub1VybCA9ICh1cmwpID0+IHtcbiAgICAgICAgaWYgKCF0b2tlbikge1xuICAgICAgICAgIHJldHVybiB1cmxcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHVybE9iaiA9IG5ldyBVUkwodXJsKVxuICAgICAgICAgIHVybE9iai5zZWFyY2hQYXJhbXMuc2V0KCd0b2tlbicsIHRva2VuKVxuICAgICAgICAgIHJldHVybiB1cmxPYmoudG9TdHJpbmcoKVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gU2UgYSBVUkwgbsOjbyBmb3IgYWJzb2x1dGEsIHRyYXRhIGNvbW8gc3RyaW5nXG4gICAgICAgICAgY29uc3Qgc2VwYXJhdG9yID0gdXJsLmluY2x1ZGVzKCc/JykgPyAnJicgOiAnPydcbiAgICAgICAgICByZXR1cm4gYCR7dXJsfSR7c2VwYXJhdG9yfXRva2VuPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHRva2VuKX1gXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy8gUHJpbWVpcm8sIHZhbW9zIG9idGVyIGluZm9ybWHDp8O1ZXMgc29icmUgYSB0YXNrIGVzcGVjw61maWNhIHBhcmEgZGVzY29icmlyIG9zIHBhcsOibWV0cm9zXG4gICAgICBjb25zb2xlLmxvZygnT2J0ZW5kbyBpbmZvcm1hw6fDtWVzIGRhIHRhc2sgZXNwZWPDrWZpY2EuLi4nKVxuICAgICAgY29uc3QgdGFza05hbWVFbmNvZGVkID0gZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuR1BfVEFTS19OQU1FKVxuICAgICAgY29uc3QgaW5mb1VybCA9IGFkZFRva2VuVG9VcmwoYCR7dGhpcy5HUF9TRVJWSUNFX1VSTH0vJHt0YXNrTmFtZUVuY29kZWR9P2Y9anNvbmApXG4gICAgICBjb25zb2xlLmxvZygnVVJMIGRlIGluZm9ybWHDp8O1ZXMgZGEgdGFzazonLCBpbmZvVXJsKVxuICAgICAgXG4gICAgICAvLyBUZW50YSBvYnRlciBpbmZvcm1hw6fDtWVzIGRhIHRhc2sgZXNwZWPDrWZpY2EgcHJpbWVpcm9cbiAgICAgIGxldCBncEluZm9cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHRhc2tJbmZvUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChpbmZvVXJsKVxuICAgICAgICBpZiAodGFza0luZm9SZXNwb25zZS5vaykge1xuICAgICAgICAgIGdwSW5mbyA9IGF3YWl0IHRhc2tJbmZvUmVzcG9uc2UuanNvbigpXG4gICAgICAgICAgY29uc29sZS5sb2coJ0luZm9ybWHDp8O1ZXMgZGEgdGFzayBlc3BlY8OtZmljYSBvYnRpZGFzIGNvbSBzdWNlc3NvJylcbiAgICAgICAgICBjb25zb2xlLmxvZygnSW5mb3JtYcOnw7VlcyBjb21wbGV0YXMgZGEgdGFzazonLCBKU09OLnN0cmluZ2lmeShncEluZm8sIG51bGwsIDIpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFNlIGZhbGhhciwgdGVudGEgZGEgR1AgZ2VyYWxcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ07Do28gZm9pIHBvc3PDrXZlbCBvYnRlciBpbmZvcm1hw6fDtWVzIGRhIHRhc2ssIHRlbnRhbmRvIGRhIEdQIGdlcmFsLi4uJylcbiAgICAgICAgICBjb25zdCBncEluZm9VcmwgPSBhZGRUb2tlblRvVXJsKGAke3RoaXMuR1BfU0VSVklDRV9VUkx9P2Y9anNvbmApXG4gICAgICAgICAgY29uc3QgZ3BJbmZvUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChncEluZm9VcmwpXG4gICAgICAgICAgXG4gICAgICAgICAgaWYgKCFncEluZm9SZXNwb25zZS5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvIGFvIG9idGVyIGluZm9ybWHDp8O1ZXM6ICR7dGFza0luZm9SZXNwb25zZS5zdGF0dXN9ICR7dGFza0luZm9SZXNwb25zZS5zdGF0dXNUZXh0fWApXG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIGdwSW5mbyA9IGF3YWl0IGdwSW5mb1Jlc3BvbnNlLmpzb24oKVxuICAgICAgICAgIGNvbnNvbGUubG9nKCdVc2FuZG8gaW5mb3JtYcOnw7VlcyBkYSBHUCBnZXJhbCcpXG4gICAgICAgICAgY29uc29sZS5sb2coJ0luZm9ybWHDp8O1ZXMgY29tcGxldGFzIGRhIEdQOicsIEpTT04uc3RyaW5naWZ5KGdwSW5mbywgbnVsbCwgMikpXG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGluZm9FcnJvcikge1xuICAgICAgICAvLyBTZSBmYWxoYXIsIHRlbnRhIGRhIEdQIGdlcmFsXG4gICAgICAgIGNvbnNvbGUud2FybignRXJybyBhbyBvYnRlciBpbmZvcm1hw6fDtWVzIGRhIHRhc2ssIHRlbnRhbmRvIGRhIEdQIGdlcmFsLi4uJywgaW5mb0Vycm9yKVxuICAgICAgICBjb25zdCBncEluZm9VcmwgPSBhZGRUb2tlblRvVXJsKGAke3RoaXMuR1BfU0VSVklDRV9VUkx9P2Y9anNvbmApXG4gICAgICAgIGNvbnN0IGdwSW5mb1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goZ3BJbmZvVXJsKVxuICAgICAgICBncEluZm8gPSBhd2FpdCBncEluZm9SZXNwb25zZS5qc29uKClcbiAgICAgICAgY29uc29sZS5sb2coJ1VzYW5kbyBpbmZvcm1hw6fDtWVzIGRhIEdQIGdlcmFsIChmYWxsYmFjayknKVxuICAgICAgICBjb25zb2xlLmxvZygnSW5mb3JtYcOnw7VlcyBjb21wbGV0YXMgZGEgR1A6JywgSlNPTi5zdHJpbmdpZnkoZ3BJbmZvLCBudWxsLCAyKSlcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy8gRGVzY29icmUgcXVhbCDDqSBvIHBhcsOibWV0cm8gZGUgZW50cmFkYSBkYSBHUFxuICAgICAgLy8gSU1QT1JUQU5URTogRGV2ZW1vcyB1c2FyIGV4YXRhbWVudGUgbyBub21lIGRvIHBhcsOibWV0cm8gcXVlIGEgR1AgZXNwZXJhXG4gICAgICAvLyBPIHdpZGdldCByZWNlYmUgbyB2YWxvciBkYSBjb2x1bmEgXCJpZGVhXCIsIG1hcyBlbnZpYSBjb20gbyBub21lIHF1ZSBhIEdQIGVzcGVyYVxuICAgICAgbGV0IHBhcmFtTmFtZSA9IG51bGxcbiAgICAgIGxldCBwYXJhbUluZm8gPSBudWxsXG4gICAgICBcbiAgICAgIGlmIChncEluZm8ucGFyYW1ldGVycyAmJiBBcnJheS5pc0FycmF5KGdwSW5mby5wYXJhbWV0ZXJzKSkge1xuICAgICAgICBjb25zb2xlLmxvZygnPT09IFBBUsOCTUVUUk9TIERJU1BPTsONVkVJUyBOQSBHUCA9PT0nKVxuICAgICAgICBjb25zdCBhbGxQYXJhbXMgPSBncEluZm8ucGFyYW1ldGVycy5tYXAocCA9PiAoe1xuICAgICAgICAgIG5hbWU6IHAubmFtZSxcbiAgICAgICAgICBkaXNwbGF5TmFtZTogcC5kaXNwbGF5TmFtZSB8fCBwLm5hbWUsXG4gICAgICAgICAgZGF0YVR5cGU6IHAuZGF0YVR5cGUsXG4gICAgICAgICAgZGlyZWN0aW9uOiBwLmRpcmVjdGlvbixcbiAgICAgICAgICBwYXJhbWV0ZXJUeXBlOiBwLnBhcmFtZXRlclR5cGUsXG4gICAgICAgICAgcmVxdWlyZWQ6IHAucGFyYW1ldGVyVHlwZSA9PT0gJ2VzcmlHUFBhcmFtZXRlclR5cGVSZXF1aXJlZCcgfHwgcC5yZXF1aXJlZCA9PT0gdHJ1ZVxuICAgICAgICB9KSlcbiAgICAgICAgY29uc29sZS5sb2coJ1RvZG9zIG9zIHBhcsOibWV0cm9zOicsIEpTT04uc3RyaW5naWZ5KGFsbFBhcmFtcywgbnVsbCwgMikpXG4gICAgICAgIFxuICAgICAgICAvLyBQcm9jdXJhIHBlbG8gcHJpbWVpcm8gcGFyw6JtZXRybyBkZSBlbnRyYWRhIChpbnB1dClcbiAgICAgICAgY29uc3QgaW5wdXRQYXJhbXMgPSBncEluZm8ucGFyYW1ldGVycy5maWx0ZXIocCA9PiBcbiAgICAgICAgICAocC5kaXJlY3Rpb24gPT09ICdlc3JpR1BQYXJhbWV0ZXJEaXJlY3Rpb25JbnB1dCcgfHwgcC5kaXJlY3Rpb24gPT09ICdHUFBhcmFtZXRlckRpcmVjdGlvbklucHV0JykgJiZcbiAgICAgICAgICBwLm5hbWVcbiAgICAgICAgKVxuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coJ1BhcsOibWV0cm9zIGRlIGVudHJhZGEgZW5jb250cmFkb3M6JywgaW5wdXRQYXJhbXMubWFwKHAgPT4gKHtcbiAgICAgICAgICBuYW1lOiBwLm5hbWUsXG4gICAgICAgICAgZGlzcGxheU5hbWU6IHAuZGlzcGxheU5hbWUgfHwgcC5uYW1lLFxuICAgICAgICAgIGRhdGFUeXBlOiBwLmRhdGFUeXBlLFxuICAgICAgICAgIHJlcXVpcmVkOiBwLnBhcmFtZXRlclR5cGUgPT09ICdlc3JpR1BQYXJhbWV0ZXJUeXBlUmVxdWlyZWQnIHx8IHAucmVxdWlyZWQgPT09IHRydWVcbiAgICAgICAgfSkpKVxuICAgICAgICBcbiAgICAgICAgaWYgKGlucHV0UGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAvLyBVc2EgbyBwcmltZWlybyBwYXLDom1ldHJvIGRlIGVudHJhZGEgKHF1ZSDDqSBvIHF1ZSBhIEdQIGVzcGVyYSlcbiAgICAgICAgICBwYXJhbUluZm8gPSBpbnB1dFBhcmFtc1swXVxuICAgICAgICAgIHBhcmFtTmFtZSA9IHBhcmFtSW5mby5uYW1lIC8vIFVzYSBleGF0YW1lbnRlIG8gbm9tZSBxdWUgYSBHUCBlc3BlcmEgKHBvZGUgdGVyIGNhcmFjdGVyZXMgZXNwZWNpYWlzKVxuICAgICAgICAgIGNvbnNvbGUubG9nKCc9PT0gUEFSw4JNRVRSTyBTRUxFQ0lPTkFETyA9PT0nKVxuICAgICAgICAgIGNvbnNvbGUubG9nKCdOb21lIHTDqWNuaWNvIGRvIHBhcsOibWV0cm8gKHNlcsOhIHVzYWRvIG5vIHJlcXVlc3QpOicsIHBhcmFtTmFtZSlcbiAgICAgICAgICBjb25zb2xlLmxvZygnTm9tZSBkZSBleGliacOnw6NvIChsYWJlbCBuYSBpbnRlcmZhY2UpOicsIHBhcmFtSW5mby5kaXNwbGF5TmFtZSB8fCBwYXJhbUluZm8ubmFtZSlcbiAgICAgICAgICBjb25zb2xlLmxvZygnRGV0YWxoZXMgY29tcGxldG9zOicsIHtcbiAgICAgICAgICAgIG5hbWU6IHBhcmFtSW5mby5uYW1lLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IHBhcmFtSW5mby5kaXNwbGF5TmFtZSB8fCBwYXJhbUluZm8ubmFtZSxcbiAgICAgICAgICAgIGRhdGFUeXBlOiBwYXJhbUluZm8uZGF0YVR5cGUsXG4gICAgICAgICAgICBkaXJlY3Rpb246IHBhcmFtSW5mby5kaXJlY3Rpb24sXG4gICAgICAgICAgICByZXF1aXJlZDogcGFyYW1JbmZvLnBhcmFtZXRlclR5cGUgPT09ICdlc3JpR1BQYXJhbWV0ZXJUeXBlUmVxdWlyZWQnIHx8IHBhcmFtSW5mby5yZXF1aXJlZCA9PT0gdHJ1ZVxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignTmVuaHVtIHBhcsOibWV0cm8gZGUgZW50cmFkYSBlbmNvbnRyYWRvIG5hIEdQIScpXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOw6NvIGZvaSBwb3Nzw612ZWwgaWRlbnRpZmljYXIgbyBwYXLDom1ldHJvIGRlIGVudHJhZGEgZGEgZmVycmFtZW50YSBkZSBnZW9wcm9jZXNzYW1lbnRvLicpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ07Do28gZm9pIHBvc3PDrXZlbCBvYnRlciBwYXLDom1ldHJvcyBkYSBHUCEnKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ07Do28gZm9pIHBvc3PDrXZlbCBvYnRlciBpbmZvcm1hw6fDtWVzIGRvcyBwYXLDom1ldHJvcyBkYSBmZXJyYW1lbnRhIGRlIGdlb3Byb2Nlc3NhbWVudG8uJylcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy8gQ29uZmlybWEgcXVhbCBwYXLDom1ldHJvIHNlcsOhIHVzYWRvIChkZXZlIHNlciBleGF0YW1lbnRlIG8gcXVlIGEgR1AgZXNwZXJhKVxuICAgICAgY29uc29sZS5sb2coJz09PSBQQVLDgk1FVFJPIFBBUkEgRU5WSUFSIMOAIEdQID09PScpXG4gICAgICBjb25zb2xlLmxvZygnTm9tZSBkbyBwYXLDom1ldHJvIChleGF0YW1lbnRlIGNvbW8gYSBHUCBlc3BlcmEpOicsIHBhcmFtTmFtZSlcbiAgICAgIGNvbnNvbGUubG9nKCdWYWxvciBxdWUgc2Vyw6EgZW52aWFkbyAoZGEgY29sdW5hIGlkZWEgZG8gd2lkZ2V0KTonLCBpZGVhTnVtYmVyKVxuICAgICAgY29uc29sZS5sb2coJ0RldGFsaGVzIGNvbXBsZXRvcyBkbyBwYXLDom1ldHJvOicsIHBhcmFtSW5mbylcbiAgICAgIFxuICAgICAgLy8gVmVyaWZpY2EgbyB0aXBvIGRvIHBhcsOibWV0cm8gcGFyYSBmb3JtYXRhciBjb3JyZXRhbWVudGVcbiAgICAgIGxldCBwYXJhbVZhbHVlID0gaWRlYU51bWJlclxuICAgICAgaWYgKHBhcmFtSW5mbykge1xuICAgICAgICBjb25zb2xlLmxvZygnVGlwbyBkZSBkYWRvIGRvIHBhcsOibWV0cm86JywgcGFyYW1JbmZvLmRhdGFUeXBlKVxuICAgICAgICBjb25zb2xlLmxvZygnVGlwbyBkZSBwYXLDom1ldHJvOicsIHBhcmFtSW5mby5wYXJhbWV0ZXJUeXBlKVxuICAgICAgICBcbiAgICAgICAgLy8gU2UgbyBwYXLDom1ldHJvIGZvciBkbyB0aXBvIEdQU3RyaW5nIG91IHNpbWlsYXIsIGVudmlhIGNvbW8gc3RyaW5nXG4gICAgICAgIC8vIFNlIGZvciBVUkwgb3Ugb3V0cm8gdGlwbyBjb21wbGV4bywgcG9kZSBwcmVjaXNhciBkZSBmb3JtYXRvIGRpZmVyZW50ZVxuICAgICAgICBpZiAocGFyYW1JbmZvLmRhdGFUeXBlID09PSAnR1BTdHJpbmcnIHx8IHBhcmFtSW5mby5kYXRhVHlwZSA9PT0gJ2VzcmlHUFR5cGVTdHJpbmcnKSB7XG4gICAgICAgICAgcGFyYW1WYWx1ZSA9IFN0cmluZyhpZGVhTnVtYmVyKVxuICAgICAgICB9IGVsc2UgaWYgKHBhcmFtSW5mby5kYXRhVHlwZSA9PT0gJ0dQRG91YmxlJyB8fCBwYXJhbUluZm8uZGF0YVR5cGUgPT09ICdlc3JpR1BUeXBlRG91YmxlJyB8fCBcbiAgICAgICAgICAgICAgICAgICBwYXJhbUluZm8uZGF0YVR5cGUgPT09ICdHUExvbmcnIHx8IHBhcmFtSW5mby5kYXRhVHlwZSA9PT0gJ2VzcmlHUFR5cGVMb25nJykge1xuICAgICAgICAgIC8vIFNlIGZvciBudW3DqXJpY28sIHRlbnRhIGNvbnZlcnRlclxuICAgICAgICAgIGNvbnN0IG51bVZhbHVlID0gcGFyc2VGbG9hdChpZGVhTnVtYmVyKVxuICAgICAgICAgIGlmICghaXNOYU4obnVtVmFsdWUpKSB7XG4gICAgICAgICAgICBwYXJhbVZhbHVlID0gbnVtVmFsdWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy8gUHJlcGFyYSBvcyBwYXLDom1ldHJvcyBwYXJhIGEgZXhlY3XDp8Ojb1xuICAgICAgLy8gSU1QT1JUQU5URTogZj1qc29uIHZhaSBuYSBVUkwsIG7Do28gbm8gYm9keVxuICAgICAgLy8gQXBlbmFzIG9zIHBhcsOibWV0cm9zIGRhIEdQIHbDo28gbm8gYm9keVxuICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICBbcGFyYW1OYW1lXTogcGFyYW1WYWx1ZVxuICAgICAgfVxuICAgICAgXG4gICAgICBjb25zb2xlLmxvZygnPT09IFBBUsOCTUVUUk9TIFBBUkEgRU5WSUFSID09PScpXG4gICAgICBjb25zb2xlLmxvZygnUGFyw6JtZXRyb3MgcHJlcGFyYWRvcyAocGFyYSBvIGJvZHkpOicsIHBhcmFtcylcbiAgICAgIGNvbnNvbGUubG9nKCdWYWxvciBkbyBwYXLDom1ldHJvOicsIHBhcmFtVmFsdWUsICdUaXBvOicsIHR5cGVvZiBwYXJhbVZhbHVlKVxuICAgICAgY29uc29sZS5sb2coJ05vbWUgZG8gcGFyw6JtZXRybyAoZXhhdG8pOicsIHBhcmFtTmFtZSlcbiAgICAgIGNvbnNvbGUubG9nKCdOb21lIGRvIHBhcsOibWV0cm8gKEpTT04pOicsIEpTT04uc3RyaW5naWZ5KHBhcmFtTmFtZSkpXG4gICAgICBcbiAgICAgIC8vIEZvcm1hdGEgb3MgcGFyw6JtZXRyb3MgY29tbyBmb3JtLXVybGVuY29kZWRcbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gICAgICBcbiAgICAgIC8vIEFkaWNpb25hIG9zIHBhcsOibWV0cm9zIChleGNldG8gZj1qc29uIHF1ZSB2YWkgbmEgVVJMKVxuICAgICAgLy8gSU1QT1JUQU5URTogVXNhIG8gbm9tZSBleGF0byBkbyBwYXLDom1ldHJvIGNvbW8gZXN0w6EgbmEgR1AgKHBvZGUgdGVyIGNhcmFjdGVyZXMgZXNwZWNpYWlzKVxuICAgICAgY29uc29sZS5sb2coJz09PSBQUkVQQVJBTkRPIEZPUk0gREFUQSA9PT0nKVxuICAgICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGlmIChrZXkgIT09ICdmJykge1xuICAgICAgICAgIGNvbnN0IHBhcmFtS2V5ID0ga2V5IC8vIFVzYSBleGF0YW1lbnRlIG8gbm9tZSBxdWUgdmVpbyBkYSBHUCAoZXg6IFwiTsKwIElERUFcIiwgXCJ2YWxvcl9hbGVydGFcIiwgZXRjLilcbiAgICAgICAgICBjb25zdCBwYXJhbVZhbCA9IFN0cmluZyhwYXJhbXNba2V5XSlcbiAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQocGFyYW1LZXksIHBhcmFtVmFsKVxuICAgICAgICAgIGNvbnNvbGUubG9nKGBQYXLDom1ldHJvIGFkaWNpb25hZG86IG5vbWU9XCIke3BhcmFtS2V5fVwiIHZhbG9yPVwiJHtwYXJhbVZhbH1cImApXG4gICAgICAgICAgY29uc29sZS5sb2coYCAgLSBOb21lIChKU09OKTogJHtKU09OLnN0cmluZ2lmeShwYXJhbUtleSl9YClcbiAgICAgICAgICBjb25zb2xlLmxvZyhgICAtIE5vbWUgKGJ5dGVzKTogJHtBcnJheS5mcm9tKHBhcmFtS2V5KS5tYXAoYyA9PiBjLmNoYXJDb2RlQXQoMCkpLmpvaW4oJywnKX1gKVxuICAgICAgICAgIGNvbnNvbGUubG9nKGAgIC0gVmFsb3IgKEpTT04pOiAke0pTT04uc3RyaW5naWZ5KHBhcmFtVmFsKX1gKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgXG4gICAgICBjb25zdCBmb3JtRGF0YVN0cmluZyA9IGZvcm1EYXRhLnRvU3RyaW5nKClcbiAgICAgIGNvbnNvbGUubG9nKCdGb3JtRGF0YSBjb21wbGV0byAoc3RyaW5nKTonLCBmb3JtRGF0YVN0cmluZylcbiAgICAgIGNvbnNvbGUubG9nKCdGb3JtRGF0YSBjb21wbGV0byAoVVJMIGRlY29kZWQpOicsIGRlY29kZVVSSUNvbXBvbmVudChmb3JtRGF0YVN0cmluZykpXG4gICAgICBcbiAgICAgIC8vIEFkaWNpb25hIHRva2VuIGFvIGJvZHlcbiAgICAgIGlmICh0b2tlbikge1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3Rva2VuJywgdG9rZW4pXG4gICAgICAgIGNvbnNvbGUubG9nKCdUb2tlbiBhZGljaW9uYWRvIGFvIGJvZHknKVxuICAgICAgfVxuICAgICAgXG4gICAgICAvLyBGdW7Dp8OjbyBhdXhpbGlhciBwYXJhIGZhemVyIGEgcmVxdWlzacOnw6NvXG4gICAgICBjb25zdCBtYWtlRXhlY3V0ZVJlcXVlc3QgPSBhc3luYyAodXJsKSA9PiB7XG4gICAgICAgIC8vIEFkaWNpb25hIHRva2VuIG5hIFVSTCB0YW1iw6ltIChhbGd1bnMgc2Vydmlkb3JlcyBBcmNHSVMgZXhpZ2VtIGlzc28pXG4gICAgICAgIGxldCBmaW5hbFVybCA9IHVybFxuICAgICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgICBjb25zdCB1cmxXaXRoVG9rZW4gPSBuZXcgVVJMKHVybClcbiAgICAgICAgICB1cmxXaXRoVG9rZW4uc2VhcmNoUGFyYW1zLnNldCgndG9rZW4nLCB0b2tlbilcbiAgICAgICAgICB1cmxXaXRoVG9rZW4uc2VhcmNoUGFyYW1zLnNldCgnZicsICdqc29uJylcbiAgICAgICAgICBmaW5hbFVybCA9IHVybFdpdGhUb2tlbi50b1N0cmluZygpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gU2UgbsOjbyB0aXZlciB0b2tlbiwgYWRpY2lvbmEgYXBlbmFzIGY9anNvblxuICAgICAgICAgIGNvbnN0IHVybE9iaiA9IG5ldyBVUkwodXJsKVxuICAgICAgICAgIHVybE9iai5zZWFyY2hQYXJhbXMuc2V0KCdmJywgJ2pzb24nKVxuICAgICAgICAgIGZpbmFsVXJsID0gdXJsT2JqLnRvU3RyaW5nKClcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coJ1RlbnRhbmRvIFVSTDonLCBmaW5hbFVybClcbiAgICAgICAgY29uc29sZS5sb2coJ0JvZHkgKGZvcm1EYXRhKTonLCBmb3JtRGF0YS50b1N0cmluZygpKVxuICAgICAgICBjb25zb2xlLmxvZygnVG9rZW4gcHJlc2VudGU6JywgISF0b2tlbilcbiAgICAgICAgY29uc29sZS5sb2coJ1BhcsOibWV0cm9zIGVudmlhZG9zOicsIE9iamVjdC5rZXlzKHBhcmFtcykpXG4gICAgICAgIFxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGZpbmFsVXJsLCB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBib2R5OiBmb3JtRGF0YVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIFZlcmlmaWNhIHNlIGEgdGFzayDDqSBhc3PDrW5jcm9uYSBwYXJhIGRlY2lkaXIgcXVhbCBlbmRwb2ludCB1c2FyXG4gICAgICBjb25zdCBpc0FzeW5jID0gZ3BJbmZvLmV4ZWN1dGlvblR5cGUgPT09ICdlc3JpRXhlY3V0aW9uVHlwZUFzeW5jaHJvbm91cydcbiAgICAgIGNvbnNvbGUubG9nKCc9PT0gVEVOVEFORE8gRVhFQ1VUQVIgR1AgPT09JylcbiAgICAgIGNvbnNvbGUubG9nKCdUaXBvIGRlIGV4ZWN1w6fDo286JywgZ3BJbmZvLmV4ZWN1dGlvblR5cGUpXG4gICAgICBjb25zb2xlLmxvZygnw4kgYXNzw61uY3JvbmE/JywgaXNBc3luYylcbiAgICAgIGNvbnNvbGUubG9nKCdUZW50YW5kbyBwcmltZWlybyBjb20gdGFzayBlc3BlY8OtZmljYTonLCB0aGlzLkdQX1RBU0tfTkFNRSlcbiAgICAgIGNvbnNvbGUubG9nKCdQYXLDom1ldHJvIHF1ZSBzZXLDoSBlbnZpYWRvOicsIHBhcmFtTmFtZSlcbiAgICAgIGNvbnNvbGUubG9nKCdWYWxvciBxdWUgc2Vyw6EgZW52aWFkbzonLCBpZGVhTnVtYmVyKVxuICAgICAgXG4gICAgICAvLyBTZSBmb3IgYXNzw61uY3JvbmEsIHVzYSBzdWJtaXRKb2I7IGNhc28gY29udHLDoXJpbywgdXNhIGV4ZWN1dGVcbiAgICAgIGlmIChpc0FzeW5jKSB7XG4gICAgICAgIGV4ZWN1dGVVcmwgPSB0aGlzLkdQX1NVQk1JVF9KT0JfVVJMXG4gICAgICAgIGNvbnNvbGUubG9nKCdVc2FuZG8gZW5kcG9pbnQgL3N1Ym1pdEpvYiAodGFyZWZhIGFzc8OtbmNyb25hKTonLCBleGVjdXRlVXJsKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXhlY3V0ZVVybCA9IGAke3RoaXMuR1BfU0VSVklDRV9VUkx9LyR7dGFza05hbWVFbmNvZGVkfS9leGVjdXRlYFxuICAgICAgICBjb25zb2xlLmxvZygnVXNhbmRvIGVuZHBvaW50IC9leGVjdXRlICh0YXJlZmEgc8OtbmNyb25hKTonLCBleGVjdXRlVXJsKVxuICAgICAgfVxuICAgICAgXG4gICAgICBsZXQgZXhlY3V0ZVJlc3BvbnNlID0gYXdhaXQgbWFrZUV4ZWN1dGVSZXF1ZXN0KGV4ZWN1dGVVcmwpXG4gICAgICBcbiAgICAgIC8vIFNlIGRlciBlcnJvIDUwMCwgcG9kZSBzZXIgcXVlIG8gZW5kcG9pbnQgZGEgdGFzayBlc3BlY8OtZmljYSBuw6NvIGV4aXN0YVxuICAgICAgLy8gVGVudGEgY29tIG8gZW5kcG9pbnQgZGEgR1AgcmFpelxuICAgICAgaWYgKCFleGVjdXRlUmVzcG9uc2Uub2spIHtcbiAgICAgICAgbGV0IHJlc3VsdFRleHQgPSBhd2FpdCBleGVjdXRlUmVzcG9uc2UudGV4dCgpXG4gICAgICAgIGNvbnNvbGUud2FybignUHJpbWVpcmEgdGVudGF0aXZhIGZhbGhvdS4gU3RhdHVzOicsIGV4ZWN1dGVSZXNwb25zZS5zdGF0dXMpXG4gICAgICAgIGNvbnNvbGUud2FybignUmVzcG9zdGEgKHByaW1laXJvcyA1MDAgY2hhcnMpOicsIHJlc3VsdFRleHQuc3Vic3RyaW5nKDAsIDUwMCkpXG4gICAgICAgIFxuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHJlc3VsdEpzb24gPSBKU09OLnBhcnNlKHJlc3VsdFRleHQpXG4gICAgICAgICAgaWYgKHJlc3VsdEpzb24uZXJyb3IgJiYgcmVzdWx0SnNvbi5lcnJvci5jb2RlID09PSA1MDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignRXJybyA1MDAgY29tIHRhc2sgZXNwZWPDrWZpY2EsIHRlbnRhbmRvIGNvbSBlbmRwb2ludCBkYSBHUCByYWl6Li4uJylcbiAgICAgICAgICAgIC8vIFRlbnRhIGNvbSBvIGVuZHBvaW50IHJhaXogdXNhbmRvIG8gbWVzbW8gdGlwbyAoc3VibWl0Sm9iIG91IGV4ZWN1dGUpXG4gICAgICAgICAgICBpZiAoaXNBc3luYykge1xuICAgICAgICAgICAgICBleGVjdXRlVXJsID0gdGhpcy5HUF9TVUJNSVRfSk9CX1VSTFxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGVudGFuZG8gY29tIGVuZHBvaW50IGRhIEdQIHJhaXogKHN1Ym1pdEpvYik6JywgZXhlY3V0ZVVybClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGV4ZWN1dGVVcmwgPSBgJHt0aGlzLkdQX1NFUlZJQ0VfVVJMfS9leGVjdXRlYFxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGVudGFuZG8gY29tIGVuZHBvaW50IGRhIEdQIHJhaXogKGV4ZWN1dGUpOicsIGV4ZWN1dGVVcmwpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBleGVjdXRlUmVzcG9uc2UgPSBhd2FpdCBtYWtlRXhlY3V0ZVJlcXVlc3QoZXhlY3V0ZVVybClcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGFvIHBhcnNlYXIgcmVzcG9zdGE6JywgZSlcbiAgICAgICAgICAvLyBTZSBuw6NvIGNvbnNlZ3VpciBwYXJzZWFyLCBjb250aW51YSBjb20gbyBlcnJvIG9yaWdpbmFsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy8gTMOqIGEgcmVzcG9zdGEgbWVzbW8gc2UgbsOjbyBmb3IgT0sgcGFyYSB2ZXIgbyBlcnJvIGRldGFsaGFkb1xuICAgICAgbGV0IHJlc3VsdFxuICAgICAgdHJ5IHtcbiAgICAgICAgcmVzdWx0ID0gYXdhaXQgZXhlY3V0ZVJlc3BvbnNlLmpzb24oKVxuICAgICAgICBjb25zb2xlLmxvZygnUmVzcG9zdGEgZG8gZXhlY3V0ZSAoSlNPTik6JywgSlNPTi5zdHJpbmdpZnkocmVzdWx0LCBudWxsLCAyKSlcbiAgICAgIH0gY2F0Y2ggKGpzb25FcnJvcikge1xuICAgICAgICAvLyBTZSBuw6NvIGNvbnNlZ3VpciBsZXIgY29tbyBKU09OLCBsw6ogY29tbyB0ZXh0b1xuICAgICAgICBjb25zdCB0ZXh0UmVzcG9uc2UgPSBhd2FpdCBleGVjdXRlUmVzcG9uc2UudGV4dCgpXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1Jlc3Bvc3RhIG7Do28gw6kgSlNPTjonLCB0ZXh0UmVzcG9uc2UpXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1N0YXR1cyBIVFRQOicsIGV4ZWN1dGVSZXNwb25zZS5zdGF0dXMsIGV4ZWN1dGVSZXNwb25zZS5zdGF0dXNUZXh0KVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm8gYW8gZXhlY3V0YXIgdGFyZWZhOiAke2V4ZWN1dGVSZXNwb25zZS5zdGF0dXN9ICR7ZXhlY3V0ZVJlc3BvbnNlLnN0YXR1c1RleHR9IC0gUmVzcG9zdGE6ICR7dGV4dFJlc3BvbnNlLnN1YnN0cmluZygwLCA1MDApfWApXG4gICAgICB9XG4gICAgICBcbiAgICAgIGlmICghZXhlY3V0ZVJlc3BvbnNlLm9rKSB7XG4gICAgICAgIC8vIFNlIGEgcmVzcG9zdGEgdGVtIHVtIGVycm8gbm8gSlNPTiwgdXNhIGVsZVxuICAgICAgICBpZiAocmVzdWx0LmVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignPT09IEVSUk8gREVUQUxIQURPIERBIEdQID09PScpXG4gICAgICAgICAgY29uc29sZS5lcnJvcignQ8OzZGlnbyBkbyBlcnJvOicsIHJlc3VsdC5lcnJvci5jb2RlKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ01lbnNhZ2VtOicsIHJlc3VsdC5lcnJvci5tZXNzYWdlKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0RldGFsaGVzOicsIHJlc3VsdC5lcnJvci5kZXRhaWxzKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gY29tcGxldG86JywgSlNPTi5zdHJpbmdpZnkocmVzdWx0LmVycm9yLCBudWxsLCAyKSlcbiAgICAgICAgICBcbiAgICAgICAgICAvLyBNZW5zYWdlbSBkZSBlcnJvIG1haXMgYW1pZ8OhdmVsXG4gICAgICAgICAgbGV0IGVycm9yTWVzc2FnZSA9ICdFcnJvIGFvIGV4ZWN1dGFyIGEgZmVycmFtZW50YSBkZSBnZW9wcm9jZXNzYW1lbnRvLlxcblxcbidcbiAgICAgICAgICBcbiAgICAgICAgICBpZiAocmVzdWx0LmVycm9yLmNvZGUgPT09IDUwMCkge1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlICs9ICdFcnJvIGludGVybm8gZG8gc2Vydmlkb3IgKDUwMCkuXFxuXFxuJ1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlICs9ICdQb3Nzw612ZWlzIGNhdXNhczpcXG4nXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgKz0gJzEuIE8gbsO6bWVybyBkZSBpZGVhIHBvZGUgbsOjbyBleGlzdGlyIG5vIHNlcnZpZG9yXFxuJ1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlICs9ICcyLiBQcm9ibGVtYSBubyBwcm9jZXNzYW1lbnRvIGRhIGZlcnJhbWVudGFcXG4nXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgKz0gJzMuIE8gc2Vydmlkb3IgcG9kZSBlc3RhciB0ZW1wb3JhcmlhbWVudGUgaW5kaXNwb27DrXZlbFxcblxcbidcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSArPSBgVmFsb3IgZW52aWFkbzogJHtpZGVhTnVtYmVyfVxcbmBcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSArPSBgUGFyw6JtZXRybyB1c2FkbzogJHtwYXJhbU5hbWV9XFxuXFxuYFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlICs9ICdWZXJpZmlxdWU6XFxuJ1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlICs9ICctIFNlIG8gbsO6bWVybyBkZSBpZGVhIGVzdMOhIGNvcnJldG9cXG4nXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgKz0gJy0gU2UgbyB2YWxvciBleGlzdGUgbmEgY2FtYWRhIGRlIGFsZXJ0YXNcXG4nXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgKz0gJy0gQWJyYSBvIGNvbnNvbGUgKEYxMikgcGFyYSBtYWlzIGRldGFsaGVzJ1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgKz0gYEPDs2RpZ286ICR7cmVzdWx0LmVycm9yLmNvZGV9XFxuYFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlICs9IGBNZW5zYWdlbTogJHtyZXN1bHQuZXJyb3IubWVzc2FnZX1cXG5cXG5gXG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9yLmRldGFpbHMgJiYgcmVzdWx0LmVycm9yLmRldGFpbHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgKz0gYERldGFsaGVzOiAke3Jlc3VsdC5lcnJvci5kZXRhaWxzLmpvaW4oJywgJyl9XFxuXFxuYFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBhbGVydChlcnJvck1lc3NhZ2UpXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvIG5hIEdQOiAke0pTT04uc3RyaW5naWZ5KHJlc3VsdC5lcnJvcil9YClcbiAgICAgICAgfVxuICAgICAgICAvLyBTZSBuw6NvIHRpdmVyIGNhbXBvIGVycm9yLCBtYXMgbyBzdGF0dXMgbsOjbyDDqSBPSywgbW9zdHJhIG8gcmVzdWx0YWRvIGNvbXBsZXRvXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gSFRUUDonLCBleGVjdXRlUmVzcG9uc2Uuc3RhdHVzLCBleGVjdXRlUmVzcG9uc2Uuc3RhdHVzVGV4dClcbiAgICAgICAgY29uc29sZS5lcnJvcignUmVzcG9zdGEgY29tcGxldGE6JywgcmVzdWx0KVxuICAgICAgICBhbGVydChgRXJybyBhbyBleGVjdXRhciB0YXJlZmE6ICR7ZXhlY3V0ZVJlc3BvbnNlLnN0YXR1c30gJHtleGVjdXRlUmVzcG9uc2Uuc3RhdHVzVGV4dH1cXG5cXG5WZXJpZmlxdWUgbyBjb25zb2xlIChGMTIpIHBhcmEgbWFpcyBkZXRhbGhlcy5gKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm8gYW8gZXhlY3V0YXIgdGFyZWZhOiAke2V4ZWN1dGVSZXNwb25zZS5zdGF0dXN9ICR7ZXhlY3V0ZVJlc3BvbnNlLnN0YXR1c1RleHR9IC0gJHtKU09OLnN0cmluZ2lmeShyZXN1bHQpfWApXG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIFZlcmlmaWNhIHNlIGEgcmVzcG9zdGEgY29udMOpbSB1bSBqb2JJZCAodGFyZWZhIGFzc8OtbmNyb25hKVxuICAgICAgLy8gUGFyYSB0YXJlZmFzIGFzc8OtbmNyb25hcywgc3VibWl0Sm9iIHNlbXByZSByZXRvcm5hIGpvYklkXG4gICAgICBpZiAocmVzdWx0LmpvYklkIHx8IGlzQXN5bmMpIHtcbiAgICAgICAgY29uc3Qgam9iSWQgPSByZXN1bHQuam9iSWRcbiAgICAgICAgaWYgKCFqb2JJZCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGFyZWZhIGFzc8OtbmNyb25hIG1hcyBuw6NvIHJlY2ViZXUgam9iSWQgbmEgcmVzcG9zdGEnKVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCdUYXJlZmEgYXNzw61uY3JvbmEgZGV0ZWN0YWRhLiBKb2IgSUQ6Jywgam9iSWQpXG4gICAgICAgIFxuICAgICAgICAvLyBQb2xsaW5nIGRvIHN0YXR1cyBkbyBqb2JcbiAgICAgICAgbGV0IGF0dGVtcHRzID0gMFxuICAgICAgICBjb25zdCBtYXhBdHRlbXB0cyA9IDYwXG4gICAgICAgIGxldCBqb2JTdGF0dXMgPSBudWxsXG4gICAgICAgIFxuICAgICAgICB3aGlsZSAoYXR0ZW1wdHMgPCBtYXhBdHRlbXB0cykge1xuICAgICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCAxMDAwKSlcbiAgICAgICAgICBcbiAgICAgICAgICAvLyBVUkwgcGFyYSB2ZXJpZmljYXIgc3RhdHVzIGRvIGpvYlxuICAgICAgICAgIC8vIFVzYSBhIG1lc21hIFVSTCBiYXNlIHF1ZSBmdW5jaW9ub3UgKHBvZGUgc2VyIHN1Ym1pdEpvYiBvdSBleGVjdXRlKVxuICAgICAgICAgIGNvbnN0IGJhc2VVcmwgPSBleGVjdXRlVXJsLnJlcGxhY2UoJy9zdWJtaXRKb2InLCAnJykucmVwbGFjZSgnL2V4ZWN1dGUnLCAnJylcbiAgICAgICAgICBjb25zdCBzdGF0dXNVcmwgPSB0b2tlbiBcbiAgICAgICAgICAgID8gYCR7YmFzZVVybH0vam9icy8ke2pvYklkfT90b2tlbj0ke3Rva2VufSZmPWpzb25gXG4gICAgICAgICAgICA6IGAke2Jhc2VVcmx9L2pvYnMvJHtqb2JJZH0/Zj1qc29uYFxuICAgICAgICAgIFxuICAgICAgICAgIGNvbnNvbGUubG9nKCdWZXJpZmljYW5kbyBzdGF0dXMgZG8gam9iOicsIHN0YXR1c1VybClcbiAgICAgICAgICBjb25zdCBzdGF0dXNSZXNwb25zZSA9IGF3YWl0IGZldGNoKHN0YXR1c1VybClcbiAgICAgICAgICBcbiAgICAgICAgICBpZiAoIXN0YXR1c1Jlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm8gYW8gdmVyaWZpY2FyIHN0YXR1cyBkbyBqb2I6ICR7c3RhdHVzUmVzcG9uc2Uuc3RhdHVzfWApXG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIGpvYlN0YXR1cyA9IGF3YWl0IHN0YXR1c1Jlc3BvbnNlLmpzb24oKVxuICAgICAgICAgIGNvbnNvbGUubG9nKGBTdGF0dXMgZG8gam9iICh0ZW50YXRpdmEgJHthdHRlbXB0cyArIDF9KTpgLCBqb2JTdGF0dXMuam9iU3RhdHVzKVxuICAgICAgICAgIFxuICAgICAgICAgIGlmIChqb2JTdGF0dXMuam9iU3RhdHVzID09PSAnZXNyaUpvYlN1Y2NlZWRlZCcpIHtcbiAgICAgICAgICAgIC8vIE9idMOpbSBvcyByZXN1bHRhZG9zXG4gICAgICAgICAgICAvLyBVc2EgYSBtZXNtYSBVUkwgYmFzZSBxdWUgZnVuY2lvbm91IChwb2RlIHNlciBzdWJtaXRKb2Igb3UgZXhlY3V0ZSlcbiAgICAgICAgICAgIGNvbnN0IGJhc2VVcmwgPSBleGVjdXRlVXJsLnJlcGxhY2UoJy9zdWJtaXRKb2InLCAnJykucmVwbGFjZSgnL2V4ZWN1dGUnLCAnJylcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdFVybCA9IHRva2VuXG4gICAgICAgICAgICAgID8gYCR7YmFzZVVybH0vam9icy8ke2pvYklkfS9yZXN1bHRzP3Rva2VuPSR7dG9rZW59JmY9anNvbmBcbiAgICAgICAgICAgICAgOiBgJHtiYXNlVXJsfS9qb2JzLyR7am9iSWR9L3Jlc3VsdHM/Zj1qc29uYFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCByZXN1bHRSZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlc3VsdFVybClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCFyZXN1bHRSZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm8gYW8gb2J0ZXIgcmVzdWx0YWRvczogJHtyZXN1bHRSZXNwb25zZS5zdGF0dXN9YClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmVzdWx0ID0gYXdhaXQgcmVzdWx0UmVzcG9uc2UuanNvbigpXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUmVzdWx0YWRvIGRhIGV4ZWN1w6fDo28gYXNzw61uY3JvbmE6JywgcmVzdWx0KVxuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICB9IGVsc2UgaWYgKGpvYlN0YXR1cy5qb2JTdGF0dXMgPT09ICdlc3JpSm9iRmFpbGVkJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBKb2IgZmFsaG91OiAke2pvYlN0YXR1cy5tZXNzYWdlcyA/IEpTT04uc3RyaW5naWZ5KGpvYlN0YXR1cy5tZXNzYWdlcykgOiAnRXJybyBkZXNjb25oZWNpZG8nfWApXG4gICAgICAgICAgfSBlbHNlIGlmIChqb2JTdGF0dXMuam9iU3RhdHVzID09PSAnZXNyaUpvYkNhbmNlbGxlZCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSm9iIGZvaSBjYW5jZWxhZG8nKVxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBhdHRlbXB0cysrXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChhdHRlbXB0cyA+PSBtYXhBdHRlbXB0cykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGltZW91dDogTyBqb2IgZGVtb3JvdSBtYWlzIGRlIDYwIHNlZ3VuZG9zIHBhcmEgY29tcGxldGFyJylcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVGFyZWZhIHPDrW5jcm9uYSAtIHJlc3VsdGFkbyBqw6EgZXN0w6EgZGlzcG9uw612ZWxcbiAgICAgICAgY29uc29sZS5sb2coJ1RhcmVmYSBzw61uY3JvbmEgLSByZXN1bHRhZG8gasOhIGRpc3BvbsOtdmVsJylcbiAgICAgIH1cbiAgICAgIFxuICAgICAgY29uc29sZS5sb2coJ1Jlc3VsdGFkbyBjb21wbGV0byBkYSBHUDonLCBKU09OLnN0cmluZ2lmeShyZXN1bHQsIG51bGwsIDIpKVxuXG4gICAgICAvLyBQcm9jZXNzYSBvIHJlc3VsdGFkbyAtIHByb2N1cmEgcGVsYSBVUkwgZG8gSFRNTFxuICAgICAgbGV0IGh0bWxVcmwgPSBudWxsXG5cbiAgICAgIC8vIFBhcmEgdGFyZWZhcyBhc3PDrW5jcm9uYXMsIG9zIHJlc3VsdGFkb3MgcG9kZW0gZXN0YXIgZW0gdW1hIGVzdHJ1dHVyYSBkaWZlcmVudGVcbiAgICAgIC8vIFByaW1laXJvLCB2ZXJpZmljYSBzZSBow6EgZXJyb3NcbiAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBlbmNvbnRyYWRvIG5vIHJlc3VsdGFkbzonLCByZXN1bHQuZXJyb3IpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJybyBuYSBHUDogJHtKU09OLnN0cmluZ2lmeShyZXN1bHQuZXJyb3IpfWApXG4gICAgICB9XG5cbiAgICAgIC8vIFByb2N1cmEgZW0gcmVzdWx0LnJlc3VsdHMgKGVzdHJ1dHVyYSBjb211bSBwYXJhIHRhcmVmYXMgc8OtbmNyb25hcylcbiAgICAgIGlmIChyZXN1bHQucmVzdWx0cyAmJiBBcnJheS5pc0FycmF5KHJlc3VsdC5yZXN1bHRzKSkge1xuICAgICAgICBmb3IgKGNvbnN0IHJlc3VsdEl0ZW0gb2YgcmVzdWx0LnJlc3VsdHMpIHtcbiAgICAgICAgICAvLyBPIHJlc3VsdGFkbyBwb2RlIGVzdGFyIGRpcmV0YW1lbnRlIG5vIHJlc3VsdEl0ZW0gb3UgZW0gcmVzdWx0SXRlbS52YWx1ZVxuICAgICAgICAgIGNvbnN0IHZhbHVlID0gcmVzdWx0SXRlbS52YWx1ZSAhPT0gdW5kZWZpbmVkID8gcmVzdWx0SXRlbS52YWx1ZSA6IHJlc3VsdEl0ZW1cbiAgICAgICAgICBcbiAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS5pbmNsdWRlcygnLmh0bWwnKSkge1xuICAgICAgICAgICAgaHRtbFVybCA9IHZhbHVlXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgLy8gUHJvY3VyYSBwb3IgcHJvcHJpZWRhZGVzIGNvbXVucyBxdWUgY29udMOqbSBVUkxzXG4gICAgICAgICAgICBpZiAodmFsdWUudXJsICYmIHR5cGVvZiB2YWx1ZS51cmwgPT09ICdzdHJpbmcnICYmIHZhbHVlLnVybC5pbmNsdWRlcygnLmh0bWwnKSkge1xuICAgICAgICAgICAgICBodG1sVXJsID0gdmFsdWUudXJsXG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLnBhdGhVcmwgJiYgdHlwZW9mIHZhbHVlLnBhdGhVcmwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGh0bWxVcmwgPSB2YWx1ZS5wYXRoVXJsXG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLnZhbHVlICYmIHR5cGVvZiB2YWx1ZS52YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUudmFsdWUuaW5jbHVkZXMoJy5odG1sJykpIHtcbiAgICAgICAgICAgICAgaHRtbFVybCA9IHZhbHVlLnZhbHVlXG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFBhcmEgdGFyZWZhcyBhc3PDrW5jcm9uYXMsIG9zIHJlc3VsdGFkb3MgcG9kZW0gZXN0YXIgZW0gcmVzdWx0LnJlc3VsdHMgY29tbyBvYmpldG9cbiAgICAgIGlmICghaHRtbFVybCAmJiByZXN1bHQucmVzdWx0cyAmJiB0eXBlb2YgcmVzdWx0LnJlc3VsdHMgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KHJlc3VsdC5yZXN1bHRzKSkge1xuICAgICAgICAvLyBJdGVyYSBzb2JyZSBhcyBwcm9wcmllZGFkZXMgZG8gb2JqZXRvIHJlc3VsdHNcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcmVzdWx0LnJlc3VsdHMpIHtcbiAgICAgICAgICBjb25zdCByZXN1bHRJdGVtID0gcmVzdWx0LnJlc3VsdHNba2V5XVxuICAgICAgICAgIGlmIChyZXN1bHRJdGVtICYmIHJlc3VsdEl0ZW0udmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gcmVzdWx0SXRlbS52YWx1ZVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUuaW5jbHVkZXMoJy5odG1sJykpIHtcbiAgICAgICAgICAgICAgaHRtbFVybCA9IHZhbHVlXG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLnVybCAmJiB0eXBlb2YgdmFsdWUudXJsID09PSAnc3RyaW5nJyAmJiB2YWx1ZS51cmwuaW5jbHVkZXMoJy5odG1sJykpIHtcbiAgICAgICAgICAgICAgaHRtbFVybCA9IHZhbHVlLnVybFxuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5wYXRoVXJsICYmIHR5cGVvZiB2YWx1ZS5wYXRoVXJsID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBodG1sVXJsID0gdmFsdWUucGF0aFVybFxuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBQcm9jdXJhIGVtIG91dHJhcyBwcm9wcmllZGFkZXMgZG8gcmVzdWx0YWRvXG4gICAgICBpZiAoIWh0bWxVcmwgJiYgcmVzdWx0Lm91dHB1dFVybCkge1xuICAgICAgICBodG1sVXJsID0gcmVzdWx0Lm91dHB1dFVybFxuICAgICAgfVxuICAgICAgaWYgKCFodG1sVXJsICYmIHJlc3VsdC51cmwpIHtcbiAgICAgICAgaHRtbFVybCA9IHJlc3VsdC51cmxcbiAgICAgIH1cbiAgICAgIGlmICghaHRtbFVybCAmJiByZXN1bHQuZmlsZVVybCkge1xuICAgICAgICBodG1sVXJsID0gcmVzdWx0LmZpbGVVcmxcbiAgICAgIH1cbiAgICAgIGlmICghaHRtbFVybCAmJiByZXN1bHQub3V0cHV0RmlsZSkge1xuICAgICAgICBodG1sVXJsID0gcmVzdWx0Lm91dHB1dEZpbGVcbiAgICAgIH1cblxuICAgICAgLy8gQnVzY2EgcG9yIHJlZ2V4IGVtIHRvZG8gbyBvYmpldG8gKMO6bHRpbW8gcmVjdXJzbylcbiAgICAgIGlmICghaHRtbFVybCkge1xuICAgICAgICBjb25zdCByZXN1bHRTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShyZXN1bHQpXG4gICAgICAgIGNvbnN0IHVybE1hdGNoID0gcmVzdWx0U3RyaW5nLm1hdGNoKC9odHRwcz86XFwvXFwvW15cXHNcIjw+XStcXC5odG1sL2cpXG4gICAgICAgIGlmICh1cmxNYXRjaCAmJiB1cmxNYXRjaC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaHRtbFVybCA9IHVybE1hdGNoWzBdXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGh0bWxVcmwpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1VSTCBkbyBIVE1MIGVuY29udHJhZGE6JywgaHRtbFVybClcbiAgICAgICAgLy8gQWJyZSBvIEhUTUwgZW0gdW1hIG5vdmEgZ3VpYVxuICAgICAgICB3aW5kb3cub3BlbihodG1sVXJsLCAnX2JsYW5rJylcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBTZSBuw6NvIGVuY29udHJvdSBhIFVSTCwgbW9zdHJhIG8gcmVzdWx0YWRvIGNvbXBsZXRvIHBhcmEgZGVidWdcbiAgICAgICAgY29uc29sZS53YXJuKCdOw6NvIGZvaSBwb3Nzw612ZWwgZW5jb250cmFyIGEgVVJMIGRvIEhUTUwgbm8gcmVzdWx0YWRvOicsIHJlc3VsdClcbiAgICAgICAgY29uc29sZS53YXJuKCdSZXN1bHRhZG8gY29tcGxldG86JywgSlNPTi5zdHJpbmdpZnkocmVzdWx0LCBudWxsLCAyKSlcbiAgICAgICAgYWxlcnQoJ1JlbGF0w7NyaW8gZ2VyYWRvLCBtYXMgbsOjbyBmb2kgcG9zc8OtdmVsIGVuY29udHJhciBhIFVSTCBkbyBIVE1MLiBWZXJpZmlxdWUgbyBjb25zb2xlIGRvIG5hdmVnYWRvciAoRjEyKSBwYXJhIHZlciBvcyBkZXRhbGhlcyBkbyByZXN1bHRhZG8uJylcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJz09PSBFUlJPIENPTVBMRVRPIEFPIEVYRUNVVEFSIEdQID09PScpXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvOicsIGVycm9yKVxuICAgICAgY29uc29sZS5lcnJvcignTWVuc2FnZW06JywgZXJyb3IubWVzc2FnZSlcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1N0YWNrIHRyYWNlOicsIGVycm9yLnN0YWNrKVxuICAgICAgY29uc29sZS5lcnJvcignVGlwbyBkbyBlcnJvOicsIGVycm9yLmNvbnN0cnVjdG9yLm5hbWUpXG4gICAgICBcbiAgICAgIC8vIEluZm9ybWHDp8O1ZXMgZGUgY29udGV4dG8gcGFyYSBkZWJ1Z1xuICAgICAgY29uc29sZS5lcnJvcignPT09IENPTlRFWFRPIERPIEVSUk8gPT09JylcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1ZhbG9yIGVudmlhZG86JywgaWRlYU51bWJlcilcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1BhcsOibWV0cm8gdXNhZG86JywgcGFyYW1OYW1lKVxuICAgICAgY29uc29sZS5lcnJvcignVVJMIHRlbnRhZGE6JywgZXhlY3V0ZVVybClcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1Rva2VuIHByZXNlbnRlOicsICEhdG9rZW4pXG5cbiAgICAgIGxldCBlcnJvck1lc3NhZ2UgPSAnRXJybyBhbyBnZXJhciByZWxhdMOzcmlvLlxcblxcbidcblxuICAgICAgaWYgKGVycm9yLm1lc3NhZ2UpIHtcbiAgICAgICAgLy8gUmVtb3ZlIGluZm9ybWHDp8O1ZXMgdMOpY25pY2FzIG11aXRvIGxvbmdhcyBwYXJhIG8gdXN1w6FyaW9cbiAgICAgICAgbGV0IGNsZWFuTWVzc2FnZSA9IGVycm9yLm1lc3NhZ2VcbiAgICAgICAgaWYgKGNsZWFuTWVzc2FnZS5sZW5ndGggPiAyMDApIHtcbiAgICAgICAgICBjbGVhbk1lc3NhZ2UgPSBjbGVhbk1lc3NhZ2Uuc3Vic3RyaW5nKDAsIDIwMCkgKyAnLi4uJ1xuICAgICAgICB9XG4gICAgICAgIGVycm9yTWVzc2FnZSArPSBgTWVuc2FnZW06ICR7Y2xlYW5NZXNzYWdlfVxcblxcbmBcbiAgICAgIH1cblxuICAgICAgaWYgKGVycm9yLmRldGFpbHMgJiYgQXJyYXkuaXNBcnJheShlcnJvci5kZXRhaWxzKSAmJiBlcnJvci5kZXRhaWxzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZXJyb3JNZXNzYWdlICs9IGBEZXRhbGhlczogJHtlcnJvci5kZXRhaWxzWzBdfVxcblxcbmBcbiAgICAgIH1cblxuICAgICAgZXJyb3JNZXNzYWdlICs9ICdWZXJpZmlxdWU6XFxuJ1xuICAgICAgZXJyb3JNZXNzYWdlICs9IGAxLiBTZSBvIG7Dum1lcm8gZGUgaWRlYSBcIiR7aWRlYU51bWJlcn1cIiBlc3TDoSBjb3JyZXRvXFxuYFxuICAgICAgZXJyb3JNZXNzYWdlICs9ICcyLiBTZSBvIHZhbG9yIGV4aXN0ZSBuYSBjYW1hZGEgZGUgYWxlcnRhc19yZWdpb25hbF9sYXBhXFxuJ1xuICAgICAgZXJyb3JNZXNzYWdlICs9ICczLiBTZSBhIGZlcnJhbWVudGEgZGUgZ2VvcHJvY2Vzc2FtZW50byBlc3TDoSBhY2Vzc8OtdmVsXFxuJ1xuICAgICAgZXJyb3JNZXNzYWdlICs9ICc0LiBBYnJhIG8gY29uc29sZSBkbyBuYXZlZ2Fkb3IgKEYxMikgcGFyYSBtYWlzIGRldGFsaGVzIHTDqWNuaWNvc1xcblxcbidcbiAgICAgIGVycm9yTWVzc2FnZSArPSAnRGljYTogVGVudGUgdXNhciBvIGJvdMOjbyBcIkZpbHRyYXJcIiBwcmltZWlybyBwYXJhIHZlcmlmaWNhciBzZSBvIG7Dum1lcm8gZXhpc3RlLidcblxuICAgICAgYWxlcnQoZXJyb3JNZXNzYWdlKVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCBzdHlsZSA9IGNzc2BcbiAgICAgIC53aWRnZXQtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZ2FwOiAxMnB4O1xuICAgICAgfVxuICAgICAgZm9ybSA+IGRpdiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGdhcDogOHB4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjY2NDA7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTRmMzI7XG4gICAgICAgICAgfVxuICAgICAgICAgICY6ZGlzYWJsZWQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAucmVwb3J0LWJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjY2NDA7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBnYXA6IDhweDtcbiAgICAgICAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFlNGYzMjtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAmOmFjdGl2ZTpub3QoOmRpc2FibGVkKSB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgJjpmb2N1czpub3QoOmRpc2FibGVkKSB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgJjpkaXNhYmxlZCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgICAgICAgICBjb2xvcjogIzllOWU5ZTtcbiAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkICFpbXBvcnRhbnQ7XG4gICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICB9XG4gICAgICAgICY6bm90KDpkaXNhYmxlZCkge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuc3Bpbm5lciB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJvcmRlci10b3AtY29sb3I6IHdoaXRlO1xuICAgICAgICBhbmltYXRpb246IHNwaW4gMC44cyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICB9XG4gICAgICBAa2V5ZnJhbWVzIHNwaW4ge1xuICAgICAgICB0byB7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmNsZWFyLWJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG4gICAgICAgIGNvbG9yOiAjNDI0MjQyO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiZGJkYmQ7XG4gICAgICAgICAgY29sb3I6ICMyMTIxMjE7XG4gICAgICAgIH1cbiAgICAgICAgJjpkaXNhYmxlZCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICAgICAgICBjb2xvcjogIzllOWU5ZTtcbiAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuc3RhdHVzLW1lc3NhZ2Uge1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlN2YzZmY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuICAgICAgLmxvYWRpbmcge1xuICAgICAgICBjb2xvcjogIzAwNzljMTtcbiAgICAgIH1cbiAgICBgXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWZpbHRyYXItZS1nZXJhci1yZWxhdG9yaW8gamltdS13aWRnZXQgcC0yXCIgY3NzPXtzdHlsZX0+XG4gICAgICAgIHt0aGlzLnByb3BzLmhhc093blByb3BlcnR5KCd1c2VNYXBXaWRnZXRJZHMnKSAmJlxuICAgICAgICAgIHRoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzICYmXG4gICAgICAgICAgdGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHMubGVuZ3RoID09PSAxICYmIChcbiAgICAgICAgICAgIDxKaW11TWFwVmlld0NvbXBvbmVudFxuICAgICAgICAgICAgICB1c2VNYXBXaWRnZXRJZD17dGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHM/LlswXX1cbiAgICAgICAgICAgICAgb25BY3RpdmVWaWV3Q2hhbmdlPXsoam12OiBKaW11TWFwVmlldykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgamltdU1hcFZpZXc6IGptdlxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICApfVxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxwPntkZWZhdWx0TWVzc2FnZXMuaW5zdHJ1Y3Rpb25zfTwvcD5cblxuXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlRmlsdGVyQW5kWm9vbX0+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2RlZmF1bHRNZXNzYWdlcy5zZWFyY2hJZGVhfVxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmlkZWFTZWFyY2hJbnB1dH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJZGVhU2VhcmNoSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyF0aGlzLnN0YXRlLmZlYXR1cmVMYXllciB8fCB0aGlzLnN0YXRlLmxvYWRpbmd9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyF0aGlzLnN0YXRlLmZlYXR1cmVMYXllciB8fCB0aGlzLnN0YXRlLmxvYWRpbmd9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7ZGVmYXVsdE1lc3NhZ2VzLmZpbHRlckFuZFpvb219XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgICAge3RoaXMuc3RhdGUuZmVhdHVyZUxheWVyICYmIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXBvcnQtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUdlbmVyYXRlUmVwb3J0fVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLmxvYWRpbmcgfHwgIXRoaXMuc3RhdGUuaWRlYVNlYXJjaElucHV0IHx8IHRoaXMuc3RhdGUuaWRlYVNlYXJjaElucHV0LnRyaW0oKSA9PT0gJyd9XG4gICAgICAgICAgICAgICAgdGl0bGU9e3RoaXMuc3RhdGUubG9hZGluZyB8fCAhdGhpcy5zdGF0ZS5pZGVhU2VhcmNoSW5wdXQgfHwgdGhpcy5zdGF0ZS5pZGVhU2VhcmNoSW5wdXQudHJpbSgpID09PSAnJyBcbiAgICAgICAgICAgICAgICAgID8gJ0RpZ2l0ZSB1bSBuw7ptZXJvIGRlIGlkZWEgcGFyYSBnZXJhciBvIHJlbGF0w7NyaW8nIFxuICAgICAgICAgICAgICAgICAgOiAnR2VyYXIgcmVsYXTDs3JpbyBwYXJhIG8gbsO6bWVybyBkZSBpZGVhIGluZm9ybWFkbyd9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5sb2FkaW5nICYmIDxzcGFuIGNsYXNzTmFtZT1cInNwaW5uZXJcIj48L3NwYW4+fVxuICAgICAgICAgICAgICAgIHtkZWZhdWx0TWVzc2FnZXMuZ2VuZXJhdGVSZXBvcnR9XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xlYXItYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsZWFyRmlsdGVyfVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLmxvYWRpbmd9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7ZGVmYXVsdE1lc3NhZ2VzLmNsZWFyRmlsdGVyfVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9