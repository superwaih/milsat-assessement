import React from 'react'
import { useDataProvider } from '../../context/DataProvider'

const TasksTab = () => {
    const{
        assignTaskModal,
        geojsonFiles,
        checkPolygon,
        setSelectedPolygon,
        handleRemoveUser,
        setAssignTaskModal,
        activateDropDown,
        selectedPolygon,
        setActivateDropDown,} = useDataProvider()
  return (

    <div className="flex flex-col p-2 space-y-4">
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
  )
}

export default TasksTab