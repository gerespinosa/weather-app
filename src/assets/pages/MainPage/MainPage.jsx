import React, {useState, useEffect} from 'react'

import { Location } from './components/Location'
import { Weather } from './components/Weather'

export const MainPage = () => {

    const [place, setPlace] = useState('')

    const handlePlaceChange = (newPlace) => {
        setPlace(newPlace)
    }

  return (
    <div>
        <Location onPlaceChange={handlePlaceChange}/>
        <Weather place={place} />
    </div>
  )
}
