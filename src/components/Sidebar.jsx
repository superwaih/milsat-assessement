import React, { useState } from "react";
import { useDataProvider } from "../context/DataProvider";
import TasksTab from "./sidebar-components/TasksTab";
import UsersTab from "./sidebar-components/UsersTab";

const Sidebar = () => {
  const {
    selectedPolygon,
  } = useDataProvider();
  const[activeTab, setActiveTab] = useState("frame")
  const changeActiveTab = (tabname) =>{
    setActiveTab(tabname)
  }

  return (
    <div
      className="max-w-[550px] w-full overflow-y-scroll 
      border-black h-full flex-col border-r-2 p-8 flex gap-4"
    >
     <div>
   
    {selectedPolygon && (
      <h1 className="font-bold text-xl">Current Task: {selectedPolygon}</h1>
    )}
     <div className="border-gray-300 pt-3  flex gap-4 border-b">
      <button onClick={() => changeActiveTab("frame")} className={activeTab === "frame" ? "text-xl border-b-2 border-gray-400  uppercase font-semibold" : "text-xl rounded-md uppercase"}>Frame</button>
      <button onClick={() => changeActiveTab("users")} className={activeTab === "users" ? "text-xl border-b-2 border-slate-400 uppercase font-semibold" : "text-xl rounded-md uppercase"}>Users</button>
     </div>
     </div>
     <div className="flex w-full gap-4">
      {activeTab === "frame" ?  <TasksTab /> : <UsersTab  />}
      
 
       
    
     </div>
    </div>
  );
};

export default Sidebar;
