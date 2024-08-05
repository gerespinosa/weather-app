import React from 'react'

import { DailyWeather } from './components/DailyWeather'

export const DailyPage = () => {


  return (
    <div className="w-screen h-screen px-4 py-4 flex flex-col justify-between"
    style={{ backgroundImage: 'linear-gradient(to bottom, #5726E3, #593778, #000000)' }}>
        <DailyWeather/>
    </div>
  )
}
