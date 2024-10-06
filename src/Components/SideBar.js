import { useState } from "react";

const SideBar = ({isOpen})=>{

    return (
        <div>
            {/*Desktop Side Bar*/}
        <div className="hidden lg:flex">
            <div className="dark:bg-gray-800 bg-gray-300 h-[832px] w-80 z-1 pt-[60px] pl-0 rounded-lg">
                <ul>
                    
                    <li className="text-lg font-bold text-left dark:text-gray-400 text-gray-900 pl-4 pb-10">
                        <span className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 5.25C3 4.007 7.03 3 12 3s9 .008 9 2.25v13.5C21 19.993 16.97 21 12 21s-9-.008-9-2.25V5.25z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 9.75c0 1.243 4.03 2.25 9 2.25s9-1.007 9-2.25M3 14.25c0 1.243 4.03 2.25 9 2.25s9-1.007 9-2.25" />
                            </svg>
                            <span className="pl-2">GET YOUR DATA</span>
                        </span>
                        
                    </li>
                    <li className="font-semibold cursor-pointer dark:hover:bg-gray-600 hover:bg-gray-500 transition text-lg text-left pt-4 pb-4 pl-4 dark:text-gray-200 text-gray-700">Last months analytics</li>
                    <li className="font-semibold cursor-pointer dark:hover:bg-gray-600 hover:bg-gray-500 transition text-lg text-left pt-4 pb-4 pl-4 dark:text-gray-200 text-gray-700">Singers on top</li>
                    <li className="font-semibold  cursor-pointer dark:hover:bg-gray-600 hover:bg-gray-500 transition text-lg text-left pt-4 pb-4 pl-4 dark:text-gray-200 text-gray-700">Top 10 Artists</li>
                </ul>
            </div>
        </div>


        <div className={`${
            isOpen ? 'block' : 'hidden'} lg:hidden rounded-xl absolute top-16 w-full left-0 z-50 dark:text-gray-100 text-gray-300 bg-gray-300 dark:bg-gray-800 `}>
                <div className="dark:bg-gray-800 bg-gray-300 h-fit w-80 z-1 pt-[60px] pl-0 rounded-lg">
                <ul>
                    
                    <li className="text-lg font-bold text-left dark:text-gray-400 text-gray-900 pl-4 pb-10">
                        <span className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 5.25C3 4.007 7.03 3 12 3s9 .008 9 2.25v13.5C21 19.993 16.97 21 12 21s-9-.008-9-2.25V5.25z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 9.75c0 1.243 4.03 2.25 9 2.25s9-1.007 9-2.25M3 14.25c0 1.243 4.03 2.25 9 2.25s9-1.007 9-2.25" />
                            </svg>
                            <span className="pl-2">GET YOUR DATA</span>
                        </span>
                        
                    </li>
                    <li className="font-semibold cursor-pointer dark:hover:bg-gray-600 hover:bg-gray-500 transition text-lg text-left pt-4 pb-4 pl-4 dark:text-gray-200 text-gray-700">Last months analytics</li>
                    <li className="font-semibold cursor-pointer dark:hover:bg-gray-600 hover:bg-gray-500 transition text-lg text-left pt-4 pb-4 pl-4 dark:text-gray-200 text-gray-700">Singers on top</li>
                    <li className="font-semibold  cursor-pointer dark:hover:bg-gray-600 hover:bg-gray-500 transition text-lg text-left pt-4 pb-4 pl-4 dark:text-gray-200 text-gray-700">Top 10 Artists</li>
                </ul>
            </div>

        </div>
        </div>
    )
}

export default SideBar;