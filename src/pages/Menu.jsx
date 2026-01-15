import React from 'react'
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion"

const Menu = () => {
  return (
    <>
    <div className='min-h-screen max-w-full px-6 bg-black/40 '>

      <motion.h1
      initial={{opacity: 0, y: 50}}
      whileInView={{opacity: 1, y: 0}}
      transition={{ duration: 0.6}}
      className='text-8xl font-bold font-tinos text-white text-center pt-20 cursor-default'>
        Menu
      </motion.h1>

      <motion.div
      initial={{filter: "blur(10px)", opacity: 0, y: 10}}
      whileInView={{filter: "blur(0px)", opacity: 1, y:0}}
      transition={{duration: 0.6}}
      className='w-[300px] bg-white rounded-xl p-5 overflow-hidden   mt-15 mx-6  md:mx-10 flex flex-col gap-5 hover:scale-105 hover:drop-shadow-[0_8px_10px_rgba(0,0,0,0.5)]  transition  duration-300'>
        <div className='h-40'>
        <img src="" alt="product"  />
        </div>

        <div className='flex text-center items-center flex-col gap-2'>
          <h3 className='font-bold text-xl'>ProductName</h3>
          <p className='font-semibold text-green-500'>Price</p>
          <p className='text-gray-500 text-md font-tinos text-justify tracking-tight'>Smooth espresso topped with rich milk foam</p>{/*Description */}
           <div className='text-yellow-500 flex  items-center '>
            <span>Rating:</span>
            <div className='flex flex-row'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            </div>
           </div>
            <motion.div
            whileTap={{scale:0.7}}
            transition={{duration: 0.2}}
            className='bg-yellow-400 text-white font-bold rounded-xl px-4 py-2 mt-2 hover:bg-yellow-500 hover:scale-105 transition-transform duration-300 '>
              <button>Order Now</button>
            </motion.div>
        </div>
      </motion.div>

    </div>
      
    </>
  )
}

export default Menu
