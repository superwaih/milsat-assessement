import React, { useEffect, useState, useRef } from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Popup, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useDataProvider } from "../context/DataProvider";
import { FeatureLayer } from "react-esri-leaflet";

// ESRI API URL
const featureLayerURL =
  "https://services3.arcgis.com/od20s3ViWJZ68qsq/ArcGIS/rest/services/Nigeria_Grids/FeatureServer/0";

const MapPage = () => {
  const {
    geojsonFiles,
    checkPolygon,
    showGrid,
    baseMap,
    naijaState,
    naijaLga,
    setLoading,
    setSelectedPolygon,
  } = useDataProvider();
  const featureLayerRef = useRef();
  const mapRef = useRef(null);

  return (
    <div className="w-full h-full">
      <MapContainer
        whenCreated={(map) => {
          mapRef.current = map;
        }}
        center={[9.07481143758369, 7.493501807312384]}
        zoom={12}
      >
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
              },
            }}
            pathOptions={{
              color:
                geojsonFile.assigned_users.length > 0
                  ? "blue"
                  : checkPolygon(geojsonFile.taskid)
                  ? "black"
                  : "white",

              fillColor:
                geojsonFile.assigned_users.length > 0
                  ? "gray"
                  : checkPolygon(geojsonFile.taskid)
                  ? "purple"
                  : "red",
            }}
          >
            <Popup>
              <div className="P-4 flex flex-col space-y-3">
                <h3 className="text-xl font-semibold">
                  Task: {geojsonFile.taskid}
                </h3>
                <div className="text-[17px]">
                  {geojsonFile.assigned_users.length > 0
                    ? geojsonFile.assigned_users.map((user) => (
                        <div key={user} className="border-b pb-2 border-black ">
                          <h4 className="text-xl">{user}</h4>
                        </div>
                      ))
                    : "There are no users assigned this task now!"}
                </div>
              </div>
            </Popup>
          </GeoJSON>
        ))}
        {/* Container for showing grid data */}
        {showGrid && (
          <FeatureLayer
            url={featureLayerURL}
            ref={featureLayerRef}
            where={
              naijaLga != ""
                ? `STATE_NAME = '${naijaState}' AND LGA_NAME = '${naijaLga}' `
                : `STATE_NAME = '${naijaState}'`
            }
            eventHandlers={{
              loading: () => setLoading(true),
              click: (e) => {},
              load: () => {
                setLoading(false);
                console.log("featurelayer loaded");
              },
            }}
          />
        )}
      </MapContainer>
    </div>
  );
};

export default MapPage;
