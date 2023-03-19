import React, { useState } from "react";
import { useDataProvider } from "../../context/DataProvider";
import {BiMap} from "react-icons/bi"
import {AiOutlineCloseCircle} from "react-icons/ai"
const ChangeBaseMap = () => {
    const{mapType, setMapType, setBaseMap} = useDataProvider()
    const handleMapTypeChange = (event) => {
        setMapType(event.target.value);
        switch (mapType) {
            case 'vector':
              setBaseMap('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
              break;
            case 'satellite':
              setBaseMap('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}');
              break;
            default:
              setBaseMap('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

      };
    
 
  };
  const[showBaseMapButton, setShowBaseMapButton] = useState(false)



  return (
    <div 
    
    className='overlay absolute py-3 top-[10%] flex-col space-y-3 left-2 flex border-emerald-300 p-3 bg-white border-2 rounded-md'
    >
      
      {
        showBaseMapButton ? (
          <>
           <div className="flex justify-between w-full items-center">
           <h3 className="font-bold">Basemap</h3>
           <AiOutlineCloseCircle className="text-xl text-red-500" onClick={() => setShowBaseMapButton(!showBaseMapButton)} />
           </div>
      <div className="flex gap-4 items-center border-black border-b-2 pb-2">
        <label>Satellite</label>

        <input
          type="radio"
          name="mapType"
          value="vector"
          className="cursor-pointer"
          checked={mapType === "vector"}
          onChange={handleMapTypeChange}
        />
      </div>
      <div className="flex border-black border-b-2 gap-4 items-center pb-2">
        <label>Openstreetmap</label>
        <input
          type="radio"
          name="mapType"
          value="satellite"
          className="cursor-pointer"
          checked={mapType === "satellite"}
          onChange={handleMapTypeChange}
        />
      </div>
          </>
        )
  :     <BiMap className="text-2xl cursor-pointer" onClick={() => setShowBaseMapButton(!showBaseMapButton)} />  }

    </div>
  );
};

export default ChangeBaseMap;
