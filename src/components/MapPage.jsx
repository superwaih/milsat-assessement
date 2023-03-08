import React, { useEffect, useState, useRef } from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Popup, GeoJSON, Polygon} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useDataProvider } from "../context/DataProvider";
import axios from "axios";

import ChangeZoomLevel from "./Map-components/ChangeZoomLevel";
// ESRI API URL
const featureLayerURL =
  "https://services3.arcgis.com/od20s3ViWJZ68qsq/ArcGIS/rest/services/Nigeria_Grids/FeatureServer/0";

const MapPage = () => {
 
  const {
    geojsonFiles,
    checkPolygon,
    firstcords,
    gridFrame,
    baseMap,
    selectedPolygon,
    setSelectedPolygon,
    
  } = useDataProvider();
  
  const mapRef = useRef(null);
  const [dataId, setDataId] = useState()
  
  return (
    <div className="w-full h-full">
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
                  setDataId(index);
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
                  <div className="text-[17px]"></div>
                </div>
              </Popup>
            </GeoJSON>
          );
        })}
        <ChangeZoomLevel firstcords={firstcords} />
      </MapContainer>
    </div>
  );
};

export default MapPage;
