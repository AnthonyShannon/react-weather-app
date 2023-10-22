import { ReactNode } from "react"

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
        date: string,
        time: string,
        temp: number,
        feelsLike: number,
        pressure: number,
        humidity: number,
        dewPoint: number,
        visibility: number,
        windSpeed: number,
        windDirection: number,
        main: string,
        description: string,
        chancePrecipitaion: number,
        icon: string
    }[]
}

export interface CardTypes {
    children: ReactNode,
    size?: string,
}

export interface ContainerTypes {
    children: ReactNode,
    size?: string,
}

export interface ButtonTypes {
    buttonText: string,
    color?: string,
    clickFunc?: Function,
    children? : ReactNode,
}

export interface LinePlotTypes {
    width?: number,
    height?: number,
    marginTop?: number,
    marginRight?: number,
    marginBottom?:number,
    marginLeft?: number,
}