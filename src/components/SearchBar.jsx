// SearchMovies.js

import React, { useState } from 'react';
import axios from 'axios';
import '../components/style.css';

function SearchMovies() {
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
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search movies"
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                <button type="submit">Search</button>
            </form>
            <ul className="movie-list">
                {movies.map((movie) => (
                    <li key={movie.id} className="movie-item">
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                            alt={movie.title}
                            className="movie-poster"
                        />
                        <div className="movie-details">
                            <h3 className="movie-title">{movie.title}</h3>
                            <p className="movie-overview">{movie.overview}</p>
                            <p className="movie-release-date">Release Date: {movie.release_date}</p>
                            <p className="movie-rating">Rating: {movie.vote_average}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SearchMovies;
