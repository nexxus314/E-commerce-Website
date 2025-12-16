# 🛒 E-Commerce Web Application

A modern, responsive **e-commerce web application** built using **React**, **TypeScript**, and **Tailwind CSS**.  
The project focuses on **clean UI**, **scalable state management**, and **real-world e-commerce features** such as cart handling, product browsing, and checkout calculations.

---

## 📸 Screenshots

<!-- Descending / reversed order -->

<img width="783" height="484" alt="Cart Page" src="https://github.com/user-attachments/assets/c903510a-96e0-4ce4-8c3c-0e6bf1a5d6d6" />

<img width="1591" height="604" alt="Order Summary" src="https://github.com/user-attachments/assets/ecd94de1-eeca-47e8-be79-a9439a94a76f" />

<img width="1635" height="504" alt="Product Details Page" src="https://github.com/user-attachments/assets/e24fa1d3-80b8-4134-9a76-0a3d55c2f8f8" />

<img width="1647" height="933" alt="Product Listing Page" src="https://github.com/user-attachments/assets/061df08b-bd6b-4865-8f7c-71a66be4040b" />

<img width="1619" height="955" alt="Landing Page" src="https://github.com/user-attachments/assets/fc9e8fa2-ccd1-491d-bed7-0412e5f1e940" />

---

## ✨ Features

### 🛍 Product Browsing
- Fetches product data from an external API  
- Displays products in **responsive card layouts**  
- Dedicated product details page with:
  - Images
  - Ratings
  - Tags
  - Descriptions

---

### 🛒 Cart System
- Add products to cart with **dynamic quantity selection**
- Increase, decrease, and remove cart items
- Prevents duplicate products by **updating quantity instead**
- Cart data is persisted using **localStorage**

---

### 💰 Pricing Logic
- Dynamic subtotal calculation
- Shipping fee logic
- Tax calculation
- Coupon / discount support
- Auto-updating order summary

---

### 🎯 User Experience
- Fully responsive for **mobile, tablet, and desktop**
- Cart item count indicator in the navigation bar
- Checkout disabled when cart is empty
- Clean, minimal UI powered by Tailwind CSS

---

## 🧰 Tech Stack

- **Frontend Framework:** React  
- **Language:** TypeScript  
- **Styling:** Tailwind CSS  
- **Routing:** React Router  
- **State Management:** Context API  
- **Data Source:** DummyJSON API  

---

## 📁 Project Structure

```txt
src/
│
├── components/
│   ├── cards/
│   │   ├── ClotheLayout.tsx
│   │   ├── ProductDetailsCard.tsx
│   │   ├── CartComponents.tsx
│   │   ├── OrderSummary.tsx
│   │
│   ├── context/
│   │   ├── ProductContext.tsx
│   │   ├── CartContext.tsx
│   │
│   ├── Ui/
│   │   ├── NavBar.tsx
│   │   ├── FooterSection.tsx
│
├── pages/
│   ├── LandingPage/
│   ├── ProductExplorePage/
│   ├── ProductDetailsPage/
│   ├── CartPage/
│
├── types/
│   ├── Products.ts
│   ├── Cart.ts
│
├── App.tsx
├── main.tsx

🧠 State Management

Product Data: Managed using ProductContext

Cart Logic: Managed using CartContext

Persistence: Cart state is globally accessible and persisted via localStorage

🚀 Installation & Setup
Clone the repository
git clone https://github.com/your-username/e-commerce-application.git

Navigate to the project directory
cd e-commerce-application

Install dependencies
npm install

Run the development server
npm run dev

🌐 API Used

This project uses the DummyJSON Products API:

https://dummyjson.com/products

🔮 Future Enhancements

Authentication and user-specific carts

Checkout and payment gateway integration

Wishlist functionality

Order history

Server-side cart synchronization