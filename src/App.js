// App.js
import React from 'react';
import { MovieContextProvider } from './context/BookingContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Payment from './components/Payment';
import Navbar from './components/Navbar';
import AboutPage from './components/AboutPage'; // Importez le composant AboutPage
import ContactInfoPage from './components/ContactInfoPage';
import SearchBar from './components/SearchBar';
import Acceuil from './components/Acceuil';

import Booking from './components/Booking';
import BookTicket from './components/BookTicket';
import ReservationForm from './components/PersonalInfoForm';


function App() {
    return (
        <>
            <MovieContextProvider>
                <Router>
                    <Navbar />
                    <Routes>
                    <Route path='/' element={<Acceuil />} />
                    <Route path="/booking" element={<Booking />} />
                    <Route path="/book-ticket" element={<BookTicket />} />
                <Route path="/reservation-form" element={<ReservationForm />} />
                        
                        <Route path='/payment' element={<Payment />} />
                        <Route path='/about' element={<AboutPage />} /> 
                        <Route path='/contact-info' element={<ContactInfoPage />} /> 
                        <Route path='/search' element={<SearchBar />} />
                    </Routes>
                </Router>
            </MovieContextProvider>
        </>
    );
}

export default App;
