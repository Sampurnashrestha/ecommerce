import React from 'react'
import { BrowserRouter , Routes , Route} from 'react-router-dom'
import Layout from './layout/Layout'
import AllMenu from './pages/menu/AllMenu'
import Background from './component/Background'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Background>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path='/menu' element={<AllMenu />} />
        </Routes>
        </Background>
      </BrowserRouter>
    </div>
  )
}

export default App
