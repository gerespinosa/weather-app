import React, {useState} from 'react'

import { Location } from './components/Location'
import { Weather } from './components/Weather'
import { BottomTable } from './components/BottomTable'

export const MainPage = () => {

    const [place, setPlace] = useState('')

    const handlePlaceChange = (newPlace) => {
        setPlace(newPlace)
    }

  return (
    <div className="w-screen h-screen p-4 relative flex flex-col gap-4"
            style={{ backgroundImage: 'linear-gradient(to bottom, #e88d25, #a2a2d0, #191970, #000000)' }}>
        <Location onPlaceChange={handlePlaceChange}/>
        <Weather place={place} />
        <BottomTable place={place}/>
    </div>
  )
}
