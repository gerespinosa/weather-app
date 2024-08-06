import React, { useEffect, useState } from 'react';
import { getCurrentLocation } from '../services/locationService';

export const Location = ({ onPlaceChange }) => {
  const [currentLocation, setCurrentLocation] = useState('');
  const [searchedLocation, setSearchedLocation] = useState([]);

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

  const handleChange = async (e) => {
    const query = e.target.value;
    setCurrentLocation(query);

    if (query.length > 0) {
      try {
        const response = await fetch(
          `http://api.weatherapi.com/v1/search.json?key=8405cd09df99445a93402324242607&q=${query}`
        );
        const data = await response.json();
        setSearchedLocation(data);
      } catch (error) {
        console.log('Error fetching location data', error);
      }
    } else {
      setSearchedLocation([]);
    }
  };

  return (
    <div className='flex'>
      <form onSubmit={handleSubmit} className='flex'>
        <input
          type="text"
          placeholder="Enter location..."
          onChange={handleChange} 
          autoComplete='off'
          list='location-options'
          className='bg-transparent placeholder-white text-white placeholder-opacity-45 font-thin w-2/3'
        />
        <datalist id="location-options">
          {searchedLocation.map((location, index) => (
            <option key={index} value={`${location.name}, ${location.region}`} />
          ))}
        </datalist>
        <button type="submit" className="block md:hidden"><i className="fa-solid fa-location-dot text-white"></i></button>
      </form>
      
    </div>
  );
};
