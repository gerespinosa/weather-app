import { BrowserRouter, Routes, Route } from "react-router-dom"

import { MainPage } from "./assets/pages/MainPage/MainPage"
import { DayPage } from "./assets/pages/ForecastPage/ForecastPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<MainPage/>}></Route>
        <Route path='/:place' element={<DayPage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
