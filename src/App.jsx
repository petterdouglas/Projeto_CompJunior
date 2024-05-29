
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
          <Route path='/' element={<LandingPage />} />
          <Route path={`/about/missions_and_values`} element={<Sobre missionsValues={'missions_and_values'} />} />
          <Route path={`/about/description`} element={<Sobre description={'description'} />} />
          <Route path={`/about/services`} element={<Sobre services={'services'} />} />
        </Routes>
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </>
  )
}

export default App
