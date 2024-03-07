import React, { useState } from 'react';
import { Typography, TextField, Button, Snackbar, Card, CardContent } from "@mui/material";
import './contact.css';

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
        // Gérer la soumission du formulaire ici
        console.log(`Email: ${email}, Subject: ${subject}`);
        setOpenSnackbar(true);
        // Réinitialiser les champs du formulaire
        setEmail('');
        setSubject('');
    };

    const handleSnackbarClose = () => {
        setOpenSnackbar(false);
    };

    return (
        <div className="contact-container">
            <div className="contact-info">
                <Typography variant='h2' className="contact-title">INFORMATION :</Typography>
                <Typography variant='body1'>Nom: Rhimou elharras & aya alayahyani</Typography>
                <Typography variant='body1'>Email: rimoelharras@gmail.com</Typography>
                <Typography variant='body1'>Telephone Portable: 06-42-53-21-83</Typography>
                <Typography variant='body1'>Fix: 05-59-85-82-87</Typography>
                <Typography variant='body1'>Adress : Tetouan rue bidaoui </Typography>
            </div>
            <div style={{ height: '20px' }}></div> {/* Espace entre les informations et le formulaire */}
            <div className="contact-form">
                <Typography variant='h2' className="contact-title">CONTACTEZ-NOUS :</Typography>
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    value={email}
                    onChange={handleEmailChange}
                    style={{ marginBottom: '10px', color:'white' }}
                />
                <TextField
                    label="Object"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    value={subject}
                    onChange={handleSubjectChange}
                    style={{ marginBottom: '10px' }}
                />
                <Button variant="contained" color="primary" onClick={handleSubmit} style={{ marginRight: '10px' }}>Submit</Button>
                <Snackbar
                    open={openSnackbar}
                    autoHideDuration={6000}
                    onClose={handleSnackbarClose}
                    message="Submission successful"
                    action={
                        <Button color="secondary"  size="small" onClick={handleSnackbarClose}>
                            Close
                        </Button>
                    }
                />
            </div>
        </div>
    );
}

export default ContactInfoPage;
