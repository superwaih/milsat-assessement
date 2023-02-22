import React, { useState } from "react";
import { useDataProvider } from "../context/DataProvider";
import QueryTab from "./sidebar-components/QueryTab";
import TasksTab from "./sidebar-components/TasksTab";

const Sidebar = () => {
  const {
    selectedPolygon,
  } = useDataProvider();
  const[activeTab, setActiveTab] = useState("task")
  const changeActiveTab = (tabname) =>{
    setActiveTab(tabname)
  }

  return (
    <div
      className="max-w-[600px] w-full  
      border-black h-full flex-col border-r-2 p-8 flex gap-4"
    >
     <div>
     <div>
      <h3 className="font-bold">Simple Guide for Managers </h3>
      <p className="italic">
        This is a demo project where you can assign tasks and see tasks you
        assigned There are six available field collectors and six available
        tasks and each collector can only be assigned to the same task once
        and can also be assigned to all the tasks
      </p>
    </div>
    {selectedPolygon && (
      <h1 className="font-bold text-xl">Current Task: {selectedPolygon}</h1>
    )}
     <div className="border-black pt-3  flex gap-4 border-b">
      <button onClick={() => changeActiveTab("task")} className={activeTab === "task" ? "text-2xl border-b-4 border-gray-400  uppercase font-semibold" : "text-2xl rounded-md uppercase"}>Tasks</button>
      <button onClick={() => changeActiveTab("query")} className={activeTab === "query" ? "text-2xl border-b-4 border-slate-400 uppercase font-semibold" : "text-2xl rounded-md uppercase"}>Query</button>
     </div>
     </div>
     <div className="flex w-full gap-4">
      {activeTab === "task" ? <TasksTab  /> :<QueryTab /> }
      
 
       
    
     </div>
    </div>
  );
};

export default Sidebar;
