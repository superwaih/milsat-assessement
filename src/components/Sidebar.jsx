import React, { useState } from "react";
import { useDataProvider } from "../context/DataProvider";

const Sidebar = () => {
  const {
    selectedPolygon,
    assignTask,
    geojsonFiles,
    checkPolygon,
    setSelectedPolygon,
    manager,
  } = useDataProvider();
  const [activateDropDown, setActivateDropDown] = useState(false);
  console.log(manager);

  return (
    <div
      className="max-w-[600px] w-full flex flex-col space-y-4 
      border-black h-full border-r-2 p-8"
    >
      {/* <h1>Hello <span className="text-orange-500 text-2xl">{manager[0].name}</span>,</h1> */}
      <h2 className="text-xl">You are currently logged in as a Manager</h2>
      <p>This is a demo project so you can assign tasks</p>
      {selectedPolygon && <h1>Current Task: {selectedPolygon}</h1>}
      {assignTask && <div>Assign Task</div>}
      <h3 className="pb-3 border-b-2 border-black text-3xl">Tasks</h3>
      {geojsonFiles.map((task) => (
        <div
          onClick={() => setSelectedPolygon(task.taskid)}
          className={
            checkPolygon(task.taskid)
              ? "p-2 border-2 border-blue-300 hover:shadow-md cursor-pointer "
              : "p-2 border-2 hover:shadow-md cursor-pointer"
          }
        >
          <div className="grid-cols-3 gap-4 grid">
            <div>{task.taskid}</div>
            <button
              onClick={() => setActivateDropDown(!activateDropDown)}
              className="py-2 w-full text-white rounded-sm px-2 bg-black"
            >
              See Assigned Users
            </button>
            <button className="py-2 w-full text-white rounded-sm px-2 bg-black">
              Assign this task
            </button>
          </div>

          {activateDropDown && checkPolygon(task.taskid) && (
            <div>
                {task.assigned_users.length > 0 ?
              task.assigned_users.map((user) => (
                <div className="border-b pb-2 border-black ">
                  <h4 className="text-xl">{user}</h4>
                </div>
              ))
              : <div className="py-4">There are no users assigned to this task now!</div> }
              
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
