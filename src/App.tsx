import React from 'react';
import SearchForm from './components/SearchForm';
import WeatherCard from './components/WeatherCard';
import LoadingSpinner from './components/LoadingSpinner';
import { useWeather } from './hooks/useWeather';
import './App.css';

const App: React.FC = () => {
  const { weatherData, loading, error, searchWeather } = useWeather();
console.log('API_KEY from env:', process.env.REACT_APP_WEATHER_API_KEY);
  return (
    <div className="App">
      <header className="app-header">
        <h1>Weather Dashboard</h1>
        <p>Search for weather information in any city</p>
      </header>

      <main className="app-main">
        <SearchForm onSearch={searchWeather} isLoading={loading} />
        
        {error && (
          <div className="error-message">
            <p>Error: {error}</p>
          </div>
        )}
        
        {loading && <LoadingSpinner />}
        
        {weatherData && !loading && (
          <WeatherCard weatherData={weatherData} />
        )}
      </main>
    </div>
  );
};

export default App;
