import { Card, WeatherIcon } from '../index';
import { HourlyForecastTypes } from '../../resources/interfaces';
import './HourlyForecast.scss'

const HourlyForecast = ({ hourlyWeather }: HourlyForecastTypes) => {
    const next12hours = hourlyWeather.slice(0, 24)

    return (
        <div className='flex-column'>
            {next12hours.map(currentHour => (
                <Card>
                    <div className='hourly-weather'>
                        <WeatherIcon iconCode={currentHour.icon} />
                        <span>{currentHour.description}</span>
                        <span>{currentHour.date}</span>
                        <span>{currentHour.time}</span>
                    </div>
                </Card>
            ))}
        </div>
    )
}

export default HourlyForecast;