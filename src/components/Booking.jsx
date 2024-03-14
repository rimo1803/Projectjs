import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MovieContext } from '../context/BookingContext';
import { Container, Grid, Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import tmdbAPI from './services/tmdbAPI';

const Booking = () => {
    const navigate = useNavigate();
    const { setMovieData } = useContext(MovieContext);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchPopularMovies = async () => {
            try {
                const response = await tmdbAPI.get('/discover/movie', {
                    params: {
                        api_key: '1880fd2d635c13d0b9188f99fcb24718',
                        sort_by: 'popularity.desc',
                        year: 2020
                    }
                });
                setMovies(response.data.results);
            } catch (error) {
                console.error('Error fetching popular movies:', error);
            }
        };
        fetchPopularMovies();
    }, []);

    const handleData = (movie) => {
        setMovieData(movie);
        navigate('/book-ticket');
    }

    return (
        <Container>
            <Typography variant="h5" sx={{ textAlign: 'center', color: 'white', marginBottom: '20px' }}>
                Buy Tickets for Popular Movies
            </Typography>
            <Grid container spacing={3}>
                {movies.map((movie) => (
                    <Grid item lg={4} md={6} xs={12} key={movie.id}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: 'black', color: 'white', border: '2px solid #990000' }}>
                            <CardMedia
                                component="img"
                                height="400"
                                image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                alt={movie.title}
                                sx={{ objectFit: 'cover' }}
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center' }}>
                                    {movie.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" sx={{ textAlign: 'center', color: 'white' }}>
                                    {movie.release_date}
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'center' }}>
                                <Button onClick={() => handleData(movie)} variant="contained" sx={{ backgroundColor: '#990000', color: '#fff', '&:hover': { backgroundColor: 'black' } }}>
                                    BOOK TICKET
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Booking;
