import axios from 'axios';
import React, { useState } from 'react'
// import { ReactNaijaStateLgaSelect } from 'react-select-nigeria-states-lga'
import { useDataProvider } from '../../context/DataProvider';


const QueryTab = () => {
  const{setEsriData} = useDataProvider()
    const [workFrameType, setWorkFrameType] = useState("");
    const [naijaState, setNaijaState] = useState('');
    const[loading, setLoading] = useState(false)
    // const [naijaLga, setNaijaLga] = useState('');
    // const[selectedState, setSelectedState] = useState("")
    // const[selectedLga, setSelectedLga] = useState("")
    // const [towns, setLga] = useState([]);
    // console.log(naijaLga,naijaState)
  
    const handleFilter = async (event) => {
      event.preventDefault();
      setLoading(true)
      try {
        // const {data} = await axios.get(
        //   `https://services3.arcgis.com/od20s3ViWJZ68qsq/ArcGIS/rest/services/Nigeria_Grids/FeatureServer/0/query?where=STATE_NAME%3D%27${naijaState}%27`)
        // setEsriData(data)
        setLoading(false)
        
      } catch (error) {
        setLoading(false)
      }
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
  <div className='flex flex-col'>
  {/* <ReactNaijaStateLgaSelect 
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
         /> */}
  </div>
    <button disabled={loading} className='bg-blue-500 p-3 disabled:opacity-40 text-white font-semibold rounded-md w-full' type="submit">
      {loading ? "Loading..." : "Filter"}
    </button>
  </form>
  )
}

export default QueryTab