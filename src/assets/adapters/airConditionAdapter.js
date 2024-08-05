export const airConditionTextAdapter = (airCondition) => {
    switch (airCondition) {
        case 1:
            return 'Good'
            break;

        case 2:
            return 'Moderate'
            break;

        case 3:
            return 'Unhealthy for sensitive group'
            break;

        case 4:
            return 'Unhealthy'
            break;

        case 5:
            return 'Very unhealthy'
            break;

        case 6:
            return 'Hazardous'
            break;
    }
}