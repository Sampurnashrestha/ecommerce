import React from 'react'
import { BrowserRouter , Routes , Route} from 'react-router-dom'
import Navbar from './layout/Navbar'
import Dashboard from './pages/Dashboard'
import About from './pages/About'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <main className='pt-20' >
      <section name="dashboard">
        <Dashboard />
      </section>

      <section name="about">
        <About />
      </section>
      </main>
      </BrowserRouter>
    </div>
  )
}

export default App
