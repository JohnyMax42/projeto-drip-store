import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Layout from './pages/Layout'
import Banner2 from './components/Banner2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout pagina={<Banner />}></Layout>
      <Layout pagina={<Banner2 />}></Layout>
    </>
  )
}

export default App
