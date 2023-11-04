import React from 'react';
import './intro.css';

function Intro() {
  return (
    <div className="intro-container">
      <h1>Welcome to Weather Application</h1>
      <img src="icons/02d.png" alt="Weather-App" />
      <p>Your go-to source for city-based weather information. Get real-time updates and detailed forecasts for any city. Enter a city name or browse the map to access the latest weather data. Stay informed with Weather Application.</p>
    </div>
  );
}

export default Intro;
