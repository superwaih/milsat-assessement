import React, { useState } from 'react'
import { Allusers } from '../../utils/data'

const UsersTab = () => {
    const[showAssignedFrames, setShowAssignedFrames] = useState(false)

  return (
    <div className='w-full'>
        {Allusers.map((user) => (
            <div key={user.id} className='border-black flex justify-between border px-3 w-full py-5' >
                <h3>{user.fullname}</h3>
                <p></p>
                <div>
                    <button
                    
                     className="py-2 w-full text-white rounded-sm px-2 bg-black"

                    >See Assigned Frames</button>
                </div>

            </div>
        ))}
    </div>
  )
}

export default UsersTab