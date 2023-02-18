import React from "react";

const ChangeBaseMap = () => {
  return (
    <div className="overlay top-[10%]">
      <div>
        <label>Vector</label>

        <input
          type="radio"
          name="mapType"
          value="vector"
        //   checked={mapType === "vector"}
        //   onChange={handleMapTypeChange}
        />
      </div>
      <div>
        <label>Satellite</label>
        <input
          type="radio"
          name="mapType"
          value="satellite"
        //   checked={mapType === "satellite"}
        //   onChange={handleMapTypeChange}
        />
      </div>
    </div>
  );
};

export default ChangeBaseMap;
