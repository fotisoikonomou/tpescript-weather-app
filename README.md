# Weather Dashboard 🌤️

A modern **React TypeScript** application that demonstrates the power of interfaces while providing real-time weather information.  
This project showcases best practices in TypeScript development, component architecture, and API integration.

---

## 🚀 Features

- **TypeScript Interfaces**: Comprehensive interface definitions for type safety and code documentation  
- **Real-time Weather Data**: Integration with OpenWeatherMap API  
- **Custom Hooks**: Reusable logic with `useWeather` hook  
- **Error Handling**: Robust error handling with user-friendly messages  
- **Responsive Design**: Mobile-first responsive layout  
- **Loading States**: Smooth loading indicators and disabled states  
- **Component Architecture**: Well-structured, reusable components  

---

## 🛠️ Tech Stack

- **React 18** – Modern React with functional components  
- **TypeScript** – Type safety and enhanced developer experience  
- **Axios** – HTTP client for API requests  
- **CSS3** – Modern styling with flexbox and grid  
- **OpenWeatherMap API** – Real-time weather data  

---

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (v14 or higher)  
- **npm** or **yarn** package manager  
- A free **OpenWeatherMap API key**

---

## ⚡ Quick Start

### 1. Clone the Repository
bash
git clone https://github.com/yourusername/weather-dashboard.git
cd weather-dashboard

### **2. Install Dependencies**
npm install
# or
yarn install

### **3. Get Your API Key**

Visit OpenWeatherMap

Sign up for a free account

Navigate to API Keys section

Copy your API key

### **4. Environment Setup**

Create a .env file in the root directory:

REACT_APP_WEATHER_API_KEY=your_openweathermap_api_key_here

### **5. Start Development Server**
npm start
# or
yarn start


### The application will open at http://localhost:3000

🏗️ Project Structure
src/
├── components/             # React components
│   ├── WeatherCard.tsx     # Weather information display
│   ├── SearchForm.tsx      # City search functionality
│   └── LoadingSpinner.tsx  # Loading indicator
├── interfaces/             # TypeScript interface definitions
│   └── Weather.ts          # Weather-related interfaces
├── services/               # API and business logic
│   ├── weatherService.ts   # OpenWeatherMap API integration
│   └── mockWeatherService.ts # Mock data for testing
├── hooks/                  # Custom React hooks
│   └── useWeather.ts       # Weather data management hook
├── App.tsx                 # Main application component
├── App.css                 # Application styles
└── index.tsx               # Application entry point

🔧 Key Learning Concepts
TypeScript Interfaces Demonstrated

API Response Interfaces – Strict typing for external API data

Component Props Interfaces – Type-safe prop passing between components

Custom Hook Return Types – Well-defined hook contracts

Optional Properties – Flexible interface definitions

Union Types – Multiple possible types (string | null)

Nested Interfaces – Complex data structures

``` Example Interface Usage
// Component props with function callbacks
interface SearchFormProps {
  onSearch: (city: string) => void;
  isLoading: boolean;
}

// API response transformation
interface WeatherApiResponse {
  coord: Coordinates;
  weather: Weather[];
  main: MainWeatherInfo;
  // ...
}

// Custom hook return type
interface UseWeatherReturn {
  weatherData: WeatherData | null;
  loading: boolean;
  error: string | null;
  searchWeather: (city: string) => Promise<void>;
}
```
🧪 Testing Without API Key

For immediate testing and learning, the project includes a mock service:

Uncomment the mock service import in useWeather.ts

Available test cities: London, Paris, Tokyo

Switch back to real API once your key is activated

🌐 API Information

This project uses the OpenWeatherMap Current Weather API
:

Free Tier: 1,000 calls/day, 60 calls/minute

Data Includes: Temperature, humidity, wind speed, conditions

Response Format: JSON

🎨 Features Showcase
Component Features

Search Form – Input validation & loading states

Weather Card – Comprehensive weather display

Error Handling – User-friendly error messages

Loading States – Smooth UI transitions

TypeScript Features

Interface Definitions – 10+ interfaces for type safety

Type Guards – Runtime type checking

Generic Types – Reusable type definitions

Optional Properties – Flexible API response handling

📱 Responsive Design

Optimized for:

Desktop (1200px+)

Tablets (768px – 1199px)

Mobile (320px – 767px)

🔒 Security Notes

API keys are stored in environment variables

.env files are excluded from Git via .gitignore

No sensitive data is exposed in client-side code

🚀 Deployment
Netlify
npm run build


Deploy the build/ folder, add environment variables in Netlify dashboard.

Vercel
npm i -g vercel
vercel


Add environment variables in Vercel dashboard.

🤝 Contributing

Fork the repository

Create a feature branch (git checkout -b feature/AmazingFeature)

Commit changes (git commit -m 'Add some AmazingFeature')

Push to branch (git push origin feature/AmazingFeature)

Open a Pull Request

📝 License

This project is licensed under the MIT License – see the LICENSE
 file.

🙏 Acknowledgments

OpenWeatherMap

Create React App

TypeScript

📞 Support

Check Issues

Open a new issue with details

Contact me at: your.email@example.com

🔗 Live Demo

👉 View Live Demo
 (replace with your actual URL)

⭐ Star this repository if you found it helpful! ⭐

Built with ❤️ using React, TypeScript, and modern web technologies
