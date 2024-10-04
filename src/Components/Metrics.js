const Metrics = ()=>{
    return (
        <div className="dark:bg-gray-800 bg-gray-200 py-5 mx-4">
            <h2 className="text-center dark:text-white font-semibold text-2xl">Metrics</h2>
            <p className="dark:text-blue-400 text-md">The metrics of the Streamify app</p>
            <div className="mt-10 grid gap-2 grid-cols-3 grid-rows-1">
                <div>
                    <div className="relative cursor-pointer transition hover:translate-y-1 hover:scale-100 delay-150 hover:translate-x-2 ease-in-out shadow-md ">
                        <div className="absolute inset-px ml-2 rounded-lg bg-purple-400"></div>
                        <div className="relative flex h-52 flex-col overflow-hidden rounded-2xl">
                            <div className="px-6 pb-3 pt-8">
                                <p className="mt-2 font-bold tracking-tight dark:text-white text-xl text-gray-800">Total Users</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative cursor-pointer transition hover:translate-y-1 hover:scale-100 delay-150 hover:translate-x-2 ease-in-out shadow-md ">
                        <div className="absolute inset-px rounded-lg bg-orange-400"></div>
                        <div className="relative flex h-52 flex-col overflow-hidden rounded-lg">
                            <div className="px-7 pb-3 pt-8">
                                <p className="mt-2 font-medium tracking-tight text-gray-800 dark:text-white text-xl">Total Streams</p>
                            </div>
                        </div>
                    </div>
                </div>
                    

                <div>
                    <div className="relative cursor-pointer transition hover:translate-y-1 hover:scale-100 delay-150 hover:translate-x-2 ease-in-out shadow-md ">
                        <div className="absolute inset-px rounded-lg bg-orange-400"></div>
                        <div className="relative flex h-52 flex-col overflow-hidden rounded-lg">
                            <div className="px-7 pb-3 pt-8">
                                <p className="mt-2 font-medium tracking-tight text-gray-800 dark:text-white text-xl">Total Streams</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="relative cursor-pointer transition hover:translate-y-1 hover:scale-100 delay-150 hover:translate-x-2 ease-in-out shadow-md ">
                        <div className="absolute inset-px rounded-lg bg-indigo-500"></div>
                        <div className="relative flex h-52 flex-col overflow-hidden rounded-lg">
                            <div className="px-6 pb-3 pt-8">
                                <p className="mt-2 font-medium tracking-tight text-gray-800 dark:text-white text-xl">Top Artist</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative cursor-pointer transition hover:translate-y-1 hover:scale-100 delay-150 hover:translate-x-2 ease-in-out shadow-md ">
                        <div className="absolute inset-px rounded-lg bg-teal-400"></div>
                        <div className="relative h-52 flex-col overflow-hidden rounded-lg">
                            <div className="px-8 pb-3 pt-8">
                                <p className="mt-2 font-medium tracking-tight dark:text-white text-xl">Revenue</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="relative cursor-pointer transition hover:translate-y-1 hover:scale-100 delay-150 hover:translate-x-2 ease-in-out shadow-md ">
                        <div className="absolute inset-px rounded-lg bg-purple-900"></div>
                            <div className="relative flex h-52 flex-col overflow-hidden rounded-2xl">
                                <div className="px-6 pb-3 pt-8">
                                    <p className="mt-2 font-medium tracking-tight text-gray-800 dark:text-white text-xl">Active Users</p>
                                </div>
                        </div>
                    </div>
                    <div className="relative cursor-pointer transition hover:translate-y-1 hover:scale-100 delay-150 hover:translate-x-2 ease-in-out shadow-md ">
                        <div className="absolute inset-px rounded-lg bg-orange-400"></div>
                        <div className="relative flex h-52 flex-col overflow-hidden rounded-lg">
                            <div className="px-7 pb-3 pt-8">
                                <p className="mt-2 font-medium tracking-tight text-gray-800 dark:text-white text-xl">Total Streams</p>
                            </div>
                        </div>
                    </div>
                </div>


                
              
            </div>

        </div>
    )
}

export default Metrics;