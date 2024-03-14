import React, { useState } from 'react';
import { Typography, TextField, Button, Snackbar, Box, Link, Paper, Grid } from "@mui/material";

import { TbNetwork } from "react-icons/tb";
import { IoCompassSharp } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";
import { AiFillTwitterSquare } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";

const ContactInfoPage = () => {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubjectChange = (event) => {
        setSubject(event.target.value);
    };

    const handleSubmit = () => {
        console.log(`Email: ${email}, Subject: ${subject}`);
        setOpenSnackbar(true);
        setEmail('');
        setSubject('');
    };

    const handleSnackbarClose = () => {
        setOpenSnackbar(false);
    };

    return (
        <Paper style={{ padding: '30px', margin: '150px auto', maxWidth: '1200px', display: 'flex', flexDirection: 'column', gap: '20px', backgroundColor: '#990000', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Typography variant='h2' style={{ fontSize: '24px', fontWeight: 'bold', color: '#F5F5DC' }}>Contact Us</Typography>
                    
                    <Box mt={2}>
                        <Typography variant='body1'><TbNetwork />  Site Information:www.MoviesLand</Typography>
                        <Typography variant='body1'><IoCompassSharp />Company Name : TechnoTravel</Typography>
                        <Typography variant='body1'><FaMapMarkerAlt />Address :Tetouan rue eddahbi</Typography>
                        <Typography variant='body1'><FaPhone />Phone Number : 06-3566-79-06</Typography>
                    </Box>
                    <Box mt={2}>
                        <Typography variant='body1'>Follow Us:</Typography>
                        <ImFacebook2 /><Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '# 808080', textDecoration: 'none', marginRight: '10px' }}>Facebook</Link>
                        <AiFillTwitterSquare /><Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: '# 808080', textDecoration: 'none', marginRight: '10px' }}>Twitter</Link>
                        <FaSquareInstagram /><Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '# 808080', textDecoration: 'none', marginRight: '10px' }}>Instagram</Link>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant='body1'  style={{ fontSize: '24px', fontWeight: 'bold', color: '#F5F5DC' }}>Need help? Contact us by filling out the form below:</Typography>
                    <TextField
                        label="Your Email"
                        variant="outlined"
                        fullWidth
                        value={email}
                        onChange={handleEmailChange}
                        style={{ marginBottom: '15px', borderColor: '#ccc' }}
                        InputProps={{
                            style: {
                                '&:focus': {
                                    borderColor: 'red',
                                },
                            },
                        }}
                    />
                    <TextField
                        label="Message Subject"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        value={subject}
                        onChange={handleSubjectChange}
                        style={{ marginBottom: '15px', borderColor: '#ccc' }}
                        InputProps={{
                            style: {
                                '&:focus': {
                                    borderColor: 'red',
                                },
                            },
                        }}
                    />
                    <Button variant="contained" color="primary" onClick={handleSubmit} style={{ marginTop: '15px' , color:'white',backgroundColor:'#990000'}}>Send</Button>
                    <Snackbar
                        open={openSnackbar}
                        autoHideDuration={6000}
                        onClose={handleSnackbarClose}
                        message="Message sent successfully"
                        action={
                            <Button   size="small" onClick={handleSnackbarClose} >
                                Close
                            </Button>
                        }
                    />
                </Grid>
            </Grid>
        </Paper>
    );
}

export default ContactInfoPage;
