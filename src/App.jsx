import React from 'react'
import { BrowserRouter , Routes , Route} from 'react-router-dom'
import Navbar from './layout/Navbar'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Background from './component/Background'
import Menu from './pages/Menu'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Background>
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
      </Background>
      </BrowserRouter>
    </div>
  )
}

export default App
