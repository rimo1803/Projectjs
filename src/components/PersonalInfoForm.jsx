import React from 'react';
import { Typography, TextField, Button, Box } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const FormContainer = styled(Box)({
    maxWidth: 500,
    margin: 'auto',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(255, 0, 0, 0.5)', // Red shadow
    marginTop: '80px', // Espace au-dessus du formulaire
});


const PersonalInfoForm = ({ onSubmit }) => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
        navigate('/booking');
    };

    return (
        <FormContainer>
            <Typography variant="h5" gutterBottom >
                Enter Your Information
            </Typography>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
            <TextField
    name="name"
    label="Full Name"
    required
    fullWidth
    sx={{
        marginBottom: '20px',
        '& .Mui-focused': {
            borderColor: 'red', // Couleur de la bordure en rouge lorsqu'en focus
        },
    }}
/>
<TextField
    name="email"
    label="Email"
    type="email"
    required
    fullWidth
    sx={{
        marginBottom: '20px',
        '& .Mui-focused': {
            borderColor: 'red',
        },
    }}
/>
<TextField
    name="cardNumber"
    label="Card Number"
    type="text"
    required
    fullWidth
    sx={{
        marginBottom: '20px',
        '& .Mui-focused': {
            borderColor: 'red',
        },
    }}
/>

                <Button type="submit" variant="contained" style={{ textTransform: 'none', marginTop: '20px', backgroundColor: '#990000', color: '#fff', '&:hover': { backgroundColor: '#660000' } }}>
                    Submit
                </Button>
            </form>
        </FormContainer>
    );
};

export default PersonalInfoForm;
