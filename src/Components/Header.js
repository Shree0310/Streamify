const Header = () =>{
    return (
        <div>
            <header className="bg-white h-20">
                <nav className="mx-auto flex items-center justify-between">
                    <div className="flex items-center ml-10 text-blue-600">
                       Streamify 
                    </div>
                    <div className="flex">
                        <ul className="text-md flex justify-center items-center mr-20 font-bold">
                        <li className="px-7 py-7 leading-tight border-dashed hover:border-4 hover:border-current transition">
                                Stream
                            </li>
                            <li className="px-7 py-7 leading-tight border-dashed hover:border-4 hover:border-current transition">
                                How it works
                            </li>
                            <li className="px-7 py-7 leading-tight border-dashed hover:border-4 hover:border-current transition">
                                Pricing
                            </li>
                            <li className="px-7 py-7 leading-tight border-dashed hover:border-4 hover:border-current transition">
                                Contact
                            </li>

                        </ul>

                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header;