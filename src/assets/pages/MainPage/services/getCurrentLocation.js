import { useEffect, useState } from 'react';

export const useCurrentLocation = () => {
    const [currentLocation, setCurrentLocation] = useState('');

    useEffect(() => {
        const fetchCurrentLocation = async () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    async (position) => {
                        try {
                            const { latitude, longitude } = position.coords;
                            const positionString = `${latitude},${longitude}`;
                            const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=8405cd09df99445a93402324242607&q=${positionString}&aqi=yes&days=7`);
                            const data = await response.json();
                            const locationName = data?.location?.name;
                            setCurrentLocation(locationName);
                            console.log(currentLocation)
                        } catch (error) {
                            console.error('Error fetching location data:', error);
                        }
                    },
                    (error) => {
                        console.error('Unable to retrieve current location', error);
                    }
                );
            } else {
                console.error('Geolocation is not supported by this browser.');
            }
        };

        fetchCurrentLocation();
    }, []);

    return currentLocation;
};

