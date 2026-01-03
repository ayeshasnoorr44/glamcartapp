# MongoDB Atlas + DigitalOcean Deployment Setup

## ✅ What's Already Configured

Your backend code is **ready** to connect to MongoDB:
- `src/config/database.ts` uses `process.env.MONGODB_URI`
- `src/server.ts` calls `connectDB()` on startup
- GitHub workflow passes the secret to your Docker container

## 🔧 3 Required Steps to Go Live

### Step 1: Add MONGODB_URI to Backend GitHub Secrets

**Location**: https://github.com/ayeshasnoorr44/glamcart-backend/settings/secrets/actions

1. Click "New repository secret"
2. **Name**: `MONGODB_URI`
3. **Value**: `mongodb+srv://glamuser:glamuser@glamcartdb.ctqpibd.mongodb.net/glamcart?appName=GlamCartDB`
4. Click "Add secret"

✅ The GitHub workflow will automatically pass this to your Droplet when deploying.

---

### Step 2: Set Frontend Backend URL in DigitalOcean

**Location**: DigitalOcean Dashboard → glamcart-frontend App → Settings → Environment Variables

1. Add/Update this environment variable:
   - **Key**: `NEXT_PUBLIC_API_URL`
   - **Value**: `http://YOUR_DROPLET_IP:5000`
   
   (Replace `YOUR_DROPLET_IP` with your actual Droplet IP, e.g., `159.89.170.225`)

2. Save and redeploy the app

✅ Now your frontend knows where to find the backend.

---

### Step 3: Test Locally (Optional but Recommended)

**For testing on your laptop before pushing to production:**

The backend `.env` file is already configured:
```
MONGODB_URI=mongodb+srv://glamuser:glamuser@glamcartdb.ctqpibd.mongodb.net/glamcart?appName=GlamCartDB
```

To run locally:
```bash
cd backend
npm install
npm run build
npm run start
```

The frontend `.env.local` is configured to use `http://localhost:5000`:
```bash
cd frontend
npm install
npm run dev
```

---

## 🚀 Deployment Flow

```
1. You push code to GitHub → 
2. GitHub Actions builds Docker image → 
3. Pushes to Docker Hub → 
4. SSH connects to your Droplet → 
5. Pulls latest Docker image → 
6. Runs container with MONGODB_URI secret → 
7. Backend connects to MongoDB Atlas → 
8. Frontend fetches products from http://YOUR_DROPLET_IP:5000/api/products
```

---

## ⚠️ Important Security Notes

**NEVER paste credentials in code!**
- ✅ Use GitHub Secrets for sensitive data
- ✅ Use `.env` files locally (never commit them)
- ✅ `.gitignore` already protects your `.env` files

**Your current `.env` files are safe:**
- `backend/.env` - in gitignore ✅
- `frontend/.env.local` - in gitignore ✅

---

## 🔍 Troubleshooting

### "Cannot connect to MongoDB"
- ✅ Verify MONGODB_URI is added to GitHub Secrets
- ✅ Check MongoDB Atlas Network Access allows your Droplet IP
- ✅ View Droplet logs: `docker logs glamcart-backend`

### "Products page shows empty"
- ✅ Verify `NEXT_PUBLIC_API_URL` is set in DigitalOcean
- ✅ Check frontend can reach backend: `curl http://YOUR_DROPLET_IP:5000/health`

### "Build fails on DigitalOcean"
- ✅ Check GitHub Actions logs first
- ✅ Ensure lockfile is committed: `git log --oneline package-lock.json`

---

## 📝 Checklist for Production

- [ ] MONGODB_URI added to backend GitHub Secrets
- [ ] NEXT_PUBLIC_API_URL set in DigitalOcean frontend app
- [ ] Verified `.env` files are in `.gitignore`
- [ ] Tested locally with `npm run dev`
- [ ] Pushed latest code to GitHub
- [ ] Backend Docker image built and pushed
- [ ] Frontend redeployed on DigitalOcean
- [ ] Products page loads successfully
- [ ] Try-on feature works
- [ ] Cart functionality works

