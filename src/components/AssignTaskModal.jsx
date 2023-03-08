import React, { useEffect, useState } from "react";
import { useDataProvider,  } from "../context/DataProvider";

const fieldCollectors = [
  "user001",
  "user002",
  "user003",
  "user004",
  "user005",
  "user006",
];
const AssignTaskModal = () => {
  const { selectedPolygon, Users, geojsonFiles, workFrameType, selectedLGACode, selectedStateCode,  currentpolygon, manager, setAssignTaskModal } =
    useDataProvider();


  const [showTaskAssigned, setTaskAssigned] = useState(false);

  
  const [selectedUser, setSelectedUser] = useState(null);

  // this function checks if a user has been assigned to this rask and won't return the user if he has been assigned the task
  // Because a user can only be allocated a task once
  const availableFieldCollectors = Users.filter(
    (user) => !currentpolygon[0].assigned_users.includes(user.id)
  );

  

  // checks that the selected user isn't already assigned the task and if not assigns the task to the user 
  const HandleAssignTask = () => {
    if (selectedUser) {
      const currentTask = currentpolygon[0].assigned_users;
       
      
      currentTask.push(selectedUser);
        setTaskAssigned(true);
     
    }
  };

  const handleCloseAssignModal = () => {
    setAssignTaskModal(false);
    setTaskAssigned(false);
  };
  return (
    <div
      className="absolute overlay w-full max-w-lg 
    bg-white rounded-md shadow-md  h-[35vh] 
    left-[40%]  bottom-[40%]"
    >
      {!showTaskAssigned && (
        <div className="flex flex-col space-y-4 p-4">
          <div className="flex justify-between">
            <h3 className="text-xl font-bold">
              Assign Task: {selectedPolygon}
            </h3>
            <button
              onClick={handleCloseAssignModal}
              className="p-3 rounded-[50%] bg-blue-500 border-red-500  text-white"
            >
              X
            </button>
          </div>
          {availableFieldCollectors.length > 0
           ? 
            <>
            <label htmlFor="select_user">
            choice one of the field collectors for this task
          </label>
          <select
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
            className="p-3 rounded-md"
            name="select_user"
            id=""
          >
            <option value="">Select a field collector</option>t
            {availableFieldCollectors.map((collector) => (
              <option key={collector.id} value={collector.id}>
                {collector.fullname}
              </option>
            ))}
          </select>
          <button
            onClick={HandleAssignTask}
            className="font-semibold align-end bg-blue-300 p-2 border-red-400 border-2 disabled:opacity-20 hover:bg-white rounded-md max-w-md m-auto w-full"
          >
            Assign Task
          </button>

            </>
             : <>
             <div>
             <p> Sorry, All availableUsers have been assigned to this task</p>
             <p>Please Select another task</p>

              </div>         
             </>}
         
        </div>
      )}

      {showTaskAssigned && (
        <div className="flex justify-center space-y-5 items-center h-full  flex-col p-6">
          <h4 className="font-semibold text-xl">
            You just assigned task:
            <span className="">{` ${selectedPolygon}`}</span> to
            <span className="font-bold">User{` ${selectedUser}`}</span>

            <div>
              <h3>State Code: {selectedStateCode}</h3>
              <h3>LGA Code: {selectedLGACode}</h3>
              <h3>Work Frame Type: {workFrameType}</h3>
              
            </div>
          </h4>

          <button
            className="py-2 w-full text-white rounded-sm px-2 bg-black"
            onClick={handleCloseAssignModal}
          >
            Go back to Map
          </button>
        </div>
      )}
    </div>
  );
};

export default AssignTaskModal;
