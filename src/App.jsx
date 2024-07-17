import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Banner2 from './components/Banner2'
import Layout from './pages/Layout'
import ProductListingPage from './pages/ProductListingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout pagina={<Banner />}></Layout>
      <Layout pagina={<Banner2 />}></Layout>
      <Layout pagina={<div><Banner /><Banner2 /></div>} />
      <Layout pagina={<ProductListingPage />}></Layout>
    </>
  )
}

export default App
