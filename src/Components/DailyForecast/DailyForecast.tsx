import { DailyForecastTypes } from '../../resources/interfaces'
import { Card, WeatherIcon } from '../../Components'
import './DailyForecast.scss'

const DailyForecast = ({dailyForecast}: DailyForecastTypes) => {
    return (
        <Card>
            {dailyForecast.map(currentDay => (
                <>
                <div className='current-day'>
                    <span>
                        {currentDay.date}
                    </span>
                    <WeatherIcon iconCode={currentDay.weather.icon} />
                    <span>{`${currentDay.temp.max}/${currentDay.temp.min}\u00B0F`}</span>
                    <span>{currentDay.weather.description}</span>
                </div>
                </>
            ))}
        </Card>
    )
}

export default DailyForecast;