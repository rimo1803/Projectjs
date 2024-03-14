import React, { useState } from 'react';
import axios from 'axios';
import './SearchBar.css'

const SearchBar = ({ onSearchResults }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearch = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
                params: {
                    api_key: '1880fd2d635c13d0b9188f99fcb24718',
                    query: searchQuery
                }
            });
            setMovies(response.data.results);
            onSearchResults(response.data.results); // Appelle la fonction de retour avec les résultats de recherche
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };

    return (
        <form onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="Search movies"
                value={searchQuery}
                onChange={handleSearchChange}
            />
            <button type="submit">Search</button>
        </form>
    );
}

export default SearchBar;
