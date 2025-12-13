import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage.tsx'
import ProductExplore from './pages/ProductExplorePage/ProductExplore.tsx'
import CustomerCart from './pages/CartList/CustomerCart.tsx'
import ProductDetails from './pages/ProductDetails/ProductDetails.tsx'

const router = createBrowserRouter([
  {path:"/",element:<LandingPage/>},
  {path:"Explore",element:<ProductExplore/>},
  {path:"cart",element:<CustomerCart/>},
  {path:"product:productId",element:<ProductDetails/>}
  
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
