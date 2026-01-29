# Step-by-Step Deployment Guide
## Deploy AgentCamp Lagos to Azure using GitHub Actions

---

## 🎯 Prerequisites Complete ✅
- ✅ Code pushed to GitHub: https://github.com/Jummiet/agentcon-lagos
- ✅ GitHub Actions workflows created
- ✅ Build successful (dist folder generated)

---

## 📋 Step-by-Step Instructions

### **Step 1: Install Azure CLI** (5 minutes)

Open a **NEW PowerShell window** (important for PATH refresh) and run:

```powershell
winget install -e --id Microsoft.AzureCLI
```

**Wait for installation to complete**, then **close and reopen PowerShell**.

Verify installation:
```powershell
az --version
```

You should see version information. If not, restart your computer.

---

### **Step 2: Login to Azure** (2 minutes)

In PowerShell, run:

```powershell
az login --tenant wintest.onmicrosoft.com
```

- A browser window will open
- Sign in with your Microsoft account
- The directory should show: **Community Subscription (wintest.onmicrosoft.com)**
- Close the browser when you see "Authentication complete"

---

### **Step 3: Set Your Subscription** (1 minute)

```powershell
az account set --subscription "Visual Studio Enterprise Subscription - MVP/RD"
```

Verify it's set correctly:
```powershell
az account show
```

You should see your subscription details.

---

### **Step 4: Create Resource Group** (1 minute)

```powershell
az group create --name agentcamp-lagos-rg --location southafricanorth
```

**Why South Africa North?** It's the closest Azure region to Lagos, Nigeria.

---

### **Step 5: Create Azure Static Web App** (3 minutes)

Run this command (it will open GitHub for authentication):

```powershell
az staticwebapp create --name agentcamp-lagos --resource-group agentcamp-lagos-rg --source https://github.com/Jummiet/agentcon-lagos --location southafricanorth --branch main --app-location "/" --output-location "dist" --login-with-github
```

**What happens:**
1. Browser opens for GitHub authorization
2. Click "Authorize Azure Static Web Apps"
3. Wait 2-3 minutes for creation
4. You'll see JSON output when complete

---

### **Step 6: Get Deployment Token** (1 minute)

```powershell
az staticwebapp secrets list --name agentcamp-lagos --resource-group agentcamp-lagos-rg --query "properties.apiKey" -o tsv
```

**Copy the entire token** that appears (it's a long string).

---

### **Step 7: Add GitHub Secret** (2 minutes)

1. Go to: https://github.com/Jummiet/agentcon-lagos/settings/secrets/actions

2. Click **"New repository secret"**

3. Fill in:
   - **Name:** `AZURE_STATIC_WEB_APPS_API_TOKEN`
   - **Value:** Paste the token from Step 6

4. Click **"Add secret"**

---

### **Step 8: Trigger Deployment** (1 minute)

The deployment will happen automatically on the next push. Let's trigger it now:

```powershell
# Make a small change to trigger deployment
echo "# Deployed to Azure" >> README.md
git add README.md
git commit -m "Trigger Azure deployment"
git push origin main
```

---

### **Step 9: Watch Deployment** (3-5 minutes)

1. Go to: https://github.com/Jummiet/agentcon-lagos/actions

2. You'll see a new workflow running: **"Deploy to Azure Static Web Apps"**

3. Click on it to watch the progress

4. Wait for green checkmarks ✅

---

### **Step 10: View Your Live Site!** 🎉

Your site will be available at:

**https://agentcamp-lagos.azurestaticapps.net**

Or check the exact URL:
```powershell
az staticwebapp show --name agentcamp-lagos --resource-group agentcamp-lagos-rg --query "defaultHostname" -o tsv
```

---

## 🎊 Success! What's Next?

### View in Azure Portal
https://portal.azure.com → Search "agentcamp-lagos"

### Automatic Deployments
Every time you push to `main` branch, GitHub Actions will automatically:
- Build your app
- Deploy to Azure
- No manual steps needed!

### Custom Domain (Optional)
1. In Azure Portal → Your Static Web App → Custom domains
2. Add your domain
3. Update DNS records

### Monitor Deployments
- **GitHub Actions**: https://github.com/Jummiet/agentcon-lagos/actions
- **Azure Portal**: https://portal.azure.com

---

## 🔧 Troubleshooting

### "az command not found"
- Restart PowerShell or computer
- Run: `$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")`

### "Subscription not found"
- Run: `az account list --output table`
- Use the exact subscription name shown

### "GitHub authorization failed"
- Make sure you're logged into GitHub in your browser
- Try: `az logout` then `az login --tenant wintest.onmicrosoft.com` again

### "Workflow not running"
- Check: https://github.com/Jummiet/agentcon-lagos/actions
- Make sure the secret name is exactly: `AZURE_STATIC_WEB_APPS_API_TOKEN`

### "Build fails in GitHub Actions"
- Check the error in Actions tab
- Usually it's a dependency issue
- Run locally: `npm ci && npm run build`

---

## 📞 Quick Reference Commands

```powershell
# Check Azure CLI version
az --version

# Check logged in account
az account show

# List all your subscriptions
az account list --output table

# Check resource group
az group show --name agentcamp-lagos-rg

# Check static web app status
az staticwebapp show --name agentcamp-lagos --resource-group agentcamp-lagos-rg

# View logs (if needed)
az staticwebapp show --name agentcamp-lagos --resource-group agentcamp-lagos-rg --query "defaultHostname"

# Delete everything (if you want to start over)
az group delete --name agentcamp-lagos-rg --yes
```

---

## ⏱️ Total Time: ~20 minutes

Most of the time is waiting for installations and builds to complete.

---

## 🎯 Summary

✅ Azure CLI installed  
✅ Azure Static Web App created  
✅ GitHub Actions configured  
✅ Automatic deployments enabled  
✅ Live site deployed  

**Your app URL:** https://agentcamp-lagos.azurestaticapps.net

Every `git push` to main = Automatic deployment! 🚀
