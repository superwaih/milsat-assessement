import { useEffect, useState } from "react";
import MapPage from "./components/MapPage";
import Sidebar from "./components/Sidebar";

export default function App() {
  
  return (

   <div className="h-screen">
    <div className="bg-white p-8 border-b-2 border-black">Tasking Manager application</div>
    <div className="w-full flex h-[95vh] justify-between">
    <Sidebar  />
    <MapPage  />
    </div>
   
   </div>
  );
}
