# Azure Portal GUI Deployment Guide
## Deploy Your Site Using Only Your Browser - No Command Line!

---

## Step 1: Login to Azure Portal (1 minute)

1. Open your browser
2. Go to: **https://portal.azure.com**
3. Sign in with your Microsoft account
4. Make sure you see **"Community Subscription (wintest.onmicrosoft.com)"** in the top right

✅ **Continue when you're logged in**

---

## Step 2: Create a Resource Group (2 minutes)

1. In the search bar at the top, type: **Resource groups**
2. Click **"Resource groups"**
3. Click **"+ Create"** button (top left)
4. Fill in:
   - **Subscription**: Visual Studio Enterprise Subscription - MVP/RD
   - **Resource group**: `agentcamp-lagos-rg`
   - **Region**: South Africa North (or West Europe)
5. Click **"Review + create"**
6. Click **"Create"**

✅ **Wait for "Your deployment is complete" message**

---

## Step 3: Create Static Web App (5 minutes)

1. In the search bar at the top, type: **Static Web Apps**
2. Click **"Static Web Apps"**
3. Click **"+ Create"** button

### **Basics Tab:**

Fill in these details:

- **Subscription**: Visual Studio Enterprise Subscription - MVP/RD
- **Resource Group**: Select `agentcamp-lagos-rg` (the one you just created)
- **Static Web App details**:
  - **Name**: `agentcamp-lagos`
  - **Plan type**: **Free**
  - **Azure Functions and staging details**:
    - **Region for Azure Functions API**: East US 2 (or closest to you)
- **Deployment details**:
  - **Source**: **GitHub**
  - Click **"Sign in with GitHub"** button
  - A popup appears → Click **"Authorize Azure Static Web Apps"**
  - You'll be redirected back to Azure Portal

After GitHub authorization:

- **Organization**: `Jummiet`
- **Repository**: `agentcon-lagos`
- **Branch**: `main`

### **Build Details:**

- **Build Presets**: Select **"React"** from the dropdown
- **App location**: `/` (should auto-fill)
- **Api location**: (leave empty)
- **Output location**: `dist`

4. Click **"Review + create"** at the bottom
5. Review everything, then click **"Create"**

⏳ **Wait 2-3 minutes** - You'll see "Deployment is in progress"

✅ **Wait for "Your deployment is complete"**

---

## Step 4: Get Your Deployment Token (2 minutes)

1. After deployment completes, click **"Go to resource"**
2. You're now on your Static Web App page
3. In the left menu, find and click **"Overview"**
4. At the top, you'll see your URL: `https://agentcamp-lagos-...azurestaticapps.net`
5. In the left menu, click **"Manage deployment token"** (under Settings)
6. Click **"Copy"** button to copy the deployment token
7. Keep this token - we'll use it in the next step!

✅ **Token copied to clipboard**

---

## Step 5: Add Token to GitHub (2 minutes)

1. Open a new browser tab
2. Go to: **https://github.com/Jummiet/agentcon-lagos/settings/secrets/actions**
3. Click **"New repository secret"** (green button, top right)
4. Fill in:
   - **Name**: `AZURE_STATIC_WEB_APPS_API_TOKEN`
   - **Secret**: Paste the token from Step 4 (Ctrl+V)
5. Click **"Add secret"** (green button at bottom)

✅ **Secret added successfully!**

---

## Step 6: Trigger Deployment (1 minute)

### **Option A: Using GitHub Web Interface**

1. Go to: **https://github.com/Jummiet/agentcon-lagos**
2. Click on any file (e.g., `README.md`)
3. Click the **pencil icon** (Edit this file)
4. Add a space or new line anywhere
5. Scroll down, add commit message: "Trigger deployment"
6. Click **"Commit changes"**

### **Option B: Using VS Code** (if you prefer)

1. In VS Code terminal:
```powershell
git commit --allow-empty -m "Trigger deployment"
git push origin main
```

✅ **Deployment triggered!**

---

## Step 7: Watch the Deployment (3-5 minutes)

1. Go to: **https://github.com/Jummiet/agentcon-lagos/actions**
2. You'll see a workflow running: **"Deploy to Azure Static Web Apps"**
3. Click on it to watch the progress
4. Watch for green checkmarks ✅

**Stages you'll see:**
- ✅ Checkout code
- ✅ Setup Node.js
- ✅ Install dependencies
- ✅ Build application
- ✅ Deploy to Azure Static Web Apps

⏳ **Wait for all green checkmarks**

---

## Step 8: Get Your Live URL (1 minute)

### **Option A: From Azure Portal**

1. Go back to Azure Portal: **https://portal.azure.com**
2. Search for: **Static Web Apps**
3. Click on **agentcamp-lagos**
4. In the **Overview** section, you'll see:
   - **URL**: Click the link (looks like `https://agentcamp-lagos-...azurestaticapps.net`)

### **Option B: From GitHub Actions**

1. In GitHub Actions, click on your completed workflow
2. Look for the URL in the deployment logs

✅ **URL found!**

---

## Step 9: Visit Your Live Site! 🎉

1. Copy the URL from Step 8
2. Open it in a new browser tab
3. **Your AgentCamp Lagos site is LIVE!** 🚀

---

## Step 10: Set Up Custom Domain (Optional - 5 minutes)

If you want to use your own domain (e.g., `agentcamp.yourdomain.com`):

1. In Azure Portal, go to your Static Web App
2. Click **"Custom domains"** in the left menu
3. Click **"+ Add"**
4. Choose **"Custom domain on other DNS"**
5. Enter your domain name
6. Follow the instructions to add DNS records
7. Click **"Add"**

---

## 🎊 Success! Your Site is Live

**What Happens Now:**

- ✅ Every time you push code to GitHub (main branch)
- ✅ GitHub Actions automatically builds your app
- ✅ Deploys to Azure
- ✅ Your site updates automatically!

**No manual deployment needed ever again!** 🎉

---

## 📊 Monitor Your Site

### **View in Azure Portal:**

1. Go to: https://portal.azure.com
2. Search: **Static Web Apps**
3. Click: **agentcamp-lagos**
4. See: Traffic, errors, performance

### **View GitHub Deployments:**

1. Go to: https://github.com/Jummiet/agentcon-lagos/actions
2. See all deployment history

---

## ✅ Final Checklist

- [ ] Logged into Azure Portal
- [ ] Created resource group: agentcamp-lagos-rg
- [ ] Created Static Web App: agentcamp-lagos
- [ ] Copied deployment token
- [ ] Added GitHub secret
- [ ] Triggered deployment via GitHub
- [ ] Watched workflow complete successfully
- [ ] Got live URL
- [ ] Visited live site
- [ ] Site is working perfectly!

---

## 🔧 Troubleshooting

### "Name already taken" during creation
Change the name to: `agentcamp-lagos-yourname`

### Can't find deployment token
1. Go to Static Web App in Azure Portal
2. Left menu → "Manage deployment token"
3. Copy the token again

### GitHub Actions failing
- Check: Is the secret name exactly `AZURE_STATIC_WEB_APPS_API_TOKEN`?
- Check: Did you paste the complete token (no spaces)?
- Go to: https://github.com/Jummiet/agentcon-lagos/settings/secrets/actions
- Delete and re-add the secret

### Site shows error
- Wait 2-3 minutes after deployment completes
- Clear browser cache (Ctrl+F5)
- Check GitHub Actions for build errors

---

## 🎯 Your Site URLs

- **Live Site**: https://agentcamp-lagos-[random].azurestaticapps.net
- **GitHub Repo**: https://github.com/Jummiet/agentcon-lagos
- **GitHub Actions**: https://github.com/Jummiet/agentcon-lagos/actions
- **Azure Portal**: https://portal.azure.com

---

## 📞 Need Help?

Tell me:
1. Which step number you're on
2. What you see on your screen
3. Any error messages

I'll help you get it working! 🚀

---

**Ready to start? Begin with Step 1 above!**
