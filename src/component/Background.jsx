import React from 'react'
import heroImg from "../assets/image/hero.png";

const Background = ({children}) => {
  return (
    <div className='relative min-h-screen'>
       <section
          className="absolute fixed inset-0 -z-10  bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
        />

        {children}
    </div>
  )
}

export default Background
