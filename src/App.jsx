import { useEffect, useState } from 'react'
import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { AppHeader } from './cmps/AppHeader'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { Logo } from './cmps/Logo';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function
      once: true, // Animate only once while scrolling
    })
  }, [])

  return (
    <>
      <section className='full-page'>
        <AppHeader />
        <Home />
        {/* <a
          href="https://wa.me/972585003431"
          className="whatsapp_float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-whatsapp whatsapp-icon"></i>
        </a> */}
      </section>
    </>
  )
}

export default App
