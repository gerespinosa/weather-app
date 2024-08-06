import React, { createContext, useState } from 'react';

export const ScaleContext = createContext();

export const ScaleProvider = ({ children }) => {
  const [scale, setScale] = useState('Celsius');

  return (
    <ScaleContext.Provider value={{ scale, setScale }}>
      {children}
    </ScaleContext.Provider>
  );
};
