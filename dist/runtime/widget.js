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
                    executeUrl = `${this.GP_SERVICE_URL}/${taskNameEncoded}/submitJob`;
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
                                executeUrl = `${this.GP_SERVICE_URL}/submitJob`;
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
        return ((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "widget-addLayers jimu-widget p-2", css: style },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9maWx0cmFyLWUtZ2VyYXItcmVsYXRvcmlvL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFlO0lBQ2IsWUFBWSxFQUFFLDJCQUEyQjtJQUN6QyxRQUFRLEVBQUUsa0JBQWtCO0lBQzVCLGlCQUFpQixFQUFFLHdCQUF3QjtJQUMzQyxZQUFZLEVBQ1Ysa0JBQWtCO0lBQ3BCLFVBQVUsRUFBRSw2QkFBNkI7SUFDekMsYUFBYSxFQUFFLFNBQVM7SUFDeEIsY0FBYyxFQUFFLGlCQUFpQjtJQUNqQyxXQUFXLEVBQUUsZUFBZTtJQUM1QixPQUFPLEVBQUUsZUFBZTtJQUN4QixXQUFXLEVBQUUsK0JBQStCO0NBQzdDOzs7Ozs7Ozs7Ozs7QUNaRDs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCxxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0puRCwwQ0FBMEM7QUFDMUMsZUFBZTtBQUNmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFrQkU7QUFDOEQ7QUFLNUM7QUFJZ0M7QUFVckMsTUFBTSxNQUFPLFNBQVEsNENBQUssQ0FBQyxhQUd6QztJQUhEOztRQVVFLFVBQUssR0FBRztZQUNOLGVBQWUsRUFBRSxFQUFFO1lBQ25CLFdBQVcs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SUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9maWx0cmFyLWUtZ2VyYXItcmVsYXRvcmlvL3NyYy9ydW50aW1lL3RyYW5zbGF0aW9ucy9kZWZhdWx0LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1hcmNnaXNcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvZmlsdHJhci1lLWdlcmFyLXJlbGF0b3Jpby9zcmMvcnVudGltZS93aWRnZXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcclxuICBfd2lkZ2V0TGFiZWw6ICdGaWx0cmFyIGUgR2VyYXIgUmVsYXTDs3JpbycsXHJcbiAgYWRkTGF5ZXI6ICdBZGljaW9uYXIgQ2FtYWRhJyxcclxuICBmZWF0dXJlU2VydmljZVVybDogJ1VSTCBkbyBGZWF0dXJlIFNlcnZpY2UnLFxyXG4gIGluc3RydWN0aW9uczpcclxuICAgICdEaWdpdGUgbyBuwrogSURFQScsXHJcbiAgc2VhcmNoSWRlYTogJ1Blc3F1aXNhciBwb3IgbsO6bWVybyAoaWRlYSknLFxyXG4gIGZpbHRlckFuZFpvb206ICdGaWx0cmFyJyxcclxuICBnZW5lcmF0ZVJlcG9ydDogJ0dlcmFyIFJlbGF0w7NyaW8nLFxyXG4gIGNsZWFyRmlsdGVyOiAnTGltcGFyIEZpbHRybycsXHJcbiAgbG9hZGluZzogJ0NhcnJlZ2FuZG8uLi4nLFxyXG4gIGxheWVyTG9hZGVkOiAnQ2FtYWRhIGNhcnJlZ2FkYSBjb20gc3VjZXNzbyEnXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvdHlwZS1idWlsdGlucyAqL1xyXG4vKiogQGpzeCBqc3ggKi9cclxuLyoqXHJcbiAgTGljZW5zaW5nXHJcblxyXG4gIENvcHlyaWdodCAyMDIyIEVzcmlcclxuXHJcbiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgWW91XHJcbiAgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXlcclxuICBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG4gIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yXHJcbiAgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nXHJcbiAgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG5cclxuICBBIGNvcHkgb2YgdGhlIGxpY2Vuc2UgaXMgYXZhaWxhYmxlIGluIHRoZSByZXBvc2l0b3J5J3NcclxuICBMSUNFTlNFIGZpbGUuXHJcbiovXHJcbmltcG9ydCB7IFJlYWN0LCB0eXBlIEFsbFdpZGdldFByb3BzLCBjc3MsIGpzeCB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHtcclxuICBsb2FkQXJjR0lTSlNBUElNb2R1bGVzLFxyXG4gIEppbXVNYXBWaWV3Q29tcG9uZW50LFxyXG4gIHR5cGUgSmltdU1hcFZpZXdcclxufSBmcm9tICdqaW11LWFyY2dpcydcclxuXHJcbmltcG9ydCB0eXBlIHsgSU1Db25maWcgfSBmcm9tICcuLi9jb25maWcnXHJcblxyXG5pbXBvcnQgZGVmYXVsdE1lc3NhZ2VzIGZyb20gJy4vdHJhbnNsYXRpb25zL2RlZmF1bHQnXHJcblxyXG5pbnRlcmZhY2UgSVN0YXRlIHtcclxuICBpZGVhU2VhcmNoSW5wdXQ6IHN0cmluZ1xyXG4gIGppbXVNYXBWaWV3OiBKaW11TWFwVmlld1xyXG4gIGZlYXR1cmVMYXllcjogX19lc3JpLkZlYXR1cmVMYXllclxyXG4gIGxvYWRpbmc6IGJvb2xlYW5cclxuICBpbml0aWFsRXh0ZW50OiBfX2VzcmkuRXh0ZW50XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpZGdldCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8XHJcbkFsbFdpZGdldFByb3BzPElNQ29uZmlnPixcclxuSVN0YXRlXHJcbj4ge1xyXG4gIC8vIEdpdmUgdHlwZXMgdG8gdGhlIG1vZHVsZXMgd2UgaW1wb3J0IGZyb20gdGhlIEFyY0dJUyBBUEkgZm9yIEphdmFTY3JpcHRcclxuICAvLyB0byB0ZWxsIFR5cGVTY3JpcHQgd2hhdCB0eXBlcyB0aGV5IGFyZS5cclxuICBGZWF0dXJlTGF5ZXI6IHR5cGVvZiBfX2VzcmkuRmVhdHVyZUxheWVyXHJcbiAgUXVlcnk6IHR5cGVvZiBfX2VzcmkuUXVlcnlcclxuICBTcGF0aWFsUmVmZXJlbmNlOiB0eXBlb2YgX19lc3JpLlNwYXRpYWxSZWZlcmVuY2VcclxuXHJcbiAgc3RhdGUgPSB7XHJcbiAgICBpZGVhU2VhcmNoSW5wdXQ6ICcnLFxyXG4gICAgamltdU1hcFZpZXc6IG51bGwsXHJcbiAgICBmZWF0dXJlTGF5ZXI6IG51bGwsXHJcbiAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgIGluaXRpYWxFeHRlbnQ6IG51bGxcclxuICB9XHJcblxyXG4gIC8vIFVSTCBmaXhhIGRhIGNhbWFkYVxyXG4gIHJlYWRvbmx5IEZFQVRVUkVfU0VSVklDRV9VUkwgPSAnaHR0cHM6Ly9tZWlvYW1iaWVudGUuc2lzdGVtYXMubXBiYS5tcC5ici9zZXJ2ZXIvcmVzdC9zZXJ2aWNlcy9Ib3N0ZWQvYWxlcnRhc19yZWdpb25hbF9sYXBhL0ZlYXR1cmVTZXJ2ZXInXHJcbiAgXHJcbiAgLy8gVVJMIGRhIGZlcnJhbWVudGEgZGUgZ2VvcHJvY2Vzc2FtZW50b1xyXG4gIHJlYWRvbmx5IEdQX1NFUlZJQ0VfVVJMID0gJ2h0dHBzOi8vbWVpb2FtYmllbnRlLnNpc3RlbWFzLm1wYmEubXAuYnIvc2VydmVyL3Jlc3Qvc2VydmljZXMvdGVzdGVvdXRwdXQvcHJvY2Vzc2FyYWxlcnRhX2lkZWEvR1BTZXJ2ZXInXHJcbiAgXHJcbiAgLy8gTm9tZSBkYSB0YXNrIGVzcGVjw61maWNhIGRlbnRybyBkYSBHUFxyXG4gIHJlYWRvbmx5IEdQX1RBU0tfTkFNRSA9ICdQcm9jZXNzYW1lbnRvIGRlIGFsZXJ0YXMnXHJcblxyXG4gIC8vIEZ1bsOnw6NvIGNoYW1hZGEgcXVhbmRvIG8gdmFsb3IgZGEgcGVzcXVpc2EgbXVkYVxyXG4gIGhhbmRsZUlkZWFTZWFyY2hJbnB1dENoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGlkZWFTZWFyY2hJbnB1dDogZXZlbnQudGFyZ2V0LnZhbHVlXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLy8gQ2FycmVnYSBhIGNhbWFkYSBhdXRvbWF0aWNhbWVudGUgcXVhbmRvIG8gY29tcG9uZW50ZSDDqSBtb250YWRvIG91IG8gbWFwYSBlc3TDoSBkaXNwb27DrXZlbFxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZSA9IChwcmV2UHJvcHMsIHByZXZTdGF0ZSkgPT4ge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuamltdU1hcFZpZXcgJiYgIXRoaXMuc3RhdGUuZmVhdHVyZUxheWVyICYmICFwcmV2U3RhdGUuamltdU1hcFZpZXcpIHtcclxuICAgICAgLy8gU2FsdmEgYSB2aXN1YWxpemHDp8OjbyBpbmljaWFsIHF1YW5kbyBvIG1hcGEgw6kgZGV0ZWN0YWRvIHBlbGEgcHJpbWVpcmEgdmV6XHJcbiAgICAgIGlmICh0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcgJiYgIXRoaXMuc3RhdGUuaW5pdGlhbEV4dGVudCkge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRFeHRlbnQgPSB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcuZXh0ZW50XHJcbiAgICAgICAgaWYgKGN1cnJlbnRFeHRlbnQpIHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpbml0aWFsRXh0ZW50OiBjdXJyZW50RXh0ZW50LmNsb25lKClcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubG9hZEZlYXR1cmVMYXllcigpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBDYXJyZWdhIGEgY2FtYWRhIGRlIGZlYXR1cmUgc2VydmljZVxyXG4gIGxvYWRGZWF0dXJlTGF5ZXIgPSAoKSA9PiB7XHJcbiAgICBpZiAoIXRoaXMuc3RhdGUuamltdU1hcFZpZXcpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSlcclxuXHJcbiAgICBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcclxuICAgICAgJ2VzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllcicsXHJcbiAgICAgICdlc3JpL2dlb21ldHJ5L1NwYXRpYWxSZWZlcmVuY2UnXHJcbiAgICBdKS50aGVuKChtb2R1bGVzKSA9PiB7XHJcbiAgICAgIFt0aGlzLkZlYXR1cmVMYXllciwgdGhpcy5TcGF0aWFsUmVmZXJlbmNlXSA9IG1vZHVsZXNcclxuXHJcbiAgICAgIC8vIENyaWEgYSBjYW1hZGEgY29tIGEgVVJMIGZpeGFcclxuICAgICAgY29uc3QgbGF5ZXIgPSBuZXcgdGhpcy5GZWF0dXJlTGF5ZXIoe1xyXG4gICAgICAgIHVybDogdGhpcy5GRUFUVVJFX1NFUlZJQ0VfVVJMXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICAvLyBBZGljaW9uYSBhIGNhbWFkYSBhbyBtYXBhXHJcbiAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5tYXAuYWRkKGxheWVyKVxyXG5cclxuICAgICAgLy8gQWd1YXJkYSBhIGNhbWFkYSBzZXIgY3JpYWRhXHJcbiAgICAgIGxheWVyLm9uKCdsYXllcnZpZXctY3JlYXRlJywgKCkgPT4ge1xyXG4gICAgICAgIC8vIFNhbHZhIGEgdmlzdWFsaXphw6fDo28gaW5pY2lhbCBkbyBtYXBhIHNlIGFpbmRhIG7Do28gZm9pIHNhbHZhXHJcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmluaXRpYWxFeHRlbnQgJiYgdGhpcy5zdGF0ZS5qaW11TWFwVmlldyAmJiB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcpIHtcclxuICAgICAgICAgIGNvbnN0IGN1cnJlbnRFeHRlbnQgPSB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcuZXh0ZW50XHJcbiAgICAgICAgICBpZiAoY3VycmVudEV4dGVudCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICBmZWF0dXJlTGF5ZXI6IGxheWVyLFxyXG4gICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGluaXRpYWxFeHRlbnQ6IGN1cnJlbnRFeHRlbnQuY2xvbmUoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgZmVhdHVyZUxheWVyOiBsYXllcixcclxuICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZmVhdHVyZUxheWVyOiBsYXllcixcclxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgbGF5ZXIub24oJ2xheWVydmlldy1jcmVhdGUtZXJyb3InLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBhbyBjYXJyZWdhciBhIGNhbWFkYScpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLy8gRnVuw6fDo28gcGFyYSBmaWx0cmFyIGUgZGFyIHpvb20gbm8gcG9sw61nb25vIGJhc2VhZG8gbmEgcGVzcXVpc2FcclxuICBoYW5kbGVGaWx0ZXJBbmRab29tID0gYXN5bmMgKGV2dCkgPT4ge1xyXG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICAvLyBDYXNvcyBkZSBlcnJvXHJcbiAgICBpZiAoIXRoaXMuc3RhdGUuamltdU1hcFZpZXcpIHtcclxuICAgICAgYWxlcnQoJ1BvciBmYXZvciwgY29uZmlndXJlIHVtIG1hcGEgbm8gd2lkZ2V0LicpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgaWYgKCF0aGlzLnN0YXRlLmZlYXR1cmVMYXllcikge1xyXG4gICAgICBhbGVydCgnQSBjYW1hZGEgYWluZGEgbsOjbyBmb2kgY2FycmVnYWRhLiBBZ3VhcmRlLi4uJylcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5pZGVhU2VhcmNoSW5wdXQgPT09ICcnIHx8IHRoaXMuc3RhdGUuaWRlYVNlYXJjaElucHV0LnRyaW0oKSA9PT0gJycpIHtcclxuICAgICAgYWxlcnQoJ1BvciBmYXZvciwgZGlnaXRlIHVtIG7Dum1lcm8gcGFyYSBwZXNxdWlzYXIgbmEgY29sdW5hIGlkZWEuJylcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSlcclxuXHJcbiAgICAvLyBDYXJyZWdhIG9zIG3Ds2R1bG9zIG5lY2Vzc8Ohcmlvc1xyXG4gICAgbG9hZEFyY0dJU0pTQVBJTW9kdWxlcyhbXHJcbiAgICAgICdlc3JpL2xheWVycy9GZWF0dXJlTGF5ZXInLFxyXG4gICAgICAnZXNyaS9nZW9tZXRyeS9TcGF0aWFsUmVmZXJlbmNlJ1xyXG4gICAgXSkudGhlbigobW9kdWxlcykgPT4ge1xyXG4gICAgICBbdGhpcy5GZWF0dXJlTGF5ZXIsIHRoaXMuU3BhdGlhbFJlZmVyZW5jZV0gPSBtb2R1bGVzXHJcblxyXG4gICAgICBjb25zdCBsYXllciA9IHRoaXMuc3RhdGUuZmVhdHVyZUxheWVyXHJcbiAgICAgIGNvbnN0IHNlYXJjaFZhbHVlID0gdGhpcy5zdGF0ZS5pZGVhU2VhcmNoSW5wdXQudHJpbSgpXHJcbiAgICAgIFxyXG4gICAgICAvLyBFc2NhcGEgYXNwYXMgc2ltcGxlcyBwYXJhIGV2aXRhciBTUUwgaW5qZWN0aW9uXHJcbiAgICAgIGNvbnN0IGVzY2FwZWRWYWx1ZSA9IHNlYXJjaFZhbHVlLnJlcGxhY2UoLycvZywgXCInJ1wiKVxyXG5cclxuICAgICAgLy8gVmVyaWZpY2Egc2UgYSBjYW1hZGEgZXN0w6EgY2FycmVnYWRhIGUgb2J0w6ltIGluZm9ybWHDp8O1ZXMgZG9zIGNhbXBvc1xyXG4gICAgICAvLyBBZ3VhcmRhIGEgY2FtYWRhIGVzdGFyIGNvbXBsZXRhbWVudGUgY2FycmVnYWRhXHJcbiAgICAgIGNvbnN0IGNoZWNrQW5kUXVlcnkgPSAoKSA9PiB7XHJcbiAgICAgICAgLy8gTGlzdGEgZGUgcG9zc8OtdmVpcyBub21lcyBkZSBjb2x1bmEgKGNhc2UtaW5zZW5zaXRpdmUpXHJcbiAgICAgICAgY29uc3QgcG9zc2libGVGaWVsZE5hbWVzID0gWydpZGVhJywgJ0lERUEnLCAnSWRlYScsICdJRCcsICdpZCcsICdJZCddXHJcbiAgICAgICAgbGV0IGZpZWxkTmFtZSA9ICdpZGVhJyAvLyBQYWRyw6NvXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gVGVudGEgZW5jb250cmFyIG8gY2FtcG8gY29ycmV0b1xyXG4gICAgICAgIGlmIChsYXllci5maWVsZHMgJiYgbGF5ZXIuZmllbGRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIGNvbnN0IGZvdW5kRmllbGQgPSBsYXllci5maWVsZHMuZmluZChmaWVsZCA9PiBcclxuICAgICAgICAgICAgcG9zc2libGVGaWVsZE5hbWVzLmluY2x1ZGVzKGZpZWxkLm5hbWUpXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICBpZiAoZm91bmRGaWVsZCkge1xyXG4gICAgICAgICAgICBmaWVsZE5hbWUgPSBmb3VuZEZpZWxkLm5hbWVcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIFNlIG7Do28gZW5jb250cmFyLCB0ZW50YSBmYXplciB1bWEgYnVzY2EgY2FzZS1pbnNlbnNpdGl2ZVxyXG4gICAgICAgICAgICBjb25zdCBjYXNlSW5zZW5zaXRpdmVGaWVsZCA9IGxheWVyLmZpZWxkcy5maW5kKGZpZWxkID0+IFxyXG4gICAgICAgICAgICAgIGZpZWxkLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2lkZWEnXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgaWYgKGNhc2VJbnNlbnNpdGl2ZUZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgZmllbGROYW1lID0gY2FzZUluc2Vuc2l0aXZlRmllbGQubmFtZVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIC8vIExvZyBkb3MgY2FtcG9zIGRpc3BvbsOtdmVpcyBwYXJhIGRlYnVnXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0NhbXBvcyBkaXNwb27DrXZlaXMgbmEgY2FtYWRhOicsIGxheWVyLmZpZWxkcy5tYXAoZiA9PiBmLm5hbWUpKVxyXG4gICAgICAgICAgICAgIC8vIFRlbnRhIHVzYXIgbyBwcmltZWlybyBjYW1wbyBxdWUgcGFyZWNlIHNlciB1bSBJRFxyXG4gICAgICAgICAgICAgIGNvbnN0IGlkRmllbGQgPSBsYXllci5maWVsZHMuZmluZChmaWVsZCA9PiBcclxuICAgICAgICAgICAgICAgIGZpZWxkLnR5cGUgPT09ICdlc3JpRmllbGRUeXBlU3RyaW5nJyB8fCBmaWVsZC50eXBlID09PSAnZXNyaUZpZWxkVHlwZUludGVnZXInIHx8IGZpZWxkLnR5cGUgPT09ICdlc3JpRmllbGRUeXBlRG91YmxlJ1xyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICBpZiAoaWRGaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgZmllbGROYW1lID0gaWRGaWVsZC5uYW1lXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgVXNhbmRvIGNhbXBvOiAke2ZpZWxkTmFtZX1gKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ3JpYSB1bWEgcXVlcnkgcGFyYSBidXNjYXIgbyBwb2zDrWdvbm8gcGVsYSBjb2x1bmFcclxuICAgICAgICAvLyBVc2EgTElLRSBwYXJhIGJ1c2NhIG1haXMgZmxleMOtdmVsIGUgdHJhdGEgY29tbyBzdHJpbmdcclxuICAgICAgICBjb25zdCBxdWVyeSA9IGxheWVyLmNyZWF0ZVF1ZXJ5KClcclxuICAgICAgICBcclxuICAgICAgICAvLyBUZW50YSBkaWZlcmVudGVzIGFib3JkYWdlbnMgZGUgcXVlcnlcclxuICAgICAgICAvLyAxLiBCdXNjYSBleGF0YSBjb21vIHN0cmluZ1xyXG4gICAgICAgIC8vIDIuIEJ1c2NhIGNvbSBMSUtFIHBhcmEgdmFsb3JlcyBwYXJjaWFpc1xyXG4gICAgICAgIC8vIDMuIEJ1c2NhIGNvbW8gbsO6bWVybyAoc2UgbyB2YWxvciBmb3IgbnVtw6lyaWNvKVxyXG4gICAgICAgIGNvbnN0IGhhc1NwZWNpYWxDaGFycyA9IHNlYXJjaFZhbHVlLmluZGV4T2YoJy4nKSAhPT0gLTEgfHwgc2VhcmNoVmFsdWUuaW5kZXhPZignLycpICE9PSAtMVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFBhcmEgdmFsb3JlcyBjb20gY2FyYWN0ZXJlcyBlc3BlY2lhaXMgKGNvbW8gXCIwMDMuOS40MjcwNzQvMjAyNVwiKSwgdXNhIGFwZW5hcyBjb21vIHN0cmluZ1xyXG4gICAgICAgIGlmIChoYXNTcGVjaWFsQ2hhcnMpIHtcclxuICAgICAgICAgIHF1ZXJ5LndoZXJlID0gYCR7ZmllbGROYW1lfSA9ICcke2VzY2FwZWRWYWx1ZX0nYFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBTZSBmb3IgdW0gbsO6bWVybyBzaW1wbGVzLCB0ZW50YSBjb21vIG7Dum1lcm8gZSBjb21vIHN0cmluZ1xyXG4gICAgICAgICAgY29uc3QgaXNOdW1lcmljID0gIWlzTmFOKHBhcnNlRmxvYXQoc2VhcmNoVmFsdWUpKSAmJiBpc0Zpbml0ZShwYXJzZUZsb2F0KHNlYXJjaFZhbHVlKSlcclxuICAgICAgICAgIGlmIChpc051bWVyaWMpIHtcclxuICAgICAgICAgICAgcXVlcnkud2hlcmUgPSBgJHtmaWVsZE5hbWV9ID0gJHtzZWFyY2hWYWx1ZX0gT1IgJHtmaWVsZE5hbWV9ID0gJyR7ZXNjYXBlZFZhbHVlfSdgXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBxdWVyeS53aGVyZSA9IGAke2ZpZWxkTmFtZX0gPSAnJHtlc2NhcGVkVmFsdWV9J2BcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcXVlcnkucmV0dXJuR2VvbWV0cnkgPSB0cnVlXHJcblxyXG4gICAgICAgIC8vIEV4ZWN1dGEgYSBxdWVyeVxyXG4gICAgICAgIGxheWVyLnF1ZXJ5RmVhdHVyZXMocXVlcnkpLnRoZW4oKHJlc3VsdHMpID0+IHtcclxuICAgICAgICAgIGlmIChyZXN1bHRzLmZlYXR1cmVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAvLyBTZSBuw6NvIGVuY29udHJvdSwgdGVudGEgY29tIExJS0VcclxuICAgICAgICAgICAgY29uc3QgbGlrZVF1ZXJ5ID0gbGF5ZXIuY3JlYXRlUXVlcnkoKVxyXG4gICAgICAgICAgICBsaWtlUXVlcnkud2hlcmUgPSBgJHtmaWVsZE5hbWV9IExJS0UgJyUke2VzY2FwZWRWYWx1ZX0lJ2BcclxuICAgICAgICAgICAgbGlrZVF1ZXJ5LnJldHVybkdlb21ldHJ5ID0gdHJ1ZVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIGxheWVyLnF1ZXJ5RmVhdHVyZXMobGlrZVF1ZXJ5KS50aGVuKChsaWtlUmVzdWx0cykgPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChsaWtlUmVzdWx0cy5mZWF0dXJlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KGBOZW5odW0gcG9sw61nb25vIGVuY29udHJhZG8gY29tICR7ZmllbGROYW1lfSA9ICR7c2VhcmNoVmFsdWV9YClcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIC8vIFNlIGVuY29udHJvdSBjb20gTElLRSwgdXNhIG8gcHJpbWVpcm8gcmVzdWx0YWRvXHJcbiAgICAgICAgICAgICAgY29uc3QgZm91bmRHcmFwaGljID0gbGlrZVJlc3VsdHMuZmVhdHVyZXNbMF1cclxuICAgICAgICAgICAgICBjb25zdCBhY3R1YWxWYWx1ZSA9IGZvdW5kR3JhcGhpYy5hdHRyaWJ1dGVzW2ZpZWxkTmFtZV1cclxuICAgICAgICAgICAgICB0aGlzLmFwcGx5RmlsdGVyQW5kWm9vbShsYXllciwgZm91bmRHcmFwaGljLCBmaWVsZE5hbWUsIGFjdHVhbFZhbHVlKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vIFNlIGVuY29udHJvdSwgYXBsaWNhIGZpbHRybyBlIHpvb21cclxuICAgICAgICAgIGNvbnN0IGZvdW5kR3JhcGhpYyA9IHJlc3VsdHMuZmVhdHVyZXNbMF1cclxuICAgICAgICAgIGNvbnN0IGFjdHVhbFZhbHVlID0gZm91bmRHcmFwaGljLmF0dHJpYnV0ZXNbZmllbGROYW1lXVxyXG4gICAgICAgICAgdGhpcy5hcHBseUZpbHRlckFuZFpvb20obGF5ZXIsIGZvdW5kR3JhcGhpYywgZmllbGROYW1lLCBhY3R1YWxWYWx1ZSlcclxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gcGVzcXVpc2FyIGZlYXR1cmVzOicsIGVycm9yKVxyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRGV0YWxoZXMgZG8gZXJybzonLCB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgIGRldGFpbHM6IGVycm9yLmRldGFpbHMsXHJcbiAgICAgICAgICAgIGZpZWxkTmFtZTogZmllbGROYW1lLFxyXG4gICAgICAgICAgICBzZWFyY2hWYWx1ZTogc2VhcmNoVmFsdWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8vIFRlbnRhIG1vc3RyYXIgaW5mb3JtYcOnw7VlcyBtYWlzIMO6dGVpc1xyXG4gICAgICAgICAgbGV0IGVycm9yTWVzc2FnZSA9ICdFcnJvIGFvIHBlc3F1aXNhci4gJ1xyXG4gICAgICAgICAgaWYgKGxheWVyLmZpZWxkcyAmJiBsYXllci5maWVsZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBmaWVsZE5hbWVzID0gbGF5ZXIuZmllbGRzLm1hcChmID0+IGYubmFtZSkuam9pbignLCAnKVxyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgKz0gYFxcblxcbkNhbXBvcyBkaXNwb27DrXZlaXM6ICR7ZmllbGROYW1lc31gXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBlcnJvck1lc3NhZ2UgKz0gYFxcblxcblZlcmlmaXF1ZSBzZSBhIGNvbHVuYSBcIiR7ZmllbGROYW1lfVwiIGV4aXN0ZSBlIHNlIG8gdmFsb3IgXCIke3NlYXJjaFZhbHVlfVwiIGVzdMOhIGNvcnJldG8uYFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBhbGVydChlcnJvck1lc3NhZ2UpXHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvLyBTZSBhIGNhbWFkYSBqw6EgZXN0w6EgY2FycmVnYWRhLCBleGVjdXRhIGRpcmV0YW1lbnRlXHJcbiAgICAgIGlmIChsYXllci5sb2FkZWQpIHtcclxuICAgICAgICBjaGVja0FuZFF1ZXJ5KClcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBBZ3VhcmRhIGEgY2FtYWRhIGNhcnJlZ2FyXHJcbiAgICAgICAgbGF5ZXIud2hlbigoKSA9PiB7XHJcbiAgICAgICAgICBjaGVja0FuZFF1ZXJ5KClcclxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gY2FycmVnYXIgaW5mb3JtYcOnw7VlcyBkYSBjYW1hZGE6JywgZXJyb3IpXHJcbiAgICAgICAgICBhbGVydCgnRXJybyBhbyBjYXJyZWdhciBpbmZvcm1hw6fDtWVzIGRhIGNhbWFkYS4gVmVyaWZpcXVlIHNlIGEgY2FtYWRhIGVzdMOhIGFjZXNzw612ZWwuJylcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvLyBGdW7Dp8OjbyBhdXhpbGlhciBwYXJhIGFwbGljYXIgZmlsdHJvIGUgem9vbVxyXG4gIGFwcGx5RmlsdGVyQW5kWm9vbSA9IChsYXllciwgZ3JhcGhpYywgZmllbGROYW1lLCBhY3R1YWxWYWx1ZSkgPT4ge1xyXG4gICAgLy8gT2J0w6ltIG8gdmFsb3IgcmVhbCBkbyBhdHJpYnV0byBkbyBncmFwaGljXHJcbiAgICBjb25zdCBhdHRyaWJ1dGVWYWx1ZSA9IGdyYXBoaWMuYXR0cmlidXRlc1tmaWVsZE5hbWVdXHJcbiAgICBcclxuICAgIC8vIFNlIG8gdmFsb3IgbsOjbyBmb2kgcGFzc2FkbywgdXNhIG8gZG8gYXRyaWJ1dG9cclxuICAgIGNvbnN0IHZhbHVlVG9GaWx0ZXIgPSBhY3R1YWxWYWx1ZSAhPT0gdW5kZWZpbmVkID8gYWN0dWFsVmFsdWUgOiBhdHRyaWJ1dGVWYWx1ZVxyXG4gICAgXHJcbiAgICAvLyBFc2NhcGEgbyB2YWxvciBwYXJhIFNRTCAodHJhdGEgc3RyaW5ncywgbsO6bWVyb3MgZSBudWxsKVxyXG4gICAgbGV0IGRlZmluaXRpb25FeHByZXNzaW9uXHJcbiAgICBpZiAodmFsdWVUb0ZpbHRlciA9PT0gbnVsbCB8fCB2YWx1ZVRvRmlsdGVyID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgZGVmaW5pdGlvbkV4cHJlc3Npb24gPSBgJHtmaWVsZE5hbWV9IElTIE5VTExgXHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZVRvRmlsdGVyID09PSAnbnVtYmVyJykge1xyXG4gICAgICBkZWZpbml0aW9uRXhwcmVzc2lvbiA9IGAke2ZpZWxkTmFtZX0gPSAke3ZhbHVlVG9GaWx0ZXJ9YFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gw4kgdW1hIHN0cmluZywgcHJlY2lzYSBlc2NhcGFyIGFzcGFzIHNpbXBsZXNcclxuICAgICAgY29uc3QgZXNjYXBlZFZhbHVlID0gU3RyaW5nKHZhbHVlVG9GaWx0ZXIpLnJlcGxhY2UoLycvZywgXCInJ1wiKVxyXG4gICAgICBkZWZpbml0aW9uRXhwcmVzc2lvbiA9IGAke2ZpZWxkTmFtZX0gPSAnJHtlc2NhcGVkVmFsdWV9J2BcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc29sZS5sb2coYEFwbGljYW5kbyBmaWx0cm86ICR7ZmllbGROYW1lfSA9ICR7dmFsdWVUb0ZpbHRlcn1gKVxyXG4gICAgY29uc29sZS5sb2coYERlZmluaXRpb24gRXhwcmVzc2lvbjogJHtkZWZpbml0aW9uRXhwcmVzc2lvbn1gKVxyXG5cclxuICAgIC8vIEFwbGljYSBvIGZpbHRybyBuYSBjYW1hZGEgdXNhbmRvIGRlZmluaXRpb25FeHByZXNzaW9uXHJcbiAgICAvLyBJc3NvIMOpIG8gbcOpdG9kbyBjb3JyZXRvIHBhcmEgZmlsdHJhciB1bWEgRmVhdHVyZUxheWVyIGUgb2N1bHRhciBvdXRyb3MgcG9sw61nb25vc1xyXG4gICAgbGF5ZXIuZGVmaW5pdGlvbkV4cHJlc3Npb24gPSBkZWZpbml0aW9uRXhwcmVzc2lvblxyXG4gICAgXHJcbiAgICAvLyBGb3LDp2EgYSBhdHVhbGl6YcOnw6NvIGltZWRpYXRhIGRhIGNhbWFkYSBwYXJhIGFwbGljYXIgbyBmaWx0cm9cclxuICAgIGxheWVyLnJlZnJlc2goKVxyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZygnRmlsdHJvIGFwbGljYWRvLiBBIGNhbWFkYSBkZXZlIG1vc3RyYXIgQVBFTkFTIG8gcG9sw61nb25vIHNlbGVjaW9uYWRvJylcclxuICAgIGNvbnNvbGUubG9nKCdEZWZpbml0aW9uIEV4cHJlc3Npb246JywgZGVmaW5pdGlvbkV4cHJlc3Npb24pXHJcbiAgICBcclxuICAgIC8vIEFndWFyZGEgdW0gcG91Y28gcGFyYSBnYXJhbnRpciBxdWUgbyBmaWx0cm8gc2VqYSBwcm9jZXNzYWRvXHJcbiAgICAvLyBBZ3VhcmRhIHF1ZSBhIGNhbWFkYSBlc3RlamEgY29tcGxldGFtZW50ZSBjYXJyZWdhZGEgYW50ZXMgZGUgYXBsaWNhciBvIGZpbHRyb1xyXG4gICAgaWYgKGxheWVyLmxvYWRlZCkge1xyXG4gICAgICAvLyBBIGNhbWFkYSBqw6EgZXN0w6EgY2FycmVnYWRhLCBhcGxpY2EgbyBmaWx0cm8gZGlyZXRhbWVudGVcclxuICAgICAgLy8gQWd1YXJkYSB1bSBwb3VjbyBwYXJhIGdhcmFudGlyIHF1ZSBvIGZpbHRybyBzZWphIGFwbGljYWRvXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIC8vIFZlcmlmaWNhIHNlIG8gZmlsdHJvIGZvaSBhcGxpY2Fkb1xyXG4gICAgICAgIGlmIChsYXllci5kZWZpbml0aW9uRXhwcmVzc2lvbiA9PT0gZGVmaW5pdGlvbkV4cHJlc3Npb24pIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdGaWx0cm8gY29uZmlybWFkbyBuYSBjYW1hZGEnKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFwcGx5Wm9vbUFmdGVyRmlsdGVyKGxheWVyLCBncmFwaGljKVxyXG4gICAgICB9LCAzMDApXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBBZ3VhcmRhIGEgY2FtYWRhIGNhcnJlZ2FyIHByaW1laXJvXHJcbiAgICAgIGxheWVyLndoZW4oKCkgPT4ge1xyXG4gICAgICAgIC8vIEFwbGljYSBvIGZpbHRybyBub3ZhbWVudGUgYXDDs3MgY2FycmVnYXIgKGdhcmFudGlhKVxyXG4gICAgICAgIGxheWVyLmRlZmluaXRpb25FeHByZXNzaW9uID0gZGVmaW5pdGlvbkV4cHJlc3Npb25cclxuICAgICAgICBsYXllci5yZWZyZXNoKClcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuYXBwbHlab29tQWZ0ZXJGaWx0ZXIobGF5ZXIsIGdyYXBoaWMpXHJcbiAgICAgICAgfSwgMzAwKVxyXG4gICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGFvIGFndWFyZGFyIGNhbWFkYTonLCBlcnJvcilcclxuICAgICAgICAvLyBNZXNtbyBhc3NpbSB0ZW50YSBhcGxpY2FyIG8gem9vbVxyXG4gICAgICAgIHRoaXMuYXBwbHlab29tQWZ0ZXJGaWx0ZXIobGF5ZXIsIGdyYXBoaWMpXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBGdW7Dp8OjbyBhdXhpbGlhciBwYXJhIGFwbGljYXIgem9vbSBhcMOzcyBvIGZpbHRyb1xyXG4gIGFwcGx5Wm9vbUFmdGVyRmlsdGVyID0gKGxheWVyLCBncmFwaGljKSA9PiB7XHJcbiAgICAvLyBBZ3VhcmRhIHVtIHBvdWNvIHBhcmEgZ2FyYW50aXIgcXVlIG8gZmlsdHJvIHNlamEgcHJvY2Vzc2FkbyBwZWxhIGNhbWFkYVxyXG4gICAgLy8gTyBkZWZpbml0aW9uRXhwcmVzc2lvbiBwcmVjaXNhIGRlIHRlbXBvIHBhcmEgc2VyIHByb2Nlc3NhZG9cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAvLyBEw6Egem9vbSBubyBwb2zDrWdvbm8gZW5jb250cmFkbyBjb20gcGFkZGluZyBwYXJhIG7Do28gY29ydGFyXHJcbiAgICAgIGlmIChncmFwaGljLmdlb21ldHJ5ICYmIHRoaXMuc3RhdGUuamltdU1hcFZpZXcgJiYgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3KSB7XHJcbiAgICAgICAgLy8gVXNhIGdvVG8gY29tIHRhcmdldCBlIHBhZGRpbmcgZW0gcGl4ZWxzIHBhcmEgY29udHJvbGFyIG1lbGhvciBvIHpvb21cclxuICAgICAgICAvLyBQYWRkaW5nIGRlIDUwIHBpeGVscyBlbSBjYWRhIGxhZG8gcGFyYSBuw6NvIGNvcnRhciBvIHBvbMOtZ29ub1xyXG4gICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5nb1RvKHtcclxuICAgICAgICAgIHRhcmdldDogZ3JhcGhpYy5nZW9tZXRyeSxcclxuICAgICAgICAgIHBhZGRpbmc6IHtcclxuICAgICAgICAgICAgbGVmdDogNTAsXHJcbiAgICAgICAgICAgIHJpZ2h0OiA1MCxcclxuICAgICAgICAgICAgdG9wOiA1MCxcclxuICAgICAgICAgICAgYm90dG9tOiA1MFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgIGR1cmF0aW9uOiA1MDBcclxuICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdab29tIGFwbGljYWRvIG5vIHBvbMOtZ29ubyBmaWx0cmFkbyBjb20gcGFkZGluZycpXHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcclxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gZGFyIHpvb206JywgZXJyb3IpXHJcbiAgICAgICAgICAvLyBGYWxsYmFjazogdGVudGEgem9vbSBjb20gZXh0ZW50IGNhbGN1bGFkbyBtYW51YWxtZW50ZVxyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgZXh0ZW50ID0gZ3JhcGhpYy5nZW9tZXRyeS5leHRlbnRcclxuICAgICAgICAgICAgLy8gQWRpY2lvbmEgMTAlIGRlIHBhZGRpbmcgY2FsY3VsYWRvIGEgcGFydGlyIGRvIHRhbWFuaG8gZG8gZXh0ZW50XHJcbiAgICAgICAgICAgIGNvbnN0IHBhZGRpbmdGYWN0b3IgPSAwLjFcclxuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBleHRlbnQud2lkdGhcclxuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gZXh0ZW50LmhlaWdodFxyXG4gICAgICAgICAgICBjb25zdCBwYWRkZWRFeHRlbnQgPSBleHRlbnQuZXhwYW5kKHdpZHRoICogcGFkZGluZ0ZhY3RvciwgaGVpZ2h0ICogcGFkZGluZ0ZhY3RvcilcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5nb1RvKHBhZGRlZEV4dGVudCwge1xyXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDBcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1pvb20gYXBsaWNhZG8gdXNhbmRvIGV4dGVudCBjb20gcGFkZGluZyBjYWxjdWxhZG8nKVxyXG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxyXG4gICAgICAgICAgICB9KS5jYXRjaCgoZmFsbGJhY2tFcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gbm8gem9vbSBkZSBmYWxsYmFjazonLCBmYWxsYmFja0Vycm9yKVxyXG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSBjYXRjaCAoY2FsY0Vycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gY2FsY3VsYXIgZXh0ZW50OicsIGNhbGNFcnJvcilcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcclxuICAgICAgfVxyXG4gICAgfSwgNTAwKVxyXG4gIH1cclxuXHJcbiAgLy8gRnVuw6fDo28gcGFyYSBsaW1wYXIgbyBmaWx0cm9cclxuICBoYW5kbGVDbGVhckZpbHRlciA9ICgpID0+IHtcclxuICAgIGlmICh0aGlzLnN0YXRlLmZlYXR1cmVMYXllcikge1xyXG4gICAgICAvLyBSZW1vdmUgbyBmaWx0cm8gZGVmaW5pbmRvIGRlZmluaXRpb25FeHByZXNzaW9uIGNvbW8gdmF6aW8gb3UgbnVsbFxyXG4gICAgICB0aGlzLnN0YXRlLmZlYXR1cmVMYXllci5kZWZpbml0aW9uRXhwcmVzc2lvbiA9IG51bGxcclxuICAgICAgdGhpcy5zdGF0ZS5mZWF0dXJlTGF5ZXIucmVmcmVzaCgpXHJcbiAgICAgIGNvbnNvbGUubG9nKCdGaWx0cm8gcmVtb3ZpZG8gLSB0b2RvcyBvcyBhbGVydGFzIGRldmVtIGFwYXJlY2VyIG5vdmFtZW50ZScpXHJcbiAgICAgIFxyXG4gICAgICAvLyBBZ3VhcmRhIHVtIHBvdWNvIHBhcmEgZ2FyYW50aXIgcXVlIG8gZmlsdHJvIHNlamEgcmVtb3ZpZG9cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgLy8gVmVyaWZpY2Egc2UgbyBmaWx0cm8gZm9pIHJlbW92aWRvXHJcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmZlYXR1cmVMYXllci5kZWZpbml0aW9uRXhwcmVzc2lvbiB8fCB0aGlzLnN0YXRlLmZlYXR1cmVMYXllci5kZWZpbml0aW9uRXhwcmVzc2lvbiA9PT0gJycpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdGaWx0cm8gY29uZmlybWFkbyBjb21vIHJlbW92aWRvJylcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUmVzdGF1cmEgYSB2aXN1YWxpemHDp8OjbyBpbmljaWFsIGRvIG1hcGFcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5qaW11TWFwVmlldyAmJiB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcpIHtcclxuICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmluaXRpYWxFeHRlbnQpIHtcclxuICAgICAgICAgICAgLy8gUmVzdGF1cmEgYSBleHRlbnPDo28gaW5pY2lhbCBzYWx2YVxyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcuZ29Ubyh0aGlzLnN0YXRlLmluaXRpYWxFeHRlbnQsIHtcclxuICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwXHJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdWaXN1YWxpemHDp8OjbyBpbmljaWFsIHJlc3RhdXJhZGEnKVxyXG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGFvIHJlc3RhdXJhciB2aXN1YWxpemHDp8OjbyBpbmljaWFsOicsIGVycm9yKVxyXG4gICAgICAgICAgICAgIC8vIFNlIGZhbGhhciwgdGVudGEgZmF6ZXIgem9vbSBwYXJhIGEgY2FtYWRhIGNvbXBsZXRhXHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZmVhdHVyZUxheWVyICYmIHRoaXMuc3RhdGUuZmVhdHVyZUxheWVyLmZ1bGxFeHRlbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5nb1RvKHRoaXMuc3RhdGUuZmVhdHVyZUxheWVyLmZ1bGxFeHRlbnQsIHtcclxuICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDUwMFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBTZSBuw6NvIHRpdmVyIGV4dGVuc8OjbyBpbmljaWFsIHNhbHZhLCB0ZW50YSBmYXplciB6b29tIHBhcmEgYSBjYW1hZGEgY29tcGxldGFcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuZmVhdHVyZUxheWVyICYmIHRoaXMuc3RhdGUuZmVhdHVyZUxheWVyLmZ1bGxFeHRlbnQpIHtcclxuICAgICAgICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcuZ29Ubyh0aGlzLnN0YXRlLmZlYXR1cmVMYXllci5mdWxsRXh0ZW50LCB7XHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwXHJcbiAgICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnWm9vbSBwYXJhIGNhbWFkYSBjb21wbGV0YSBhcGxpY2FkbycpXHJcbiAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGFvIGZhemVyIHpvb20gcGFyYSBjYW1hZGEgY29tcGxldGE6JywgZXJyb3IpXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSwgMzAwKVxyXG4gICAgICBcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgaWRlYVNlYXJjaElucHV0OiAnJ1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gRnVuw6fDo28gcGFyYSBnZXJhciByZWxhdMOzcmlvIHVzYW5kbyBhIGZlcnJhbWVudGEgZGUgZ2VvcHJvY2Vzc2FtZW50b1xyXG4gIGhhbmRsZUdlbmVyYXRlUmVwb3J0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgLy8gRGVjbGFyYSB2YXJpw6F2ZWlzIG5vIGVzY29wbyBkYSBmdW7Dp8OjbyBwYXJhIHF1ZSBlc3RlamFtIGFjZXNzw612ZWlzIG5vIGNhdGNoXHJcbiAgICBsZXQgaWRlYU51bWJlciA9ICcnXHJcbiAgICBsZXQgcGFyYW1OYW1lID0gbnVsbFxyXG4gICAgbGV0IGV4ZWN1dGVVcmwgPSAnJ1xyXG4gICAgbGV0IHRva2VuID0gbnVsbFxyXG4gICAgXHJcbiAgICAvLyBWYWxpZGHDp8O1ZXMgaW5pY2lhaXNcclxuICAgIGlmICh0aGlzLnN0YXRlLmlkZWFTZWFyY2hJbnB1dCA9PT0gJycgfHwgdGhpcy5zdGF0ZS5pZGVhU2VhcmNoSW5wdXQudHJpbSgpID09PSAnJykge1xyXG4gICAgICBhbGVydCgnUG9yIGZhdm9yLCBkaWdpdGUgdW0gbsO6bWVybyBkZSBpZGVhIHBhcmEgZ2VyYXIgbyByZWxhdMOzcmlvLicpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGlkZWFOdW1iZXIgPSB0aGlzLnN0YXRlLmlkZWFTZWFyY2hJbnB1dC50cmltKClcclxuICAgIFxyXG4gICAgLy8gVmFsaWRhw6fDo28gZG8gZm9ybWF0byBkbyBuw7ptZXJvIGRlIGlkZWFcclxuICAgIC8vIEZvcm1hdG8gZXNwZXJhZG86IFhYWC5YLlhYWFhYWC9ZWVlZIChleDogMDAzLjkuNDI3Mzg0LzIwMjUpXHJcbiAgICBjb25zdCBpZGVhUGF0dGVybiA9IC9eXFxkezEsM31cXC5cXGR7MSwyfVxcLlxcZHsxLDZ9XFwvXFxkezR9JC9cclxuICAgIGlmICghaWRlYVBhdHRlcm4udGVzdChpZGVhTnVtYmVyKSkge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ0Zvcm1hdG8gZG8gbsO6bWVybyBkZSBpZGVhIHBvZGUgZXN0YXIgaW5jb3JyZXRvOicsIGlkZWFOdW1iZXIpXHJcbiAgICAgIGNvbnNvbGUud2FybignRm9ybWF0byBlc3BlcmFkbzogWFhYLlguWFhYWFhYL1lZWVkgKGV4OiAwMDMuOS40MjczODQvMjAyNSknKVxyXG4gICAgICAvLyBOw6NvIGJsb3F1ZWlhLCBhcGVuYXMgYXZpc2Egbm8gY29uc29sZVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBSZW1vdmUgZXNwYcOnb3MgZXh0cmFzIGUgY2FyYWN0ZXJlcyBpbnZpc8OtdmVpc1xyXG4gICAgaWRlYU51bWJlciA9IGlkZWFOdW1iZXIucmVwbGFjZSgvXFxzKy9nLCAnJykudHJpbSgpXHJcbiAgICBcclxuICAgIC8vIFZhbGlkYcOnw6NvIGRlIGNvbXByaW1lbnRvIG3DrW5pbW9cclxuICAgIGlmIChpZGVhTnVtYmVyLmxlbmd0aCA8IDEwKSB7XHJcbiAgICAgIGFsZXJ0KCdPIG7Dum1lcm8gZGUgaWRlYSBwYXJlY2UgZXN0YXIgaW5jb21wbGV0by4gVmVyaWZpcXVlIG8gZm9ybWF0bzogWFhYLlguWFhYWFhYL1lZWVknKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc29sZS5sb2coJz09PSBWQUxJREHDh8ODTyBETyBWQUxPUiA9PT0nKVxyXG4gICAgY29uc29sZS5sb2coJ1ZhbG9yIG9yaWdpbmFsOicsIHRoaXMuc3RhdGUuaWRlYVNlYXJjaElucHV0KVxyXG4gICAgY29uc29sZS5sb2coJ1ZhbG9yIHByb2Nlc3NhZG86JywgaWRlYU51bWJlcilcclxuICAgIGNvbnNvbGUubG9nKCdDb21wcmltZW50bzonLCBpZGVhTnVtYmVyLmxlbmd0aClcclxuICAgIGNvbnNvbGUubG9nKCdGb3JtYXRvIHbDoWxpZG86JywgaWRlYVBhdHRlcm4udGVzdChpZGVhTnVtYmVyKSlcclxuICAgIFxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSlcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zb2xlLmxvZygnSW5pY2lhbmRvIGdlcmHDp8OjbyBkZSByZWxhdMOzcmlvIHBhcmEgaWRlYTonLCBpZGVhTnVtYmVyKVxyXG4gICAgICBcclxuICAgICAgLy8gQ2FycmVnYSBJZGVudGl0eU1hbmFnZXIgcGFyYSBvYnRlciB0b2tlbiBkZSBhdXRlbnRpY2HDp8Ojb1xyXG4gICAgICBjb25zb2xlLmxvZygnQ2FycmVnYW5kbyBJZGVudGl0eU1hbmFnZXIgcGFyYSBhdXRlbnRpY2HDp8Ojby4uLicpXHJcbiAgICAgIGNvbnN0IGlkZW50aXR5TW9kdWxlcyA9IGF3YWl0IGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xyXG4gICAgICAgICdlc3JpL2lkZW50aXR5L0lkZW50aXR5TWFuYWdlcidcclxuICAgICAgXSlcclxuICAgICAgY29uc3QgW0lkZW50aXR5TWFuYWdlcl0gPSBpZGVudGl0eU1vZHVsZXNcclxuICAgICAgXHJcbiAgICAgIC8vIE9idMOpbSBvIHRva2VuIHBhcmEgYSBVUkwgZG8gc2VydmnDp28gKGrDoSBkZWNsYXJhZG8gbm8gaW7DrWNpbyBkYSBmdW7Dp8OjbylcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjcmVkZW50aWFsID0gSWRlbnRpdHlNYW5hZ2VyLmZpbmRDcmVkZW50aWFsKHRoaXMuR1BfU0VSVklDRV9VUkwpXHJcbiAgICAgICAgaWYgKGNyZWRlbnRpYWwgJiYgY3JlZGVudGlhbC50b2tlbikge1xyXG4gICAgICAgICAgdG9rZW4gPSBjcmVkZW50aWFsLnRva2VuXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnVG9rZW4gZW5jb250cmFkbyB2aWEgSWRlbnRpdHlNYW5hZ2VyJylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gVGVudGEgZ2VyYXIgdG9rZW4gYXV0b21hdGljYW1lbnRlXHJcbiAgICAgICAgICBjb25zdCBzZXJ2ZXJJbmZvID0gSWRlbnRpdHlNYW5hZ2VyLmZpbmRTZXJ2ZXJJbmZvKHRoaXMuR1BfU0VSVklDRV9VUkwpXHJcbiAgICAgICAgICBpZiAoc2VydmVySW5mbykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnT2J0ZW5kbyB0b2tlbiBhdXRvbWF0aWNhbWVudGUuLi4nKVxyXG4gICAgICAgICAgICBhd2FpdCBJZGVudGl0eU1hbmFnZXIuY2hlY2tTaWduSW5TdGF0dXModGhpcy5HUF9TRVJWSUNFX1VSTClcclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlZENyZWRlbnRpYWwgPSBJZGVudGl0eU1hbmFnZXIuZmluZENyZWRlbnRpYWwodGhpcy5HUF9TRVJWSUNFX1VSTClcclxuICAgICAgICAgICAgaWYgKHVwZGF0ZWRDcmVkZW50aWFsICYmIHVwZGF0ZWRDcmVkZW50aWFsLnRva2VuKSB7XHJcbiAgICAgICAgICAgICAgdG9rZW4gPSB1cGRhdGVkQ3JlZGVudGlhbC50b2tlblxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUb2tlbiBvYnRpZG8gYXV0b21hdGljYW1lbnRlJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAodG9rZW5FcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUud2FybignRXJybyBhbyBvYnRlciB0b2tlbiwgdGVudGFuZG8gc2VtIGF1dGVudGljYcOnw6NvOicsIHRva2VuRXJyb3IpXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vIEZ1bsOnw6NvIGF1eGlsaWFyIHBhcmEgYWRpY2lvbmFyIHRva2VuIMOgcyBVUkxzXHJcbiAgICAgIGNvbnN0IGFkZFRva2VuVG9VcmwgPSAodXJsKSA9PiB7XHJcbiAgICAgICAgaWYgKCF0b2tlbikge1xyXG4gICAgICAgICAgcmV0dXJuIHVybFxyXG4gICAgICAgIH1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgdXJsT2JqID0gbmV3IFVSTCh1cmwpXHJcbiAgICAgICAgICB1cmxPYmouc2VhcmNoUGFyYW1zLnNldCgndG9rZW4nLCB0b2tlbilcclxuICAgICAgICAgIHJldHVybiB1cmxPYmoudG9TdHJpbmcoKVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgIC8vIFNlIGEgVVJMIG7Do28gZm9yIGFic29sdXRhLCB0cmF0YSBjb21vIHN0cmluZ1xyXG4gICAgICAgICAgY29uc3Qgc2VwYXJhdG9yID0gdXJsLmluY2x1ZGVzKCc/JykgPyAnJicgOiAnPydcclxuICAgICAgICAgIHJldHVybiBgJHt1cmx9JHtzZXBhcmF0b3J9dG9rZW49JHtlbmNvZGVVUklDb21wb25lbnQodG9rZW4pfWBcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vIFByaW1laXJvLCB2YW1vcyBvYnRlciBpbmZvcm1hw6fDtWVzIHNvYnJlIGEgdGFzayBlc3BlY8OtZmljYSBwYXJhIGRlc2NvYnJpciBvcyBwYXLDom1ldHJvc1xyXG4gICAgICBjb25zb2xlLmxvZygnT2J0ZW5kbyBpbmZvcm1hw6fDtWVzIGRhIHRhc2sgZXNwZWPDrWZpY2EuLi4nKVxyXG4gICAgICBjb25zdCB0YXNrTmFtZUVuY29kZWQgPSBlbmNvZGVVUklDb21wb25lbnQodGhpcy5HUF9UQVNLX05BTUUpXHJcbiAgICAgIGNvbnN0IGluZm9VcmwgPSBhZGRUb2tlblRvVXJsKGAke3RoaXMuR1BfU0VSVklDRV9VUkx9LyR7dGFza05hbWVFbmNvZGVkfT9mPWpzb25gKVxyXG4gICAgICBjb25zb2xlLmxvZygnVVJMIGRlIGluZm9ybWHDp8O1ZXMgZGEgdGFzazonLCBpbmZvVXJsKVxyXG4gICAgICBcclxuICAgICAgLy8gVGVudGEgb2J0ZXIgaW5mb3JtYcOnw7VlcyBkYSB0YXNrIGVzcGVjw61maWNhIHByaW1laXJvXHJcbiAgICAgIGxldCBncEluZm9cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB0YXNrSW5mb1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goaW5mb1VybClcclxuICAgICAgICBpZiAodGFza0luZm9SZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgZ3BJbmZvID0gYXdhaXQgdGFza0luZm9SZXNwb25zZS5qc29uKClcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdJbmZvcm1hw6fDtWVzIGRhIHRhc2sgZXNwZWPDrWZpY2Egb2J0aWRhcyBjb20gc3VjZXNzbycpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnSW5mb3JtYcOnw7VlcyBjb21wbGV0YXMgZGEgdGFzazonLCBKU09OLnN0cmluZ2lmeShncEluZm8sIG51bGwsIDIpKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBTZSBmYWxoYXIsIHRlbnRhIGRhIEdQIGdlcmFsXHJcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ07Do28gZm9pIHBvc3PDrXZlbCBvYnRlciBpbmZvcm1hw6fDtWVzIGRhIHRhc2ssIHRlbnRhbmRvIGRhIEdQIGdlcmFsLi4uJylcclxuICAgICAgICAgIGNvbnN0IGdwSW5mb1VybCA9IGFkZFRva2VuVG9VcmwoYCR7dGhpcy5HUF9TRVJWSUNFX1VSTH0/Zj1qc29uYClcclxuICAgICAgICAgIGNvbnN0IGdwSW5mb1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goZ3BJbmZvVXJsKVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBpZiAoIWdwSW5mb1Jlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJybyBhbyBvYnRlciBpbmZvcm1hw6fDtWVzOiAke3Rhc2tJbmZvUmVzcG9uc2Uuc3RhdHVzfSAke3Rhc2tJbmZvUmVzcG9uc2Uuc3RhdHVzVGV4dH1gKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBncEluZm8gPSBhd2FpdCBncEluZm9SZXNwb25zZS5qc29uKClcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdVc2FuZG8gaW5mb3JtYcOnw7VlcyBkYSBHUCBnZXJhbCcpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnSW5mb3JtYcOnw7VlcyBjb21wbGV0YXMgZGEgR1A6JywgSlNPTi5zdHJpbmdpZnkoZ3BJbmZvLCBudWxsLCAyKSlcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGluZm9FcnJvcikge1xyXG4gICAgICAgIC8vIFNlIGZhbGhhciwgdGVudGEgZGEgR1AgZ2VyYWxcclxuICAgICAgICBjb25zb2xlLndhcm4oJ0Vycm8gYW8gb2J0ZXIgaW5mb3JtYcOnw7VlcyBkYSB0YXNrLCB0ZW50YW5kbyBkYSBHUCBnZXJhbC4uLicsIGluZm9FcnJvcilcclxuICAgICAgICBjb25zdCBncEluZm9VcmwgPSBhZGRUb2tlblRvVXJsKGAke3RoaXMuR1BfU0VSVklDRV9VUkx9P2Y9anNvbmApXHJcbiAgICAgICAgY29uc3QgZ3BJbmZvUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChncEluZm9VcmwpXHJcbiAgICAgICAgZ3BJbmZvID0gYXdhaXQgZ3BJbmZvUmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1VzYW5kbyBpbmZvcm1hw6fDtWVzIGRhIEdQIGdlcmFsIChmYWxsYmFjayknKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdJbmZvcm1hw6fDtWVzIGNvbXBsZXRhcyBkYSBHUDonLCBKU09OLnN0cmluZ2lmeShncEluZm8sIG51bGwsIDIpKVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvLyBEZXNjb2JyZSBxdWFsIMOpIG8gcGFyw6JtZXRybyBkZSBlbnRyYWRhIGRhIEdQXHJcbiAgICAgIC8vIElNUE9SVEFOVEU6IERldmVtb3MgdXNhciBleGF0YW1lbnRlIG8gbm9tZSBkbyBwYXLDom1ldHJvIHF1ZSBhIEdQIGVzcGVyYVxyXG4gICAgICAvLyBPIHdpZGdldCByZWNlYmUgbyB2YWxvciBkYSBjb2x1bmEgXCJpZGVhXCIsIG1hcyBlbnZpYSBjb20gbyBub21lIHF1ZSBhIEdQIGVzcGVyYVxyXG4gICAgICBsZXQgcGFyYW1OYW1lID0gbnVsbFxyXG4gICAgICBsZXQgcGFyYW1JbmZvID0gbnVsbFxyXG4gICAgICBcclxuICAgICAgaWYgKGdwSW5mby5wYXJhbWV0ZXJzICYmIEFycmF5LmlzQXJyYXkoZ3BJbmZvLnBhcmFtZXRlcnMpKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJz09PSBQQVLDgk1FVFJPUyBESVNQT07DjVZFSVMgTkEgR1AgPT09JylcclxuICAgICAgICBjb25zdCBhbGxQYXJhbXMgPSBncEluZm8ucGFyYW1ldGVycy5tYXAocCA9PiAoe1xyXG4gICAgICAgICAgbmFtZTogcC5uYW1lLFxyXG4gICAgICAgICAgZGlzcGxheU5hbWU6IHAuZGlzcGxheU5hbWUgfHwgcC5uYW1lLFxyXG4gICAgICAgICAgZGF0YVR5cGU6IHAuZGF0YVR5cGUsXHJcbiAgICAgICAgICBkaXJlY3Rpb246IHAuZGlyZWN0aW9uLFxyXG4gICAgICAgICAgcGFyYW1ldGVyVHlwZTogcC5wYXJhbWV0ZXJUeXBlLFxyXG4gICAgICAgICAgcmVxdWlyZWQ6IHAucGFyYW1ldGVyVHlwZSA9PT0gJ2VzcmlHUFBhcmFtZXRlclR5cGVSZXF1aXJlZCcgfHwgcC5yZXF1aXJlZCA9PT0gdHJ1ZVxyXG4gICAgICAgIH0pKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUb2RvcyBvcyBwYXLDom1ldHJvczonLCBKU09OLnN0cmluZ2lmeShhbGxQYXJhbXMsIG51bGwsIDIpKVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFByb2N1cmEgcGVsbyBwcmltZWlybyBwYXLDom1ldHJvIGRlIGVudHJhZGEgKGlucHV0KVxyXG4gICAgICAgIGNvbnN0IGlucHV0UGFyYW1zID0gZ3BJbmZvLnBhcmFtZXRlcnMuZmlsdGVyKHAgPT4gXHJcbiAgICAgICAgICAocC5kaXJlY3Rpb24gPT09ICdlc3JpR1BQYXJhbWV0ZXJEaXJlY3Rpb25JbnB1dCcgfHwgcC5kaXJlY3Rpb24gPT09ICdHUFBhcmFtZXRlckRpcmVjdGlvbklucHV0JykgJiZcclxuICAgICAgICAgIHAubmFtZVxyXG4gICAgICAgIClcclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZygnUGFyw6JtZXRyb3MgZGUgZW50cmFkYSBlbmNvbnRyYWRvczonLCBpbnB1dFBhcmFtcy5tYXAocCA9PiAoe1xyXG4gICAgICAgICAgbmFtZTogcC5uYW1lLFxyXG4gICAgICAgICAgZGlzcGxheU5hbWU6IHAuZGlzcGxheU5hbWUgfHwgcC5uYW1lLFxyXG4gICAgICAgICAgZGF0YVR5cGU6IHAuZGF0YVR5cGUsXHJcbiAgICAgICAgICByZXF1aXJlZDogcC5wYXJhbWV0ZXJUeXBlID09PSAnZXNyaUdQUGFyYW1ldGVyVHlwZVJlcXVpcmVkJyB8fCBwLnJlcXVpcmVkID09PSB0cnVlXHJcbiAgICAgICAgfSkpKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChpbnB1dFBhcmFtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAvLyBVc2EgbyBwcmltZWlybyBwYXLDom1ldHJvIGRlIGVudHJhZGEgKHF1ZSDDqSBvIHF1ZSBhIEdQIGVzcGVyYSlcclxuICAgICAgICAgIHBhcmFtSW5mbyA9IGlucHV0UGFyYW1zWzBdXHJcbiAgICAgICAgICBwYXJhbU5hbWUgPSBwYXJhbUluZm8ubmFtZSAvLyBVc2EgZXhhdGFtZW50ZSBvIG5vbWUgcXVlIGEgR1AgZXNwZXJhIChwb2RlIHRlciBjYXJhY3RlcmVzIGVzcGVjaWFpcylcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCc9PT0gUEFSw4JNRVRSTyBTRUxFQ0lPTkFETyA9PT0nKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ05vbWUgdMOpY25pY28gZG8gcGFyw6JtZXRybyAoc2Vyw6EgdXNhZG8gbm8gcmVxdWVzdCk6JywgcGFyYW1OYW1lKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ05vbWUgZGUgZXhpYmnDp8OjbyAobGFiZWwgbmEgaW50ZXJmYWNlKTonLCBwYXJhbUluZm8uZGlzcGxheU5hbWUgfHwgcGFyYW1JbmZvLm5hbWUpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnRGV0YWxoZXMgY29tcGxldG9zOicsIHtcclxuICAgICAgICAgICAgbmFtZTogcGFyYW1JbmZvLm5hbWUsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBwYXJhbUluZm8uZGlzcGxheU5hbWUgfHwgcGFyYW1JbmZvLm5hbWUsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiBwYXJhbUluZm8uZGF0YVR5cGUsXHJcbiAgICAgICAgICAgIGRpcmVjdGlvbjogcGFyYW1JbmZvLmRpcmVjdGlvbixcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IHBhcmFtSW5mby5wYXJhbWV0ZXJUeXBlID09PSAnZXNyaUdQUGFyYW1ldGVyVHlwZVJlcXVpcmVkJyB8fCBwYXJhbUluZm8ucmVxdWlyZWQgPT09IHRydWVcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ05lbmh1bSBwYXLDom1ldHJvIGRlIGVudHJhZGEgZW5jb250cmFkbyBuYSBHUCEnKVxyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOw6NvIGZvaSBwb3Nzw612ZWwgaWRlbnRpZmljYXIgbyBwYXLDom1ldHJvIGRlIGVudHJhZGEgZGEgZmVycmFtZW50YSBkZSBnZW9wcm9jZXNzYW1lbnRvLicpXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ07Do28gZm9pIHBvc3PDrXZlbCBvYnRlciBwYXLDom1ldHJvcyBkYSBHUCEnKVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTsOjbyBmb2kgcG9zc8OtdmVsIG9idGVyIGluZm9ybWHDp8O1ZXMgZG9zIHBhcsOibWV0cm9zIGRhIGZlcnJhbWVudGEgZGUgZ2VvcHJvY2Vzc2FtZW50by4nKVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvLyBDb25maXJtYSBxdWFsIHBhcsOibWV0cm8gc2Vyw6EgdXNhZG8gKGRldmUgc2VyIGV4YXRhbWVudGUgbyBxdWUgYSBHUCBlc3BlcmEpXHJcbiAgICAgIGNvbnNvbGUubG9nKCc9PT0gUEFSw4JNRVRSTyBQQVJBIEVOVklBUiDDgCBHUCA9PT0nKVxyXG4gICAgICBjb25zb2xlLmxvZygnTm9tZSBkbyBwYXLDom1ldHJvIChleGF0YW1lbnRlIGNvbW8gYSBHUCBlc3BlcmEpOicsIHBhcmFtTmFtZSlcclxuICAgICAgY29uc29sZS5sb2coJ1ZhbG9yIHF1ZSBzZXLDoSBlbnZpYWRvIChkYSBjb2x1bmEgaWRlYSBkbyB3aWRnZXQpOicsIGlkZWFOdW1iZXIpXHJcbiAgICAgIGNvbnNvbGUubG9nKCdEZXRhbGhlcyBjb21wbGV0b3MgZG8gcGFyw6JtZXRybzonLCBwYXJhbUluZm8pXHJcbiAgICAgIFxyXG4gICAgICAvLyBWZXJpZmljYSBvIHRpcG8gZG8gcGFyw6JtZXRybyBwYXJhIGZvcm1hdGFyIGNvcnJldGFtZW50ZVxyXG4gICAgICBsZXQgcGFyYW1WYWx1ZSA9IGlkZWFOdW1iZXJcclxuICAgICAgaWYgKHBhcmFtSW5mbykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaXBvIGRlIGRhZG8gZG8gcGFyw6JtZXRybzonLCBwYXJhbUluZm8uZGF0YVR5cGUpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RpcG8gZGUgcGFyw6JtZXRybzonLCBwYXJhbUluZm8ucGFyYW1ldGVyVHlwZSlcclxuICAgICAgICBcclxuICAgICAgICAvLyBTZSBvIHBhcsOibWV0cm8gZm9yIGRvIHRpcG8gR1BTdHJpbmcgb3Ugc2ltaWxhciwgZW52aWEgY29tbyBzdHJpbmdcclxuICAgICAgICAvLyBTZSBmb3IgVVJMIG91IG91dHJvIHRpcG8gY29tcGxleG8sIHBvZGUgcHJlY2lzYXIgZGUgZm9ybWF0byBkaWZlcmVudGVcclxuICAgICAgICBpZiAocGFyYW1JbmZvLmRhdGFUeXBlID09PSAnR1BTdHJpbmcnIHx8IHBhcmFtSW5mby5kYXRhVHlwZSA9PT0gJ2VzcmlHUFR5cGVTdHJpbmcnKSB7XHJcbiAgICAgICAgICBwYXJhbVZhbHVlID0gU3RyaW5nKGlkZWFOdW1iZXIpXHJcbiAgICAgICAgfSBlbHNlIGlmIChwYXJhbUluZm8uZGF0YVR5cGUgPT09ICdHUERvdWJsZScgfHwgcGFyYW1JbmZvLmRhdGFUeXBlID09PSAnZXNyaUdQVHlwZURvdWJsZScgfHwgXHJcbiAgICAgICAgICAgICAgICAgICBwYXJhbUluZm8uZGF0YVR5cGUgPT09ICdHUExvbmcnIHx8IHBhcmFtSW5mby5kYXRhVHlwZSA9PT0gJ2VzcmlHUFR5cGVMb25nJykge1xyXG4gICAgICAgICAgLy8gU2UgZm9yIG51bcOpcmljbywgdGVudGEgY29udmVydGVyXHJcbiAgICAgICAgICBjb25zdCBudW1WYWx1ZSA9IHBhcnNlRmxvYXQoaWRlYU51bWJlcilcclxuICAgICAgICAgIGlmICghaXNOYU4obnVtVmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHBhcmFtVmFsdWUgPSBudW1WYWx1ZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8gUHJlcGFyYSBvcyBwYXLDom1ldHJvcyBwYXJhIGEgZXhlY3XDp8Ojb1xyXG4gICAgICAvLyBJTVBPUlRBTlRFOiBmPWpzb24gdmFpIG5hIFVSTCwgbsOjbyBubyBib2R5XHJcbiAgICAgIC8vIEFwZW5hcyBvcyBwYXLDom1ldHJvcyBkYSBHUCB2w6NvIG5vIGJvZHlcclxuICAgICAgY29uc3QgcGFyYW1zID0ge1xyXG4gICAgICAgIFtwYXJhbU5hbWVdOiBwYXJhbVZhbHVlXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGNvbnNvbGUubG9nKCc9PT0gUEFSw4JNRVRST1MgUEFSQSBFTlZJQVIgPT09JylcclxuICAgICAgY29uc29sZS5sb2coJ1BhcsOibWV0cm9zIHByZXBhcmFkb3MgKHBhcmEgbyBib2R5KTonLCBwYXJhbXMpXHJcbiAgICAgIGNvbnNvbGUubG9nKCdWYWxvciBkbyBwYXLDom1ldHJvOicsIHBhcmFtVmFsdWUsICdUaXBvOicsIHR5cGVvZiBwYXJhbVZhbHVlKVxyXG4gICAgICBjb25zb2xlLmxvZygnTm9tZSBkbyBwYXLDom1ldHJvIChleGF0byk6JywgcGFyYW1OYW1lKVxyXG4gICAgICBjb25zb2xlLmxvZygnTm9tZSBkbyBwYXLDom1ldHJvIChKU09OKTonLCBKU09OLnN0cmluZ2lmeShwYXJhbU5hbWUpKVxyXG4gICAgICBcclxuICAgICAgLy8gRm9ybWF0YSBvcyBwYXLDom1ldHJvcyBjb21vIGZvcm0tdXJsZW5jb2RlZFxyXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxyXG4gICAgICBcclxuICAgICAgLy8gQWRpY2lvbmEgb3MgcGFyw6JtZXRyb3MgKGV4Y2V0byBmPWpzb24gcXVlIHZhaSBuYSBVUkwpXHJcbiAgICAgIC8vIElNUE9SVEFOVEU6IFVzYSBvIG5vbWUgZXhhdG8gZG8gcGFyw6JtZXRybyBjb21vIGVzdMOhIG5hIEdQIChwb2RlIHRlciBjYXJhY3RlcmVzIGVzcGVjaWFpcylcclxuICAgICAgY29uc29sZS5sb2coJz09PSBQUkVQQVJBTkRPIEZPUk0gREFUQSA9PT0nKVxyXG4gICAgICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICBpZiAoa2V5ICE9PSAnZicpIHtcclxuICAgICAgICAgIGNvbnN0IHBhcmFtS2V5ID0ga2V5IC8vIFVzYSBleGF0YW1lbnRlIG8gbm9tZSBxdWUgdmVpbyBkYSBHUCAoZXg6IFwiTsKwIElERUFcIiwgXCJ2YWxvcl9hbGVydGFcIiwgZXRjLilcclxuICAgICAgICAgIGNvbnN0IHBhcmFtVmFsID0gU3RyaW5nKHBhcmFtc1trZXldKVxyXG4gICAgICAgICAgZm9ybURhdGEuYXBwZW5kKHBhcmFtS2V5LCBwYXJhbVZhbClcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGBQYXLDom1ldHJvIGFkaWNpb25hZG86IG5vbWU9XCIke3BhcmFtS2V5fVwiIHZhbG9yPVwiJHtwYXJhbVZhbH1cImApXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgICAtIE5vbWUgKEpTT04pOiAke0pTT04uc3RyaW5naWZ5KHBhcmFtS2V5KX1gKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coYCAgLSBOb21lIChieXRlcyk6ICR7QXJyYXkuZnJvbShwYXJhbUtleSkubWFwKGMgPT4gYy5jaGFyQ29kZUF0KDApKS5qb2luKCcsJyl9YClcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGAgIC0gVmFsb3IgKEpTT04pOiAke0pTT04uc3RyaW5naWZ5KHBhcmFtVmFsKX1gKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IGZvcm1EYXRhU3RyaW5nID0gZm9ybURhdGEudG9TdHJpbmcoKVxyXG4gICAgICBjb25zb2xlLmxvZygnRm9ybURhdGEgY29tcGxldG8gKHN0cmluZyk6JywgZm9ybURhdGFTdHJpbmcpXHJcbiAgICAgIGNvbnNvbGUubG9nKCdGb3JtRGF0YSBjb21wbGV0byAoVVJMIGRlY29kZWQpOicsIGRlY29kZVVSSUNvbXBvbmVudChmb3JtRGF0YVN0cmluZykpXHJcbiAgICAgIFxyXG4gICAgICAvLyBBZGljaW9uYSB0b2tlbiBhbyBib2R5XHJcbiAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndG9rZW4nLCB0b2tlbilcclxuICAgICAgICBjb25zb2xlLmxvZygnVG9rZW4gYWRpY2lvbmFkbyBhbyBib2R5JylcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8gRnVuw6fDo28gYXV4aWxpYXIgcGFyYSBmYXplciBhIHJlcXVpc2nDp8Ojb1xyXG4gICAgICBjb25zdCBtYWtlRXhlY3V0ZVJlcXVlc3QgPSBhc3luYyAodXJsKSA9PiB7XHJcbiAgICAgICAgLy8gQWRpY2lvbmEgdG9rZW4gbmEgVVJMIHRhbWLDqW0gKGFsZ3VucyBzZXJ2aWRvcmVzIEFyY0dJUyBleGlnZW0gaXNzbylcclxuICAgICAgICBsZXQgZmluYWxVcmwgPSB1cmxcclxuICAgICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICAgIGNvbnN0IHVybFdpdGhUb2tlbiA9IG5ldyBVUkwodXJsKVxyXG4gICAgICAgICAgdXJsV2l0aFRva2VuLnNlYXJjaFBhcmFtcy5zZXQoJ3Rva2VuJywgdG9rZW4pXHJcbiAgICAgICAgICB1cmxXaXRoVG9rZW4uc2VhcmNoUGFyYW1zLnNldCgnZicsICdqc29uJylcclxuICAgICAgICAgIGZpbmFsVXJsID0gdXJsV2l0aFRva2VuLnRvU3RyaW5nKClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gU2UgbsOjbyB0aXZlciB0b2tlbiwgYWRpY2lvbmEgYXBlbmFzIGY9anNvblxyXG4gICAgICAgICAgY29uc3QgdXJsT2JqID0gbmV3IFVSTCh1cmwpXHJcbiAgICAgICAgICB1cmxPYmouc2VhcmNoUGFyYW1zLnNldCgnZicsICdqc29uJylcclxuICAgICAgICAgIGZpbmFsVXJsID0gdXJsT2JqLnRvU3RyaW5nKClcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RlbnRhbmRvIFVSTDonLCBmaW5hbFVybClcclxuICAgICAgICBjb25zb2xlLmxvZygnQm9keSAoZm9ybURhdGEpOicsIGZvcm1EYXRhLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1Rva2VuIHByZXNlbnRlOicsICEhdG9rZW4pXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1BhcsOibWV0cm9zIGVudmlhZG9zOicsIE9iamVjdC5rZXlzKHBhcmFtcykpXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChmaW5hbFVybCwge1xyXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJvZHk6IGZvcm1EYXRhXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8gVmVyaWZpY2Egc2UgYSB0YXNrIMOpIGFzc8OtbmNyb25hIHBhcmEgZGVjaWRpciBxdWFsIGVuZHBvaW50IHVzYXJcclxuICAgICAgY29uc3QgaXNBc3luYyA9IGdwSW5mby5leGVjdXRpb25UeXBlID09PSAnZXNyaUV4ZWN1dGlvblR5cGVBc3luY2hyb25vdXMnXHJcbiAgICAgIGNvbnNvbGUubG9nKCc9PT0gVEVOVEFORE8gRVhFQ1VUQVIgR1AgPT09JylcclxuICAgICAgY29uc29sZS5sb2coJ1RpcG8gZGUgZXhlY3XDp8OjbzonLCBncEluZm8uZXhlY3V0aW9uVHlwZSlcclxuICAgICAgY29uc29sZS5sb2coJ8OJIGFzc8OtbmNyb25hPycsIGlzQXN5bmMpXHJcbiAgICAgIGNvbnNvbGUubG9nKCdUZW50YW5kbyBwcmltZWlybyBjb20gdGFzayBlc3BlY8OtZmljYTonLCB0aGlzLkdQX1RBU0tfTkFNRSlcclxuICAgICAgY29uc29sZS5sb2coJ1BhcsOibWV0cm8gcXVlIHNlcsOhIGVudmlhZG86JywgcGFyYW1OYW1lKVxyXG4gICAgICBjb25zb2xlLmxvZygnVmFsb3IgcXVlIHNlcsOhIGVudmlhZG86JywgaWRlYU51bWJlcilcclxuICAgICAgXHJcbiAgICAgIC8vIFNlIGZvciBhc3PDrW5jcm9uYSwgdXNhIHN1Ym1pdEpvYjsgY2FzbyBjb250csOhcmlvLCB1c2EgZXhlY3V0ZVxyXG4gICAgICBpZiAoaXNBc3luYykge1xyXG4gICAgICAgIGV4ZWN1dGVVcmwgPSBgJHt0aGlzLkdQX1NFUlZJQ0VfVVJMfS8ke3Rhc2tOYW1lRW5jb2RlZH0vc3VibWl0Sm9iYFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdVc2FuZG8gZW5kcG9pbnQgL3N1Ym1pdEpvYiAodGFyZWZhIGFzc8OtbmNyb25hKTonLCBleGVjdXRlVXJsKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGV4ZWN1dGVVcmwgPSBgJHt0aGlzLkdQX1NFUlZJQ0VfVVJMfS8ke3Rhc2tOYW1lRW5jb2RlZH0vZXhlY3V0ZWBcclxuICAgICAgICBjb25zb2xlLmxvZygnVXNhbmRvIGVuZHBvaW50IC9leGVjdXRlICh0YXJlZmEgc8OtbmNyb25hKTonLCBleGVjdXRlVXJsKVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBsZXQgZXhlY3V0ZVJlc3BvbnNlID0gYXdhaXQgbWFrZUV4ZWN1dGVSZXF1ZXN0KGV4ZWN1dGVVcmwpXHJcbiAgICAgIFxyXG4gICAgICAvLyBTZSBkZXIgZXJybyA1MDAsIHBvZGUgc2VyIHF1ZSBvIGVuZHBvaW50IGRhIHRhc2sgZXNwZWPDrWZpY2EgbsOjbyBleGlzdGFcclxuICAgICAgLy8gVGVudGEgY29tIG8gZW5kcG9pbnQgZGEgR1AgcmFpelxyXG4gICAgICBpZiAoIWV4ZWN1dGVSZXNwb25zZS5vaykge1xyXG4gICAgICAgIGxldCByZXN1bHRUZXh0ID0gYXdhaXQgZXhlY3V0ZVJlc3BvbnNlLnRleHQoKVxyXG4gICAgICAgIGNvbnNvbGUud2FybignUHJpbWVpcmEgdGVudGF0aXZhIGZhbGhvdS4gU3RhdHVzOicsIGV4ZWN1dGVSZXNwb25zZS5zdGF0dXMpXHJcbiAgICAgICAgY29uc29sZS53YXJuKCdSZXNwb3N0YSAocHJpbWVpcm9zIDUwMCBjaGFycyk6JywgcmVzdWx0VGV4dC5zdWJzdHJpbmcoMCwgNTAwKSlcclxuICAgICAgICBcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVzdWx0SnNvbiA9IEpTT04ucGFyc2UocmVzdWx0VGV4dClcclxuICAgICAgICAgIGlmIChyZXN1bHRKc29uLmVycm9yICYmIHJlc3VsdEpzb24uZXJyb3IuY29kZSA9PT0gNTAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignRXJybyA1MDAgY29tIHRhc2sgZXNwZWPDrWZpY2EsIHRlbnRhbmRvIGNvbSBlbmRwb2ludCBkYSBHUCByYWl6Li4uJylcclxuICAgICAgICAgICAgLy8gVGVudGEgY29tIG8gZW5kcG9pbnQgcmFpeiB1c2FuZG8gbyBtZXNtbyB0aXBvIChzdWJtaXRKb2Igb3UgZXhlY3V0ZSlcclxuICAgICAgICAgICAgaWYgKGlzQXN5bmMpIHtcclxuICAgICAgICAgICAgICBleGVjdXRlVXJsID0gYCR7dGhpcy5HUF9TRVJWSUNFX1VSTH0vc3VibWl0Sm9iYFxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUZW50YW5kbyBjb20gZW5kcG9pbnQgZGEgR1AgcmFpeiAoc3VibWl0Sm9iKTonLCBleGVjdXRlVXJsKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGV4ZWN1dGVVcmwgPSBgJHt0aGlzLkdQX1NFUlZJQ0VfVVJMfS9leGVjdXRlYFxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUZW50YW5kbyBjb20gZW5kcG9pbnQgZGEgR1AgcmFpeiAoZXhlY3V0ZSk6JywgZXhlY3V0ZVVybClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBleGVjdXRlUmVzcG9uc2UgPSBhd2FpdCBtYWtlRXhlY3V0ZVJlcXVlc3QoZXhlY3V0ZVVybClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGFvIHBhcnNlYXIgcmVzcG9zdGE6JywgZSlcclxuICAgICAgICAgIC8vIFNlIG7Do28gY29uc2VndWlyIHBhcnNlYXIsIGNvbnRpbnVhIGNvbSBvIGVycm8gb3JpZ2luYWxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vIEzDqiBhIHJlc3Bvc3RhIG1lc21vIHNlIG7Do28gZm9yIE9LIHBhcmEgdmVyIG8gZXJybyBkZXRhbGhhZG9cclxuICAgICAgbGV0IHJlc3VsdFxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHJlc3VsdCA9IGF3YWl0IGV4ZWN1dGVSZXNwb25zZS5qc29uKClcclxuICAgICAgICBjb25zb2xlLmxvZygnUmVzcG9zdGEgZG8gZXhlY3V0ZSAoSlNPTik6JywgSlNPTi5zdHJpbmdpZnkocmVzdWx0LCBudWxsLCAyKSlcclxuICAgICAgfSBjYXRjaCAoanNvbkVycm9yKSB7XHJcbiAgICAgICAgLy8gU2UgbsOjbyBjb25zZWd1aXIgbGVyIGNvbW8gSlNPTiwgbMOqIGNvbW8gdGV4dG9cclxuICAgICAgICBjb25zdCB0ZXh0UmVzcG9uc2UgPSBhd2FpdCBleGVjdXRlUmVzcG9uc2UudGV4dCgpXHJcbiAgICAgICAgY29uc29sZS5lcnJvcignUmVzcG9zdGEgbsOjbyDDqSBKU09OOicsIHRleHRSZXNwb25zZSlcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdTdGF0dXMgSFRUUDonLCBleGVjdXRlUmVzcG9uc2Uuc3RhdHVzLCBleGVjdXRlUmVzcG9uc2Uuc3RhdHVzVGV4dClcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm8gYW8gZXhlY3V0YXIgdGFyZWZhOiAke2V4ZWN1dGVSZXNwb25zZS5zdGF0dXN9ICR7ZXhlY3V0ZVJlc3BvbnNlLnN0YXR1c1RleHR9IC0gUmVzcG9zdGE6ICR7dGV4dFJlc3BvbnNlLnN1YnN0cmluZygwLCA1MDApfWApXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGlmICghZXhlY3V0ZVJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgLy8gU2UgYSByZXNwb3N0YSB0ZW0gdW0gZXJybyBubyBKU09OLCB1c2EgZWxlXHJcbiAgICAgICAgaWYgKHJlc3VsdC5lcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignPT09IEVSUk8gREVUQUxIQURPIERBIEdQID09PScpXHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdDw7NkaWdvIGRvIGVycm86JywgcmVzdWx0LmVycm9yLmNvZGUpXHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdNZW5zYWdlbTonLCByZXN1bHQuZXJyb3IubWVzc2FnZSlcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0RldGFsaGVzOicsIHJlc3VsdC5lcnJvci5kZXRhaWxzKVxyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBjb21wbGV0bzonLCBKU09OLnN0cmluZ2lmeShyZXN1bHQuZXJyb3IsIG51bGwsIDIpKVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAvLyBNZW5zYWdlbSBkZSBlcnJvIG1haXMgYW1pZ8OhdmVsXHJcbiAgICAgICAgICBsZXQgZXJyb3JNZXNzYWdlID0gJ0Vycm8gYW8gZXhlY3V0YXIgYSBmZXJyYW1lbnRhIGRlIGdlb3Byb2Nlc3NhbWVudG8uXFxuXFxuJ1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBpZiAocmVzdWx0LmVycm9yLmNvZGUgPT09IDUwMCkge1xyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgKz0gJ0Vycm8gaW50ZXJubyBkbyBzZXJ2aWRvciAoNTAwKS5cXG5cXG4nXHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSArPSAnUG9zc8OtdmVpcyBjYXVzYXM6XFxuJ1xyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgKz0gJzEuIE8gbsO6bWVybyBkZSBpZGVhIHBvZGUgbsOjbyBleGlzdGlyIG5vIHNlcnZpZG9yXFxuJ1xyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgKz0gJzIuIFByb2JsZW1hIG5vIHByb2Nlc3NhbWVudG8gZGEgZmVycmFtZW50YVxcbidcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlICs9ICczLiBPIHNlcnZpZG9yIHBvZGUgZXN0YXIgdGVtcG9yYXJpYW1lbnRlIGluZGlzcG9uw612ZWxcXG5cXG4nXHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSArPSBgVmFsb3IgZW52aWFkbzogJHtpZGVhTnVtYmVyfVxcbmBcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlICs9IGBQYXLDom1ldHJvIHVzYWRvOiAke3BhcmFtTmFtZX1cXG5cXG5gXHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSArPSAnVmVyaWZpcXVlOlxcbidcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlICs9ICctIFNlIG8gbsO6bWVybyBkZSBpZGVhIGVzdMOhIGNvcnJldG9cXG4nXHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSArPSAnLSBTZSBvIHZhbG9yIGV4aXN0ZSBuYSBjYW1hZGEgZGUgYWxlcnRhc1xcbidcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlICs9ICctIEFicmEgbyBjb25zb2xlIChGMTIpIHBhcmEgbWFpcyBkZXRhbGhlcydcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSArPSBgQ8OzZGlnbzogJHtyZXN1bHQuZXJyb3IuY29kZX1cXG5gXHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSArPSBgTWVuc2FnZW06ICR7cmVzdWx0LmVycm9yLm1lc3NhZ2V9XFxuXFxuYFxyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmVycm9yLmRldGFpbHMgJiYgcmVzdWx0LmVycm9yLmRldGFpbHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgIGVycm9yTWVzc2FnZSArPSBgRGV0YWxoZXM6ICR7cmVzdWx0LmVycm9yLmRldGFpbHMuam9pbignLCAnKX1cXG5cXG5gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgYWxlcnQoZXJyb3JNZXNzYWdlKVxyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvIG5hIEdQOiAke0pTT04uc3RyaW5naWZ5KHJlc3VsdC5lcnJvcil9YClcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gU2UgbsOjbyB0aXZlciBjYW1wbyBlcnJvciwgbWFzIG8gc3RhdHVzIG7Do28gw6kgT0ssIG1vc3RyYSBvIHJlc3VsdGFkbyBjb21wbGV0b1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gSFRUUDonLCBleGVjdXRlUmVzcG9uc2Uuc3RhdHVzLCBleGVjdXRlUmVzcG9uc2Uuc3RhdHVzVGV4dClcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdSZXNwb3N0YSBjb21wbGV0YTonLCByZXN1bHQpXHJcbiAgICAgICAgYWxlcnQoYEVycm8gYW8gZXhlY3V0YXIgdGFyZWZhOiAke2V4ZWN1dGVSZXNwb25zZS5zdGF0dXN9ICR7ZXhlY3V0ZVJlc3BvbnNlLnN0YXR1c1RleHR9XFxuXFxuVmVyaWZpcXVlIG8gY29uc29sZSAoRjEyKSBwYXJhIG1haXMgZGV0YWxoZXMuYClcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm8gYW8gZXhlY3V0YXIgdGFyZWZhOiAke2V4ZWN1dGVSZXNwb25zZS5zdGF0dXN9ICR7ZXhlY3V0ZVJlc3BvbnNlLnN0YXR1c1RleHR9IC0gJHtKU09OLnN0cmluZ2lmeShyZXN1bHQpfWApXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vIFZlcmlmaWNhIHNlIGEgcmVzcG9zdGEgY29udMOpbSB1bSBqb2JJZCAodGFyZWZhIGFzc8OtbmNyb25hKVxyXG4gICAgICAvLyBQYXJhIHRhcmVmYXMgYXNzw61uY3JvbmFzLCBzdWJtaXRKb2Igc2VtcHJlIHJldG9ybmEgam9iSWRcclxuICAgICAgaWYgKHJlc3VsdC5qb2JJZCB8fCBpc0FzeW5jKSB7XHJcbiAgICAgICAgY29uc3Qgam9iSWQgPSByZXN1bHQuam9iSWRcclxuICAgICAgICBpZiAoIWpvYklkKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RhcmVmYSBhc3PDrW5jcm9uYSBtYXMgbsOjbyByZWNlYmV1IGpvYklkIG5hIHJlc3Bvc3RhJylcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RhcmVmYSBhc3PDrW5jcm9uYSBkZXRlY3RhZGEuIEpvYiBJRDonLCBqb2JJZClcclxuICAgICAgICBcclxuICAgICAgICAvLyBQb2xsaW5nIGRvIHN0YXR1cyBkbyBqb2JcclxuICAgICAgICBsZXQgYXR0ZW1wdHMgPSAwXHJcbiAgICAgICAgY29uc3QgbWF4QXR0ZW1wdHMgPSA2MFxyXG4gICAgICAgIGxldCBqb2JTdGF0dXMgPSBudWxsXHJcbiAgICAgICAgXHJcbiAgICAgICAgd2hpbGUgKGF0dGVtcHRzIDwgbWF4QXR0ZW1wdHMpIHtcclxuICAgICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCAxMDAwKSlcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gVVJMIHBhcmEgdmVyaWZpY2FyIHN0YXR1cyBkbyBqb2JcclxuICAgICAgICAgIC8vIFVzYSBhIG1lc21hIFVSTCBiYXNlIHF1ZSBmdW5jaW9ub3UgKHBvZGUgc2VyIHN1Ym1pdEpvYiBvdSBleGVjdXRlKVxyXG4gICAgICAgICAgY29uc3QgYmFzZVVybCA9IGV4ZWN1dGVVcmwucmVwbGFjZSgnL3N1Ym1pdEpvYicsICcnKS5yZXBsYWNlKCcvZXhlY3V0ZScsICcnKVxyXG4gICAgICAgICAgY29uc3Qgc3RhdHVzVXJsID0gdG9rZW4gXHJcbiAgICAgICAgICAgID8gYCR7YmFzZVVybH0vam9icy8ke2pvYklkfT90b2tlbj0ke3Rva2VufSZmPWpzb25gXHJcbiAgICAgICAgICAgIDogYCR7YmFzZVVybH0vam9icy8ke2pvYklkfT9mPWpzb25gXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdWZXJpZmljYW5kbyBzdGF0dXMgZG8gam9iOicsIHN0YXR1c1VybClcclxuICAgICAgICAgIGNvbnN0IHN0YXR1c1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goc3RhdHVzVXJsKVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBpZiAoIXN0YXR1c1Jlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJybyBhbyB2ZXJpZmljYXIgc3RhdHVzIGRvIGpvYjogJHtzdGF0dXNSZXNwb25zZS5zdGF0dXN9YClcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgam9iU3RhdHVzID0gYXdhaXQgc3RhdHVzUmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgU3RhdHVzIGRvIGpvYiAodGVudGF0aXZhICR7YXR0ZW1wdHMgKyAxfSk6YCwgam9iU3RhdHVzLmpvYlN0YXR1cylcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgaWYgKGpvYlN0YXR1cy5qb2JTdGF0dXMgPT09ICdlc3JpSm9iU3VjY2VlZGVkJykge1xyXG4gICAgICAgICAgICAvLyBPYnTDqW0gb3MgcmVzdWx0YWRvc1xyXG4gICAgICAgICAgICAvLyBVc2EgYSBtZXNtYSBVUkwgYmFzZSBxdWUgZnVuY2lvbm91IChwb2RlIHNlciBzdWJtaXRKb2Igb3UgZXhlY3V0ZSlcclxuICAgICAgICAgICAgY29uc3QgYmFzZVVybCA9IGV4ZWN1dGVVcmwucmVwbGFjZSgnL3N1Ym1pdEpvYicsICcnKS5yZXBsYWNlKCcvZXhlY3V0ZScsICcnKVxyXG4gICAgICAgICAgICBjb25zdCByZXN1bHRVcmwgPSB0b2tlblxyXG4gICAgICAgICAgICAgID8gYCR7YmFzZVVybH0vam9icy8ke2pvYklkfS9yZXN1bHRzP3Rva2VuPSR7dG9rZW59JmY9anNvbmBcclxuICAgICAgICAgICAgICA6IGAke2Jhc2VVcmx9L2pvYnMvJHtqb2JJZH0vcmVzdWx0cz9mPWpzb25gXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCByZXN1bHRSZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlc3VsdFVybClcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICghcmVzdWx0UmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm8gYW8gb2J0ZXIgcmVzdWx0YWRvczogJHtyZXN1bHRSZXNwb25zZS5zdGF0dXN9YClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmVzdWx0ID0gYXdhaXQgcmVzdWx0UmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZXN1bHRhZG8gZGEgZXhlY3XDp8OjbyBhc3PDrW5jcm9uYTonLCByZXN1bHQpXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGpvYlN0YXR1cy5qb2JTdGF0dXMgPT09ICdlc3JpSm9iRmFpbGVkJykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEpvYiBmYWxob3U6ICR7am9iU3RhdHVzLm1lc3NhZ2VzID8gSlNPTi5zdHJpbmdpZnkoam9iU3RhdHVzLm1lc3NhZ2VzKSA6ICdFcnJvIGRlc2NvbmhlY2lkbyd9YClcclxuICAgICAgICAgIH0gZWxzZSBpZiAoam9iU3RhdHVzLmpvYlN0YXR1cyA9PT0gJ2VzcmlKb2JDYW5jZWxsZWQnKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSm9iIGZvaSBjYW5jZWxhZG8nKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBhdHRlbXB0cysrXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChhdHRlbXB0cyA+PSBtYXhBdHRlbXB0cykge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaW1lb3V0OiBPIGpvYiBkZW1vcm91IG1haXMgZGUgNjAgc2VndW5kb3MgcGFyYSBjb21wbGV0YXInKVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBUYXJlZmEgc8OtbmNyb25hIC0gcmVzdWx0YWRvIGrDoSBlc3TDoSBkaXNwb27DrXZlbFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUYXJlZmEgc8OtbmNyb25hIC0gcmVzdWx0YWRvIGrDoSBkaXNwb27DrXZlbCcpXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGNvbnNvbGUubG9nKCdSZXN1bHRhZG8gY29tcGxldG8gZGEgR1A6JywgSlNPTi5zdHJpbmdpZnkocmVzdWx0LCBudWxsLCAyKSlcclxuXHJcbiAgICAgIC8vIFByb2Nlc3NhIG8gcmVzdWx0YWRvIC0gcHJvY3VyYSBwZWxhIFVSTCBkbyBIVE1MXHJcbiAgICAgIGxldCBodG1sVXJsID0gbnVsbFxyXG5cclxuICAgICAgLy8gUGFyYSB0YXJlZmFzIGFzc8OtbmNyb25hcywgb3MgcmVzdWx0YWRvcyBwb2RlbSBlc3RhciBlbSB1bWEgZXN0cnV0dXJhIGRpZmVyZW50ZVxyXG4gICAgICAvLyBQcmltZWlybywgdmVyaWZpY2Egc2UgaMOhIGVycm9zXHJcbiAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGVuY29udHJhZG8gbm8gcmVzdWx0YWRvOicsIHJlc3VsdC5lcnJvcilcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm8gbmEgR1A6ICR7SlNPTi5zdHJpbmdpZnkocmVzdWx0LmVycm9yKX1gKVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBQcm9jdXJhIGVtIHJlc3VsdC5yZXN1bHRzIChlc3RydXR1cmEgY29tdW0gcGFyYSB0YXJlZmFzIHPDrW5jcm9uYXMpXHJcbiAgICAgIGlmIChyZXN1bHQucmVzdWx0cyAmJiBBcnJheS5pc0FycmF5KHJlc3VsdC5yZXN1bHRzKSkge1xyXG4gICAgICAgIGZvciAoY29uc3QgcmVzdWx0SXRlbSBvZiByZXN1bHQucmVzdWx0cykge1xyXG4gICAgICAgICAgLy8gTyByZXN1bHRhZG8gcG9kZSBlc3RhciBkaXJldGFtZW50ZSBubyByZXN1bHRJdGVtIG91IGVtIHJlc3VsdEl0ZW0udmFsdWVcclxuICAgICAgICAgIGNvbnN0IHZhbHVlID0gcmVzdWx0SXRlbS52YWx1ZSAhPT0gdW5kZWZpbmVkID8gcmVzdWx0SXRlbS52YWx1ZSA6IHJlc3VsdEl0ZW1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUuaW5jbHVkZXMoJy5odG1sJykpIHtcclxuICAgICAgICAgICAgaHRtbFVybCA9IHZhbHVlXHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgLy8gUHJvY3VyYSBwb3IgcHJvcHJpZWRhZGVzIGNvbXVucyBxdWUgY29udMOqbSBVUkxzXHJcbiAgICAgICAgICAgIGlmICh2YWx1ZS51cmwgJiYgdHlwZW9mIHZhbHVlLnVybCA9PT0gJ3N0cmluZycgJiYgdmFsdWUudXJsLmluY2x1ZGVzKCcuaHRtbCcpKSB7XHJcbiAgICAgICAgICAgICAgaHRtbFVybCA9IHZhbHVlLnVybFxyXG4gICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUucGF0aFVybCAmJiB0eXBlb2YgdmFsdWUucGF0aFVybCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICBodG1sVXJsID0gdmFsdWUucGF0aFVybFxyXG4gICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUudmFsdWUgJiYgdHlwZW9mIHZhbHVlLnZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS52YWx1ZS5pbmNsdWRlcygnLmh0bWwnKSkge1xyXG4gICAgICAgICAgICAgIGh0bWxVcmwgPSB2YWx1ZS52YWx1ZVxyXG4gICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFBhcmEgdGFyZWZhcyBhc3PDrW5jcm9uYXMsIG9zIHJlc3VsdGFkb3MgcG9kZW0gZXN0YXIgZW0gcmVzdWx0LnJlc3VsdHMgY29tbyBvYmpldG9cclxuICAgICAgaWYgKCFodG1sVXJsICYmIHJlc3VsdC5yZXN1bHRzICYmIHR5cGVvZiByZXN1bHQucmVzdWx0cyA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkocmVzdWx0LnJlc3VsdHMpKSB7XHJcbiAgICAgICAgLy8gSXRlcmEgc29icmUgYXMgcHJvcHJpZWRhZGVzIGRvIG9iamV0byByZXN1bHRzXHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcmVzdWx0LnJlc3VsdHMpIHtcclxuICAgICAgICAgIGNvbnN0IHJlc3VsdEl0ZW0gPSByZXN1bHQucmVzdWx0c1trZXldXHJcbiAgICAgICAgICBpZiAocmVzdWx0SXRlbSAmJiByZXN1bHRJdGVtLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gcmVzdWx0SXRlbS52YWx1ZVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS5pbmNsdWRlcygnLmh0bWwnKSkge1xyXG4gICAgICAgICAgICAgIGh0bWxVcmwgPSB2YWx1ZVxyXG4gICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUudXJsICYmIHR5cGVvZiB2YWx1ZS51cmwgPT09ICdzdHJpbmcnICYmIHZhbHVlLnVybC5pbmNsdWRlcygnLmh0bWwnKSkge1xyXG4gICAgICAgICAgICAgIGh0bWxVcmwgPSB2YWx1ZS51cmxcclxuICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLnBhdGhVcmwgJiYgdHlwZW9mIHZhbHVlLnBhdGhVcmwgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgaHRtbFVybCA9IHZhbHVlLnBhdGhVcmxcclxuICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBQcm9jdXJhIGVtIG91dHJhcyBwcm9wcmllZGFkZXMgZG8gcmVzdWx0YWRvXHJcbiAgICAgIGlmICghaHRtbFVybCAmJiByZXN1bHQub3V0cHV0VXJsKSB7XHJcbiAgICAgICAgaHRtbFVybCA9IHJlc3VsdC5vdXRwdXRVcmxcclxuICAgICAgfVxyXG4gICAgICBpZiAoIWh0bWxVcmwgJiYgcmVzdWx0LnVybCkge1xyXG4gICAgICAgIGh0bWxVcmwgPSByZXN1bHQudXJsXHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFodG1sVXJsICYmIHJlc3VsdC5maWxlVXJsKSB7XHJcbiAgICAgICAgaHRtbFVybCA9IHJlc3VsdC5maWxlVXJsXHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFodG1sVXJsICYmIHJlc3VsdC5vdXRwdXRGaWxlKSB7XHJcbiAgICAgICAgaHRtbFVybCA9IHJlc3VsdC5vdXRwdXRGaWxlXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEJ1c2NhIHBvciByZWdleCBlbSB0b2RvIG8gb2JqZXRvICjDumx0aW1vIHJlY3Vyc28pXHJcbiAgICAgIGlmICghaHRtbFVybCkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdFN0cmluZyA9IEpTT04uc3RyaW5naWZ5KHJlc3VsdClcclxuICAgICAgICBjb25zdCB1cmxNYXRjaCA9IHJlc3VsdFN0cmluZy5tYXRjaCgvaHR0cHM/OlxcL1xcL1teXFxzXCI8Pl0rXFwuaHRtbC9nKVxyXG4gICAgICAgIGlmICh1cmxNYXRjaCAmJiB1cmxNYXRjaC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBodG1sVXJsID0gdXJsTWF0Y2hbMF1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChodG1sVXJsKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1VSTCBkbyBIVE1MIGVuY29udHJhZGE6JywgaHRtbFVybClcclxuICAgICAgICAvLyBBYnJlIG8gSFRNTCBlbSB1bWEgbm92YSBndWlhXHJcbiAgICAgICAgd2luZG93Lm9wZW4oaHRtbFVybCwgJ19ibGFuaycpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gU2UgbsOjbyBlbmNvbnRyb3UgYSBVUkwsIG1vc3RyYSBvIHJlc3VsdGFkbyBjb21wbGV0byBwYXJhIGRlYnVnXHJcbiAgICAgICAgY29uc29sZS53YXJuKCdOw6NvIGZvaSBwb3Nzw612ZWwgZW5jb250cmFyIGEgVVJMIGRvIEhUTUwgbm8gcmVzdWx0YWRvOicsIHJlc3VsdClcclxuICAgICAgICBjb25zb2xlLndhcm4oJ1Jlc3VsdGFkbyBjb21wbGV0bzonLCBKU09OLnN0cmluZ2lmeShyZXN1bHQsIG51bGwsIDIpKVxyXG4gICAgICAgIGFsZXJ0KCdSZWxhdMOzcmlvIGdlcmFkbywgbWFzIG7Do28gZm9pIHBvc3PDrXZlbCBlbmNvbnRyYXIgYSBVUkwgZG8gSFRNTC4gVmVyaWZpcXVlIG8gY29uc29sZSBkbyBuYXZlZ2Fkb3IgKEYxMikgcGFyYSB2ZXIgb3MgZGV0YWxoZXMgZG8gcmVzdWx0YWRvLicpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pXHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJz09PSBFUlJPIENPTVBMRVRPIEFPIEVYRUNVVEFSIEdQID09PScpXHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm86JywgZXJyb3IpXHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ01lbnNhZ2VtOicsIGVycm9yLm1lc3NhZ2UpXHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1N0YWNrIHRyYWNlOicsIGVycm9yLnN0YWNrKVxyXG4gICAgICBjb25zb2xlLmVycm9yKCdUaXBvIGRvIGVycm86JywgZXJyb3IuY29uc3RydWN0b3IubmFtZSlcclxuICAgICAgXHJcbiAgICAgIC8vIEluZm9ybWHDp8O1ZXMgZGUgY29udGV4dG8gcGFyYSBkZWJ1Z1xyXG4gICAgICBjb25zb2xlLmVycm9yKCc9PT0gQ09OVEVYVE8gRE8gRVJSTyA9PT0nKVxyXG4gICAgICBjb25zb2xlLmVycm9yKCdWYWxvciBlbnZpYWRvOicsIGlkZWFOdW1iZXIpXHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1BhcsOibWV0cm8gdXNhZG86JywgcGFyYW1OYW1lKVxyXG4gICAgICBjb25zb2xlLmVycm9yKCdVUkwgdGVudGFkYTonLCBleGVjdXRlVXJsKVxyXG4gICAgICBjb25zb2xlLmVycm9yKCdUb2tlbiBwcmVzZW50ZTonLCAhIXRva2VuKVxyXG5cclxuICAgICAgbGV0IGVycm9yTWVzc2FnZSA9ICdFcnJvIGFvIGdlcmFyIHJlbGF0w7NyaW8uXFxuXFxuJ1xyXG5cclxuICAgICAgaWYgKGVycm9yLm1lc3NhZ2UpIHtcclxuICAgICAgICAvLyBSZW1vdmUgaW5mb3JtYcOnw7VlcyB0w6ljbmljYXMgbXVpdG8gbG9uZ2FzIHBhcmEgbyB1c3XDoXJpb1xyXG4gICAgICAgIGxldCBjbGVhbk1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlXHJcbiAgICAgICAgaWYgKGNsZWFuTWVzc2FnZS5sZW5ndGggPiAyMDApIHtcclxuICAgICAgICAgIGNsZWFuTWVzc2FnZSA9IGNsZWFuTWVzc2FnZS5zdWJzdHJpbmcoMCwgMjAwKSArICcuLi4nXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVycm9yTWVzc2FnZSArPSBgTWVuc2FnZW06ICR7Y2xlYW5NZXNzYWdlfVxcblxcbmBcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGVycm9yLmRldGFpbHMgJiYgQXJyYXkuaXNBcnJheShlcnJvci5kZXRhaWxzKSAmJiBlcnJvci5kZXRhaWxzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBlcnJvck1lc3NhZ2UgKz0gYERldGFsaGVzOiAke2Vycm9yLmRldGFpbHNbMF19XFxuXFxuYFxyXG4gICAgICB9XHJcblxyXG4gICAgICBlcnJvck1lc3NhZ2UgKz0gJ1ZlcmlmaXF1ZTpcXG4nXHJcbiAgICAgIGVycm9yTWVzc2FnZSArPSBgMS4gU2UgbyBuw7ptZXJvIGRlIGlkZWEgXCIke2lkZWFOdW1iZXJ9XCIgZXN0w6EgY29ycmV0b1xcbmBcclxuICAgICAgZXJyb3JNZXNzYWdlICs9ICcyLiBTZSBvIHZhbG9yIGV4aXN0ZSBuYSBjYW1hZGEgZGUgYWxlcnRhc19yZWdpb25hbF9sYXBhXFxuJ1xyXG4gICAgICBlcnJvck1lc3NhZ2UgKz0gJzMuIFNlIGEgZmVycmFtZW50YSBkZSBnZW9wcm9jZXNzYW1lbnRvIGVzdMOhIGFjZXNzw612ZWxcXG4nXHJcbiAgICAgIGVycm9yTWVzc2FnZSArPSAnNC4gQWJyYSBvIGNvbnNvbGUgZG8gbmF2ZWdhZG9yIChGMTIpIHBhcmEgbWFpcyBkZXRhbGhlcyB0w6ljbmljb3NcXG5cXG4nXHJcbiAgICAgIGVycm9yTWVzc2FnZSArPSAnRGljYTogVGVudGUgdXNhciBvIGJvdMOjbyBcIkZpbHRyYXJcIiBwcmltZWlybyBwYXJhIHZlcmlmaWNhciBzZSBvIG7Dum1lcm8gZXhpc3RlLidcclxuXHJcbiAgICAgIGFsZXJ0KGVycm9yTWVzc2FnZSlcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgY29uc3Qgc3R5bGUgPSBjc3NgXHJcbiAgICAgIC53aWRnZXQtY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgZ2FwOiAxMnB4O1xyXG4gICAgICB9XHJcbiAgICAgIGZvcm0gPiBkaXYge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZ2FwOiA4cHg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjY2NjQwO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTRmMzI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmOmRpc2FibGVkIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLnJlcG9ydC1idXR0b24ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjY2NDA7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBnYXA6IDhweDtcclxuICAgICAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTRmMzI7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjphY3RpdmU6bm90KDpkaXNhYmxlZCkge1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6Zm9jdXM6bm90KDpkaXNhYmxlZCkge1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICAgICAgICAgIGNvbG9yOiAjOWU5ZTllO1xyXG4gICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6bm90KDpkaXNhYmxlZCkge1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5zcGlubmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBzcGluIDAuOHMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICB9XHJcbiAgICAgIEBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgICAgICAgdG8ge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmNsZWFyLWJ1dHRvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcclxuICAgICAgICBjb2xvcjogIzQyNDI0MjtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiZGJkYmQ7XHJcbiAgICAgICAgICBjb2xvcjogIzIxMjEyMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gICAgICAgICAgY29sb3I6ICM5ZTllOWU7XHJcbiAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuc3RhdHVzLW1lc3NhZ2Uge1xyXG4gICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdmM2ZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIH1cclxuICAgICAgLmxvYWRpbmcge1xyXG4gICAgICAgIGNvbG9yOiAjMDA3OWMxO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1hZGRMYXllcnMgamltdS13aWRnZXQgcC0yXCIgY3NzPXtzdHlsZX0+XHJcbiAgICAgICAge3RoaXMucHJvcHMuaGFzT3duUHJvcGVydHkoJ3VzZU1hcFdpZGdldElkcycpICYmXHJcbiAgICAgICAgICB0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcyAmJlxyXG4gICAgICAgICAgdGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHMubGVuZ3RoID09PSAxICYmIChcclxuICAgICAgICAgICAgPEppbXVNYXBWaWV3Q29tcG9uZW50XHJcbiAgICAgICAgICAgICAgdXNlTWFwV2lkZ2V0SWQ9e3RoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzPy5bMF19XHJcbiAgICAgICAgICAgICAgb25BY3RpdmVWaWV3Q2hhbmdlPXsoam12OiBKaW11TWFwVmlldykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgIGppbXVNYXBWaWV3OiBqbXZcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxwPntkZWZhdWx0TWVzc2FnZXMuaW5zdHJ1Y3Rpb25zfTwvcD5cclxuXHJcblxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlRmlsdGVyQW5kWm9vbX0+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17ZGVmYXVsdE1lc3NhZ2VzLnNlYXJjaElkZWF9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5pZGVhU2VhcmNoSW5wdXR9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJZGVhU2VhcmNoSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXRoaXMuc3RhdGUuZmVhdHVyZUxheWVyIHx8IHRoaXMuc3RhdGUubG9hZGluZ31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXshdGhpcy5zdGF0ZS5mZWF0dXJlTGF5ZXIgfHwgdGhpcy5zdGF0ZS5sb2FkaW5nfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtkZWZhdWx0TWVzc2FnZXMuZmlsdGVyQW5kWm9vbX1cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgICAge3RoaXMuc3RhdGUuZmVhdHVyZUxheWVyICYmIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXBvcnQtYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlR2VuZXJhdGVSZXBvcnR9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS5sb2FkaW5nIHx8ICF0aGlzLnN0YXRlLmlkZWFTZWFyY2hJbnB1dCB8fCB0aGlzLnN0YXRlLmlkZWFTZWFyY2hJbnB1dC50cmltKCkgPT09ICcnfVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e3RoaXMuc3RhdGUubG9hZGluZyB8fCAhdGhpcy5zdGF0ZS5pZGVhU2VhcmNoSW5wdXQgfHwgdGhpcy5zdGF0ZS5pZGVhU2VhcmNoSW5wdXQudHJpbSgpID09PSAnJyBcclxuICAgICAgICAgICAgICAgICAgPyAnRGlnaXRlIHVtIG7Dum1lcm8gZGUgaWRlYSBwYXJhIGdlcmFyIG8gcmVsYXTDs3JpbycgXHJcbiAgICAgICAgICAgICAgICAgIDogJ0dlcmFyIHJlbGF0w7NyaW8gcGFyYSBvIG7Dum1lcm8gZGUgaWRlYSBpbmZvcm1hZG8nfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgJiYgPHNwYW4gY2xhc3NOYW1lPVwic3Bpbm5lclwiPjwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgICB7ZGVmYXVsdE1lc3NhZ2VzLmdlbmVyYXRlUmVwb3J0fVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNsZWFyLWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsZWFyRmlsdGVyfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUubG9hZGluZ31cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7ZGVmYXVsdE1lc3NhZ2VzLmNsZWFyRmlsdGVyfVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9