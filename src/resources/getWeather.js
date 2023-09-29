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
    const hourly = weather.hourly;
    
}