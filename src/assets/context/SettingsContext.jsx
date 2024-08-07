import React, { createContext, useState } from 'react';

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [scale, setScale] = useState('Celsius');
  const [theme, setTheme] = useState('Dark');

  return (
    <SettingsContext.Provider value={{ scale, setScale, theme, setTheme }}>
      {children}
    </SettingsContext.Provider>
  );
};