# Solução: Widget Carregando Versão Antiga

## Problema Identificado

O widget estava carregando a versão antiga "add-layers" porque os arquivos em `dist/` não foram recompilados após a mudança.

## ✅ Solução Aplicada

1. **Removemos a pasta dist antiga:**
   ```powershell
   Remove-Item -Path dist -Recurse -Force
   ```

2. **Recompilamos o widget:**
   ```bash
   cd c:\exb\client
   npm run build:dev
   ```

3. **Copiamos os arquivos compilados:**
   - Os arquivos foram gerados em: `c:\exb\client\dist\widgets\filtrar-e-gerar-relatorio\`
   - Copiamos para: `c:\exb\client\your-extensions\widgets\filtrar-e-gerar-relatorio\dist\`

4. **Verificamos que não há mais referências ao widget antigo:**
   - ✅ Nenhuma referência a "add-layers" encontrada
   - ✅ Referências corretas a "filtrar-e-gerar-relatorio" presentes

5. **Fizemos commit e push:**
   ```powershell
   git add dist/
   git commit -m "Recompila widget corretamente"
   git push
   ```

## 🔍 Como Verificar

Após recompilar, verifique:

```powershell
# Não deve retornar nada (sem referências ao widget antigo)
Select-String -Path "dist\**\*.js" -Pattern "add-layers"

# Deve retornar referências ao novo widget
Select-String -Path "dist\**\*.js" -Pattern "filtrar-e-gerar-relatorio"
```

## 📝 Próximos Passos

1. **Faça upload novamente no Portal do Experience Builder:**
   - Use o ZIP atualizado ou
   - Faça pull do repositório novamente

2. **Limpe o cache do navegador** (se necessário):
   - Ctrl+Shift+Delete
   - Ou use modo anônimo

3. **Verifique no Experience Builder:**
   - O widget deve aparecer como "Filtrar e Gerar Relatório"
   - Não deve mais mostrar "Add Layers"

## ⚠️ Importante

Sempre recompile após fazer alterações no código:
```bash
cd c:\exb\client
npm run build:dev
```

E copie os arquivos para a pasta do widget:
```powershell
Copy-Item -Path "..\..\..\dist\widgets\filtrar-e-gerar-relatorio\*" -Destination "dist" -Recurse -Force
```

