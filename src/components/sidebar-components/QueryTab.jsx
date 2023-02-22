import React, { useState } from 'react'

const QueryTab = () => {
    const [workFrameType, setWorkFrameType] = useState("");
    const [stateName, setStateName] = useState("");
    const [lgaName, setLgaName] = useState("");
  
    const handleFilter = (event) => {
      event.preventDefault();
    //   onFilter(workFrameType, stateName, lgaName);
    };
  return (
    <form className='w-full' onSubmit={handleFilter}>
    <div className='flex mb-3 gap-3 justify-between border border-blue-500 p-2 rounded-md'>
      <label className='font-semibold' htmlFor="workFrameType">Work Frame Type:</label>
      <select
        id="workFrameType"
        value={workFrameType}
        className="w-full border"
        onChange={(event) => setWorkFrameType(event.target.value)}
        required
      >
        <option value="">Select a type</option>
        <option value="Type1">Type 1</option>
        <option value="Type2">Type 2</option>
        <option value="Type3">Type 3</option>
      </select>
    </div>
    <div className='flex mb-3 gap-3 justify-between border border-blue-500 p-2 rounded-md'>
      <label className='' htmlFor="stateName">State Name:</label>
      <select
       id="stateName"
        className="w-full border"
      
        value={stateName}
        onChange={(event) => setStateName(event.target.value)}
        required
      >
        <option value="">Select a type</option>
        <option value="Type1">Type 1</option>
        <option value="Type2">Type 2</option>
        <option value="Type3">Type 3</option>
      </select>
    
    </div>
    <div className='flex mb-3 gap-3 justify-between border border-blue-500 p-2 rounded-md'>
      <label htmlFor="lgaName">LGA Name:</label>
      <input
        id="lgaName"
        type="text"
        className="w-full border"
        value={lgaName}
        onChange={(event) => setLgaName(event.target.value)}
      />
    </div>
    <button className='bg-blue-500 p-3 text-white font-semibold rounded-md w-full' type="submit">Filter</button>
  </form>
  )
}

export default QueryTab