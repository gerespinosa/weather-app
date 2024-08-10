import { useContext } from "react";
import { SettingsContext } from "../../../context/SettingsContext";

const key = '8405cd09df99445a93402324242607';

export const getDailyForecast = async (location, scale, index) => {
    try {
        const baseUrl = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${location}&aqi=yes&days=8`;
        const res = await fetch(baseUrl);
        const forecastData = await res.json();

        const lat = forecastData?.location?.lat;
        const lon = forecastData?.location?.lon;

        const forecastUrl = scale === 'Celsius'
            ? `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=daaad643506e959793389b8227618ec1&units=metric`
            : `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=daaad643506e959793389b8227618ec1&units=imperial`;

        const forecastRes = await fetch(forecastUrl);
        const adaptedForecastData = await forecastRes.json();
        const filteredData = await adaptedForecastData.list.filter(item => item.dt_txt.includes("12:00:00"));
        // console.log(filteredData)
        return filteredData

    } catch (error) {
        console.error('Error getting weather:', error);
        return null;
    }
};