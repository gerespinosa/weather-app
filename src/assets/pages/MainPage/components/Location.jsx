import React, { useEffect, useState, useContext} from 'react';
import { getCurrentLocation } from '../services/locationService';
import { SettingsContext } from '../../../context/SettingsContext';

export const Location = ({ onPlaceChange }) => {
  const [currentLocation, setCurrentLocation] = useState('');
  const [searchedLocation, setSearchedLocation] = useState([]);
  const {theme} = useContext(SettingsContext)

  useEffect(() => {
    let storedLocation = sessionStorage.getItem('storedLocation')
    if(!storedLocation){
      getCurrentLocation()
      .then(locationName => {
        setCurrentLocation(locationName);
        onPlaceChange(locationName);
      })
      .catch(error => console.log('Error getting location', error));
    }else{
      setCurrentLocation(storedLocation)
      onPlaceChange(storedLocation)
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onPlaceChange(currentLocation); 
    sessionStorage.setItem('storedLocation', currentLocation)
  };

  const handleChange = async (e) => {
    const query = e.target.value;
    setCurrentLocation(query);
      

    if (query.length > 0) {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/search.json?key=8405cd09df99445a93402324242607&q=${query}`
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
          className={`bg-transparent placeholder-opacity-65 font-thin w-2/3 ${theme === 'Dark' ? 'placeholder-white' : 'placeholder-black'}`}
        />
        <datalist id="location-options">
          {searchedLocation.map((location, index) => (
            <option key={index} value={`${location.name}, ${location.region}`} />
          ))}
        </datalist>
        <button type="submit" className="block md:hidden"><i className="fa-solid fa-location-dot"></i> Set</button>
      </form>
      
    </div>
  );
};
