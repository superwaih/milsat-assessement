import React, { useState } from "react";
import { useDataProvider } from "../../context/DataProvider";
import { Allusers } from "../../utils/data";

const UsersTab = () => {
  const { currentUser, setCurrentUser, gridFrame } = useDataProvider();
  const [showAssignedFrames, setShowAssignedFrames] = useState(false);

  return (
    <div className="w-full ">
      {Allusers.map((user) => (
        <div
          onClick={() => setCurrentUser(user.id)}
          key={user.id}
          className="border-black cursor-pointer mb-4 flex flex-col justify-between border px-3 w-full py-5"
        >
          <div className="flex justify-between w-full">
            <h3>{user.fullname}</h3>
            <button
              onClick={() => setShowAssignedFrames(!showAssignedFrames)}
              className="py-2 text-white rounded-sm px-2 bg-black"
            >
              See Assigned Frames
            </button>
          </div>
          {showAssignedFrames && currentUser === user.id && (
            <div>
              {gridFrame?.map((dataFrame) => {
                if (dataFrame?.assigned_users.includes(currentUser)) {
                  return (
                    <div className="font-bold">{dataFrame.properties.FID}</div>
                  );
                }
              })}

             
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default UsersTab;
