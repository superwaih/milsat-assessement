import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Popup,
  GeoJSON,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useDataProvider } from "../context/DataProvider";


const MapPage = () => {
  const { geojsonFiles, checkPolygon, baseMap, esriData, setSelectedPolygon } =
    useDataProvider();
  

  return (
    <div className="w-full h-full">
      <MapContainer center={[9.07481143758369, 7.493501807312384]} zoom={12}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={baseMap}
        />
        {geojsonFiles.map((geojsonFile) => (
          <GeoJSON
            key={geojsonFile.taskid}
            data={geojsonFile.geojson}
            eventHandlers={{
              click: () => {
                setSelectedPolygon(geojsonFile.taskid);
                
              }
            }}
            pathOptions={{ color: 
            geojsonFile.assigned_users.length > 0 ? "blue" : 
            checkPolygon(geojsonFile.taskid) ? 
            "black" : "white", 

            fillColor:
            geojsonFile.assigned_users.length > 0 ? "gray" : 
             checkPolygon(geojsonFile.taskid) ? 
             "purple" :"red" }}
          
          >
            <Popup>
             <div className="P-4 flex flex-col space-y-3">
             <h3 className="text-xl font-semibold">Task: {geojsonFile.taskid}</h3>
              <div className="text-[17px]">
              {geojsonFile.assigned_users.length > 0 ?
              geojsonFile.assigned_users.map((user) => (
                <div key={user} className="border-b pb-2 border-black ">
                  <h4 className="text-xl">{user}</h4>
                </div>
              ))
              : 
              
              "There are no users assigned this task now!" }
              
              </div>
             </div>
             
            </Popup>
          </GeoJSON>
        ))}
      {/* {esriData?.length > 0 ? 
    esriData?.map(() => (
        <GeoJSON

        >
        </GeoJSON >
    ))  : null
    } */}


       
      </MapContainer>
    </div>
  );
};

export default MapPage;
