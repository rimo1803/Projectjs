import React from 'react';
import { MovieContextProvider } from './context/BookingContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Payment from './components/Payment';
import Navbar from './components/Navbar';
import AboutPage from './components/AboutPage';
import ContactInfoPage from './components/ContactInfoPage';
import SearchBar from './components/SearchBar';
import Acceuil from './components/Acceuil';
import Layout from './components/Layout';
import Booking from './components/Booking';
import BookTicket from './components/BookTicket';
import ReservationForm from './components/PersonalInfoForm';
import DetailAcceuil from './components/DetailAcceuil'; // Importez le composant detailAcceuil

function App() {
    return (
        <>
            <MovieContextProvider>
                <Router>
                    <Layout>
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
                            <Route path="/movie/:id" element={<DetailAcceuil />} /> {/* Utilisation de detailAcceuil */}
                        </Routes>
                    </Layout>
                </Router>
            </MovieContextProvider>
        </>
    );
}

export default App;
