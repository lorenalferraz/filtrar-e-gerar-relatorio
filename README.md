# Filtrar e Gerar Relatório

Este widget carrega automaticamente a camada de Feature Service de alertas regional lapa, permite pesquisar, filtrar e dar zoom em polígonos específicos através da coluna "idea", e gera relatórios HTML usando geoprocessamento.

## Como usar

1. Adicione o widget à sua experiência no Experience Builder
2. Configure o widget para usar um widget de mapa
3. A camada será carregada automaticamente quando o mapa estiver disponível
4. Digite um número IDEA no campo de pesquisa (formato: XXX.X.XXXXXX/YYYY)
5. Clique em "Filtrar" para aplicar o filtro e dar zoom no polígono correspondente
6. Clique em "Gerar Relatório" para gerar um relatório HTML usando geoprocessamento
7. Use o botão "Limpar Filtro" para remover o filtro e visualizar todos os polígonos novamente

## Como funciona

O widget utiliza a URL fixa da camada:
- `https://meioambiente.sistemas.mpba.mp.br/server/rest/services/Hosted/alertas_regional_lapa/FeatureServer`

### Carregamento automático da camada

Quando o componente detecta que o mapa está disponível, ele automaticamente:
1. Carrega os módulos necessários da ArcGIS API for JavaScript
2. Cria uma FeatureLayer com a URL fixa
3. Adiciona a camada ao mapa

```tsx
// Carrega a camada automaticamente quando o mapa está disponível
loadFeatureLayer = () => {
  const layer = new this.FeatureLayer({
    url: this.FEATURE_SERVICE_URL
  })
  this.state.jimuMapView.view.map.add(layer)
}
```

### Pesquisa e filtro

O widget permite pesquisar polígonos pela coluna "idea":
- Executa uma query na camada para encontrar o polígono correspondente
- Aplica um filtro (definitionExpression) para mostrar apenas o polígono encontrado
- Faz zoom automático no polígono com nível de zoom 15

```tsx
// Pesquisa e filtra o polígono
const query = layer.createQuery()
query.where = `idea = '${escapedValue}' OR idea = ${escapedValue}`
layer.queryFeatures(query).then((results) => {
  layer.definitionExpression = `idea = '${escapedValue}' OR idea = ${escapedValue}`
  this.state.jimuMapView.view.goTo({
    target: results.features[0].geometry,
    zoom: 15
  })
})
```

### Geração de relatórios

O widget utiliza geoprocessamento para gerar relatórios HTML:
- Valida o formato do número IDEA (XXX.X.XXXXXX/YYYY)
- Envia o número IDEA para a ferramenta de geoprocessamento
- Processa o resultado e exibe o relatório HTML em uma nova janela

O widget utiliza a URL fixa do serviço de geoprocessamento:
- `https://meioambiente.sistemas.mpba.mp.br/server/rest/services/testeoutput/processaralerta_idea/GPServer`

## Requisitos

- Experience Builder 1.18.0 ou superior
- Um widget de mapa configurado na experiência
- Acesso à camada de Feature Service especificada

## Deploy no Portal do Experience Builder

### Opção 1: Upload via ZIP (Recomendado)

1. **Crie o pacote ZIP:**
   ```powershell
   .\package-widget.ps1
   ```
   Isso criará o arquivo `filtrar-e-gerar-relatorio.zip`

2. **Faça upload no Portal:**
   - Acesse o Portal do Experience Builder como Administrador
   - Navegue até **Widgets** > **Custom Widgets**
   - Clique em **Add Widget** ou **Upload Widget**
   - Selecione o arquivo `filtrar-e-gerar-relatorio.zip`
   - Aguarde o processamento e validação

3. **Use o widget:**
   - No Experience Builder, vá em **Insert** > **Widget**
   - Procure por "Filtrar e Gerar Relatório" na lista de widgets
   - Arraste para a experiência

### Opção 2: Deploy via GitHub

1. **Configure o repositório no Portal:**
   - Acesse o Portal do Experience Builder como Administrador
   - Navegue até **Widgets** > **Custom Widgets**
   - Clique em **Add from GitHub** (se disponível)
   - Informe a URL do repositório: `https://github.com/lorenalferraz/filtrar-e-gerar-relatorio.git`
   - Selecione o branch (geralmente `main`)
   - O Portal irá baixar e compilar automaticamente

2. **Usando GitHub Pages (URL alternativa):**
   - Após configurar GitHub Pages (veja `GITHUB_PAGES_SETUP.md`)
   - Você pode usar a URL: `https://lorenalferraz.github.io/filtrar-e-gerar-relatorio/manifest.json`
   - Mas o Portal ainda precisará clonar o repositório completo para ter acesso a todos os arquivos

3. **Validação:**
   - O Portal validará o `manifest.json` e os arquivos necessários
   - Se tudo estiver correto, o widget estará disponível

### Estrutura do Widget

O widget deve conter os seguintes arquivos:
```
filtrar-e-gerar-relatorio/
├── manifest.json          # Metadados do widget (obrigatório)
├── config.json            # Configuração padrão
├── icon.svg               # Ícone do widget
├── dist/                  # Arquivos compilados
│   ├── runtime/
│   └── setting/
└── src/                   # Código fonte
    ├── config.ts
    ├── runtime/
    └── setting/
```

### Troubleshooting

Se o widget não aparecer após o deploy:
- Verifique se o `manifest.json` está correto
- Confirme que a versão do Experience Builder é compatível (1.18.0+)
- Verifique os logs do Portal em caso de erro
- Certifique-se de que todos os arquivos em `dist/` estão presentes
