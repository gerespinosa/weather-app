import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import { getForecast } from '../../ForecastPage/services/forecastService'

export const DailyWeather = () => {

    const [forecast, setForecast] = useState({})

    const {place, index} = useParams()

    useEffect(() => {
        if(place){
            getForecast(place)
            .then(forecastObtained => {
                setForecast(forecastObtained.forecast.forecastday.slice(1)) 
            })
            .catch(error => {
                console.log(error)
            })
        }
    },[])


  return (
    <div className='text-white flex flex-col'>
        <div className='flex justify-between items-center'>
            <h2 className='text-2xl'>{forecast[index]?.day?.condition.text}</h2>
            <img src={forecast[index]?.day?.condition.icon} alt="weather icon" />
        </div>
        <h3>{forecast[index]?.date}</h3>
        <div className='flex flex-col h-fit'>
            <div className='flex justify-between items-center min-h-12'>
                <h4>Min Temperature: </h4>
                <h4 className='font-thin'>{forecast[index]?.day?.mintemp_c}°C</h4>
            </div>
            <hr className='opacity-20' />
            <div className='flex justify-between items-center min-h-12'>
                <h4>Max Temperature: </h4>
                <h4 className='font-thin'>{forecast[index]?.day?.maxtemp_c}°C</h4>
            </div>
            <hr className='opacity-20' />
            <div className='flex justify-between items-center min-h-12'>
                <h4>Max Wind Speed: </h4>
                <h4 className='font-thin'>{forecast[index]?.day?.maxwind_kph} km/h</h4>
            </div>
            <hr className='opacity-20' />
            <div className='flex justify-between items-center min-h-12'>
                <h4>Total Precipitations: </h4>
                <h4 className='font-thin'>{forecast[index]?.day?.totalprecip_mm} mm</h4>
            </div>
            <hr className='opacity-20' />
            <div className='flex justify-between items-center min-h-12'>
                <h4>Humidity: </h4>
                <h4 className='font-thin'>{forecast[index]?.day?.avghumidity}%</h4>
            </div>
            <hr className='opacity-20' />
            <div className='flex justify-between items-center min-h-12'>
                <h4>UV: </h4>
                <h4 className='font-thin'>{forecast[index]?.day?.uv}</h4>
            </div>
            <hr className='opacity-20' />
            <div className='flex justify-between items-center min-h-12'>
                <h4>Moon Phase: </h4>
                <h4 className='font-thin'>{forecast[index]?.astro?.moon_phase}</h4>
            </div>
            <hr className='opacity-20' />
            <div className='flex justify-between items-center min-h-12'>
                <h4>Moonrise/Moonset: </h4>
                <h4 className='font-thin text-sm'>{forecast[index]?.astro?.moonrise} / {forecast[index]?.astro?.moonset}</h4>
            </div>
            <hr className='opacity-20' />
            <div className='flex justify-between items-center min-h-12'>
                <h4>Sunrise/Sunset: </h4>
                <h4 className='font-thin text-sm'>{forecast[index]?.astro?.sunrise} / {forecast[index]?.astro?.sunset}</h4>
            </div>
        </div>
</div>
  )
}