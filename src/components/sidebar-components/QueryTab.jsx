import axios from 'axios';
import React, { useState } from 'react'
import { ReactNaijaStateLgaSelect } from 'react-select-nigeria-states-lga'
import { useDataProvider } from '../../context/DataProvider';



const url= "https://services3.arcgis.com/od20s3ViWJZ68qsq/ArcGIS/rest/services/Nigeria_Grids/FeatureServer/0/query?where=STATE_NAME%3D%27Ondo%27&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&relationParam=&returnGeodetic=false&outFields=&returnGeometry=true&returnCentroid=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&defaultSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pgeojson&token="
// `https://services3.arcgis.com/od20s3ViWJZ68qsq/ArcGIS/rest/services/Nigeria_Grids/FeatureServer/0/query?where=STATE_NAME%3D%27${naijaState}%27`
const QueryTab = () => {
  const{setEsriData, naijaLga, naijaState, setShowGrid, setNaijaLga, loading, setLoading, setNaijaState} = useDataProvider()
  const [workFrameType, setWorkFrameType] = useState("");
    
    const[selectedState, setSelectedState] = useState("")
    const[selectedLga, setSelectedLga] = useState("")
    const [towns, setLga] = useState([]);
  
    const handleFilter = async (event) => {
      event.preventDefault();
      setShowGrid(true)
      setLoading(true)
      try {
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