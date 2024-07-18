import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Banner2 from './components/Banner2'
import Layout from './pages/Layout'
import ProductListingPage from './pages/ProductListingPage'
import Colecao1 from './components/Colecao1'
import Colecao2 from './components/Colecao2'
import Layout2 from './pages/Layout2'
import ProductCard from './components/ProductCard/ProductCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Layout pagina={
        <div>
          <Banner />
          <Colecao1 />
          <Colecao2 />
          <ProductCard imagem="src/assets/camisa-star-wars.png" name="Teste" price="100" priceDiscount="150" />
          <Banner2 />
          <ProductListingPage />

        </div>} />


    </>
  )
}

export default App
