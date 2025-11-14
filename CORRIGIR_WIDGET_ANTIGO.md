# Correção: Widget Antigo Sendo Carregado

## 🔍 Problema Identificado

O widget estava usando classes CSS com referências ao widget antigo `addLayers`, o que pode fazer o Experience Builder confundir e carregar o widget errado.

## ✅ Correções Aplicadas

Foram corrigidas as seguintes referências no código fonte:

1. **`src/runtime/widget.tsx`** (linha 1169):
   - ❌ Antes: `className="widget-addLayers jimu-widget p-2"`
   - ✅ Agora: `className="widget-filtrar-e-gerar-relatorio jimu-widget p-2"`

2. **`src/setting/setting.tsx`** (linhas 52, 62, 90):
   - ❌ Antes: `.widget-setting-addLayers` e `addLayers`
   - ✅ Agora: `.widget-setting-filtrar-e-gerar-relatorio` e `filtrar-e-gerar-relatorio`

## 🚀 Próximos Passos: Recompilar o Widget

**IMPORTANTE:** Após corrigir o código fonte, você precisa recompilar o widget para que as mudanças sejam aplicadas nos arquivos em `dist/`.

### Opção 1: Via Experience Builder (Recomendado)

1. **No Experience Builder:**
   - Abra o projeto que contém o widget
   - O Experience Builder deve recompilar automaticamente quando detectar mudanças
   - Se não recompilar automaticamente, vá em **Build** > **Rebuild Widgets**

### Opção 2: Via Linha de Comando

Se você tem acesso ao Experience Builder SDK:

```powershell
cd c:\exb\client
npm run build:dev
```

Ou para produção:

```powershell
npm run build:prod
```

### Opção 3: Limpar e Reconstruir

1. **Remova a pasta dist:**
   ```powershell
   cd c:\exb\client\your-extensions\widgets\filtrar-e-gerar-relatorio
   Remove-Item -Path dist -Recurse -Force
   ```

2. **Recompile:**
   - O Experience Builder deve detectar a ausência da pasta `dist/` e recompilar automaticamente
   - Ou execute o comando de build acima

## 🔍 Verificação Após Recompilar

Após recompilar, verifique se os arquivos em `dist/` estão corretos:

```powershell
# Não deve encontrar referências ao widget antigo
Select-String -Path "dist\**\*.js" -Pattern "addLayers" -CaseSensitive

# Deve encontrar referências ao widget correto
Select-String -Path "dist\**\*.js" -Pattern "filtrar-e-gerar-relatorio" -CaseSensitive
```

## 📤 Commit e Push

Após recompilar, faça commit dos novos arquivos em `dist/`:

```powershell
git add dist/
git commit -m "Recompilar widget com classes CSS corretas"
git push origin main
```

## 🔄 No Portal do Experience Builder

1. **Remova o widget antigo:**
   - Acesse como Administrador
   - Vá em **Widgets** > **Custom Widgets**
   - Remova o widget antigo (se existir)

2. **Adicione novamente:**
   - Use a URL do repositório: `https://github.com/lorenalferraz/filtrar-e-gerar-relatorio.git`
   - Ou faça upload do ZIP atualizado usando `.\package-widget.ps1`

3. **Limpe o cache do navegador:**
   - Pressione `Ctrl+Shift+Delete`
   - Limpe cache e dados de sites

## ✅ Resultado Esperado

Após essas correções e recompilação:
- ✅ O widget terá classes CSS corretas
- ✅ O Experience Builder identificará corretamente o widget
- ✅ O conteúdo do widget será o correto (com botão "Gerar Relatório")

