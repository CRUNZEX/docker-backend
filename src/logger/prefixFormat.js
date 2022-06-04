const formatDate = (input = 0) => {
    return input > 9 ? String(input) : `0${input}`
}

module.exports = (str = '') => {
    const date = new Date()
    return `${formatDate(date.getHours())}:${formatDate(date.getMinutes())}:${formatDate(
        date.getSeconds(),
    )} > ${str}`
}
