import React from 'react'
import Navbar from './Navbar'
import Dashboard from '../pages/Dashboard'
import About from '../pages/About'
import Menu from '../pages/Menu'
import Contact from '../pages/Contact'

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main className=' relative z-10' >
      <section name="dashboard">
        <Dashboard />
      </section>
      <section name="about">
        <About />
      </section>
      <section name="menu">
        <Menu />
      </section>
      <section name="contact">
        <Contact />
      </section>
      </main>
    </div>
  )
}

export default Layout
