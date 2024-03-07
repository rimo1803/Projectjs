// App.js

import React from 'react';
import { MovieContextProvider } from './context/BookingContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import BookTicket from './components/BookTicket';
import Payment from './components/Payment';
import Navbar from './components/Navbar';
import AboutPage from './components/AboutPage'; 
import ContactInfoPage from './components/ContactInfoPage';
import SearchBar from './components/SearchBar';
import MovieDetails from './components/MovieDetails';

function App() {
    return (
        <MovieContextProvider>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/book-ticket" element={<BookTicket />} />
                    <Route path="/payment" element={<Payment />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact-info" element={<ContactInfoPage />} />
                    <Route path="/search" element={<SearchBar />} />
                    <Route path="/movie/:id" element={<MovieDetails />} />
                </Routes>
            </Router>
        </MovieContextProvider>
    );
}

export default App;
