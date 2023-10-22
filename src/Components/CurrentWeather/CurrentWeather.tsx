import React from 'react';
import { WeatherIcon, Card } from '../index'
import { CurrentWeatherTypes } from '../../resources/interfaces';
import './CurrentWeather.scss'

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
        <Card>
            <div className='flex-column'>
                <span>{city}</span>
                <div className='flex-column'>
                    <div id='icon-and-temp'>
                        <WeatherIcon iconCode={icon} />
                        <span>{Math.round(temp) + '\u00B0F'}</span>
                    </div>
                    <span>{`Feels like ${Math.round(feelsLike)}\u00B0F. ${formattedDesc}`}.</span>
                    <span>{`Humidity: ${humidity}%`}</span>
                    <span>{`Visibility: ${visibility}m`}</span>
                </div>
            </div>
        </ Card>
    )
}

export default CurrentWeather;  