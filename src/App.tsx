import { useEffect, useState } from 'react';
import { CurrentWeather,  HourlyChart, HourlyForecast, Card, Container, Button, } from './Components';
import env from 'react-dotenv';
import axios from 'axios';
import { getCurrentWeather, getDailyWeather, getHourlyWeather } from './resources/getWeather';
import { currentWeatherObj, hourlyWeatherObj } from './resources/stateTemplates';
import './App.scss';

function App() {

  const [currentWeather, setCurrentWeather] = useState(currentWeatherObj);
  const [hourlyForecast, setHourlyForecast] = useState(hourlyWeatherObj);
  const [dailyForecast, setDailyForecast] = useState({});

  const getWeather = async () => {
    axios.get(`https://api.openweathermap.org/data/3.0/onecall?units=imperial&lat=38.8339578&lon=-104.825348&exclude=minutely&appid=${env.API_KEY}`)
      .then(response => {
        setCurrentWeather(getCurrentWeather(response.data))
        setHourlyForecast(getHourlyWeather(response.data))
        setDailyForecast(getDailyWeather(response.data))
      })
      .catch(error => {
        console.error(error)
      })
  }

  useEffect(() => {
    getWeather()
  }, [])


  return (
    <div className="App">
      <Container>
        <div className='current-and-hourly'>
          <CurrentWeather currentWeather={currentWeather} />
          <HourlyForecast hourlyWeather={hourlyForecast} />
        </div>
        <HourlyChart hourlyWeather={hourlyForecast} />
      </Container>
    </div>
  );
}

export default App;
