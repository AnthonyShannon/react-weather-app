import React from 'react';
import WeatherIcon from '../WeatherIcon';
import { CurrentWeatherTypes } from '../../resources/interfaces';

const CurrentWeather = ({ currentWeather }: CurrentWeatherTypes) => {
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
        // <Container>
            <div className='d-flex flex-column'>
                <span>{city}</span>
                <div className='d-flex flex-column'>
                    <span><WeatherIcon iconCode={icon} />{temp + '\u00B0F'}</span>
                    <span>{`Feels like ${feelsLike}\u00B0F. ${formattedDesc}`}.</span>
                    <span>{`Humidity: ${humidity}%`}</span>
                    <span>{`Visibility: ${visibility}m`}</span>
                </div>
            </div>
        // </ Container>
    )
}

export default CurrentWeather; 