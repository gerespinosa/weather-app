import React, { useContext } from 'react';
import { SettingsContext } from '../../context/SettingsContext';
import { Link } from 'react-router-dom';

export const SettingsPage = () => {
  const { scale, setScale, theme, setTheme } = useContext(SettingsContext);

  const handleChange = (e) => {
    e.preventDefault();
    setScale(e.target.value);
  };

  const toggleTheme = (e) => {
    setTheme(e.target.value);
  };

  return (
    <div className={`w-screen h-screen p-4 relative flex flex-col gap-4 ${theme + 'Secondary'}`}>
      <Link to='/'><i className="fa-solid fa-circle-arrow-left"></i> Back</Link>
      <div className='flex justify-between'>
        <p>Measurement scale</p>
        <select name="scale" id="scale"
                onChange={handleChange}
                value={scale}
                className='w-1/3 bg-transparent back'>
          <option value="Celsius" className='text-black text-right'>Celsius</option>
          <option value="Fahrenheit" className='text-black text-right'>Fahrenheit</option>
        </select>
      </div>
      <div className='flex justify-between'>
        <p>Theme</p>
        <select name="theme" id="theme"
                onChange={toggleTheme}
                value={theme}
                className='w-1/3 bg-transparent back'>
          <option value="Light" className='text-black text-right'>Light</option>
          <option value="Dark" className='text-black text-right'>Dark</option>
        </select>
      </div>
    </div>
  );
};