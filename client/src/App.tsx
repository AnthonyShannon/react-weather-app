import React, { useEffect, useState } from 'react';
import { CurrentWeather, HourlyForecast } from './Components';
import env from 'react-dotenv';
import axios from 'axios';
import './App.css';


function App() {

  const [currentWeather, setCurrentWeather] = useState({
    city: '',
          temp: 0,
          feelsLike: 0,
          description: '',
          windSpeed:  0, 
          windDirection:  0,
          visibility:  0,
          humidity: 0,
          icon: '',
  })

  const getWeather = async () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?units=imperial&lon=-104.825348&lat=38.8339578&appid=${env.API_KEY}`)
      .then(response => {
        console.log(response)
        setCurrentWeather({
          city: response?.data?.name,
          temp: response?.data?.main?.temp,
          feelsLike: response?.data?.main?.feels_like,
          description: response?.data?.weather?.[0]?.description,
          windSpeed:  response?.data?.wind?.speed, 
          windDirection:  response?.data?.wind?.deg,
          visibility:  response?.data?.visibility,
          humidity: response?.data?.main?.humidity,
          icon: response?.data?.weather?.[0]?.icon,
        })
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
      <CurrentWeather currentWeather={currentWeather}/>
      {/* <HourlyForecast /> */}
    </div>
  );
}

export default App;
