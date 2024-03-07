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
            <Grid container spacing={3} mt={2}>
                {movies.map((movie) => (
                    <Grid item lg={4} xs={12} key={movie.id}>
                        <Card sx={{ width: 300 }}>
                            <CardMedia
                                sx={{ height: 400 }}
                                image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                title={movie.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {movie.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {movie.release_date}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button onClick={() => handleData(movie)} color="primary">
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
