import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Products from '../components/Products'
// import Contact from '../components/Contact'

function Home() {
  return <>
    <Hero />
    <About />
    <Products />
    {/* <Contact /> */}
  </>
}

export default Home