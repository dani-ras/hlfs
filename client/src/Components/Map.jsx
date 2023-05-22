import React, { useEffect, useState } from 'react'
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import { BallMarker } from './BallMarker';

const containerStyle = {
    width: '400px',
    height: '400px'
};


function MyMap() {
    const [center, setCenter] = useState(null)


    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (location) => setCenter({
                lat: location.coords.latitude,
                lng: location.coords.longitude
            })
        )
    }, [])


    return (
        <LoadScript
            googleMapsApiKey="AIzaSyCdtGPc2gg0Wh8UWRWDGDy8ChwLNyB5DnI"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
                <BallMarker />

                <></>
            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(MyMap)