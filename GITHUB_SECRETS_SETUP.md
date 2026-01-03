# GitHub Secrets Configuration Checklist

## Backend Repository Secrets
**Location**: https://github.com/ayeshasnoorr44/glamcart-backend/settings/secrets/actions

Add these secrets (click "New repository secret" for each):

### 1. MONGODB_URI
- **Description**: MongoDB Atlas connection string
- **Value**: `mongodb+srv://glamuser:glamuser@glamcartdb.ctqpibd.mongodb.net/glamcart?appName=GlamCartDB`
- **Used by**: Backend server to connect to MongoDB
- **Critical**: ⚠️ YES - Without this, backend cannot fetch products

### 2. DOCKERHUB_USERNAME
- **Description**: Your Docker Hub account username
- **Value**: `ayeshanoorr44`
- **Used by**: GitHub Actions to build and push Docker images
- **Critical**: ⚠️ YES - Without this, Docker image won't build

### 3. DOCKERHUB_TOKEN
- **Description**: Docker Hub Personal Access Token
- **How to get**:
  1. Go to https://hub.docker.com/settings/security
  2. Click "New Access Token"
  3. Name it "GitHub Actions Backend"
  4. Copy the token immediately
- **Value**: Your token (will look like `dckr_pat_...`)
- **Used by**: GitHub Actions to push Docker image to Docker Hub
- **Critical**: ⚠️ YES - Without this, cannot push image
- **Note**: Use a NEW token, not the exposed one from earlier!

### 4. DROPLET_HOST
- **Description**: Your DigitalOcean Droplet public IP address
- **Value**: `159.89.170.225`
- **Used by**: GitHub Actions to SSH into your server
- **Critical**: ⚠️ YES - Without this, cannot deploy to server

### 5. DROPLET_USER
- **Description**: SSH username for your Droplet
- **Value**: `root` (or your custom SSH user)
- **Used by**: GitHub Actions for SSH authentication
- **Critical**: ⚠️ YES - Without this, SSH connection fails

### 6. DROPLET_SSH_KEY
- **Description**: Your private SSH key for authentication
- **How to get**:
  1. On your laptop: `cat ~/.ssh/id_rsa` (copy entire output)
  2. Should start with: `-----BEGIN OPENSSH PRIVATE KEY-----`
  3. Should end with: `-----END OPENSSH PRIVATE KEY-----`
- **Value**: Your full private key
- **Used by**: GitHub Actions to authenticate via SSH
- **Critical**: ⚠️ YES - Without this, cannot SSH to Droplet
- **Security**: Never share this key! Keep it private!

---

## Frontend Repository Secrets
**Location**: https://github.com/ayeshasnoorr44/glamcart-frontend/settings/secrets/actions

### 1. DIGITALOCEAN_ACCESS_TOKEN
- **Description**: DigitalOcean API token for App Platform
- **How to get**:
  1. Go to https://cloud.digitalocean.com/account/api/tokens
  2. Click "Generate New Token"
  3. Name it "GitHub Actions Frontend"
  4. Select "Read and Write" scope
  5. Copy the token
- **Value**: Your DO API token (will look like `dop_v1_...`)
- **Used by**: GitHub Actions to deploy to DigitalOcean App Platform
- **Critical**: ⚠️ YES - Without this, frontend won't deploy automatically

---

## How the Secrets Work

### Backend Deployment Flow
```
1. You push code to GitHub
   ↓
2. GitHub Actions runs backend-deploy.yml
   ↓
3. Uses DOCKERHUB_USERNAME + DOCKERHUB_TOKEN
   → Builds Docker image
   → Pushes to Docker Hub
   ↓
4. Uses DROPLET_HOST + DROPLET_USER + DROPLET_SSH_KEY
   → SSH into your Droplet
   → Pulls latest Docker image
   ↓
5. Starts container with -e MONGODB_URI (from secret)
   → Backend connects to MongoDB Atlas
   ↓
6. Backend listens on port 5000
   → Ready to serve API requests
```

### Frontend Deployment Flow
```
1. You push code to GitHub
   ↓
2. GitHub Actions runs frontend-deploy.yml
   ↓
3. Builds Next.js app (wrapped in Suspense ✅)
   ↓
4. Uses DIGITALOCEAN_ACCESS_TOKEN
   → Deploys to DigitalOcean App Platform
   ↓
5. Frontend reads NEXT_PUBLIC_API_URL env var
   → Points to http://159.89.170.225:5000
   ↓
6. Frontend live on glamcart-frontend.ondigitalocean.app
```

---

## Quick Setup Script

Run this to verify all secrets are added:

**For Backend Repo**:
```bash
# Check if secrets exist (these will show on GitHub)
cd ~/glamcart-backend
# Go to: Settings > Secrets and variables > Actions
# Verify you see:
# ✅ MONGODB_URI
# ✅ DOCKERHUB_USERNAME
# ✅ DOCKERHUB_TOKEN
# ✅ DROPLET_HOST
# ✅ DROPLET_USER
# ✅ DROPLET_SSH_KEY
```

**For Frontend Repo**:
```bash
# Check if secrets exist
cd ~/glamcart-frontend
# Go to: Settings > Secrets and variables > Actions
# Verify you see:
# ✅ DIGITALOCEAN_ACCESS_TOKEN
```

---

## Verification Checklist

Before pushing code, make sure:

- [ ] Backend Repo has 6 secrets ✅
- [ ] Frontend Repo has 1 secret ✅
- [ ] Frontend products page has `<Suspense>` wrapper ✅
- [ ] Backend listens on `process.env.PORT || 5000` ✅
- [ ] Docker image passes build test locally (optional)
- [ ] All `.env` files are in `.gitignore` ✅

---

## What Happens When You Push

**Backend Push**:
1. GitHub Actions builds Docker image
2. Pushes to Docker Hub (ayeshanoorr44/glamcart-backend:latest)
3. SSH connects to Droplet
4. Pulls new image and restarts container
5. Backend is live in ~3 minutes

**Frontend Push**:
1. GitHub Actions builds Next.js app
2. Runs linter and typecheck
3. Deploys to DigitalOcean App Platform
4. App is live in ~2-4 minutes

---

## Troubleshooting Secrets

**"I get error: auth required"**
- Check DOCKERHUB_TOKEN is a Personal Access Token (not password)
- Check DOCKERHUB_USERNAME is correct

**"SSH connection failed"**
- Check DROPLET_HOST is correct IP
- Check DROPLET_USER is `root` (or correct user)
- Check DROPLET_SSH_KEY starts with `-----BEGIN OPENSSH PRIVATE KEY-----`

**"DigitalOcean deployment failed"**
- Check DIGITALOCEAN_ACCESS_TOKEN exists
- Check it has "Read and Write" permissions
- Check app name matches (glamcart-frontend)

---

## After Adding Secrets

1. ✅ Add all secrets to GitHub
2. ✅ Make a small code change (or just commit existing code)
3. ✅ Push to main branch
4. ✅ Watch Actions tab for both repos
5. ✅ Check backend Docker Hub for new image
6. ✅ Check frontend deployment status
7. ✅ Test your app!

