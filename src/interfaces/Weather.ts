// Main weather data interface
export interface WeatherData {
  id: number;
  name: string;
  country: string;
  coord: Coordinates;
  weather: Weather[];
  main: MainWeatherInfo;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  timezone: number;
}

// Coordinate interface
export interface Coordinates {
  lat: number;
  lon: number;
}

// Weather description interface
export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

// Main weather information interface
export interface MainWeatherInfo {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level?: number;
  grnd_level?: number;
}

// Wind interface
export interface Wind {
  speed: number;
  deg: number;
  gust?: number;
}

// Clouds interface
export interface Clouds {
  all: number;
}

// API Response interface
export interface WeatherApiResponse {
  coord: Coordinates;
  weather: Weather[];
  base: string;
  main: MainWeatherInfo;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

// Search form props interface
export interface SearchFormProps {
  onSearch: (city: string) => void;
  isLoading: boolean;
}

// Weather card props interface
export interface WeatherCardProps {
  weatherData: WeatherData;
}

// Custom hook return type
export interface UseWeatherReturn {
  weatherData: WeatherData | null;
  loading: boolean;
  error: string | null;
  searchWeather: (city: string) => Promise<void>;
}
