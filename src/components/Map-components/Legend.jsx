import React from 'react'

const Legend = () => {
  return (
    <div className='overlay py-3 bottom-[5%] flex-col space-y-3 left-[35%] flex   z-50 border-emerald-300 fixed w-[300px] p-4 bg-white border-2 rounded-md'>
        <h3 className='uppercase font-semibold text-xl'>Legend</h3>
        <div className='flex gap-5'>
          <span className='h-6 w-6 p-4 border-blue-800 border-4 bg-gray-300'></span>
          <h1 className='font-bold'>Assigned</h1>
        </div>
        <div className='flex gap-5'>
          <span className='h-6 w-6 p-4 border-white border-2 bg-red-400 '></span>
          <h1 className='font-bold'>Not Assigned</h1>
        </div>
        <div className='flex gap-5'>
          <span className='h-6 w-6 p-4 border-black  border-2  '></span>
          <h1 className='font-black'>Selected Polygon </h1>
        </div>
    </div>
  )
}

export default Legend