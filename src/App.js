
import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from "react";

function App() {
  const [weather, setWeather] = useState([])

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=lahore&appid=1d0329a9cf37be737aedaf5d50dddd68`)
    .then(res =>{
      const newWeather = res.data;
      setWeather(newWeather);
    });


    return () => {
      console.log("Unloaded")
    };
  }, 
  []);

return(
  <div>
 <h1>{weather?.main?.temp}</h1>
  
  </div>
)
}



export default App;
