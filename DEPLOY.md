# Guia de Deploy - Widget Filtrar e Gerar Relatório

## ⚠️ IMPORTANTE: Por que a URL raw não funciona

O Portal do Experience Builder **NÃO** consegue baixar todos os arquivos usando apenas a URL raw do `manifest.json` como:
```
https://raw.githubusercontent.com/lorenalferraz/filtrar/main/manifest.json
```

Isso acontece porque:
- A URL raw retorna apenas o conteúdo de um arquivo específico
- O Portal precisa acessar **todos os arquivos** do widget (dist/, src/, config.json, icon.svg, etc.)
- O Portal precisa clonar o repositório completo para ter acesso a toda a estrutura

## ✅ Solução: Use a URL do Repositório Git

### Passo a Passo para Deploy via GitHub

1. **No Portal do Experience Builder:**
   - Acesse como **Administrador**
   - Vá em **Widgets** > **Custom Widgets**
   - Procure por uma das seguintes opções:
     - **"Add Widget from Git"**
     - **"Register Widget from URL"**
     - **"Add from GitHub"**
     - **"Import from Repository"**

2. **Informe os dados do repositório:**
   - **URL do Repositório:** `https://github.com/lorenalferraz/filtrar-e-gerar-relatorio.git`
   - **Branch:** `main`
   - **Caminho do Widget:** (geralmente deixe em branco ou `/` se a raiz do repositório contém o widget)

3. **O Portal irá:**
   - Clonar o repositório completo
   - Buscar o `manifest.json` na raiz
   - Baixar todos os arquivos necessários (dist/, src/, config.json, icon.svg)
   - Validar e compilar o widget
   - Tornar o widget disponível

## 📦 Alternativa: Upload via ZIP (Mais Confiável)

Se o Portal não tiver suporte direto para GitHub, use o arquivo ZIP:

1. **Gere o ZIP:**
   ```powershell
   cd c:\exb\client\your-extensions\widgets\filtrar-e-gerar-relatorio
   .\package-widget.ps1
   ```
   Ou manualmente:
   ```powershell
   Compress-Archive -Path manifest.json,config.json,icon.svg,dist,src -DestinationPath filtrar-e-gerar-relatorio.zip -Force
   ```

2. **Faça upload no Portal:**
   - Widgets > Custom Widgets > Upload Widget
   - Selecione o arquivo `filtrar-e-gerar-relatorio.zip`

## 🔍 Verificações

### O que o Portal precisa encontrar:

```
repositório/
├── manifest.json     ← O Portal busca este arquivo primeiro
├── config.json
├── icon.svg
├── dist/            ← Arquivos compilados (obrigatório)
│   ├── runtime/
│   └── setting/
└── src/             ← Código fonte (opcional, mas recomendado)
```

### Se o Portal perguntar por "Widget Path" ou "Widget Directory":

- Se o widget está na **raiz do repositório**: deixe em branco ou `/`
- Se o widget está em uma **subpasta**: informe o caminho, ex: `widgets/filtrar-e-gerar-relatorio`

## 🐛 Troubleshooting

### Erro: "Manifest not found"
- Verifique se o `manifest.json` está na raiz do repositório
- Confirme que o branch `main` existe e contém o arquivo

### Erro: "Missing required files"
- Verifique se a pasta `dist/` está presente no repositório
- Confirme que todos os arquivos foram commitados e enviados para o GitHub

### Erro: "Cannot access repository"
- Verifique se o repositório é público (se não, configure credenciais no Portal)
- Teste se consegue acessar: https://github.com/lorenalferraz/filtrar-e-gerar-relatorio

### Verificar se tudo está no GitHub:

Acesse: https://github.com/lorenalferraz/filtrar-e-gerar-relatorio/tree/main

Você deve ver:
- ✅ manifest.json
- ✅ config.json
- ✅ icon.svg
- ✅ pasta dist/
- ✅ pasta src/

## 📝 Notas Importantes

1. **O repositório deve estar público** (ou o Portal precisa ter credenciais configuradas)
2. **Todos os arquivos devem estar commitados** no branch `main`
3. **A pasta `dist/` é obrigatória** - contém os arquivos compilados
4. **O `manifest.json` deve estar na raiz** do repositório ou no caminho especificado

## 🔗 Links Úteis

- Repositório: https://github.com/lorenalferraz/filtrar-e-gerar-relatorio
- Manifest: https://raw.githubusercontent.com/lorenalferraz/filtrar-e-gerar-relatorio/main/manifest.json
- Branch Main: https://github.com/lorenalferraz/filtrar-e-gerar-relatorio/tree/main

