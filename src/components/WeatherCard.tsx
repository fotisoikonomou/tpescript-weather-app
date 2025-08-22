import React from 'react';
import { WeatherCardProps } from '../interfaces/Weather';

const WeatherCard: React.FC<WeatherCardProps> = ({ weatherData }) => {
  const {
    name,
    country,
    weather,
    main,
    wind,
    clouds
  } = weatherData;

  const weatherInfo = weather[0];
  const iconUrl = `https://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png`;

  return (
    <div className="weather-card">
      <div className="weather-header">
        <h2>{name}, {country}</h2>
        <div className="weather-icon">
          <img src={iconUrl} alt={weatherInfo.description} />
        </div>
      </div>
      
      <div className="weather-main">
        <div className="temperature">
          <span className="temp-value">{Math.round(main.temp)}°C</span>
          <span className="temp-description">{weatherInfo.description}</span>
        </div>
        
        <div className="temp-range">
          <span>Feels like {Math.round(main.feels_like)}°C</span>
        </div>
      </div>

      <div className="weather-details">
        <div className="detail-item">
          <span className="label">Min/Max:</span>
          <span className="value">{Math.round(main.temp_min)}°C / {Math.round(main.temp_max)}°C</span>
        </div>
        
        <div className="detail-item">
          <span className="label">Humidity:</span>
          <span className="value">{main.humidity}%</span>
        </div>
        
        <div className="detail-item">
          <span className="label">Pressure:</span>
          <span className="value">{main.pressure} hPa</span>
        </div>
        
        <div className="detail-item">
          <span className="label">Wind:</span>
          <span className="value">{wind.speed} m/s</span>
        </div>
        
        <div className="detail-item">
          <span className="label">Cloudiness:</span>
          <span className="value">{clouds.all}%</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
