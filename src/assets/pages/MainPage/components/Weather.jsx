import React, {useState, useEffect} from 'react'

import { getWeather } from '../services/weatherService'

export const Weather = ({place}) => {

    const [weather, setWeather] = useState({})

    useEffect(() => {
        if(place){
            getWeather(place)
            .then(weatherObtained => {
                setWeather(weatherObtained)
                console.log(weather)
            })
            .catch(error => {
                console.log(error)
            })
        }
    },[place])

  return (
    <div>
        <h1>{weather?.current?.temp_c}°C in {weather?.location?.name}</h1>
        <div className='flex bg-red-400 items-center'>
            <h1>{weather?.current?.condition?.text}</h1>
            <img src={weather?.current?.condition?.icon} alt="current-condition-icon" />
        </div>
    </div>

  )
}
