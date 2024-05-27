
import { useState } from 'react'
import LandingPage from './pages/LandingPage'
import Sobre from './pages/Sobre'

function App() {
  const [myPages, setMyPages] = useState('Inicio')
  const alternaPages = (name) => {
    setMyPages(name)
  }
  return (
    <>
      {myPages === 'Inicio' && <LandingPage alterna={alternaPages}/>}
      {myPages === 'Sobre' && <Sobre/>}
    </>
  )
}

export default App
