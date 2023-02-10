import React, { useEffect } from "react";
import { useState } from "react";
import {
  MapContainer,
  TileLayer,
  useMap,
  Popup,
  GeoJSON,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useDataProvider } from "../context/DataProvider";


const MapPage = () => {
  const { geojsonFiles, setAssignTask, setSelectedPolygon, selectedPolygon } =
    useDataProvider();

  return (
    <div className="w-full h-full">
      <MapContainer center={[9.07481143758369, 7.493501807312384]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png"
        />
        {geojsonFiles.map((geojsonFile) => (
          <GeoJSON
            key={geojsonFile.taskid}
            data={geojsonFile.geojson}
            eventHandlers={{
              click: () => {
                setSelectedPolygon(geojsonFile.taskid);
                console.log(geojsonFile.assign)
                // console.log(geojsonFile.taskid === selectedPolygon)
              },
              up: (e)=>{
                console.log(e)
              }
            }}
            pathOptions={{ color: 
            geojsonFile.assign ? "blue" : 
            geojsonFile.taskid === selectedPolygon ? 
            "black" : "white", 

            fillColor:
             geojsonFile.assign ? "gray" : geojsonFile.taskid === selectedPolygon ? "purple" :"red" }}
          
          >
            <Popup>
              <h3>{geojsonFile.taskid}</h3>
              <p>{}</p>
              {/* <button
                onClick={() => setAssignTask(true)}
                className="py-3 w-full text-white rounded-sm px-2 bg-black"
              >
                Assign
              </button> */}
            </Popup>
          </GeoJSON>
        ))}
        <button
        className="py-3 w-full text-white rounded-sm px-2 bg-black"
        
        >Assign selected task</button>
      </MapContainer>
    </div>
  );
};

export default MapPage;
