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
        // Carrega a camada em memória (sem adicionar ao mapa) quando o mapa está disponível
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
        // Busca a camada existente no mapa ou cria uma em memória para queries
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
                // Salva a visualização inicial do mapa se ainda não foi salva
                if (!this.state.initialExtent && this.state.jimuMapView && this.state.jimuMapView.view) {
                    const currentExtent = this.state.jimuMapView.view.extent;
                    if (currentExtent) {
                        this.setState({
                            initialExtent: currentExtent.clone()
                        });
                    }
                }
                // Tenta encontrar a camada já existente no mapa
                const map = this.state.jimuMapView.view.map;
                let foundLayer = null;
                // Função auxiliar para verificar se uma URL corresponde à camada de alertas
                const matchesAlertasLayer = (url) => {
                    if (!url)
                        return false;
                    const urlLower = url.toLowerCase();
                    return urlLower.includes('alertas_regional_lapa');
                };
                // Função recursiva para buscar camadas
                const findLayerRecursive = (layers) => {
                    if (!layers)
                        return null;
                    try {
                        // Tenta iterar usando getItemAt (Collection) ou array direto
                        const length = layers.length || 0;
                        for (let i = 0; i < length; i++) {
                            const layer = layers.getItemAt ? layers.getItemAt(i) : layers[i];
                            if (!layer)
                                continue;
                            // Verifica se é uma FeatureLayer com URL que corresponde
                            if (layer.type === 'feature' && layer.url && matchesAlertasLayer(layer.url)) {
                                return layer;
                            }
                            // Se a camada tem subcamadas, busca recursivamente
                            if (layer.layers) {
                                const sublayersLength = layer.layers.length || 0;
                                if (sublayersLength > 0) {
                                    const found = findLayerRecursive(layer.layers);
                                    if (found)
                                        return found;
                                }
                            }
                        }
                    }
                    catch (error) {
                        console.warn('Erro ao buscar camadas:', error);
                    }
                    return null;
                };
                // Busca a camada no mapa
                foundLayer = findLayerRecursive(map.layers);
                if (foundLayer) {
                    console.log('Camada encontrada no mapa:', foundLayer.url, foundLayer.title || foundLayer.name || 'sem nome');
                }
                else {
                    console.log('Camada de alertas não encontrada no mapa, será criada em memória para queries');
                }
                // Se encontrou a camada no mapa, usa ela
                if (foundLayer) {
                    // Aguarda a camada estar carregada
                    if (foundLayer.loaded) {
                        this.setState({
                            featureLayer: foundLayer,
                            loading: false
                        });
                    }
                    else {
                        foundLayer.when(() => {
                            this.setState({
                                featureLayer: foundLayer,
                                loading: false
                            });
                        }).catch((error) => {
                            console.error('Erro ao aguardar camada existente:', error);
                            // Se der erro, cria uma em memória
                            this.createLayerInMemory();
                        });
                    }
                }
                else {
                    // Se não encontrou, cria uma camada em memória apenas para queries
                    console.log('Camada não encontrada no mapa, criando em memória para queries');
                    this.createLayerInMemory();
                }
            });
        };
        // Cria uma camada em memória (sem adicionar ao mapa) apenas para fazer queries
        this.createLayerInMemory = () => {
            // Cria a camada com a URL fixa (sem adicionar ao mapa)
            const layer = new this.FeatureLayer({
                url: this.FEATURE_SERVICE_URL
            });
            // Aguarda a camada carregar (apenas para ter acesso aos metadados e fazer queries)
            layer.when(() => {
                this.setState({
                    featureLayer: layer,
                    loading: false
                });
            }).catch((error) => {
                console.error('Erro ao carregar a camada em memória:', error);
                this.setState({ loading: false });
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
        // Função auxiliar para aplicar zoom no polígono encontrado
        this.applyFilterAndZoom = (layer, graphic, fieldName, actualValue) => {
            // Apenas aplica zoom na geometria encontrada (sem adicionar filtro visual)
            console.log(`Aplicando zoom no polígono: ${fieldName} = ${actualValue}`);
            this.applyZoomAfterFilter(layer, graphic);
        };
        // Função auxiliar para aplicar zoom no polígono encontrado
        this.applyZoomAfterFilter = (layer, graphic) => {
            // Aplica zoom diretamente na geometria do polígono encontrado
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
        // Função para limpar a pesquisa e restaurar a visualização inicial
        this.handleClearFilter = () => {
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
                    });
                }
            }
            // Limpa o campo de pesquisa
            this.setState({
                ideaSearchInput: ''
            });
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
                // Primeiro, vamos obter informações sobre a GP para descobrir os parâmetros
                // Começa tentando da GP geral (mais confiável)
                console.log('Obtendo informações da ferramenta de geoprocessamento...');
                let gpInfo;
                try {
                    // Tenta primeiro da GP geral
                    const gpInfoUrl = addTokenToUrl(`${this.GP_SERVICE_URL}?f=json`);
                    console.log('Tentando obter informações da GP geral:', gpInfoUrl);
                    const gpInfoResponse = yield fetch(gpInfoUrl);
                    if (!gpInfoResponse.ok) {
                        throw new Error(`Erro ao obter informações: ${gpInfoResponse.status} ${gpInfoResponse.statusText}`);
                    }
                    gpInfo = yield gpInfoResponse.json();
                    console.log('Informações da GP geral obtidas com sucesso');
                    console.log('Informações completas da GP:', JSON.stringify(gpInfo, null, 2));
                    // Se a GP geral retornou tasks, tenta obter informações da task específica
                    if (gpInfo.tasks && Array.isArray(gpInfo.tasks) && gpInfo.tasks.length > 0) {
                        console.log('Tasks disponíveis na GP:', gpInfo.tasks.map(t => t && t.name ? t.name : 'sem nome'));
                        // Tenta encontrar a task que corresponde à URL fixa
                        const taskNameFromUrl = 'relatorio_analise_lapa';
                        const matchingTask = gpInfo.tasks.find(t => {
                            if (!t || !t.name)
                                return false;
                            const name = String(t.name).toLowerCase();
                            return name === taskNameFromUrl.toLowerCase() ||
                                name === 'relatorio_analise_lapa' ||
                                name.includes('relatorio') ||
                                name.includes('analise') ||
                                name.includes('lapa');
                        });
                        if (matchingTask) {
                            console.log('Task encontrada:', matchingTask.name);
                            // Tenta obter informações detalhadas da task
                            try {
                                const taskNameEncoded = encodeURIComponent(matchingTask.name);
                                const taskInfoUrl = addTokenToUrl(`${this.GP_SERVICE_URL}/${taskNameEncoded}?f=json`);
                                console.log('Tentando obter informações detalhadas da task:', taskInfoUrl);
                                const taskInfoResponse = yield fetch(taskInfoUrl);
                                if (taskInfoResponse.ok) {
                                    const taskInfo = yield taskInfoResponse.json();
                                    if (taskInfo.parameters && Array.isArray(taskInfo.parameters)) {
                                        gpInfo = taskInfo;
                                        console.log('Usando informações detalhadas da task específica');
                                    }
                                }
                            }
                            catch (taskError) {
                                console.warn('Não foi possível obter informações detalhadas da task, usando informações da GP geral:', taskError);
                            }
                        }
                    }
                }
                catch (infoError) {
                    console.error('Erro ao obter informações da GP:', infoError);
                    throw new Error(`Não foi possível acessar a ferramenta de geoprocessamento. Verifique se a URL está correta e acessível.`);
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
                    const allParams = gpInfo.parameters
                        .filter(p => p != null)
                        .map(p => ({
                        name: p.name || 'sem nome',
                        displayName: p.displayName || p.name || 'sem nome',
                        dataType: p.dataType || 'desconhecido',
                        direction: p.direction || 'desconhecido',
                        parameterType: p.parameterType || 'desconhecido',
                        required: p.parameterType === 'esriGPParameterTypeRequired' || p.required === true
                    }));
                    console.log('Todos os parâmetros:', JSON.stringify(allParams, null, 2));
                    // Procura pelo primeiro parâmetro de entrada (input)
                    const inputParams = gpInfo.parameters.filter(p => p != null &&
                        p.name &&
                        (p.direction === 'esriGPParameterDirectionInput' || p.direction === 'GPParameterDirectionInput'));
                    console.log('Parâmetros de entrada encontrados:', inputParams
                        .filter(p => p != null)
                        .map(p => ({
                        name: p.name || 'sem nome',
                        displayName: p.displayName || p.name || 'sem nome',
                        dataType: p.dataType || 'desconhecido',
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
                        console.warn('Tentando usar informações das tasks disponíveis...');
                        // Tenta todas as tasks até encontrar uma com parâmetros
                        for (const task of gpInfo.tasks) {
                            if (!task)
                                continue;
                            const taskName = task.name || task.id || 'sem nome';
                            console.log('Verificando task:', taskName);
                            if (task.parameters && Array.isArray(task.parameters)) {
                                const inputParams = task.parameters.filter(p => p &&
                                    (p.direction === 'esriGPParameterDirectionInput' || p.direction === 'GPParameterDirectionInput') &&
                                    p.name);
                                if (inputParams.length > 0) {
                                    gpInfo.parameters = task.parameters;
                                    paramInfo = inputParams[0];
                                    paramName = paramInfo.name;
                                    console.log('Usando parâmetros da task:', taskName, '- Parâmetro:', paramName);
                                    break;
                                }
                            }
                        }
                    }
                    // Se ainda não encontrou parâmetros, tenta usar um nome padrão comum
                    if (!paramName) {
                        console.warn('Não foi possível obter parâmetros da GP. Tentando usar nomes padrão...');
                        // Lista de nomes comuns de parâmetros para tentar
                        const commonParamNames = ['idea', 'IDEA', 'Idea', 'numero_idea', 'numeroIdea', 'NumeroIDEA', 'valor', 'input', 'Input'];
                        // Se temos a URL fixa do submitJob, podemos tentar usar diretamente
                        // Mas primeiro, vamos tentar obter informações da task específica pela URL
                        console.warn('Usando URL fixa do submitJob diretamente. Tentando descobrir parâmetro...');
                        // Define um parâmetro padrão para tentar
                        paramName = 'idea'; // Nome mais comum
                        paramInfo = { name: paramName, dataType: 'GPString' };
                        console.warn('Usando parâmetro padrão:', paramName);
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
                // Sempre usa a URL fixa do submitJob (já que temos ela configurada)
                // Não precisa verificar se é assíncrona, pois a URL fixa já aponta para submitJob
                const isAsync = true;
                console.log('=== TENTANDO EXECUTAR GP ===');
                console.log('Usando URL fixa do submitJob');
                console.log('Parâmetro que será enviado:', paramName);
                console.log('Valor que será enviado:', ideaNumber);
                // Sempre usa a URL fixa do submitJob
                executeUrl = this.GP_SUBMIT_JOB_URL;
                console.log('URL do submitJob:', executeUrl);
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
                        (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "text", placeholder: _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"].searchIdea, value: this.state.ideaSearchInput, onChange: this.handleIdeaSearchInputChange, disabled: this.state.loading }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9maWx0cmFyLWUtZ2VyYXItcmVsYXRvcmlvL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFlO0lBQ2IsWUFBWSxFQUFFLDJCQUEyQjtJQUN6QyxRQUFRLEVBQUUsa0JBQWtCO0lBQzVCLGlCQUFpQixFQUFFLHdCQUF3QjtJQUMzQyxZQUFZLEVBQ1Ysa0JBQWtCO0lBQ3BCLFVBQVUsRUFBRSw2QkFBNkI7SUFDekMsYUFBYSxFQUFFLFNBQVM7SUFDeEIsY0FBYyxFQUFFLGlCQUFpQjtJQUNqQyxXQUFXLEVBQUUsZUFBZTtJQUM1QixPQUFPLEVBQUUsZUFBZTtJQUN4QixXQUFXLEVBQUUsK0JBQStCO0NBQzdDOzs7Ozs7Ozs7Ozs7QUNaRDs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCxxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0puRCwwQ0FBMEM7QUFDMUMsZUFBZTtBQUNmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFrQkU7QUFDOEQ7QUFLNUM7QUFJZ0M7QUFVckMsTUFBTSxNQUFPLFNBQVEsNENBQUssQ0FBQyxhQUd6QztJQUhEOztRQVVFLFVBQUssR0FBRztZQUNOLGVBQWUsRUFBRSxFQUFFO1lBQ25CLFdBQVcs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RUFBRSxJQUFJLENBQUMsaUJBQWlCLEVBQy9CLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFFM0IsNkRBQWUsQ0FBQyxXQUFXLENBQ3JCLENBQ1IsQ0FDSixDQUNHLENBQ0YsQ0FDUDtJQUNILENBQUM7Q0FDRjtBQUVPLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2ZpbHRyYXItZS1nZXJhci1yZWxhdG9yaW8vc3JjL3J1bnRpbWUvdHJhbnNsYXRpb25zL2RlZmF1bHQudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWFyY2dpc1wiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS1jb3JlXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9maWx0cmFyLWUtZ2VyYXItcmVsYXRvcmlvL3NyYy9ydW50aW1lL3dpZGdldC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICBfd2lkZ2V0TGFiZWw6ICdGaWx0cmFyIGUgR2VyYXIgUmVsYXTDs3JpbycsXG4gIGFkZExheWVyOiAnQWRpY2lvbmFyIENhbWFkYScsXG4gIGZlYXR1cmVTZXJ2aWNlVXJsOiAnVVJMIGRvIEZlYXR1cmUgU2VydmljZScsXG4gIGluc3RydWN0aW9uczpcbiAgICAnRGlnaXRlIG8gbsK6IElERUEnLFxuICBzZWFyY2hJZGVhOiAnUGVzcXVpc2FyIHBvciBuw7ptZXJvIChpZGVhKScsXG4gIGZpbHRlckFuZFpvb206ICdGaWx0cmFyJyxcbiAgZ2VuZXJhdGVSZXBvcnQ6ICdHZXJhciBSZWxhdMOzcmlvJyxcbiAgY2xlYXJGaWx0ZXI6ICdMaW1wYXIgRmlsdHJvJyxcbiAgbG9hZGluZzogJ0NhcnJlZ2FuZG8uLi4nLFxuICBsYXllckxvYWRlZDogJ0NhbWFkYSBjYXJyZWdhZGEgY29tIHN1Y2Vzc28hJ1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfYXJjZ2lzX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCIvKipcclxuICogV2VicGFjayB3aWxsIHJlcGxhY2UgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gd2l0aCBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgdG8gc2V0IHRoZSBwdWJsaWMgcGF0aCBkeW5hbWljYWxseS5cclxuICogVGhlIHJlYXNvbiB3aHkgd2UgY2FuJ3Qgc2V0IHRoZSBwdWJsaWNQYXRoIGluIHdlYnBhY2sgY29uZmlnIGlzOiB3ZSBjaGFuZ2UgdGhlIHB1YmxpY1BhdGggd2hlbiBkb3dubG9hZC5cclxuICogKi9cclxuX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB3aW5kb3cuamltdUNvbmZpZy5iYXNlVXJsXHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvdHlwZS1idWlsdGlucyAqL1xyXG4vKiogQGpzeCBqc3ggKi9cclxuLyoqXHJcbiAgTGljZW5zaW5nXHJcblxyXG4gIENvcHlyaWdodCAyMDIyIEVzcmlcclxuXHJcbiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgWW91XHJcbiAgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXlcclxuICBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG4gIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yXHJcbiAgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nXHJcbiAgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG5cclxuICBBIGNvcHkgb2YgdGhlIGxpY2Vuc2UgaXMgYXZhaWxhYmxlIGluIHRoZSByZXBvc2l0b3J5J3NcclxuICBMSUNFTlNFIGZpbGUuXHJcbiovXHJcbmltcG9ydCB7IFJlYWN0LCB0eXBlIEFsbFdpZGdldFByb3BzLCBjc3MsIGpzeCB9IGZyb20gJ2ppbXUtY29yZSdcclxuaW1wb3J0IHtcclxuICBsb2FkQXJjR0lTSlNBUElNb2R1bGVzLFxyXG4gIEppbXVNYXBWaWV3Q29tcG9uZW50LFxyXG4gIHR5cGUgSmltdU1hcFZpZXdcclxufSBmcm9tICdqaW11LWFyY2dpcydcclxuXHJcbmltcG9ydCB0eXBlIHsgSU1Db25maWcgfSBmcm9tICcuLi9jb25maWcnXHJcblxyXG5pbXBvcnQgZGVmYXVsdE1lc3NhZ2VzIGZyb20gJy4vdHJhbnNsYXRpb25zL2RlZmF1bHQnXHJcblxyXG5pbnRlcmZhY2UgSVN0YXRlIHtcclxuICBpZGVhU2VhcmNoSW5wdXQ6IHN0cmluZ1xyXG4gIGppbXVNYXBWaWV3OiBKaW11TWFwVmlld1xyXG4gIGZlYXR1cmVMYXllcjogX19lc3JpLkZlYXR1cmVMYXllclxyXG4gIGxvYWRpbmc6IGJvb2xlYW5cclxuICBpbml0aWFsRXh0ZW50OiBfX2VzcmkuRXh0ZW50XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpZGdldCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8XHJcbkFsbFdpZGdldFByb3BzPElNQ29uZmlnPixcclxuSVN0YXRlXHJcbj4ge1xyXG4gIC8vIEdpdmUgdHlwZXMgdG8gdGhlIG1vZHVsZXMgd2UgaW1wb3J0IGZyb20gdGhlIEFyY0dJUyBBUEkgZm9yIEphdmFTY3JpcHRcclxuICAvLyB0byB0ZWxsIFR5cGVTY3JpcHQgd2hhdCB0eXBlcyB0aGV5IGFyZS5cclxuICBGZWF0dXJlTGF5ZXI6IHR5cGVvZiBfX2VzcmkuRmVhdHVyZUxheWVyXHJcbiAgUXVlcnk6IHR5cGVvZiBfX2VzcmkuUXVlcnlcclxuICBTcGF0aWFsUmVmZXJlbmNlOiB0eXBlb2YgX19lc3JpLlNwYXRpYWxSZWZlcmVuY2VcclxuXHJcbiAgc3RhdGUgPSB7XHJcbiAgICBpZGVhU2VhcmNoSW5wdXQ6ICcnLFxyXG4gICAgamltdU1hcFZpZXc6IG51bGwsXHJcbiAgICBmZWF0dXJlTGF5ZXI6IG51bGwsXHJcbiAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgIGluaXRpYWxFeHRlbnQ6IG51bGxcclxuICB9XHJcblxyXG4gIC8vIFVSTCBmaXhhIGRhIGNhbWFkYVxyXG4gIHJlYWRvbmx5IEZFQVRVUkVfU0VSVklDRV9VUkwgPSAnaHR0cHM6Ly9tZWlvYW1iaWVudGUuc2lzdGVtYXMubXBiYS5tcC5ici9zZXJ2ZXIvcmVzdC9zZXJ2aWNlcy9Ib3N0ZWQvYWxlcnRhc19yZWdpb25hbF9sYXBhL0ZlYXR1cmVTZXJ2ZXInXHJcbiAgXHJcbiAgLy8gVVJMIGRhIGZlcnJhbWVudGEgZGUgZ2VvcHJvY2Vzc2FtZW50b1xyXG4gIHJlYWRvbmx5IEdQX1NFUlZJQ0VfVVJMID0gJ2h0dHBzOi8vbWVpb2FtYmllbnRlLnNpc3RlbWFzLm1wYmEubXAuYnIvc2VydmVyL3Jlc3Qvc2VydmljZXMvdGVzdGVvdXRwdXQvcHJvY2Vzc2FyYWxlcnRhX2lkZWEvR1BTZXJ2ZXInXHJcbiAgXHJcbiAgLy8gVVJMIGZpeGEgZG8gc3VibWl0Sm9iXHJcbiAgcmVhZG9ubHkgR1BfU1VCTUlUX0pPQl9VUkwgPSAnaHR0cHM6Ly9tZWlvYW1iaWVudGUuc2lzdGVtYXMubXBiYS5tcC5ici9zZXJ2ZXIvcmVzdC9zZXJ2aWNlcy90ZXN0ZW91dHB1dC9wcm9jZXNzYXJhbGVydGFfaWRlYS9HUFNlcnZlci9yZWxhdG9yaW9fYW5hbGlzZV9sYXBhL3N1Ym1pdEpvYidcclxuICBcclxuICAvLyBOb21lIGRhIHRhc2sgZXNwZWPDrWZpY2EgZGVudHJvIGRhIEdQXHJcbiAgcmVhZG9ubHkgR1BfVEFTS19OQU1FID0gJ1Byb2Nlc3NhbWVudG8gZGUgYWxlcnRhcydcclxuXHJcbiAgLy8gRnVuw6fDo28gY2hhbWFkYSBxdWFuZG8gbyB2YWxvciBkYSBwZXNxdWlzYSBtdWRhXHJcbiAgaGFuZGxlSWRlYVNlYXJjaElucHV0Q2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgaWRlYVNlYXJjaElucHV0OiBldmVudC50YXJnZXQudmFsdWVcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvLyBDYXJyZWdhIGEgY2FtYWRhIGVtIG1lbcOzcmlhIChzZW0gYWRpY2lvbmFyIGFvIG1hcGEpIHF1YW5kbyBvIG1hcGEgZXN0w6EgZGlzcG9uw612ZWxcclxuICBjb21wb25lbnREaWRVcGRhdGUgPSAocHJldlByb3BzLCBwcmV2U3RhdGUpID0+IHtcclxuICAgIGlmICh0aGlzLnN0YXRlLmppbXVNYXBWaWV3ICYmICF0aGlzLnN0YXRlLmZlYXR1cmVMYXllciAmJiAhcHJldlN0YXRlLmppbXVNYXBWaWV3KSB7XHJcbiAgICAgIC8vIFNhbHZhIGEgdmlzdWFsaXphw6fDo28gaW5pY2lhbCBxdWFuZG8gbyBtYXBhIMOpIGRldGVjdGFkbyBwZWxhIHByaW1laXJhIHZlelxyXG4gICAgICBpZiAodGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3ICYmICF0aGlzLnN0YXRlLmluaXRpYWxFeHRlbnQpIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50RXh0ZW50ID0gdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3LmV4dGVudFxyXG4gICAgICAgIGlmIChjdXJyZW50RXh0ZW50KSB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaW5pdGlhbEV4dGVudDogY3VycmVudEV4dGVudC5jbG9uZSgpXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLmxvYWRGZWF0dXJlTGF5ZXIoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQnVzY2EgYSBjYW1hZGEgZXhpc3RlbnRlIG5vIG1hcGEgb3UgY3JpYSB1bWEgZW0gbWVtw7NyaWEgcGFyYSBxdWVyaWVzXHJcbiAgbG9hZEZlYXR1cmVMYXllciA9ICgpID0+IHtcclxuICAgIGlmICghdGhpcy5zdGF0ZS5qaW11TWFwVmlldykge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KVxyXG5cclxuICAgIGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xyXG4gICAgICAnZXNyaS9sYXllcnMvRmVhdHVyZUxheWVyJyxcclxuICAgICAgJ2VzcmkvZ2VvbWV0cnkvU3BhdGlhbFJlZmVyZW5jZSdcclxuICAgIF0pLnRoZW4oKG1vZHVsZXMpID0+IHtcclxuICAgICAgW3RoaXMuRmVhdHVyZUxheWVyLCB0aGlzLlNwYXRpYWxSZWZlcmVuY2VdID0gbW9kdWxlc1xyXG5cclxuICAgICAgLy8gU2FsdmEgYSB2aXN1YWxpemHDp8OjbyBpbmljaWFsIGRvIG1hcGEgc2UgYWluZGEgbsOjbyBmb2kgc2FsdmFcclxuICAgICAgaWYgKCF0aGlzLnN0YXRlLmluaXRpYWxFeHRlbnQgJiYgdGhpcy5zdGF0ZS5qaW11TWFwVmlldyAmJiB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcpIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50RXh0ZW50ID0gdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3LmV4dGVudFxyXG4gICAgICAgIGlmIChjdXJyZW50RXh0ZW50KSB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaW5pdGlhbEV4dGVudDogY3VycmVudEV4dGVudC5jbG9uZSgpXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gVGVudGEgZW5jb250cmFyIGEgY2FtYWRhIGrDoSBleGlzdGVudGUgbm8gbWFwYVxyXG4gICAgICBjb25zdCBtYXAgPSB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcubWFwXHJcbiAgICAgIGxldCBmb3VuZExheWVyID0gbnVsbFxyXG5cclxuICAgICAgLy8gRnVuw6fDo28gYXV4aWxpYXIgcGFyYSB2ZXJpZmljYXIgc2UgdW1hIFVSTCBjb3JyZXNwb25kZSDDoCBjYW1hZGEgZGUgYWxlcnRhc1xyXG4gICAgICBjb25zdCBtYXRjaGVzQWxlcnRhc0xheWVyID0gKHVybCkgPT4ge1xyXG4gICAgICAgIGlmICghdXJsKSByZXR1cm4gZmFsc2VcclxuICAgICAgICBjb25zdCB1cmxMb3dlciA9IHVybC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgcmV0dXJuIHVybExvd2VyLmluY2x1ZGVzKCdhbGVydGFzX3JlZ2lvbmFsX2xhcGEnKVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBGdW7Dp8OjbyByZWN1cnNpdmEgcGFyYSBidXNjYXIgY2FtYWRhc1xyXG4gICAgICBjb25zdCBmaW5kTGF5ZXJSZWN1cnNpdmUgPSAobGF5ZXJzKSA9PiB7XHJcbiAgICAgICAgaWYgKCFsYXllcnMpIHJldHVybiBudWxsXHJcbiAgICAgICAgXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIC8vIFRlbnRhIGl0ZXJhciB1c2FuZG8gZ2V0SXRlbUF0IChDb2xsZWN0aW9uKSBvdSBhcnJheSBkaXJldG9cclxuICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IGxheWVycy5sZW5ndGggfHwgMFxyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBsYXllciA9IGxheWVycy5nZXRJdGVtQXQgPyBsYXllcnMuZ2V0SXRlbUF0KGkpIDogbGF5ZXJzW2ldXHJcbiAgICAgICAgICAgIGlmICghbGF5ZXIpIGNvbnRpbnVlXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBWZXJpZmljYSBzZSDDqSB1bWEgRmVhdHVyZUxheWVyIGNvbSBVUkwgcXVlIGNvcnJlc3BvbmRlXHJcbiAgICAgICAgICAgIGlmIChsYXllci50eXBlID09PSAnZmVhdHVyZScgJiYgbGF5ZXIudXJsICYmIG1hdGNoZXNBbGVydGFzTGF5ZXIobGF5ZXIudXJsKSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBsYXllclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBTZSBhIGNhbWFkYSB0ZW0gc3ViY2FtYWRhcywgYnVzY2EgcmVjdXJzaXZhbWVudGVcclxuICAgICAgICAgICAgaWYgKGxheWVyLmxheWVycykge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHN1YmxheWVyc0xlbmd0aCA9IGxheWVyLmxheWVycy5sZW5ndGggfHwgMFxyXG4gICAgICAgICAgICAgIGlmIChzdWJsYXllcnNMZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmb3VuZCA9IGZpbmRMYXllclJlY3Vyc2l2ZShsYXllci5sYXllcnMpXHJcbiAgICAgICAgICAgICAgICBpZiAoZm91bmQpIHJldHVybiBmb3VuZFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ0Vycm8gYW8gYnVzY2FyIGNhbWFkYXM6JywgZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIEJ1c2NhIGEgY2FtYWRhIG5vIG1hcGFcclxuICAgICAgZm91bmRMYXllciA9IGZpbmRMYXllclJlY3Vyc2l2ZShtYXAubGF5ZXJzKVxyXG4gICAgICBcclxuICAgICAgaWYgKGZvdW5kTGF5ZXIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnQ2FtYWRhIGVuY29udHJhZGEgbm8gbWFwYTonLCBmb3VuZExheWVyLnVybCwgZm91bmRMYXllci50aXRsZSB8fCBmb3VuZExheWVyLm5hbWUgfHwgJ3NlbSBub21lJylcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnQ2FtYWRhIGRlIGFsZXJ0YXMgbsOjbyBlbmNvbnRyYWRhIG5vIG1hcGEsIHNlcsOhIGNyaWFkYSBlbSBtZW3Ds3JpYSBwYXJhIHF1ZXJpZXMnKVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBTZSBlbmNvbnRyb3UgYSBjYW1hZGEgbm8gbWFwYSwgdXNhIGVsYVxyXG4gICAgICBpZiAoZm91bmRMYXllcikge1xyXG4gICAgICAgIC8vIEFndWFyZGEgYSBjYW1hZGEgZXN0YXIgY2FycmVnYWRhXHJcbiAgICAgICAgaWYgKGZvdW5kTGF5ZXIubG9hZGVkKSB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgZmVhdHVyZUxheWVyOiBmb3VuZExheWVyLFxyXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZm91bmRMYXllci53aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgZmVhdHVyZUxheWVyOiBmb3VuZExheWVyLFxyXG4gICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBhbyBhZ3VhcmRhciBjYW1hZGEgZXhpc3RlbnRlOicsIGVycm9yKVxyXG4gICAgICAgICAgICAvLyBTZSBkZXIgZXJybywgY3JpYSB1bWEgZW0gbWVtw7NyaWFcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVMYXllckluTWVtb3J5KClcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIFNlIG7Do28gZW5jb250cm91LCBjcmlhIHVtYSBjYW1hZGEgZW0gbWVtw7NyaWEgYXBlbmFzIHBhcmEgcXVlcmllc1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDYW1hZGEgbsOjbyBlbmNvbnRyYWRhIG5vIG1hcGEsIGNyaWFuZG8gZW0gbWVtw7NyaWEgcGFyYSBxdWVyaWVzJylcclxuICAgICAgICB0aGlzLmNyZWF0ZUxheWVySW5NZW1vcnkoKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLy8gQ3JpYSB1bWEgY2FtYWRhIGVtIG1lbcOzcmlhIChzZW0gYWRpY2lvbmFyIGFvIG1hcGEpIGFwZW5hcyBwYXJhIGZhemVyIHF1ZXJpZXNcclxuICBjcmVhdGVMYXllckluTWVtb3J5ID0gKCkgPT4ge1xyXG4gICAgLy8gQ3JpYSBhIGNhbWFkYSBjb20gYSBVUkwgZml4YSAoc2VtIGFkaWNpb25hciBhbyBtYXBhKVxyXG4gICAgY29uc3QgbGF5ZXIgPSBuZXcgdGhpcy5GZWF0dXJlTGF5ZXIoe1xyXG4gICAgICB1cmw6IHRoaXMuRkVBVFVSRV9TRVJWSUNFX1VSTFxyXG4gICAgfSlcclxuXHJcbiAgICAvLyBBZ3VhcmRhIGEgY2FtYWRhIGNhcnJlZ2FyIChhcGVuYXMgcGFyYSB0ZXIgYWNlc3NvIGFvcyBtZXRhZGFkb3MgZSBmYXplciBxdWVyaWVzKVxyXG4gICAgbGF5ZXIud2hlbigoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGZlYXR1cmVMYXllcjogbGF5ZXIsXHJcbiAgICAgICAgbG9hZGluZzogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGFvIGNhcnJlZ2FyIGEgY2FtYWRhIGVtIG1lbcOzcmlhOicsIGVycm9yKVxyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICAvLyBGdW7Dp8OjbyBwYXJhIGZpbHRyYXIgZSBkYXIgem9vbSBubyBwb2zDrWdvbm8gYmFzZWFkbyBuYSBwZXNxdWlzYVxyXG4gIGhhbmRsZUZpbHRlckFuZFpvb20gPSBhc3luYyAoZXZ0KSA9PiB7XHJcbiAgICBldnQucHJldmVudERlZmF1bHQoKVxyXG5cclxuICAgIC8vIENhc29zIGRlIGVycm9cclxuICAgIGlmICghdGhpcy5zdGF0ZS5qaW11TWFwVmlldykge1xyXG4gICAgICBhbGVydCgnUG9yIGZhdm9yLCBjb25maWd1cmUgdW0gbWFwYSBubyB3aWRnZXQuJylcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMuc3RhdGUuZmVhdHVyZUxheWVyKSB7XHJcbiAgICAgIGFsZXJ0KCdBIGNhbWFkYSBhaW5kYSBuw6NvIGZvaSBjYXJyZWdhZGEuIEFndWFyZGUuLi4nKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGlmICh0aGlzLnN0YXRlLmlkZWFTZWFyY2hJbnB1dCA9PT0gJycgfHwgdGhpcy5zdGF0ZS5pZGVhU2VhcmNoSW5wdXQudHJpbSgpID09PSAnJykge1xyXG4gICAgICBhbGVydCgnUG9yIGZhdm9yLCBkaWdpdGUgdW0gbsO6bWVybyBwYXJhIHBlc3F1aXNhciBuYSBjb2x1bmEgaWRlYS4nKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSB9KVxyXG5cclxuICAgIC8vIENhcnJlZ2Egb3MgbcOzZHVsb3MgbmVjZXNzw6FyaW9zXHJcbiAgICBsb2FkQXJjR0lTSlNBUElNb2R1bGVzKFtcclxuICAgICAgJ2VzcmkvbGF5ZXJzL0ZlYXR1cmVMYXllcicsXHJcbiAgICAgICdlc3JpL2dlb21ldHJ5L1NwYXRpYWxSZWZlcmVuY2UnXHJcbiAgICBdKS50aGVuKChtb2R1bGVzKSA9PiB7XHJcbiAgICAgIFt0aGlzLkZlYXR1cmVMYXllciwgdGhpcy5TcGF0aWFsUmVmZXJlbmNlXSA9IG1vZHVsZXNcclxuXHJcbiAgICAgIGNvbnN0IGxheWVyID0gdGhpcy5zdGF0ZS5mZWF0dXJlTGF5ZXJcclxuICAgICAgY29uc3Qgc2VhcmNoVmFsdWUgPSB0aGlzLnN0YXRlLmlkZWFTZWFyY2hJbnB1dC50cmltKClcclxuICAgICAgXHJcbiAgICAgIC8vIEVzY2FwYSBhc3BhcyBzaW1wbGVzIHBhcmEgZXZpdGFyIFNRTCBpbmplY3Rpb25cclxuICAgICAgY29uc3QgZXNjYXBlZFZhbHVlID0gc2VhcmNoVmFsdWUucmVwbGFjZSgvJy9nLCBcIicnXCIpXHJcblxyXG4gICAgICAvLyBWZXJpZmljYSBzZSBhIGNhbWFkYSBlc3TDoSBjYXJyZWdhZGEgZSBvYnTDqW0gaW5mb3JtYcOnw7VlcyBkb3MgY2FtcG9zXHJcbiAgICAgIC8vIEFndWFyZGEgYSBjYW1hZGEgZXN0YXIgY29tcGxldGFtZW50ZSBjYXJyZWdhZGFcclxuICAgICAgY29uc3QgY2hlY2tBbmRRdWVyeSA9ICgpID0+IHtcclxuICAgICAgICAvLyBMaXN0YSBkZSBwb3Nzw612ZWlzIG5vbWVzIGRlIGNvbHVuYSAoY2FzZS1pbnNlbnNpdGl2ZSlcclxuICAgICAgICBjb25zdCBwb3NzaWJsZUZpZWxkTmFtZXMgPSBbJ2lkZWEnLCAnSURFQScsICdJZGVhJywgJ0lEJywgJ2lkJywgJ0lkJ11cclxuICAgICAgICBsZXQgZmllbGROYW1lID0gJ2lkZWEnIC8vIFBhZHLDo29cclxuICAgICAgICBcclxuICAgICAgICAvLyBUZW50YSBlbmNvbnRyYXIgbyBjYW1wbyBjb3JyZXRvXHJcbiAgICAgICAgaWYgKGxheWVyLmZpZWxkcyAmJiBsYXllci5maWVsZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgY29uc3QgZm91bmRGaWVsZCA9IGxheWVyLmZpZWxkcy5maW5kKGZpZWxkID0+IFxyXG4gICAgICAgICAgICBwb3NzaWJsZUZpZWxkTmFtZXMuaW5jbHVkZXMoZmllbGQubmFtZSlcclxuICAgICAgICAgIClcclxuICAgICAgICAgIGlmIChmb3VuZEZpZWxkKSB7XHJcbiAgICAgICAgICAgIGZpZWxkTmFtZSA9IGZvdW5kRmllbGQubmFtZVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gU2UgbsOjbyBlbmNvbnRyYXIsIHRlbnRhIGZhemVyIHVtYSBidXNjYSBjYXNlLWluc2Vuc2l0aXZlXHJcbiAgICAgICAgICAgIGNvbnN0IGNhc2VJbnNlbnNpdGl2ZUZpZWxkID0gbGF5ZXIuZmllbGRzLmZpbmQoZmllbGQgPT4gXHJcbiAgICAgICAgICAgICAgZmllbGQubmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaWRlYSdcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBpZiAoY2FzZUluc2Vuc2l0aXZlRmllbGQpIHtcclxuICAgICAgICAgICAgICBmaWVsZE5hbWUgPSBjYXNlSW5zZW5zaXRpdmVGaWVsZC5uYW1lXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgLy8gTG9nIGRvcyBjYW1wb3MgZGlzcG9uw612ZWlzIHBhcmEgZGVidWdcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ2FtcG9zIGRpc3BvbsOtdmVpcyBuYSBjYW1hZGE6JywgbGF5ZXIuZmllbGRzLm1hcChmID0+IGYubmFtZSkpXHJcbiAgICAgICAgICAgICAgLy8gVGVudGEgdXNhciBvIHByaW1laXJvIGNhbXBvIHF1ZSBwYXJlY2Ugc2VyIHVtIElEXHJcbiAgICAgICAgICAgICAgY29uc3QgaWRGaWVsZCA9IGxheWVyLmZpZWxkcy5maW5kKGZpZWxkID0+IFxyXG4gICAgICAgICAgICAgICAgZmllbGQudHlwZSA9PT0gJ2VzcmlGaWVsZFR5cGVTdHJpbmcnIHx8IGZpZWxkLnR5cGUgPT09ICdlc3JpRmllbGRUeXBlSW50ZWdlcicgfHwgZmllbGQudHlwZSA9PT0gJ2VzcmlGaWVsZFR5cGVEb3VibGUnXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIGlmIChpZEZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZE5hbWUgPSBpZEZpZWxkLm5hbWVcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBVc2FuZG8gY2FtcG86ICR7ZmllbGROYW1lfWApXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDcmlhIHVtYSBxdWVyeSBwYXJhIGJ1c2NhciBvIHBvbMOtZ29ubyBwZWxhIGNvbHVuYVxyXG4gICAgICAgIC8vIFVzYSBMSUtFIHBhcmEgYnVzY2EgbWFpcyBmbGV4w612ZWwgZSB0cmF0YSBjb21vIHN0cmluZ1xyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gbGF5ZXIuY3JlYXRlUXVlcnkoKVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFRlbnRhIGRpZmVyZW50ZXMgYWJvcmRhZ2VucyBkZSBxdWVyeVxyXG4gICAgICAgIC8vIDEuIEJ1c2NhIGV4YXRhIGNvbW8gc3RyaW5nXHJcbiAgICAgICAgLy8gMi4gQnVzY2EgY29tIExJS0UgcGFyYSB2YWxvcmVzIHBhcmNpYWlzXHJcbiAgICAgICAgLy8gMy4gQnVzY2EgY29tbyBuw7ptZXJvIChzZSBvIHZhbG9yIGZvciBudW3DqXJpY28pXHJcbiAgICAgICAgY29uc3QgaGFzU3BlY2lhbENoYXJzID0gc2VhcmNoVmFsdWUuaW5kZXhPZignLicpICE9PSAtMSB8fCBzZWFyY2hWYWx1ZS5pbmRleE9mKCcvJykgIT09IC0xXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUGFyYSB2YWxvcmVzIGNvbSBjYXJhY3RlcmVzIGVzcGVjaWFpcyAoY29tbyBcIjAwMy45LjQyNzA3NC8yMDI1XCIpLCB1c2EgYXBlbmFzIGNvbW8gc3RyaW5nXHJcbiAgICAgICAgaWYgKGhhc1NwZWNpYWxDaGFycykge1xyXG4gICAgICAgICAgcXVlcnkud2hlcmUgPSBgJHtmaWVsZE5hbWV9ID0gJyR7ZXNjYXBlZFZhbHVlfSdgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIFNlIGZvciB1bSBuw7ptZXJvIHNpbXBsZXMsIHRlbnRhIGNvbW8gbsO6bWVybyBlIGNvbW8gc3RyaW5nXHJcbiAgICAgICAgICBjb25zdCBpc051bWVyaWMgPSAhaXNOYU4ocGFyc2VGbG9hdChzZWFyY2hWYWx1ZSkpICYmIGlzRmluaXRlKHBhcnNlRmxvYXQoc2VhcmNoVmFsdWUpKVxyXG4gICAgICAgICAgaWYgKGlzTnVtZXJpYykge1xyXG4gICAgICAgICAgICBxdWVyeS53aGVyZSA9IGAke2ZpZWxkTmFtZX0gPSAke3NlYXJjaFZhbHVlfSBPUiAke2ZpZWxkTmFtZX0gPSAnJHtlc2NhcGVkVmFsdWV9J2BcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5LndoZXJlID0gYCR7ZmllbGROYW1lfSA9ICcke2VzY2FwZWRWYWx1ZX0nYFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBxdWVyeS5yZXR1cm5HZW9tZXRyeSA9IHRydWVcclxuXHJcbiAgICAgICAgLy8gRXhlY3V0YSBhIHF1ZXJ5XHJcbiAgICAgICAgbGF5ZXIucXVlcnlGZWF0dXJlcyhxdWVyeSkudGhlbigocmVzdWx0cykgPT4ge1xyXG4gICAgICAgICAgaWYgKHJlc3VsdHMuZmVhdHVyZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIC8vIFNlIG7Do28gZW5jb250cm91LCB0ZW50YSBjb20gTElLRVxyXG4gICAgICAgICAgICBjb25zdCBsaWtlUXVlcnkgPSBsYXllci5jcmVhdGVRdWVyeSgpXHJcbiAgICAgICAgICAgIGxpa2VRdWVyeS53aGVyZSA9IGAke2ZpZWxkTmFtZX0gTElLRSAnJSR7ZXNjYXBlZFZhbHVlfSUnYFxyXG4gICAgICAgICAgICBsaWtlUXVlcnkucmV0dXJuR2VvbWV0cnkgPSB0cnVlXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gbGF5ZXIucXVlcnlGZWF0dXJlcyhsaWtlUXVlcnkpLnRoZW4oKGxpa2VSZXN1bHRzKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKGxpa2VSZXN1bHRzLmZlYXR1cmVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoYE5lbmh1bSBwb2zDrWdvbm8gZW5jb250cmFkbyBjb20gJHtmaWVsZE5hbWV9ID0gJHtzZWFyY2hWYWx1ZX1gKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLy8gU2UgZW5jb250cm91IGNvbSBMSUtFLCB1c2EgbyBwcmltZWlybyByZXN1bHRhZG9cclxuICAgICAgICAgICAgICBjb25zdCBmb3VuZEdyYXBoaWMgPSBsaWtlUmVzdWx0cy5mZWF0dXJlc1swXVxyXG4gICAgICAgICAgICAgIGNvbnN0IGFjdHVhbFZhbHVlID0gZm91bmRHcmFwaGljLmF0dHJpYnV0ZXNbZmllbGROYW1lXVxyXG4gICAgICAgICAgICAgIHRoaXMuYXBwbHlGaWx0ZXJBbmRab29tKGxheWVyLCBmb3VuZEdyYXBoaWMsIGZpZWxkTmFtZSwgYWN0dWFsVmFsdWUpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gU2UgZW5jb250cm91LCBhcGxpY2EgZmlsdHJvIGUgem9vbVxyXG4gICAgICAgICAgY29uc3QgZm91bmRHcmFwaGljID0gcmVzdWx0cy5mZWF0dXJlc1swXVxyXG4gICAgICAgICAgY29uc3QgYWN0dWFsVmFsdWUgPSBmb3VuZEdyYXBoaWMuYXR0cmlidXRlc1tmaWVsZE5hbWVdXHJcbiAgICAgICAgICB0aGlzLmFwcGx5RmlsdGVyQW5kWm9vbShsYXllciwgZm91bmRHcmFwaGljLCBmaWVsZE5hbWUsIGFjdHVhbFZhbHVlKVxyXG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBhbyBwZXNxdWlzYXIgZmVhdHVyZXM6JywgZXJyb3IpXHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdEZXRhbGhlcyBkbyBlcnJvOicsIHtcclxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZSxcclxuICAgICAgICAgICAgZGV0YWlsczogZXJyb3IuZGV0YWlscyxcclxuICAgICAgICAgICAgZmllbGROYW1lOiBmaWVsZE5hbWUsXHJcbiAgICAgICAgICAgIHNlYXJjaFZhbHVlOiBzZWFyY2hWYWx1ZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gVGVudGEgbW9zdHJhciBpbmZvcm1hw6fDtWVzIG1haXMgw7p0ZWlzXHJcbiAgICAgICAgICBsZXQgZXJyb3JNZXNzYWdlID0gJ0Vycm8gYW8gcGVzcXVpc2FyLiAnXHJcbiAgICAgICAgICBpZiAobGF5ZXIuZmllbGRzICYmIGxheWVyLmZpZWxkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkTmFtZXMgPSBsYXllci5maWVsZHMubWFwKGYgPT4gZi5uYW1lKS5qb2luKCcsICcpXHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSArPSBgXFxuXFxuQ2FtcG9zIGRpc3BvbsOtdmVpczogJHtmaWVsZE5hbWVzfWBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGVycm9yTWVzc2FnZSArPSBgXFxuXFxuVmVyaWZpcXVlIHNlIGEgY29sdW5hIFwiJHtmaWVsZE5hbWV9XCIgZXhpc3RlIGUgc2UgbyB2YWxvciBcIiR7c2VhcmNoVmFsdWV9XCIgZXN0w6EgY29ycmV0by5gXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGFsZXJ0KGVycm9yTWVzc2FnZSlcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vIFNlIGEgY2FtYWRhIGrDoSBlc3TDoSBjYXJyZWdhZGEsIGV4ZWN1dGEgZGlyZXRhbWVudGVcclxuICAgICAgaWYgKGxheWVyLmxvYWRlZCkge1xyXG4gICAgICAgIGNoZWNrQW5kUXVlcnkoKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIEFndWFyZGEgYSBjYW1hZGEgY2FycmVnYXJcclxuICAgICAgICBsYXllci53aGVuKCgpID0+IHtcclxuICAgICAgICAgIGNoZWNrQW5kUXVlcnkoKVxyXG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBhbyBjYXJyZWdhciBpbmZvcm1hw6fDtWVzIGRhIGNhbWFkYTonLCBlcnJvcilcclxuICAgICAgICAgIGFsZXJ0KCdFcnJvIGFvIGNhcnJlZ2FyIGluZm9ybWHDp8O1ZXMgZGEgY2FtYWRhLiBWZXJpZmlxdWUgc2UgYSBjYW1hZGEgZXN0w6EgYWNlc3PDrXZlbC4nKVxyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8vIEZ1bsOnw6NvIGF1eGlsaWFyIHBhcmEgYXBsaWNhciB6b29tIG5vIHBvbMOtZ29ubyBlbmNvbnRyYWRvXHJcbiAgYXBwbHlGaWx0ZXJBbmRab29tID0gKGxheWVyLCBncmFwaGljLCBmaWVsZE5hbWUsIGFjdHVhbFZhbHVlKSA9PiB7XHJcbiAgICAvLyBBcGVuYXMgYXBsaWNhIHpvb20gbmEgZ2VvbWV0cmlhIGVuY29udHJhZGEgKHNlbSBhZGljaW9uYXIgZmlsdHJvIHZpc3VhbClcclxuICAgIGNvbnNvbGUubG9nKGBBcGxpY2FuZG8gem9vbSBubyBwb2zDrWdvbm86ICR7ZmllbGROYW1lfSA9ICR7YWN0dWFsVmFsdWV9YClcclxuICAgIHRoaXMuYXBwbHlab29tQWZ0ZXJGaWx0ZXIobGF5ZXIsIGdyYXBoaWMpXHJcbiAgfVxyXG5cclxuICAvLyBGdW7Dp8OjbyBhdXhpbGlhciBwYXJhIGFwbGljYXIgem9vbSBubyBwb2zDrWdvbm8gZW5jb250cmFkb1xyXG4gIGFwcGx5Wm9vbUFmdGVyRmlsdGVyID0gKGxheWVyLCBncmFwaGljKSA9PiB7XHJcbiAgICAvLyBBcGxpY2Egem9vbSBkaXJldGFtZW50ZSBuYSBnZW9tZXRyaWEgZG8gcG9sw61nb25vIGVuY29udHJhZG9cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAvLyBEw6Egem9vbSBubyBwb2zDrWdvbm8gZW5jb250cmFkbyBjb20gcGFkZGluZyBwYXJhIG7Do28gY29ydGFyXHJcbiAgICAgIGlmIChncmFwaGljLmdlb21ldHJ5ICYmIHRoaXMuc3RhdGUuamltdU1hcFZpZXcgJiYgdGhpcy5zdGF0ZS5qaW11TWFwVmlldy52aWV3KSB7XHJcbiAgICAgICAgLy8gVXNhIGdvVG8gY29tIHRhcmdldCBlIHBhZGRpbmcgZW0gcGl4ZWxzIHBhcmEgY29udHJvbGFyIG1lbGhvciBvIHpvb21cclxuICAgICAgICAvLyBQYWRkaW5nIGRlIDUwIHBpeGVscyBlbSBjYWRhIGxhZG8gcGFyYSBuw6NvIGNvcnRhciBvIHBvbMOtZ29ub1xyXG4gICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5nb1RvKHtcclxuICAgICAgICAgIHRhcmdldDogZ3JhcGhpYy5nZW9tZXRyeSxcclxuICAgICAgICAgIHBhZGRpbmc6IHtcclxuICAgICAgICAgICAgbGVmdDogNTAsXHJcbiAgICAgICAgICAgIHJpZ2h0OiA1MCxcclxuICAgICAgICAgICAgdG9wOiA1MCxcclxuICAgICAgICAgICAgYm90dG9tOiA1MFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgIGR1cmF0aW9uOiA1MDBcclxuICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdab29tIGFwbGljYWRvIG5vIHBvbMOtZ29ubyBmaWx0cmFkbyBjb20gcGFkZGluZycpXHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcclxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gZGFyIHpvb206JywgZXJyb3IpXHJcbiAgICAgICAgICAvLyBGYWxsYmFjazogdGVudGEgem9vbSBjb20gZXh0ZW50IGNhbGN1bGFkbyBtYW51YWxtZW50ZVxyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgZXh0ZW50ID0gZ3JhcGhpYy5nZW9tZXRyeS5leHRlbnRcclxuICAgICAgICAgICAgLy8gQWRpY2lvbmEgMTAlIGRlIHBhZGRpbmcgY2FsY3VsYWRvIGEgcGFydGlyIGRvIHRhbWFuaG8gZG8gZXh0ZW50XHJcbiAgICAgICAgICAgIGNvbnN0IHBhZGRpbmdGYWN0b3IgPSAwLjFcclxuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBleHRlbnQud2lkdGhcclxuICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gZXh0ZW50LmhlaWdodFxyXG4gICAgICAgICAgICBjb25zdCBwYWRkZWRFeHRlbnQgPSBleHRlbnQuZXhwYW5kKHdpZHRoICogcGFkZGluZ0ZhY3RvciwgaGVpZ2h0ICogcGFkZGluZ0ZhY3RvcilcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuamltdU1hcFZpZXcudmlldy5nb1RvKHBhZGRlZEV4dGVudCwge1xyXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDBcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1pvb20gYXBsaWNhZG8gdXNhbmRvIGV4dGVudCBjb20gcGFkZGluZyBjYWxjdWxhZG8nKVxyXG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxyXG4gICAgICAgICAgICB9KS5jYXRjaCgoZmFsbGJhY2tFcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gbm8gem9vbSBkZSBmYWxsYmFjazonLCBmYWxsYmFja0Vycm9yKVxyXG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSBjYXRjaCAoY2FsY0Vycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gY2FsY3VsYXIgZXh0ZW50OicsIGNhbGNFcnJvcilcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcclxuICAgICAgfVxyXG4gICAgfSwgNTAwKVxyXG4gIH1cclxuXHJcbiAgLy8gRnVuw6fDo28gcGFyYSBsaW1wYXIgYSBwZXNxdWlzYSBlIHJlc3RhdXJhciBhIHZpc3VhbGl6YcOnw6NvIGluaWNpYWxcclxuICBoYW5kbGVDbGVhckZpbHRlciA9ICgpID0+IHtcclxuICAgIC8vIFJlc3RhdXJhIGEgdmlzdWFsaXphw6fDo28gaW5pY2lhbCBkbyBtYXBhXHJcbiAgICBpZiAodGhpcy5zdGF0ZS5qaW11TWFwVmlldyAmJiB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcpIHtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUuaW5pdGlhbEV4dGVudCkge1xyXG4gICAgICAgIC8vIFJlc3RhdXJhIGEgZXh0ZW5zw6NvIGluaWNpYWwgc2FsdmFcclxuICAgICAgICB0aGlzLnN0YXRlLmppbXVNYXBWaWV3LnZpZXcuZ29Ubyh0aGlzLnN0YXRlLmluaXRpYWxFeHRlbnQsIHtcclxuICAgICAgICAgIGR1cmF0aW9uOiA1MDBcclxuICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdWaXN1YWxpemHDp8OjbyBpbmljaWFsIHJlc3RhdXJhZGEnKVxyXG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBhbyByZXN0YXVyYXIgdmlzdWFsaXphw6fDo28gaW5pY2lhbDonLCBlcnJvcilcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIExpbXBhIG8gY2FtcG8gZGUgcGVzcXVpc2FcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBpZGVhU2VhcmNoSW5wdXQ6ICcnXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgLy8gRnVuw6fDo28gcGFyYSBnZXJhciByZWxhdMOzcmlvIHVzYW5kbyBhIGZlcnJhbWVudGEgZGUgZ2VvcHJvY2Vzc2FtZW50b1xyXG4gIGhhbmRsZUdlbmVyYXRlUmVwb3J0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgLy8gRGVjbGFyYSB2YXJpw6F2ZWlzIG5vIGVzY29wbyBkYSBmdW7Dp8OjbyBwYXJhIHF1ZSBlc3RlamFtIGFjZXNzw612ZWlzIG5vIGNhdGNoXHJcbiAgICBsZXQgaWRlYU51bWJlciA9ICcnXHJcbiAgICBsZXQgcGFyYW1OYW1lID0gbnVsbFxyXG4gICAgbGV0IGV4ZWN1dGVVcmwgPSAnJ1xyXG4gICAgbGV0IHRva2VuID0gbnVsbFxyXG4gICAgXHJcbiAgICAvLyBWYWxpZGHDp8O1ZXMgaW5pY2lhaXNcclxuICAgIGlmICh0aGlzLnN0YXRlLmlkZWFTZWFyY2hJbnB1dCA9PT0gJycgfHwgdGhpcy5zdGF0ZS5pZGVhU2VhcmNoSW5wdXQudHJpbSgpID09PSAnJykge1xyXG4gICAgICBhbGVydCgnUG9yIGZhdm9yLCBkaWdpdGUgdW0gbsO6bWVybyBkZSBpZGVhIHBhcmEgZ2VyYXIgbyByZWxhdMOzcmlvLicpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGlkZWFOdW1iZXIgPSB0aGlzLnN0YXRlLmlkZWFTZWFyY2hJbnB1dC50cmltKClcclxuICAgIFxyXG4gICAgLy8gVmFsaWRhw6fDo28gZG8gZm9ybWF0byBkbyBuw7ptZXJvIGRlIGlkZWFcclxuICAgIC8vIEZvcm1hdG8gZXNwZXJhZG86IFhYWC5YLlhYWFhYWC9ZWVlZIChleDogMDAzLjkuNDI3Mzg0LzIwMjUpXHJcbiAgICBjb25zdCBpZGVhUGF0dGVybiA9IC9eXFxkezEsM31cXC5cXGR7MSwyfVxcLlxcZHsxLDZ9XFwvXFxkezR9JC9cclxuICAgIGlmICghaWRlYVBhdHRlcm4udGVzdChpZGVhTnVtYmVyKSkge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ0Zvcm1hdG8gZG8gbsO6bWVybyBkZSBpZGVhIHBvZGUgZXN0YXIgaW5jb3JyZXRvOicsIGlkZWFOdW1iZXIpXHJcbiAgICAgIGNvbnNvbGUud2FybignRm9ybWF0byBlc3BlcmFkbzogWFhYLlguWFhYWFhYL1lZWVkgKGV4OiAwMDMuOS40MjczODQvMjAyNSknKVxyXG4gICAgICAvLyBOw6NvIGJsb3F1ZWlhLCBhcGVuYXMgYXZpc2Egbm8gY29uc29sZVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBSZW1vdmUgZXNwYcOnb3MgZXh0cmFzIGUgY2FyYWN0ZXJlcyBpbnZpc8OtdmVpc1xyXG4gICAgaWRlYU51bWJlciA9IGlkZWFOdW1iZXIucmVwbGFjZSgvXFxzKy9nLCAnJykudHJpbSgpXHJcbiAgICBcclxuICAgIC8vIFZhbGlkYcOnw6NvIGRlIGNvbXByaW1lbnRvIG3DrW5pbW9cclxuICAgIGlmIChpZGVhTnVtYmVyLmxlbmd0aCA8IDEwKSB7XHJcbiAgICAgIGFsZXJ0KCdPIG7Dum1lcm8gZGUgaWRlYSBwYXJlY2UgZXN0YXIgaW5jb21wbGV0by4gVmVyaWZpcXVlIG8gZm9ybWF0bzogWFhYLlguWFhYWFhYL1lZWVknKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc29sZS5sb2coJz09PSBWQUxJREHDh8ODTyBETyBWQUxPUiA9PT0nKVxyXG4gICAgY29uc29sZS5sb2coJ1ZhbG9yIG9yaWdpbmFsOicsIHRoaXMuc3RhdGUuaWRlYVNlYXJjaElucHV0KVxyXG4gICAgY29uc29sZS5sb2coJ1ZhbG9yIHByb2Nlc3NhZG86JywgaWRlYU51bWJlcilcclxuICAgIGNvbnNvbGUubG9nKCdDb21wcmltZW50bzonLCBpZGVhTnVtYmVyLmxlbmd0aClcclxuICAgIGNvbnNvbGUubG9nKCdGb3JtYXRvIHbDoWxpZG86JywgaWRlYVBhdHRlcm4udGVzdChpZGVhTnVtYmVyKSlcclxuICAgIFxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSlcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zb2xlLmxvZygnSW5pY2lhbmRvIGdlcmHDp8OjbyBkZSByZWxhdMOzcmlvIHBhcmEgaWRlYTonLCBpZGVhTnVtYmVyKVxyXG4gICAgICBcclxuICAgICAgLy8gQ2FycmVnYSBJZGVudGl0eU1hbmFnZXIgcGFyYSBvYnRlciB0b2tlbiBkZSBhdXRlbnRpY2HDp8Ojb1xyXG4gICAgICBjb25zb2xlLmxvZygnQ2FycmVnYW5kbyBJZGVudGl0eU1hbmFnZXIgcGFyYSBhdXRlbnRpY2HDp8Ojby4uLicpXHJcbiAgICAgIGNvbnN0IGlkZW50aXR5TW9kdWxlcyA9IGF3YWl0IGxvYWRBcmNHSVNKU0FQSU1vZHVsZXMoW1xyXG4gICAgICAgICdlc3JpL2lkZW50aXR5L0lkZW50aXR5TWFuYWdlcidcclxuICAgICAgXSlcclxuICAgICAgY29uc3QgW0lkZW50aXR5TWFuYWdlcl0gPSBpZGVudGl0eU1vZHVsZXNcclxuICAgICAgXHJcbiAgICAgIC8vIE9idMOpbSBvIHRva2VuIHBhcmEgYSBVUkwgZG8gc2VydmnDp28gKGrDoSBkZWNsYXJhZG8gbm8gaW7DrWNpbyBkYSBmdW7Dp8OjbylcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjcmVkZW50aWFsID0gSWRlbnRpdHlNYW5hZ2VyLmZpbmRDcmVkZW50aWFsKHRoaXMuR1BfU0VSVklDRV9VUkwpXHJcbiAgICAgICAgaWYgKGNyZWRlbnRpYWwgJiYgY3JlZGVudGlhbC50b2tlbikge1xyXG4gICAgICAgICAgdG9rZW4gPSBjcmVkZW50aWFsLnRva2VuXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnVG9rZW4gZW5jb250cmFkbyB2aWEgSWRlbnRpdHlNYW5hZ2VyJylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gVGVudGEgZ2VyYXIgdG9rZW4gYXV0b21hdGljYW1lbnRlXHJcbiAgICAgICAgICBjb25zdCBzZXJ2ZXJJbmZvID0gSWRlbnRpdHlNYW5hZ2VyLmZpbmRTZXJ2ZXJJbmZvKHRoaXMuR1BfU0VSVklDRV9VUkwpXHJcbiAgICAgICAgICBpZiAoc2VydmVySW5mbykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnT2J0ZW5kbyB0b2tlbiBhdXRvbWF0aWNhbWVudGUuLi4nKVxyXG4gICAgICAgICAgICBhd2FpdCBJZGVudGl0eU1hbmFnZXIuY2hlY2tTaWduSW5TdGF0dXModGhpcy5HUF9TRVJWSUNFX1VSTClcclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlZENyZWRlbnRpYWwgPSBJZGVudGl0eU1hbmFnZXIuZmluZENyZWRlbnRpYWwodGhpcy5HUF9TRVJWSUNFX1VSTClcclxuICAgICAgICAgICAgaWYgKHVwZGF0ZWRDcmVkZW50aWFsICYmIHVwZGF0ZWRDcmVkZW50aWFsLnRva2VuKSB7XHJcbiAgICAgICAgICAgICAgdG9rZW4gPSB1cGRhdGVkQ3JlZGVudGlhbC50b2tlblxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUb2tlbiBvYnRpZG8gYXV0b21hdGljYW1lbnRlJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAodG9rZW5FcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUud2FybignRXJybyBhbyBvYnRlciB0b2tlbiwgdGVudGFuZG8gc2VtIGF1dGVudGljYcOnw6NvOicsIHRva2VuRXJyb3IpXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vIEZ1bsOnw6NvIGF1eGlsaWFyIHBhcmEgYWRpY2lvbmFyIHRva2VuIMOgcyBVUkxzXHJcbiAgICAgIGNvbnN0IGFkZFRva2VuVG9VcmwgPSAodXJsKSA9PiB7XHJcbiAgICAgICAgaWYgKCF0b2tlbikge1xyXG4gICAgICAgICAgcmV0dXJuIHVybFxyXG4gICAgICAgIH1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgdXJsT2JqID0gbmV3IFVSTCh1cmwpXHJcbiAgICAgICAgICB1cmxPYmouc2VhcmNoUGFyYW1zLnNldCgndG9rZW4nLCB0b2tlbilcclxuICAgICAgICAgIHJldHVybiB1cmxPYmoudG9TdHJpbmcoKVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgIC8vIFNlIGEgVVJMIG7Do28gZm9yIGFic29sdXRhLCB0cmF0YSBjb21vIHN0cmluZ1xyXG4gICAgICAgICAgY29uc3Qgc2VwYXJhdG9yID0gdXJsLmluY2x1ZGVzKCc/JykgPyAnJicgOiAnPydcclxuICAgICAgICAgIHJldHVybiBgJHt1cmx9JHtzZXBhcmF0b3J9dG9rZW49JHtlbmNvZGVVUklDb21wb25lbnQodG9rZW4pfWBcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vIFByaW1laXJvLCB2YW1vcyBvYnRlciBpbmZvcm1hw6fDtWVzIHNvYnJlIGEgR1AgcGFyYSBkZXNjb2JyaXIgb3MgcGFyw6JtZXRyb3NcclxuICAgICAgLy8gQ29tZcOnYSB0ZW50YW5kbyBkYSBHUCBnZXJhbCAobWFpcyBjb25macOhdmVsKVxyXG4gICAgICBjb25zb2xlLmxvZygnT2J0ZW5kbyBpbmZvcm1hw6fDtWVzIGRhIGZlcnJhbWVudGEgZGUgZ2VvcHJvY2Vzc2FtZW50by4uLicpXHJcbiAgICAgIFxyXG4gICAgICBsZXQgZ3BJbmZvXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgLy8gVGVudGEgcHJpbWVpcm8gZGEgR1AgZ2VyYWxcclxuICAgICAgICBjb25zdCBncEluZm9VcmwgPSBhZGRUb2tlblRvVXJsKGAke3RoaXMuR1BfU0VSVklDRV9VUkx9P2Y9anNvbmApXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RlbnRhbmRvIG9idGVyIGluZm9ybWHDp8O1ZXMgZGEgR1AgZ2VyYWw6JywgZ3BJbmZvVXJsKVxyXG4gICAgICAgIGNvbnN0IGdwSW5mb1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goZ3BJbmZvVXJsKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICghZ3BJbmZvUmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJybyBhbyBvYnRlciBpbmZvcm1hw6fDtWVzOiAke2dwSW5mb1Jlc3BvbnNlLnN0YXR1c30gJHtncEluZm9SZXNwb25zZS5zdGF0dXNUZXh0fWApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGdwSW5mbyA9IGF3YWl0IGdwSW5mb1Jlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdJbmZvcm1hw6fDtWVzIGRhIEdQIGdlcmFsIG9idGlkYXMgY29tIHN1Y2Vzc28nKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdJbmZvcm1hw6fDtWVzIGNvbXBsZXRhcyBkYSBHUDonLCBKU09OLnN0cmluZ2lmeShncEluZm8sIG51bGwsIDIpKVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFNlIGEgR1AgZ2VyYWwgcmV0b3Jub3UgdGFza3MsIHRlbnRhIG9idGVyIGluZm9ybWHDp8O1ZXMgZGEgdGFzayBlc3BlY8OtZmljYVxyXG4gICAgICAgIGlmIChncEluZm8udGFza3MgJiYgQXJyYXkuaXNBcnJheShncEluZm8udGFza3MpICYmIGdwSW5mby50YXNrcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnVGFza3MgZGlzcG9uw612ZWlzIG5hIEdQOicsIGdwSW5mby50YXNrcy5tYXAodCA9PiB0ICYmIHQubmFtZSA/IHQubmFtZSA6ICdzZW0gbm9tZScpKVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAvLyBUZW50YSBlbmNvbnRyYXIgYSB0YXNrIHF1ZSBjb3JyZXNwb25kZSDDoCBVUkwgZml4YVxyXG4gICAgICAgICAgY29uc3QgdGFza05hbWVGcm9tVXJsID0gJ3JlbGF0b3Jpb19hbmFsaXNlX2xhcGEnXHJcbiAgICAgICAgICBjb25zdCBtYXRjaGluZ1Rhc2sgPSBncEluZm8udGFza3MuZmluZCh0ID0+IHtcclxuICAgICAgICAgICAgaWYgKCF0IHx8ICF0Lm5hbWUpIHJldHVybiBmYWxzZVxyXG4gICAgICAgICAgICBjb25zdCBuYW1lID0gU3RyaW5nKHQubmFtZSkudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICByZXR1cm4gbmFtZSA9PT0gdGFza05hbWVGcm9tVXJsLnRvTG93ZXJDYXNlKCkgfHwgXHJcbiAgICAgICAgICAgICAgICAgICBuYW1lID09PSAncmVsYXRvcmlvX2FuYWxpc2VfbGFwYScgfHxcclxuICAgICAgICAgICAgICAgICAgIG5hbWUuaW5jbHVkZXMoJ3JlbGF0b3JpbycpIHx8IFxyXG4gICAgICAgICAgICAgICAgICAgbmFtZS5pbmNsdWRlcygnYW5hbGlzZScpIHx8XHJcbiAgICAgICAgICAgICAgICAgICBuYW1lLmluY2x1ZGVzKCdsYXBhJylcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlmIChtYXRjaGluZ1Rhc2spIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1Rhc2sgZW5jb250cmFkYTonLCBtYXRjaGluZ1Rhc2submFtZSlcclxuICAgICAgICAgICAgLy8gVGVudGEgb2J0ZXIgaW5mb3JtYcOnw7VlcyBkZXRhbGhhZGFzIGRhIHRhc2tcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICBjb25zdCB0YXNrTmFtZUVuY29kZWQgPSBlbmNvZGVVUklDb21wb25lbnQobWF0Y2hpbmdUYXNrLm5hbWUpXHJcbiAgICAgICAgICAgICAgY29uc3QgdGFza0luZm9VcmwgPSBhZGRUb2tlblRvVXJsKGAke3RoaXMuR1BfU0VSVklDRV9VUkx9LyR7dGFza05hbWVFbmNvZGVkfT9mPWpzb25gKVxyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUZW50YW5kbyBvYnRlciBpbmZvcm1hw6fDtWVzIGRldGFsaGFkYXMgZGEgdGFzazonLCB0YXNrSW5mb1VybClcclxuICAgICAgICAgICAgICBjb25zdCB0YXNrSW5mb1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2godGFza0luZm9VcmwpXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgaWYgKHRhc2tJbmZvUmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tJbmZvID0gYXdhaXQgdGFza0luZm9SZXNwb25zZS5qc29uKClcclxuICAgICAgICAgICAgICAgIGlmICh0YXNrSW5mby5wYXJhbWV0ZXJzICYmIEFycmF5LmlzQXJyYXkodGFza0luZm8ucGFyYW1ldGVycykpIHtcclxuICAgICAgICAgICAgICAgICAgZ3BJbmZvID0gdGFza0luZm9cclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1VzYW5kbyBpbmZvcm1hw6fDtWVzIGRldGFsaGFkYXMgZGEgdGFzayBlc3BlY8OtZmljYScpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGNhdGNoICh0YXNrRXJyb3IpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ07Do28gZm9pIHBvc3PDrXZlbCBvYnRlciBpbmZvcm1hw6fDtWVzIGRldGFsaGFkYXMgZGEgdGFzaywgdXNhbmRvIGluZm9ybWHDp8O1ZXMgZGEgR1AgZ2VyYWw6JywgdGFza0Vycm9yKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChpbmZvRXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGFvIG9idGVyIGluZm9ybWHDp8O1ZXMgZGEgR1A6JywgaW5mb0Vycm9yKVxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgTsOjbyBmb2kgcG9zc8OtdmVsIGFjZXNzYXIgYSBmZXJyYW1lbnRhIGRlIGdlb3Byb2Nlc3NhbWVudG8uIFZlcmlmaXF1ZSBzZSBhIFVSTCBlc3TDoSBjb3JyZXRhIGUgYWNlc3PDrXZlbC5gKVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvLyBWZXJpZmljYSBzZSBncEluZm8gZm9pIG9idGlkbyBjb3JyZXRhbWVudGVcclxuICAgICAgaWYgKCFncEluZm8pIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdncEluZm8gZXN0w6EgdmF6aW8gb3UgdW5kZWZpbmVkJylcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ07Do28gZm9pIHBvc3PDrXZlbCBvYnRlciBpbmZvcm1hw6fDtWVzIGRhIGZlcnJhbWVudGEgZGUgZ2VvcHJvY2Vzc2FtZW50by4nKVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvLyBEZXNjb2JyZSBxdWFsIMOpIG8gcGFyw6JtZXRybyBkZSBlbnRyYWRhIGRhIEdQXHJcbiAgICAgIC8vIElNUE9SVEFOVEU6IERldmVtb3MgdXNhciBleGF0YW1lbnRlIG8gbm9tZSBkbyBwYXLDom1ldHJvIHF1ZSBhIEdQIGVzcGVyYVxyXG4gICAgICAvLyBPIHdpZGdldCByZWNlYmUgbyB2YWxvciBkYSBjb2x1bmEgXCJpZGVhXCIsIG1hcyBlbnZpYSBjb20gbyBub21lIHF1ZSBhIEdQIGVzcGVyYVxyXG4gICAgICBsZXQgcGFyYW1OYW1lID0gbnVsbFxyXG4gICAgICBsZXQgcGFyYW1JbmZvID0gbnVsbFxyXG4gICAgICBcclxuICAgICAgLy8gTG9nIGRhIGVzdHJ1dHVyYSByZWNlYmlkYSBwYXJhIGRlYnVnXHJcbiAgICAgIGNvbnNvbGUubG9nKCc9PT0gRVNUUlVUVVJBIERBIFJFU1BPU1RBIERBIEdQID09PScpXHJcbiAgICAgIGNvbnNvbGUubG9nKCdncEluZm8gZXhpc3RlPycsICEhZ3BJbmZvKVxyXG4gICAgICBjb25zb2xlLmxvZygnZ3BJbmZvLnBhcmFtZXRlcnMgZXhpc3RlPycsICEhZ3BJbmZvLnBhcmFtZXRlcnMpXHJcbiAgICAgIGNvbnNvbGUubG9nKCdncEluZm8ucGFyYW1ldGVycyDDqSBhcnJheT8nLCBBcnJheS5pc0FycmF5KGdwSW5mby5wYXJhbWV0ZXJzKSlcclxuICAgICAgY29uc29sZS5sb2coJ0VzdHJ1dHVyYSBjb21wbGV0YSBkZSBncEluZm86JywgSlNPTi5zdHJpbmdpZnkoZ3BJbmZvLCBudWxsLCAyKSlcclxuICAgICAgXHJcbiAgICAgIGlmIChncEluZm8ucGFyYW1ldGVycyAmJiBBcnJheS5pc0FycmF5KGdwSW5mby5wYXJhbWV0ZXJzKSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCc9PT0gUEFSw4JNRVRST1MgRElTUE9Ow41WRUlTIE5BIEdQID09PScpXHJcbiAgICAgICAgY29uc3QgYWxsUGFyYW1zID0gZ3BJbmZvLnBhcmFtZXRlcnNcclxuICAgICAgICAgIC5maWx0ZXIocCA9PiBwICE9IG51bGwpXHJcbiAgICAgICAgICAubWFwKHAgPT4gKHtcclxuICAgICAgICAgICAgbmFtZTogcC5uYW1lIHx8ICdzZW0gbm9tZScsXHJcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiBwLmRpc3BsYXlOYW1lIHx8IHAubmFtZSB8fCAnc2VtIG5vbWUnLFxyXG4gICAgICAgICAgICBkYXRhVHlwZTogcC5kYXRhVHlwZSB8fCAnZGVzY29uaGVjaWRvJyxcclxuICAgICAgICAgICAgZGlyZWN0aW9uOiBwLmRpcmVjdGlvbiB8fCAnZGVzY29uaGVjaWRvJyxcclxuICAgICAgICAgICAgcGFyYW1ldGVyVHlwZTogcC5wYXJhbWV0ZXJUeXBlIHx8ICdkZXNjb25oZWNpZG8nLFxyXG4gICAgICAgICAgICByZXF1aXJlZDogcC5wYXJhbWV0ZXJUeXBlID09PSAnZXNyaUdQUGFyYW1ldGVyVHlwZVJlcXVpcmVkJyB8fCBwLnJlcXVpcmVkID09PSB0cnVlXHJcbiAgICAgICAgICB9KSlcclxuICAgICAgICBjb25zb2xlLmxvZygnVG9kb3Mgb3MgcGFyw6JtZXRyb3M6JywgSlNPTi5zdHJpbmdpZnkoYWxsUGFyYW1zLCBudWxsLCAyKSlcclxuICAgICAgICBcclxuICAgICAgICAvLyBQcm9jdXJhIHBlbG8gcHJpbWVpcm8gcGFyw6JtZXRybyBkZSBlbnRyYWRhIChpbnB1dClcclxuICAgICAgICBjb25zdCBpbnB1dFBhcmFtcyA9IGdwSW5mby5wYXJhbWV0ZXJzLmZpbHRlcihwID0+IFxyXG4gICAgICAgICAgcCAhPSBudWxsICYmXHJcbiAgICAgICAgICBwLm5hbWUgJiZcclxuICAgICAgICAgIChwLmRpcmVjdGlvbiA9PT0gJ2VzcmlHUFBhcmFtZXRlckRpcmVjdGlvbklucHV0JyB8fCBwLmRpcmVjdGlvbiA9PT0gJ0dQUGFyYW1ldGVyRGlyZWN0aW9uSW5wdXQnKVxyXG4gICAgICAgIClcclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZygnUGFyw6JtZXRyb3MgZGUgZW50cmFkYSBlbmNvbnRyYWRvczonLCBpbnB1dFBhcmFtc1xyXG4gICAgICAgICAgLmZpbHRlcihwID0+IHAgIT0gbnVsbClcclxuICAgICAgICAgIC5tYXAocCA9PiAoe1xyXG4gICAgICAgICAgICBuYW1lOiBwLm5hbWUgfHwgJ3NlbSBub21lJyxcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IHAuZGlzcGxheU5hbWUgfHwgcC5uYW1lIHx8ICdzZW0gbm9tZScsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiBwLmRhdGFUeXBlIHx8ICdkZXNjb25oZWNpZG8nLFxyXG4gICAgICAgICAgICByZXF1aXJlZDogcC5wYXJhbWV0ZXJUeXBlID09PSAnZXNyaUdQUGFyYW1ldGVyVHlwZVJlcXVpcmVkJyB8fCBwLnJlcXVpcmVkID09PSB0cnVlXHJcbiAgICAgICAgICB9KSkpXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGlucHV0UGFyYW1zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIC8vIFVzYSBvIHByaW1laXJvIHBhcsOibWV0cm8gZGUgZW50cmFkYSAocXVlIMOpIG8gcXVlIGEgR1AgZXNwZXJhKVxyXG4gICAgICAgICAgcGFyYW1JbmZvID0gaW5wdXRQYXJhbXNbMF1cclxuICAgICAgICAgIHBhcmFtTmFtZSA9IHBhcmFtSW5mby5uYW1lIC8vIFVzYSBleGF0YW1lbnRlIG8gbm9tZSBxdWUgYSBHUCBlc3BlcmEgKHBvZGUgdGVyIGNhcmFjdGVyZXMgZXNwZWNpYWlzKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coJz09PSBQQVLDgk1FVFJPIFNFTEVDSU9OQURPID09PScpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnTm9tZSB0w6ljbmljbyBkbyBwYXLDom1ldHJvIChzZXLDoSB1c2FkbyBubyByZXF1ZXN0KTonLCBwYXJhbU5hbWUpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnTm9tZSBkZSBleGliacOnw6NvIChsYWJlbCBuYSBpbnRlcmZhY2UpOicsIHBhcmFtSW5mby5kaXNwbGF5TmFtZSB8fCBwYXJhbUluZm8ubmFtZSlcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdEZXRhbGhlcyBjb21wbGV0b3M6Jywge1xyXG4gICAgICAgICAgICBuYW1lOiBwYXJhbUluZm8ubmFtZSxcclxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IHBhcmFtSW5mby5kaXNwbGF5TmFtZSB8fCBwYXJhbUluZm8ubmFtZSxcclxuICAgICAgICAgICAgZGF0YVR5cGU6IHBhcmFtSW5mby5kYXRhVHlwZSxcclxuICAgICAgICAgICAgZGlyZWN0aW9uOiBwYXJhbUluZm8uZGlyZWN0aW9uLFxyXG4gICAgICAgICAgICByZXF1aXJlZDogcGFyYW1JbmZvLnBhcmFtZXRlclR5cGUgPT09ICdlc3JpR1BQYXJhbWV0ZXJUeXBlUmVxdWlyZWQnIHx8IHBhcmFtSW5mby5yZXF1aXJlZCA9PT0gdHJ1ZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignTmVuaHVtIHBhcsOibWV0cm8gZGUgZW50cmFkYSBlbmNvbnRyYWRvIG5hIEdQIScpXHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ07Do28gZm9pIHBvc3PDrXZlbCBpZGVudGlmaWNhciBvIHBhcsOibWV0cm8gZGUgZW50cmFkYSBkYSBmZXJyYW1lbnRhIGRlIGdlb3Byb2Nlc3NhbWVudG8uJylcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignTsOjbyBmb2kgcG9zc8OtdmVsIG9idGVyIHBhcsOibWV0cm9zIGRhIEdQIScpXHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXN0cnV0dXJhIGRlIGdwSW5mbyByZWNlYmlkYTonLCBKU09OLnN0cmluZ2lmeShncEluZm8sIG51bGwsIDIpKVxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2dwSW5mby5wYXJhbWV0ZXJzOicsIGdwSW5mby5wYXJhbWV0ZXJzKVxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RpcG8gZGUgZ3BJbmZvLnBhcmFtZXRlcnM6JywgdHlwZW9mIGdwSW5mby5wYXJhbWV0ZXJzKVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFRlbnRhIHVzYXIgYSB0YXNrIGVzcGVjw61maWNhIGRpcmV0YW1lbnRlIHNlIG7Do28gY29uc2VndWlyIG9idGVyIHBhcsOibWV0cm9zXHJcbiAgICAgICAgaWYgKGdwSW5mby50YXNrcyAmJiBBcnJheS5pc0FycmF5KGdwSW5mby50YXNrcykgJiYgZ3BJbmZvLnRhc2tzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIGNvbnNvbGUud2FybignVGVudGFuZG8gdXNhciBpbmZvcm1hw6fDtWVzIGRhcyB0YXNrcyBkaXNwb27DrXZlaXMuLi4nKVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAvLyBUZW50YSB0b2RhcyBhcyB0YXNrcyBhdMOpIGVuY29udHJhciB1bWEgY29tIHBhcsOibWV0cm9zXHJcbiAgICAgICAgICBmb3IgKGNvbnN0IHRhc2sgb2YgZ3BJbmZvLnRhc2tzKSB7XHJcbiAgICAgICAgICAgIGlmICghdGFzaykgY29udGludWVcclxuICAgICAgICAgICAgY29uc3QgdGFza05hbWUgPSB0YXNrLm5hbWUgfHwgdGFzay5pZCB8fCAnc2VtIG5vbWUnXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdWZXJpZmljYW5kbyB0YXNrOicsIHRhc2tOYW1lKVxyXG4gICAgICAgICAgICBpZiAodGFzay5wYXJhbWV0ZXJzICYmIEFycmF5LmlzQXJyYXkodGFzay5wYXJhbWV0ZXJzKSkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGlucHV0UGFyYW1zID0gdGFzay5wYXJhbWV0ZXJzLmZpbHRlcihwID0+IFxyXG4gICAgICAgICAgICAgICAgcCAmJiBcclxuICAgICAgICAgICAgICAgIChwLmRpcmVjdGlvbiA9PT0gJ2VzcmlHUFBhcmFtZXRlckRpcmVjdGlvbklucHV0JyB8fCBwLmRpcmVjdGlvbiA9PT0gJ0dQUGFyYW1ldGVyRGlyZWN0aW9uSW5wdXQnKSAmJlxyXG4gICAgICAgICAgICAgICAgcC5uYW1lXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgIGlmIChpbnB1dFBhcmFtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBncEluZm8ucGFyYW1ldGVycyA9IHRhc2sucGFyYW1ldGVyc1xyXG4gICAgICAgICAgICAgICAgcGFyYW1JbmZvID0gaW5wdXRQYXJhbXNbMF1cclxuICAgICAgICAgICAgICAgIHBhcmFtTmFtZSA9IHBhcmFtSW5mby5uYW1lXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVXNhbmRvIHBhcsOibWV0cm9zIGRhIHRhc2s6JywgdGFza05hbWUsICctIFBhcsOibWV0cm86JywgcGFyYW1OYW1lKVxyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gU2UgYWluZGEgbsOjbyBlbmNvbnRyb3UgcGFyw6JtZXRyb3MsIHRlbnRhIHVzYXIgdW0gbm9tZSBwYWRyw6NvIGNvbXVtXHJcbiAgICAgICAgaWYgKCFwYXJhbU5hbWUpIHtcclxuICAgICAgICAgIGNvbnNvbGUud2FybignTsOjbyBmb2kgcG9zc8OtdmVsIG9idGVyIHBhcsOibWV0cm9zIGRhIEdQLiBUZW50YW5kbyB1c2FyIG5vbWVzIHBhZHLDo28uLi4nKVxyXG4gICAgICAgICAgLy8gTGlzdGEgZGUgbm9tZXMgY29tdW5zIGRlIHBhcsOibWV0cm9zIHBhcmEgdGVudGFyXHJcbiAgICAgICAgICBjb25zdCBjb21tb25QYXJhbU5hbWVzID0gWydpZGVhJywgJ0lERUEnLCAnSWRlYScsICdudW1lcm9faWRlYScsICdudW1lcm9JZGVhJywgJ051bWVyb0lERUEnLCAndmFsb3InLCAnaW5wdXQnLCAnSW5wdXQnXVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAvLyBTZSB0ZW1vcyBhIFVSTCBmaXhhIGRvIHN1Ym1pdEpvYiwgcG9kZW1vcyB0ZW50YXIgdXNhciBkaXJldGFtZW50ZVxyXG4gICAgICAgICAgLy8gTWFzIHByaW1laXJvLCB2YW1vcyB0ZW50YXIgb2J0ZXIgaW5mb3JtYcOnw7VlcyBkYSB0YXNrIGVzcGVjw61maWNhIHBlbGEgVVJMXHJcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ1VzYW5kbyBVUkwgZml4YSBkbyBzdWJtaXRKb2IgZGlyZXRhbWVudGUuIFRlbnRhbmRvIGRlc2NvYnJpciBwYXLDom1ldHJvLi4uJylcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gRGVmaW5lIHVtIHBhcsOibWV0cm8gcGFkcsOjbyBwYXJhIHRlbnRhclxyXG4gICAgICAgICAgcGFyYW1OYW1lID0gJ2lkZWEnIC8vIE5vbWUgbWFpcyBjb211bVxyXG4gICAgICAgICAgcGFyYW1JbmZvID0geyBuYW1lOiBwYXJhbU5hbWUsIGRhdGFUeXBlOiAnR1BTdHJpbmcnIH1cclxuICAgICAgICAgIGNvbnNvbGUud2FybignVXNhbmRvIHBhcsOibWV0cm8gcGFkcsOjbzonLCBwYXJhbU5hbWUpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvLyBDb25maXJtYSBxdWFsIHBhcsOibWV0cm8gc2Vyw6EgdXNhZG8gKGRldmUgc2VyIGV4YXRhbWVudGUgbyBxdWUgYSBHUCBlc3BlcmEpXHJcbiAgICAgIGNvbnNvbGUubG9nKCc9PT0gUEFSw4JNRVRSTyBQQVJBIEVOVklBUiDDgCBHUCA9PT0nKVxyXG4gICAgICBjb25zb2xlLmxvZygnTm9tZSBkbyBwYXLDom1ldHJvIChleGF0YW1lbnRlIGNvbW8gYSBHUCBlc3BlcmEpOicsIHBhcmFtTmFtZSlcclxuICAgICAgY29uc29sZS5sb2coJ1ZhbG9yIHF1ZSBzZXLDoSBlbnZpYWRvIChkYSBjb2x1bmEgaWRlYSBkbyB3aWRnZXQpOicsIGlkZWFOdW1iZXIpXHJcbiAgICAgIGNvbnNvbGUubG9nKCdEZXRhbGhlcyBjb21wbGV0b3MgZG8gcGFyw6JtZXRybzonLCBwYXJhbUluZm8pXHJcbiAgICAgIFxyXG4gICAgICAvLyBWZXJpZmljYSBvIHRpcG8gZG8gcGFyw6JtZXRybyBwYXJhIGZvcm1hdGFyIGNvcnJldGFtZW50ZVxyXG4gICAgICBsZXQgcGFyYW1WYWx1ZSA9IGlkZWFOdW1iZXJcclxuICAgICAgaWYgKHBhcmFtSW5mbykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaXBvIGRlIGRhZG8gZG8gcGFyw6JtZXRybzonLCBwYXJhbUluZm8uZGF0YVR5cGUpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RpcG8gZGUgcGFyw6JtZXRybzonLCBwYXJhbUluZm8ucGFyYW1ldGVyVHlwZSlcclxuICAgICAgICBcclxuICAgICAgICAvLyBTZSBvIHBhcsOibWV0cm8gZm9yIGRvIHRpcG8gR1BTdHJpbmcgb3Ugc2ltaWxhciwgZW52aWEgY29tbyBzdHJpbmdcclxuICAgICAgICAvLyBTZSBmb3IgVVJMIG91IG91dHJvIHRpcG8gY29tcGxleG8sIHBvZGUgcHJlY2lzYXIgZGUgZm9ybWF0byBkaWZlcmVudGVcclxuICAgICAgICBpZiAocGFyYW1JbmZvLmRhdGFUeXBlID09PSAnR1BTdHJpbmcnIHx8IHBhcmFtSW5mby5kYXRhVHlwZSA9PT0gJ2VzcmlHUFR5cGVTdHJpbmcnKSB7XHJcbiAgICAgICAgICBwYXJhbVZhbHVlID0gU3RyaW5nKGlkZWFOdW1iZXIpXHJcbiAgICAgICAgfSBlbHNlIGlmIChwYXJhbUluZm8uZGF0YVR5cGUgPT09ICdHUERvdWJsZScgfHwgcGFyYW1JbmZvLmRhdGFUeXBlID09PSAnZXNyaUdQVHlwZURvdWJsZScgfHwgXHJcbiAgICAgICAgICAgICAgICAgICBwYXJhbUluZm8uZGF0YVR5cGUgPT09ICdHUExvbmcnIHx8IHBhcmFtSW5mby5kYXRhVHlwZSA9PT0gJ2VzcmlHUFR5cGVMb25nJykge1xyXG4gICAgICAgICAgLy8gU2UgZm9yIG51bcOpcmljbywgdGVudGEgY29udmVydGVyXHJcbiAgICAgICAgICBjb25zdCBudW1WYWx1ZSA9IHBhcnNlRmxvYXQoaWRlYU51bWJlcilcclxuICAgICAgICAgIGlmICghaXNOYU4obnVtVmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHBhcmFtVmFsdWUgPSBudW1WYWx1ZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8gUHJlcGFyYSBvcyBwYXLDom1ldHJvcyBwYXJhIGEgZXhlY3XDp8Ojb1xyXG4gICAgICAvLyBJTVBPUlRBTlRFOiBmPWpzb24gdmFpIG5hIFVSTCwgbsOjbyBubyBib2R5XHJcbiAgICAgIC8vIEFwZW5hcyBvcyBwYXLDom1ldHJvcyBkYSBHUCB2w6NvIG5vIGJvZHlcclxuICAgICAgY29uc3QgcGFyYW1zID0ge1xyXG4gICAgICAgIFtwYXJhbU5hbWVdOiBwYXJhbVZhbHVlXHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGNvbnNvbGUubG9nKCc9PT0gUEFSw4JNRVRST1MgUEFSQSBFTlZJQVIgPT09JylcclxuICAgICAgY29uc29sZS5sb2coJ1BhcsOibWV0cm9zIHByZXBhcmFkb3MgKHBhcmEgbyBib2R5KTonLCBwYXJhbXMpXHJcbiAgICAgIGNvbnNvbGUubG9nKCdWYWxvciBkbyBwYXLDom1ldHJvOicsIHBhcmFtVmFsdWUsICdUaXBvOicsIHR5cGVvZiBwYXJhbVZhbHVlKVxyXG4gICAgICBjb25zb2xlLmxvZygnTm9tZSBkbyBwYXLDom1ldHJvIChleGF0byk6JywgcGFyYW1OYW1lKVxyXG4gICAgICBjb25zb2xlLmxvZygnTm9tZSBkbyBwYXLDom1ldHJvIChKU09OKTonLCBKU09OLnN0cmluZ2lmeShwYXJhbU5hbWUpKVxyXG4gICAgICBcclxuICAgICAgLy8gRm9ybWF0YSBvcyBwYXLDom1ldHJvcyBjb21vIGZvcm0tdXJsZW5jb2RlZFxyXG4gICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxyXG4gICAgICBcclxuICAgICAgLy8gQWRpY2lvbmEgb3MgcGFyw6JtZXRyb3MgKGV4Y2V0byBmPWpzb24gcXVlIHZhaSBuYSBVUkwpXHJcbiAgICAgIC8vIElNUE9SVEFOVEU6IFVzYSBvIG5vbWUgZXhhdG8gZG8gcGFyw6JtZXRybyBjb21vIGVzdMOhIG5hIEdQIChwb2RlIHRlciBjYXJhY3RlcmVzIGVzcGVjaWFpcylcclxuICAgICAgY29uc29sZS5sb2coJz09PSBQUkVQQVJBTkRPIEZPUk0gREFUQSA9PT0nKVxyXG4gICAgICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICBpZiAoa2V5ICE9PSAnZicpIHtcclxuICAgICAgICAgIGNvbnN0IHBhcmFtS2V5ID0ga2V5IC8vIFVzYSBleGF0YW1lbnRlIG8gbm9tZSBxdWUgdmVpbyBkYSBHUCAoZXg6IFwiTsKwIElERUFcIiwgXCJ2YWxvcl9hbGVydGFcIiwgZXRjLilcclxuICAgICAgICAgIGNvbnN0IHBhcmFtVmFsID0gU3RyaW5nKHBhcmFtc1trZXldKVxyXG4gICAgICAgICAgZm9ybURhdGEuYXBwZW5kKHBhcmFtS2V5LCBwYXJhbVZhbClcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGBQYXLDom1ldHJvIGFkaWNpb25hZG86IG5vbWU9XCIke3BhcmFtS2V5fVwiIHZhbG9yPVwiJHtwYXJhbVZhbH1cImApXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgICAtIE5vbWUgKEpTT04pOiAke0pTT04uc3RyaW5naWZ5KHBhcmFtS2V5KX1gKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coYCAgLSBOb21lIChieXRlcyk6ICR7QXJyYXkuZnJvbShwYXJhbUtleSkubWFwKGMgPT4gYy5jaGFyQ29kZUF0KDApKS5qb2luKCcsJyl9YClcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGAgIC0gVmFsb3IgKEpTT04pOiAke0pTT04uc3RyaW5naWZ5KHBhcmFtVmFsKX1gKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IGZvcm1EYXRhU3RyaW5nID0gZm9ybURhdGEudG9TdHJpbmcoKVxyXG4gICAgICBjb25zb2xlLmxvZygnRm9ybURhdGEgY29tcGxldG8gKHN0cmluZyk6JywgZm9ybURhdGFTdHJpbmcpXHJcbiAgICAgIGNvbnNvbGUubG9nKCdGb3JtRGF0YSBjb21wbGV0byAoVVJMIGRlY29kZWQpOicsIGRlY29kZVVSSUNvbXBvbmVudChmb3JtRGF0YVN0cmluZykpXHJcbiAgICAgIFxyXG4gICAgICAvLyBBZGljaW9uYSB0b2tlbiBhbyBib2R5XHJcbiAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndG9rZW4nLCB0b2tlbilcclxuICAgICAgICBjb25zb2xlLmxvZygnVG9rZW4gYWRpY2lvbmFkbyBhbyBib2R5JylcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8gRnVuw6fDo28gYXV4aWxpYXIgcGFyYSBmYXplciBhIHJlcXVpc2nDp8Ojb1xyXG4gICAgICBjb25zdCBtYWtlRXhlY3V0ZVJlcXVlc3QgPSBhc3luYyAodXJsKSA9PiB7XHJcbiAgICAgICAgLy8gQWRpY2lvbmEgdG9rZW4gbmEgVVJMIHRhbWLDqW0gKGFsZ3VucyBzZXJ2aWRvcmVzIEFyY0dJUyBleGlnZW0gaXNzbylcclxuICAgICAgICBsZXQgZmluYWxVcmwgPSB1cmxcclxuICAgICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICAgIGNvbnN0IHVybFdpdGhUb2tlbiA9IG5ldyBVUkwodXJsKVxyXG4gICAgICAgICAgdXJsV2l0aFRva2VuLnNlYXJjaFBhcmFtcy5zZXQoJ3Rva2VuJywgdG9rZW4pXHJcbiAgICAgICAgICB1cmxXaXRoVG9rZW4uc2VhcmNoUGFyYW1zLnNldCgnZicsICdqc29uJylcclxuICAgICAgICAgIGZpbmFsVXJsID0gdXJsV2l0aFRva2VuLnRvU3RyaW5nKClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gU2UgbsOjbyB0aXZlciB0b2tlbiwgYWRpY2lvbmEgYXBlbmFzIGY9anNvblxyXG4gICAgICAgICAgY29uc3QgdXJsT2JqID0gbmV3IFVSTCh1cmwpXHJcbiAgICAgICAgICB1cmxPYmouc2VhcmNoUGFyYW1zLnNldCgnZicsICdqc29uJylcclxuICAgICAgICAgIGZpbmFsVXJsID0gdXJsT2JqLnRvU3RyaW5nKClcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RlbnRhbmRvIFVSTDonLCBmaW5hbFVybClcclxuICAgICAgICBjb25zb2xlLmxvZygnQm9keSAoZm9ybURhdGEpOicsIGZvcm1EYXRhLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1Rva2VuIHByZXNlbnRlOicsICEhdG9rZW4pXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1BhcsOibWV0cm9zIGVudmlhZG9zOicsIE9iamVjdC5rZXlzKHBhcmFtcykpXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChmaW5hbFVybCwge1xyXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJvZHk6IGZvcm1EYXRhXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8gU2VtcHJlIHVzYSBhIFVSTCBmaXhhIGRvIHN1Ym1pdEpvYiAoasOhIHF1ZSB0ZW1vcyBlbGEgY29uZmlndXJhZGEpXHJcbiAgICAgIC8vIE7Do28gcHJlY2lzYSB2ZXJpZmljYXIgc2Ugw6kgYXNzw61uY3JvbmEsIHBvaXMgYSBVUkwgZml4YSBqw6EgYXBvbnRhIHBhcmEgc3VibWl0Sm9iXHJcbiAgICAgIGNvbnN0IGlzQXN5bmMgPSB0cnVlXHJcbiAgICAgIGNvbnNvbGUubG9nKCc9PT0gVEVOVEFORE8gRVhFQ1VUQVIgR1AgPT09JylcclxuICAgICAgY29uc29sZS5sb2coJ1VzYW5kbyBVUkwgZml4YSBkbyBzdWJtaXRKb2InKVxyXG4gICAgICBjb25zb2xlLmxvZygnUGFyw6JtZXRybyBxdWUgc2Vyw6EgZW52aWFkbzonLCBwYXJhbU5hbWUpXHJcbiAgICAgIGNvbnNvbGUubG9nKCdWYWxvciBxdWUgc2Vyw6EgZW52aWFkbzonLCBpZGVhTnVtYmVyKVxyXG4gICAgICBcclxuICAgICAgLy8gU2VtcHJlIHVzYSBhIFVSTCBmaXhhIGRvIHN1Ym1pdEpvYlxyXG4gICAgICBleGVjdXRlVXJsID0gdGhpcy5HUF9TVUJNSVRfSk9CX1VSTFxyXG4gICAgICBjb25zb2xlLmxvZygnVVJMIGRvIHN1Ym1pdEpvYjonLCBleGVjdXRlVXJsKVxyXG4gICAgICBcclxuICAgICAgbGV0IGV4ZWN1dGVSZXNwb25zZSA9IGF3YWl0IG1ha2VFeGVjdXRlUmVxdWVzdChleGVjdXRlVXJsKVxyXG4gICAgICBcclxuICAgICAgLy8gU2UgZGVyIGVycm8gNTAwLCBwb2RlIHNlciBxdWUgbyBlbmRwb2ludCBkYSB0YXNrIGVzcGVjw61maWNhIG7Do28gZXhpc3RhXHJcbiAgICAgIC8vIFRlbnRhIGNvbSBvIGVuZHBvaW50IGRhIEdQIHJhaXpcclxuICAgICAgaWYgKCFleGVjdXRlUmVzcG9uc2Uub2spIHtcclxuICAgICAgICBsZXQgcmVzdWx0VGV4dCA9IGF3YWl0IGV4ZWN1dGVSZXNwb25zZS50ZXh0KClcclxuICAgICAgICBjb25zb2xlLndhcm4oJ1ByaW1laXJhIHRlbnRhdGl2YSBmYWxob3UuIFN0YXR1czonLCBleGVjdXRlUmVzcG9uc2Uuc3RhdHVzKVxyXG4gICAgICAgIGNvbnNvbGUud2FybignUmVzcG9zdGEgKHByaW1laXJvcyA1MDAgY2hhcnMpOicsIHJlc3VsdFRleHQuc3Vic3RyaW5nKDAsIDUwMCkpXHJcbiAgICAgICAgXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlc3VsdEpzb24gPSBKU09OLnBhcnNlKHJlc3VsdFRleHQpXHJcbiAgICAgICAgICBpZiAocmVzdWx0SnNvbi5lcnJvciAmJiByZXN1bHRKc29uLmVycm9yLmNvZGUgPT09IDUwMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0Vycm8gNTAwIGNvbSB0YXNrIGVzcGVjw61maWNhLCB0ZW50YW5kbyBjb20gZW5kcG9pbnQgZGEgR1AgcmFpei4uLicpXHJcbiAgICAgICAgICAgIC8vIFRlbnRhIGNvbSBvIGVuZHBvaW50IHJhaXogdXNhbmRvIG8gbWVzbW8gdGlwbyAoc3VibWl0Sm9iIG91IGV4ZWN1dGUpXHJcbiAgICAgICAgICAgIGlmIChpc0FzeW5jKSB7XHJcbiAgICAgICAgICAgICAgZXhlY3V0ZVVybCA9IHRoaXMuR1BfU1VCTUlUX0pPQl9VUkxcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGVudGFuZG8gY29tIGVuZHBvaW50IGRhIEdQIHJhaXogKHN1Ym1pdEpvYik6JywgZXhlY3V0ZVVybClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBleGVjdXRlVXJsID0gYCR7dGhpcy5HUF9TRVJWSUNFX1VSTH0vZXhlY3V0ZWBcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGVudGFuZG8gY29tIGVuZHBvaW50IGRhIEdQIHJhaXogKGV4ZWN1dGUpOicsIGV4ZWN1dGVVcmwpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZXhlY3V0ZVJlc3BvbnNlID0gYXdhaXQgbWFrZUV4ZWN1dGVSZXF1ZXN0KGV4ZWN1dGVVcmwpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBhbyBwYXJzZWFyIHJlc3Bvc3RhOicsIGUpXHJcbiAgICAgICAgICAvLyBTZSBuw6NvIGNvbnNlZ3VpciBwYXJzZWFyLCBjb250aW51YSBjb20gbyBlcnJvIG9yaWdpbmFsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvLyBMw6ogYSByZXNwb3N0YSBtZXNtbyBzZSBuw6NvIGZvciBPSyBwYXJhIHZlciBvIGVycm8gZGV0YWxoYWRvXHJcbiAgICAgIGxldCByZXN1bHRcclxuICAgICAgdHJ5IHtcclxuICAgICAgICByZXN1bHQgPSBhd2FpdCBleGVjdXRlUmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1Jlc3Bvc3RhIGRvIGV4ZWN1dGUgKEpTT04pOicsIEpTT04uc3RyaW5naWZ5KHJlc3VsdCwgbnVsbCwgMikpXHJcbiAgICAgIH0gY2F0Y2ggKGpzb25FcnJvcikge1xyXG4gICAgICAgIC8vIFNlIG7Do28gY29uc2VndWlyIGxlciBjb21vIEpTT04sIGzDqiBjb21vIHRleHRvXHJcbiAgICAgICAgY29uc3QgdGV4dFJlc3BvbnNlID0gYXdhaXQgZXhlY3V0ZVJlc3BvbnNlLnRleHQoKVxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1Jlc3Bvc3RhIG7Do28gw6kgSlNPTjonLCB0ZXh0UmVzcG9uc2UpXHJcbiAgICAgICAgY29uc29sZS5lcnJvcignU3RhdHVzIEhUVFA6JywgZXhlY3V0ZVJlc3BvbnNlLnN0YXR1cywgZXhlY3V0ZVJlc3BvbnNlLnN0YXR1c1RleHQpXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvIGFvIGV4ZWN1dGFyIHRhcmVmYTogJHtleGVjdXRlUmVzcG9uc2Uuc3RhdHVzfSAke2V4ZWN1dGVSZXNwb25zZS5zdGF0dXNUZXh0fSAtIFJlc3Bvc3RhOiAke3RleHRSZXNwb25zZS5zdWJzdHJpbmcoMCwgNTAwKX1gKVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBpZiAoIWV4ZWN1dGVSZXNwb25zZS5vaykge1xyXG4gICAgICAgIC8vIFNlIGEgcmVzcG9zdGEgdGVtIHVtIGVycm8gbm8gSlNPTiwgdXNhIGVsZVxyXG4gICAgICAgIGlmIChyZXN1bHQuZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJz09PSBFUlJPIERFVEFMSEFETyBEQSBHUCA9PT0nKVxyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignQ8OzZGlnbyBkbyBlcnJvOicsIHJlc3VsdC5lcnJvci5jb2RlKVxyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignTWVuc2FnZW06JywgcmVzdWx0LmVycm9yLm1lc3NhZ2UpXHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdEZXRhbGhlczonLCByZXN1bHQuZXJyb3IuZGV0YWlscylcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gY29tcGxldG86JywgSlNPTi5zdHJpbmdpZnkocmVzdWx0LmVycm9yLCBudWxsLCAyKSlcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLy8gTWVuc2FnZW0gZGUgZXJybyBtYWlzIGFtaWfDoXZlbFxyXG4gICAgICAgICAgbGV0IGVycm9yTWVzc2FnZSA9ICdFcnJvIGFvIGV4ZWN1dGFyIGEgZmVycmFtZW50YSBkZSBnZW9wcm9jZXNzYW1lbnRvLlxcblxcbidcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgaWYgKHJlc3VsdC5lcnJvci5jb2RlID09PSA1MDApIHtcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlICs9ICdFcnJvIGludGVybm8gZG8gc2Vydmlkb3IgKDUwMCkuXFxuXFxuJ1xyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgKz0gJ1Bvc3PDrXZlaXMgY2F1c2FzOlxcbidcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlICs9ICcxLiBPIG7Dum1lcm8gZGUgaWRlYSBwb2RlIG7Do28gZXhpc3RpciBubyBzZXJ2aWRvclxcbidcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlICs9ICcyLiBQcm9ibGVtYSBubyBwcm9jZXNzYW1lbnRvIGRhIGZlcnJhbWVudGFcXG4nXHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSArPSAnMy4gTyBzZXJ2aWRvciBwb2RlIGVzdGFyIHRlbXBvcmFyaWFtZW50ZSBpbmRpc3BvbsOtdmVsXFxuXFxuJ1xyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgKz0gYFZhbG9yIGVudmlhZG86ICR7aWRlYU51bWJlcn1cXG5gXHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSArPSBgUGFyw6JtZXRybyB1c2FkbzogJHtwYXJhbU5hbWV9XFxuXFxuYFxyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgKz0gJ1ZlcmlmaXF1ZTpcXG4nXHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSArPSAnLSBTZSBvIG7Dum1lcm8gZGUgaWRlYSBlc3TDoSBjb3JyZXRvXFxuJ1xyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgKz0gJy0gU2UgbyB2YWxvciBleGlzdGUgbmEgY2FtYWRhIGRlIGFsZXJ0YXNcXG4nXHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSArPSAnLSBBYnJhIG8gY29uc29sZSAoRjEyKSBwYXJhIG1haXMgZGV0YWxoZXMnXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgKz0gYEPDs2RpZ286ICR7cmVzdWx0LmVycm9yLmNvZGV9XFxuYFxyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgKz0gYE1lbnNhZ2VtOiAke3Jlc3VsdC5lcnJvci5tZXNzYWdlfVxcblxcbmBcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5lcnJvci5kZXRhaWxzICYmIHJlc3VsdC5lcnJvci5kZXRhaWxzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgKz0gYERldGFsaGVzOiAke3Jlc3VsdC5lcnJvci5kZXRhaWxzLmpvaW4oJywgJyl9XFxuXFxuYFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGFsZXJ0KGVycm9yTWVzc2FnZSlcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXJybyBuYSBHUDogJHtKU09OLnN0cmluZ2lmeShyZXN1bHQuZXJyb3IpfWApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFNlIG7Do28gdGl2ZXIgY2FtcG8gZXJyb3IsIG1hcyBvIHN0YXR1cyBuw6NvIMOpIE9LLCBtb3N0cmEgbyByZXN1bHRhZG8gY29tcGxldG9cclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvIEhUVFA6JywgZXhlY3V0ZVJlc3BvbnNlLnN0YXR1cywgZXhlY3V0ZVJlc3BvbnNlLnN0YXR1c1RleHQpXHJcbiAgICAgICAgY29uc29sZS5lcnJvcignUmVzcG9zdGEgY29tcGxldGE6JywgcmVzdWx0KVxyXG4gICAgICAgIGFsZXJ0KGBFcnJvIGFvIGV4ZWN1dGFyIHRhcmVmYTogJHtleGVjdXRlUmVzcG9uc2Uuc3RhdHVzfSAke2V4ZWN1dGVSZXNwb25zZS5zdGF0dXNUZXh0fVxcblxcblZlcmlmaXF1ZSBvIGNvbnNvbGUgKEYxMikgcGFyYSBtYWlzIGRldGFsaGVzLmApXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvIGFvIGV4ZWN1dGFyIHRhcmVmYTogJHtleGVjdXRlUmVzcG9uc2Uuc3RhdHVzfSAke2V4ZWN1dGVSZXNwb25zZS5zdGF0dXNUZXh0fSAtICR7SlNPTi5zdHJpbmdpZnkocmVzdWx0KX1gKVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvLyBWZXJpZmljYSBzZSBhIHJlc3Bvc3RhIGNvbnTDqW0gdW0gam9iSWQgKHRhcmVmYSBhc3PDrW5jcm9uYSlcclxuICAgICAgLy8gUGFyYSB0YXJlZmFzIGFzc8OtbmNyb25hcywgc3VibWl0Sm9iIHNlbXByZSByZXRvcm5hIGpvYklkXHJcbiAgICAgIGlmIChyZXN1bHQuam9iSWQgfHwgaXNBc3luYykge1xyXG4gICAgICAgIGNvbnN0IGpvYklkID0gcmVzdWx0LmpvYklkXHJcbiAgICAgICAgaWYgKCFqb2JJZCkge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUYXJlZmEgYXNzw61uY3JvbmEgbWFzIG7Do28gcmVjZWJldSBqb2JJZCBuYSByZXNwb3N0YScpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUYXJlZmEgYXNzw61uY3JvbmEgZGV0ZWN0YWRhLiBKb2IgSUQ6Jywgam9iSWQpXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUG9sbGluZyBkbyBzdGF0dXMgZG8gam9iXHJcbiAgICAgICAgbGV0IGF0dGVtcHRzID0gMFxyXG4gICAgICAgIGNvbnN0IG1heEF0dGVtcHRzID0gNjBcclxuICAgICAgICBsZXQgam9iU3RhdHVzID0gbnVsbFxyXG4gICAgICAgIFxyXG4gICAgICAgIHdoaWxlIChhdHRlbXB0cyA8IG1heEF0dGVtcHRzKSB7XHJcbiAgICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMTAwMCkpXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8vIFVSTCBwYXJhIHZlcmlmaWNhciBzdGF0dXMgZG8gam9iXHJcbiAgICAgICAgICAvLyBVc2EgYSBtZXNtYSBVUkwgYmFzZSBxdWUgZnVuY2lvbm91IChwb2RlIHNlciBzdWJtaXRKb2Igb3UgZXhlY3V0ZSlcclxuICAgICAgICAgIGNvbnN0IGJhc2VVcmwgPSBleGVjdXRlVXJsLnJlcGxhY2UoJy9zdWJtaXRKb2InLCAnJykucmVwbGFjZSgnL2V4ZWN1dGUnLCAnJylcclxuICAgICAgICAgIGNvbnN0IHN0YXR1c1VybCA9IHRva2VuIFxyXG4gICAgICAgICAgICA/IGAke2Jhc2VVcmx9L2pvYnMvJHtqb2JJZH0/dG9rZW49JHt0b2tlbn0mZj1qc29uYFxyXG4gICAgICAgICAgICA6IGAke2Jhc2VVcmx9L2pvYnMvJHtqb2JJZH0/Zj1qc29uYFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnVmVyaWZpY2FuZG8gc3RhdHVzIGRvIGpvYjonLCBzdGF0dXNVcmwpXHJcbiAgICAgICAgICBjb25zdCBzdGF0dXNSZXNwb25zZSA9IGF3YWl0IGZldGNoKHN0YXR1c1VybClcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgaWYgKCFzdGF0dXNSZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm8gYW8gdmVyaWZpY2FyIHN0YXR1cyBkbyBqb2I6ICR7c3RhdHVzUmVzcG9uc2Uuc3RhdHVzfWApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGpvYlN0YXR1cyA9IGF3YWl0IHN0YXR1c1Jlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgICAgY29uc29sZS5sb2coYFN0YXR1cyBkbyBqb2IgKHRlbnRhdGl2YSAke2F0dGVtcHRzICsgMX0pOmAsIGpvYlN0YXR1cy5qb2JTdGF0dXMpXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlmIChqb2JTdGF0dXMuam9iU3RhdHVzID09PSAnZXNyaUpvYlN1Y2NlZWRlZCcpIHtcclxuICAgICAgICAgICAgLy8gT2J0w6ltIG9zIHJlc3VsdGFkb3NcclxuICAgICAgICAgICAgLy8gVXNhIGEgbWVzbWEgVVJMIGJhc2UgcXVlIGZ1bmNpb25vdSAocG9kZSBzZXIgc3VibWl0Sm9iIG91IGV4ZWN1dGUpXHJcbiAgICAgICAgICAgIGNvbnN0IGJhc2VVcmwgPSBleGVjdXRlVXJsLnJlcGxhY2UoJy9zdWJtaXRKb2InLCAnJykucmVwbGFjZSgnL2V4ZWN1dGUnLCAnJylcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0VXJsID0gdG9rZW5cclxuICAgICAgICAgICAgICA/IGAke2Jhc2VVcmx9L2pvYnMvJHtqb2JJZH0vcmVzdWx0cz90b2tlbj0ke3Rva2VufSZmPWpzb25gXHJcbiAgICAgICAgICAgICAgOiBgJHtiYXNlVXJsfS9qb2JzLyR7am9iSWR9L3Jlc3VsdHM/Zj1qc29uYFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0UmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXN1bHRVcmwpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoIXJlc3VsdFJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvIGFvIG9idGVyIHJlc3VsdGFkb3M6ICR7cmVzdWx0UmVzcG9uc2Uuc3RhdHVzfWApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IHJlc3VsdFJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUmVzdWx0YWRvIGRhIGV4ZWN1w6fDo28gYXNzw61uY3JvbmE6JywgcmVzdWx0KVxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChqb2JTdGF0dXMuam9iU3RhdHVzID09PSAnZXNyaUpvYkZhaWxlZCcpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBKb2IgZmFsaG91OiAke2pvYlN0YXR1cy5tZXNzYWdlcyA/IEpTT04uc3RyaW5naWZ5KGpvYlN0YXR1cy5tZXNzYWdlcykgOiAnRXJybyBkZXNjb25oZWNpZG8nfWApXHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGpvYlN0YXR1cy5qb2JTdGF0dXMgPT09ICdlc3JpSm9iQ2FuY2VsbGVkJykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0pvYiBmb2kgY2FuY2VsYWRvJylcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgYXR0ZW1wdHMrK1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAoYXR0ZW1wdHMgPj0gbWF4QXR0ZW1wdHMpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGltZW91dDogTyBqb2IgZGVtb3JvdSBtYWlzIGRlIDYwIHNlZ3VuZG9zIHBhcmEgY29tcGxldGFyJylcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gVGFyZWZhIHPDrW5jcm9uYSAtIHJlc3VsdGFkbyBqw6EgZXN0w6EgZGlzcG9uw612ZWxcclxuICAgICAgICBjb25zb2xlLmxvZygnVGFyZWZhIHPDrW5jcm9uYSAtIHJlc3VsdGFkbyBqw6EgZGlzcG9uw612ZWwnKVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBjb25zb2xlLmxvZygnUmVzdWx0YWRvIGNvbXBsZXRvIGRhIEdQOicsIEpTT04uc3RyaW5naWZ5KHJlc3VsdCwgbnVsbCwgMikpXHJcblxyXG4gICAgICAvLyBQcm9jZXNzYSBvIHJlc3VsdGFkbyAtIHByb2N1cmEgcGVsYSBVUkwgZG8gSFRNTFxyXG4gICAgICBsZXQgaHRtbFVybCA9IG51bGxcclxuXHJcbiAgICAgIC8vIFBhcmEgdGFyZWZhcyBhc3PDrW5jcm9uYXMsIG9zIHJlc3VsdGFkb3MgcG9kZW0gZXN0YXIgZW0gdW1hIGVzdHJ1dHVyYSBkaWZlcmVudGVcclxuICAgICAgLy8gUHJpbWVpcm8sIHZlcmlmaWNhIHNlIGjDoSBlcnJvc1xyXG4gICAgICBpZiAocmVzdWx0LmVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBlbmNvbnRyYWRvIG5vIHJlc3VsdGFkbzonLCByZXN1bHQuZXJyb3IpXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvIG5hIEdQOiAke0pTT04uc3RyaW5naWZ5KHJlc3VsdC5lcnJvcil9YClcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gUHJvY3VyYSBlbSByZXN1bHQucmVzdWx0cyAoZXN0cnV0dXJhIGNvbXVtIHBhcmEgdGFyZWZhcyBzw61uY3JvbmFzKVxyXG4gICAgICBpZiAocmVzdWx0LnJlc3VsdHMgJiYgQXJyYXkuaXNBcnJheShyZXN1bHQucmVzdWx0cykpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHJlc3VsdEl0ZW0gb2YgcmVzdWx0LnJlc3VsdHMpIHtcclxuICAgICAgICAgIC8vIE8gcmVzdWx0YWRvIHBvZGUgZXN0YXIgZGlyZXRhbWVudGUgbm8gcmVzdWx0SXRlbSBvdSBlbSByZXN1bHRJdGVtLnZhbHVlXHJcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IHJlc3VsdEl0ZW0udmFsdWUgIT09IHVuZGVmaW5lZCA/IHJlc3VsdEl0ZW0udmFsdWUgOiByZXN1bHRJdGVtXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLmluY2x1ZGVzKCcuaHRtbCcpKSB7XHJcbiAgICAgICAgICAgIGh0bWxVcmwgPSB2YWx1ZVxyXG4gICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIC8vIFByb2N1cmEgcG9yIHByb3ByaWVkYWRlcyBjb211bnMgcXVlIGNvbnTDqm0gVVJMc1xyXG4gICAgICAgICAgICBpZiAodmFsdWUudXJsICYmIHR5cGVvZiB2YWx1ZS51cmwgPT09ICdzdHJpbmcnICYmIHZhbHVlLnVybC5pbmNsdWRlcygnLmh0bWwnKSkge1xyXG4gICAgICAgICAgICAgIGh0bWxVcmwgPSB2YWx1ZS51cmxcclxuICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLnBhdGhVcmwgJiYgdHlwZW9mIHZhbHVlLnBhdGhVcmwgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgaHRtbFVybCA9IHZhbHVlLnBhdGhVcmxcclxuICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLnZhbHVlICYmIHR5cGVvZiB2YWx1ZS52YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUudmFsdWUuaW5jbHVkZXMoJy5odG1sJykpIHtcclxuICAgICAgICAgICAgICBodG1sVXJsID0gdmFsdWUudmFsdWVcclxuICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBQYXJhIHRhcmVmYXMgYXNzw61uY3JvbmFzLCBvcyByZXN1bHRhZG9zIHBvZGVtIGVzdGFyIGVtIHJlc3VsdC5yZXN1bHRzIGNvbW8gb2JqZXRvXHJcbiAgICAgIGlmICghaHRtbFVybCAmJiByZXN1bHQucmVzdWx0cyAmJiB0eXBlb2YgcmVzdWx0LnJlc3VsdHMgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KHJlc3VsdC5yZXN1bHRzKSkge1xyXG4gICAgICAgIC8vIEl0ZXJhIHNvYnJlIGFzIHByb3ByaWVkYWRlcyBkbyBvYmpldG8gcmVzdWx0c1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHJlc3VsdC5yZXN1bHRzKSB7XHJcbiAgICAgICAgICBjb25zdCByZXN1bHRJdGVtID0gcmVzdWx0LnJlc3VsdHNba2V5XVxyXG4gICAgICAgICAgaWYgKHJlc3VsdEl0ZW0gJiYgcmVzdWx0SXRlbS52YWx1ZSkge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHJlc3VsdEl0ZW0udmFsdWVcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUuaW5jbHVkZXMoJy5odG1sJykpIHtcclxuICAgICAgICAgICAgICBodG1sVXJsID0gdmFsdWVcclxuICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLnVybCAmJiB0eXBlb2YgdmFsdWUudXJsID09PSAnc3RyaW5nJyAmJiB2YWx1ZS51cmwuaW5jbHVkZXMoJy5odG1sJykpIHtcclxuICAgICAgICAgICAgICBodG1sVXJsID0gdmFsdWUudXJsXHJcbiAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5wYXRoVXJsICYmIHR5cGVvZiB2YWx1ZS5wYXRoVXJsID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgIGh0bWxVcmwgPSB2YWx1ZS5wYXRoVXJsXHJcbiAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gUHJvY3VyYSBlbSBvdXRyYXMgcHJvcHJpZWRhZGVzIGRvIHJlc3VsdGFkb1xyXG4gICAgICBpZiAoIWh0bWxVcmwgJiYgcmVzdWx0Lm91dHB1dFVybCkge1xyXG4gICAgICAgIGh0bWxVcmwgPSByZXN1bHQub3V0cHV0VXJsXHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFodG1sVXJsICYmIHJlc3VsdC51cmwpIHtcclxuICAgICAgICBodG1sVXJsID0gcmVzdWx0LnVybFxyXG4gICAgICB9XHJcbiAgICAgIGlmICghaHRtbFVybCAmJiByZXN1bHQuZmlsZVVybCkge1xyXG4gICAgICAgIGh0bWxVcmwgPSByZXN1bHQuZmlsZVVybFxyXG4gICAgICB9XHJcbiAgICAgIGlmICghaHRtbFVybCAmJiByZXN1bHQub3V0cHV0RmlsZSkge1xyXG4gICAgICAgIGh0bWxVcmwgPSByZXN1bHQub3V0cHV0RmlsZVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBCdXNjYSBwb3IgcmVnZXggZW0gdG9kbyBvIG9iamV0byAow7psdGltbyByZWN1cnNvKVxyXG4gICAgICBpZiAoIWh0bWxVcmwpIHtcclxuICAgICAgICBjb25zdCByZXN1bHRTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShyZXN1bHQpXHJcbiAgICAgICAgY29uc3QgdXJsTWF0Y2ggPSByZXN1bHRTdHJpbmcubWF0Y2goL2h0dHBzPzpcXC9cXC9bXlxcc1wiPD5dK1xcLmh0bWwvZylcclxuICAgICAgICBpZiAodXJsTWF0Y2ggJiYgdXJsTWF0Y2gubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgaHRtbFVybCA9IHVybE1hdGNoWzBdXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoaHRtbFVybCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdVUkwgZG8gSFRNTCBlbmNvbnRyYWRhOicsIGh0bWxVcmwpXHJcbiAgICAgICAgLy8gQWJyZSBvIEhUTUwgZW0gdW1hIG5vdmEgZ3VpYVxyXG4gICAgICAgIHdpbmRvdy5vcGVuKGh0bWxVcmwsICdfYmxhbmsnKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIFNlIG7Do28gZW5jb250cm91IGEgVVJMLCBtb3N0cmEgbyByZXN1bHRhZG8gY29tcGxldG8gcGFyYSBkZWJ1Z1xyXG4gICAgICAgIGNvbnNvbGUud2FybignTsOjbyBmb2kgcG9zc8OtdmVsIGVuY29udHJhciBhIFVSTCBkbyBIVE1MIG5vIHJlc3VsdGFkbzonLCByZXN1bHQpXHJcbiAgICAgICAgY29uc29sZS53YXJuKCdSZXN1bHRhZG8gY29tcGxldG86JywgSlNPTi5zdHJpbmdpZnkocmVzdWx0LCBudWxsLCAyKSlcclxuICAgICAgICBhbGVydCgnUmVsYXTDs3JpbyBnZXJhZG8sIG1hcyBuw6NvIGZvaSBwb3Nzw612ZWwgZW5jb250cmFyIGEgVVJMIGRvIEhUTUwuIFZlcmlmaXF1ZSBvIGNvbnNvbGUgZG8gbmF2ZWdhZG9yIChGMTIpIHBhcmEgdmVyIG9zIGRldGFsaGVzIGRvIHJlc3VsdGFkby4nKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCc9PT0gRVJSTyBDT01QTEVUTyBBTyBFWEVDVVRBUiBHUCA9PT0nKVxyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvOicsIGVycm9yKVxyXG4gICAgICBjb25zb2xlLmVycm9yKCdNZW5zYWdlbTonLCBlcnJvci5tZXNzYWdlKVxyXG4gICAgICBjb25zb2xlLmVycm9yKCdTdGFjayB0cmFjZTonLCBlcnJvci5zdGFjaylcclxuICAgICAgY29uc29sZS5lcnJvcignVGlwbyBkbyBlcnJvOicsIGVycm9yLmNvbnN0cnVjdG9yLm5hbWUpXHJcbiAgICAgIFxyXG4gICAgICAvLyBJbmZvcm1hw6fDtWVzIGRlIGNvbnRleHRvIHBhcmEgZGVidWdcclxuICAgICAgY29uc29sZS5lcnJvcignPT09IENPTlRFWFRPIERPIEVSUk8gPT09JylcclxuICAgICAgY29uc29sZS5lcnJvcignVmFsb3IgZW52aWFkbzonLCBpZGVhTnVtYmVyKVxyXG4gICAgICBjb25zb2xlLmVycm9yKCdQYXLDom1ldHJvIHVzYWRvOicsIHBhcmFtTmFtZSlcclxuICAgICAgY29uc29sZS5lcnJvcignVVJMIHRlbnRhZGE6JywgZXhlY3V0ZVVybClcclxuICAgICAgY29uc29sZS5lcnJvcignVG9rZW4gcHJlc2VudGU6JywgISF0b2tlbilcclxuXHJcbiAgICAgIGxldCBlcnJvck1lc3NhZ2UgPSAnRXJybyBhbyBnZXJhciByZWxhdMOzcmlvLlxcblxcbidcclxuXHJcbiAgICAgIGlmIChlcnJvci5tZXNzYWdlKSB7XHJcbiAgICAgICAgLy8gUmVtb3ZlIGluZm9ybWHDp8O1ZXMgdMOpY25pY2FzIG11aXRvIGxvbmdhcyBwYXJhIG8gdXN1w6FyaW9cclxuICAgICAgICBsZXQgY2xlYW5NZXNzYWdlID0gZXJyb3IubWVzc2FnZVxyXG4gICAgICAgIGlmIChjbGVhbk1lc3NhZ2UubGVuZ3RoID4gMjAwKSB7XHJcbiAgICAgICAgICBjbGVhbk1lc3NhZ2UgPSBjbGVhbk1lc3NhZ2Uuc3Vic3RyaW5nKDAsIDIwMCkgKyAnLi4uJ1xyXG4gICAgICAgIH1cclxuICAgICAgICBlcnJvck1lc3NhZ2UgKz0gYE1lbnNhZ2VtOiAke2NsZWFuTWVzc2FnZX1cXG5cXG5gXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChlcnJvci5kZXRhaWxzICYmIEFycmF5LmlzQXJyYXkoZXJyb3IuZGV0YWlscykgJiYgZXJyb3IuZGV0YWlscy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgZXJyb3JNZXNzYWdlICs9IGBEZXRhbGhlczogJHtlcnJvci5kZXRhaWxzWzBdfVxcblxcbmBcclxuICAgICAgfVxyXG5cclxuICAgICAgZXJyb3JNZXNzYWdlICs9ICdWZXJpZmlxdWU6XFxuJ1xyXG4gICAgICBlcnJvck1lc3NhZ2UgKz0gYDEuIFNlIG8gbsO6bWVybyBkZSBpZGVhIFwiJHtpZGVhTnVtYmVyfVwiIGVzdMOhIGNvcnJldG9cXG5gXHJcbiAgICAgIGVycm9yTWVzc2FnZSArPSAnMi4gU2UgbyB2YWxvciBleGlzdGUgbmEgY2FtYWRhIGRlIGFsZXJ0YXNfcmVnaW9uYWxfbGFwYVxcbidcclxuICAgICAgZXJyb3JNZXNzYWdlICs9ICczLiBTZSBhIGZlcnJhbWVudGEgZGUgZ2VvcHJvY2Vzc2FtZW50byBlc3TDoSBhY2Vzc8OtdmVsXFxuJ1xyXG4gICAgICBlcnJvck1lc3NhZ2UgKz0gJzQuIEFicmEgbyBjb25zb2xlIGRvIG5hdmVnYWRvciAoRjEyKSBwYXJhIG1haXMgZGV0YWxoZXMgdMOpY25pY29zXFxuXFxuJ1xyXG4gICAgICBlcnJvck1lc3NhZ2UgKz0gJ0RpY2E6IFRlbnRlIHVzYXIgbyBib3TDo28gXCJGaWx0cmFyXCIgcHJpbWVpcm8gcGFyYSB2ZXJpZmljYXIgc2UgbyBuw7ptZXJvIGV4aXN0ZS4nXHJcblxyXG4gICAgICBhbGVydChlcnJvck1lc3NhZ2UpXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIGNvbnN0IHN0eWxlID0gY3NzYFxyXG4gICAgICAud2lkZ2V0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGdhcDogMTJweDtcclxuICAgICAgfVxyXG4gICAgICBmb3JtID4gZGl2IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGdhcDogOHB4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI2NjY0MDtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWU0ZjMyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5yZXBvcnQtYnV0dG9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjY2NjQwO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgZ2FwOiA4cHg7XHJcbiAgICAgICAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWU0ZjMyO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6YWN0aXZlOm5vdCg6ZGlzYWJsZWQpIHtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmZvY3VzOm5vdCg6ZGlzYWJsZWQpIHtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmRpc2FibGVkIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgICAgICAgICBjb2xvcjogIzllOWU5ZTtcclxuICAgICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQgIWltcG9ydGFudDtcclxuICAgICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOm5vdCg6ZGlzYWJsZWQpIHtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuc3Bpbm5lciB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGJvcmRlci10b3AtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGFuaW1hdGlvbjogc3BpbiAwLjhzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICAgfVxyXG4gICAgICBAa2V5ZnJhbWVzIHNwaW4ge1xyXG4gICAgICAgIHRvIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5jbGVhci1idXR0b24ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XHJcbiAgICAgICAgY29sb3I6ICM0MjQyNDI7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmRiZGJkO1xyXG4gICAgICAgICAgY29sb3I6ICMyMTIxMjE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICAgICAgICAgIGNvbG9yOiAjOWU5ZTllO1xyXG4gICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLnN0YXR1cy1tZXNzYWdlIHtcclxuICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZjNmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5sb2FkaW5nIHtcclxuICAgICAgICBjb2xvcjogIzAwNzljMTtcclxuICAgICAgfVxyXG4gICAgYFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtZmlsdHJhci1lLWdlcmFyLXJlbGF0b3JpbyBqaW11LXdpZGdldCBwLTJcIiBjc3M9e3N0eWxlfT5cclxuICAgICAgICB7dGhpcy5wcm9wcy5oYXNPd25Qcm9wZXJ0eSgndXNlTWFwV2lkZ2V0SWRzJykgJiZcclxuICAgICAgICAgIHRoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzICYmXHJcbiAgICAgICAgICB0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcy5sZW5ndGggPT09IDEgJiYgKFxyXG4gICAgICAgICAgICA8SmltdU1hcFZpZXdDb21wb25lbnRcclxuICAgICAgICAgICAgICB1c2VNYXBXaWRnZXRJZD17dGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHM/LlswXX1cclxuICAgICAgICAgICAgICBvbkFjdGl2ZVZpZXdDaGFuZ2U9eyhqbXY6IEppbXVNYXBWaWV3KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgamltdU1hcFZpZXc6IGptdlxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPHA+e2RlZmF1bHRNZXNzYWdlcy5pbnN0cnVjdGlvbnN9PC9wPlxyXG5cclxuXHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVGaWx0ZXJBbmRab29tfT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtkZWZhdWx0TWVzc2FnZXMuc2VhcmNoSWRlYX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmlkZWFTZWFyY2hJbnB1dH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlkZWFTZWFyY2hJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLmxvYWRpbmd9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8YnV0dG9uIFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXRoaXMuc3RhdGUuZmVhdHVyZUxheWVyIHx8IHRoaXMuc3RhdGUubG9hZGluZ31cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7ZGVmYXVsdE1lc3NhZ2VzLmZpbHRlckFuZFpvb219XHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICAgIHt0aGlzLnN0YXRlLmZlYXR1cmVMYXllciAmJiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVwb3J0LWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUdlbmVyYXRlUmVwb3J0fVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMuc3RhdGUubG9hZGluZyB8fCAhdGhpcy5zdGF0ZS5pZGVhU2VhcmNoSW5wdXQgfHwgdGhpcy5zdGF0ZS5pZGVhU2VhcmNoSW5wdXQudHJpbSgpID09PSAnJ31cclxuICAgICAgICAgICAgICAgIHRpdGxlPXt0aGlzLnN0YXRlLmxvYWRpbmcgfHwgIXRoaXMuc3RhdGUuaWRlYVNlYXJjaElucHV0IHx8IHRoaXMuc3RhdGUuaWRlYVNlYXJjaElucHV0LnRyaW0oKSA9PT0gJycgXHJcbiAgICAgICAgICAgICAgICAgID8gJ0RpZ2l0ZSB1bSBuw7ptZXJvIGRlIGlkZWEgcGFyYSBnZXJhciBvIHJlbGF0w7NyaW8nIFxyXG4gICAgICAgICAgICAgICAgICA6ICdHZXJhciByZWxhdMOzcmlvIHBhcmEgbyBuw7ptZXJvIGRlIGlkZWEgaW5mb3JtYWRvJ31cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5sb2FkaW5nICYmIDxzcGFuIGNsYXNzTmFtZT1cInNwaW5uZXJcIj48L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAge2RlZmF1bHRNZXNzYWdlcy5nZW5lcmF0ZVJlcG9ydH1cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjbGVhci1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGVhckZpbHRlcn1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnN0YXRlLmxvYWRpbmd9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2RlZmF1bHRNZXNzYWdlcy5jbGVhckZpbHRlcn1cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==