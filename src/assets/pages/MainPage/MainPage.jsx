import React, {useState, useContext} from 'react'

import { Location } from './components/Location'
import { Weather } from './components/Weather'
import { BottomTable } from './components/BottomTable'
import { Link } from 'react-router-dom'

import { ScaleContext } from '../../context/ScaleContext'

export const MainPage = () => {

    const [place, setPlace] = useState('')
    const {scale} = useContext(ScaleContext)

    const handlePlaceChange = (newPlace) => {
        setPlace(newPlace)
    }

  return (
    <div className="w-screen h-screen p-4 relative flex flex-col gap-4"
            style={{ backgroundImage: 'linear-gradient(to bottom, #e88d25, #a2a2d0, #191970, #000000)' }}>
        <div className='flex justify-between'>
        <Location onPlaceChange={handlePlaceChange}/>        
        <Link to={'/settings' }><i className="fa-solid fa-ellipsis text-2xl text-white flex justify-end"></i></Link>
        </div>
        <Weather place={place} scale={scale} />
        <BottomTable place={place}/>
    </div>
  )
}
