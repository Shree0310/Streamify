import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";

const DataViz = () =>{
    return (
        <div className="dark:bg-gray-800 rounded-lg bg-gray-200 py-5 mx-4">
            <div className="grid grid-cols-1">
                <h2 className="text-center font-semibold pt-7 font-agentOrange dark:text-white text-2xl">User Growth</h2>
                <div className="bg-gray-100 shadow rounded-lg p-4 mx-auto max-w-5xl">
                    <LineChart/>
                </div>
                <h2 className="font-agentOrange text-center dark:text-white font-semibold text-2xl pt-7">Revenue Distribution</h2>
                <div className="bg-gray-100 shadow rounded-lg p-4  mx-auto max-w-5xl">
                    <PieChart/>
                </div>
                <h2 className="font-agentOrange text-center dark:text-white font-semibold text-2xl pt-7">Top 5 Streamed songs</h2>
                <div className="bg-gray-100 shadow rounded-lg p-4 mx-auto max-w-5xl">
                    <BarChart/>
                </div>
            </div>
        </div>
            
        
    )
   
}

export default DataViz;