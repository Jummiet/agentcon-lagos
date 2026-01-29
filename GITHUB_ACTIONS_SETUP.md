# GitHub Actions Setup for Azure Deployment

## Azure Details
- **Subscription**: Visual Studio Enterprise Subscription - MVP/RD
- **Directory**: Community Subscription (wintest.onmicrosoft.com)
- **Repository**: https://github.com/Jummiet/agentcon-lagos

## Option 1: Azure Static Web Apps (Recommended for React Apps)

### Step 1: Create Azure Static Web App

1. **Install/Verify Azure CLI** (if not already done):
   ```powershell
   winget install -e --id Microsoft.AzureCLI
   # After installation, refresh PATH
   $env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
   ```

2. **Login to Azure**:
   ```powershell
   az login --tenant wintest.onmicrosoft.com
   ```

3. **Set the subscription**:
   ```powershell
   az account set --subscription "Visual Studio Enterprise Subscription - MVP/RD"
   ```

4. **Create a resource group** (if you don't have one):
   ```powershell
   az group create --name agentcamp-lagos-rg --location southafricanorth
   ```

5. **Create Azure Static Web App**:
   ```powershell
   az staticwebapp create `
     --name agentcamp-lagos `
     --resource-group agentcamp-lagos-rg `
     --source https://github.com/Jummiet/agentcon-lagos `
     --location southafricanorth `
     --branch main `
     --app-location "/" `
     --output-location "dist" `
     --login-with-github
   ```

6. **Get the deployment token**:
   ```powershell
   az staticwebapp secrets list --name agentcamp-lagos --resource-group agentcamp-lagos-rg
   ```

### Step 2: Configure GitHub Secrets

1. Go to your repository: https://github.com/Jummiet/agentcon-lagos/settings/secrets/actions

2. Click **"New repository secret"**

3. Add the following secret:
   - **Name**: `AZURE_STATIC_WEB_APPS_API_TOKEN`
   - **Value**: [The deployment token from step 6 above]

### Step 3: Deploy

Push to main branch or manually trigger the workflow:
```powershell
git add .
git commit -m "Add GitHub Actions workflow for Azure deployment"
git push origin main
```

Your app will automatically deploy to: `https://agentcamp-lagos.azurestaticapps.net`

---

## Option 2: Azure Web App (Traditional Hosting)

### Step 1: Create Azure Web App

1. **Login and set subscription**:
   ```powershell
   az login --tenant wintest.onmicrosoft.com
   az account set --subscription "Visual Studio Enterprise Subscription - MVP/RD"
   ```

2. **Create a resource group**:
   ```powershell
   az group create --name agentcamp-lagos-rg --location southafricanorth
   ```

3. **Create an App Service Plan**:
   ```powershell
   az appservice plan create `
     --name agentcamp-plan `
     --resource-group agentcamp-lagos-rg `
     --sku B1 `
     --is-linux
   ```

4. **Create a Web App**:
   ```powershell
   az webapp create `
     --name agentcamp-lagos `
     --resource-group agentcamp-lagos-rg `
     --plan agentcamp-plan `
     --runtime "NODE:20-lts"
   ```

5. **Configure deployment**:
   ```powershell
   az webapp config appsettings set `
     --name agentcamp-lagos `
     --resource-group agentcamp-lagos-rg `
     --settings WEBSITE_NODE_DEFAULT_VERSION="20-lts"
   ```

### Step 2: Get Publish Profile

```powershell
az webapp deployment list-publishing-profiles `
  --name agentcamp-lagos `
  --resource-group agentcamp-lagos-rg `
  --xml
```

Copy the entire XML output.

### Step 3: Configure GitHub Secrets

1. Go to: https://github.com/Jummiet/agentcon-lagos/settings/secrets/actions

2. Add these secrets:

   **For Azure Credentials**:
   ```powershell
   # Create a service principal
   az ad sp create-for-rbac `
     --name "agentcamp-lagos-sp" `
     --role contributor `
     --scopes /subscriptions/$(az account show --query id -o tsv)/resourceGroups/agentcamp-lagos-rg `
     --sdk-auth
   ```
   
   - **Name**: `AZURE_CREDENTIALS`
   - **Value**: [Paste the JSON output from above]

   **For Publish Profile**:
   - **Name**: `AZURE_WEBAPP_PUBLISH_PROFILE`
   - **Value**: [Paste the XML from Step 2]

### Step 4: Deploy

The workflow will trigger automatically on push to main, or run manually from Actions tab.

---

## Verify Deployment

After GitHub Actions completes:

### Azure Static Web Apps:
- URL: `https://agentcamp-lagos.azurestaticapps.net`
- Or custom domain if configured

### Azure Web App:
- URL: `https://agentcamp-lagos.azurewebsites.net`

## Monitoring

- **GitHub Actions**: https://github.com/Jummiet/agentcon-lagos/actions
- **Azure Portal**: https://portal.azure.com
- **View Logs**: In Azure Portal → Your resource → Monitoring → Log Stream

## Troubleshooting

### Authentication Issues
If you get authentication errors:
```powershell
az logout
az login --tenant wintest.onmicrosoft.com
az account set --subscription "Visual Studio Enterprise Subscription - MVP/RD"
```

### Build Failures
- Check Node.js version matches (20.x)
- Verify all dependencies are in package.json
- Test build locally: `npm run build`

### Deployment Token Issues
Regenerate the token:
```powershell
az staticwebapp secrets list --name agentcamp-lagos --resource-group agentcamp-lagos-rg --query "properties.apiKey" -o tsv
```

## Next Steps

1. ✅ Set up custom domain
2. ✅ Configure SSL certificate
3. ✅ Add Application Insights for monitoring
4. ✅ Set up staging environments
5. ✅ Configure CDN for better performance

---

## Useful Commands

```powershell
# View your subscriptions
az account list --output table

# Check webapp status
az webapp show --name agentcamp-lagos --resource-group agentcamp-lagos-rg --query state

# View deployment history
az webapp deployment list --name agentcamp-lagos --resource-group agentcamp-lagos-rg

# View logs
az webapp log tail --name agentcamp-lagos --resource-group agentcamp-lagos-rg

# Restart app
az webapp restart --name agentcamp-lagos --resource-group agentcamp-lagos-rg
```
