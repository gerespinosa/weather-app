import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { MainPage } from './assets/pages/MainPage/MainPage';
import { ForecastPage } from './assets/pages/ForecastPage/ForecastPage';
import { DailyPage } from './assets/pages/DailyPage/DailyPage';
import { SettingsPage } from './assets/pages/SettingsPage/SettingsPage';
import { SettingsProvider } from './assets/context/SettingsContext'

function App() {
  return (
    <SettingsProvider>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<MainPage/>}></Route>
          <Route path='/:place' element={<ForecastPage/>}></Route>
          <Route path='/:place/:date/:index' element={<DailyPage/>}></Route>
          <Route path="/settings" element={<SettingsPage/>}/>
        </Routes>
      </BrowserRouter>
    </SettingsProvider>
  );
}

export default App;

