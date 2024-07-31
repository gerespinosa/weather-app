import { useState, useEffect } from "react";

export const useWeather = (place) => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            if (!place) return;

            try {
                const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=8405cd09df99445a93402324242607&q=${place}&aqi=yes&days=7`);
                const fetchedWeather = await res.json();
                setWeather(fetchedWeather);
                console.log(weather)
            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        };

        fetchWeather();
    }, [place]);

    return weather;
};