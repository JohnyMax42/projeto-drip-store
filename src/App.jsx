import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Layout from './pages/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout pagina={<Banner />}></Layout>
    </>
  )
}

export default App
