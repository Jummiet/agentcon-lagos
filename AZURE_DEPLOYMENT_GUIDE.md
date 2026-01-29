# Azure Web App Deployment Guide for AgentCamp Lagos

## Application Details
- **Type**: React + Vite SPA
- **Build Output**: `dist/` folder
- **Deployment Package**: `agentcamp-lagos-deploy.zip`

## Deployment Options

### Option 1: Azure Portal Deployment (Easiest)

1. **Login to Azure Portal**: https://portal.azure.com
2. **Create a Resource Group** (if you don't have one):
   - Click "Resource groups" > "Create"
   - Enter a name (e.g., `agentcamp-lagos-rg`)
   - Select a region close to Lagos (e.g., `South Africa North` or `West Europe`)
   - Click "Review + create" > "Create"

3. **Create an App Service**:
   - Search for "App Services" > Click "Create" > "Web App"
   - Fill in the details:
     - **Subscription**: Choose your subscription
     - **Resource Group**: Select the one you created
     - **Name**: `agentcamp-lagos` (must be globally unique)
     - **Publish**: Code
     - **Runtime stack**: Node 20 LTS
     - **Operating System**: Windows or Linux
     - **Region**: South Africa North (closest to Lagos)
     - **Pricing Plan**: Choose Free F1 or Basic B1
   - Click "Review + create" > "Create"

4. **Deploy Your Application**:
   - Go to your App Service
   - Click "Deployment Center" in the left menu
   - Select "Local Git" or "FTPS"
   - Or use "ZIP Deploy":
     - Go to `https://<your-app-name>.scm.azurewebsites.net/ZipDeployUI`
     - Drag and drop the `agentcamp-lagos-deploy.zip` file

### Option 2: Azure CLI Deployment (Requires Azure CLI)

Once Azure CLI is installed, run these commands:

```powershell
# Login to Azure
az login

# Create a resource group
az group create --name agentcamp-lagos-rg --location southafricanorth

# Create an App Service Plan
az appservice plan create --name agentcamp-plan --resource-group agentcamp-lagos-rg --sku F1 --is-linux

# Create a Web App
az webapp create --name agentcamp-lagos --resource-group agentcamp-lagos-rg --plan agentcamp-plan --runtime "NODE:20-lts"

# Deploy the ZIP file
az webapp deploy --resource-group agentcamp-lagos-rg --name agentcamp-lagos --src-path agentcamp-lagos-deploy.zip --type zip

# Your app will be available at: https://agentcamp-lagos.azurewebsites.net
```

### Option 3: Azure Static Web Apps (Recommended for Static Sites)

```powershell
# Create a Static Web App
az staticwebapp create --name agentcamp-lagos --resource-group agentcamp-lagos-rg --source . --location southafricanorth --branch main --app-location "/" --output-location "dist"
```

### Option 4: VS Code Azure Extension

1. Install the "Azure App Service" extension in VS Code
2. Click the Azure icon in the sidebar
3. Sign in to Azure
4. Right-click on "App Services" > "Create New Web App..."
5. Follow the prompts to create and deploy

## Post-Deployment Steps

1. **Verify the deployment**:
   - Visit `https://<your-app-name>.azurewebsites.net`

2. **Custom Domain** (Optional):
   - Go to your App Service > "Custom domains"
   - Add your custom domain

3. **SSL Certificate** (Optional):
   - Azure provides free SSL for *.azurewebsites.net
   - For custom domains, use "TLS/SSL settings"

## Available Subscriptions

You have multiple Azure subscriptions. Choose one from:
- Visual Studio Enterprise Subscription – MPN
- Microsoft Azure Sponsorship
- MCPP Subscription
- And others...

## Troubleshooting

- **404 errors**: The `web.config` file in the dist folder handles React routing
- **Build issues**: Make sure `npm run build` completes successfully
- **Deployment failures**: Check Azure App Service logs in the portal

## Next Steps

After successful deployment:
1. Set up CI/CD with GitHub Actions
2. Configure application settings/environment variables
3. Monitor with Application Insights
4. Scale as needed

---

**Need Help?**
- Azure Portal: https://portal.azure.com
- Azure Documentation: https://docs.microsoft.com/azure
- Azure Support: https://azure.microsoft.com/support
