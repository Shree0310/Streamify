import DataViz from "./DataViz";
import Header from "./Header";
import Metrics from "./Metrics";

const Body = () =>{
    return (
        <div>
            <Header/>
            <div>
                <Metrics/>
            </div>
            <div>
                <DataViz/>
            </div>
        </div>
    )
}

export default Body;