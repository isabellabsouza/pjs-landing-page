import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeroSection from './components/Sections/Hero'
import ProductsSection from './components/Sections/Products'
import AboutUsSection from './components/Sections/AboutUs'
import ContactSection from './components/Sections/Contact'

function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <AboutUsSection />
      <ContactSection />
      <Footer />
    </>
  )
}

export default App
