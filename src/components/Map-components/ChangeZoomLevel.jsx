import React from 'react'
import { useMap } from 'react-leaflet/hooks'
const ChangeZoomLevel = ({firstcords}) => {
    const map = useMap()
    
    if(firstcords.length > 0){
        // console.log(firstcords[0])
        map.setView([firstcords[1], firstcords[0]], 12)
        // map.setZoom(11)
    }
    // console.log('map center:', map.setCenter())
    return null
}

export default ChangeZoomLevel