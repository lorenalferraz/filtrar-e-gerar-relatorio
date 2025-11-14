# Processo Completo para Resolver o Problema do Widget Antigo

## ✅ O que já foi feito

1. ✅ Arquivos recompilados corretamente
2. ✅ Verificado que não há mais referências ao "add-layers" (0 encontradas)
3. ✅ Arquivos commitados e enviados para o GitHub

## 🔄 Processo Completo (FAÇA AGORA)

### Passo 1: Reiniciar o Servidor do Experience Builder

**IMPORTANTE:** O servidor precisa ser reiniciado para limpar o cache interno.

```powershell
# Pare o servidor atual (Ctrl+C no terminal onde está rodando)
# Depois inicie novamente:
cd c:\exb\client
npm start
```

Ou se estiver usando outro comando:
- `npm run serve`
- `npm run dev`
- Ou o comando que você usa para iniciar o Experience Builder

### Passo 2: Limpar Cache do Portal (se aplicável)

Se você já fez upload do widget no Portal do Experience Builder:

1. **Acesse o Portal como Administrador**
2. **Vá em Widgets > Custom Widgets**
3. **Remova o widget antigo** (se existir)
4. **Adicione novamente:**
   - Use o ZIP atualizado, OU
   - Faça pull do repositório novamente

### Passo 3: Limpar Cache do Navegador

No navegador onde você está usando o Experience Builder:

1. **Pressione Ctrl+Shift+Delete**
2. **Selecione:**
   - Cache de imagens e arquivos
   - Dados de sites armazenados
3. **Período:** Última hora ou Tudo
4. **Limpar dados**

Ou use **Modo Anônimo/Privado** para testar sem cache.

### Passo 4: Verificar no Experience Builder

1. **Abra o Experience Builder**
2. **Vá em Insert > Widget**
3. **Procure por "Filtrar e Baixar"**
4. **Verifique:**
   - ✅ Nome: "Filtrar e Baixar"
   - ✅ Descrição: "Widget que carrega automaticamente a camada..."
   - ❌ NÃO deve mostrar "Add Layers"

## 🔍 Se o Problema Persistir

### Verificar se os arquivos estão corretos:

```powershell
cd c:\exb\client\your-extensions\widgets\filtrar-e-baixar

# Não deve retornar nada
Select-String -Path "dist\**\*.js" -Pattern "add-layers"

# Deve retornar referências
Select-String -Path "dist\**\*.js" -Pattern "filtrar-e-baixar"
```

### Verificar o manifest.json:

```powershell
Get-Content manifest.json | Select-String "name"
```

Deve mostrar: `"name": "filtrar-e-baixar"`

### Rebuild completo (se necessário):

```powershell
cd c:\exb\client\your-extensions\widgets\filtrar-e-baixar
.\rebuild-completo.ps1
```

## 📝 Checklist Final

- [ ] Servidor do Experience Builder reiniciado
- [ ] Cache do navegador limpo
- [ ] Widget removido e readicionado no Portal (se aplicável)
- [ ] Arquivos em `dist/` verificados (sem referências ao add-layers)
- [ ] Testado no Experience Builder

## ⚠️ Importante

O cache pode estar em vários lugares:
1. **Servidor do Experience Builder** - precisa reiniciar
2. **Navegador** - precisa limpar cache
3. **Portal** - pode precisar remover e readicionar o widget

Após fazer todos esses passos, o widget deve funcionar corretamente!

