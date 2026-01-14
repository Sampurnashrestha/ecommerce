import React from 'react'
import AboutImg from '../assets/image/about.webp'
import { motion } from "framer-motion";

const About = () => {
    return (
        <>
            <div className='max-w-full  mt-20 '>
                <div className='bg-gray-500/20 backdrop-blur-md  flex flex-col md:flex-row justify-center  min-h-[700px] bg-fixed '>
                    <motion.div 
                    initial={{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y:0}}
                    transition={{duration: 0.6}}
                    className=" md:mt-35 px-5 md:px-0 md:pl-20">
                        <img
                            src={AboutImg}
                            alt="About us"
                            className=" w-full h-[250px] md:h-[350px] object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
                        />
                    </motion.div>

                    <motion.div
                    initial={{opacity:0 , y: 50}}
                    whileInView={{opacity:1, y: 0}}
                    transition={{duration: 0.6}}
                    className='w-full md:w-1/2 text-white px-3 md:px-20 mt-10 md:mt-30 text-center md:text-justify'>
                        <h2 className='text-4xl md:text-6xl  font-bold cursor-default'>About Us</h2>
                        <p className='mt-4 text-md md:text-lg text-center md:text-justify font-tinos cursor-default'> At <span className="text-xl font-semibold tracking-wider ">Bean Scene</span>, we believe coffee
                            is more than just a drink — it’s a moment of comfort and connection.
                            We carefully source premium beans and craft every cup with passion,
                            ensuring rich flavor and unforgettable aroma.
                        </p>
                        <p className="mt-4 font-tinos text-md text-center  italic">
                              "Brewed with care, served with warmth, and enjoyed in every moment."
                        </p>
                        <span className='flex justify-end font-priestancy tracking-widest text-[10px] px-5 uppercase'>-beanscence</span>
                    </motion.div>
                </div>

            </div>
        </>
    )
}

export default About
