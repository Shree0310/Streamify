import { useState } from "react";

const RecentStreams = () =>{
    const streamData = [
        { songName: "Summer Vibes", artist: "The Chill Out Band", dateStreamed: "2024-09-25", streamCount: 120, userId: "U001" },
        { songName: "Electric Dream", artist: "DJ Night Sky", dateStreamed: "2024-09-24", streamCount: 95, userId: "U002" },
        { songName: "Ocean Waves", artist: "The Soothers", dateStreamed: "2024-09-23", streamCount: 150, userId: "U003" },
        { songName: "Firelight", artist: "Ember", dateStreamed: "2024-09-22", streamCount: 110, userId: "U004" },
        { songName: "High Energy", artist: "Beat Masters", dateStreamed: "2024-09-21", streamCount: 75, userId: "U005" },
        { songName: "Moonlit Dance", artist: "The Dreamers", dateStreamed: "2024-09-20", streamCount: 180, userId: "U006" },
        { songName: "Sunset Glow", artist: "Coastal Escape", dateStreamed: "2024-09-19", streamCount: 60, userId: "U007" },
        { songName: "Wild Winds", artist: "Nature Tones", dateStreamed: "2024-09-18", streamCount: 130, userId: "U008" },
        { songName: "Mountain High", artist: "Peak Performers", dateStreamed: "2024-09-17", streamCount: 155, userId: "U009" },
        { songName: "Urban Rhythm", artist: "Street Sounds", dateStreamed: "2024-09-16", streamCount: 200, userId: "U010" },
      ];

    //State for sorting and filtering
    const [sortConfig, setSortConfig] = useState({key: null, direction: 'asc'});
    const [filter, setFilter] = useState('');
    
    //Function to sort the data
    const sortData = (key) =>{
        let direction = 'asc';
        if(sortConfig.key === key && sortConfig.direction === 'asc'){
            direction = 'dsc'
        }
        setSortConfig({ key, direction});
    };

      // Function to get sorted and filtered data
    const getSortedAndFilteredData = () => {
        // First, filter the data based on the song name
        let filteredData = streamData.filter((stream) =>
        stream.songName.toLowerCase().includes(filter.toLowerCase())
        );

        // Then, sort the data if a sort key is provided
        if (sortConfig.key) {
        filteredData = filteredData.sort((a, b) => {
            const aValue = a[sortConfig.key];
            const bValue = b[sortConfig.key];

            // Handle different data types (numbers, strings, dates)
            if (typeof aValue === 'number' && typeof bValue === 'number') {
            return sortConfig.direction === 'asc' ? aValue - bValue : bValue - aValue;
            } else if (sortConfig.key === 'dateStreamed') {
            // Sort by date
            return sortConfig.direction === 'asc'
                ? new Date(aValue) - new Date(bValue)
                : new Date(bValue) - new Date(aValue);
            } else {
            // Sort by strings (for songName, artist, userId)
            return sortConfig.direction === 'asc'
                ? aValue.localeCompare(bValue)
                : bValue.localeCompare(aValue);
            }
        });
        }

        return filteredData;
    };

    const sortedAndFilteredData = getSortedAndFilteredData();
      
    return (
        <div className="overflow-x-auto">
        <div className="dark:bg-gray-800 bg-gray-300 rounded-lg py-4 sm:py-5 px-2 sm:px-4 mx-2 sm:mx-4">
            <h2 className="font-agentOrange text-center dark:text-white text-gray-700 font-semibold text-lg sm:text-xl lg:text-2xl pt-4 sm:pt-6 lg:pt-7">Recent Streams</h2>
            <div className="p-2 sm:p-4">
                <input
                 type="text"
                 placeholder="Filter by song name"
                 className="border border-gray-300 dark:border-gray-600 p-2 rounded-md w-full sm:w-auto"
                 value={filter}
                 onChange={(e)=> setFilter(e.target.value)}/>

            </div>
                <table className=" w-full lg:min-w-full table-auto shadow-lg rounded-lg overflow-x-auto">
                    <thead className="dark:bg-gray-800 bg-gray-500 dark:text-gray-300 text-gray-100">
                        <tr className=" dark:text-gray-200 text-gray-500 uppercase ">
                            <th 
                            className="py-3 px-6 text-left cursor-pointer"
                            onClick={() => sortData('songName')}>
                                Song Name {sortConfig.key === 'songName' ? (sortConfig.direction === 'asc' ? '▲' : '▼') : ''}
                            </th>
                            <th 
                            className="py-3 px-6 text-left cursor-pointer"
                            onClick={() => sortData('artist')}>
                              Artist {sortConfig.key === 'artist' ? (sortConfig.direction === 'asc' ? '▲' : '▼') : ''}
                            </th>
                            <th 
                            className="py-3 px-6 text-left cursor-pointer"
                            onClick={() => sortData('dateStreamed')}>
                                Date Streamed {sortConfig.key === 'dateStreamed' ? (sortConfig.direction === 'asc' ? '▲' : '▼') : ''}
                            </th>
                            <th 
                            className="py-3 px-6 text-left cursor-pointer"
                            onClick={() => sortData('streamCount')}>
                              Stream Count {sortConfig.key === 'streamCount' ? (sortConfig.direction === 'asc' ? '▲' : '▼') : ''}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedAndFilteredData.map((stream,index)=>(
                            <tr key={index} className="dark:bg-gray-600 dark:text-gray-400 text-gray-500 font-light hover:bg-gray-500 hover:text-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-800">
                            <td className="py-3 px-6 text-left">{stream.songName}</td>
                            <td className="py-3 px-6 text-left">{stream.artist}</td>
                            <td className="py-3 px-6 text-left">{stream.dateStreamed}</td>
                            <td className="py-3 px-6 text-left">{stream.streamCount}</td>
                            </tr>
                        ))}                       
                    </tbody>
                </table>
        </div>
        </div>
        
    )  
    
}

export default RecentStreams;