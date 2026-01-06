# Arquivos Necessários para o Experience Builder

## 📋 Lista de Arquivos Obrigatórios no Git

O Experience Builder precisa dos seguintes arquivos no repositório Git para carregar o widget corretamente:

### ✅ Arquivos na Raiz (Obrigatórios)

1. **`manifest.json`** ⭐ **CRÍTICO**
   - Identifica o widget pelo campo `"name"`
   - Deve conter: `"name": "filtrar-e-gerar-relatorio"`
   - O Experience Builder usa este arquivo para identificar qual widget carregar

2. **`config.json`**
   - Configuração padrão do widget
   - Define propriedades iniciais

3. **`icon.svg`**
   - Ícone do widget exibido na interface

### ✅ Pasta `dist/` (Obrigatória - Arquivos Compilados)

A pasta `dist/` contém os arquivos JavaScript compilados que o Experience Builder executa:

```
dist/
├── manifest.json          # Cópia do manifest (deve ter o mesmo "name")
├── config.json            # Cópia do config
├── icon.svg               # Cópia do ícone
├── runtime/
│   ├── widget.js          # Código compilado do widget (CRÍTICO)
│   └── translations/
│       └── default.ts     # Traduções
└── setting/
    ├── setting.js          # Código compilado das configurações
    └── translations/
        └── default.ts      # Traduções
```

### ✅ Pasta `src/` (Recomendada - Código Fonte)

A pasta `src/` contém o código fonte TypeScript/React:

```
src/
├── config.ts
├── runtime/
│   ├── widget.tsx         # Código fonte principal
│   └── translations/
│       └── default.ts
└── setting/
    ├── setting.tsx
    └── translations/
        └── default.ts
```

## 🔍 Verificação: Todos os Arquivos Estão no Git?

Execute este comando para verificar:

```powershell
git ls-files | Select-String -Pattern "manifest|config|icon|dist|src"
```

Você deve ver:
- ✅ `manifest.json`
- ✅ `config.json`
- ✅ `icon.svg`
- ✅ `dist/manifest.json`
- ✅ `dist/config.json`
- ✅ `dist/icon.svg`
- ✅ `dist/runtime/widget.js`
- ✅ `dist/setting/setting.js`
- ✅ `src/` (todos os arquivos .tsx e .ts)

## ⚠️ Problema: Widget Antigo Sendo Carregado

Se o Experience Builder continua pegando o widget antigo, verifique:

### 1. O campo `"name"` no manifest.json

O campo `"name"` é o identificador único do widget. Verifique se está correto:

```json
{
  "name": "filtrar-e-gerar-relatorio",  ← DEVE SER ESTE NOME
  "label": "Filtrar e Gerar Relatório",
  ...
}
```

### 2. Cache do Experience Builder Portal

O Portal pode ter cache do widget antigo. Faça:

1. **Remova o widget antigo do Portal:**
   - Acesse como Administrador
   - Vá em **Widgets** > **Custom Widgets**
   - Remova o widget antigo (se existir)

2. **Adicione novamente:**
   - Use a URL do repositório: `https://github.com/lorenalferraz/filtrar-e-gerar-relatorio.git`
   - Ou faça upload do ZIP atualizado

### 3. Verifique se o manifest.json no GitHub está correto

Acesse: `https://raw.githubusercontent.com/lorenalferraz/filtrar-e-gerar-relatorio/main/manifest.json`

O campo `"name"` deve ser: `"filtrar-e-gerar-relatorio"`

### 4. Verifique os arquivos compilados em dist/

Os arquivos em `dist/runtime/widget.js` podem ter referências antigas. Verifique:

```powershell
Select-String -Path "dist\**\*.js" -Pattern "filtrar-e-gerar-relatorio"
```

Se encontrar referências, você precisa recompilar o widget.

## 🚀 Solução: Recompilar e Atualizar

1. **Recompile o widget:**
   ```powershell
   cd c:\exb\client
   npm run build:dev
   ```

2. **Verifique os arquivos compilados:**
   ```powershell
   cd c:\exb\client\your-extensions\widgets\filtrar-e-gerar-relatorio
   Select-String -Path "dist\**\*.js" -Pattern "filtrar-e-gerar-relatorio"
   ```

3. **Faça commit e push:**
   ```powershell
   git add dist/
   git commit -m "Atualizar arquivos compilados com nome correto do widget"
   git push origin main
   ```

4. **No Portal do Experience Builder:**
   - Remova o widget antigo
   - Adicione novamente usando a URL do repositório ou o ZIP atualizado

## 📝 Resumo: Arquivos Mínimos Necessários

```
repositório/
├── manifest.json          ← OBRIGATÓRIO (identifica o widget)
├── config.json           ← OBRIGATÓRIO
├── icon.svg              ← OBRIGATÓRIO
├── dist/                 ← OBRIGATÓRIO (arquivos compilados)
│   ├── manifest.json
│   ├── config.json
│   ├── icon.svg
│   ├── runtime/
│   │   └── widget.js     ← CRÍTICO (código executável)
│   └── setting/
│       └── setting.js
└── src/                  ← RECOMENDADO (código fonte)
    ├── config.ts
    ├── runtime/
    │   └── widget.tsx
    └── setting/
        └── setting.tsx
```

## 🔗 Links para Verificação

- Repositório: https://github.com/lorenalferraz/filtrar-e-gerar-relatorio
- Manifest: https://raw.githubusercontent.com/lorenalferraz/filtrar-e-gerar-relatorio/main/manifest.json
- Tree: https://github.com/lorenalferraz/filtrar-e-gerar-relatorio/tree/main

