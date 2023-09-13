import React from 'react';

interface Prop {
    iconCode: string
};

const WeatherIcon = ({iconCode}: Prop ) => (
    <img src={`http://openweathermap.org/img/wn/${iconCode}.png`} alt='weather icon' />
)

export default WeatherIcon;