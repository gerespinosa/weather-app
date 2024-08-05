import { BrowserRouter, Routes, Route } from "react-router-dom"

import { MainPage } from "./assets/pages/MainPage/MainPage"
import { ForecastPage } from "./assets/pages/ForecastPage/ForecastPage"
import { DailyPage } from "./assets/pages/DailyPage/DailyPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<MainPage/>}></Route>
        <Route path='/:place' element={<ForecastPage/>}></Route>
        <Route path='/:place/:date/:index' element={<DailyPage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
