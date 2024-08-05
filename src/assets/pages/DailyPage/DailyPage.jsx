import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import { getForecast } from '../ForecastPage/services/forecastService'

export const DailyPage = () => {

    const [forecast, setForecast] = useState({})

    const {place, date, index} = useParams()

    useEffect(() => {
        if(place){
            getForecast(place)
            .then(forecastObtained => {
                setForecast(forecastObtained.forecast.forecastday.slice(1)) 
                console.log(forecast)
            })
            .catch(error => {
                console.log(error)
            })
        }
    },[])


  return (
    <div>{forecast[index]?.date}</div>
  )
}
