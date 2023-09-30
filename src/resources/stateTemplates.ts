const currentWeatherObj = {
    city: '',
    temp: 0,
    feelsLike: 0,
    description: '',
    windSpeed: 0,
    windDirection: 0,
    visibility: 0,
    humidity: 0,
    icon: '',
}

const hourlyWeatherObj = [
    {
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
        temp: 0,
        feelsLike: 0,
        pressure: 0,
        humidity: 0,
        dewPoint: 0,
        visibility: 0,
        windSpeed: 0,
        windDirection: 0,
        description: '',
        main: '',
        chancePrecipitaion: 0,
        icon: ''
    }]

export { currentWeatherObj, hourlyWeatherObj}