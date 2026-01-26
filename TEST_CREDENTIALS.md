# Test Credentials for Booksy

Use these test credentials to access the Booksy application without creating a new account:

## Test User Accounts

### Account 1 (Full Access)
- **Email:** testuser@example.com
- **Password:** testPassword123

### Account 2 (Testing Multiple Users)
- **Email:** demo@booksy.com
- **Password:** demo123456

### Account 3 (Admin User)
- **Email:** admin@booksy.com
- **Password:** admin123456

## How to Use

1. Navigate to the Sign In page by clicking "Sign In" in the navbar
2. Enter any of the email and password combinations above
3. Click "Sign In"
4. You will be logged in and can explore:
   - **Discover:** Browse and search for books
   - **My Books:** Manage your reading list
   - **Lists:** Create and manage book lists
   - **Community:** Connect with other readers
   - **Profile:** View and edit your profile

## Testing Features

### Search & Filters
- Use the search bar in the Discover page to find books
- Filter by genre and sort by title, author, or rating
- Search is debounced for better performance

### Book Interactions
- Click "Buy Now" to find the best price for any book
- Click "Want to Read" to add books to your want-to-read list
- Click "Mark as Read" to mark books as read
- Click "Write Review" to add your rating and review

### Profile Management
- Click on the profile avatar in the navbar (top right)
- Select "My Profile" to view and edit your profile
- Update your username and bio
- View your reading statistics

## Notes

- These test accounts are created automatically when the application starts
- All data is stored locally in MongoDB
- Test accounts can be deleted and recreated by running the initialization script
- For production, use secure authentication methods

---

**Last Updated:** January 26, 2026
