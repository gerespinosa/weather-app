import React, {useState, useEffect} from 'react'

import { Location } from './components/Location'
import { Weather } from './components/Weather'

export const MainPage = () => {

    const [place, setPlace] = useState('')

    const handlePlaceChange = (newPlace) => {
        setPlace(newPlace)
    }

  return (
    <div className="w-screen h-screen px-4 py-16 relative flex flex-col gap-8"
            style={{ backgroundImage: 'linear-gradient(to bottom, #e88d25, #a2a2d0, #191970, #000000)' }}>
        <Location onPlaceChange={handlePlaceChange}/>
        <Weather place={place} />
    </div>
  )
}
