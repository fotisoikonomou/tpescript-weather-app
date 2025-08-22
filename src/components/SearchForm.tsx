import React, { useState, FormEvent } from 'react';
import { SearchFormProps } from '../interfaces/Weather';

const SearchForm: React.FC<SearchFormProps> = ({ onSearch, isLoading }) => {
  const [city, setCity] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    onSearch(city);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <div className="form-group">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name..."
          className="search-input"
          disabled={isLoading}
        />
        <button 
          type="submit" 
          className="search-button"
          disabled={isLoading || !city.trim()}
        >
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
