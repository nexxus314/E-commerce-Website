E-Commerce Web Application

A modern, responsive e-commerce web application built using React, TypeScript, and Tailwind CSS. The project focuses on clean UI, scalable state management, and real-world e-commerce features such as cart handling, product browsing, and checkout calculations.

<img width="1619" height="955" alt="Screenshot 2025-12-16 153058" src="https://github.com/user-attachments/assets/fc9e8fa2-ccd1-491d-bed7-0412e5f1e940" />
<img width="1647" height="933" alt="Screenshot 2025-12-16 153112" src="https://github.com/user-attachments/assets/061df08b-bd6b-4865-8f7c-71a66be4040b" />
<img width="1635" height="504" alt="Screenshot 2025-12-16 153130" src="https://github.com/user-attachments/assets/e24fa1d3-80b8-4134-9a76-0a3d55c2f8f8" />
<img width="1591" height="604" alt="Screenshot 2025-12-16 153150" src="https://github.com/user-attachments/assets/ecd94de1-eeca-47e8-be79-a9439a94a76f" />
<img width="783" height="484" alt="Screenshot 2025-12-16 153027" src="https://github.com/user-attachments/assets/c903510a-96e0-4ce4-8c3c-0e6bf1a5d6d6" />

Features

Product Browsing

Fetches product data from an external API

Displays products in responsive card layouts

Product details page with images, ratings, tags, and descriptions

Cart System

Add products to cart with dynamic quantity selection

Increase, decrease, and remove items from cart

Prevents duplicate products by updating quantity instead

Cart data persisted using localStorage



Pricing Logic

Dynamic subtotal calculation

Shipping fee logic

Tax calculation

Coupon/discount support

Auto-updating order summary

User Experience

Responsive design for mobile, tablet, and desktop

Cart item count indicator in the navigation bar

Disabled checkout when cart is empty

Clean, minimal UI with Tailwind CSS

Tech Stack

Frontend Framework: React

Language: TypeScript

Styling: Tailwind CSS

Routing: React Router

State Management: Context API

Data Source: DummyJSON API

Project Structure

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
│   ├── LandingPage
│   ├── ProductExplorePage
│   ├── ProductDetailsPage
│   ├── CartPage
│
├── types/
│   ├── Products.ts
│   ├── Cart.ts
│
├── App.tsx
├── main.tsx


State Management

Product Data: Handled via ProductContext

Cart Logic: Handled via CartContext

Persistence: Cart state is globally accessible and persisted using localStorage

Installation and Setup

Clone the repository

git clone [https://github.com/your-username/e-commerce-application.git](https://github.com/your-username/e-commerce-application.git)


Navigate to the project directory

cd e-commerce-application


Install dependencies

npm install


Run the development server

npm run dev


API Used

This project uses the DummyJSON Products API for fetching product data.

URL: https://dummyjson.com/products

Future Enhancements

[ ] Authentication and user-specific carts

[ ] Checkout and payment gateway integration

[ ] Wishlist functionality

[ ] Order history

[ ] Server-side cart synchronization
