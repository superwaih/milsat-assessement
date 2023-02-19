import React, { useState } from "react";
import { useDataProvider } from "../context/DataProvider";

const Sidebar = () => {
  const {
    selectedPolygon,
    assignTaskModal,
    geojsonFiles,
    checkPolygon,
    setSelectedPolygon,
    handleRemoveUser,
    setAssignTaskModal,
    activateDropDown,
    setActivateDropDown,
  } = useDataProvider();

  return (
    <div
      className="max-w-[600px] w-full flex flex-col space-y-4 
      border-black h-full border-r-2 p-8"
    >
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
      <h3 className="pb-3 border-b-2 border-black text-3xl">Tasks</h3>
      {geojsonFiles.map((task) => (
        <div
          key={task.taskid}
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
            <button
              onClick={() => setAssignTaskModal(!assignTaskModal)}
              className="py-2 w-full text-white rounded-sm px-2 bg-black"
            >
              Assign this task
            </button>
          </div>

          {/* Shows the list of collectors assigned to a task */}
          {activateDropDown && checkPolygon(task.taskid) && (
            <div>
              {task.assigned_users.length > 0 ? (
                task.assigned_users.map((user, index) => (
                  <div
                    key={user}
                    className="border-b p-3 flex justify-between pb-2 border-black "
                  >
                    <h4 className="text-xl">{user}</h4>

                    <button
                      onClick={() => handleRemoveUser(task.taskid, index)}
                      className="p-2 rounded hover:bg-blue-300 bg-red-500 text-white"
                    >
                      remove user
                    </button>
                  </div>
                ))
              ) : (
                <div className="py-4">
                  There are no users assigned to this task now!
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
