import DataViz from "./DataViz";
import Header from "./Header";
import Metrics from "./Metrics";
import RecentStreams from "./RecentStreams";

const Body = () =>{
    return (
        <div className="dark:bg-gray-900">
            <Header/>
            <div>
                <Metrics/>
            </div>
            <div>
                <DataViz/>
            </div>
            <div>
                <RecentStreams/>
            </div>
        </div>
    )
}

export default Body;