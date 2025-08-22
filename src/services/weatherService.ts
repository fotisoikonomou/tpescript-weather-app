import axios from 'axios';
import { WeatherApiResponse, WeatherData } from '../interfaces/Weather';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY || '';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

class WeatherService {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async getWeatherByCity(city: string): Promise<WeatherData> {
    try {
      const response = await axios.get<WeatherApiResponse>(
        `${BASE_URL}/weather`,
        {
          params: {
            q: city,
            appid: this.apiKey,
            units: 'metric'
          }
        }
      );

      return this.transformApiResponse(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(`Weather API Error: ${error.response?.data?.message || error.message}`);
      }
      throw new Error('An unexpected error occurred');
    }
  }

  private transformApiResponse(apiData: WeatherApiResponse): WeatherData {
    return {
      id: apiData.id,
      name: apiData.name,
      country: apiData.sys.country,
      coord: apiData.coord,
      weather: apiData.weather,
      main: apiData.main,
      wind: apiData.wind,
      clouds: apiData.clouds,
      dt: apiData.dt,
      timezone: apiData.timezone
    };
  }
}

export const weatherService = new WeatherService(API_KEY);
