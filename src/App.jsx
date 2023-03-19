import { useEffect, useState } from "react";
import Legend from "./components/Map-components/Legend";
import MapPage from "./components/MapPage";
import Sidebar from "./components/Sidebar";
import AssignTaskModal from "./components/AssignTaskModal";
import { useDataProvider } from "./context/DataProvider";
import ChangeBaseMap from "./components/Map-components/ChangeBaseMap";
import QueryTab from "./components/sidebar-components/QueryTab";



export default function App() {
const{assignTaskModal} = useDataProvider()

  
  return (

   <div className="h-screen relative">
    <div className="bg-white flex justify-between items-center w-full py-4 px-8 border-b-2 border-black">
      <h3 className="w-full">Tasking Manager</h3>
      <QueryTab />
    </div>
    
    <div className="w-full flex h-[95vh] justify-between">
    <Sidebar  />
    <MapPage  />
    </div>
    {/* <ChangeBaseMap /> */}

    {assignTaskModal && (<AssignTaskModal />)}
    
   </div>
  );
}
