# Script completo para rebuild do widget
# Executa: .\rebuild-completo.ps1

Write-Host "=== REBUILD COMPLETO DO WIDGET ===" -ForegroundColor Cyan
Write-Host ""

# 1. Limpar cache e arquivos antigos
Write-Host "1. Limpando arquivos antigos..." -ForegroundColor Yellow
if (Test-Path "dist") {
    Remove-Item -Path "dist" -Recurse -Force
    Write-Host "   ✓ Pasta dist removida" -ForegroundColor Green
}

# 2. Limpar cache do webpack/build
Write-Host "2. Limpando cache de build..." -ForegroundColor Yellow
$cachePaths = @(
    "..\..\..\node_modules\.cache",
    "..\..\..\dist\widgets\filtrar-e-gerar-relatorio"
)

foreach ($path in $cachePaths) {
    if (Test-Path $path) {
        Remove-Item -Path $path -Recurse -Force -ErrorAction SilentlyContinue
        Write-Host "   ✓ Cache limpo: $path" -ForegroundColor Green
    }
}

# 3. Recompilar o widget
Write-Host "3. Recompilando widget..." -ForegroundColor Yellow
Push-Location "..\..\.."
npm run build:dev
if ($LASTEXITCODE -eq 0) {
    Write-Host "   ✓ Build concluido" -ForegroundColor Green
} else {
    Write-Host "   ✗ Erro no build" -ForegroundColor Red
    Pop-Location
    exit 1
}
Pop-Location

# 4. Copiar arquivos compilados
Write-Host "4. Copiando arquivos compilados..." -ForegroundColor Yellow
$sourcePath = "..\..\..\dist\widgets\filtrar-e-gerar-relatorio"
$destPath = "dist"

if (Test-Path $sourcePath) {
    New-Item -ItemType Directory -Path $destPath -Force | Out-Null
    Copy-Item -Path "$sourcePath\*" -Destination $destPath -Recurse -Force
    Write-Host "   ✓ Arquivos copiados" -ForegroundColor Green
} else {
    Write-Host "   ✗ Arquivos compilados nao encontrados em: $sourcePath" -ForegroundColor Red
    exit 1
}

# 5. Verificar se nao ha mais referencias ao widget antigo
Write-Host "5. Verificando referencias..." -ForegroundColor Yellow
$oldRefs = Select-String -Path "dist\**\*.js" -Pattern "add-layers" -ErrorAction SilentlyContinue
if ($oldRefs) {
    Write-Host "   ✗ AINDA HA REFERENCIAS AO WIDGET ANTIGO!" -ForegroundColor Red
    $oldRefs | ForEach-Object { Write-Host "     $_" -ForegroundColor Red }
    exit 1
} else {
    Write-Host "   ✓ Nenhuma referencia ao widget antigo encontrada" -ForegroundColor Green
}

# 6. Verificar se ha referencias ao novo widget
Write-Host "6. Verificando referencias ao novo widget..." -ForegroundColor Yellow
$newRefs = Select-String -Path "dist\**\*.js" -Pattern "filtrar-e-gerar-relatorio" -ErrorAction SilentlyContinue
if ($newRefs) {
    Write-Host "   ✓ Referencias ao novo widget encontradas" -ForegroundColor Green
} else {
    Write-Host "   ⚠ Nenhuma referencia ao novo widget encontrada" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "=== REBUILD CONCLUIDO ===" -ForegroundColor Cyan
Write-Host ""
Write-Host "Proximos passos:" -ForegroundColor Yellow
Write-Host "1. REINICIE o servidor do Experience Builder" -ForegroundColor White
Write-Host "2. Faca commit e push dos arquivos:" -ForegroundColor White
Write-Host "   git add dist/" -ForegroundColor Cyan
Write-Host "   git commit -m 'Rebuild completo - widget atualizado'" -ForegroundColor Cyan
Write-Host "   git push" -ForegroundColor Cyan
Write-Host "3. No Portal, remova o widget antigo e adicione novamente" -ForegroundColor White
Write-Host "4. Limpe o cache do navegador (Ctrl+Shift+Delete)" -ForegroundColor White
