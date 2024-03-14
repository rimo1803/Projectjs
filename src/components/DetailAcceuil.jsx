import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import tmdbAPI from './services/tmdbAPI';
import './DetailAcceuil.css'; 
import { colors } from '@mui/material';

const DetailAcceuil = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await tmdbAPI.get(`/movie/${id}`);
                setMovie(response.data);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };
        fetchMovieDetails();
    }, [id]);

    if (!movie) {
        return <div>Loading...</div>;
    } 

    return (
        
            <div className="detail-container">
                <h1  className="movie-title">{movie.title}</h1>
                <img
                    className="movie-poster"
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}
                />
                <p>{movie.overview}</p>
                <p>Release Date: {movie.release_date}</p>
                <p>Rating: {movie.vote_average}</p>
                <p>Genres: {movie.genres.map(genre => genre.name).join(', ')}</p>
                <p>Runtime: {movie.runtime} minutes</p>
                <p>Tagline: {movie.tagline}</p>
                <p>Status: {movie.status}</p>
                <p>Homepage: <a href={movie.homepage}>{movie.homepage}</a></p>
               
            </div>
        );
        
};

export default DetailAcceuil;
