# 🚀 BOOKSY APPLICATION - COMPLETE STARTUP GUIDE

## ⚠️ CRITICAL: YOU MUST START BOTH BACKEND AND FRONTEND

This application requires **BOTH** the backend server and frontend dev server to run.

---

## 🎯 Quick Start (Windows PowerShell)

### Step 1: Open Two Terminal Windows

**Terminal 1 (Backend):**
```powershell
cd backend
npm install
node scripts/init-all.js
npm start
```

**Expected Output:**
```
✅ Connected to MongoDB: mongodb://localhost:27017/booksy
✅ Successfully added 8 sample books
✅ Created test user: testuser@example.com
✅ Created test user: demo@booksy.com
✅ Created test user: admin@booksy.com
Server is running on http://localhost:3000
```

### Step 2: Open Second Terminal Window

**Terminal 2 (Frontend):**
```powershell
cd frontend
npm install
npm run dev
```

**Expected Output:**
```
VITE v... dev server running at:
➜ Local:   http://localhost:5173/
```

### Step 3: Open Browser

```
http://localhost:5173
```

---

## ✅ Verify Everything is Working

### Backend Check
- Open: http://localhost:3000/api/books
- **Should see:** JSON array of books

### Frontend Check
- Open: http://localhost:5173
- **Should see:** Booksy home page

### Try Logging In
- Email: `testuser@example.com`
- Password: `testPassword123`

---

## 🆘 Troubleshooting

### Issue: "Sign in failed, failed to fetch"

**Cause:** Backend server is not running

**Fix:**
```powershell
# Terminal 1
cd backend
npm start
```

### Issue: "Loading books... failed to fetch"

**Cause:** Backend server crashed or stopped

**Fix:**
1. Check Terminal 1 for error messages
2. Restart backend:
```powershell
cd backend
npm start
```

### Issue: "Cannot GET /api/books"

**Cause:** Backend port is wrong or MongoDB not running

**Fix:**
1. Check if MongoDB is running (Windows Services)
2. Or start MongoDB locally:
```powershell
mongod
```
3. Or update `backend/.env` to use MongoDB Atlas

### Issue: "Cannot find module"

**Fix:**
```powershell
cd backend
npm install

cd ../frontend
npm install
```

### Issue: "Port already in use"

**Backend (port 3000):**
```powershell
# Kill process on port 3000
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

**Frontend (port 5173):**
```powershell
# Kill process on port 5173
netstat -ano | findstr :5173
taskkill /PID <PID> /F
```

---

## 📝 Configuration Files

### Backend `.env` File
Located: `backend/.env`

```
MONGODB_URI=mongodb://localhost:27017/booksy
JWT_SECRET=your-super-secret-jwt-key-change-in-production
PORT=3000
NODE_ENV=development
```

### Frontend Vite Config
Located: `frontend/vite.config.js`

- Dev server port: **5173**
- API URL: **http://localhost:3000/api**

---

## 🔑 Test Credentials

After running `node scripts/init-all.js`, use these accounts:

**Account 1 (Basic User)**
```
Email: testuser@example.com
Password: testPassword123
```

**Account 2 (Demo User)**
```
Email: demo@booksy.com
Password: demo123456
```

**Account 3 (Admin User)**
```
Email: admin@booksy.com
Password: admin123456
```

---

## 📊 Application Architecture

```
Frontend (React + Vite)
    ↓ HTTP Requests
Backend (Node.js + Express)
    ↓ Database Operations
MongoDB (Local or Atlas)
```

**All requests go through:**
```
Frontend (http://localhost:5173)
  → Backend API (http://localhost:3000/api)
  → MongoDB (mongodb://localhost:27017/booksy)
```

---

## 🎮 Features to Test

After login:

1. **Search Books**
   - Go to "Discover"
   - Type in search bar
   - See books filter in real-time

2. **Mark Books**
   - Click any book
   - "Mark as Read" / "Want to Read"
   - See it appear in "My Books"

3. **View Profile**
   - Click avatar (top-right)
   - Select "My Profile"
   - Edit username and bio

4. **Buy Books**
   - Click "Buy Now" on any book
   - Opens Book Depository in new tab

---

## 🛠️ Development

### Frontend - Common Commands
```powershell
npm run dev          # Start dev server
npm run build        # Build for production
npm run lint         # Check code
npm run preview      # Preview build
```

### Backend - Common Commands
```powershell
npm install          # Install dependencies
npm start            # Start server
node scripts/init-all.js  # Initialize database
npm run lint         # Check code
```

---

## 📱 Ports Reference

| Service | Port | URL |
|---------|------|-----|
| Frontend (Vite) | 5173 | http://localhost:5173 |
| Backend (Express) | 3000 | http://localhost:3000 |
| MongoDB (Local) | 27017 | mongodb://localhost:27017 |
| MongoDB Atlas | - | mongodb+srv://... |

---

## ❓ FAQs

**Q: Do I need MongoDB installed?**
A: Yes, locally OR use MongoDB Atlas (cloud version)

**Q: Can I change the ports?**
A: Backend: Set PORT in `.env`
   Frontend: Change `vite.config.js` server.port

**Q: Can I deploy this?**
A: Yes! See deployment guides for Vercel (frontend) and Railway/Heroku (backend)

**Q: What if I get CORS errors?**
A: Backend has CORS enabled. If issues persist, check:
   - Both servers are running
   - Ports are correct
   - No firewall blocking

---

**Status:** ✅ Ready to Start
**Last Updated:** January 26, 2026
