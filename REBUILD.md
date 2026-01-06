# Como Recompilar o Widget

## ⚠️ Problema Identificado

Os arquivos em `dist/` ainda contêm referências ao widget antigo "add-layers". Isso acontece porque os arquivos não foram recompilados após a mudança do widget.

## ✅ Solução: Recompilar o Widget

### Opção 1: Via Experience Builder (Recomendado)

1. **No Experience Builder:**
   - Abra o projeto que contém o widget
   - O Experience Builder deve recompilar automaticamente quando detectar mudanças
   - Se não recompilar automaticamente, vá em **Build** > **Rebuild Widgets**

### Opção 2: Via Linha de Comando

Se você tem acesso ao Experience Builder SDK:

```bash
cd c:\exb\client
npm run build:dev
```

Ou para produção:

```bash
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

## 🔍 Verificação

Após recompilar, verifique se os arquivos em `dist/` estão corretos:

```powershell
# Verificar se não há mais referências ao widget antigo
Select-String -Path "dist\**\*.js" -Pattern "add-layers" -CaseSensitive
```

Se não retornar resultados, está correto!

## 📝 Notas Importantes

- Os arquivos em `dist/` são gerados automaticamente pelo webpack
- Não edite manualmente os arquivos em `dist/`
- Sempre recompile após alterar arquivos em `src/`
- O Experience Builder precisa dos arquivos compilados em `dist/` para funcionar

## 🚀 Após Recompilar

1. Faça commit dos novos arquivos em `dist/`:
   ```powershell
   git add dist/
   git commit -m "Recompila widget com novo codigo"
   git push
   ```

2. Faça upload novamente no Portal do Experience Builder

