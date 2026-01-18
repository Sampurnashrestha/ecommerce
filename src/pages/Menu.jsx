import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
import Menucard from './menu/Menucard';
import { FaArrowRight } from "react-icons/fa"

const Menu = () => {
  const [data, setData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://696865a669178471522a6006.mockapi.io/coffee");
      const data = await res.json();
      setData(data);
    };
    fetchData();
  }, [])
  return (
    <>
      <div className='min-h-screen max-w-full px-6 bg-black/40 '>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-8xl font-bold font-tinos text-white text-center pt-20 cursor-default'>
          Menu
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-1">
          {data.slice(0, 4).map((d) => (
            <Menucard
              key={d.id}
              id={d.id}
              image={d.image}
              price={d.price}
              name={d.name}
              description={d.description}
              rate={d.rating}
            />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='flex justify-end text-white mt-8'>
          <Link
            to='/menu'
            className='text-xl font-tinos text-yellow-400  flex flex-row items-center  justify-center gap-1 hover:text-yellow-500  hover:scale-105 transition-transform duration-300'
          >Show More<FaArrowRight /></Link>
        </motion.div>
      </div>

    </>
  )
}

export default Menu
