// AboutPage.jsx
import React from 'react';
import '../components/AboutPage.css'; 
import Image1 from './ImagesAbout/img3.jpg'; 
import Image2 from './ImagesAbout/OIP.jpg'; 
import Image3 from './ImagesAbout/squid-game-067-marbles-line-up-9fuwanyml41ff5l7.jpg'

const AboutPage = () => {
    return (
        <div className="about-container">
            <div className="about-content">
                <h1 className="about-title">MoviesLand</h1>
                <p className="about-description">Grate Cinema is your online destination for a hassle-free moviegoing experience. Discover the latest films showing, check showtimes and reserve your seats, all in just a few clicks. With a user-friendly interface and intuitive features, Grate Cinema lets you plan your movie trip with ease. Never miss a blockbuster and enjoy a smooth and pleasant booking experience. Welcome to the world of Grate Cinema, where cinema becomes an experience like no other.</p>
                <div className="about-images">
                <img src={Image1} alt="Image 1" className="about-image" />
                    <img src={Image2} alt="Image 2" className="about-image" />
                    <img src={Image3} alt="Image 3" className="about-image" />
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
