import React, {useEffect, useState} from 'react'

import { getWeather } from '../../MainPage/services/weatherService'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { SettingsContext } from '../../../context/SettingsContext'

export const HourlyTable = () => {

    const [weather, setWeather] = useState([])
    const {scale, theme} = useContext(SettingsContext)

    const {place} = useParams()

    useEffect(() => {
        if(place){
            getWeather(place)
            .then(weatherObtained => {
                const hourlyData = weatherObtained?.forecast?.forecastday[0].hour || [];
                setWeather(hourlyData); 
            })
            .catch(error => {
                console.log(error);
            });
        }
    }, [place]);
    
    useEffect(() => {
        console.log(weather);
    }, [weather]);

return (
    <div className='flex flex-col justify-center w-full h-full'>
        <h2 className='text-left font-thin text-3xl'>{place}</h2>
        <h2 className='text-left font-thin'>{weather[0]?.time?.substring(0,10)}</h2>
        <h4 className='text-left font-thin mt-6'>Forecast by hours</h4>
        <div className='flex flex-row gap-4 w-full overflow-x-auto p-4'>
            {Array.isArray(weather) && weather.map((hour, index) => (
                <div key={index} className={`flex flex-col ${theme === 'Dark' ? 'bg-black' : 'bg-white'} bg-opacity-25 p-2`}>
                    <h4 className='text-sm text-center'>{scale === 'Celsius' ? `${Math.round(hour.temp_c)}ºC` : `${Math.round(hour.temp_f)}ºF`}</h4>
                    <img src={hour.condition.icon} alt="icon-for-hourly-weather" />
                    <h4>{hour.time.substring(11)}</h4>
                </div>
            ))}
        </div>
    </div>
)
}
