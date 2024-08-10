import React, { useState, useContext } from 'react';
import { Location } from './components/Location';
import { Weather } from './components/Weather';
import { BottomTable } from './components/BottomTable';
import { Link } from 'react-router-dom';
import { SettingsContext } from '../../context/SettingsContext';

export const MainPage = () => {
  const [place, setPlace] = useState('');
  const { scale, theme } = useContext(SettingsContext);

  const handlePlaceChange = (newPlace) => {
    setPlace(newPlace);
  };

  return (
    <div className={`w-full h-full overflow-hidden p-4 gap-16 relative flex flex-col justify-center ${theme}`}>
      <div className='flex justify-between'>
        <Location onPlaceChange={handlePlaceChange} />
        <Link to={'/settings'}><i className="fa-solid fa-ellipsis text-2xl flex justify-end"></i></Link>
      </div>
      <Weather place={place} scale={scale} />
      <BottomTable place={place} />
    </div>
  );
};


