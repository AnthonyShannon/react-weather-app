import React from 'react';

interface Props {
    iconCode: string
};

const WeatherIcon = ({iconCode}: Props ) => (
    <img src={`http://openweathermap.org/img/wn/${iconCode}.png`} alt='weather icon' />
)

export default WeatherIcon;