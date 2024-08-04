export const getMomentOfTheDay = () => {
    const hours = new Date().getHours()

    const formatNumber = (num) => (num < 10 ? `0${num}` : num)

    if (hours > 6 && hours <= 12) {
        return 'Good Morning'
    } else if (hours > 12 && hours <= 16) {
        return 'Good Afternoon'
    } else if (hours > 16 && hours <= 22) {
        return 'Good Evening'
    } return 'Good Night'
}