# Production Readiness Checklist

## ✅ Code Quality

### Frontend
- [x] Products page wrapped in `<Suspense>` (fixes Next.js 15 build)
- [x] Uses `NEXT_PUBLIC_API_URL` for backend communication
- [x] `.env.local` configured for local development
- [x] `.gitignore` protects sensitive files
- [x] GitHub Actions workflow configured (frontend-deploy.yml)

### Backend
- [x] Uses `process.env.PORT` with fallback to 5000
- [x] Uses `process.env.MONGODB_URI` for database
- [x] MongoDB connection configured in `/config/database.ts`
- [x] CORS configured with `process.env.CORS_ORIGIN`
- [x] `.env` file in `.gitignore`
- [x] GitHub Actions workflow configured (backend-deploy.yml)
- [x] Dockerfile builds and runs correctly

### Security
- [x] No hardcoded credentials in code
- [x] Credentials stored in GitHub Secrets only
- [x] `.env` files protected by `.gitignore`
- [x] Private SSH key never exposed
- [x] MongoDB password not visible in code

## 📋 Next Steps (In Order)

### 1. Add MONGODB_URI Secret to Backend GitHub Repository
**URL**: https://github.com/ayeshasnoorr44/glamcart-backend/settings/secrets/actions

```
Name: MONGODB_URI
Value: mongodb+srv://glamuser:glamuser@glamcartdb.ctqpibd.mongodb.net/glamcart?appName=GlamCartDB
```

**⏱️ Time**: 1 minute

---

### 2. Set NEXT_PUBLIC_API_URL in DigitalOcean Frontend App
**URL**: DigitalOcean Dashboard → glamcart-frontend → Settings → Environment Variables

```
Key: NEXT_PUBLIC_API_URL
Value: http://159.89.170.225:5000
```
*(Replace 159.89.170.225 with your actual Droplet IP)*

**⏱️ Time**: 1 minute

**After saving**: DigitalOcean will auto-redeploy the frontend

---

### 3. Verify Backend Deployment
After Step 2, the backend workflow will trigger automatically:

1. Go to: https://github.com/ayeshasnoorr44/glamcart-backend/actions
2. Watch the workflow complete
3. Confirm the Docker container started on your Droplet

**To check on Droplet**:
```bash
ssh root@159.89.170.225
docker ps                    # Check if glamcart-backend is running
docker logs glamcart-backend # View server logs
```

**⏱️ Time**: 3-5 minutes

---

### 4. Test Frontend → Backend Connection
Once both are deployed:

1. Open your frontend: `https://glamcart-frontend.ondigitalocean.app`
2. Go to **Products** page
3. You should see products fetched from MongoDB Atlas

**If no products appear**:
- Check browser console for errors (F12 → Console)
- Verify `NEXT_PUBLIC_API_URL` is set correctly
- Test backend health: `curl http://159.89.170.225:5000/health`

**⏱️ Time**: 2-3 minutes

---

## 🔐 Security Review

✅ **Secrets Management**:
- MongoDB URI: Stored in GitHub Secrets (not in code)
- Passed to Docker via environment variable
- Never exposed to frontend or browser

✅ **Environment Files**:
- `.env` files in `.gitignore` (local only)
- Public API URL safe in `NEXT_PUBLIC_API_URL` (no credentials)

---

## 📊 Current Architecture

```
┌─────────────────────┐
│   Your Browser      │
└──────────┬──────────┘
           │
           │ HTTPS
           ▼
┌─────────────────────────────────────────────┐
│  DigitalOcean App Platform                  │
│  glamcart-frontend (Next.js on port 3000)   │
│                                             │
│  Uses: NEXT_PUBLIC_API_URL env var          │
│  Points to: http://159.89.170.225:5000      │
└──────────┬──────────────────────────────────┘
           │
           │ HTTP (internal)
           ▼
┌──────────────────────────────────────────────┐
│  DigitalOcean Droplet (159.89.170.225)       │
│  glamcart-backend (Express on port 5000)     │
│                                              │
│  Uses: MONGODB_URI from GitHub Secret        │
│  Points to: MongoDB Atlas (glamcartdb)       │
└──────────┬──────────────────────────────────┘
           │
           │ HTTPS (SSL)
           ▼
┌──────────────────────────────────────────────┐
│  MongoDB Atlas Cloud                         │
│  Database: glamcart                          │
│  Collections: products, users, etc.          │
└──────────────────────────────────────────────┘
```

---

## 💡 Quick Reference

| Component | Environment | URL | Configured By |
|-----------|-------------|-----|----------------|
| Frontend | DigitalOcean App | https://glamcart-frontend.ondigitalocean.app | DigitalOcean Console |
| Backend | DigitalOcean Droplet | http://159.89.170.225:5000 | Docker container |
| Database | MongoDB Atlas Cloud | mongodb+srv://... | GitHub Secret |

---

## ⚡ Troubleshooting Commands

**Check if backend is running on Droplet**:
```bash
ssh root@159.89.170.225
docker ps
```

**View backend logs**:
```bash
docker logs -f glamcart-backend
```

**Test MongoDB connection from Droplet**:
```bash
docker exec glamcart-backend npm run test  # if you have a test script
```

**Test from your laptop**:
```bash
curl http://159.89.170.225:5000/health
curl http://159.89.170.225:5000/api/products
```

---

## 📞 When Everything Works

- ✅ Frontend loads at https://glamcart-frontend.ondigitalocean.app
- ✅ Products page shows items from MongoDB
- ✅ Try-on page works
- ✅ Cart functionality works
- ✅ No "Cannot reach backend" errors

**You're ready for launch!** 🚀

