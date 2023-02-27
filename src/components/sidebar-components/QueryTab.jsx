import axios from 'axios';
import React, { useState } from 'react'
import { ReactNaijaStateLgaSelect } from 'react-select-nigeria-states-lga'
import { useDataProvider } from '../../context/DataProvider';



const QueryTab = () => {
  const{naijaLga, naijaState, setShowGrid, setNaijaLga, loading, setLoading, setNaijaState} = useDataProvider()
  const [workFrameType, setWorkFrameType] = useState("");
    const[selectedState, setSelectedState] = useState("")
    const[selectedLga, setSelectedLga] = useState("")
    const [towns, setLga] = useState([]);
  
   
    const handleFilter = async (event) => {
      event.preventDefault();
      setShowGrid(true)
      setLoading(true)
  
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
        <option value="">Frame type</option>
        <option value="0">Frame 0</option>
        <option value="1">Frame 1</option>
      </select>
    </div>
  <div className='flex flex-col'>
  <ReactNaijaStateLgaSelect 
            naijaState={naijaState}
            naijaLga={naijaLga}
            towns={towns}
            lgaVal={val => setSelectedLga(val)}
            stateVal={val => setSelectedState(val)}
            setNaijaState={setNaijaState}
            setNaijaLga={setNaijaLga}
            stateClassName="style-select"
            lgaClassName="style-select"
            setLga={setLga}
         />
  </div>
    <button disabled={loading} className='bg-blue-500 p-3 disabled:opacity-40 text-white font-semibold rounded-md w-full' type="submit">
      {loading ? "Loading..." : "Filter"}
    </button>
  </form>
  )
}

export default QueryTab