import React, {useContext} from 'react'

import { Forecast } from './components/Forecast'
import { Link } from 'react-router-dom'

import { SettingsContext } from '../../context/SettingsContext'

export const ForecastPage = () => {

  const {scale, theme} = useContext(SettingsContext)
  
  return (
    <div className={`w-screen h-screen p-4 flex flex-col justify-center gap-12 ${theme + 'Secondary'}`}>
        <Link to='/'><i className="fa-solid fa-circle-arrow-left"></i> Back</Link>
        <Forecast scale={scale}/>
    </div>
  )
}
