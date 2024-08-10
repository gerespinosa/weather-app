import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getDailyForecast } from '../../DailyPage/services/dailyForecastService';
import { SettingsContext } from '../../../context/SettingsContext';

export const DailyWeather = () => {
    const [forecast, setForecast] = useState(null);
    const { place, index } = useParams();
    const { scale } = useContext(SettingsContext);

    useEffect(() => {
        if (place) {
            getDailyForecast(place, scale, index)
                .then(forecastObtained => {
                    setForecast(forecastObtained[index]);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }, [place, scale, index]);

    if (!forecast) {
        return <div>Loading...</div>;
    }

    return (
        <div className='flex flex-col'>
            <div className='flex justify-between items-center my-16'>
                <h2 className='text-2xl'>{forecast?.dt_txt?.substring(0, 10)}</h2>
                <img src={`https://openweathermap.org/img/wn/${forecast?.weather?.[0]?.icon}@2x.png`} alt="weather icon" />
            </div>
            <div className='flex flex-col h-fit'>
                <div className='flex justify-between items-center min-h-12'>
                    <h4>Min Temperature: </h4>
                    <h4 className='font-thin'>
                        {scale === 'Celsius' ? `${Math.round(forecast?.main?.temp_min)}°C` : `${Math.round(forecast?.main?.temp_min)}°F`}
                    </h4>
                </div>
                <hr className='opacity-20' />
                <div className='flex justify-between items-center min-h-12'>
                    <h4>Max Temperature: </h4>
                    <h4 className='font-thin'>
                        {scale === 'Celsius' ? `${Math.round(forecast?.main?.temp_max)}°C` : `${Math.round(forecast?.main?.temp_max)}°F`}
                    </h4>
                </div>
                <hr className='opacity-20' />
                <div className='flex justify-between items-center min-h-12'>
                    <h4>Max Wind Speed: </h4>
                    <h4 className='font-thin'>{forecast?.wind?.speed} km/h</h4>
                </div>
                <hr className='opacity-20' />
                <div className='flex justify-between items-center min-h-12'>
                    <h4>Humidity: </h4>
                    <h4 className='font-thin'>{forecast?.main?.humidity}%</h4>
                </div>
                <hr className='opacity-20' />
            </div>
        </div>
    );
};
