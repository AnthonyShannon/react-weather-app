import React from 'react';

interface Props {
    currentWeather: {
        city: string,
        temp: number,
        feelsLike: number,
        description: string,
        windSpeed: number,
        windDirection: string,
        visibility: number, 
        dewPoint: number
    }
}

const HourlyForecast: React.FC<Props> = ({currentWeather}) => {
    return (
        <>
        </>
    )
}

export default HourlyForecast;