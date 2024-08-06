import React, {useContext} from 'react'

import { Link } from 'react-router-dom'
import { DailyWeather } from './components/DailyWeather'
import { ScaleContext } from '../../context/ScaleContext'

export const DailyPage = () => {

  const {scale} = useContext(ScaleContext)

  return (
    <div className="w-screen h-screen px-4 py-4 flex flex-col justify-around"
    style={{ backgroundImage: 'linear-gradient(to bottom, #5726E3, #593778, #000000)' }}>
        <Link to="/" className='text-white'><i className="fa-solid fa-circle-arrow-left"></i> Back</Link>
        <DailyWeather scale={scale}/>
    </div>
  )
}
