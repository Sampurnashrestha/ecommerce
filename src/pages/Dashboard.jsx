import React from 'react'
import heroImg from '../assets/image/hero.jpg'

const Dashboard = () => {
  return (
    <>
      <div className='relative max-h-[600px] min-w-full '>
        <section
          className='absolute fixed inset-0 -z-10 bg-cover bg-center'
          style={{ backgroundImage: `url(${heroImg})` }}
        />

        <section id='hero-section' className='  relative top-0 z-10 h-[80vh] flex mt-40 md:mt-15 pt-25 justify-center lg:pl-[40rem] text-white px-6 text-center md:text-left'>
          <div className='max-w-lg md:pr-32 '>
          <span className='font-tinos text-[1.2rem] md:text-[1.5rem] ' >We've got your morning covered with</span>
          <h1 className=' font-cedraville text-[6rem] md:text-[13rem] '>Coffee</h1>
          <p className=' text-center md:text-justify  font-tinos md:text-[16px] md:min-w-lg'>It is best to start your day with a cup of coffee. Discover the best flavours coffee you will ever have. We provide the best for our customers.</p>
          <div className='mt-5 md:mt-7 md:ml-45 '>
            <button className='bg-yellow-400 rounded-xl  drop-shadow-[0_4px_6px_rgba(255,223,0,0.5)]   w-30 py-3 hover:scale-110 transition-transform duration-300 hover:bg-yellow-500'>
              Order Now
            </button>
          </div>
          </div>
          </section>


      </div>
    </>
  )
}

export default Dashboard
