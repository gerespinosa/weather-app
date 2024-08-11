import React, {useContext} from 'react'

import { Link } from 'react-router-dom'
import { DailyWeather } from './components/DailyWeather'
import { SettingsContext } from '../../context/SettingsContext'

export const DailyPage = () => {

  const {scale, theme} = useContext(SettingsContext)

  return (
    <div className={`w-screen h-screen p-4 flex flex-col justify-center gap-12 ${theme + 'Secondary'}`}>
        <Link to="/"><i className="fa-solid fa-circle-arrow-left"></i> Back</Link>
        <DailyWeather scale={scale}/>
    </div>
  )
}
