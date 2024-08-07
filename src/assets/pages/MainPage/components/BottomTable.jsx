import React, {useState, useEffect} from 'react'

import { getWeather } from '../services/weatherService'

import { airConditionTextAdapter } from '../../../adapters/airConditionAdapter'

export const BottomTable = ({place}) => {

    const [weather, setWeather] = useState({})

    useEffect(() => {
        if(place){
            getWeather(place)
            .then(weatherObtained => {
                setWeather(weatherObtained) 

            })
            .catch(error => {
                console.log(error)
            })
        }
    },[place])

  return (
    <div className='flex flex-col gap-2'>
        <div className='flex justify-between'>
            <div className='flex justify-between gap-1 items-center'>
                <img src="https://cdn-icons-png.flaticon.com/512/1146/1146885.png" className='w-8 h-8' alt="sunrise-icon" />
                <div className='flex flex-col'>
                    <p className='font-thin text-xs'>Sunrise</p>
                    <h3 className='lowercase'>{weather?.forecast?.forecastday[0]?.astro?.sunrise}</h3>    
                </div>
            </div>
            <div className='flex justify-between gap-1 items-center'>
                <img src="https://cdn0.iconfinder.com/data/icons/weather-ii-1/64/moonrise-moonset-sea-low-512.png" className='w-8 h-8' alt="sunrise-icon" />
                <div className='flex flex-col'>
                    <p className='font-thin text-xs text-right'>Sunset</p>
                    <h3 className='lowercase'>{weather?.forecast?.forecastday[0]?.astro?.sunset}</h3>    
                </div>
            </div>
        </div>
        <hr className='border-gray-800'/>
        <div className='flex justify-between'>
            <div className='flex flex-col'>
                <p className='font-thin text-xs'>Air Quality</p>
                <div className='flex gap-2'>
                    <h3>{weather?.current?.air_quality?.['us-epa-index']}</h3>
                    <h3>{airConditionTextAdapter(weather?.current?.air_quality?.['us-epa-index'])}</h3>    
                </div>
            </div>
            <div className='flex flex-col text-right'>
                <p className='font-thin text-xs'>Humidity</p>
                <h3>{weather?.current?.humidity}%</h3>
            </div>
        </div>
        <hr className='border-gray-800'/>
        <div className='flex justify-between'>
            <div className='flex flex-col'>
                <p className='font-thin text-xs'>Precipitation</p>
                <h3>{weather?.forecast?.forecastday[0]?.day?.daily_chance_of_rain}%</h3>
            </div>
            <div className='flex flex-col '>
                <p className='font-thin text-xs'>Wind Speed</p>
                <h3>{weather?.current?.wind_kph} km/h</h3>
            </div>  
        </div>
    </div>
  )
}
