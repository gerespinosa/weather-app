export const getWeather = async (place) => {
    if (place) {
        try {
            const res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=8405cd09df99445a93402324242607&q=${place}&aqi=yes&days=7`);
            const weatherInfo = await res.json()
            return weatherInfo
        } catch (error) {
            console.log(error)
        }
    } else {
        console.log('Impossible to fetch')
    }
}
