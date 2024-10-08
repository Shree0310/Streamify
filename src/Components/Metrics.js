import musicImage1 from "./../Assets/Images/musicImage1.jpg";
import musicImage2 from "./../Assets/Images/musicImage2.jpg";
import EdSheeran  from "./../Assets/Images/EdSheeran.jpeg";
import Tape1 from "./../Assets/Images/Tape1.png"

const Metrics = ()=>{
    return (
        <div className="dark:bg-gray-800 rounded-lg bg-gray-200 py-8 ml-4 mr-4">
            <h2 className="font-agentOrange text-center dark:text-white font-semibold text-2xl">Metrics</h2>
            <p className="dark:text-blue-400 text-md">The metrics of the Streamify app</p>
            <div className="mt-10 grid gap-2 grid-rows-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                <div>
                    <div className="relative cursor-pointer transition hover:translate-y-1 hover:scale-100 delay-150 hover:translate-x-2 ease-in-out shadow-md ">
                        <div className="absolute inset-px ml-2 rounded-lg bg-purple-400"></div>
                        <div className="relative flex sm:h-26 lg:h-52 flex-col overflow-hidden rounded-2xl">
                            <div className="px-6 pb-3 pt-8">
                                <p className="lg:mt-2 sm:mt-1 font-bold tracking-tight dark:text-white text-xl text-gray-800">
                                    Total Users
                                    <p className="lg:text-[100px] text-[70px] lg:pb-0 pb-5 pt-10 font-caskadia">
                                        59
                                    </p>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative cursor-pointer pt-2 pl-2 shadow-md ">
                        <div className="relative flex lg:object-cover sm:object-cover lg:h-[234px] h-40 flex-col transition hover:translate-y-1 overflow-hidden rounded-lg">
                            <img
                            src={musicImage1}
                            className=""/>
                        </div>
                    </div>
                </div>
                    

                <div>
                    <div className="relative cursor-pointer transition hover:translate-y-1 hover:scale-100 delay-150 hover:translate-x-2 ease-in-out shadow-md ">                       
                        <div className="absolute inset-px rounded-lg bg-orange-400"></div>
                        <div className="relative flex sm:h-26 lg:h-52 flex-col overflow-hidden rounded-lg">
                            <div className="px-7 pb-3 pt-8">
                                <p className="lg:mt-2 sm:mt-1 font-bold tracking-tight text-gray-800 dark:text-white text-xl">
                                    Total Streams
                                    <p className="lg:text-[100px] text-[70px] lg:pb-0 pb-5 pt-10 font-caskadia">
                                        199
                                    </p>
                                </p>
                            </div>
                        </div>
                   
                    </div>
                    
                    <div className="relative cursor-pointer py-2 hover:scale-100 delay-150 hover:translate-x-2 ease-in-out shadow-md ">
                        <div className="absolute inset-px rounded-lg bg-indigo-500"></div>
                        <div className="relative flex h-[240px] flex-col overflow-hidden rounded-lg">
                            <div className="p-1">
                                <p className= "mt-2 mb-2 font-bold tracking-tight text-gray-800 dark:text-white text-xl">
                                    Top Artist
                                    <div className="flex justify-center">
                                    <img
                                    src={EdSheeran}
                                    className=""/>
                                    </div>
                                    
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative cursor-pointer transition hover:translate-y-1 hover:scale-100 delay-150 hover:translate-x-2 ease-in-out shadow-md ">
                        <div className="absolute inset-px rounded-lg bg-teal-400"></div>
                        <div className="relative h-52 flex-col overflow-hidden rounded-lg">
                            <div className="px-8 pb-3 pt-8">
                                <p className="mt-2 font-bold tracking-tight dark:text-white text-xl">
                                    Revenue
                                    <p className="text-[100px] pt-10 font-satoshi">
                                        2009$
                                    </p>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="relative cursor-pointer transition hover:translate-y-1 hover:scale-100 delay-150 hover:translate-x-2 ease-in-out shadow-md ">
                        <div className="absolute inset-px rounded-lg bg-purple-900"></div>
                            <div className="relative flex h-52 flex-col overflow-hidden rounded-2xl">
                                <div className="px-6 pb-3 pt-8">
                                    <p className="mt-2 font-bold tracking-tight text-gray-800 dark:text-white text-xl">
                                        Active Users
                                        <p className="text-[100px] pt-10 font-caskadia">
                                            1089
                                        </p>
                                    </p>
                                </div>
                        </div>
                    </div>
                    <div className="relative cursor-pointer pt-2">
                        <div className="relative flex h-[240]px flex-col overflow-hidden rounded-lg transition hover:translate-y-1">
                            <img
                            src={musicImage2}
                            className=""/>
                        </div>
                    </div>
                </div>
                </div>


                
              
            </div>

    )
}

export default Metrics;