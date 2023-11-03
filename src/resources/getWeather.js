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

export const getDailyWeather = (weather) => {
    const dailyWeather = [];
    const daily = weather.daily;
    daily.forEach(currentDay => {
        const date = new Date(currentDay.dt * 1000).toLocaleDateString();
        const sunrise = new Date(currentDay.sunrise * 1000).toLocaleTimeString();
        const sunset = new Date(currentDay.sunset * 1000).toLocaleTimeString();
        const moonrise = new Date(currentDay.moonrise * 1000).toLocaleTimeString();
        const moonset = new Date(currentDay.moonset * 1000).toLocaleTimeString();
        const currentDayObj = {
            date,
            sunrise,
            sunset,
            moonrise,
            moonset,
            moonPhase: currentDay.moon_phase,
            temp: {
                day: Math.round(currentDay.temp.day),
                night: Math.round(currentDay.temp.night),
                morning: Math.round(currentDay.temp.morn),
                evening: Math.round(currentDay.temp.eve),
                min: Math.round(currentDay.temp.min),
                max: Math.round(currentDay.temp.max),
            },
            feelsLike: {
                day: Math.round(currentDay.feels_like.day),
                night:Math.round( currentDay.feels_like.night),
                evening: Math.round(currentDay.feels_like.eve),
                morning: Math.round(currentDay.feels_like.morn),
            },
            pressure: currentDay.pressure,
            humidity: currentDay.humidity,
            dewPoint: currentDay.dew_point,
            windSpeed: currentDay.wind_speed,
            windDirection: currentDay.wind_deg,
            windGust: currentDay.wind_gust,
            weather: {
                main: currentDay.weather[0].main,
                description: currentDay.weather[0].description,
                icon: currentDay.weather[0].icon,
            },
            clouds: currentDay.clouds,
            chancePrecipitaion: currentDay.pop,
            uvIndex: currentDay.uvi,
        }
        dailyWeather.push(currentDayObj)
    })
    return dailyWeather;
}

export const getHourlyWeather = (weather) => {
    const hourlyWeather = [];
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