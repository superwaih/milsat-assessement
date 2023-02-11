import { useEffect, useState } from "react";
import { Button } from "./components/Map-components/Button";
import Legend from "./components/Map-components/Legend";
import MapPage from "./components/MapPage";
import Sidebar from "./components/Sidebar";
import AssignTaskModal from "./components/sidebar-components/AssignTasks";
import { useDataProvider } from "./context/DataProvider";

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
   

    {assignTaskModal && (<AssignTaskModal />)}
    
   </div>
  );
}
