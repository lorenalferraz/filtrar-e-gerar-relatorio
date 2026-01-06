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
                // Tenta primeiro com a task relatorio_analise_lapa (que corresponde à URL fixa)
                console.log('Obtendo informações da task específica...');
                // Tenta primeiro com relatorio_analise_lapa (nome da task na URL fixa)
                const taskNameFromUrl = 'relatorio_analise_lapa';
                const taskNameEncoded = encodeURIComponent(taskNameFromUrl);
                let infoUrl = addTokenToUrl(`${this.GP_SERVICE_URL}/${taskNameEncoded}?f=json`);
                console.log('Tentando URL de informações da task (relatorio_analise_lapa):', infoUrl);
                // Se não funcionar, tenta com o nome original
                const fallbackTaskName = this.GP_TASK_NAME;
                const fallbackTaskNameEncoded = encodeURIComponent(fallbackTaskName);
                const fallbackInfoUrl = addTokenToUrl(`${this.GP_SERVICE_URL}/${fallbackTaskNameEncoded}?f=json`);
                console.log('URL alternativa (fallback):', fallbackInfoUrl);
                // Tenta obter informações da task específica primeiro
                let gpInfo;
                try {
                    let taskInfoResponse = yield fetch(infoUrl);
                    if (!taskInfoResponse.ok) {
                        // Se falhar, tenta com o nome alternativo
                        console.warn(`Não foi possível obter informações da task ${taskNameFromUrl}, tentando com ${fallbackTaskName}...`);
                        taskInfoResponse = yield fetch(fallbackInfoUrl);
                    }
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
                    try {
                        const gpInfoUrl = addTokenToUrl(`${this.GP_SERVICE_URL}?f=json`);
                        const gpInfoResponse = yield fetch(gpInfoUrl);
                        if (!gpInfoResponse.ok) {
                            throw new Error(`Erro ao obter informações da GP geral: ${gpInfoResponse.status} ${gpInfoResponse.statusText}`);
                        }
                        gpInfo = yield gpInfoResponse.json();
                        console.log('Usando informações da GP geral (fallback)');
                        console.log('Informações completas da GP:', JSON.stringify(gpInfo, null, 2));
                    }
                    catch (fallbackError) {
                        console.error('Erro ao obter informações da GP geral:', fallbackError);
                        throw new Error(`Não foi possível acessar a ferramenta de geoprocessamento. Verifique se a URL está correta e acessível.`);
                    }
                }
                // Verifica se gpInfo foi obtido corretamente
                if (!gpInfo) {
                    console.error('gpInfo está vazio ou undefined');
                    throw new Error('Não foi possível obter informações da ferramenta de geoprocessamento.');
                }
                // Descobre qual é o parâmetro de entrada da GP
                // IMPORTANTE: Devemos usar exatamente o nome do parâmetro que a GP espera
                // O widget recebe o valor da coluna "idea", mas envia com o nome que a GP espera
                let paramName = null;
                let paramInfo = null;
                // Log da estrutura recebida para debug
                console.log('=== ESTRUTURA DA RESPOSTA DA GP ===');
                console.log('gpInfo existe?', !!gpInfo);
                console.log('gpInfo.parameters existe?', !!gpInfo.parameters);
                console.log('gpInfo.parameters é array?', Array.isArray(gpInfo.parameters));
                console.log('Estrutura completa de gpInfo:', JSON.stringify(gpInfo, null, 2));
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
                    console.error('Estrutura de gpInfo recebida:', JSON.stringify(gpInfo, null, 2));
                    console.error('gpInfo.parameters:', gpInfo.parameters);
                    console.error('Tipo de gpInfo.parameters:', typeof gpInfo.parameters);
                    // Tenta usar a task específica diretamente se não conseguir obter parâmetros
                    if (gpInfo.tasks && Array.isArray(gpInfo.tasks) && gpInfo.tasks.length > 0) {
                        console.warn('Tentando usar informações da primeira task disponível...');
                        const firstTask = gpInfo.tasks[0];
                        if (firstTask.parameters && Array.isArray(firstTask.parameters)) {
                            gpInfo.parameters = firstTask.parameters;
                            // Tenta novamente com os parâmetros da task
                            const inputParams = gpInfo.parameters.filter(p => (p.direction === 'esriGPParameterDirectionInput' || p.direction === 'GPParameterDirectionInput') &&
                                p.name);
                            if (inputParams.length > 0) {
                                paramInfo = inputParams[0];
                                paramName = paramInfo.name;
                                console.log('Usando parâmetros da task:', paramName);
                            }
                        }
                    }
                    if (!paramName) {
                        throw new Error('Não foi possível obter informações dos parâmetros da ferramenta de geoprocessamento. Verifique se a ferramenta está configurada corretamente.');
                    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9maWx0cmFyLWUtZ2VyYXItcmVsYXRvcmlvL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFlO0lBQ2IsWUFBWSxFQUFFLDJCQUEyQjtJQUN6QyxRQUFRLEVBQUUsa0JBQWtCO0lBQzVCLGlCQUFpQixFQUFFLHdCQUF3QjtJQUMzQyxZQUFZLEVBQ1Ysa0JBQWtCO0lBQ3BCLFVBQVUsRUFBRSw2QkFBNkI7SUFDekMsYUFBYSxFQUFFLFNBQVM7SUFDeEIsY0FBYyxFQUFFLGlCQUFpQjtJQUNqQyxXQUFXLEVBQUUsZUFBZTtJQUM1QixPQUFPLEVBQUUsZUFBZTtJQUN4QixXQUFXLEVBQUUsK0JBQStCO0NBQzdDOzs7Ozs7Ozs7Ozs7QUNaRDs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCxxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0puRCwwQ0FBMEM7QUFDMUMsZUFBZTtBQUNmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFrQkU7QUFDOEQ7QUFLNUM7QUFJZ0M7QUFVckMsTUFBTSxNQUFPLFNBQVEsNENBQUssQ0FBQyxhQUd6QztJQUhEOztRQVVFLFVBQUssR0FBRztZQUNOLGVBQWUsRUFBRSxFQUFFO1lBQ25CLFdBQVcs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SUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUU7NEJBQ2xHLENBQUMsQ0FBQyxpREFBaUQ7NEJBQ25ELENBQUMsQ0FBQyxpREFBaUQ7d0JBRXBELElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLHlEQUFNLFNBQVMsRUFBQyxTQUFTLEdBQVE7d0JBQ3ZELDZEQUFlLENBQUMsY0FBYyxDQUN4QjtvQkFDVCwyREFDRSxTQUFTLEVBQUMsY0FBYyxFQUN4QixPQUFPLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUMvQixRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBRTNCLDZEQUFlLENBQUMsV0FBVyxDQUNyQixDQUNSLENBQ0osQ0FDRyxDQUNGLENBQ1A7SUFDSCxDQUFDO0NBQ0Y7QUFFTyxTQUFTLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9maWx0cmFyLWUtZ2VyYXItcmVsYXRvcmlvL3NyYy9ydW50aW1lL3RyYW5zbGF0aW9ucy9kZWZhdWx0LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvZmlsdHJhci1lLWdlcmFyLXJlbGF0b3Jpby9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgX3dpZGdldExhYmVsOiAnRmlsdHJhciBlIEdlcmFyIFJlbGF0w7NyaW8nLFxuICBhZGRMYXllcjogJ0FkaWNpb25hciBDYW1hZGEnLFxuICBmZWF0dXJlU2VydmljZVVybDogJ1VSTCBkbyBGZWF0dXJlIFNlcnZpY2UnLFxuICBpbnN0cnVjdGlvbnM6XG4gICAgJ0RpZ2l0ZSBvIG7CuiBJREVBJyxcbiAgc2VhcmNoSWRlYTogJ1Blc3F1aXNhciBwb3IgbsO6bWVybyAoaWRlYSknLFxuICBmaWx0ZXJBbmRab29tOiAnRmlsdHJhcicsXG4gIGdlbmVyYXRlUmVwb3J0OiAnR2VyYXIgUmVsYXTDs3JpbycsXG4gIGNsZWFyRmlsdGVyOiAnTGltcGFyIEZpbHRybycsXG4gIGxvYWRpbmc6ICdDYXJyZWdhbmRvLi4uJyxcbiAgbGF5ZXJMb2FkZWQ6ICdDYW1hZGEgY2FycmVnYWRhIGNvbSBzdWNlc3NvISdcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2FyY2dpc19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgKi9cbi8qKiBAanN4IGpzeCAqL1xuLyoqXG4gIExpY2Vuc2luZ1xuXG4gIENvcHlyaWdodCAyMDIyIEVzcmlcblxuICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyBZb3VcbiAgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXlcbiAgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yXG4gIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZ1xuICBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG5cbiAgQSBjb3B5IG9mIHRoZSBsaWNlbnNlIGlzIGF2YWlsYWJsZSBpbiB0aGUgcmVwb3NpdG9yeSdzXG4gIExJQ0VOU0UgZmlsZS5cbiovXG5pbXBvcnQgeyBSZWFjdCwgdHlwZSBBbGxXaWRnZXRQcm9wcywgY3NzLCBqc3ggfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQge1xuICBsb2FkQXJjR0lTSlNBUElNb2R1bGVzLFxuICBKaW11TWFwVmlld0NvbXBvbmVudCxcbiAgdHlwZSBKaW11TWFwVmlld1xufSBmcm9tICdqaW11LWFyY2dpcydcblxuaW1wb3J0IHR5cGUgeyBJTUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZydcblxuaW1wb3J0IGRlZmF1bHRNZXNzYWdlcyBmcm9tICcuL3RyYW5zbGF0aW9ucy9kZWZhdWx0J1xuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbiAgaWRlYVNlYXJjaElucHV0OiBzdHJpbmdcbiAgamltdU1hcFZpZXc6IEppbXVNYXBWaWV3XG4gIGZlYXR1cmVMYXllcjogX19lc3JpLkZlYXR1cmVMYXllclxuICBsb2FkaW5nOiBib29sZWFuXG4gIGluaXRpYWxFeHRlbnQ6IF9fZXNyaS5FeHRlbnRcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2lkZ2V0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxcbkFsbFdpZGdldFByb3BzPElNQ29uZmlnPixcbklTdGF0ZVxuPiB7XG4gIC8vIEdpdmUgdHlwZXMgdG8gdGhlIG1vZHVsZXMgd2UgaW1wb3J0IGZyb20gdGhlIEFyY0dJUyBBUEkgZm9yIEphdmFTY3JpcHRcbiAgLy8gdG8gdGVsbCBUeXBlU2NyaXB0IHdoYXQgdHlwZXMgdGhleSBhcmUuXG4gIEZlYXR1cmVMYXllcjogdHlwZW9mIF9fZXNyaS5GZWF0dXJlTGF5ZXJcbiAgUXVlcnk6IHR5cGVvZiBfX2VzcmkuUXVlcnlcbiAgU3BhdGlhbFJlZmVyZW5jZTogdHlwZW9mIF9fZXNyaS5TcGF0aWFsUmVmZXJlbmNlXG5cbiAgc3RhdGUgPSB7XG4gICAgaWRlYVNlYXJjaElucHV0OiAnJyxcbiAgICBqaW11TWFwVmlldzogbnVsbCxcbiAgICBmZWF0dXJlTGF5ZXI6IG51bGwsXG4gICAgbG9hZGluZzogZmFsc2UsXG4gICAgaW5pdGlhbEV4dGVudDogbnVsbFxuICB9XG5cbiAgLy8gVVJMIGZpeGEgZGEgY2FtYWRhXG4gIHJlYWRvbmx5IEZFQVRVUkVfU0VSVklDRV9VUkwgPSAnaHR0cHM6Ly9tZWlvYW1iaWVudGUuc2lzdGVtYXMubXBiYS5tcC5ici9zZXJ2ZXIvcmVzdC9zZXJ2aWNlcy9Ib3N0ZWQvYWxlcnRhc19yZWdpb25hbF9sYXBhL0ZlYXR1cmVTZXJ2ZXInXG4gIFxuICAvLyBVUkwgZGEgZmVycmFtZW50YSBkZSBnZW9wcm9jZXNzYW1lbnRvXG4gIHJlYWRvbmx5IEdQX1NFUlZJQ0VfVVJMID0gJ2h0dHBzOi8vbWVpb2FtYmllbnRlLnNpc3RlbWFzLm1wYmEubXAuYnIvc2VydmVyL3Jlc3Qvc2VydmljZXMvdGVzdGVvdXRwdXQvcHJvY2Vzc2FyYWxlcnRhX2lkZWEvR1BTZXJ2ZXInXG4gIFxuICAvLyBVUkwgZml4YSBkbyBzdWJtaXRKb2JcbiAgcmVhZG9ubHkgR1BfU1VCTUlUX0pPQl9VUkwgPSAnaHR0cHM6Ly9tZWlvYW1iaWVudGUuc2lzdGVtYXMubXBiYS5tcC5ici9zZXJ2ZXIvcmVzdC9zZXJ2aWNlcy90ZXN0ZW91dHB1dC9wcm9jZXNzYXJhbGVydGFfaWRlYS9HUFNlcnZlci9yZWxhdG9yaW9fYW5hbGlzZV9sYXBhL3N1Ym1pdEpvYidcbiAgXG4gIC8vIE5vbWUgZGEgdGFzayBlc3BlY8OtZmljYSBkZW50cm8gZGEgR1BcbiAgcmVhZG9ubHkgR1BfVEFTS19OQU1FID0gJ1Byb2Nlc3NhbWVudG8gZGUgYWxlcnRhcydcblxuICAvLyBGdW7Dp8OjbyBjaGFtYWRhIHF1YW5kbyBvIHZhbG9yIGRhIHBlc3F1aXNhIG11ZGFcbiAgaGFuZGxlSWRlYVNlYXJjaElucHV0Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpZGVhU2VhcmNoSW5wdXQ6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgIH0pXG4gIH1cblxuICAvLyBDYXJyZWdhIGEgY2FtYWRhIGF1dG9tYXRpY2FtZW50ZSBxdWFuZG8gbyBjb21wb25lbnRlIMOpIG1vbnRhZG8gb3UgbyBtYXBhIGVzdMOhIGRpc3BvbsOtdmVsXG4gIGNvbXBvbmVudERpZFVwZGF0ZSA9IChwcmV2UHJvcHMsIHByZXZTdGF0ZSkgPT4ge1xuICAgIGlmICh0aGlzLnN0YXRlLmppbXVNYXBWaWV3ICYmICF0aGlzLnN0YXRlLmZlYXR1cmVMYXllciAmJiAhcHJldlN0YXRlLmppbXVNYXBWaWV3KSB7XG4gICAgICAvLyBTYWx2YSBhIHZpc3VhbGl6YcOnw6NvIGluaWNpYWwgcXVhbmRvIG8gbWFwYSDDqSBkZXRlY3RhZG8gcGVsYSBwcmltZWlyYSB2ZXpcbiAgICAgIGlmICh0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcgJiYgIXRoaXMuc3RhdGUuaW5pdGlhbEV4dGVudCkge1xuICAgICAgICBjb25zdCBjdXJyZW50RXh0ZW50ID0gdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3LmV4dGVudFxuICAgICAgICBpZiAoY3VycmVudEV4dGVudCkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaW5pdGlhbEV4dGVudDogY3VycmVudEV4dGVudC5jbG9uZSgpXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5sb2FkRmVhdHVyZUxheWVyKClcbiAgICB9XG4gIH1cblxuICAvLyBDYXJyZWdhIGEgY2FtYWRhIGRlIGZlYXR1cmUgc2VydmljZVxuICBsb2FkRmVhdHVyZUxheWVyID0gKCkgPT4ge1xuICAgIGlmICghdGhpcy5zdGF0ZS5qaW11TWFwVmlldykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSlcblxuICAgIGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xuICAgICAgJ2VzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllcicsXG4gICAgICAnZXNyaS9nZW9tZXRyeS9TcGF0aWFsUmVmZXJlbmNlJ1xuICAgIF0pLnRoZW4oKG1vZHVsZXMpID0+IHtcbiAgICAgIFt0aGlzLkZlYXR1cmVMYXllciwgdGhpcy5TcGF0aWFsUmVmZXJlbmNlXSA9IG1vZHVsZXNcblxuICAgICAgLy8gQ3JpYSBhIGNhbWFkYSBjb20gYSBVUkwgZml4YVxuICAgICAgY29uc3QgbGF5ZXIgPSBuZXcgdGhpcy5GZWF0dXJlTGF5ZXIoe1xuICAgICAgICB1cmw6IHRoaXMuRkVBVFVSRV9TRVJWSUNFX1VSTFxuICAgICAgfSlcblxuICAgICAgLy8gQWRpY2lvbmEgYSBjYW1hZGEgYW8gbWFwYVxuICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3Lm1hcC5hZGQobGF5ZXIpXG5cbiAgICAgIC8vIEFndWFyZGEgYSBjYW1hZGEgc2VyIGNyaWFkYVxuICAgICAgbGF5ZXIub24oJ2xheWVydmlldy1jcmVhdGUnLCAoKSA9PiB7XG4gICAgICAgIC8vIFNhbHZhIGEgdmlzdWFsaXphw6fDo28gaW5pY2lhbCBkbyBtYXBhIHNlIGFpbmRhIG7Do28gZm9pIHNhbHZhXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5pbml0aWFsRXh0ZW50ICYmIHRoaXMuc3RhdGUuamltdU1hcFZpZXcgJiYgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3KSB7XG4gICAgICAgICAgY29uc3QgY3VycmVudEV4dGVudCA9IHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5leHRlbnRcbiAgICAgICAgICBpZiAoY3VycmVudEV4dGVudCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIGZlYXR1cmVMYXllcjogbGF5ZXIsXG4gICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICBpbml0aWFsRXh0ZW50OiBjdXJyZW50RXh0ZW50LmNsb25lKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBmZWF0dXJlTGF5ZXI6IGxheWVyLFxuICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBmZWF0dXJlTGF5ZXI6IGxheWVyLFxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuXG4gICAgICBsYXllci5vbignbGF5ZXJ2aWV3LWNyZWF0ZS1lcnJvcicsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBhbyBjYXJyZWdhciBhIGNhbWFkYScpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgLy8gRnVuw6fDo28gcGFyYSBmaWx0cmFyIGUgZGFyIHpvb20gbm8gcG9sw61nb25vIGJhc2VhZG8gbmEgcGVzcXVpc2FcbiAgaGFuZGxlRmlsdGVyQW5kWm9vbSA9IGFzeW5jIChldnQpID0+IHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgLy8gQ2Fzb3MgZGUgZXJyb1xuICAgIGlmICghdGhpcy5zdGF0ZS5qaW11TWFwVmlldykge1xuICAgICAgYWxlcnQoJ1BvciBmYXZvciwgY29uZmlndXJlIHVtIG1hcGEgbm8gd2lkZ2V0LicpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKCF0aGlzLnN0YXRlLmZlYXR1cmVMYXllcikge1xuICAgICAgYWxlcnQoJ0EgY2FtYWRhIGFpbmRhIG7Do28gZm9pIGNhcnJlZ2FkYS4gQWd1YXJkZS4uLicpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGUuaWRlYVNlYXJjaElucHV0ID09PSAnJyB8fCB0aGlzLnN0YXRlLmlkZWFTZWFyY2hJbnB1dC50cmltKCkgPT09ICcnKSB7XG4gICAgICBhbGVydCgnUG9yIGZhdm9yLCBkaWdpdGUgdW0gbsO6bWVybyBwYXJhIHBlc3F1aXNhciBuYSBjb2x1bmEgaWRlYS4nKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSlcblxuICAgIC8vIENhcnJlZ2Egb3MgbcOzZHVsb3MgbmVjZXNzw6FyaW9zXG4gICAgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbXG4gICAgICAnZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyJyxcbiAgICAgICdlc3JpL2dlb21ldHJ5L1NwYXRpYWxSZWZlcmVuY2UnXG4gICAgXSkudGhlbigobW9kdWxlcykgPT4ge1xuICAgICAgW3RoaXMuRmVhdHVyZUxheWVyLCB0aGlzLlNwYXRpYWxSZWZlcmVuY2VdID0gbW9kdWxlc1xuXG4gICAgICBjb25zdCBsYXllciA9IHRoaXMuc3RhdGUuZmVhdHVyZUxheWVyXG4gICAgICBjb25zdCBzZWFyY2hWYWx1ZSA9IHRoaXMuc3RhdGUuaWRlYVNlYXJjaElucHV0LnRyaW0oKVxuICAgICAgXG4gICAgICAvLyBFc2NhcGEgYXNwYXMgc2ltcGxlcyBwYXJhIGV2aXRhciBTUUwgaW5qZWN0aW9uXG4gICAgICBjb25zdCBlc2NhcGVkVmFsdWUgPSBzZWFyY2hWYWx1ZS5yZXBsYWNlKC8nL2csIFwiJydcIilcblxuICAgICAgLy8gVmVyaWZpY2Egc2UgYSBjYW1hZGEgZXN0w6EgY2FycmVnYWRhIGUgb2J0w6ltIGluZm9ybWHDp8O1ZXMgZG9zIGNhbXBvc1xuICAgICAgLy8gQWd1YXJkYSBhIGNhbWFkYSBlc3RhciBjb21wbGV0YW1lbnRlIGNhcnJlZ2FkYVxuICAgICAgY29uc3QgY2hlY2tBbmRRdWVyeSA9ICgpID0+IHtcbiAgICAgICAgLy8gTGlzdGEgZGUgcG9zc8OtdmVpcyBub21lcyBkZSBjb2x1bmEgKGNhc2UtaW5zZW5zaXRpdmUpXG4gICAgICAgIGNvbnN0IHBvc3NpYmxlRmllbGROYW1lcyA9IFsnaWRlYScsICdJREVBJywgJ0lkZWEnLCAnSUQnLCAnaWQnLCAnSWQnXVxuICAgICAgICBsZXQgZmllbGROYW1lID0gJ2lkZWEnIC8vIFBhZHLDo29cbiAgICAgICAgXG4gICAgICAgIC8vIFRlbnRhIGVuY29udHJhciBvIGNhbXBvIGNvcnJldG9cbiAgICAgICAgaWYgKGxheWVyLmZpZWxkcyAmJiBsYXllci5maWVsZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnN0IGZvdW5kRmllbGQgPSBsYXllci5maWVsZHMuZmluZChmaWVsZCA9PiBcbiAgICAgICAgICAgIHBvc3NpYmxlRmllbGROYW1lcy5pbmNsdWRlcyhmaWVsZC5uYW1lKVxuICAgICAgICAgIClcbiAgICAgICAgICBpZiAoZm91bmRGaWVsZCkge1xuICAgICAgICAgICAgZmllbGROYW1lID0gZm91bmRGaWVsZC5uYW1lXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFNlIG7Do28gZW5jb250cmFyLCB0ZW50YSBmYXplciB1bWEgYnVzY2EgY2FzZS1pbnNlbnNpdGl2ZVxuICAgICAgICAgICAgY29uc3QgY2FzZUluc2Vuc2l0aXZlRmllbGQgPSBsYXllci5maWVsZHMuZmluZChmaWVsZCA9PiBcbiAgICAgICAgICAgICAgZmllbGQubmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaWRlYSdcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGlmIChjYXNlSW5zZW5zaXRpdmVGaWVsZCkge1xuICAgICAgICAgICAgICBmaWVsZE5hbWUgPSBjYXNlSW5zZW5zaXRpdmVGaWVsZC5uYW1lXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBMb2cgZG9zIGNhbXBvcyBkaXNwb27DrXZlaXMgcGFyYSBkZWJ1Z1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ2FtcG9zIGRpc3BvbsOtdmVpcyBuYSBjYW1hZGE6JywgbGF5ZXIuZmllbGRzLm1hcChmID0+IGYubmFtZSkpXG4gICAgICAgICAgICAgIC8vIFRlbnRhIHVzYXIgbyBwcmltZWlybyBjYW1wbyBxdWUgcGFyZWNlIHNlciB1bSBJRFxuICAgICAgICAgICAgICBjb25zdCBpZEZpZWxkID0gbGF5ZXIuZmllbGRzLmZpbmQoZmllbGQgPT4gXG4gICAgICAgICAgICAgICAgZmllbGQudHlwZSA9PT0gJ2VzcmlGaWVsZFR5cGVTdHJpbmcnIHx8IGZpZWxkLnR5cGUgPT09ICdlc3JpRmllbGRUeXBlSW50ZWdlcicgfHwgZmllbGQudHlwZSA9PT0gJ2VzcmlGaWVsZFR5cGVEb3VibGUnXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgaWYgKGlkRmllbGQpIHtcbiAgICAgICAgICAgICAgICBmaWVsZE5hbWUgPSBpZEZpZWxkLm5hbWVcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgVXNhbmRvIGNhbXBvOiAke2ZpZWxkTmFtZX1gKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ3JpYSB1bWEgcXVlcnkgcGFyYSBidXNjYXIgbyBwb2zDrWdvbm8gcGVsYSBjb2x1bmFcbiAgICAgICAgLy8gVXNhIExJS0UgcGFyYSBidXNjYSBtYWlzIGZsZXjDrXZlbCBlIHRyYXRhIGNvbW8gc3RyaW5nXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gbGF5ZXIuY3JlYXRlUXVlcnkoKVxuICAgICAgICBcbiAgICAgICAgLy8gVGVudGEgZGlmZXJlbnRlcyBhYm9yZGFnZW5zIGRlIHF1ZXJ5XG4gICAgICAgIC8vIDEuIEJ1c2NhIGV4YXRhIGNvbW8gc3RyaW5nXG4gICAgICAgIC8vIDIuIEJ1c2NhIGNvbSBMSUtFIHBhcmEgdmFsb3JlcyBwYXJjaWFpc1xuICAgICAgICAvLyAzLiBCdXNjYSBjb21vIG7Dum1lcm8gKHNlIG8gdmFsb3IgZm9yIG51bcOpcmljbylcbiAgICAgICAgY29uc3QgaGFzU3BlY2lhbENoYXJzID0gc2VhcmNoVmFsdWUuaW5kZXhPZignLicpICE9PSAtMSB8fCBzZWFyY2hWYWx1ZS5pbmRleE9mKCcvJykgIT09IC0xXG4gICAgICAgIFxuICAgICAgICAvLyBQYXJhIHZhbG9yZXMgY29tIGNhcmFjdGVyZXMgZXNwZWNpYWlzIChjb21vIFwiMDAzLjkuNDI3MDc0LzIwMjVcIiksIHVzYSBhcGVuYXMgY29tbyBzdHJpbmdcbiAgICAgICAgaWYgKGhhc1NwZWNpYWxDaGFycykge1xuICAgICAgICAgIHF1ZXJ5LndoZXJlID0gYCR7ZmllbGROYW1lfSA9ICcke2VzY2FwZWRWYWx1ZX0nYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFNlIGZvciB1bSBuw7ptZXJvIHNpbXBsZXMsIHRlbnRhIGNvbW8gbsO6bWVybyBlIGNvbW8gc3RyaW5nXG4gICAgICAgICAgY29uc3QgaXNOdW1lcmljID0gIWlzTmFOKHBhcnNlRmxvYXQoc2VhcmNoVmFsdWUpKSAmJiBpc0Zpbml0ZShwYXJzZUZsb2F0KHNlYXJjaFZhbHVlKSlcbiAgICAgICAgICBpZiAoaXNOdW1lcmljKSB7XG4gICAgICAgICAgICBxdWVyeS53aGVyZSA9IGAke2ZpZWxkTmFtZX0gPSAke3NlYXJjaFZhbHVlfSBPUiAke2ZpZWxkTmFtZX0gPSAnJHtlc2NhcGVkVmFsdWV9J2BcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcXVlcnkud2hlcmUgPSBgJHtmaWVsZE5hbWV9ID0gJyR7ZXNjYXBlZFZhbHVlfSdgXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBxdWVyeS5yZXR1cm5HZW9tZXRyeSA9IHRydWVcblxuICAgICAgICAvLyBFeGVjdXRhIGEgcXVlcnlcbiAgICAgICAgbGF5ZXIucXVlcnlGZWF0dXJlcyhxdWVyeSkudGhlbigocmVzdWx0cykgPT4ge1xuICAgICAgICAgIGlmIChyZXN1bHRzLmZlYXR1cmVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgLy8gU2UgbsOjbyBlbmNvbnRyb3UsIHRlbnRhIGNvbSBMSUtFXG4gICAgICAgICAgICBjb25zdCBsaWtlUXVlcnkgPSBsYXllci5jcmVhdGVRdWVyeSgpXG4gICAgICAgICAgICBsaWtlUXVlcnkud2hlcmUgPSBgJHtmaWVsZE5hbWV9IExJS0UgJyUke2VzY2FwZWRWYWx1ZX0lJ2BcbiAgICAgICAgICAgIGxpa2VRdWVyeS5yZXR1cm5HZW9tZXRyeSA9IHRydWVcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIGxheWVyLnF1ZXJ5RmVhdHVyZXMobGlrZVF1ZXJ5KS50aGVuKChsaWtlUmVzdWx0cykgPT4ge1xuICAgICAgICAgICAgICBpZiAobGlrZVJlc3VsdHMuZmVhdHVyZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoYE5lbmh1bSBwb2zDrWdvbm8gZW5jb250cmFkbyBjb20gJHtmaWVsZE5hbWV9ID0gJHtzZWFyY2hWYWx1ZX1gKVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAvLyBTZSBlbmNvbnRyb3UgY29tIExJS0UsIHVzYSBvIHByaW1laXJvIHJlc3VsdGFkb1xuICAgICAgICAgICAgICBjb25zdCBmb3VuZEdyYXBoaWMgPSBsaWtlUmVzdWx0cy5mZWF0dXJlc1swXVxuICAgICAgICAgICAgICBjb25zdCBhY3R1YWxWYWx1ZSA9IGZvdW5kR3JhcGhpYy5hdHRyaWJ1dGVzW2ZpZWxkTmFtZV1cbiAgICAgICAgICAgICAgdGhpcy5hcHBseUZpbHRlckFuZFpvb20obGF5ZXIsIGZvdW5kR3JhcGhpYywgZmllbGROYW1lLCBhY3R1YWxWYWx1ZSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gU2UgZW5jb250cm91LCBhcGxpY2EgZmlsdHJvIGUgem9vbVxuICAgICAgICAgIGNvbnN0IGZvdW5kR3JhcGhpYyA9IHJlc3VsdHMuZmVhdHVyZXNbMF1cbiAgICAgICAgICBjb25zdCBhY3R1YWxWYWx1ZSA9IGZvdW5kR3JhcGhpYy5hdHRyaWJ1dGVzW2ZpZWxkTmFtZV1cbiAgICAgICAgICB0aGlzLmFwcGx5RmlsdGVyQW5kWm9vbShsYXllciwgZm91bmRHcmFwaGljLCBmaWVsZE5hbWUsIGFjdHVhbFZhbHVlKVxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGFvIHBlc3F1aXNhciBmZWF0dXJlczonLCBlcnJvcilcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdEZXRhbGhlcyBkbyBlcnJvOicsIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXG4gICAgICAgICAgICBkZXRhaWxzOiBlcnJvci5kZXRhaWxzLFxuICAgICAgICAgICAgZmllbGROYW1lOiBmaWVsZE5hbWUsXG4gICAgICAgICAgICBzZWFyY2hWYWx1ZTogc2VhcmNoVmFsdWVcbiAgICAgICAgICB9KVxuICAgICAgICAgIFxuICAgICAgICAgIC8vIFRlbnRhIG1vc3RyYXIgaW5mb3JtYcOnw7VlcyBtYWlzIMO6dGVpc1xuICAgICAgICAgIGxldCBlcnJvck1lc3NhZ2UgPSAnRXJybyBhbyBwZXNxdWlzYXIuICdcbiAgICAgICAgICBpZiAobGF5ZXIuZmllbGRzICYmIGxheWVyLmZpZWxkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBmaWVsZE5hbWVzID0gbGF5ZXIuZmllbGRzLm1hcChmID0+IGYubmFtZSkuam9pbignLCAnKVxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlICs9IGBcXG5cXG5DYW1wb3MgZGlzcG9uw612ZWlzOiAke2ZpZWxkTmFtZXN9YFxuICAgICAgICAgIH1cbiAgICAgICAgICBlcnJvck1lc3NhZ2UgKz0gYFxcblxcblZlcmlmaXF1ZSBzZSBhIGNvbHVuYSBcIiR7ZmllbGROYW1lfVwiIGV4aXN0ZSBlIHNlIG8gdmFsb3IgXCIke3NlYXJjaFZhbHVlfVwiIGVzdMOhIGNvcnJldG8uYFxuICAgICAgICAgIFxuICAgICAgICAgIGFsZXJ0KGVycm9yTWVzc2FnZSlcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy8gU2UgYSBjYW1hZGEgasOhIGVzdMOhIGNhcnJlZ2FkYSwgZXhlY3V0YSBkaXJldGFtZW50ZVxuICAgICAgaWYgKGxheWVyLmxvYWRlZCkge1xuICAgICAgICBjaGVja0FuZFF1ZXJ5KClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEFndWFyZGEgYSBjYW1hZGEgY2FycmVnYXJcbiAgICAgICAgbGF5ZXIud2hlbigoKSA9PiB7XG4gICAgICAgICAgY2hlY2tBbmRRdWVyeSgpXG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gY2FycmVnYXIgaW5mb3JtYcOnw7VlcyBkYSBjYW1hZGE6JywgZXJyb3IpXG4gICAgICAgICAgYWxlcnQoJ0Vycm8gYW8gY2FycmVnYXIgaW5mb3JtYcOnw7VlcyBkYSBjYW1hZGEuIFZlcmlmaXF1ZSBzZSBhIGNhbWFkYSBlc3TDoSBhY2Vzc8OtdmVsLicpXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIC8vIEZ1bsOnw6NvIGF1eGlsaWFyIHBhcmEgYXBsaWNhciBmaWx0cm8gZSB6b29tXG4gIGFwcGx5RmlsdGVyQW5kWm9vbSA9IChsYXllciwgZ3JhcGhpYywgZmllbGROYW1lLCBhY3R1YWxWYWx1ZSkgPT4ge1xuICAgIC8vIE9idMOpbSBvIHZhbG9yIHJlYWwgZG8gYXRyaWJ1dG8gZG8gZ3JhcGhpY1xuICAgIGNvbnN0IGF0dHJpYnV0ZVZhbHVlID0gZ3JhcGhpYy5hdHRyaWJ1dGVzW2ZpZWxkTmFtZV1cbiAgICBcbiAgICAvLyBTZSBvIHZhbG9yIG7Do28gZm9pIHBhc3NhZG8sIHVzYSBvIGRvIGF0cmlidXRvXG4gICAgY29uc3QgdmFsdWVUb0ZpbHRlciA9IGFjdHVhbFZhbHVlICE9PSB1bmRlZmluZWQgPyBhY3R1YWxWYWx1ZSA6IGF0dHJpYnV0ZVZhbHVlXG4gICAgXG4gICAgLy8gRXNjYXBhIG8gdmFsb3IgcGFyYSBTUUwgKHRyYXRhIHN0cmluZ3MsIG7Dum1lcm9zIGUgbnVsbClcbiAgICBsZXQgZGVmaW5pdGlvbkV4cHJlc3Npb25cbiAgICBpZiAodmFsdWVUb0ZpbHRlciA9PT0gbnVsbCB8fCB2YWx1ZVRvRmlsdGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGRlZmluaXRpb25FeHByZXNzaW9uID0gYCR7ZmllbGROYW1lfSBJUyBOVUxMYFxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlVG9GaWx0ZXIgPT09ICdudW1iZXInKSB7XG4gICAgICBkZWZpbml0aW9uRXhwcmVzc2lvbiA9IGAke2ZpZWxkTmFtZX0gPSAke3ZhbHVlVG9GaWx0ZXJ9YFxuICAgIH0gZWxzZSB7XG4gICAgICAvLyDDiSB1bWEgc3RyaW5nLCBwcmVjaXNhIGVzY2FwYXIgYXNwYXMgc2ltcGxlc1xuICAgICAgY29uc3QgZXNjYXBlZFZhbHVlID0gU3RyaW5nKHZhbHVlVG9GaWx0ZXIpLnJlcGxhY2UoLycvZywgXCInJ1wiKVxuICAgICAgZGVmaW5pdGlvbkV4cHJlc3Npb24gPSBgJHtmaWVsZE5hbWV9ID0gJyR7ZXNjYXBlZFZhbHVlfSdgXG4gICAgfVxuICAgIFxuICAgIGNvbnNvbGUubG9nKGBBcGxpY2FuZG8gZmlsdHJvOiAke2ZpZWxkTmFtZX0gPSAke3ZhbHVlVG9GaWx0ZXJ9YClcbiAgICBjb25zb2xlLmxvZyhgRGVmaW5pdGlvbiBFeHByZXNzaW9uOiAke2RlZmluaXRpb25FeHByZXNzaW9ufWApXG5cbiAgICAvLyBBcGxpY2EgbyBmaWx0cm8gbmEgY2FtYWRhIHVzYW5kbyBkZWZpbml0aW9uRXhwcmVzc2lvblxuICAgIC8vIElzc28gw6kgbyBtw6l0b2RvIGNvcnJldG8gcGFyYSBmaWx0cmFyIHVtYSBGZWF0dXJlTGF5ZXIgZSBvY3VsdGFyIG91dHJvcyBwb2zDrWdvbm9zXG4gICAgbGF5ZXIuZGVmaW5pdGlvbkV4cHJlc3Npb24gPSBkZWZpbml0aW9uRXhwcmVzc2lvblxuICAgIFxuICAgIC8vIEZvcsOnYSBhIGF0dWFsaXphw6fDo28gaW1lZGlhdGEgZGEgY2FtYWRhIHBhcmEgYXBsaWNhciBvIGZpbHRyb1xuICAgIGxheWVyLnJlZnJlc2goKVxuICAgIFxuICAgIGNvbnNvbGUubG9nKCdGaWx0cm8gYXBsaWNhZG8uIEEgY2FtYWRhIGRldmUgbW9zdHJhciBBUEVOQVMgbyBwb2zDrWdvbm8gc2VsZWNpb25hZG8nKVxuICAgIGNvbnNvbGUubG9nKCdEZWZpbml0aW9uIEV4cHJlc3Npb246JywgZGVmaW5pdGlvbkV4cHJlc3Npb24pXG4gICAgXG4gICAgLy8gQWd1YXJkYSB1bSBwb3VjbyBwYXJhIGdhcmFudGlyIHF1ZSBvIGZpbHRybyBzZWphIHByb2Nlc3NhZG9cbiAgICAvLyBBZ3VhcmRhIHF1ZSBhIGNhbWFkYSBlc3RlamEgY29tcGxldGFtZW50ZSBjYXJyZWdhZGEgYW50ZXMgZGUgYXBsaWNhciBvIGZpbHRyb1xuICAgIGlmIChsYXllci5sb2FkZWQpIHtcbiAgICAgIC8vIEEgY2FtYWRhIGrDoSBlc3TDoSBjYXJyZWdhZGEsIGFwbGljYSBvIGZpbHRybyBkaXJldGFtZW50ZVxuICAgICAgLy8gQWd1YXJkYSB1bSBwb3VjbyBwYXJhIGdhcmFudGlyIHF1ZSBvIGZpbHRybyBzZWphIGFwbGljYWRvXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gVmVyaWZpY2Egc2UgbyBmaWx0cm8gZm9pIGFwbGljYWRvXG4gICAgICAgIGlmIChsYXllci5kZWZpbml0aW9uRXhwcmVzc2lvbiA9PT0gZGVmaW5pdGlvbkV4cHJlc3Npb24pIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnRmlsdHJvIGNvbmZpcm1hZG8gbmEgY2FtYWRhJylcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFwcGx5Wm9vbUFmdGVyRmlsdGVyKGxheWVyLCBncmFwaGljKVxuICAgICAgfSwgMzAwKVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBBZ3VhcmRhIGEgY2FtYWRhIGNhcnJlZ2FyIHByaW1laXJvXG4gICAgICBsYXllci53aGVuKCgpID0+IHtcbiAgICAgICAgLy8gQXBsaWNhIG8gZmlsdHJvIG5vdmFtZW50ZSBhcMOzcyBjYXJyZWdhciAoZ2FyYW50aWEpXG4gICAgICAgIGxheWVyLmRlZmluaXRpb25FeHByZXNzaW9uID0gZGVmaW5pdGlvbkV4cHJlc3Npb25cbiAgICAgICAgbGF5ZXIucmVmcmVzaCgpXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuYXBwbHlab29tQWZ0ZXJGaWx0ZXIobGF5ZXIsIGdyYXBoaWMpXG4gICAgICAgIH0sIDMwMClcbiAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGFvIGFndWFyZGFyIGNhbWFkYTonLCBlcnJvcilcbiAgICAgICAgLy8gTWVzbW8gYXNzaW0gdGVudGEgYXBsaWNhciBvIHpvb21cbiAgICAgICAgdGhpcy5hcHBseVpvb21BZnRlckZpbHRlcihsYXllciwgZ3JhcGhpYylcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gRnVuw6fDo28gYXV4aWxpYXIgcGFyYSBhcGxpY2FyIHpvb20gYXDDs3MgbyBmaWx0cm9cbiAgYXBwbHlab29tQWZ0ZXJGaWx0ZXIgPSAobGF5ZXIsIGdyYXBoaWMpID0+IHtcbiAgICAvLyBBZ3VhcmRhIHVtIHBvdWNvIHBhcmEgZ2FyYW50aXIgcXVlIG8gZmlsdHJvIHNlamEgcHJvY2Vzc2FkbyBwZWxhIGNhbWFkYVxuICAgIC8vIE8gZGVmaW5pdGlvbkV4cHJlc3Npb24gcHJlY2lzYSBkZSB0ZW1wbyBwYXJhIHNlciBwcm9jZXNzYWRvXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAvLyBEw6Egem9vbSBubyBwb2zDrWdvbm8gZW5jb250cmFkbyBjb20gcGFkZGluZyBwYXJhIG7Do28gY29ydGFyXG4gICAgICBpZiAoZ3JhcGhpYy5nZW9tZXRyeSAmJiB0aGlzLnN0YXRlLmppbXVNYXBWaWV3ICYmIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldykge1xuICAgICAgICAvLyBVc2EgZ29UbyBjb20gdGFyZ2V0IGUgcGFkZGluZyBlbSBwaXhlbHMgcGFyYSBjb250cm9sYXIgbWVsaG9yIG8gem9vbVxuICAgICAgICAvLyBQYWRkaW5nIGRlIDUwIHBpeGVscyBlbSBjYWRhIGxhZG8gcGFyYSBuw6NvIGNvcnRhciBvIHBvbMOtZ29ub1xuICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcuZ29Ubyh7XG4gICAgICAgICAgdGFyZ2V0OiBncmFwaGljLmdlb21ldHJ5LFxuICAgICAgICAgIHBhZGRpbmc6IHtcbiAgICAgICAgICAgIGxlZnQ6IDUwLFxuICAgICAgICAgICAgcmlnaHQ6IDUwLFxuICAgICAgICAgICAgdG9wOiA1MCxcbiAgICAgICAgICAgIGJvdHRvbTogNTBcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBkdXJhdGlvbjogNTAwXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdab29tIGFwbGljYWRvIG5vIHBvbMOtZ29ubyBmaWx0cmFkbyBjb20gcGFkZGluZycpXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pXG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gZGFyIHpvb206JywgZXJyb3IpXG4gICAgICAgICAgLy8gRmFsbGJhY2s6IHRlbnRhIHpvb20gY29tIGV4dGVudCBjYWxjdWxhZG8gbWFudWFsbWVudGVcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZXh0ZW50ID0gZ3JhcGhpYy5nZW9tZXRyeS5leHRlbnRcbiAgICAgICAgICAgIC8vIEFkaWNpb25hIDEwJSBkZSBwYWRkaW5nIGNhbGN1bGFkbyBhIHBhcnRpciBkbyB0YW1hbmhvIGRvIGV4dGVudFxuICAgICAgICAgICAgY29uc3QgcGFkZGluZ0ZhY3RvciA9IDAuMVxuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBleHRlbnQud2lkdGhcbiAgICAgICAgICAgIGNvbnN0IGhlaWdodCA9IGV4dGVudC5oZWlnaHRcbiAgICAgICAgICAgIGNvbnN0IHBhZGRlZEV4dGVudCA9IGV4dGVudC5leHBhbmQod2lkdGggKiBwYWRkaW5nRmFjdG9yLCBoZWlnaHQgKiBwYWRkaW5nRmFjdG9yKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcuZ29UbyhwYWRkZWRFeHRlbnQsIHtcbiAgICAgICAgICAgICAgZHVyYXRpb246IDUwMFxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdab29tIGFwbGljYWRvIHVzYW5kbyBleHRlbnQgY29tIHBhZGRpbmcgY2FsY3VsYWRvJylcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pXG4gICAgICAgICAgICB9KS5jYXRjaCgoZmFsbGJhY2tFcnJvcikgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvIG5vIHpvb20gZGUgZmFsbGJhY2s6JywgZmFsbGJhY2tFcnJvcilcbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gY2F0Y2ggKGNhbGNFcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBhbyBjYWxjdWxhciBleHRlbnQ6JywgY2FsY0Vycm9yKVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pXG4gICAgICB9XG4gICAgfSwgNTAwKVxuICB9XG5cbiAgLy8gRnVuw6fDo28gcGFyYSBsaW1wYXIgbyBmaWx0cm9cbiAgaGFuZGxlQ2xlYXJGaWx0ZXIgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUuZmVhdHVyZUxheWVyKSB7XG4gICAgICAvLyBSZW1vdmUgbyBmaWx0cm8gZGVmaW5pbmRvIGRlZmluaXRpb25FeHByZXNzaW9uIGNvbW8gdmF6aW8gb3UgbnVsbFxuICAgICAgdGhpcy5zdGF0ZS5mZWF0dXJlTGF5ZXIuZGVmaW5pdGlvbkV4cHJlc3Npb24gPSBudWxsXG4gICAgICB0aGlzLnN0YXRlLmZlYXR1cmVMYXllci5yZWZyZXNoKClcbiAgICAgIGNvbnNvbGUubG9nKCdGaWx0cm8gcmVtb3ZpZG8gLSB0b2RvcyBvcyBhbGVydGFzIGRldmVtIGFwYXJlY2VyIG5vdmFtZW50ZScpXG4gICAgICBcbiAgICAgIC8vIEFndWFyZGEgdW0gcG91Y28gcGFyYSBnYXJhbnRpciBxdWUgbyBmaWx0cm8gc2VqYSByZW1vdmlkb1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIC8vIFZlcmlmaWNhIHNlIG8gZmlsdHJvIGZvaSByZW1vdmlkb1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuZmVhdHVyZUxheWVyLmRlZmluaXRpb25FeHByZXNzaW9uIHx8IHRoaXMuc3RhdGUuZmVhdHVyZUxheWVyLmRlZmluaXRpb25FeHByZXNzaW9uID09PSAnJykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdGaWx0cm8gY29uZmlybWFkbyBjb21vIHJlbW92aWRvJylcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gUmVzdGF1cmEgYSB2aXN1YWxpemHDp8OjbyBpbmljaWFsIGRvIG1hcGFcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuamltdU1hcFZpZXcgJiYgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3KSB7XG4gICAgICAgICAgaWYgKHRoaXMuc3RhdGUuaW5pdGlhbEV4dGVudCkge1xuICAgICAgICAgICAgLy8gUmVzdGF1cmEgYSBleHRlbnPDo28gaW5pY2lhbCBzYWx2YVxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3LmdvVG8odGhpcy5zdGF0ZS5pbml0aWFsRXh0ZW50LCB7XG4gICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDBcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVmlzdWFsaXphw6fDo28gaW5pY2lhbCByZXN0YXVyYWRhJylcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGFvIHJlc3RhdXJhciB2aXN1YWxpemHDp8OjbyBpbmljaWFsOicsIGVycm9yKVxuICAgICAgICAgICAgICAvLyBTZSBmYWxoYXIsIHRlbnRhIGZhemVyIHpvb20gcGFyYSBhIGNhbWFkYSBjb21wbGV0YVxuICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5mZWF0dXJlTGF5ZXIgJiYgdGhpcy5zdGF0ZS5mZWF0dXJlTGF5ZXIuZnVsbEV4dGVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5nb1RvKHRoaXMuc3RhdGUuZmVhdHVyZUxheWVyLmZ1bGxFeHRlbnQsIHtcbiAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBTZSBuw6NvIHRpdmVyIGV4dGVuc8OjbyBpbmljaWFsIHNhbHZhLCB0ZW50YSBmYXplciB6b29tIHBhcmEgYSBjYW1hZGEgY29tcGxldGFcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmZlYXR1cmVMYXllciAmJiB0aGlzLnN0YXRlLmZlYXR1cmVMYXllci5mdWxsRXh0ZW50KSB7XG4gICAgICAgICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5nb1RvKHRoaXMuc3RhdGUuZmVhdHVyZUxheWVyLmZ1bGxFeHRlbnQsIHtcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwXG4gICAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdab29tIHBhcmEgY2FtYWRhIGNvbXBsZXRhIGFwbGljYWRvJylcbiAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBhbyBmYXplciB6b29tIHBhcmEgY2FtYWRhIGNvbXBsZXRhOicsIGVycm9yKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgMzAwKVxuICAgICAgXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaWRlYVNlYXJjaElucHV0OiAnJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICAvLyBGdW7Dp8OjbyBwYXJhIGdlcmFyIHJlbGF0w7NyaW8gdXNhbmRvIGEgZmVycmFtZW50YSBkZSBnZW9wcm9jZXNzYW1lbnRvXG4gIGhhbmRsZUdlbmVyYXRlUmVwb3J0ID0gYXN5bmMgKCkgPT4ge1xuICAgIC8vIERlY2xhcmEgdmFyacOhdmVpcyBubyBlc2NvcG8gZGEgZnVuw6fDo28gcGFyYSBxdWUgZXN0ZWphbSBhY2Vzc8OtdmVpcyBubyBjYXRjaFxuICAgIGxldCBpZGVhTnVtYmVyID0gJydcbiAgICBsZXQgcGFyYW1OYW1lID0gbnVsbFxuICAgIGxldCBleGVjdXRlVXJsID0gJydcbiAgICBsZXQgdG9rZW4gPSBudWxsXG4gICAgXG4gICAgLy8gVmFsaWRhw6fDtWVzIGluaWNpYWlzXG4gICAgaWYgKHRoaXMuc3RhdGUuaWRlYVNlYXJjaElucHV0ID09PSAnJyB8fCB0aGlzLnN0YXRlLmlkZWFTZWFyY2hJbnB1dC50cmltKCkgPT09ICcnKSB7XG4gICAgICBhbGVydCgnUG9yIGZhdm9yLCBkaWdpdGUgdW0gbsO6bWVybyBkZSBpZGVhIHBhcmEgZ2VyYXIgbyByZWxhdMOzcmlvLicpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZGVhTnVtYmVyID0gdGhpcy5zdGF0ZS5pZGVhU2VhcmNoSW5wdXQudHJpbSgpXG4gICAgXG4gICAgLy8gVmFsaWRhw6fDo28gZG8gZm9ybWF0byBkbyBuw7ptZXJvIGRlIGlkZWFcbiAgICAvLyBGb3JtYXRvIGVzcGVyYWRvOiBYWFguWC5YWFhYWFgvWVlZWSAoZXg6IDAwMy45LjQyNzM4NC8yMDI1KVxuICAgIGNvbnN0IGlkZWFQYXR0ZXJuID0gL15cXGR7MSwzfVxcLlxcZHsxLDJ9XFwuXFxkezEsNn1cXC9cXGR7NH0kL1xuICAgIGlmICghaWRlYVBhdHRlcm4udGVzdChpZGVhTnVtYmVyKSkge1xuICAgICAgY29uc29sZS53YXJuKCdGb3JtYXRvIGRvIG7Dum1lcm8gZGUgaWRlYSBwb2RlIGVzdGFyIGluY29ycmV0bzonLCBpZGVhTnVtYmVyKVxuICAgICAgY29uc29sZS53YXJuKCdGb3JtYXRvIGVzcGVyYWRvOiBYWFguWC5YWFhYWFgvWVlZWSAoZXg6IDAwMy45LjQyNzM4NC8yMDI1KScpXG4gICAgICAvLyBOw6NvIGJsb3F1ZWlhLCBhcGVuYXMgYXZpc2Egbm8gY29uc29sZVxuICAgIH1cbiAgICBcbiAgICAvLyBSZW1vdmUgZXNwYcOnb3MgZXh0cmFzIGUgY2FyYWN0ZXJlcyBpbnZpc8OtdmVpc1xuICAgIGlkZWFOdW1iZXIgPSBpZGVhTnVtYmVyLnJlcGxhY2UoL1xccysvZywgJycpLnRyaW0oKVxuICAgIFxuICAgIC8vIFZhbGlkYcOnw6NvIGRlIGNvbXByaW1lbnRvIG3DrW5pbW9cbiAgICBpZiAoaWRlYU51bWJlci5sZW5ndGggPCAxMCkge1xuICAgICAgYWxlcnQoJ08gbsO6bWVybyBkZSBpZGVhIHBhcmVjZSBlc3RhciBpbmNvbXBsZXRvLiBWZXJpZmlxdWUgbyBmb3JtYXRvOiBYWFguWC5YWFhYWFgvWVlZWScpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgXG4gICAgY29uc29sZS5sb2coJz09PSBWQUxJREHDh8ODTyBETyBWQUxPUiA9PT0nKVxuICAgIGNvbnNvbGUubG9nKCdWYWxvciBvcmlnaW5hbDonLCB0aGlzLnN0YXRlLmlkZWFTZWFyY2hJbnB1dClcbiAgICBjb25zb2xlLmxvZygnVmFsb3IgcHJvY2Vzc2FkbzonLCBpZGVhTnVtYmVyKVxuICAgIGNvbnNvbGUubG9nKCdDb21wcmltZW50bzonLCBpZGVhTnVtYmVyLmxlbmd0aClcbiAgICBjb25zb2xlLmxvZygnRm9ybWF0byB2w6FsaWRvOicsIGlkZWFQYXR0ZXJuLnRlc3QoaWRlYU51bWJlcikpXG4gICAgXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSlcblxuICAgIHRyeSB7XG4gICAgICBjb25zb2xlLmxvZygnSW5pY2lhbmRvIGdlcmHDp8OjbyBkZSByZWxhdMOzcmlvIHBhcmEgaWRlYTonLCBpZGVhTnVtYmVyKVxuICAgICAgXG4gICAgICAvLyBDYXJyZWdhIElkZW50aXR5TWFuYWdlciBwYXJhIG9idGVyIHRva2VuIGRlIGF1dGVudGljYcOnw6NvXG4gICAgICBjb25zb2xlLmxvZygnQ2FycmVnYW5kbyBJZGVudGl0eU1hbmFnZXIgcGFyYSBhdXRlbnRpY2HDp8Ojby4uLicpXG4gICAgICBjb25zdCBpZGVudGl0eU1vZHVsZXMgPSBhd2FpdCBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcbiAgICAgICAgJ2VzcmkvaWRlbnRpdHkvSWRlbnRpdHlNYW5hZ2VyJ1xuICAgICAgXSlcbiAgICAgIGNvbnN0IFtJZGVudGl0eU1hbmFnZXJdID0gaWRlbnRpdHlNb2R1bGVzXG4gICAgICBcbiAgICAgIC8vIE9idMOpbSBvIHRva2VuIHBhcmEgYSBVUkwgZG8gc2VydmnDp28gKGrDoSBkZWNsYXJhZG8gbm8gaW7DrWNpbyBkYSBmdW7Dp8OjbylcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGNyZWRlbnRpYWwgPSBJZGVudGl0eU1hbmFnZXIuZmluZENyZWRlbnRpYWwodGhpcy5HUF9TRVJWSUNFX1VSTClcbiAgICAgICAgaWYgKGNyZWRlbnRpYWwgJiYgY3JlZGVudGlhbC50b2tlbikge1xuICAgICAgICAgIHRva2VuID0gY3JlZGVudGlhbC50b2tlblxuICAgICAgICAgIGNvbnNvbGUubG9nKCdUb2tlbiBlbmNvbnRyYWRvIHZpYSBJZGVudGl0eU1hbmFnZXInKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFRlbnRhIGdlcmFyIHRva2VuIGF1dG9tYXRpY2FtZW50ZVxuICAgICAgICAgIGNvbnN0IHNlcnZlckluZm8gPSBJZGVudGl0eU1hbmFnZXIuZmluZFNlcnZlckluZm8odGhpcy5HUF9TRVJWSUNFX1VSTClcbiAgICAgICAgICBpZiAoc2VydmVySW5mbykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ09idGVuZG8gdG9rZW4gYXV0b21hdGljYW1lbnRlLi4uJylcbiAgICAgICAgICAgIGF3YWl0IElkZW50aXR5TWFuYWdlci5jaGVja1NpZ25JblN0YXR1cyh0aGlzLkdQX1NFUlZJQ0VfVVJMKVxuICAgICAgICAgICAgY29uc3QgdXBkYXRlZENyZWRlbnRpYWwgPSBJZGVudGl0eU1hbmFnZXIuZmluZENyZWRlbnRpYWwodGhpcy5HUF9TRVJWSUNFX1VSTClcbiAgICAgICAgICAgIGlmICh1cGRhdGVkQ3JlZGVudGlhbCAmJiB1cGRhdGVkQ3JlZGVudGlhbC50b2tlbikge1xuICAgICAgICAgICAgICB0b2tlbiA9IHVwZGF0ZWRDcmVkZW50aWFsLnRva2VuXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUb2tlbiBvYnRpZG8gYXV0b21hdGljYW1lbnRlJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKHRva2VuRXJyb3IpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdFcnJvIGFvIG9idGVyIHRva2VuLCB0ZW50YW5kbyBzZW0gYXV0ZW50aWNhw6fDo286JywgdG9rZW5FcnJvcilcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy8gRnVuw6fDo28gYXV4aWxpYXIgcGFyYSBhZGljaW9uYXIgdG9rZW4gw6BzIFVSTHNcbiAgICAgIGNvbnN0IGFkZFRva2VuVG9VcmwgPSAodXJsKSA9PiB7XG4gICAgICAgIGlmICghdG9rZW4pIHtcbiAgICAgICAgICByZXR1cm4gdXJsXG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCB1cmxPYmogPSBuZXcgVVJMKHVybClcbiAgICAgICAgICB1cmxPYmouc2VhcmNoUGFyYW1zLnNldCgndG9rZW4nLCB0b2tlbilcbiAgICAgICAgICByZXR1cm4gdXJsT2JqLnRvU3RyaW5nKClcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIFNlIGEgVVJMIG7Do28gZm9yIGFic29sdXRhLCB0cmF0YSBjb21vIHN0cmluZ1xuICAgICAgICAgIGNvbnN0IHNlcGFyYXRvciA9IHVybC5pbmNsdWRlcygnPycpID8gJyYnIDogJz8nXG4gICAgICAgICAgcmV0dXJuIGAke3VybH0ke3NlcGFyYXRvcn10b2tlbj0ke2VuY29kZVVSSUNvbXBvbmVudCh0b2tlbil9YFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIFByaW1laXJvLCB2YW1vcyBvYnRlciBpbmZvcm1hw6fDtWVzIHNvYnJlIGEgdGFzayBlc3BlY8OtZmljYSBwYXJhIGRlc2NvYnJpciBvcyBwYXLDom1ldHJvc1xuICAgICAgLy8gVGVudGEgcHJpbWVpcm8gY29tIGEgdGFzayByZWxhdG9yaW9fYW5hbGlzZV9sYXBhIChxdWUgY29ycmVzcG9uZGUgw6AgVVJMIGZpeGEpXG4gICAgICBjb25zb2xlLmxvZygnT2J0ZW5kbyBpbmZvcm1hw6fDtWVzIGRhIHRhc2sgZXNwZWPDrWZpY2EuLi4nKVxuICAgICAgXG4gICAgICAvLyBUZW50YSBwcmltZWlybyBjb20gcmVsYXRvcmlvX2FuYWxpc2VfbGFwYSAobm9tZSBkYSB0YXNrIG5hIFVSTCBmaXhhKVxuICAgICAgY29uc3QgdGFza05hbWVGcm9tVXJsID0gJ3JlbGF0b3Jpb19hbmFsaXNlX2xhcGEnXG4gICAgICBjb25zdCB0YXNrTmFtZUVuY29kZWQgPSBlbmNvZGVVUklDb21wb25lbnQodGFza05hbWVGcm9tVXJsKVxuICAgICAgbGV0IGluZm9VcmwgPSBhZGRUb2tlblRvVXJsKGAke3RoaXMuR1BfU0VSVklDRV9VUkx9LyR7dGFza05hbWVFbmNvZGVkfT9mPWpzb25gKVxuICAgICAgY29uc29sZS5sb2coJ1RlbnRhbmRvIFVSTCBkZSBpbmZvcm1hw6fDtWVzIGRhIHRhc2sgKHJlbGF0b3Jpb19hbmFsaXNlX2xhcGEpOicsIGluZm9VcmwpXG4gICAgICBcbiAgICAgIC8vIFNlIG7Do28gZnVuY2lvbmFyLCB0ZW50YSBjb20gbyBub21lIG9yaWdpbmFsXG4gICAgICBjb25zdCBmYWxsYmFja1Rhc2tOYW1lID0gdGhpcy5HUF9UQVNLX05BTUVcbiAgICAgIGNvbnN0IGZhbGxiYWNrVGFza05hbWVFbmNvZGVkID0gZW5jb2RlVVJJQ29tcG9uZW50KGZhbGxiYWNrVGFza05hbWUpXG4gICAgICBjb25zdCBmYWxsYmFja0luZm9VcmwgPSBhZGRUb2tlblRvVXJsKGAke3RoaXMuR1BfU0VSVklDRV9VUkx9LyR7ZmFsbGJhY2tUYXNrTmFtZUVuY29kZWR9P2Y9anNvbmApXG4gICAgICBjb25zb2xlLmxvZygnVVJMIGFsdGVybmF0aXZhIChmYWxsYmFjayk6JywgZmFsbGJhY2tJbmZvVXJsKVxuICAgICAgXG4gICAgICAvLyBUZW50YSBvYnRlciBpbmZvcm1hw6fDtWVzIGRhIHRhc2sgZXNwZWPDrWZpY2EgcHJpbWVpcm9cbiAgICAgIGxldCBncEluZm9cbiAgICAgIHRyeSB7XG4gICAgICAgIGxldCB0YXNrSW5mb1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goaW5mb1VybClcbiAgICAgICAgaWYgKCF0YXNrSW5mb1Jlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgLy8gU2UgZmFsaGFyLCB0ZW50YSBjb20gbyBub21lIGFsdGVybmF0aXZvXG4gICAgICAgICAgY29uc29sZS53YXJuKGBOw6NvIGZvaSBwb3Nzw612ZWwgb2J0ZXIgaW5mb3JtYcOnw7VlcyBkYSB0YXNrICR7dGFza05hbWVGcm9tVXJsfSwgdGVudGFuZG8gY29tICR7ZmFsbGJhY2tUYXNrTmFtZX0uLi5gKVxuICAgICAgICAgIHRhc2tJbmZvUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChmYWxsYmFja0luZm9VcmwpXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICh0YXNrSW5mb1Jlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgZ3BJbmZvID0gYXdhaXQgdGFza0luZm9SZXNwb25zZS5qc29uKClcbiAgICAgICAgICBjb25zb2xlLmxvZygnSW5mb3JtYcOnw7VlcyBkYSB0YXNrIGVzcGVjw61maWNhIG9idGlkYXMgY29tIHN1Y2Vzc28nKVxuICAgICAgICAgIGNvbnNvbGUubG9nKCdJbmZvcm1hw6fDtWVzIGNvbXBsZXRhcyBkYSB0YXNrOicsIEpTT04uc3RyaW5naWZ5KGdwSW5mbywgbnVsbCwgMikpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gU2UgZmFsaGFyLCB0ZW50YSBkYSBHUCBnZXJhbFxuICAgICAgICAgIGNvbnNvbGUud2FybignTsOjbyBmb2kgcG9zc8OtdmVsIG9idGVyIGluZm9ybWHDp8O1ZXMgZGEgdGFzaywgdGVudGFuZG8gZGEgR1AgZ2VyYWwuLi4nKVxuICAgICAgICAgIGNvbnN0IGdwSW5mb1VybCA9IGFkZFRva2VuVG9VcmwoYCR7dGhpcy5HUF9TRVJWSUNFX1VSTH0/Zj1qc29uYClcbiAgICAgICAgICBjb25zdCBncEluZm9SZXNwb25zZSA9IGF3YWl0IGZldGNoKGdwSW5mb1VybClcbiAgICAgICAgICBcbiAgICAgICAgICBpZiAoIWdwSW5mb1Jlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm8gYW8gb2J0ZXIgaW5mb3JtYcOnw7VlczogJHt0YXNrSW5mb1Jlc3BvbnNlLnN0YXR1c30gJHt0YXNrSW5mb1Jlc3BvbnNlLnN0YXR1c1RleHR9YClcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgZ3BJbmZvID0gYXdhaXQgZ3BJbmZvUmVzcG9uc2UuanNvbigpXG4gICAgICAgICAgY29uc29sZS5sb2coJ1VzYW5kbyBpbmZvcm1hw6fDtWVzIGRhIEdQIGdlcmFsJylcbiAgICAgICAgICBjb25zb2xlLmxvZygnSW5mb3JtYcOnw7VlcyBjb21wbGV0YXMgZGEgR1A6JywgSlNPTi5zdHJpbmdpZnkoZ3BJbmZvLCBudWxsLCAyKSlcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoaW5mb0Vycm9yKSB7XG4gICAgICAgIC8vIFNlIGZhbGhhciwgdGVudGEgZGEgR1AgZ2VyYWxcbiAgICAgICAgY29uc29sZS53YXJuKCdFcnJvIGFvIG9idGVyIGluZm9ybWHDp8O1ZXMgZGEgdGFzaywgdGVudGFuZG8gZGEgR1AgZ2VyYWwuLi4nLCBpbmZvRXJyb3IpXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgZ3BJbmZvVXJsID0gYWRkVG9rZW5Ub1VybChgJHt0aGlzLkdQX1NFUlZJQ0VfVVJMfT9mPWpzb25gKVxuICAgICAgICAgIGNvbnN0IGdwSW5mb1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goZ3BJbmZvVXJsKVxuICAgICAgICAgIFxuICAgICAgICAgIGlmICghZ3BJbmZvUmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJybyBhbyBvYnRlciBpbmZvcm1hw6fDtWVzIGRhIEdQIGdlcmFsOiAke2dwSW5mb1Jlc3BvbnNlLnN0YXR1c30gJHtncEluZm9SZXNwb25zZS5zdGF0dXNUZXh0fWApXG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIGdwSW5mbyA9IGF3YWl0IGdwSW5mb1Jlc3BvbnNlLmpzb24oKVxuICAgICAgICAgIGNvbnNvbGUubG9nKCdVc2FuZG8gaW5mb3JtYcOnw7VlcyBkYSBHUCBnZXJhbCAoZmFsbGJhY2spJylcbiAgICAgICAgICBjb25zb2xlLmxvZygnSW5mb3JtYcOnw7VlcyBjb21wbGV0YXMgZGEgR1A6JywgSlNPTi5zdHJpbmdpZnkoZ3BJbmZvLCBudWxsLCAyKSlcbiAgICAgICAgfSBjYXRjaCAoZmFsbGJhY2tFcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gb2J0ZXIgaW5mb3JtYcOnw7VlcyBkYSBHUCBnZXJhbDonLCBmYWxsYmFja0Vycm9yKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTsOjbyBmb2kgcG9zc8OtdmVsIGFjZXNzYXIgYSBmZXJyYW1lbnRhIGRlIGdlb3Byb2Nlc3NhbWVudG8uIFZlcmlmaXF1ZSBzZSBhIFVSTCBlc3TDoSBjb3JyZXRhIGUgYWNlc3PDrXZlbC5gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIFZlcmlmaWNhIHNlIGdwSW5mbyBmb2kgb2J0aWRvIGNvcnJldGFtZW50ZVxuICAgICAgaWYgKCFncEluZm8pIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignZ3BJbmZvIGVzdMOhIHZhemlvIG91IHVuZGVmaW5lZCcpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTsOjbyBmb2kgcG9zc8OtdmVsIG9idGVyIGluZm9ybWHDp8O1ZXMgZGEgZmVycmFtZW50YSBkZSBnZW9wcm9jZXNzYW1lbnRvLicpXG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIERlc2NvYnJlIHF1YWwgw6kgbyBwYXLDom1ldHJvIGRlIGVudHJhZGEgZGEgR1BcbiAgICAgIC8vIElNUE9SVEFOVEU6IERldmVtb3MgdXNhciBleGF0YW1lbnRlIG8gbm9tZSBkbyBwYXLDom1ldHJvIHF1ZSBhIEdQIGVzcGVyYVxuICAgICAgLy8gTyB3aWRnZXQgcmVjZWJlIG8gdmFsb3IgZGEgY29sdW5hIFwiaWRlYVwiLCBtYXMgZW52aWEgY29tIG8gbm9tZSBxdWUgYSBHUCBlc3BlcmFcbiAgICAgIGxldCBwYXJhbU5hbWUgPSBudWxsXG4gICAgICBsZXQgcGFyYW1JbmZvID0gbnVsbFxuICAgICAgXG4gICAgICAvLyBMb2cgZGEgZXN0cnV0dXJhIHJlY2ViaWRhIHBhcmEgZGVidWdcbiAgICAgIGNvbnNvbGUubG9nKCc9PT0gRVNUUlVUVVJBIERBIFJFU1BPU1RBIERBIEdQID09PScpXG4gICAgICBjb25zb2xlLmxvZygnZ3BJbmZvIGV4aXN0ZT8nLCAhIWdwSW5mbylcbiAgICAgIGNvbnNvbGUubG9nKCdncEluZm8ucGFyYW1ldGVycyBleGlzdGU/JywgISFncEluZm8ucGFyYW1ldGVycylcbiAgICAgIGNvbnNvbGUubG9nKCdncEluZm8ucGFyYW1ldGVycyDDqSBhcnJheT8nLCBBcnJheS5pc0FycmF5KGdwSW5mby5wYXJhbWV0ZXJzKSlcbiAgICAgIGNvbnNvbGUubG9nKCdFc3RydXR1cmEgY29tcGxldGEgZGUgZ3BJbmZvOicsIEpTT04uc3RyaW5naWZ5KGdwSW5mbywgbnVsbCwgMikpXG4gICAgICBcbiAgICAgIGlmIChncEluZm8ucGFyYW1ldGVycyAmJiBBcnJheS5pc0FycmF5KGdwSW5mby5wYXJhbWV0ZXJzKSkge1xuICAgICAgICBjb25zb2xlLmxvZygnPT09IFBBUsOCTUVUUk9TIERJU1BPTsONVkVJUyBOQSBHUCA9PT0nKVxuICAgICAgICBjb25zdCBhbGxQYXJhbXMgPSBncEluZm8ucGFyYW1ldGVycy5tYXAocCA9PiAoe1xuICAgICAgICAgIG5hbWU6IHAubmFtZSxcbiAgICAgICAgICBkaXNwbGF5TmFtZTogcC5kaXNwbGF5TmFtZSB8fCBwLm5hbWUsXG4gICAgICAgICAgZGF0YVR5cGU6IHAuZGF0YVR5cGUsXG4gICAgICAgICAgZGlyZWN0aW9uOiBwLmRpcmVjdGlvbixcbiAgICAgICAgICBwYXJhbWV0ZXJUeXBlOiBwLnBhcmFtZXRlclR5cGUsXG4gICAgICAgICAgcmVxdWlyZWQ6IHAucGFyYW1ldGVyVHlwZSA9PT0gJ2VzcmlHUFBhcmFtZXRlclR5cGVSZXF1aXJlZCcgfHwgcC5yZXF1aXJlZCA9PT0gdHJ1ZVxuICAgICAgICB9KSlcbiAgICAgICAgY29uc29sZS5sb2coJ1RvZG9zIG9zIHBhcsOibWV0cm9zOicsIEpTT04uc3RyaW5naWZ5KGFsbFBhcmFtcywgbnVsbCwgMikpXG4gICAgICAgIFxuICAgICAgICAvLyBQcm9jdXJhIHBlbG8gcHJpbWVpcm8gcGFyw6JtZXRybyBkZSBlbnRyYWRhIChpbnB1dClcbiAgICAgICAgY29uc3QgaW5wdXRQYXJhbXMgPSBncEluZm8ucGFyYW1ldGVycy5maWx0ZXIocCA9PiBcbiAgICAgICAgICAocC5kaXJlY3Rpb24gPT09ICdlc3JpR1BQYXJhbWV0ZXJEaXJlY3Rpb25JbnB1dCcgfHwgcC5kaXJlY3Rpb24gPT09ICdHUFBhcmFtZXRlckRpcmVjdGlvbklucHV0JykgJiZcbiAgICAgICAgICBwLm5hbWVcbiAgICAgICAgKVxuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coJ1BhcsOibWV0cm9zIGRlIGVudHJhZGEgZW5jb250cmFkb3M6JywgaW5wdXRQYXJhbXMubWFwKHAgPT4gKHtcbiAgICAgICAgICBuYW1lOiBwLm5hbWUsXG4gICAgICAgICAgZGlzcGxheU5hbWU6IHAuZGlzcGxheU5hbWUgfHwgcC5uYW1lLFxuICAgICAgICAgIGRhdGFUeXBlOiBwLmRhdGFUeXBlLFxuICAgICAgICAgIHJlcXVpcmVkOiBwLnBhcmFtZXRlclR5cGUgPT09ICdlc3JpR1BQYXJhbWV0ZXJUeXBlUmVxdWlyZWQnIHx8IHAucmVxdWlyZWQgPT09IHRydWVcbiAgICAgICAgfSkpKVxuICAgICAgICBcbiAgICAgICAgaWYgKGlucHV0UGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAvLyBVc2EgbyBwcmltZWlybyBwYXLDom1ldHJvIGRlIGVudHJhZGEgKHF1ZSDDqSBvIHF1ZSBhIEdQIGVzcGVyYSlcbiAgICAgICAgICBwYXJhbUluZm8gPSBpbnB1dFBhcmFtc1swXVxuICAgICAgICAgIHBhcmFtTmFtZSA9IHBhcmFtSW5mby5uYW1lIC8vIFVzYSBleGF0YW1lbnRlIG8gbm9tZSBxdWUgYSBHUCBlc3BlcmEgKHBvZGUgdGVyIGNhcmFjdGVyZXMgZXNwZWNpYWlzKVxuICAgICAgICAgIGNvbnNvbGUubG9nKCc9PT0gUEFSw4JNRVRSTyBTRUxFQ0lPTkFETyA9PT0nKVxuICAgICAgICAgIGNvbnNvbGUubG9nKCdOb21lIHTDqWNuaWNvIGRvIHBhcsOibWV0cm8gKHNlcsOhIHVzYWRvIG5vIHJlcXVlc3QpOicsIHBhcmFtTmFtZSlcbiAgICAgICAgICBjb25zb2xlLmxvZygnTm9tZSBkZSBleGliacOnw6NvIChsYWJlbCBuYSBpbnRlcmZhY2UpOicsIHBhcmFtSW5mby5kaXNwbGF5TmFtZSB8fCBwYXJhbUluZm8ubmFtZSlcbiAgICAgICAgICBjb25zb2xlLmxvZygnRGV0YWxoZXMgY29tcGxldG9zOicsIHtcbiAgICAgICAgICAgIG5hbWU6IHBhcmFtSW5mby5uYW1lLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IHBhcmFtSW5mby5kaXNwbGF5TmFtZSB8fCBwYXJhbUluZm8ubmFtZSxcbiAgICAgICAgICAgIGRhdGFUeXBlOiBwYXJhbUluZm8uZGF0YVR5cGUsXG4gICAgICAgICAgICBkaXJlY3Rpb246IHBhcmFtSW5mby5kaXJlY3Rpb24sXG4gICAgICAgICAgICByZXF1aXJlZDogcGFyYW1JbmZvLnBhcmFtZXRlclR5cGUgPT09ICdlc3JpR1BQYXJhbWV0ZXJUeXBlUmVxdWlyZWQnIHx8IHBhcmFtSW5mby5yZXF1aXJlZCA9PT0gdHJ1ZVxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignTmVuaHVtIHBhcsOibWV0cm8gZGUgZW50cmFkYSBlbmNvbnRyYWRvIG5hIEdQIScpXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOw6NvIGZvaSBwb3Nzw612ZWwgaWRlbnRpZmljYXIgbyBwYXLDom1ldHJvIGRlIGVudHJhZGEgZGEgZmVycmFtZW50YSBkZSBnZW9wcm9jZXNzYW1lbnRvLicpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ07Do28gZm9pIHBvc3PDrXZlbCBvYnRlciBwYXLDom1ldHJvcyBkYSBHUCEnKVxuICAgICAgICBjb25zb2xlLmVycm9yKCdFc3RydXR1cmEgZGUgZ3BJbmZvIHJlY2ViaWRhOicsIEpTT04uc3RyaW5naWZ5KGdwSW5mbywgbnVsbCwgMikpXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2dwSW5mby5wYXJhbWV0ZXJzOicsIGdwSW5mby5wYXJhbWV0ZXJzKVxuICAgICAgICBjb25zb2xlLmVycm9yKCdUaXBvIGRlIGdwSW5mby5wYXJhbWV0ZXJzOicsIHR5cGVvZiBncEluZm8ucGFyYW1ldGVycylcbiAgICAgICAgXG4gICAgICAgIC8vIFRlbnRhIHVzYXIgYSB0YXNrIGVzcGVjw61maWNhIGRpcmV0YW1lbnRlIHNlIG7Do28gY29uc2VndWlyIG9idGVyIHBhcsOibWV0cm9zXG4gICAgICAgIGlmIChncEluZm8udGFza3MgJiYgQXJyYXkuaXNBcnJheShncEluZm8udGFza3MpICYmIGdwSW5mby50YXNrcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKCdUZW50YW5kbyB1c2FyIGluZm9ybWHDp8O1ZXMgZGEgcHJpbWVpcmEgdGFzayBkaXNwb27DrXZlbC4uLicpXG4gICAgICAgICAgY29uc3QgZmlyc3RUYXNrID0gZ3BJbmZvLnRhc2tzWzBdXG4gICAgICAgICAgaWYgKGZpcnN0VGFzay5wYXJhbWV0ZXJzICYmIEFycmF5LmlzQXJyYXkoZmlyc3RUYXNrLnBhcmFtZXRlcnMpKSB7XG4gICAgICAgICAgICBncEluZm8ucGFyYW1ldGVycyA9IGZpcnN0VGFzay5wYXJhbWV0ZXJzXG4gICAgICAgICAgICAvLyBUZW50YSBub3ZhbWVudGUgY29tIG9zIHBhcsOibWV0cm9zIGRhIHRhc2tcbiAgICAgICAgICAgIGNvbnN0IGlucHV0UGFyYW1zID0gZ3BJbmZvLnBhcmFtZXRlcnMuZmlsdGVyKHAgPT4gXG4gICAgICAgICAgICAgIChwLmRpcmVjdGlvbiA9PT0gJ2VzcmlHUFBhcmFtZXRlckRpcmVjdGlvbklucHV0JyB8fCBwLmRpcmVjdGlvbiA9PT0gJ0dQUGFyYW1ldGVyRGlyZWN0aW9uSW5wdXQnKSAmJlxuICAgICAgICAgICAgICBwLm5hbWVcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGlmIChpbnB1dFBhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIHBhcmFtSW5mbyA9IGlucHV0UGFyYW1zWzBdXG4gICAgICAgICAgICAgIHBhcmFtTmFtZSA9IHBhcmFtSW5mby5uYW1lXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdVc2FuZG8gcGFyw6JtZXRyb3MgZGEgdGFzazonLCBwYXJhbU5hbWUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoIXBhcmFtTmFtZSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTsOjbyBmb2kgcG9zc8OtdmVsIG9idGVyIGluZm9ybWHDp8O1ZXMgZG9zIHBhcsOibWV0cm9zIGRhIGZlcnJhbWVudGEgZGUgZ2VvcHJvY2Vzc2FtZW50by4gVmVyaWZpcXVlIHNlIGEgZmVycmFtZW50YSBlc3TDoSBjb25maWd1cmFkYSBjb3JyZXRhbWVudGUuJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICAvLyBDb25maXJtYSBxdWFsIHBhcsOibWV0cm8gc2Vyw6EgdXNhZG8gKGRldmUgc2VyIGV4YXRhbWVudGUgbyBxdWUgYSBHUCBlc3BlcmEpXG4gICAgICBjb25zb2xlLmxvZygnPT09IFBBUsOCTUVUUk8gUEFSQSBFTlZJQVIgw4AgR1AgPT09JylcbiAgICAgIGNvbnNvbGUubG9nKCdOb21lIGRvIHBhcsOibWV0cm8gKGV4YXRhbWVudGUgY29tbyBhIEdQIGVzcGVyYSk6JywgcGFyYW1OYW1lKVxuICAgICAgY29uc29sZS5sb2coJ1ZhbG9yIHF1ZSBzZXLDoSBlbnZpYWRvIChkYSBjb2x1bmEgaWRlYSBkbyB3aWRnZXQpOicsIGlkZWFOdW1iZXIpXG4gICAgICBjb25zb2xlLmxvZygnRGV0YWxoZXMgY29tcGxldG9zIGRvIHBhcsOibWV0cm86JywgcGFyYW1JbmZvKVxuICAgICAgXG4gICAgICAvLyBWZXJpZmljYSBvIHRpcG8gZG8gcGFyw6JtZXRybyBwYXJhIGZvcm1hdGFyIGNvcnJldGFtZW50ZVxuICAgICAgbGV0IHBhcmFtVmFsdWUgPSBpZGVhTnVtYmVyXG4gICAgICBpZiAocGFyYW1JbmZvKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdUaXBvIGRlIGRhZG8gZG8gcGFyw6JtZXRybzonLCBwYXJhbUluZm8uZGF0YVR5cGUpXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaXBvIGRlIHBhcsOibWV0cm86JywgcGFyYW1JbmZvLnBhcmFtZXRlclR5cGUpXG4gICAgICAgIFxuICAgICAgICAvLyBTZSBvIHBhcsOibWV0cm8gZm9yIGRvIHRpcG8gR1BTdHJpbmcgb3Ugc2ltaWxhciwgZW52aWEgY29tbyBzdHJpbmdcbiAgICAgICAgLy8gU2UgZm9yIFVSTCBvdSBvdXRybyB0aXBvIGNvbXBsZXhvLCBwb2RlIHByZWNpc2FyIGRlIGZvcm1hdG8gZGlmZXJlbnRlXG4gICAgICAgIGlmIChwYXJhbUluZm8uZGF0YVR5cGUgPT09ICdHUFN0cmluZycgfHwgcGFyYW1JbmZvLmRhdGFUeXBlID09PSAnZXNyaUdQVHlwZVN0cmluZycpIHtcbiAgICAgICAgICBwYXJhbVZhbHVlID0gU3RyaW5nKGlkZWFOdW1iZXIpXG4gICAgICAgIH0gZWxzZSBpZiAocGFyYW1JbmZvLmRhdGFUeXBlID09PSAnR1BEb3VibGUnIHx8IHBhcmFtSW5mby5kYXRhVHlwZSA9PT0gJ2VzcmlHUFR5cGVEb3VibGUnIHx8IFxuICAgICAgICAgICAgICAgICAgIHBhcmFtSW5mby5kYXRhVHlwZSA9PT0gJ0dQTG9uZycgfHwgcGFyYW1JbmZvLmRhdGFUeXBlID09PSAnZXNyaUdQVHlwZUxvbmcnKSB7XG4gICAgICAgICAgLy8gU2UgZm9yIG51bcOpcmljbywgdGVudGEgY29udmVydGVyXG4gICAgICAgICAgY29uc3QgbnVtVmFsdWUgPSBwYXJzZUZsb2F0KGlkZWFOdW1iZXIpXG4gICAgICAgICAgaWYgKCFpc05hTihudW1WYWx1ZSkpIHtcbiAgICAgICAgICAgIHBhcmFtVmFsdWUgPSBudW1WYWx1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICAvLyBQcmVwYXJhIG9zIHBhcsOibWV0cm9zIHBhcmEgYSBleGVjdcOnw6NvXG4gICAgICAvLyBJTVBPUlRBTlRFOiBmPWpzb24gdmFpIG5hIFVSTCwgbsOjbyBubyBib2R5XG4gICAgICAvLyBBcGVuYXMgb3MgcGFyw6JtZXRyb3MgZGEgR1AgdsOjbyBubyBib2R5XG4gICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgIFtwYXJhbU5hbWVdOiBwYXJhbVZhbHVlXG4gICAgICB9XG4gICAgICBcbiAgICAgIGNvbnNvbGUubG9nKCc9PT0gUEFSw4JNRVRST1MgUEFSQSBFTlZJQVIgPT09JylcbiAgICAgIGNvbnNvbGUubG9nKCdQYXLDom1ldHJvcyBwcmVwYXJhZG9zIChwYXJhIG8gYm9keSk6JywgcGFyYW1zKVxuICAgICAgY29uc29sZS5sb2coJ1ZhbG9yIGRvIHBhcsOibWV0cm86JywgcGFyYW1WYWx1ZSwgJ1RpcG86JywgdHlwZW9mIHBhcmFtVmFsdWUpXG4gICAgICBjb25zb2xlLmxvZygnTm9tZSBkbyBwYXLDom1ldHJvIChleGF0byk6JywgcGFyYW1OYW1lKVxuICAgICAgY29uc29sZS5sb2coJ05vbWUgZG8gcGFyw6JtZXRybyAoSlNPTik6JywgSlNPTi5zdHJpbmdpZnkocGFyYW1OYW1lKSlcbiAgICAgIFxuICAgICAgLy8gRm9ybWF0YSBvcyBwYXLDom1ldHJvcyBjb21vIGZvcm0tdXJsZW5jb2RlZFxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgICAgIFxuICAgICAgLy8gQWRpY2lvbmEgb3MgcGFyw6JtZXRyb3MgKGV4Y2V0byBmPWpzb24gcXVlIHZhaSBuYSBVUkwpXG4gICAgICAvLyBJTVBPUlRBTlRFOiBVc2EgbyBub21lIGV4YXRvIGRvIHBhcsOibWV0cm8gY29tbyBlc3TDoSBuYSBHUCAocG9kZSB0ZXIgY2FyYWN0ZXJlcyBlc3BlY2lhaXMpXG4gICAgICBjb25zb2xlLmxvZygnPT09IFBSRVBBUkFORE8gRk9STSBEQVRBID09PScpXG4gICAgICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgaWYgKGtleSAhPT0gJ2YnKSB7XG4gICAgICAgICAgY29uc3QgcGFyYW1LZXkgPSBrZXkgLy8gVXNhIGV4YXRhbWVudGUgbyBub21lIHF1ZSB2ZWlvIGRhIEdQIChleDogXCJOwrAgSURFQVwiLCBcInZhbG9yX2FsZXJ0YVwiLCBldGMuKVxuICAgICAgICAgIGNvbnN0IHBhcmFtVmFsID0gU3RyaW5nKHBhcmFtc1trZXldKVxuICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChwYXJhbUtleSwgcGFyYW1WYWwpXG4gICAgICAgICAgY29uc29sZS5sb2coYFBhcsOibWV0cm8gYWRpY2lvbmFkbzogbm9tZT1cIiR7cGFyYW1LZXl9XCIgdmFsb3I9XCIke3BhcmFtVmFsfVwiYClcbiAgICAgICAgICBjb25zb2xlLmxvZyhgICAtIE5vbWUgKEpTT04pOiAke0pTT04uc3RyaW5naWZ5KHBhcmFtS2V5KX1gKVxuICAgICAgICAgIGNvbnNvbGUubG9nKGAgIC0gTm9tZSAoYnl0ZXMpOiAke0FycmF5LmZyb20ocGFyYW1LZXkpLm1hcChjID0+IGMuY2hhckNvZGVBdCgwKSkuam9pbignLCcpfWApXG4gICAgICAgICAgY29uc29sZS5sb2coYCAgLSBWYWxvciAoSlNPTik6ICR7SlNPTi5zdHJpbmdpZnkocGFyYW1WYWwpfWApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBcbiAgICAgIGNvbnN0IGZvcm1EYXRhU3RyaW5nID0gZm9ybURhdGEudG9TdHJpbmcoKVxuICAgICAgY29uc29sZS5sb2coJ0Zvcm1EYXRhIGNvbXBsZXRvIChzdHJpbmcpOicsIGZvcm1EYXRhU3RyaW5nKVxuICAgICAgY29uc29sZS5sb2coJ0Zvcm1EYXRhIGNvbXBsZXRvIChVUkwgZGVjb2RlZCk6JywgZGVjb2RlVVJJQ29tcG9uZW50KGZvcm1EYXRhU3RyaW5nKSlcbiAgICAgIFxuICAgICAgLy8gQWRpY2lvbmEgdG9rZW4gYW8gYm9keVxuICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndG9rZW4nLCB0b2tlbilcbiAgICAgICAgY29uc29sZS5sb2coJ1Rva2VuIGFkaWNpb25hZG8gYW8gYm9keScpXG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIEZ1bsOnw6NvIGF1eGlsaWFyIHBhcmEgZmF6ZXIgYSByZXF1aXNpw6fDo29cbiAgICAgIGNvbnN0IG1ha2VFeGVjdXRlUmVxdWVzdCA9IGFzeW5jICh1cmwpID0+IHtcbiAgICAgICAgLy8gQWRpY2lvbmEgdG9rZW4gbmEgVVJMIHRhbWLDqW0gKGFsZ3VucyBzZXJ2aWRvcmVzIEFyY0dJUyBleGlnZW0gaXNzbylcbiAgICAgICAgbGV0IGZpbmFsVXJsID0gdXJsXG4gICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgIGNvbnN0IHVybFdpdGhUb2tlbiA9IG5ldyBVUkwodXJsKVxuICAgICAgICAgIHVybFdpdGhUb2tlbi5zZWFyY2hQYXJhbXMuc2V0KCd0b2tlbicsIHRva2VuKVxuICAgICAgICAgIHVybFdpdGhUb2tlbi5zZWFyY2hQYXJhbXMuc2V0KCdmJywgJ2pzb24nKVxuICAgICAgICAgIGZpbmFsVXJsID0gdXJsV2l0aFRva2VuLnRvU3RyaW5nKClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBTZSBuw6NvIHRpdmVyIHRva2VuLCBhZGljaW9uYSBhcGVuYXMgZj1qc29uXG4gICAgICAgICAgY29uc3QgdXJsT2JqID0gbmV3IFVSTCh1cmwpXG4gICAgICAgICAgdXJsT2JqLnNlYXJjaFBhcmFtcy5zZXQoJ2YnLCAnanNvbicpXG4gICAgICAgICAgZmluYWxVcmwgPSB1cmxPYmoudG9TdHJpbmcoKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZygnVGVudGFuZG8gVVJMOicsIGZpbmFsVXJsKVxuICAgICAgICBjb25zb2xlLmxvZygnQm9keSAoZm9ybURhdGEpOicsIGZvcm1EYXRhLnRvU3RyaW5nKCkpXG4gICAgICAgIGNvbnNvbGUubG9nKCdUb2tlbiBwcmVzZW50ZTonLCAhIXRva2VuKVxuICAgICAgICBjb25zb2xlLmxvZygnUGFyw6JtZXRyb3MgZW52aWFkb3M6JywgT2JqZWN0LmtleXMocGFyYW1zKSlcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZmluYWxVcmwsIHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJvZHk6IGZvcm1EYXRhXG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy8gVmVyaWZpY2Egc2UgYSB0YXNrIMOpIGFzc8OtbmNyb25hIHBhcmEgZGVjaWRpciBxdWFsIGVuZHBvaW50IHVzYXJcbiAgICAgIGNvbnN0IGlzQXN5bmMgPSBncEluZm8uZXhlY3V0aW9uVHlwZSA9PT0gJ2VzcmlFeGVjdXRpb25UeXBlQXN5bmNocm9ub3VzJ1xuICAgICAgY29uc29sZS5sb2coJz09PSBURU5UQU5ETyBFWEVDVVRBUiBHUCA9PT0nKVxuICAgICAgY29uc29sZS5sb2coJ1RpcG8gZGUgZXhlY3XDp8OjbzonLCBncEluZm8uZXhlY3V0aW9uVHlwZSlcbiAgICAgIGNvbnNvbGUubG9nKCfDiSBhc3PDrW5jcm9uYT8nLCBpc0FzeW5jKVxuICAgICAgY29uc29sZS5sb2coJ1RlbnRhbmRvIHByaW1laXJvIGNvbSB0YXNrIGVzcGVjw61maWNhOicsIHRoaXMuR1BfVEFTS19OQU1FKVxuICAgICAgY29uc29sZS5sb2coJ1BhcsOibWV0cm8gcXVlIHNlcsOhIGVudmlhZG86JywgcGFyYW1OYW1lKVxuICAgICAgY29uc29sZS5sb2coJ1ZhbG9yIHF1ZSBzZXLDoSBlbnZpYWRvOicsIGlkZWFOdW1iZXIpXG4gICAgICBcbiAgICAgIC8vIFNlIGZvciBhc3PDrW5jcm9uYSwgdXNhIHN1Ym1pdEpvYjsgY2FzbyBjb250csOhcmlvLCB1c2EgZXhlY3V0ZVxuICAgICAgaWYgKGlzQXN5bmMpIHtcbiAgICAgICAgZXhlY3V0ZVVybCA9IHRoaXMuR1BfU1VCTUlUX0pPQl9VUkxcbiAgICAgICAgY29uc29sZS5sb2coJ1VzYW5kbyBlbmRwb2ludCAvc3VibWl0Sm9iICh0YXJlZmEgYXNzw61uY3JvbmEpOicsIGV4ZWN1dGVVcmwpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBleGVjdXRlVXJsID0gYCR7dGhpcy5HUF9TRVJWSUNFX1VSTH0vJHt0YXNrTmFtZUVuY29kZWR9L2V4ZWN1dGVgXG4gICAgICAgIGNvbnNvbGUubG9nKCdVc2FuZG8gZW5kcG9pbnQgL2V4ZWN1dGUgKHRhcmVmYSBzw61uY3JvbmEpOicsIGV4ZWN1dGVVcmwpXG4gICAgICB9XG4gICAgICBcbiAgICAgIGxldCBleGVjdXRlUmVzcG9uc2UgPSBhd2FpdCBtYWtlRXhlY3V0ZVJlcXVlc3QoZXhlY3V0ZVVybClcbiAgICAgIFxuICAgICAgLy8gU2UgZGVyIGVycm8gNTAwLCBwb2RlIHNlciBxdWUgbyBlbmRwb2ludCBkYSB0YXNrIGVzcGVjw61maWNhIG7Do28gZXhpc3RhXG4gICAgICAvLyBUZW50YSBjb20gbyBlbmRwb2ludCBkYSBHUCByYWl6XG4gICAgICBpZiAoIWV4ZWN1dGVSZXNwb25zZS5vaykge1xuICAgICAgICBsZXQgcmVzdWx0VGV4dCA9IGF3YWl0IGV4ZWN1dGVSZXNwb25zZS50ZXh0KClcbiAgICAgICAgY29uc29sZS53YXJuKCdQcmltZWlyYSB0ZW50YXRpdmEgZmFsaG91LiBTdGF0dXM6JywgZXhlY3V0ZVJlc3BvbnNlLnN0YXR1cylcbiAgICAgICAgY29uc29sZS53YXJuKCdSZXNwb3N0YSAocHJpbWVpcm9zIDUwMCBjaGFycyk6JywgcmVzdWx0VGV4dC5zdWJzdHJpbmcoMCwgNTAwKSlcbiAgICAgICAgXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgcmVzdWx0SnNvbiA9IEpTT04ucGFyc2UocmVzdWx0VGV4dClcbiAgICAgICAgICBpZiAocmVzdWx0SnNvbi5lcnJvciAmJiByZXN1bHRKc29uLmVycm9yLmNvZGUgPT09IDUwMCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdFcnJvIDUwMCBjb20gdGFzayBlc3BlY8OtZmljYSwgdGVudGFuZG8gY29tIGVuZHBvaW50IGRhIEdQIHJhaXouLi4nKVxuICAgICAgICAgICAgLy8gVGVudGEgY29tIG8gZW5kcG9pbnQgcmFpeiB1c2FuZG8gbyBtZXNtbyB0aXBvIChzdWJtaXRKb2Igb3UgZXhlY3V0ZSlcbiAgICAgICAgICAgIGlmIChpc0FzeW5jKSB7XG4gICAgICAgICAgICAgIGV4ZWN1dGVVcmwgPSB0aGlzLkdQX1NVQk1JVF9KT0JfVVJMXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUZW50YW5kbyBjb20gZW5kcG9pbnQgZGEgR1AgcmFpeiAoc3VibWl0Sm9iKTonLCBleGVjdXRlVXJsKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZXhlY3V0ZVVybCA9IGAke3RoaXMuR1BfU0VSVklDRV9VUkx9L2V4ZWN1dGVgXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUZW50YW5kbyBjb20gZW5kcG9pbnQgZGEgR1AgcmFpeiAoZXhlY3V0ZSk6JywgZXhlY3V0ZVVybClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV4ZWN1dGVSZXNwb25zZSA9IGF3YWl0IG1ha2VFeGVjdXRlUmVxdWVzdChleGVjdXRlVXJsKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gcGFyc2VhciByZXNwb3N0YTonLCBlKVxuICAgICAgICAgIC8vIFNlIG7Do28gY29uc2VndWlyIHBhcnNlYXIsIGNvbnRpbnVhIGNvbSBvIGVycm8gb3JpZ2luYWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICAvLyBMw6ogYSByZXNwb3N0YSBtZXNtbyBzZSBuw6NvIGZvciBPSyBwYXJhIHZlciBvIGVycm8gZGV0YWxoYWRvXG4gICAgICBsZXQgcmVzdWx0XG4gICAgICB0cnkge1xuICAgICAgICByZXN1bHQgPSBhd2FpdCBleGVjdXRlUmVzcG9uc2UuanNvbigpXG4gICAgICAgIGNvbnNvbGUubG9nKCdSZXNwb3N0YSBkbyBleGVjdXRlIChKU09OKTonLCBKU09OLnN0cmluZ2lmeShyZXN1bHQsIG51bGwsIDIpKVxuICAgICAgfSBjYXRjaCAoanNvbkVycm9yKSB7XG4gICAgICAgIC8vIFNlIG7Do28gY29uc2VndWlyIGxlciBjb21vIEpTT04sIGzDqiBjb21vIHRleHRvXG4gICAgICAgIGNvbnN0IHRleHRSZXNwb25zZSA9IGF3YWl0IGV4ZWN1dGVSZXNwb25zZS50ZXh0KClcbiAgICAgICAgY29uc29sZS5lcnJvcignUmVzcG9zdGEgbsOjbyDDqSBKU09OOicsIHRleHRSZXNwb25zZSlcbiAgICAgICAgY29uc29sZS5lcnJvcignU3RhdHVzIEhUVFA6JywgZXhlY3V0ZVJlc3BvbnNlLnN0YXR1cywgZXhlY3V0ZVJlc3BvbnNlLnN0YXR1c1RleHQpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJybyBhbyBleGVjdXRhciB0YXJlZmE6ICR7ZXhlY3V0ZVJlc3BvbnNlLnN0YXR1c30gJHtleGVjdXRlUmVzcG9uc2Uuc3RhdHVzVGV4dH0gLSBSZXNwb3N0YTogJHt0ZXh0UmVzcG9uc2Uuc3Vic3RyaW5nKDAsIDUwMCl9YClcbiAgICAgIH1cbiAgICAgIFxuICAgICAgaWYgKCFleGVjdXRlUmVzcG9uc2Uub2spIHtcbiAgICAgICAgLy8gU2UgYSByZXNwb3N0YSB0ZW0gdW0gZXJybyBubyBKU09OLCB1c2EgZWxlXG4gICAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCc9PT0gRVJSTyBERVRBTEhBRE8gREEgR1AgPT09JylcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdDw7NkaWdvIGRvIGVycm86JywgcmVzdWx0LmVycm9yLmNvZGUpXG4gICAgICAgICAgY29uc29sZS5lcnJvcignTWVuc2FnZW06JywgcmVzdWx0LmVycm9yLm1lc3NhZ2UpXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRGV0YWxoZXM6JywgcmVzdWx0LmVycm9yLmRldGFpbHMpXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBjb21wbGV0bzonLCBKU09OLnN0cmluZ2lmeShyZXN1bHQuZXJyb3IsIG51bGwsIDIpKVxuICAgICAgICAgIFxuICAgICAgICAgIC8vIE1lbnNhZ2VtIGRlIGVycm8gbWFpcyBhbWlnw6F2ZWxcbiAgICAgICAgICBsZXQgZXJyb3JNZXNzYWdlID0gJ0Vycm8gYW8gZXhlY3V0YXIgYSBmZXJyYW1lbnRhIGRlIGdlb3Byb2Nlc3NhbWVudG8uXFxuXFxuJ1xuICAgICAgICAgIFxuICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IuY29kZSA9PT0gNTAwKSB7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgKz0gJ0Vycm8gaW50ZXJubyBkbyBzZXJ2aWRvciAoNTAwKS5cXG5cXG4nXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgKz0gJ1Bvc3PDrXZlaXMgY2F1c2FzOlxcbidcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSArPSAnMS4gTyBuw7ptZXJvIGRlIGlkZWEgcG9kZSBuw6NvIGV4aXN0aXIgbm8gc2Vydmlkb3JcXG4nXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgKz0gJzIuIFByb2JsZW1hIG5vIHByb2Nlc3NhbWVudG8gZGEgZmVycmFtZW50YVxcbidcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSArPSAnMy4gTyBzZXJ2aWRvciBwb2RlIGVzdGFyIHRlbXBvcmFyaWFtZW50ZSBpbmRpc3BvbsOtdmVsXFxuXFxuJ1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlICs9IGBWYWxvciBlbnZpYWRvOiAke2lkZWFOdW1iZXJ9XFxuYFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlICs9IGBQYXLDom1ldHJvIHVzYWRvOiAke3BhcmFtTmFtZX1cXG5cXG5gXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgKz0gJ1ZlcmlmaXF1ZTpcXG4nXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgKz0gJy0gU2UgbyBuw7ptZXJvIGRlIGlkZWEgZXN0w6EgY29ycmV0b1xcbidcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSArPSAnLSBTZSBvIHZhbG9yIGV4aXN0ZSBuYSBjYW1hZGEgZGUgYWxlcnRhc1xcbidcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSArPSAnLSBBYnJhIG8gY29uc29sZSAoRjEyKSBwYXJhIG1haXMgZGV0YWxoZXMnXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSArPSBgQ8OzZGlnbzogJHtyZXN1bHQuZXJyb3IuY29kZX1cXG5gXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgKz0gYE1lbnNhZ2VtOiAke3Jlc3VsdC5lcnJvci5tZXNzYWdlfVxcblxcbmBcbiAgICAgICAgICAgIGlmIChyZXN1bHQuZXJyb3IuZGV0YWlscyAmJiByZXN1bHQuZXJyb3IuZGV0YWlscy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIGVycm9yTWVzc2FnZSArPSBgRGV0YWxoZXM6ICR7cmVzdWx0LmVycm9yLmRldGFpbHMuam9pbignLCAnKX1cXG5cXG5gXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIGFsZXJ0KGVycm9yTWVzc2FnZSlcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm8gbmEgR1A6ICR7SlNPTi5zdHJpbmdpZnkocmVzdWx0LmVycm9yKX1gKVxuICAgICAgICB9XG4gICAgICAgIC8vIFNlIG7Do28gdGl2ZXIgY2FtcG8gZXJyb3IsIG1hcyBvIHN0YXR1cyBuw6NvIMOpIE9LLCBtb3N0cmEgbyByZXN1bHRhZG8gY29tcGxldG9cbiAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBIVFRQOicsIGV4ZWN1dGVSZXNwb25zZS5zdGF0dXMsIGV4ZWN1dGVSZXNwb25zZS5zdGF0dXNUZXh0KVxuICAgICAgICBjb25zb2xlLmVycm9yKCdSZXNwb3N0YSBjb21wbGV0YTonLCByZXN1bHQpXG4gICAgICAgIGFsZXJ0KGBFcnJvIGFvIGV4ZWN1dGFyIHRhcmVmYTogJHtleGVjdXRlUmVzcG9uc2Uuc3RhdHVzfSAke2V4ZWN1dGVSZXNwb25zZS5zdGF0dXNUZXh0fVxcblxcblZlcmlmaXF1ZSBvIGNvbnNvbGUgKEYxMikgcGFyYSBtYWlzIGRldGFsaGVzLmApXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJybyBhbyBleGVjdXRhciB0YXJlZmE6ICR7ZXhlY3V0ZVJlc3BvbnNlLnN0YXR1c30gJHtleGVjdXRlUmVzcG9uc2Uuc3RhdHVzVGV4dH0gLSAke0pTT04uc3RyaW5naWZ5KHJlc3VsdCl9YClcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy8gVmVyaWZpY2Egc2UgYSByZXNwb3N0YSBjb250w6ltIHVtIGpvYklkICh0YXJlZmEgYXNzw61uY3JvbmEpXG4gICAgICAvLyBQYXJhIHRhcmVmYXMgYXNzw61uY3JvbmFzLCBzdWJtaXRKb2Igc2VtcHJlIHJldG9ybmEgam9iSWRcbiAgICAgIGlmIChyZXN1bHQuam9iSWQgfHwgaXNBc3luYykge1xuICAgICAgICBjb25zdCBqb2JJZCA9IHJlc3VsdC5qb2JJZFxuICAgICAgICBpZiAoIWpvYklkKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUYXJlZmEgYXNzw61uY3JvbmEgbWFzIG7Do28gcmVjZWJldSBqb2JJZCBuYSByZXNwb3N0YScpXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coJ1RhcmVmYSBhc3PDrW5jcm9uYSBkZXRlY3RhZGEuIEpvYiBJRDonLCBqb2JJZClcbiAgICAgICAgXG4gICAgICAgIC8vIFBvbGxpbmcgZG8gc3RhdHVzIGRvIGpvYlxuICAgICAgICBsZXQgYXR0ZW1wdHMgPSAwXG4gICAgICAgIGNvbnN0IG1heEF0dGVtcHRzID0gNjBcbiAgICAgICAgbGV0IGpvYlN0YXR1cyA9IG51bGxcbiAgICAgICAgXG4gICAgICAgIHdoaWxlIChhdHRlbXB0cyA8IG1heEF0dGVtcHRzKSB7XG4gICAgICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDEwMDApKVxuICAgICAgICAgIFxuICAgICAgICAgIC8vIFVSTCBwYXJhIHZlcmlmaWNhciBzdGF0dXMgZG8gam9iXG4gICAgICAgICAgLy8gVXNhIGEgbWVzbWEgVVJMIGJhc2UgcXVlIGZ1bmNpb25vdSAocG9kZSBzZXIgc3VibWl0Sm9iIG91IGV4ZWN1dGUpXG4gICAgICAgICAgY29uc3QgYmFzZVVybCA9IGV4ZWN1dGVVcmwucmVwbGFjZSgnL3N1Ym1pdEpvYicsICcnKS5yZXBsYWNlKCcvZXhlY3V0ZScsICcnKVxuICAgICAgICAgIGNvbnN0IHN0YXR1c1VybCA9IHRva2VuIFxuICAgICAgICAgICAgPyBgJHtiYXNlVXJsfS9qb2JzLyR7am9iSWR9P3Rva2VuPSR7dG9rZW59JmY9anNvbmBcbiAgICAgICAgICAgIDogYCR7YmFzZVVybH0vam9icy8ke2pvYklkfT9mPWpzb25gXG4gICAgICAgICAgXG4gICAgICAgICAgY29uc29sZS5sb2coJ1ZlcmlmaWNhbmRvIHN0YXR1cyBkbyBqb2I6Jywgc3RhdHVzVXJsKVxuICAgICAgICAgIGNvbnN0IHN0YXR1c1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goc3RhdHVzVXJsKVxuICAgICAgICAgIFxuICAgICAgICAgIGlmICghc3RhdHVzUmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJybyBhbyB2ZXJpZmljYXIgc3RhdHVzIGRvIGpvYjogJHtzdGF0dXNSZXNwb25zZS5zdGF0dXN9YClcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgam9iU3RhdHVzID0gYXdhaXQgc3RhdHVzUmVzcG9uc2UuanNvbigpXG4gICAgICAgICAgY29uc29sZS5sb2coYFN0YXR1cyBkbyBqb2IgKHRlbnRhdGl2YSAke2F0dGVtcHRzICsgMX0pOmAsIGpvYlN0YXR1cy5qb2JTdGF0dXMpXG4gICAgICAgICAgXG4gICAgICAgICAgaWYgKGpvYlN0YXR1cy5qb2JTdGF0dXMgPT09ICdlc3JpSm9iU3VjY2VlZGVkJykge1xuICAgICAgICAgICAgLy8gT2J0w6ltIG9zIHJlc3VsdGFkb3NcbiAgICAgICAgICAgIC8vIFVzYSBhIG1lc21hIFVSTCBiYXNlIHF1ZSBmdW5jaW9ub3UgKHBvZGUgc2VyIHN1Ym1pdEpvYiBvdSBleGVjdXRlKVxuICAgICAgICAgICAgY29uc3QgYmFzZVVybCA9IGV4ZWN1dGVVcmwucmVwbGFjZSgnL3N1Ym1pdEpvYicsICcnKS5yZXBsYWNlKCcvZXhlY3V0ZScsICcnKVxuICAgICAgICAgICAgY29uc3QgcmVzdWx0VXJsID0gdG9rZW5cbiAgICAgICAgICAgICAgPyBgJHtiYXNlVXJsfS9qb2JzLyR7am9iSWR9L3Jlc3VsdHM/dG9rZW49JHt0b2tlbn0mZj1qc29uYFxuICAgICAgICAgICAgICA6IGAke2Jhc2VVcmx9L2pvYnMvJHtqb2JJZH0vcmVzdWx0cz9mPWpzb25gXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdFJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmVzdWx0VXJsKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIXJlc3VsdFJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJybyBhbyBvYnRlciByZXN1bHRhZG9zOiAke3Jlc3VsdFJlc3BvbnNlLnN0YXR1c31gKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXN1bHQgPSBhd2FpdCByZXN1bHRSZXNwb25zZS5qc29uKClcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZXN1bHRhZG8gZGEgZXhlY3XDp8OjbyBhc3PDrW5jcm9uYTonLCByZXN1bHQpXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH0gZWxzZSBpZiAoam9iU3RhdHVzLmpvYlN0YXR1cyA9PT0gJ2VzcmlKb2JGYWlsZWQnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEpvYiBmYWxob3U6ICR7am9iU3RhdHVzLm1lc3NhZ2VzID8gSlNPTi5zdHJpbmdpZnkoam9iU3RhdHVzLm1lc3NhZ2VzKSA6ICdFcnJvIGRlc2NvbmhlY2lkbyd9YClcbiAgICAgICAgICB9IGVsc2UgaWYgKGpvYlN0YXR1cy5qb2JTdGF0dXMgPT09ICdlc3JpSm9iQ2FuY2VsbGVkJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdKb2IgZm9pIGNhbmNlbGFkbycpXG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIGF0dGVtcHRzKytcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKGF0dGVtcHRzID49IG1heEF0dGVtcHRzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaW1lb3V0OiBPIGpvYiBkZW1vcm91IG1haXMgZGUgNjAgc2VndW5kb3MgcGFyYSBjb21wbGV0YXInKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUYXJlZmEgc8OtbmNyb25hIC0gcmVzdWx0YWRvIGrDoSBlc3TDoSBkaXNwb27DrXZlbFxuICAgICAgICBjb25zb2xlLmxvZygnVGFyZWZhIHPDrW5jcm9uYSAtIHJlc3VsdGFkbyBqw6EgZGlzcG9uw612ZWwnKVxuICAgICAgfVxuICAgICAgXG4gICAgICBjb25zb2xlLmxvZygnUmVzdWx0YWRvIGNvbXBsZXRvIGRhIEdQOicsIEpTT04uc3RyaW5naWZ5KHJlc3VsdCwgbnVsbCwgMikpXG5cbiAgICAgIC8vIFByb2Nlc3NhIG8gcmVzdWx0YWRvIC0gcHJvY3VyYSBwZWxhIFVSTCBkbyBIVE1MXG4gICAgICBsZXQgaHRtbFVybCA9IG51bGxcblxuICAgICAgLy8gUGFyYSB0YXJlZmFzIGFzc8OtbmNyb25hcywgb3MgcmVzdWx0YWRvcyBwb2RlbSBlc3RhciBlbSB1bWEgZXN0cnV0dXJhIGRpZmVyZW50ZVxuICAgICAgLy8gUHJpbWVpcm8sIHZlcmlmaWNhIHNlIGjDoSBlcnJvc1xuICAgICAgaWYgKHJlc3VsdC5lcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGVuY29udHJhZG8gbm8gcmVzdWx0YWRvOicsIHJlc3VsdC5lcnJvcilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvIG5hIEdQOiAke0pTT04uc3RyaW5naWZ5KHJlc3VsdC5lcnJvcil9YClcbiAgICAgIH1cblxuICAgICAgLy8gUHJvY3VyYSBlbSByZXN1bHQucmVzdWx0cyAoZXN0cnV0dXJhIGNvbXVtIHBhcmEgdGFyZWZhcyBzw61uY3JvbmFzKVxuICAgICAgaWYgKHJlc3VsdC5yZXN1bHRzICYmIEFycmF5LmlzQXJyYXkocmVzdWx0LnJlc3VsdHMpKSB7XG4gICAgICAgIGZvciAoY29uc3QgcmVzdWx0SXRlbSBvZiByZXN1bHQucmVzdWx0cykge1xuICAgICAgICAgIC8vIE8gcmVzdWx0YWRvIHBvZGUgZXN0YXIgZGlyZXRhbWVudGUgbm8gcmVzdWx0SXRlbSBvdSBlbSByZXN1bHRJdGVtLnZhbHVlXG4gICAgICAgICAgY29uc3QgdmFsdWUgPSByZXN1bHRJdGVtLnZhbHVlICE9PSB1bmRlZmluZWQgPyByZXN1bHRJdGVtLnZhbHVlIDogcmVzdWx0SXRlbVxuICAgICAgICAgIFxuICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLmluY2x1ZGVzKCcuaHRtbCcpKSB7XG4gICAgICAgICAgICBodG1sVXJsID0gdmFsdWVcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAvLyBQcm9jdXJhIHBvciBwcm9wcmllZGFkZXMgY29tdW5zIHF1ZSBjb250w6ptIFVSTHNcbiAgICAgICAgICAgIGlmICh2YWx1ZS51cmwgJiYgdHlwZW9mIHZhbHVlLnVybCA9PT0gJ3N0cmluZycgJiYgdmFsdWUudXJsLmluY2x1ZGVzKCcuaHRtbCcpKSB7XG4gICAgICAgICAgICAgIGh0bWxVcmwgPSB2YWx1ZS51cmxcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUucGF0aFVybCAmJiB0eXBlb2YgdmFsdWUucGF0aFVybCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgaHRtbFVybCA9IHZhbHVlLnBhdGhVcmxcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUudmFsdWUgJiYgdHlwZW9mIHZhbHVlLnZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS52YWx1ZS5pbmNsdWRlcygnLmh0bWwnKSkge1xuICAgICAgICAgICAgICBodG1sVXJsID0gdmFsdWUudmFsdWVcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gUGFyYSB0YXJlZmFzIGFzc8OtbmNyb25hcywgb3MgcmVzdWx0YWRvcyBwb2RlbSBlc3RhciBlbSByZXN1bHQucmVzdWx0cyBjb21vIG9iamV0b1xuICAgICAgaWYgKCFodG1sVXJsICYmIHJlc3VsdC5yZXN1bHRzICYmIHR5cGVvZiByZXN1bHQucmVzdWx0cyA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkocmVzdWx0LnJlc3VsdHMpKSB7XG4gICAgICAgIC8vIEl0ZXJhIHNvYnJlIGFzIHByb3ByaWVkYWRlcyBkbyBvYmpldG8gcmVzdWx0c1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiByZXN1bHQucmVzdWx0cykge1xuICAgICAgICAgIGNvbnN0IHJlc3VsdEl0ZW0gPSByZXN1bHQucmVzdWx0c1trZXldXG4gICAgICAgICAgaWYgKHJlc3VsdEl0ZW0gJiYgcmVzdWx0SXRlbS52YWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSByZXN1bHRJdGVtLnZhbHVlXG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS5pbmNsdWRlcygnLmh0bWwnKSkge1xuICAgICAgICAgICAgICBodG1sVXJsID0gdmFsdWVcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUudXJsICYmIHR5cGVvZiB2YWx1ZS51cmwgPT09ICdzdHJpbmcnICYmIHZhbHVlLnVybC5pbmNsdWRlcygnLmh0bWwnKSkge1xuICAgICAgICAgICAgICBodG1sVXJsID0gdmFsdWUudXJsXG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLnBhdGhVcmwgJiYgdHlwZW9mIHZhbHVlLnBhdGhVcmwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGh0bWxVcmwgPSB2YWx1ZS5wYXRoVXJsXG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFByb2N1cmEgZW0gb3V0cmFzIHByb3ByaWVkYWRlcyBkbyByZXN1bHRhZG9cbiAgICAgIGlmICghaHRtbFVybCAmJiByZXN1bHQub3V0cHV0VXJsKSB7XG4gICAgICAgIGh0bWxVcmwgPSByZXN1bHQub3V0cHV0VXJsXG4gICAgICB9XG4gICAgICBpZiAoIWh0bWxVcmwgJiYgcmVzdWx0LnVybCkge1xuICAgICAgICBodG1sVXJsID0gcmVzdWx0LnVybFxuICAgICAgfVxuICAgICAgaWYgKCFodG1sVXJsICYmIHJlc3VsdC5maWxlVXJsKSB7XG4gICAgICAgIGh0bWxVcmwgPSByZXN1bHQuZmlsZVVybFxuICAgICAgfVxuICAgICAgaWYgKCFodG1sVXJsICYmIHJlc3VsdC5vdXRwdXRGaWxlKSB7XG4gICAgICAgIGh0bWxVcmwgPSByZXN1bHQub3V0cHV0RmlsZVxuICAgICAgfVxuXG4gICAgICAvLyBCdXNjYSBwb3IgcmVnZXggZW0gdG9kbyBvIG9iamV0byAow7psdGltbyByZWN1cnNvKVxuICAgICAgaWYgKCFodG1sVXJsKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdFN0cmluZyA9IEpTT04uc3RyaW5naWZ5KHJlc3VsdClcbiAgICAgICAgY29uc3QgdXJsTWF0Y2ggPSByZXN1bHRTdHJpbmcubWF0Y2goL2h0dHBzPzpcXC9cXC9bXlxcc1wiPD5dK1xcLmh0bWwvZylcbiAgICAgICAgaWYgKHVybE1hdGNoICYmIHVybE1hdGNoLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBodG1sVXJsID0gdXJsTWF0Y2hbMF1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaHRtbFVybCkge1xuICAgICAgICBjb25zb2xlLmxvZygnVVJMIGRvIEhUTUwgZW5jb250cmFkYTonLCBodG1sVXJsKVxuICAgICAgICAvLyBBYnJlIG8gSFRNTCBlbSB1bWEgbm92YSBndWlhXG4gICAgICAgIHdpbmRvdy5vcGVuKGh0bWxVcmwsICdfYmxhbmsnKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFNlIG7Do28gZW5jb250cm91IGEgVVJMLCBtb3N0cmEgbyByZXN1bHRhZG8gY29tcGxldG8gcGFyYSBkZWJ1Z1xuICAgICAgICBjb25zb2xlLndhcm4oJ07Do28gZm9pIHBvc3PDrXZlbCBlbmNvbnRyYXIgYSBVUkwgZG8gSFRNTCBubyByZXN1bHRhZG86JywgcmVzdWx0KVxuICAgICAgICBjb25zb2xlLndhcm4oJ1Jlc3VsdGFkbyBjb21wbGV0bzonLCBKU09OLnN0cmluZ2lmeShyZXN1bHQsIG51bGwsIDIpKVxuICAgICAgICBhbGVydCgnUmVsYXTDs3JpbyBnZXJhZG8sIG1hcyBuw6NvIGZvaSBwb3Nzw612ZWwgZW5jb250cmFyIGEgVVJMIGRvIEhUTUwuIFZlcmlmaXF1ZSBvIGNvbnNvbGUgZG8gbmF2ZWdhZG9yIChGMTIpIHBhcmEgdmVyIG9zIGRldGFsaGVzIGRvIHJlc3VsdGFkby4nKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignPT09IEVSUk8gQ09NUExFVE8gQU8gRVhFQ1VUQVIgR1AgPT09JylcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm86JywgZXJyb3IpXG4gICAgICBjb25zb2xlLmVycm9yKCdNZW5zYWdlbTonLCBlcnJvci5tZXNzYWdlKVxuICAgICAgY29uc29sZS5lcnJvcignU3RhY2sgdHJhY2U6JywgZXJyb3Iuc3RhY2spXG4gICAgICBjb25zb2xlLmVycm9yKCdUaXBvIGRvIGVycm86JywgZXJyb3IuY29uc3RydWN0b3IubmFtZSlcbiAgICAgIFxuICAgICAgLy8gSW5mb3JtYcOnw7VlcyBkZSBjb250ZXh0byBwYXJhIGRlYnVnXG4gICAgICBjb25zb2xlLmVycm9yKCc9PT0gQ09OVEVYVE8gRE8gRVJSTyA9PT0nKVxuICAgICAgY29uc29sZS5lcnJvcignVmFsb3IgZW52aWFkbzonLCBpZGVhTnVtYmVyKVxuICAgICAgY29uc29sZS5lcnJvcignUGFyw6JtZXRybyB1c2FkbzonLCBwYXJhbU5hbWUpXG4gICAgICBjb25zb2xlLmVycm9yKCdVUkwgdGVudGFkYTonLCBleGVjdXRlVXJsKVxuICAgICAgY29uc29sZS5lcnJvcignVG9rZW4gcHJlc2VudGU6JywgISF0b2tlbilcblxuICAgICAgbGV0IGVycm9yTWVzc2FnZSA9ICdFcnJvIGFvIGdlcmFyIHJlbGF0w7NyaW8uXFxuXFxuJ1xuXG4gICAgICBpZiAoZXJyb3IubWVzc2FnZSkge1xuICAgICAgICAvLyBSZW1vdmUgaW5mb3JtYcOnw7VlcyB0w6ljbmljYXMgbXVpdG8gbG9uZ2FzIHBhcmEgbyB1c3XDoXJpb1xuICAgICAgICBsZXQgY2xlYW5NZXNzYWdlID0gZXJyb3IubWVzc2FnZVxuICAgICAgICBpZiAoY2xlYW5NZXNzYWdlLmxlbmd0aCA+IDIwMCkge1xuICAgICAgICAgIGNsZWFuTWVzc2FnZSA9IGNsZWFuTWVzc2FnZS5zdWJzdHJpbmcoMCwgMjAwKSArICcuLi4nXG4gICAgICAgIH1cbiAgICAgICAgZXJyb3JNZXNzYWdlICs9IGBNZW5zYWdlbTogJHtjbGVhbk1lc3NhZ2V9XFxuXFxuYFxuICAgICAgfVxuXG4gICAgICBpZiAoZXJyb3IuZGV0YWlscyAmJiBBcnJheS5pc0FycmF5KGVycm9yLmRldGFpbHMpICYmIGVycm9yLmRldGFpbHMubGVuZ3RoID4gMCkge1xuICAgICAgICBlcnJvck1lc3NhZ2UgKz0gYERldGFsaGVzOiAke2Vycm9yLmRldGFpbHNbMF19XFxuXFxuYFxuICAgICAgfVxuXG4gICAgICBlcnJvck1lc3NhZ2UgKz0gJ1ZlcmlmaXF1ZTpcXG4nXG4gICAgICBlcnJvck1lc3NhZ2UgKz0gYDEuIFNlIG8gbsO6bWVybyBkZSBpZGVhIFwiJHtpZGVhTnVtYmVyfVwiIGVzdMOhIGNvcnJldG9cXG5gXG4gICAgICBlcnJvck1lc3NhZ2UgKz0gJzIuIFNlIG8gdmFsb3IgZXhpc3RlIG5hIGNhbWFkYSBkZSBhbGVydGFzX3JlZ2lvbmFsX2xhcGFcXG4nXG4gICAgICBlcnJvck1lc3NhZ2UgKz0gJzMuIFNlIGEgZmVycmFtZW50YSBkZSBnZW9wcm9jZXNzYW1lbnRvIGVzdMOhIGFjZXNzw612ZWxcXG4nXG4gICAgICBlcnJvck1lc3NhZ2UgKz0gJzQuIEFicmEgbyBjb25zb2xlIGRvIG5hdmVnYWRvciAoRjEyKSBwYXJhIG1haXMgZGV0YWxoZXMgdMOpY25pY29zXFxuXFxuJ1xuICAgICAgZXJyb3JNZXNzYWdlICs9ICdEaWNhOiBUZW50ZSB1c2FyIG8gYm90w6NvIFwiRmlsdHJhclwiIHByaW1laXJvIHBhcmEgdmVyaWZpY2FyIHNlIG8gbsO6bWVybyBleGlzdGUuJ1xuXG4gICAgICBhbGVydChlcnJvck1lc3NhZ2UpXG4gICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcbiAgICB9XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHN0eWxlID0gY3NzYFxuICAgICAgLndpZGdldC1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBnYXA6IDEycHg7XG4gICAgICB9XG4gICAgICBmb3JtID4gZGl2IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgfVxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI2NjY0MDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFlNGYzMjtcbiAgICAgICAgICB9XG4gICAgICAgICAgJjpkaXNhYmxlZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5yZXBvcnQtYnV0dG9uIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI2NjY0MDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGdhcDogOHB4O1xuICAgICAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWU0ZjMyO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgICY6YWN0aXZlOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAmOmZvY3VzOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAgICAgICAgIGNvbG9yOiAjOWU5ZTllO1xuICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQgIWltcG9ydGFudDtcbiAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgJjpub3QoOmRpc2FibGVkKSB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5zcGlubmVyIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogd2hpdGU7XG4gICAgICAgIGFuaW1hdGlvbjogc3BpbiAwLjhzIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgIH1cbiAgICAgIEBrZXlmcmFtZXMgc3BpbiB7XG4gICAgICAgIHRvIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuY2xlYXItYnV0dG9uIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcbiAgICAgICAgY29sb3I6ICM0MjQyNDI7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2JkYmRiZDtcbiAgICAgICAgICBjb2xvcjogIzIxMjEyMTtcbiAgICAgICAgfVxuICAgICAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgICAgICAgIGNvbG9yOiAjOWU5ZTllO1xuICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5zdGF0dXMtbWVzc2FnZSB7XG4gICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZjNmZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG4gICAgICAubG9hZGluZyB7XG4gICAgICAgIGNvbG9yOiAjMDA3OWMxO1xuICAgICAgfVxuICAgIGBcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtZmlsdHJhci1lLWdlcmFyLXJlbGF0b3JpbyBqaW11LXdpZGdldCBwLTJcIiBjc3M9e3N0eWxlfT5cbiAgICAgICAge3RoaXMucHJvcHMuaGFzT3duUHJvcGVydHkoJ3VzZU1hcFdpZGdldElkcycpICYmXG4gICAgICAgICAgdGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHMgJiZcbiAgICAgICAgICB0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcy5sZW5ndGggPT09IDEgJiYgKFxuICAgICAgICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50XG4gICAgICAgICAgICAgIHVzZU1hcFdpZGdldElkPXt0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcz8uWzBdfVxuICAgICAgICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2U9eyhqbXY6IEppbXVNYXBWaWV3KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICBqaW11TWFwVmlldzogam12XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICl9XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtY29udGFpbmVyXCI+XG4gICAgICAgICAgPHA+e2RlZmF1bHRNZXNzYWdlcy5pbnN0cnVjdGlvbnN9PC9wPlxuXG5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVGaWx0ZXJBbmRab29tfT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17ZGVmYXVsdE1lc3NhZ2VzLnNlYXJjaElkZWF9XG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuaWRlYVNlYXJjaElucHV0fVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlkZWFTZWFyY2hJbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXRoaXMuc3RhdGUuZmVhdHVyZUxheWVyIHx8IHRoaXMuc3RhdGUubG9hZGluZ31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXRoaXMuc3RhdGUuZmVhdHVyZUxheWVyIHx8IHRoaXMuc3RhdGUubG9hZGluZ31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtkZWZhdWx0TWVzc2FnZXMuZmlsdGVyQW5kWm9vbX1cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5mZWF0dXJlTGF5ZXIgJiYgKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlcG9ydC1idXR0b25cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlR2VuZXJhdGVSZXBvcnR9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUubG9hZGluZyB8fCAhdGhpcy5zdGF0ZS5pZGVhU2VhcmNoSW5wdXQgfHwgdGhpcy5zdGF0ZS5pZGVhU2VhcmNoSW5wdXQudHJpbSgpID09PSAnJ31cbiAgICAgICAgICAgICAgICB0aXRsZT17dGhpcy5zdGF0ZS5sb2FkaW5nIHx8ICF0aGlzLnN0YXRlLmlkZWFTZWFyY2hJbnB1dCB8fCB0aGlzLnN0YXRlLmlkZWFTZWFyY2hJbnB1dC50cmltKCkgPT09ICcnIFxuICAgICAgICAgICAgICAgICAgPyAnRGlnaXRlIHVtIG7Dum1lcm8gZGUgaWRlYSBwYXJhIGdlcmFyIG8gcmVsYXTDs3JpbycgXG4gICAgICAgICAgICAgICAgICA6ICdHZXJhciByZWxhdMOzcmlvIHBhcmEgbyBuw7ptZXJvIGRlIGlkZWEgaW5mb3JtYWRvJ31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgJiYgPHNwYW4gY2xhc3NOYW1lPVwic3Bpbm5lclwiPjwvc3Bhbj59XG4gICAgICAgICAgICAgICAge2RlZmF1bHRNZXNzYWdlcy5nZW5lcmF0ZVJlcG9ydH1cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbGVhci1idXR0b25cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xlYXJGaWx0ZXJ9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUubG9hZGluZ31cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtkZWZhdWx0TWVzc2FnZXMuY2xlYXJGaWx0ZXJ9XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=