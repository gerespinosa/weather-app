const key = '8405cd09df99445a93402324242607'

export const getForecast = async (location) => {
    try {
        const baseUrl = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${location}&aqi=yes&days=8`;
        const res = await fetch(baseUrl);
        const forecastData = await res.json();
        return forecastData

    } catch (error) {
        console.error('Error getting weather:', error);
        return null
    }
};