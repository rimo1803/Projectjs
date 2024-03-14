import React, { useState } from 'react';
import { AppBar, Button, Stack, Toolbar, Typography, List, ListItem, ListItemText, Divider } from "@mui/material";
import { Link } from 'react-router-dom';
import { MdLocalMovies } from "react-icons/md"; 
import { TiHomeOutline } from "react-icons/ti";
import { TbBrandBooking } from "react-icons/tb";
import { MdOutlineContactPhone } from "react-icons/md";
import { RiPresentationLine } from "react-icons/ri";
import SearchBar from './SearchBar';

const Navbar = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(false);

    const handleSearchResults = (results) => {
        setSearchResults(results);
        setShowResults(true);
    };

    const handleNavClick = () => {
        setShowResults(false);
    };

    const handleResultClick = () => {
        setShowResults(false);
    };

    return (
        <AppBar position="static" style={{ backgroundColor: '#990000' }}>
            <Toolbar>
                <Typography variant='h6' component='h6' sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                    <MdLocalMovies fontSize="large" /> MoviesLand
                </Typography>
                
                <SearchBar onSearchResults={handleSearchResults} />
                
                <Stack direction='row' spacing={2}>
                    <Button color='inherit' component={Link} to="/" onClick={handleNavClick}>
                        <TiHomeOutline /> Home
                    </Button>
                    <Button color='inherit' component={Link} to="/booking" onClick={handleNavClick}>
                        <TbBrandBooking /> Booking
                    </Button>
                    <Button color='inherit' component={Link} to="/about" onClick={handleNavClick}>
                        <RiPresentationLine /> About
                    </Button>
                    <Button color='inherit' component={Link} to="/contact-info" onClick={handleNavClick}>
                        <MdOutlineContactPhone /> Contact
                    </Button>
                </Stack>
            </Toolbar>
            
            {/* Affichage des résultats de recherche */}
            {showResults && searchResults.length > 0 && (
                <div style={{ padding: '20px' }}>
                    <Typography variant="h6">Search Results:</Typography>
                    <List>
                        {searchResults.map((result) => (
                            <React.Fragment key={result.id}>
                                <ListItem button component={Link} to={`/movie/${result.id}`} onClick={handleResultClick}>
                                    <ListItemText primary={result.title} secondary={result.release_date} />
                                </ListItem>
                                <Divider />
                            </React.Fragment>
                        ))}
                    </List>
                </div>
            )}
        </AppBar>
    )
}

export default Navbar;
