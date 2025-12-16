import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage.tsx'
import ProductExplore from './pages/ProductExplorePage/ProductExplore.tsx'
import CustomerCart from './pages/CartList/CustomerCart.tsx'
import ProductDetails from './pages/ProductDetails/ProductDetails.tsx'
import { ProductProvider } from './components/context/ProductContext.tsx'
import { CartProvider } from './components/context/CartContext.tsx'

const router = createBrowserRouter([
  {path:"/",element:<LandingPage/>},
  {path:"Explore",element:<ProductExplore/>},
  {path:"cart",element:<CustomerCart/>},
  {path:"/product/:id",element:<ProductDetails/>,
    
  }
  
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartProvider>
    <ProductProvider>
    <RouterProvider router={router}/>
    </ProductProvider>
    </CartProvider>
  </StrictMode>,
)
