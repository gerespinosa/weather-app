export const dateAdapter = (date) => {
    if (date) {
        const adaptedDate = Date.parse(date)
        const adaptedDateAsDate = new Date(adaptedDate)
        const adaptedDateAsUTC = adaptedDateAsDate.toUTCString()
        const weekDayString = adaptedDateAsUTC.substring(0, 3)
        return weekDayString
    } else {
        return ''
    }
}