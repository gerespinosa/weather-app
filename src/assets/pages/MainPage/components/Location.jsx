import React, {useEffect, useState} from 'react'

import { getCurrentLocation } from '../services/locationService'

export const Location = ({onPlaceChange}) => {

    const [currentLocation, setCurrentLocation] = useState('')

    useEffect(() => {
        getCurrentLocation()
        .then(locationName => {
            setCurrentLocation(locationName)
            onPlaceChange(locationName)
        })
        .catch((error) => console.log('Error getting location', error))
      }, [onPlaceChange])

    //   const handleSubmit = () => {
        
    //   }
    

  return (
    <div>
        <h1>{currentLocation}</h1>
        {/* <form onSubmit={handleSubmit}></form> */}
    </div>
  )
}
