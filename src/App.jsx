import { useEffect, useState } from "react";
import Legend from "./components/Map-components/Legend";
import MapPage from "./components/MapPage";
import Sidebar from "./components/Sidebar";
import AssignTaskModal from "./components/AssignTaskModal";
import { useDataProvider } from "./context/DataProvider";
import ChangeBaseMap from "./components/Map-components/ChangeBaseMap";

export default function App() {
const{assignTaskModal} = useDataProvider()
  
  return (

   <div className="h-screen relative">
    <div className="bg-white p-8 border-b-2 border-black">Tasking Manager application</div>
    <div className="w-full flex h-[95vh] justify-between">
    <Sidebar  />
    <MapPage  />
    </div>
    <Legend />
    <ChangeBaseMap />

    {assignTaskModal && (<AssignTaskModal />)}
    
   </div>
  );
}
