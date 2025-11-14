# Script para criar pacote ZIP do widget para Experience Builder Portal
# Executa: .\package-widget.ps1

$widgetName = "filtrar-e-baixar"
$zipFileName = "$widgetName.zip"
$tempDir = "temp-package"

# Remove ZIP anterior se existir
if (Test-Path $zipFileName) {
    Remove-Item $zipFileName -Force
    Write-Host "Arquivo ZIP anterior removido." -ForegroundColor Yellow
}

# Remove diretorio temporario se existir
if (Test-Path $tempDir) {
    Remove-Item $tempDir -Recurse -Force
}

# Cria diretorio temporario
New-Item -ItemType Directory -Path $tempDir | Out-Null

Write-Host "Criando pacote ZIP do widget..." -ForegroundColor Green

# Lista de arquivos e pastas a incluir no ZIP
$filesToInclude = @(
    "manifest.json",
    "config.json",
    "icon.svg",
    "dist",
    "src"
)

# Copia arquivos e pastas para o diretorio temporario
foreach ($item in $filesToInclude) {
    if (Test-Path $item) {
        Copy-Item -Path $item -Destination $tempDir -Recurse -Force
        Write-Host "  ✓ '$item' adicionado" -ForegroundColor Cyan
    } else {
        Write-Host "  ✗ '$item' nao encontrado - pulando" -ForegroundColor Red
    }
}

# Cria o arquivo ZIP usando Compress-Archive
Compress-Archive -Path "$tempDir\*" -DestinationPath $zipFileName -Force

# Remove diretorio temporario
Remove-Item $tempDir -Recurse -Force

if (Test-Path $zipFileName) {
    $fileSize = (Get-Item $zipFileName).Length / 1024
    $fileSizeKB = [math]::Round($fileSize, 2)
    Write-Host ""
    Write-Host "Pacote criado com sucesso: $zipFileName ($fileSizeKB KB)" -ForegroundColor Green
    Write-Host ""
    Write-Host "Proximos passos:" -ForegroundColor Yellow
    Write-Host "1. Acesse o Portal do Experience Builder (Admin)" -ForegroundColor White
    Write-Host "2. Va em 'Widgets' > 'Custom Widgets'" -ForegroundColor White
    Write-Host "3. Faca upload do arquivo: $zipFileName" -ForegroundColor White
    Write-Host ""
    Write-Host "Ou use a URL do GitHub:" -ForegroundColor Yellow
    Write-Host "https://github.com/lorenalferraz/filtrar.git" -ForegroundColor Cyan
} else {
    Write-Host ""
    Write-Host "Erro ao criar o pacote ZIP!" -ForegroundColor Red
}
