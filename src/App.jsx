
import { useState, useEffect } from 'react'
import LandingPage from './pages/LandingPage'
import Sobre from './pages/Sobre'

function App() {
  const [myPages, setMyPages] = useState(() => {
    const savedPage = localStorage.getItem('currentPage')
    return savedPage ? savedPage : 'Inicio'
  })
  useEffect(() => {
    localStorage.setItem('currentPage', myPages);
  }, [myPages]);

  const alternaPages = (name) => {
    setMyPages(name)
  }
  return (
    <>
      {myPages === 'Inicio' && <LandingPage alterna={alternaPages} />}
      {myPages === 'Sobre' && <Sobre alterna={alternaPages} />}
    </>
  )
}

export default App
