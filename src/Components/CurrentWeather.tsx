import React from 'react';
import WeatherIcon from './WeatherIcon';
import { Container } from 'reactstrap';

interface CurrentWeather {
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


const CurrentWeather = ({ currentWeather }: CurrentWeather) => {
    const { city,
        temp,
        feelsLike,
        description,
        windSpeed,
        windDirection,
        visibility,
        humidity,
        icon } = currentWeather;

        const formattedDesc = description.charAt(0).toUpperCase() + description.slice(1);

    return (
        <Container>
            <div className='d-flex flex-column'>
                <span>{city}</span>
                <div className='d-flex flex-column'>
                    <span><WeatherIcon iconCode={icon} />{temp + '\u00B0F'}</span>
                    <span>{`Feels like ${feelsLike}\u00B0F. ${formattedDesc}`}.</span>
                    <span>{`Humidity: ${humidity}%`}</span>
                    <span>{`Visibility: ${visibility}m`}</span>
                </div>
            </div>
        </ Container>
    )
}

export default CurrentWeather;