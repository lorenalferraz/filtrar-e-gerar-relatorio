# Guia Completo: Atualizar Widget no Experience Builder

## 📋 Passo a Passo Completo

### 1️⃣ Recompilar o Widget

Você tem duas opções para recompilar:

#### Opção A: Usar o Script Automático (Recomendado)

```powershell
cd c:\exb\client\your-extensions\widgets\filtrar-e-gerar-relatorio
.\rebuild-completo.ps1
```

Este script irá:
- ✅ Limpar arquivos antigos
- ✅ Limpar cache de build
- ✅ Recompilar o widget
- ✅ Copiar arquivos compilados
- ✅ Verificar referências

#### Opção B: Recompilar Manualmente

```powershell
# 1. Navegar para o diretório do widget
cd c:\exb\client\your-extensions\widgets\filtrar-e-gerar-relatorio

# 2. Remover pasta dist antiga (opcional, mas recomendado)
Remove-Item -Path dist -Recurse -Force

# 3. Navegar para a raiz do projeto Experience Builder
cd c:\exb\client

# 4. Recompilar o widget
npm run build:dev

# 5. Voltar para o diretório do widget
cd your-extensions\widgets\filtrar-e-gerar-relatorio

# 6. Copiar arquivos compilados
Copy-Item -Path "..\..\..\dist\widgets\filtrar-e-gerar-relatorio\*" -Destination "dist" -Recurse -Force
```

### 2️⃣ Verificar se a Recompilação Funcionou

```powershell
# Verificar se a nova URL está presente
Select-String -Path "dist\runtime\widget.js" -Pattern "relatorio_analise_lapa/submitJob"
```

Deve retornar a linha com a nova URL.

### 3️⃣ Iniciar o Servidor do Experience Builder (Se Necessário)

Se você está desenvolvendo localmente:

```powershell
# Navegar para a raiz do projeto
cd c:\exb\client

# Iniciar o servidor de desenvolvimento
npm start
```

Ou se você já tem o servidor rodando, pode precisar reiniciá-lo:

1. **Parar o servidor atual** (Ctrl+C no terminal)
2. **Iniciar novamente:**
   ```powershell
   cd c:\exb\client
   npm start
   ```

### 4️⃣ Testar no Cliente (Experience Builder Local)

1. **Acesse o Experience Builder:**
   - Abra o navegador
   - Acesse: `http://localhost:3000` (ou a porta configurada)

2. **Abrir/Criar um projeto:**
   - Abra um projeto existente que usa o widget
   - Ou crie um novo projeto e adicione o widget

3. **Verificar o widget:**
   - O widget deve aparecer na lista de widgets disponíveis
   - Adicione o widget à experiência
   - Teste a funcionalidade de gerar relatório

4. **Verificar no Console do Navegador (F12):**
   - Abra o DevTools (F12)
   - Vá na aba Console
   - Ao gerar um relatório, verifique se a URL usada é a nova:
     ```
     Usando endpoint /submitJob (tarefa assíncrona): https://meioambiente.sistemas.mpba.mp.br/server/rest/services/testeoutput/processaralerta_idea/GPServer/relatorio_analise_lapa/submitJob
     ```

### 5️⃣ Fazer Commit e Push no GitHub

```powershell
# 1. Navegar para o diretório do widget
cd c:\exb\client\your-extensions\widgets\filtrar-e-gerar-relatorio

# 2. Verificar o status do Git
git status

# 3. Adicionar todos os arquivos modificados
git add .

# Ou adicionar apenas os arquivos específicos:
git add src/runtime/widget.tsx
git add dist/runtime/widget.js

# 4. Fazer commit com mensagem descritiva
git commit -m "Atualiza URL do submitJob para relatorio_analise_lapa/submitJob"

# 5. Verificar se há commits locais não enviados
git log origin/main..HEAD

# 6. Fazer push para o GitHub
git push origin main
```

**Verificar se o push foi bem-sucedido:**
- Acesse: https://github.com/lorenalferraz/filtrar-e-gerar-relatorio
- Verifique se os arquivos foram atualizados
- Confirme que a nova URL está no código

### 6️⃣ Atualizar o Widget no Portal do Experience Builder

Você tem duas opções:

#### Opção A: Atualizar via GitHub (Recomendado)

1. **Acesse o Portal do Experience Builder:**
   - Faça login como **Administrador**
   - Navegue até **Widgets** > **Custom Widgets**

2. **Remover o widget antigo (se necessário):**
   - Encontre o widget "Filtrar e Gerar Relatório"
   - Clique em **Remover** ou **Delete**
   - Confirme a remoção

3. **Adicionar o widget atualizado:**
   - Clique em **Add Widget** ou **Upload Widget**
   - Procure por opções como:
     - **"Add from GitHub"**
     - **"Register Widget from URL"**
     - **"Import from Repository"**
   
4. **Informe os dados:**
   - **URL do Repositório:** `https://github.com/lorenalferraz/filtrar-e-gerar-relatorio.git`
   - **Branch:** `main`
   - **Caminho do Widget:** (deixe em branco se o widget está na raiz)

5. **Aguardar processamento:**
   - O Portal irá clonar o repositório
   - Validar e compilar o widget
   - Tornar o widget disponível

#### Opção B: Upload via ZIP

1. **Gerar o pacote ZIP:**
   ```powershell
   cd c:\exb\client\your-extensions\widgets\filtrar-e-gerar-relatorio
   .\package-widget.ps1
   ```
   Isso criará o arquivo `filtrar-e-gerar-relatorio.zip`

2. **No Portal do Experience Builder:**
   - Acesse como **Administrador**
   - Vá em **Widgets** > **Custom Widgets**
   - Clique em **Upload Widget** ou **Add Widget**
   - Selecione o arquivo `filtrar-e-gerar-relatorio.zip`
   - Aguarde o processamento

### 7️⃣ Limpar Cache e Testar

1. **Limpar cache do navegador:**
   - Pressione `Ctrl + Shift + Delete`
   - Selecione "Cache" e "Dados de sites"
   - Limpe o cache

2. **Ou use modo anônimo:**
   - Abra uma janela anônima (Ctrl + Shift + N)
   - Acesse o Experience Builder

3. **Testar o widget:**
   - Adicione o widget a uma experiência
   - Teste a funcionalidade de gerar relatório
   - Verifique no console (F12) se a nova URL está sendo usada

### 8️⃣ Verificação Final

Para confirmar que tudo está funcionando:

1. **No código fonte (GitHub):**
   - Verifique: https://github.com/lorenalferraz/filtrar-e-gerar-relatorio/blob/main/src/runtime/widget.tsx
   - Procure por `GP_SUBMIT_JOB_URL`
   - Deve conter: `relatorio_analise_lapa/submitJob`

2. **No arquivo compilado (GitHub):**
   - Verifique: https://github.com/lorenalferraz/filtrar-e-gerar-relatorio/blob/main/dist/runtime/widget.js
   - Procure por `relatorio_analise_lapa/submitJob`

3. **No Experience Builder:**
   - O widget deve aparecer na lista
   - Deve funcionar corretamente ao gerar relatórios

## 🔍 Troubleshooting

### Problema: Widget não aparece após atualização

**Solução:**
1. Limpe o cache do navegador completamente
2. Remova o widget antigo do Portal
3. Adicione novamente o widget
4. Reinicie o servidor do Experience Builder (se local)

### Problema: Ainda está usando a URL antiga

**Solução:**
1. Verifique se o commit foi feito corretamente
2. Verifique se o push foi bem-sucedido
3. Confirme que os arquivos em `dist/` foram atualizados
4. Recompile novamente usando `.\rebuild-completo.ps1`

### Problema: Erro ao fazer push

**Solução:**
```powershell
# Verificar status
git status

# Verificar branch atual
git branch

# Se necessário, fazer pull primeiro
git pull origin main

# Tentar push novamente
git push origin main
```

### Problema: Portal não encontra o widget

**Solução:**
1. Verifique se o repositório é público
2. Confirme que o branch `main` existe
3. Verifique se o `manifest.json` está na raiz
4. Confirme que a pasta `dist/` está presente

## ✅ Checklist Final

Antes de considerar concluído, verifique:

- [ ] Widget foi recompilado com sucesso
- [ ] Arquivos em `dist/` foram atualizados
- [ ] Commit foi feito no Git
- [ ] Push foi enviado para o GitHub
- [ ] Arquivos estão visíveis no GitHub
- [ ] Widget foi atualizado no Portal do Experience Builder
- [ ] Cache do navegador foi limpo
- [ ] Widget foi testado e está funcionando
- [ ] Nova URL está sendo usada (verificar no console F12)

## 📝 Resumo dos Comandos

```powershell
# 1. Recompilar
cd c:\exb\client\your-extensions\widgets\filtrar-e-gerar-relatorio
.\rebuild-completo.ps1

# 2. Commit e Push
git add .
git commit -m "Atualiza URL do submitJob para relatorio_analise_lapa/submitJob"
git push origin main

# 3. Gerar ZIP (opcional)
.\package-widget.ps1
```

## 🎯 Próximos Passos Após Atualização

1. **Testar em produção:**
   - Use o widget em uma experiência real
   - Teste a geração de relatórios
   - Monitore erros no console

2. **Documentar mudanças:**
   - Atualize a documentação se necessário
   - Informe a equipe sobre a mudança

3. **Monitorar:**
   - Verifique logs do servidor
   - Monitore se há erros relacionados à nova URL

