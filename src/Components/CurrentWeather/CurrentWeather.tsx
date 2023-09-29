import React from 'react';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import Card from '../Card/Card';
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
                    <span><WeatherIcon iconCode={icon} />{temp + '\u00B0F'}</span>
                    <span>{`Feels like ${feelsLike}\u00B0F. ${formattedDesc}`}.</span>
                    <span>{`Humidity: ${humidity}%`}</span>
                    <span>{`Visibility: ${visibility}m`}</span>
                </div>
            </div>
        </ Card>
    )
}

export default CurrentWeather;  