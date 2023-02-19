import React from "react";
import { useDataProvider } from "../../context/DataProvider";

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



  return (
    <div 
    className='overlay py-3 top-[15%] flex-col space-y-3 right-[5%] flex border-emerald-300 fixed w-[200px] p-3 bg-white border-2 rounded-md'
    >
        <h3 className="font-bold">Change Basemap</h3>
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
    </div>
  );
};

export default ChangeBaseMap;
