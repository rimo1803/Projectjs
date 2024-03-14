import React, { useState } from 'react';
import { Typography, TextField, Button, Snackbar, Box, Link, Paper, Grid } from "@mui/material";
import './contact.css';
import { TbNetwork } from "react-icons/tb";

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
        <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
                <Paper elevation={3} className="contact-info-container">
                    <Typography variant='h2' className="contact-title">Contact Us</Typography>
                    
                    <Box mt={2}>
                        <Typography variant='body1'><TbNetwork />  Site Information:www.MoviesLand</Typography>
                        <Typography variant='body1'>Company Name</Typography>
                        <Typography variant='body1'>Address</Typography>
                        <Typography variant='body1'>Phone Number</Typography>
                    </Box>
                    <Box mt={2}>
                        <Typography variant='body1'>Follow Us:</Typography>
                        <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</Link>
                        <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</Link>
                        <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</Link>
                    </Box>
                </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
                <Paper elevation={3} className="contact-form-container">
                <Typography variant='body1'>Need help? Contact us by filling out the form below:</Typography>
                    <TextField
                        label="Your Email"
                        variant="outlined"
                        fullWidth
                        value={email}
                        onChange={handleEmailChange}
                        className="contact-input"
                    />
                    <TextField
                        label="Message Subject"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        value={subject}
                        onChange={handleSubjectChange}
                        className="contact-input"
                    />
                    <Button variant="contained" color="primary" onClick={handleSubmit} className="contact-button">Send</Button>
                    <Snackbar
                        open={openSnackbar}
                        autoHideDuration={6000}
                        onClose={handleSnackbarClose}
                        message="Message sent successfully"
                        action={
                            <Button   size="small" onClick={handleSnackbarClose}>
                                Close
                            </Button>
                        }
                    />
                </Paper>
            </Grid>
        </Grid>
    );
}

export default ContactInfoPage;
