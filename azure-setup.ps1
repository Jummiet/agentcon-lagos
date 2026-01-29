# Azure Setup Script for AgentCamp Lagos
# Run this script after Azure CLI installation completes

Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "Azure Setup for AgentCamp Lagos" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""

# Check if Azure CLI is installed
try {
    $azVersion = az --version
    Write-Host "✓ Azure CLI is installed" -ForegroundColor Green
} catch {
    Write-Host "✗ Azure CLI is not installed. Please install it first:" -ForegroundColor Red
    Write-Host "  winget install -e --id Microsoft.AzureCLI" -ForegroundColor Yellow
    exit 1
}

Write-Host ""
Write-Host "Step 1: Logging in to Azure..." -ForegroundColor Yellow
az login --tenant wintest.onmicrosoft.com

Write-Host ""
Write-Host "Step 2: Setting subscription..." -ForegroundColor Yellow
az account set --subscription "Visual Studio Enterprise Subscription - MVP/RD"

Write-Host ""
Write-Host "Step 3: Creating resource group..." -ForegroundColor Yellow
az group create --name agentcamp-lagos-rg --location southafricanorth

Write-Host ""
Write-Host "Step 4: Creating Azure Static Web App..." -ForegroundColor Yellow
Write-Host "This will open a browser for GitHub authentication..." -ForegroundColor Yellow
az staticwebapp create `
  --name agentcamp-lagos `
  --resource-group agentcamp-lagos-rg `
  --source https://github.com/Jummiet/agentcon-lagos `
  --location southafricanorth `
  --branch main `
  --app-location "/" `
  --output-location "dist" `
  --login-with-github

Write-Host ""
Write-Host "Step 5: Getting deployment token..." -ForegroundColor Yellow
$token = az staticwebapp secrets list --name agentcamp-lagos --resource-group agentcamp-lagos-rg --query "properties.apiKey" -o tsv

Write-Host ""
Write-Host "=====================================" -ForegroundColor Green
Write-Host "Setup Complete!" -ForegroundColor Green
Write-Host "=====================================" -ForegroundColor Green
Write-Host ""
Write-Host "Next Steps:" -ForegroundColor Cyan
Write-Host "1. Copy the deployment token below" -ForegroundColor White
Write-Host "2. Go to: https://github.com/Jummiet/agentcon-lagos/settings/secrets/actions" -ForegroundColor White
Write-Host "3. Click 'New repository secret'" -ForegroundColor White
Write-Host "4. Name: AZURE_STATIC_WEB_APPS_API_TOKEN" -ForegroundColor White
Write-Host "5. Value: Paste the token below" -ForegroundColor White
Write-Host ""
Write-Host "Deployment Token:" -ForegroundColor Yellow
Write-Host $token -ForegroundColor Green
Write-Host ""
Write-Host "Your app will be available at:" -ForegroundColor Cyan
Write-Host "https://agentcamp-lagos.azurestaticapps.net" -ForegroundColor Green
Write-Host ""
Write-Host "After adding the secret, push any change to trigger deployment!" -ForegroundColor Yellow
