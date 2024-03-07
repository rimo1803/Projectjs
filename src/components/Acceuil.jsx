import React, { useState, useEffect } from 'react';
import tmdbAPI from './services/tmdbAPI';
import '../components/Acceuil2.css';


const Accueil = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await tmdbAPI.get('/movie/popular', {
                    params: {
                        page: page
                    }
                });
                setMovies((prevMovies) => [...prevMovies, ...response.data.results]);
                setTotalPages(response.data.total_pages);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };
        fetchMovies();
    }, [page]);

    const loadMore = () => {
        if (page < totalPages) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    return (
        <div className="container">
            <h1>Les Films et Séries</h1>
            <div className="movie-grid">
                {movies.map((movie) => (
                    <div key={movie.id} className="movie-card">
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                            alt={movie.title}
                            className="movie-poster"
                        />
                        <div className="movie-details">
                            <h2>{movie.title}</h2>
                            <p>Date de sortie: {movie.release_date}</p>
                            <p>Note: {movie.vote_average}</p>
                        </div>
                    </div>
                ))}
            </div>
            {page < totalPages && <button onClick={loadMore}>Load More</button>}
        </div>
    );
};

export default Accueil;
