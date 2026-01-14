import { React, useState } from 'react'
import { Link } from 'react-scroll'
import { Menu, X } from 'lucide-react'

const Navbar = () => {

    const [active, setActive] = useState(location.pathname);
    const [isOpen, setIsOpen] = useState(false);
    console.log(location.pathname)

    const nav = (value) => (
        `  text-[22px]  font-tinos
        ${active === value
            ? "text-yellow-500"
            : " text-white"
        }
        hover:text-yellow-500 hover:scale-110  transition-transform duration-300 cursor-pointer`
    )



    const toggleNavbar = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <div className='   bg-white/1  backdrop-blur-sm border-b border-white/1 z-50  top-0 left-0  max-h-full flex flex-row justify-between px-6  py-3  items-center pt-5 fixed min-w-screen '>
                <div className='text-3xl md:text-4xl lg:text-5xl  font-cedraville  font-bold text-center text-white'>
                    Bean Scence
                </div>

                <nav className='hidden   md:flex  gap-10 justify-between'>
                    <Link
                        onClick={() => setActive("dashboard")}
                        className={nav("dashboard")}
                        to="dashboard"
                    > Home
                    </Link>




                    <Link
                        onClick={() => setActive("about")}
                        className={nav("about")}
                        to="about"
                    >
                        About Us
                    </Link>

                    <Link
                        onClick={() => setActive("menu")}
                        className={nav("menu")}
                        to="/menu"
                    >
                        Menu
                    </Link>

                    <Link
                        onClick={() => setActive("contact")}
                        className={nav("contact")}
                        to="/contact"
                    >
                        Contact Us
                    </Link>
                </nav>


                <button className='hidden md:block bg-yellow-300 text-sm  h-10 px-6 rounded-lg  text-center flex  items-center text-gray-600 hover:bg-yellow-400 hover:text-gray-900 hover:shadow-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer ' >
                    SignUP
                </button>



                {/*mobile view */}

                <div className='md:hidden'>
                    <button
                        onClick={toggleNavbar}
                        className='text-white cursor-pointer'
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {isOpen && (
                    <div className=' absolute top-17 right-0 w-full rounded-b-lg   bg-black/50 backdrop-blur-md flex flex-col items-center gap-6 py-6 md:hidden'>
                        <nav className='flex flex-col'>
                            <Link
                                onClick={() => setActive("dashboard")}
                                className={nav("dashboard")}
                                to="dashboard"
                            > Home
                            </Link>

                            <Link
                                onClick={() => setActive("about")}
                                className={nav("about")}
                                to="about"
                            >
                                About Us
                            </Link>


                            <Link
                                onClick={() => setActive("menu")}
                                className={nav("menu")}
                                to="/menu"
                            >
                                Menu
                            </Link>


                            <Link
                                onClick={() => setActive("contact")}
                                className={nav("contact")}
                                to="/contact"
                            >
                                Contact Us
                            </Link>
                        </nav>

                        <button className=' bg-yellow-300 text-sm h-7 px-4 rounded-lg  text-center  text-gray-600 ease-in-out cursor-pointer ' >
                            SignUP
                        </button>
                    </div>
                )}
            </div>
        </>
    )
}

export default Navbar
