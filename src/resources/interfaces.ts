export interface CurrentWeatherTypes {
    currentWeather: {
        city: string,
        temp: number,
        feelsLike: number,
        description: string,
        windSpeed: number,
        windDirection: number,
        visibility: number,
        humidity: number,
        icon: string,
    }
}

export interface HourlyForecastTypes {
    hourlyWeather: {
        dateTime: number,
        temp: number,
        feelsLike: number,
        pressure: number,
        humidity: number,
        dewPoint: number,
        visibility: number,
        windSpeed: number,
        windDirection: number,
        description: string, 
        icon: string
    }[]
}

export interface ContainerTypes {
    containerProps: {
        // size: string,
        children?: JSX.Element,
    }
}