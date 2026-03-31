import { Suspense } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Products from './components/Products/Products'
import Stats from './components/Stats/Stats'

const fetchProducts = async () => {
  const res = await fetch('/products.json');
  return res.json();
}

const productPromise = fetchProducts();

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Stats></Stats>

      <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
        <Products productPromise={productPromise}></Products>
      </Suspense>

      <Footer></Footer>
    </>
  )
}

export default App
