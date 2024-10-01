import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";

const DataViz = () =>{
    return (
            <div className="grid grid-cols-1">
                <h2 className="text-center font-semibold pt-7">User Growth</h2>
                <div className="bg-gray-100 shadow rounded-lg p-4 ml-80 mr-80 mt-10">
                    <LineChart/>
                </div>
                <h2 className="text-center font-semibold pt-7">Revenue Distribution</h2>
                <div className="bg-gray-100 shadow rounded-lg p-4 ml-80 mr-80 mt-10">
                    <PieChart/>
                </div>
                <h2 className="text-center font-semibold pt-7">Top 5 Streamed songs</h2>
                <div className="bg-gray-100 shadow rounded-lg p-4 ml-80 mr-80 mt-10">
                    <BarChart/>
                </div>
            </div>
        
    )
   
}

export default DataViz;