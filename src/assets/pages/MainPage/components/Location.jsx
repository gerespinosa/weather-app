import React, { useEffect, useState } from 'react';
import { getCurrentLocation } from '../services/locationService';

export const Location = ({ onPlaceChange }) => {
  const [currentLocation, setCurrentLocation] = useState('');

  useEffect(() => {
    getCurrentLocation()
      .then(locationName => {
        setCurrentLocation(locationName);
        onPlaceChange(locationName);
      })
      .catch(error => console.log('Error getting location', error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onPlaceChange(currentLocation); 
  };

  const handleChange = (e) => {
    setCurrentLocation(e.target.value); 
  };

  return (
    <div className='flex justify-center'>
      <form onSubmit={handleSubmit} className='flex justify-center'>
        <input
          type="text"
          placeholder="Enter location..."
          onChange={handleChange} 
          className='bg-transparent placeholder-white text-white placeholder-opacity-45 font-bold w-2/3'
        />
      </form>
    </div>
  );
};
