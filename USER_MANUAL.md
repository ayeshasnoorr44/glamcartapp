# 📖 GlamCart User Manual

## Welcome to GlamCart! 👋

GlamCart is a modern e-commerce platform for beauty and cosmetics products. This manual will guide you through every feature of the application.

**Table of Contents**
1. [Getting Started](#getting-started)
2. [Account Management](#account-management)
3. [Browsing Products](#browsing-products)
4. [Shopping Cart](#shopping-cart)
5. [Checkout & Payment](#checkout--payment)
6. [Virtual Try-On](#virtual-try-on)
7. [Order Management](#order-management)
8. [Admin Features](#admin-features)
9. [Troubleshooting](#troubleshooting)
10. [FAQ](#faq)

---

## 🚀 Getting Started

### What is GlamCart?
GlamCart is your one-stop shop for premium beauty products including:
- 💄 Lipsticks & Lip Products
- 💅 Nail Polish
- 🎨 Foundation & Concealer
- ✨ Eyeshadow & Eyeliner
- 🌹 Skincare Products
- 👁️ Mascara & Brows

### System Requirements
- **Browser:** Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Device:** Desktop, Tablet, or Mobile (iOS/Android)
- **Internet:** Minimum 2 Mbps
- **Camera:** For Virtual Try-On feature (optional)

### First Visit
1. Go to http://localhost:3000
2. Explore the homepage
3. Browse products without account (read-only)
4. Create account to unlock full features

---

## 👤 Account Management

### Creating an Account

**Step 1: Access Sign-Up**
- Click "Sign Up" button (top right corner)
- Or navigate to `/login` and click "Create Account"

**Step 2: Fill Sign-Up Form**
| Field | Requirements |
|-------|--------------|
| Email | Valid email format (example@domain.com) |
| Password | Min 8 characters, 1 uppercase, 1 number, 1 special character |
| Confirm Password | Must match password exactly |

**Step 3: Account Activation**
- Confirmation email sent to your inbox
- Click verification link
- Account activated automatically

**Password Requirements:**
❌ Bad: `password123`  
✅ Good: `SecurePass@123`

---

### Logging In

**Step 1: Click Login**
- Click "Login" button (top right)
- Or navigate to `/login`

**Step 2: Enter Credentials**
```
Email: your.email@example.com
Password: Your@Password123
```

**Step 3: Stay Logged In (Optional)**
- Check "Remember me" to stay logged in for 30 days
- Uncheck for session-based login

**Forgot Password?**
1. Click "Forgot Password?" link
2. Enter your email
3. Click verification link in email
4. Set new password
5. Login with new password

---

### Profile Management

#### Viewing Your Profile
1. Click user icon (top right)
2. Select "Profile"
3. View your information

#### Updating Profile
1. Go to Profile page
2. Click "Edit Profile" button
3. Update fields:
   - First Name
   - Last Name
   - Phone Number
   - Address
   - City, State, ZIP

4. Click "Save Changes"
5. Confirmation message appears

#### Changing Password
1. Go to Profile → Security
2. Click "Change Password"
3. Enter current password
4. Enter new password (follow requirements)
5. Confirm new password
6. Click "Update Password"

#### Privacy Settings
1. Go to Profile → Privacy
2. Toggle options:
   - ✓ Newsletter subscription
   - ✓ Order notifications
   - ✓ Product recommendations
   - ✓ Marketing emails

3. Click "Save Preferences"

---

## 🛍️ Browsing Products

### Homepage
- **Featured Products:** Best sellers and new arrivals
- **Categories:** Quick access to product types
- **Promotions:** Current discounts and sales
- **Reviews:** Customer testimonials

### Product Listing Page

#### Accessing Products
1. Click "Products" in navigation menu
2. Or click category from homepage

#### Viewing All Products
- Products display in grid format
- Each product shows:
  - Product image
  - Product name
  - Price
  - Star rating
  - Quick view button

#### Product Information
- **Image Gallery:** Hover or click to view different angles
- **Star Rating:** 1-5 stars based on customer reviews
- **Price:** Current price, original price if on sale
- **Availability:** "In Stock" or "Out of Stock" badge
- **SKU:** Product code for reference

---

### Search Functionality

#### Basic Search
1. Click search icon (top of page)
2. Type product name or keyword
3. Press Enter
4. Results appear instantly

**Search Tips:**
- ✅ Search by product name: "Red Lipstick"
- ✅ Search by brand: "MAC"
- ✅ Search by category: "Foundation"
- ✅ Search by color: "Pink", "Nude"

#### Advanced Filters

**Step 1: Click Filters**
- Click "Filters" button (left sidebar)

**Step 2: Select Filter Criteria**

| Filter | Options |
|--------|---------|
| **Price Range** | Drag slider or enter min/max |
| **Category** | Lipstick, Foundation, Eyeshadow, etc. |
| **Brand** | All available brands |
| **Rating** | 1-5 stars |
| **Availability** | In Stock, Pre-Order |
| **On Sale** | Yes/No |

**Step 3: Apply Filters**
- Click "Apply Filters"
- Results update automatically
- Active filters shown as tags at top

**Step 4: Clear Filters**
- Click "X" on filter tag
- Or click "Clear All Filters"

#### Sorting

**Available Sort Options:**
1. **Relevance** (default) - Best match to search
2. **Newest** - Recently added products
3. **Price: Low to High** - Cheapest first
4. **Price: High to Low** - Most expensive first
5. **Best Sellers** - Most popular
6. **Highest Rated** - Best customer reviews
7. **Most Reviews** - Most reviewed products

**How to Sort:**
1. Click "Sort By" dropdown (top right)
2. Select desired sort option
3. Products reorder instantly

---

### Viewing Product Details

#### Accessing Product Details
1. Click product card
2. Or click "Quick View" button
3. Product detail page opens

#### Product Detail Page Contains:

**Left Section - Images**
- Large product image
- Thumbnail gallery
- Zoom functionality
- 360° view (if available)

**Right Section - Information**
- Product name
- Brand name
- Star rating with review count
- Price (discounted if on sale)
- Product description
- Key ingredients (if applicable)

**Variants Section**
- Color options: Click color swatch
- Size options (if applicable)
- Quantity selector

**Action Buttons**
- ❤️ Add to Wishlist
- 🛒 Add to Cart
- 📸 Virtual Try-On (cosmetics only)

#### Product Reviews
- **View Reviews:** Scroll down to "Customer Reviews"
- **Filter Reviews:** By rating, newest, most helpful
- **Write Review:** Click "Write a Review" (must be logged in)
- **Leave Rating:** 1-5 stars
- **Upload Photo:** Include product photo with review

---

## 🛒 Shopping Cart

### Adding Items to Cart

#### Method 1: From Product Listing
1. Hover over product card
2. Click "Quick Add to Cart"
3. Enter quantity
4. Click "Add"

#### Method 2: From Product Details
1. Select desired variant (color, size)
2. Enter quantity using +/- buttons
3. Click "Add to Cart"
4. Confirmation message appears

#### Method 3: From Search Results
1. Find product in search results
2. Click "Add to Cart" button
3. Product added immediately

### Viewing Cart

#### Access Cart
- Click shopping bag icon (top right)
- Or navigate to `/cart`

#### Cart Contents Display
| Column | Shows |
|--------|-------|
| Product Image | Product thumbnail |
| Product Name | Product title and color/variant |
| Price | Unit price |
| Quantity | Editable quantity field |
| Total | Subtotal for item (price × qty) |
| Action | Edit or Remove button |

#### Cart Summary
- **Subtotal:** Sum of all products
- **Tax:** Calculated based on location
- **Shipping:** Free or flat rate
- **Total:** Final amount to pay

### Modifying Cart

#### Change Quantity
1. In cart, find product
2. Click quantity field
3. Enter new quantity or use +/- buttons
4. Press Enter
5. Cart updates automatically

#### Remove Item
1. Click "Remove" or trash icon
2. Confirmation dialog appears
3. Click "Remove" to confirm
4. Item removed from cart

#### Save for Later
1. Click heart icon on product
2. Product moved to Wishlist
3. Can be re-added to cart anytime

#### Apply Coupon Code
1. Scroll to "Order Summary"
2. Click "Apply Coupon Code"
3. Enter code: `SAVE10` (example)
4. Click "Apply"
5. Discount deducted from total

**Available Coupon Codes:**
- `WELCOME10` - 10% off first order
- `SAVE15` - 15% off orders over $50
- `NEWYEAR20` - 20% off in January
- `SUMMER25` - 25% off summer collection

---

## 🛍️ Checkout & Payment

### Starting Checkout

**Step 1: Review Cart**
- Verify all items correct
- Check quantities
- Confirm prices

**Step 2: Click "Checkout"**
- Large blue "Checkout" button
- Or click "Proceed to Checkout"

**Step 3: Enter Shipping Address**
- Select "Use account address" or enter new
- Address fields:
  - Street Address
  - Apartment/Suite (optional)
  - City
  - State/Province
  - ZIP/Postal Code
  - Country

- Click "Continue"

### Shipping Options

**Available Shipping Methods:**
| Method | Cost | Delivery Time |
|--------|------|---|
| Standard | Free | 5-7 business days |
| Express | $10 | 2-3 business days |
| Overnight | $25 | Next business day |
| In-Store Pickup | Free | Ready in 2 hours |

1. Select preferred shipping method
2. Click "Continue"

### Payment Information

#### Payment Methods Accepted
- ✅ Credit Card (Visa, Mastercard, American Express)
- ✅ Debit Card
- ✅ PayPal
- ✅ Apple Pay
- ✅ Google Pay
- ✅ Gift Card

#### Credit Card Payment
1. Select "Credit Card"
2. Fill in card details:
   - Card Number (no spaces)
   - Cardholder Name
   - Expiration Date (MM/YY)
   - CVV (3-digit code back)

3. Check "Save card for future purchases" (optional)
4. Click "Continue"

#### PayPal Payment
1. Select "PayPal"
2. Click "Pay with PayPal"
3. Login to PayPal
4. Confirm payment
5. Return to GlamCart

#### Apple Pay / Google Pay
1. Select "Digital Wallet"
2. Click "Apple Pay" or "Google Pay"
3. Authenticate on your device
4. Confirm payment amount
5. Order confirmed

### Order Review

**Before Finalizing:**
1. Verify order summary:
   - All items correct
   - Quantities accurate
   - Shipping address correct
   - Shipping method selected
   - Payment method confirmed

2. Review pricing:
   - Subtotal
   - Tax amount
   - Shipping cost
   - Discounts applied
   - Final total

3. Read Terms & Conditions
4. Check "I agree to terms"
5. Click "Place Order"

### Order Confirmation

**After Order Placed:**
- ✅ Confirmation page displays
- ✅ Order number shown (save this!)
- ✅ Confirmation email sent
- ✅ Tracking number provided

**Email Contains:**
- Order number
- Order details
- Tracking number
- Estimated delivery
- Return/exchange policy

---

## 📸 Virtual Try-On

### What is Virtual Try-On?
AI-powered feature that shows you how makeup looks before purchasing. Uses face recognition to apply products to your lips in real-time.

### System Requirements
- **Camera:** Laptop/mobile with webcam
- **Browser:** Chrome, Firefox, Safari, Edge
- **Permission:** Must allow camera access

### How to Use Virtual Try-On

**Step 1: Access Feature**
1. Go to any lipstick product page
2. Click "Try On" or "Virtual Try-On" button
3. Camera permission dialog appears

**Step 2: Grant Camera Permission**
1. Click "Allow" in permission dialog
2. Camera starts
3. Face detection begins

**Step 3: Apply Product**
- Product preview appears on your lips
- AI automatically detects and applies color
- Multiple color options available

**Step 4: Preview & Adjust**
- View product on your lips
- Rotate head to see from different angles
- Switch between colors
- Adjust preview brightness/contrast if needed

**Step 5: Save Screenshot**
1. Click "Capture" button
2. Screenshot taken
3. Click "Download" to save to device
4. Or "Share" to social media

### Tips for Best Results
✅ **Do's:**
- Use good lighting
- Face camera directly
- Keep lips visible and clear
- Clean camera lens
- Use makeup-free lips for best accuracy

❌ **Don'ts:**
- Wear heavy sunglasses
- Look away from camera
- Have obstructed face
- Use outdated camera
- Wear face filters

### Troubleshooting Virtual Try-On
| Issue | Solution |
|-------|----------|
| Camera not detected | Check browser permissions, restart browser |
| Face not recognized | Ensure face is visible, check lighting |
| Product not applying | Move closer to camera, improve lighting |
| Slow performance | Close other apps, clear cache |

---

## 📦 Order Management

### Viewing Orders

#### Access Order History
1. Click user icon (top right)
2. Select "Orders" or "My Purchases"
3. All your orders display

#### Order List Shows:
- Order number
- Order date
- Status (Pending, Processing, Shipped, Delivered)
- Items ordered
- Total amount
- Action buttons

### Order Details

**Click on Order:**
1. Full order information displays
2. Items with quantities and prices
3. Shipping address used
4. Delivery tracking
5. Payment method used
6. Order status timeline

### Tracking Orders

#### Track Shipment
1. Open order details
2. Click "Track Order"
3. Tracking page shows:
   - Current status
   - Location (if available)
   - Estimated delivery
   - Tracking history

#### Tracking Status Meanings
- 📋 **Order Confirmed** - Payment received
- 🔄 **Processing** - Preparing for shipment
- 📦 **Shipped** - Left warehouse
- 🚚 **In Transit** - On the way to you
- ✅ **Delivered** - Received at address
- 🏪 **Ready for Pickup** - Pick up in store

### Returns & Exchanges

#### Return Policy
- **Timeframe:** 30 days from delivery
- **Condition:** Must be unused, original packaging
- **Excluded:** Custom items, clearance products

#### Initiate Return
1. Go to order details
2. Click "Return Item"
3. Select items to return
4. Choose reason:
   - Wrong item received
   - Product defective
   - Changed mind
   - Product damaged in shipping

5. Provide photos if needed
6. Submit return request

#### Return Process
1. Return request approved/denied within 24 hours
2. Return shipping label emailed
3. Print label and attach to package
4. Drop off at shipping location
5. Refund processed after receiving returned item (5-7 business days)

#### Exchange Process
1. Select "Exchange" instead of "Return"
2. Choose replacement item
3. Shipping label for return provided
4. Replacement shipped once old item received
5. No additional shipping charges

### Reorder Previous Items

**Quick Reorder:**
1. Go to Orders
2. Find previous order
3. Click "Reorder" button
4. Items added to cart
5. Proceed to checkout

---

## 👑 Admin Features

*This section is for admin/manager accounts only*

### Admin Dashboard

#### Access Admin Panel
1. Log in with admin account
2. Click user icon
3. Select "Admin Dashboard"
4. Dashboard loads with overview

#### Dashboard Displays:
- **Metrics Cards:**
  - Total Sales ($)
  - Total Orders
  - Active Users
  - Average Order Value

- **Charts:**
  - Sales by Category (Pie chart)
  - Daily Revenue (Line chart)
  - Product Performance (Bar chart)
  - Customer Ratings (Distribution)

- **Recent Orders Table:**
  - Order ID
  - Customer Name
  - Order Date
  - Status
  - Total Amount
  - Action buttons

### Managing Products

#### View Products
1. Go to Admin → Products
2. All products display in table format
3. Sort by: Name, Price, Stock, Rating
4. Filter by: Category, Status, Stock level

#### Add New Product
1. Click "Add Product" button
2. Fill in fields:
   - Product Name
   - Brand
   - Category
   - Description
   - Price
   - Stock Quantity
   - Color options (with color picker)
   - Product images

3. Click "Create Product"
4. Product appears in inventory

#### Edit Product
1. Find product in list
2. Click "Edit" button (pencil icon)
3. Update fields as needed
4. Click "Save Changes"
5. Product updates instantly

#### Delete Product
1. Find product
2. Click "Delete" button (trash icon)
3. Confirmation dialog
4. Click "Delete" to confirm
5. Product removed from store

### Analytics & Reporting

#### View Analytics
1. Go to Admin → Analytics
2. Select date range
3. View metrics:
   - Visitor count
   - Page views
   - Bounce rate
   - Top pages
   - User flow heatmap

#### Export Data
1. Click "Export" button
2. Select format:
   - CSV (spreadsheet)
   - PDF (formatted report)

3. Click "Download"
4. File saves to device

#### Generate Reports
1. Go to Admin → Reports
2. Select report type:
   - Sales Report
   - Inventory Report
   - Customer Report
   - Product Performance

3. Select date range
4. Click "Generate"
5. View or export report

---

## ❓ Troubleshooting

### General Issues

#### Page Won't Load
**Problem:** Blank page or loading stuck
**Solutions:**
1. Refresh page (F5 or Ctrl+R)
2. Clear browser cache
3. Try different browser
4. Check internet connection
5. Disable browser extensions

#### Slow Performance
**Problem:** Pages loading slowly
**Solutions:**
1. Close other tabs/apps
2. Check internet speed
3. Clear browser cache
4. Try during off-peak hours
5. Update browser

#### Buttons Not Responding
**Problem:** Clicks not registering
**Solutions:**
1. Refresh page
2. Clear cookies
3. Restart browser
4. Try different browser
5. Check JavaScript enabled

---

### Account Issues

#### Can't Log In
**Problem:** Login fails
**Solutions:**
1. Check caps lock is off
2. Verify email address correct
3. Click "Forgot Password"
4. Check spam folder for reset email
5. Try incognito/private window

#### Forgot Password
**Steps:**
1. Click "Forgot Password?" on login
2. Enter email address
3. Check email (including spam)
4. Click reset link in email
5. Set new password
6. Log in with new password

#### Account Locked
**Problem:** Too many login attempts
**Solution:**
1. Wait 15 minutes
2. Try login again
3. Or reset password

---

### Shopping Issues

#### Can't Add to Cart
**Problem:** Add to cart button not working
**Solutions:**
1. Refresh product page
2. Try different browser
3. Clear browser cache
4. Disable ad blockers
5. Check if item in stock

#### Cart Total Wrong
**Problem:** Price doesn't match
**Solutions:**
1. Verify quantities correct
2. Check coupon applied correctly
3. Confirm tax calculation
4. Refresh cart page
5. Check for active promotions

#### Payment Failed
**Problem:** Payment declined
**Solutions:**
1. Check card details correct
2. Verify expiration date valid
3. Try different payment method
4. Check daily spending limit
5. Contact credit card company

#### Order Not Confirmed
**Problem:** Order stuck in processing
**Solutions:**
1. Refresh page
2. Check email for confirmation
3. Go to My Orders to check status
4. Wait 2-3 hours
5. Contact customer service

---

### Virtual Try-On Issues

#### Camera Not Working
**Solutions:**
1. Check camera permission allowed
2. Restart browser
3. Try different browser
4. Update camera drivers
5. Try different device

#### Face Not Detected
**Solutions:**
1. Improve lighting
2. Move closer to camera
3. Face camera directly
4. Remove sunglasses
5. Clear camera lens

---

## 📞 Getting Help

### Customer Service

#### Contact Options
- **Email:** support@glamcart.com
- **Phone:** 1-800-GLAM-CART (1-800-452-6227)
- **Live Chat:** Available 9 AM - 9 PM EST
- **Contact Form:** Submit at `/contact`

#### Response Times
- Live Chat: Immediate
- Email: Within 24 hours
- Phone: Mon-Fri 9 AM - 6 PM EST

### FAQ

#### Shipping

**Q: How long does shipping take?**
A: Standard (free) takes 5-7 business days. Express takes 2-3 days. Overnight available for $25.

**Q: Do you ship internationally?**
A: Currently shipping to USA, Canada, and Mexico. International coming soon.

**Q: Can I track my order?**
A: Yes! Go to My Orders and click "Track" on any shipped order.

**Q: Is shipping free?**
A: Standard shipping is free. Express and overnight have fees.

#### Returns

**Q: How do I return a product?**
A: Go to Orders → Select order → Click Return → Follow instructions.

**Q: What's the return window?**
A: 30 days from delivery date.

**Q: Will I get a refund?**
A: Yes! Refunds processed within 5-7 business days of return received.

**Q: Can I exchange instead of returning?**
A: Yes! Select "Exchange" and choose your replacement item.

#### Products

**Q: Are these products authentic?**
A: Yes! All products are 100% authentic, directly from manufacturers.

**Q: Are these cruelty-free?**
A: We carry many cruelty-free brands. Filter by "Cruelty-Free" option.

**Q: Do you have sales/discounts?**
A: Yes! Check homepage for current promotions. Subscribe to newsletter for exclusive deals.

**Q: Can I pre-order products?**
A: Yes! Some items available for pre-order. Shows "Pre-Order" badge.

#### Account

**Q: Can I change my email address?**
A: Yes, go to Profile → Settings → Change Email.

**Q: How do I delete my account?**
A: Contact support at support@glamcart.com with your account email.

**Q: Can I have multiple accounts?**
A: Only one account per email address. Contact support if you need help.

#### Orders

**Q: Can I cancel an order?**
A: If not yet shipped, yes. Go to Orders → Click "Cancel". Refund within 24 hours.

**Q: Can I change delivery address?**
A: Only if order not yet shipped. Go to Orders → Click "Edit Address".

**Q: Can I combine orders?**
A: No, but you can add to cart before checkout.

---

## 🎯 Tips & Tricks

### Save Money
1. Subscribe to newsletter for 10% off code
2. Check "Sale" section for discounts
3. Use coupon codes (WELCOME10, SAVE15)
4. Buy bundles for savings
5. Refer friends for credit

### Product Discovery
1. Check "New Arrivals" weekly
2. Read customer reviews before buying
3. Try virtual try-on before purchase
4. Add to wishlist for price alerts
5. Follow seasonal collections

### Account Tips
1. Save multiple addresses (home, office)
2. Save favorite payment methods
3. Set notification preferences
4. Join loyalty program (coming soon)
5. Download mobile app (coming soon)

---

## 📱 Mobile App (Coming Soon)

Download the GlamCart app for:
- ✅ Faster browsing
- ✅ One-click checkout
- ✅ Mobile exclusive deals
- ✅ AR virtual try-on
- ✅ Push notifications
- ✅ Offline product browsing

---

## 🎓 Tutorial Videos

Visit our video tutorials at `glamcart.com/learn`:
- Getting Started
- How to Use Virtual Try-On
- Creating an Account
- Placing Your First Order
- Returns & Exchanges
- Admin Dashboard

---

## ⭐ Thank You!

Thank you for choosing GlamCart! We're here to help you look and feel amazing.

**Questions? We're here to help!**
- Email: support@glamcart.com
- Phone: 1-800-452-6227
- Live Chat: glamcart.com/chat

**Happy Shopping! 💄✨**

