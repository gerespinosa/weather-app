import React, {useState, useEffect} from 'react'

import { getWeather } from '../services/weatherService'

import { weatherAdapter } from '../../../adapters/weatherAdapter'

import {MomentOfTheDay} from '../components/MomentOfTheDay'

export const Weather = ({place}) => {

    const [weather, setWeather] = useState({})
    const [weatherIcon, setWeatherIcon] = useState('./src/assets/img/sunny.png')

    useEffect(() => {
        if(place){
            getWeather(place)
            .then(weatherObtained => {
                setWeather(weatherObtained) 
                setWeatherIcon(weatherAdapter(weatherObtained.current.condition.text))
            })
            .catch(error => {
                console.log(error)
            })
        }
    },[place])

  return (
    <div>
        <h2 className='text-white uppercase font-arial text-sm'>{weather?.location?.name}</h2>
        <MomentOfTheDay/>
        <div className='flex flex-col items-center'>
            <img src={weatherIcon} alt="current-condition-icon"
            className='max-w-1/2 max-h-1/2' />
            <h2 className='text-6xl uppercase text-white'>{Math.round(weather?.current?.temp_c)}°C</h2>
            <h2 className='uppercase text-white font-arial'>{weather?.current?.condition?.text}</h2>
            <h2 className='uppercase text-white text-xs'>{Date().toString().substring(0,21)}</h2>
        </div>
    </div>
  )
}
  