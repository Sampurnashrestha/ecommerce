import React, { useEffect, useState } from 'react'
import { BrowserRouter , Routes , Route} from 'react-router-dom'
import Layout from './layout/Layout'
import AllMenu from './pages/menu/AllMenu'
import Background from './component/Background'
import MenuDetails from './pages/menu/MenuDetails'
import PreLoader from './component/PreLoader'


const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect (()=>{
    setTimeout(()=>
    setLoading(false)
    ,3000)
  },[]);

  if (loading) return <PreLoader />;

  return (
    <div>
      <BrowserRouter>
      <Background>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path='/menu' element={<AllMenu />} />
          <Route path='/menu/:id' element={<MenuDetails />} /> 
        </Routes>
        </Background>
      </BrowserRouter>
    </div>
  )
}

export default App
