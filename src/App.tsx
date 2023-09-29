import React, { useEffect, useState } from 'react';
import { CurrentWeather, HourlyForecast, Card } from './Components';
import env from 'react-dotenv';
import axios from 'axios';
import { getCurrentWeather } from './resources/getWeather';
import { currentWeatherObj, hourlyWeatherObj } from './resources/stateTemplates';
import './App.scss';


function App() {

  const [currentWeather, setCurrentWeather] = useState(currentWeatherObj);
  const [HourlyForecast, setHourlyForecast] = useState(hourlyWeatherObj)

  const getWeather = async () => {
    axios.get(`https://api.openweathermap.org/data/3.0/onecall?units=imperial&lat=38.8339578&lon=-104.825348&exclude=minutely&appid=${env.API_KEY}`)
      .then(response => {
        console.log(response)
        setCurrentWeather(getCurrentWeather(response.data))
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
      <Card>
        <CurrentWeather currentWeather={currentWeather} />
        {/* <HourlyForecast /> */}
      </Card>
    </div>
  );
}

export default App;
