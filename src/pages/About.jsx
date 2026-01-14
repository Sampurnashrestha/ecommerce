import React from 'react'
import AboutImg from '../assets/image/about.jpeg'

const About = () => {
    return (
        <>
            <div className='max-w-full  mt-20 '>
                <div className='bg-gray-500/20 backdrop-blur-md  flex flex-row justify-center  min-h-[500px] '>
                    <div className=" mt-20 pl-20">
                        <img
                            src={AboutImg}
                            alt="About us"
                            className=" h-[350px] object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
                        />
                    </div>

                    <div className='w-full md:w-1/2 text-white px-20 mt-33'>
                        <h2 className='text-6xl font-bold cursor-default'>About Us</h2>
                        <p className='mt-4 text-lg text-justify font-tinos cursor-default'> At <span className="text-xl font-semibold tracking-wider ">Bean Scene</span>, we believe coffee
                            is more than just a drink — it’s a moment of comfort and connection.
                            We carefully source premium beans and craft every cup with passion,
                            ensuring rich flavor and unforgettable aroma.
                        </p>
                        <p className="mt-4 font-tinos text-md text-center  italic">
                              "Brewed with care, served with warmth, and enjoyed in every moment."
                        </p>
                        <span className='flex justify-end font-priestancy tracking-widest text-[10px] px-5 uppercase'>-beanscence</span>
                    </div>
                </div>

            </div>
        </>
    )
}

export default About
