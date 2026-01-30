# Complete GitHub Actions Deployment Guide

## Get Your Site Live in 10 Steps

---

## Step 1: Login to Azure (2 minutes)

Open PowerShell and run:

```powershell
az login --tenant wintest.onmicrosoft.com
```

- Browser opens → Sign in with your Microsoft account
- Close browser when it says "Authentication complete"

---

## Step 2: Set Your Subscription (30 seconds)

```powershell
az account set --subscription "Visual Studio Enterprise Subscription - MVP/RD"
```

Verify:

```powershell
az account show
```

---

## Step 3: Create Resource Group (30 seconds)

```powershell
az group create --name agentcamp-lagos-rg --location southafricanorth
```

You should see: `"provisioningState": "Succeeded"`

---

## Step 4: Create Azure Static Web App (2 minutes)

```powershell
az staticwebapp create --name agentcamp-lagos --resource-group agentcamp-lagos-rg --source https://github.com/Jummiet/agentcon-lagos --location southafricanorth --branch main --app-location "/" --output-location "dist" --login-with-github
```

**What happens:**

- Browser opens for GitHub authorization
- Click **"Authorize Azure Static Web Apps"**
- Wait 1-2 minutes for creation
- You'll see JSON output

---

## Step 5: Get Deployment Token (30 seconds)

```powershell
az staticwebapp secrets list --name agentcamp-lagos --resource-group agentcamp-lagos-rg --query "properties.apiKey" -o tsv
```

**COPY THE TOKEN** that appears (long string of characters)

---

## Step 6: Add GitHub Secret (1 minute)

1. Go to: <https://github.com/Jummiet/agentcon-lagos/settings/secrets/actions>

2. Click **"New repository secret"**

3. Fill in:
   - **Name**: `AZURE_STATIC_WEB_APPS_API_TOKEN`
   - **Value**: Paste the token from Step 5

4. Click **"Add secret"**

---

## Step 7: Trigger GitHub Actions (30 seconds)

In PowerShell:

```powershell
cd d:\agentcamp-lagos
git commit --allow-empty -m "Deploy to Azure"
git push origin main
```

---

## Step 8: Watch Deployment (3 minutes)

1. Go to: <https://github.com/Jummiet/agentcon-lagos/actions>

2. Click on the newest workflow run

3. Watch it build and deploy (green checkmarks ✅)

---

## Step 9: Get Your Live URL (30 seconds)

In PowerShell:

```powershell
az staticwebapp show --name agentcamp-lagos --resource-group agentcamp-lagos-rg --query "defaultHostname" -o tsv
```

Or it will be: **<https://agentcamp-lagos.azurestaticapps.net>**

---

## Step 10: Visit Your Live Site! 🎉

Open the URL in your browser - your site is LIVE!

---

## ✅ Success Checklist

- [ ] Azure CLI logged in
- [ ] Resource group created
- [ ] Static Web App created
- [ ] Deployment token copied
- [ ] GitHub secret added
- [ ] Code pushed to trigger workflow
- [ ] Workflow completed successfully
- [ ] Site is live and accessible

---

## 🔧 Quick Troubleshooting

### "Error: The resource group already exists"

✅ This is fine! Just continue to Step 4

### "Error: The app name is already taken"

Change the name:

```powershell
az staticwebapp create --name agentcamp-lagos-YOURNAME --resource-group agentcamp-lagos-rg ...
```

### "GitHub authorization failed"

- Make sure you're logged into GitHub in your browser
- Try the command again


### Workflow still failing

- Double-check the secret name is exactly: `AZURE_STATIC_WEB_APPS_API_TOKEN`
- Make sure you pasted the complete token
- No extra spaces before/after the token

---

## 📞 Need Help at Any Step?

Just tell me which step number you're on and what you're seeing!

---

## ⏱️ Total Time: ~10 minutes

Most time is waiting for Azure to provision resources.

**Start with Step 1 above and let me know when you complete each step!** 🚀
