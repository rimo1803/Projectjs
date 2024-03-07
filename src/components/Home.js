import { Container, Grid } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { MovieContext } from "../context/BookingContext";

import Typography from '@mui/material/Typography';
import { Movies } from '../Movies';
import { useNavigate } from "react-router-dom"
import { useContext } from "react";

const Home = () => {
    const navigate = useNavigate();
    const { movieData, setMovieData } = useContext(MovieContext);

    const handleData = (movie) => {
        console.log(typeof movie)
        setMovieData(movie)
        navigate('/book-ticket')
    }
    return (
        <>
            <Container >
                <Grid item container spacing={3} direction={{ xs: 'column', md: 'row' }} mt={2}
                    alignItems="center"
                    justify="space-around"
                    
                    
                >
                    {Movies.map(movie => (
                        <Grid item lg={4} xs={12} s={12} md={4}>

                            <Card sx={{ width: 300 }} key={movie.id}>

                                <CardMedia
                                    sx={{ height: 400 }}
                                    image={movie.image}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" color="darkblue">
                                        {movie.name}
                                    </Typography>
                                    <Typography variant="body2" color="black">
                                        {movie.starring}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button onClick={() => handleData(movie)}
                                        sx={{
                                            color: 'white', backgroundColor: 'black', width: 300, ':hover': {
                                                bgcolor: 'red', 
                                                color: 'white',
                                            }
                                        }}
                                    >BOOK TICKET

                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}

                </Grid>
            </Container>
        </>
    )
}

export default Home;