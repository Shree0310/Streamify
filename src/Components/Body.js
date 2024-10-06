import { useState } from "react";
import DataViz from "./DataViz";
import Header from "./Header";
import Metrics from "./Metrics";
import RecentStreams from "./RecentStreams";
import SideBar from "./SideBar";

const Body = () =>{

    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    const toggleSideBar = ()=>{
        setIsSideBarOpen(!isSideBarOpen);
    }
    return (
        <div className=" dark:bg-gray-900">
            <Header toggleSideBar={toggleSideBar}/>
            <div className="flex">
                <SideBar isOpen={isSideBarOpen} toggleSideBar={toggleSideBar}/>
                <Metrics/>
            </div>
            <div className="pt-4 pb-4">
                <DataViz/>
            </div>
            <div className="overflow-x-auto">
                <RecentStreams/>
            </div>
        </div>
    )
}

export default Body;