import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import App from './App.tsx'
import Navbar from './components/navbar/navbar'
//pages
import ProductsGallery from './pages/ProductsGallery/ProductsGallery.tsx'
import Aboutus from './pages/aboutUs/aboutus.tsx'
import Checkout from './pages/checkout/checkout.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
	<BrowserRouter>
		<Navbar />
		<Routes>
			<Route path='products' element={<ProductsGallery />}></Route>
			<Route path='aboutus' element={<Aboutus />}></Route>
			<Route path='checkout' element={<Checkout />}></Route>
		</Routes>
	</BrowserRouter>
  {/* <App/> */}
  </StrictMode>,
)
