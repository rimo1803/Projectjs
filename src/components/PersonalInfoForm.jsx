import React from 'react';
import { Typography, TextField, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';

const FormContainer = styled(Box)({
    maxWidth: 500,
    margin: 'auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '5px',
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
            <Typography variant="h5" gutterBottom>
                Enter Your Information
            </Typography>
            <form onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column' }}>
                <TextField name="name" label="Full Name" required fullWidth sx={{ marginBottom: '10px' }} />
                <TextField name="email" label="Email" type="email" required fullWidth sx={{ marginBottom: '10px' }} />
                <TextField name="cardNumber" label="Card Number" type="text" required fullWidth sx={{ marginBottom: '10px' }} />
                <Button type="submit" variant="contained" color="primary" sx={{ textTransform: 'none', marginTop: '10px', width: '100%' }}>Submit</Button>
            </form>
        </FormContainer>
    );
};

export default PersonalInfoForm;
