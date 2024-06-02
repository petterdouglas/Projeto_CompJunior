
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//components
import Footer from './components/Footer'
import Navbar from './components/Navbar'

//pages
import LandingPage from './pages/LandingPage'
import Sobre from './pages/Sobre'

function App() {

  return (
    <>
      <BrowserRouter>
        <header>
          <Navbar />
        </header>
        <Routes>
          <Route path='/Projeto_CompJunior/' element={<LandingPage />} />
          <Route path={`/Projeto_CompJunior/about/missions_and_values/`} element={<Sobre missionsValues={'missions_and_values'} />} />
          <Route path={`/Projeto_CompJunior/about/description/`} element={<Sobre description={'description'} />} />
          <Route path={`/Projeto_CompJunior/about/services/`} element={<Sobre services={'services'} />} />
        </Routes>
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </>
  )
}

export default App
