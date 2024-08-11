import React, { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { getForecast } from '../services/forecastService'
import {dateAdapter} from '../../../adapters/dateAdapter'

import { SettingsContext } from '../../../context/SettingsContext'


export const Forecast = () => {
    const [forecast, setForecast] = useState([]);
    const { scale } = useContext(SettingsContext);
    const { place } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (place) {
            getForecast(place, scale) 
                .then(forecastObtained => {
                    setForecast(forecastObtained.list);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }, [place, scale]);

  function handleNavigate(date, index) {
    navigate(`/${place}/${date}/${index}`)
  }

  const adaptedArray = forecast.filter(forecastDay =>
    forecastDay?.dt_txt?.includes("12:00:00")
  )

  return (
    <div className='flex flex-col'>
      <h4 className='text-left font-thin mt-6'>Forecast next 5 days</h4>
      {adaptedArray.map((forecastDay, index) => (
            <div key={index} onClick={() => handleNavigate(forecastDay.dt_txt, index)} className='grid grid-cols-4 min-h-20 text-center'>
                <h2 className='my-auto'>{dateAdapter(forecastDay.dt_txt)}</h2>
                <h2 className='my-auto'>{forecastDay.weather[0].description}</h2>
                <img src={`https://openweathermap.org/img/wn/${forecastDay.weather[0].icon}@2x.png`} alt="logo-weather" className='w-12 h-12 flex m-auto ' />
                <h2 className='my-auto text-2xl'>{Math.round(forecastDay.main.temp)}{scale === 'Celsius' ? 'ºC' : 'ºF'}</h2>
                <hr className='col-span-4 border-black border-opacity-45'/>    
            </div>
      ))}
    </div>
  )
}
