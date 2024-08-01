export const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    try {
                        const { latitude, longitude } = position.coords;
                        const currentLocationString = `${latitude},${longitude}`;
                        const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=8405cd09df99445a93402324242607&q=${currentLocationString}&aqi=yes&days=7`);
                        const currentLocationData = await res.json();
                        const currentLocationName = currentLocationData.location.name;
                        resolve(currentLocationName);
                    } catch (error) {
                        console.log('Error getting the location name', error);
                        reject(error);
                    }
                },
                (error) => {
                    reject(error);
                }
            );
        } else {
            reject(new Error('Geolocation not supported'));
        }
    });
};