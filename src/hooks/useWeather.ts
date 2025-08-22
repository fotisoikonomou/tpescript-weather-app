import { useState, useCallback } from 'react';
import { WeatherData, UseWeatherReturn } from '../interfaces/Weather';
import { weatherService } from '../services/weatherService';

export const useWeather = (): UseWeatherReturn => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const searchWeather = useCallback(async (city: string): Promise<void> => {
    if (!city.trim()) {
      setError('Please enter a city name');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const data = await weatherService.getWeatherByCity(city);
      setWeatherData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    weatherData,
    loading,
    error,
    searchWeather
  };
};
