import React, {useContext} from 'react'

import { SettingsContext } from '../../context/SettingsContext'

import { HourlyTable } from './components/HourlyTable'
import { Link } from 'react-router-dom'

export const HourlyPage = () => {

    const {scale, theme} = useContext(SettingsContext)
    
    return (
      <div className={`w-screen min-h-svh p-4 flex flex-col justify-start gap-20 items-start bg-fixed bg-cover bg-center ${theme + 'Secondary'}`}>
              <Link to='/'><i className="fa-solid fa-circle-arrow-left"></i> Back</Link>
              <HourlyTable scale={scale} />
      </div>
  );
}
