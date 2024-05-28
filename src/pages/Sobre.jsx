import React from 'react'
import './Sobre.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Banner from '../components/Banner'

const Sobre = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Banner/>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Sobre