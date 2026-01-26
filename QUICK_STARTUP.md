# ⚡ BOOKSY - EXACT STARTUP COMMANDS

Copy-paste these commands exactly to start the application.

---

## 🟢 TERMINAL 1: Backend Setup & Start

```powershell
cd d:\web projects\Booksy-main\Booksy-main\backend
npm install
node scripts/init-all.js
npm start
```

**Wait for this message:**
```
✅ Connected to MongoDB
✅ Successfully added 8 sample books
✅ Created test users
Server is running on http://localhost:3000
```

---

## 🔵 TERMINAL 2: Frontend Setup & Start

```powershell
cd d:\web projects\Booksy-main\Booksy-main\frontend
npm install
npm run dev
```

**Wait for this message:**
```
VITE v... dev server running at:
  ➜ Local:   http://localhost:5173/
```

---

## 🌐 TERMINAL 3: Open Browser

```
http://localhost:5173
```

---

## 🔑 Login Credentials

```
Email:    testuser@example.com
Password: testPassword123
```

---

## ✅ What You Should See

### Homepage
- Booksy logo and "Discover Books" button
- Sign In / Sign Up tabs
- Statistics: "8 Books", "3 Readers", "0 Reviews"

### After Login
- Welcome message
- Avatar in top-right (first letter of username)
- "Discover" link in navbar
- Can search books
- Can mark books as read

### Discover Page
- Search bar works
- Books display in grid
- Can filter by genre
- "Buy Now" button (green)
- Can mark books as read

### My Books Page
- Shows books you marked
- Three tabs: "Reading", "Want to Read", "Read"
- Can remove books

### Profile Page
- Shows username and email
- "Edit" button to change profile
- Can update username and bio

---

## 🆘 Troubleshooting

### Problem: "Cannot find module"
```powershell
# In backend folder
npm install

# In frontend folder
npm install
```

### Problem: "Port 3000 already in use"
```powershell
netstat -ano | findstr :3000
taskkill /PID <XXXXX> /F
```

### Problem: "Port 5173 already in use"
```powershell
netstat -ano | findstr :5173
taskkill /PID <XXXXX> /F
```

### Problem: "sign in failed"
- ✅ Check Terminal 1 shows "Server is running"
- ✅ Check Terminal 1 shows books initialized
- ✅ Check MongoDB is running (mongod)

### Problem: "Loading books..." (stuck)
- ✅ Check Terminal 1 backend is running
- ✅ Check MongoDB is running
- ✅ Refresh browser (Ctrl+R)

### Problem: "Cannot GET /api/books"
- ✅ Backend not running
- ✅ MongoDB not running
- ✅ Check `backend/.env` has MONGODB_URI

---

## 📱 Feature Tests

After logging in, test these:

### 1. Search Books
- Go to Discover
- Type "gatsby" in search
- See results appear smoothly

### 2. Mark as Read
- Click any book
- Click "Mark as Read"
- See "Book added!" message
- Go to "My Books" → "Read"
- See book listed there

### 3. Buy Now
- Click any book
- Click green "Buy Now" button
- Book Depository opens in new tab
- Shows correct book

### 4. Profile Edit
- Click avatar (top-right)
- Click "My Profile"
- Click "Edit"
- Change username to "TestUser2024"
- Click "Save"
- See "Profile updated!" message

### 5. Sign Out
- Click avatar
- Click "Sign out"
- See login page again

---

## 📚 Full Feature List

✅ User Authentication (Sign Up / Sign In)
✅ Search Books with Debouncing
✅ Filter Books by Genre
✅ Sort Books by Title/Author/Rating
✅ Mark Books (Currently Reading / Want to Read / Read)
✅ User Profile Management
✅ Book Recommendations
✅ Responsive Design (Mobile/Tablet/Desktop)
✅ Toast Notifications
✅ Persistent Sessions

---

## 🎯 Quick Verification

After everything starts:

1. **Backend is running?**
   ```powershell
   curl http://localhost:3000/api/books
   ```
   Should return: `[{"_id":"...","title":"The Great Gatsby"...}]`

2. **Frontend is running?**
   ```
   Open http://localhost:5173
   ```
   Should show: Booksy homepage

3. **Can login?**
   ```
   Email: testuser@example.com
   Password: testPassword123
   ```
   Should see: Avatar in navbar

---

## 🚀 Success Indicators

- [ ] Both terminals show "running" messages
- [ ] Browser shows homepage without errors
- [ ] Login works with test credentials
- [ ] Avatar appears in navbar after login
- [ ] Search works in Discover
- [ ] Can mark books as read
- [ ] Books appear in My Books

If all ✅, you're ready to use the application!

---

## 💡 Tips

- Keep both terminals open while using the app
- Check Terminal 1 for any error messages
- Browser DevTools (F12) helps debug frontend issues
- MongoDB must be running (either `mongod` or Atlas configured)
- If something breaks, restart both servers

---

**Everything is now configured and ready to go!** 🎉
