# Glamcart Backend API

**Status**: ✅ Production Deployed

## Overview
Express.js backend API for Glamcart beauty application with MongoDB integration, JWT authentication, and virtual try-on with professional pixel-based lip detection using Canvas.

## Key Features
- 🔐 JWT Authentication with bcryptjs
- 🛍️ Product Management (CRUD operations)
- 💄 Virtual Try-On with pixel-based face detection
- 🖼️ Image Processing with Sharp & Canvas
- 📦 MongoDB Atlas database integration
- ✨ Professional lip detection algorithm

## Deployment
- **Droplet**: DigitalOcean (159.89.170.225)
- **Domain**: https://glamcart-api.ddns.net
- **Port**: 5000 (via Nginx reverse proxy on 443/HTTPS)
- **Process Manager**: PM2 with auto-restart
- **CI/CD**: GitHub Actions with automatic deployment

## Technology Stack
- Node.js + Express.js (TypeScript)
- MongoDB + Mongoose
- Canvas 2.11.2 (native image manipulation)
- Sharp 0.32.6 (image processing)
- JWT + bcryptjs (security)

## Quick Start
```bash
npm install
npm run build
pm2 start dist/server.js --name "glamcart-api"
```