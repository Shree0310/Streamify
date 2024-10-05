import DataViz from "./DataViz";
import Header from "./Header";
import Metrics from "./Metrics";
import RecentStreams from "./RecentStreams";

const Body = () =>{
    return (
        <div className="bg-gray-300 dark:bg-gray-900">
            <Header/>
            <div>
                <Metrics/>
            </div>
            <div className="pt-4">
                <DataViz/>
            </div>
            <div className="overflow-x-auto">
                <RecentStreams/>
            </div>
        </div>
    )
}

export default Body;