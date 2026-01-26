# 🔍 DIAGNOSTIC & SETUP VERIFICATION SCRIPT

**Run this script to verify your Booksy setup before starting the application.**

## Windows PowerShell - Run These Commands:

### 1. Check Node.js is Installed
```powershell
node --version
npm --version
```

**Expected Output:**
```
v18.0.0 (or higher)
9.0.0 (or higher)
```

### 2. Check MongoDB is Installed
```powershell
mongod --version
```

**Expected Output:**
```
db version v5.0.0 (or higher)
```

**If not installed, get it here:** https://www.mongodb.com/try/download/community

### 3. Check Backend Dependencies
```powershell
cd backend
npm list | findstr "express cors mongoose"
```

**Expected Output:**
```
├── express@... 
├── cors@...
└── mongoose@...
```

### 4. Check Frontend Dependencies
```powershell
cd ../frontend
npm list | findstr "react vite"
```

**Expected Output:**
```
├── react@...
└── vite@...
```

### 5. Verify MongoDB is Running
```powershell
# Open a new PowerShell window and run:
mongod
```

**Expected Output:**
```
[initandlisten] waiting for connections on port 27017
```

### 6. Initialize Database with Test Data
```powershell
cd backend
node scripts/init-all.js
```

**Expected Output:**
```
✅ Connected to MongoDB
✅ Successfully added 8 sample books
✅ Created test user: testuser@example.com
✅ Created test user: demo@booksy.com
✅ Created test user: admin@booksy.com
Database initialized successfully!
```

### 7. Start Backend Server
```powershell
cd backend
npm start
```

**Expected Output:**
```
✅ Connected to MongoDB: mongodb://localhost:27017/booksy
📚 Database has 8 books.
Server is running on http://localhost:3000
```

### 8. In New Terminal - Start Frontend
```powershell
cd frontend
npm run dev
```

**Expected Output:**
```
VITE v... dev server running at:
  ➜ Local:   http://localhost:5173/
  ➜ Press q to quit
```

### 9. Verify Backend API is Working
```powershell
# Open browser or curl:
curl http://localhost:3000/api/books
```

**Expected Output:** JSON array of books

### 10. Verify Frontend is Loading
```
Open: http://localhost:5173
Expected: Booksy homepage loads
```

---

## ✅ Final Checklist

- [ ] Node.js v18+ installed
- [ ] npm installed
- [ ] MongoDB installed locally OR MongoDB Atlas configured
- [ ] Backend dependencies installed (`npm install` in /backend)
- [ ] Frontend dependencies installed (`npm install` in /frontend)
- [ ] `.env` file created in `/backend`
- [ ] MongoDB running (`mongod` command)
- [ ] Database initialized (`node scripts/init-all.js`)
- [ ] Backend started on port 3000
- [ ] Frontend started on port 5173
- [ ] Can access http://localhost:5173
- [ ] Test login works with credentials

---

## 🆘 Quick Troubleshooting

### "MongoDB connection error"
```powershell
# Check if MongoDB is running
mongod
```

### "Cannot find module"
```powershell
cd backend
npm install

cd ../frontend
npm install
```

### "Port 3000/5173 already in use"
```powershell
# Find and kill process
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### "API request failed"
1. Check backend is running on port 3000
2. Check MongoDB is running
3. Check `.env` file has `MONGODB_URI` and `JWT_SECRET`

---

**All checks passing? You're ready to go! 🚀**
