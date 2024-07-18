import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Banner2 from './components/Banner2'
import Layout from './pages/Layout'
import ProductListingPage from './pages/ProductListingPage'
import Colecao1 from './components/Colecao1'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <Layout pagina={
        <div>
          <Banner />
          <Colecao1/>
          <Banner2 />
          <ProductListingPage />

        </div>} />
    </>
  )
}

export default App
