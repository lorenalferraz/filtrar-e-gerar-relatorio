# Configuração do GitHub Pages

## Como habilitar GitHub Pages para o repositório

Para que o link funcione como:
```
https://lorenalferraz.github.io/filtrar/manifest.json
```

em vez de:
```
https://raw.githubusercontent.com/lorenalferraz/filtrar/main/manifest.json
```

## Passos para Configurar

### 1. No GitHub, vá em Settings do repositório

1. Acesse: https://github.com/lorenalferraz/filtrar/settings
2. Role até a seção **"Pages"** (na barra lateral esquerda)
3. Em **"Source"**, selecione:
   - **Branch:** `main`
   - **Folder:** `/ (root)` ou `/docs` (se quiser usar uma pasta específica)
4. Clique em **Save**

### 2. Aguarde alguns minutos

O GitHub Pages pode levar alguns minutos para ser ativado. Você verá uma mensagem:
```
Your site is live at https://lorenalferraz.github.io/filtrar/
```

### 3. Verifique o acesso

Após alguns minutos, você poderá acessar:
- `https://lorenalferraz.github.io/filtrar/manifest.json`
- `https://lorenalferraz.github.io/filtrar/config.json`
- `https://lorenalferraz.github.io/filtrar/icon.svg`

## URLs Disponíveis Após Configuração

Após habilitar GitHub Pages, você terá acesso a:

- **Manifest:** https://lorenalferraz.github.io/filtrar/manifest.json
- **Config:** https://lorenalferraz.github.io/filtrar/config.json
- **Ícone:** https://lorenalferraz.github.io/filtrar/icon.svg
- **Pasta dist:** https://lorenalferraz.github.io/filtrar/dist/

## Notas Importantes

1. **GitHub Pages serve arquivos estáticos** - JSON, SVG, JS, CSS, etc.
2. **Arquivos devem estar na raiz** ou na pasta selecionada
3. **Mudanças podem levar alguns minutos** para aparecer
4. **O repositório deve ser público** (ou você precisa do GitHub Pro)

## Para o Experience Builder Portal

Agora você pode usar no Portal:
```
https://lorenalferraz.github.io/filtrar/manifest.json
```

Mas lembre-se: o Portal ainda precisa acessar o repositório completo para baixar todos os arquivos. O GitHub Pages serve apenas para visualizar/baixar arquivos individuais.

## Troubleshooting

### Site não aparece
- Aguarde 5-10 minutos após configurar
- Verifique se o branch `main` existe
- Confirme que os arquivos estão na raiz do repositório

### Erro 404
- Verifique se o caminho está correto
- Confirme que o arquivo existe no repositório
- Certifique-se de que fez commit e push dos arquivos

### Verificar se está funcionando
Acesse: https://lorenalferraz.github.io/filtrar/manifest.json

Se retornar o JSON, está funcionando!

