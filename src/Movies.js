import React, { useState } from 'react';
import tmdbAPI from './components/services/tmdbAPI';
import { TextField, Button, Typography } from '@mui/material';
import SearchBar from './components/SearchBar';

function Movies() {
    const [movies, setMovies] = useState([]);

    const fetchMovies = async (searchQuery) => {
        try {
            const response = await tmdbAPI.get('/search/movie', {
                params: {
                    query: searchQuery
                }
            });
            setMovies(response.data.results);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };

    const handleSearch = (searchQuery) => {
        if (searchQuery) {
            fetchMovies(searchQuery);
        }
    };

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Search Movies
            </Typography>
            <SearchBar onSearch={handleSearch} />
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default Movies;
