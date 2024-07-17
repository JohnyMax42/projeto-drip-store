import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Banner2 from './components/Banner2'
import Layout from './pages/Layout'
import Banner2 from './components/Banner2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<<<<<<< HEAD
      <Layout pagina={<Banner />}></Layout>
      <Layout pagina={<Banner2 />}></Layout>
=======
      <Layout pagina={<div><Banner /><Banner2 /></div>} />
>>>>>>> 836722ef438d6ad8aa9ee849301431f93acbcd9a
    </>
  )
}

export default App
