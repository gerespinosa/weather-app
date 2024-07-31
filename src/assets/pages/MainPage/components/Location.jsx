import React, { useState, useEffect } from 'react';
import { useCurrentLocation } from '../services/getCurrentLocation';
import { useWeather } from '../services/getWeather';

export const Location = () => {
    const [newLocation, setNewLocation] = useState('');
    const [place, setPlace] = useState('');
    const currentLocation = useCurrentLocation();
    const weather = useWeather(place || currentLocation);

    const handleInputChange = (e) => {
        setNewLocation(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newLocation) {
            setPlace(newLocation);
        }
    };

    return (
        <div>
            <h1 className='bg-red-400'>{currentLocation ? currentLocation : 'loading...'}</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter new location..."
                    value={newLocation}
                    onChange={handleInputChange}
                />
                <button type="submit">Click Here!</button>
            </form>
            <h1>The Best Place Is: {place ? place : currentLocation}</h1>
            {weather && (
                <div>
                    <h2>Weather in {place || currentLocation}:</h2>
                    <p>Temperature: {weather.current.temp_c}°C</p>
                    <p>Condition: {weather.current.condition.text}</p>
                </div>
            )}
        </div>
    );
};

