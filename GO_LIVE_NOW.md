# 🚀 FINAL 3-STEP GO-LIVE GUIDE

## YOUR TASK RIGHT NOW

You have 3 quick secrets to add. Once done, your app goes live.

---

## Step 1️⃣: Backend MongoDB Secret (GitHub)

**Go here**: https://github.com/ayeshasnoorr44/glamcart-backend/settings/secrets/actions

Click **New repository secret**

```
Name: MONGODB_URI
Value: mongodb+srv://glamuser:glamuser@glamcartdb.ctqpibd.mongodb.net/glamcart?appName=GlamCartDB
```

Click **Add secret** ✅

**⏱️ 30 seconds**

---

## Step 2️⃣: Frontend API URL (DigitalOcean)

**Go here**: DigitalOcean Dashboard → glamcart-frontend app → Settings → Environment Variables

Add this:
```
Key: NEXT_PUBLIC_API_URL
Value: http://159.89.170.225:5000
```

Click **Save** ✅

*(replace 159.89.170.225 with your droplet IP if different)*

**⏱️ 1 minute** (app will auto-redeploy)

---

## Step 3️⃣: Verify Both Are Deployed

**Check backend**: https://github.com/ayeshasnoorr44/glamcart-backend/actions

- Should say ✅ "All checks passed"
- Docker image pushed to Hub
- Deployed to Droplet

**Check frontend**: DigitalOcean → glamcart-frontend → Deployments

- Should say ✅ "Active" (green)

**Test it**: 
- Open https://glamcart-frontend.ondigitalocean.app
- Click **Products**
- See products from MongoDB? ✅ You're done!

**⏱️ 3-5 minutes** (wait for deployments to complete)

---

## 🎉 THAT'S IT!

Your app is now:
- ✅ Frontend live on DigitalOcean
- ✅ Backend running on your Droplet
- ✅ Connected to MongoDB Atlas

Users can:
- Browse products from your MongoDB database
- Try on lipstick colors with the AR preview
- Add items to cart
- Checkout

---

## If Something Breaks

1. **Products page is blank?**
   - Check browser console (F12 → Console)
   - Verify NEXT_PUBLIC_API_URL is correct
   - Test: curl http://159.89.170.225:5000/api/products

2. **Backend won't start?**
   - SSH to droplet: `ssh root@159.89.170.225`
   - Check logs: `docker logs glamcart-backend`
   - Verify MONGODB_URI was added to GitHub Secrets

3. **Frontend says "Cannot reach API"?**
   - Verify NEXT_PUBLIC_API_URL in DigitalOcean settings (no trailing slash!)
   - Wait for frontend redeploy (check Deployments tab)

---

## Questions?

Check these files in your repo:
- [MONGODB_DEPLOYMENT_GUIDE.md](MONGODB_DEPLOYMENT_GUIDE.md) - Detailed setup
- [FINAL_SETUP_CHECKLIST.md](FINAL_SETUP_CHECKLIST.md) - Full checklist + troubleshooting

**You've done the hard part - infrastructure is ready!** 🎊

