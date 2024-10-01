const Metrics = ()=>{
    return (
        <div className="bg-gray-200 py-5">
            <h2 className="text-center font-semibold">Metrics</h2>
            <p className="text-sm">The metrics of the Streamify app</p>
            <div className="mt-10 grid gap-2 grid-cols-3 grid-rows-1">
                <div className="relative ">
                    <div className="absolute inset-px ml-2 rounded-lg bg-white"></div>
                    <div className="relative flex h-52 flex-col overflow-hidden rounded-lg">
                        <div className="px-6 pb-3 pt-8">
                            <p className="mt-2 font-medium tracking-tight text-gray-800">Total Users</p>
                        </div>

                    </div>
                    <div className="absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
                </div>
                <div className="relative">
                    <div className="absolute inset-px rounded-lg bg-white"></div>
                        <div className="relative flex h-52 flex-col overflow-hidden rounded-lg">
                            <div className="px-6 pb-3 pt-8">
                                <p className="mt-2 font-medium tracking-tight text-gray-800">Active Users</p>

                            </div>

                        </div>
                    <div></div>
                </div>
                <div className="relative">
                    <div className="absolute inset-px rounded-lg bg-white"></div>
                    <div className="relative flex h-52 flex-col overflow-hidden rounded-lg">
                        <div className="px-6 pb-3 pt-8">
                            <p className="mt-2 font-medium tracking-tight text-gray-800">Total Streams</p>

                        </div>

                    </div>

                </div>
                <div className="relative">
                    <div className="absolute inset-px rounded-lg bg-white"></div>
                    <div className="relative h-52 flex-col overflow-hidden rounded-lg">
                        <div className="px-6 pb-3 pt-8">
                            <p className="mt-2 font-medium tracking-tight text-gray-800">Revenue</p>

                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute inset-px rounded-lg bg-white"></div>
                    <div className="relative flex h-52 flex-col overflow-hidden rounded-lg">
                        <div className="px-6 pb-3 pt-8">
                            <p className="mt-2 font-medium tracking-tight text-gray-800">Top Artist</p>


                        </div>
                    </div>

                </div>
              
            </div>

        </div>
    )
}

export default Metrics;