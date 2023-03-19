import React, { useRef } from "react";
import { MapContainer, TileLayer, Popup, GeoJSON,} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useDataProvider } from "../context/DataProvider";

import ChangeZoomLevel from "./Map-components/ChangeZoomLevel";
import ChangeBaseMap from "./Map-components/ChangeBaseMap";
import Legend from "./Map-components/Legend";


const MapPage = () => {
 
  const {
    checkPolygon,
    firstcords,
    gridFrame,
    baseMap,
    Users,
    selectedPolygon,
    setSelectedPolygon,
    
  } = useDataProvider();
  
  const mapRef = useRef(null);
  
  return (
    <div className="w-full h-full relative">
      <MapContainer
        ref={mapRef}
        center={[9.07481143758369, 7.493501807312384]}
        zoom={7}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={baseMap}
        />
       
        {gridFrame?.map((geojsonFile, index) => {
          const { geometry, properties, type } = geojsonFile;
          const data = {
            type: "FeatureCollection",
            features: [
              {
                geometry: { ...geometry },
                properties: { ...properties },
                type: "Feature",
              },
            ],
          };
          return (
            <GeoJSON
              key={index}
              data={data}
              eventHandlers={{
                click: (e) => {
                  setSelectedPolygon(e.layer.feature.properties.FID);
                },
              }}
             
              pathOptions={{
                color:
                  geojsonFile.assigned_users.length > 0
                    ? "blue"
                    : checkPolygon(geojsonFile?.id)
                    ? "black"
                    : "white",
  
                fillColor:
                  geojsonFile.assigned_users.length > 0
                    ? "gray"
                    : checkPolygon(geojsonFile?.id)
                    ? "purple"
                    : "red",
              }}

      
            >
              <Popup>
                <div className="P-4 flex flex-col space-y-3">
                  <h3 className="text-xl font-semibold">
                    FID: {selectedPolygon}
                  </h3>

                  <div className="text-[17px]">
                  <div>
              {geojsonFile?.assigned_users?.length > 0 ? 
              (
              geojsonFile?.assigned_users.map((user, index) => {
                const userDetail = Users.filter((d) => d.id === user)
                return(
                  <div
                  key={user}
                  className="border-b p-3 flex justify-between pb-2 border-black "
                >
                  <h4 className="text-xl">{userDetail[0].fullname}</h4>

                </div>
                )
              })
            ) : (
              <div className="py-4">
                There are no users assigned to this  now!
              </div>
            )}
            </div>
          
                  </div>
                </div>
              </Popup>
            </GeoJSON>
          );
        })}
        <ChangeZoomLevel firstcords={firstcords} />
      </MapContainer>
      <ChangeBaseMap />
    <Legend />

    </div>
  );
};

export default MapPage;
