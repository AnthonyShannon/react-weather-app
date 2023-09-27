import React, { useEffect, useState } from 'react';
import { CurrentWeather, HourlyForecast } from './Components';
import env from 'react-dotenv';
import axios from 'axios';
import { getCurrentWeather } from './resources/getWeather'
import './App.css';


function App() {

  const [currentWeather, setCurrentWeather] = useState({
    city: '',
    temp: 0,
    feelsLike: 0,
    description: '',
    windSpeed: 0,
    windDirection: 0,
    visibility: 0,
    humidity: 0,
    icon: '',
  });
  const [HourlyForecast, setHourlyForecast] = useState([
    {dateTime: new Date(),
    temp: 0,
    feelsLike: 0,
    pressure: 0,
    humidity: 0,
    dewPoint: 0,
    visibility: 0,
    windSpeed: 0,
    windDirection: 0,
    description: '', 
    icon: ''}])

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
      <CurrentWeather currentWeather={currentWeather} />
      {/* <HourlyForecast /> */}
    </div>
  );
}

export default App;
