export function weatherAdapter(weatherText) {

    switch (weatherText) {
        case 'Sunny':
            return './src/assets/img/sunny.png'
            break;

        case 'Clear':
            return './src/assets/img/clear.png';
            break;

        case 'Partly Cloudy':
            return './src/assets/img/cloud.png'
            break;

        case 'Cloudy':
            return './src/assets/img/mostlycloudy.png'
            break;

        case 'Overcast':
            return './src/assets/img/overcast.png'
            break;

        case 'Rainy':
        case 'Moderate rain':
        case 'Heavy rain at times':
        case 'Light rain':
        case 'Moderate rain at times':
        case 'Light rain shower':
        case 'Patchy rain nearby':
        case 'Patchy light drizzle':
        case 'Light drizzle':
            return './src/assets/img/rain.png';
            break;

        case 'Mist':
        case 'Fog':
        case 'Freezing Fog':
            return './src/assets/img/fog.png';
            break;

        case 'Thundery outbreaks possible':
        case 'Patchy light rain with thunder':
        case 'Moderate or heavy rain with thunder':
            return './src/assets/img/thunder.png';
            break;

        case 'Patchy sleet possible':
        case 'Ice pellets':
        case 'Light sleet':
        case 'Moderate or heavy sleet':
        case 'Light sleet showers':
        case 'Moderate or heavy sleet showers':
        case 'Moderate or heavy showers of ice pellets':
        case 'Light showers of ice pellets':
            return './src/assets/img/sleet.png';
            break;

        case 'Patchy snow possible':
        case 'Patchy light snow':
        case 'Light snow':
        case 'Moderate snow':
        case 'Patchy heavy snow':
        case 'Snow':
        case 'Light snow showers':
        case 'Moderate or heavy snow showers':
        case 'Patchy light snow with thunder':
        case 'Moderate or heavy snow with thunder':
            return './src/assets/img/snow.png';
            break;

        case 'Patchy freezing drizzle possible':
        case 'Freezing drizzle':
        case 'Heavy freezing drizzle':
        case 'Light freezing rain':
        case 'Moderate or heavy freezing rain':
            return '';
            break;

        case 'Blowing snow':
        case 'Blizzard':
            return './src/assets/img/blizzard.png';
            break;

        case 'Torrential rain shower':
        case 'Moderate or heavy rain shower':
        case 'Heavy rain':
            return './src/assets/img/heavyrain.png';
            break;
    }
}
