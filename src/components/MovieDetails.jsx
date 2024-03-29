import './MovieDetails.css';
import Movies from '../Movies';
import React from 'react';
import { useParams } from 'react-router-dom';


const MovieDetails = () => {
    const { id } = useParams();
    const movie = Movies.find((movie) => movie.id === parseInt(id));

    if (!movie) {
        return <p>Movie not found</p>;
    }

    return (
        <div>
            <h2>{movie.name}</h2>
            <p>Starring: {movie.starring}</p>
            <img src={movie.image} alt={movie.name} />
        </div>
    );
};

export default MovieDetails;
