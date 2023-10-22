import { currentWeatherObj } from "./stateTemplates";

export const getCurrentWeather = (weather) => {
    const current = weather.current;
    const currentWeather = {
        city: "Colorado Springs",
        temp: current.temp,
        feelsLike: current.feels_like,
        description: current.weather[0].description,
        windSpeed: current.wind_speed,
        windDirection: current.wind_deg,
        visibility: current.visibility,
        humidity: current.humidity,
        icon: current.weather[0].icon
    }
    return currentWeather;
}

export const getHourlyWeather = (weather) => {
    const hourlyWeather = []
    const hourly = weather.hourly;
    hourly.forEach(currentHour => {
        const date = new Date(currentHour.dt * 1000).toLocaleDateString();
        const time = new Date(currentHour.dt * 1000).toLocaleTimeString();
        const currentHourObj = {
            date: date,
            time: time,
            temp: currentHour.temp,
            feelsLike: currentHour.feels_like,
            pressure: currentHour.pressure,
            humidity: currentHour.humidity,
            dewPoint: currentHour.dew_point,
            visibility: currentHour.visibility,
            windSpeed: currentHour.wind_speed,
            windDirection: currentHour.wind_deg,
            description: currentHour.weather[0].description,
            main: currentHour.weather[0].main,
            chancePrecipitation: currentHour.pop,
            icon: currentHour.weather[0].icon,
        }
        hourlyWeather.push(currentHourObj)
    })
    return hourlyWeather;
}