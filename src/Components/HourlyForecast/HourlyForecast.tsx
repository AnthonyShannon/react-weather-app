import React from 'react';
import Card from '../Card/Card';
import { HourlyForecastTypes } from '../../resources/interfaces';

const HourlyForecast = ({ hourlyWeather }: HourlyForecastTypes) => {
    console.log(hourlyWeather);

    return (
        <>
            {hourlyWeather.map(currentHour => (
                <Card>
                    <>
                        <span>{currentHour.description}</span>
                        <span>{currentHour.date}</span>
                        <span>{currentHour.time}</span>
                    </>
                </Card>
            ))}
        </>
    )
}

export default HourlyForecast;