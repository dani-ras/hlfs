import { MarkerF } from '@react-google-maps/api'
import React, { useEffect, useState } from 'react'
import ballpng from '../assets/ball.png'

export const BallMarker = () => {
    const [marker, setMarker] = useState(null)


    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (location) => setMarker({
                lat: location.coords.latitude,
                lng: location.coords.longitude
            })
        )
    }, [])


    return (
        <MarkerF
            position={marker}
        // icon={{url:ballpng,}}
        />)
}
