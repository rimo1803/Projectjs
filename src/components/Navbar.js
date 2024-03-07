import React from 'react';
import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import { Movies } from '../Movies'; 

const Navbar = () => {
    return (
        <>
            <AppBar position="static" style={{ backgroundColor: '#990000' }}>
                <Toolbar>
                    <Typography variant='h6' component='h6' sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                        GrateCinema
                    </Typography>
                    <Stack direction='row'>
                        <Button color='inherit' component={Link} to="/">Home</Button>
                        <Button color='inherit' component={Link} to="/search">Recherche</Button>
                        <Button color='inherit' component={Link} to="/about">About</Button>
                        <Button color='inherit' component={Link} to="/contact-info">Contact</Button>
                    </Stack>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;
