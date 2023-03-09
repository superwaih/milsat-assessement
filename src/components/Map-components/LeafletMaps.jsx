import React, { useEffect, useState, useRef } from "react";
import { useMap } from 'react-leaflet/hooks'
import L from "leaflet"
import { useDataProvider } from '../../context/DataProvider';
import { FeatureLayer } from "react-esri-leaflet";
import bbox from '@turf/bbox';
import { request } from "@esri/arcgis-rest-request";

const featureLayerURL =
  "https://services3.arcgis.com/od20s3ViWJZ68qsq/ArcGIS/rest/services/Nigeria_Grids/FeatureServer/0";

function LeafletMaps(){
  const {
    
    selectedStateForm,
    selectedLgaForm,
    setLoading,
    
  } = useDataProvider();
  const [gridData, setGridData] = useState([])
  const GET_DATA = (state, lga) => {
    if(state !== "" && lga != ""){
      const URL =`${featureLayerURL}?WHERE=STATE_NAME=${state} AND LGA_NAME=${lga}&outFields=*&f=geojson&token=`
      console.log(URL)
      request(URL).then((response) => {
        setGridData(response); // WebMap JSON
      });
    }
  };
  useEffect(() => {
    GET_DATA(selectedStateForm,selectedStateForm)
   
  }, [selectedStateForm, selectedLgaForm]);

   
  if(gridData.length > 0){
    console.log(gridData)
  }
    const[gridID, setGridId] = useState()
   
    const map = useMap()
    const featureLayerRef = useRef();
 
   
    return (
        <>
       
         <FeatureLayer
           url={featureLayerURL}
           ref={featureLayerRef}
           where={
             selectedLgaForm != ""
               ? `STATE_NAME = '${selectedStateForm}' AND LGA_NAME = '${selectedStateForm}' `
               : `STATE_NAME = '${selectedStateForm}'`
           }
           eventHandlers={{
             loading: () => {
               console.log("loading")
            //    setLoading(true)
             },
             click: (layer) => {
           
              // calculate the bounding box of the feature
              const [minLng, minLat, maxLng, maxLat] = bbox(layer.layer.feature);
              // console.log()
        
              map.fitBounds(
                [
                  [minLng, minLat],
                  [maxLng, maxLat],
                ]
                // { padding: 40, duration: 1000 }
              );
            
            console.log(layer)
            setGridId(layer.layer.feature.properties.FID)
            

             },
             load: (layer) => {
                // map.setView(layer.latlng)
                
               setLoading(false);
               
             },
           }}
           
    
         />
       
        
        </>
    )
}

export default LeafletMaps