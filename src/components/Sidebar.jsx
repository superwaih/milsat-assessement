import React, { useState } from "react";
import { useDataProvider } from "../context/DataProvider";

const Sidebar = () => {
//   const { geojsonFiles, selectedPolygon } = useDataProvider();

  const { selectedPolygon, assignTask, geojsonFiles, setSelectedPolygon, manager } = useDataProvider();
  const[activateDropDown, setActivateDropDown] = useState(false)
  return (
    <div
      className="max-w-[600px] w-full 
      border-black h-full border-r-2 p-8"
    >
      Sidebar
      <h2>You are currently logged in as a {manager.name}</h2>
      <p>This is a demo project so you can assign tasks</p>
      {selectedPolygon && <h1>Current Task: {selectedPolygon}</h1>}
      {assignTask && <div>Assign Task</div>}
      <h3 className="pb-3 border-b-2 border-black text-3xl">Tasks</h3>
      {geojsonFiles.map((task) => (
        <div
        onClick={()=> setSelectedPolygon(task.taskid)}
        className="p-2 border-2 grid grid-cols-3 gap-4 border-slate-400 ">
            <div>{task.taskid}</div>
            <button className="py-2 w-full text-white rounded-sm px-2 bg-black">See Assigned Users</button>
            <button className="py-2 w-full text-white rounded-sm px-2 bg-black">Assign this task</button>

            <div>


            </div>
            </div>
      ))}
      
    </div>
  );
};

export default Sidebar;
