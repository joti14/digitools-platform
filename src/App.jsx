import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Products from './components/Products/Products'
import Stats from './components/Stats/Stats'
import Pricing from './components/Pricing/Pricing'
import ReadyToTransform from './components/ReadyToTransform/ReadyToTransform'
import GetStarted from './components/GetStarted/GetStarted'

const fetchProducts = async () => {
  const res = await fetch('/products.json');
  return res.json();
}

const productPromise = fetchProducts();

function App() {

  const [activeTab, setActiveTab] = useState('product');
  const [carts, setCarts] = useState([]);
  // console.log(carts)

  // console.log(activeTab)
  return (
    <>
      <Navbar carts={carts}></Navbar>
      <Banner></Banner>
      <Stats></Stats>

      <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
        <Products
          productPromise={productPromise}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          carts={carts}
          setCarts={setCarts}
        ></Products>
      </Suspense>
      
      <GetStarted />
      <Pricing />
      <ReadyToTransform />

      <Footer></Footer>
    </>
  )
}

export default App
