// SearchBar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Movies } from '../Movies';
import './SearchBar.css';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState(null);

    const handleSearchChange = (event) => {
        const term = event.target.value.toLowerCase();
        setSearchTerm(term);
        // Filtrer les films en fonction du terme de recherche
        const result = Movies.find((movie) =>
            movie.name.toLowerCase().includes(term)
        );
        setSearchResult(result ? result : null);
    };

    return (
        <div className="search-container">
            <input
                className="search-input"
                type="text"
                placeholder="Search movies..."
                value={searchTerm}
                onChange={handleSearchChange}
            />
            {searchResult && (
                <Link to={`/movie/${searchResult.id}`}>
                    <p>{searchResult.name}</p>
                </Link>
            )}
            {!searchResult && searchTerm && <p>No results found</p>}
        </div>
    );
};

export default SearchBar;
