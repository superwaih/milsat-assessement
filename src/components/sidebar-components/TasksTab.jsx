import React from "react";
import { useDataProvider } from "../../context/DataProvider";

const TasksTab = () => {
  const {
    assignTaskModal,
    geojsonFiles,
    checkPolygon,
    setSelectedPolygon,
    handleRemoveUser,
    setAssignTaskModal,
    activateDropDown,
    selectedPolygon,
    gridFrame,
    Users,
    setActivateDropDown,
  } = useDataProvider();


  
  return (
    <div className="flex flex-col p-2 space-y-4">
      {gridFrame?.slice(0, 10).map((task) => (
        <div
          key={task?.properties.FID}
          onClick={() => setSelectedPolygon(task?.properties.FID)}
          className={
            checkPolygon(task.properties.FID)
              ? "p-2 border-2 border-blue-300 hover:shadow-md cursor-pointer "
              : "p-2 border-2 hover:shadow-md cursor-pointer"
          }
        >
          <div className="grid-cols-3 gap-4 grid">
            <div className="flex gap-3">
              <p>
                <span className="font-semibold">FID:</span>{" "}
                {task.properties.FID}
              </p>
            </div>
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
          {activateDropDown && checkPolygon(task?.properties.FID) && (
            <div>
              {task?.assigned_users?.length > 0 ? 
              (
              task?.assigned_users.map((user, index) => {
                const userDetail = Users.filter((d) => d.id === user)
                return(
                  <div
                  key={user}
                  className="border-b p-3 flex justify-between pb-2 border-black "
                >
                  <h4 className="text-xl">{userDetail[0].fullname}</h4>

                  <button
                    onClick={() => handleRemoveUser(task?.properties.FID, index)}
                    className="p-2 rounded hover:bg-blue-300 bg-red-500 text-white"
                  >
                    remove user
                  </button>
                </div>
                )
              })
            ) : (
              <div className="py-4">
                There are no users assigned to this task now!
              </div>
            )}
            </div>
          )}
        </div>
      ))}
      {}
    </div>
  );
};

export default TasksTab;
