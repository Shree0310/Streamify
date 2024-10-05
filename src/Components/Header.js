import { useState } from "react";

const Header = () =>{
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = ()=>{
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <header className="dark:bg-gray-900 bg-white h-20 shadow-md">
                <nav className="mx-auto flex items-center justify-between">
                    <div className="sm:text-sm lg:text-lg md:text-lg font-misterGrape flex font-bold items-center ml-10 text-blue-600 pt-6 lg:pt-0">
                       Streamify 
                    </div>
                    {/* Hamburger Button (for small screens) */}
                <div className="lg:hidden">
                <button
                    onClick={toggleMenu}
                    className="text-white focus:outline-none pt-6 mr-4"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
                </div>
                    <div className="hidden lg:flex">
                        <ul className="dark:text-gray-400 text-md flex justify-center items-center mr-20 font-bold">
                        <li className="sm:text-sm lg:text-lg md:text-lg lg:px-7 lg:py-7 cursor-pointer leading-tight border-dashed hover:border-4 hover:border-current transition">
                                Stream
                            </li>
                            <li className=" sm:text-sm lg:text-lg md:text-lg px-7 py-7 cursor-pointer leading-tight border-dashed hover:border-4 hover:border-current transition">
                                How it works
                            </li>
                            <li className="sm:text-sm lg:text-lg md:text-lg px-7 py-7 cursor-pointer leading-tight border-dashed hover:border-4 hover:border-current transition">
                                Pricing
                            </li>
                            <li className="sm:text-sm lg:text-lg md:text-lg px-7 py-7 cursor-pointer leading-tight border-dashed hover:border-4 hover:border-current transition">
                                Contact
                            </li>

                        </ul>

                    </div>
                       {/* Dropdown Menu (visible on small screens) */}
                    <div className={`${
                        isOpen ? "block" : "hidden"
                        } lg:hidden absolute top-16 w-full left-0 z-50 bg-gray-800`}>
                        <div className="px-2 pt-2 pb-3 space-y-1">
                        <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
                            Stream
                        </a>
                        <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
                            How it works
                        </a>
                        <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
                            Pricing
                        </a>
                        <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
                            Contact
                        </a>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header;