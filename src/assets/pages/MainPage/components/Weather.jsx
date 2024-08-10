import React, {useState, useEffect, useContext} from 'react'

import { getWeather } from '../services/weatherService'

import { weatherAdapter } from '../../../adapters/weatherAdapter'

import { Link } from 'react-router-dom'
import { MomentOfTheDay } from '../components/MomentOfTheDay'

import { SettingsContext } from '../../../context/SettingsContext'

export const Weather = ({place, scale}) => {

    const [weather, setWeather] = useState({})
    const [weatherIcon, setWeatherIcon] = useState('./img/sunny.png')
    const {theme} = useContext(SettingsContext)

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
    <div className='flex flex-col gap-12'>
        <div>
            <h2 className=' uppercase font-arial text-sm'>{weather?.location?.name}, {weather?.location?.region} </h2>
            <MomentOfTheDay/>
        </div>
        <div className='flex flex-col items-center justify-between'>
            <img src={weatherIcon} alt="current-condition-icon"
            className='max-w-24 max-h-24 mt-2' />
            <h2 className='text-6xl uppercase '>{scale === 'Celsius' ? `${Math.round(weather?.current?.temp_c)}ºC` : `${Math.round(weather?.current?.temp_f)}ºf`}</h2>
            <h2 className='uppercase  font-arial'>{weather?.current?.condition?.text}</h2>
            <h2 className='uppercase text-xs'>{Date().toString().substring(0,21)}</h2>
        </div>
        <Link 
        place={place} 
        to={`/${place}`} 
        className={`flex justify-center mt-4 items-center gap-2 ${theme === 'Dark' ? 'text-orange-500' : 'text-purple-500'}`}>Next days<i className="fa-solid fa-circle-arrow-right"></i></Link>
    </div>
  )
}
  