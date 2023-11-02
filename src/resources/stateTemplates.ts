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

const dailyForecastObj = [{
    date: '',
    sunrise: '',
    sunset: '',
    moonrise: '',
    moonset: '',
    moonPhase: 0,
    summary: '',
    temp: {
        day: 0,
        night: 0,
        morning: 0,
        evening: 0,
        min: 0,
        max: 0,
    },
    feelsLike: {
        day: 0,
        night: 0,
        morning: 0,
        evening: 0,
    },
    pressure: 0,
    humidity: 0,
    dewPoint: 0,
    windSpeed: 0,
    windDirection: 0,
    windGust: 0,
    weather: {
        main: '',
        description: '',
        icon: ''
    },
    clouds: 0,
    chancePrecipitaion: 0,
    uvIndex: 0
}]

export { currentWeatherObj, hourlyWeatherObj, dailyForecastObj }