import React, { useEffect, useState } from "react";
import './BackgroundSlider.css';
import imageSlide from "./SliderImg";
import Navbar from '../componentes/Navbar.jsx';

const BackgroundSlider = () => {
    const [currentState, setCurrentState] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentState(prevState => (prevState === imageSlide.length - 1 ? 0 : prevState + 1));
        }, 5000);
        return () => clearTimeout(timer);
    }, [currentState]);

    const bgImageStyle = {
        backgroundImage: `url(${imageSlide[currentState].url})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100vh', // Ajusta la altura según necesites
    };

    const goToNext = index => {
        setCurrentState(index);
    };

    return (
        <div className="container-style">

            <header>
                <Navbar />
            </header>

            <div style={bgImageStyle}></div>
            <div className="transparent-background"></div>
            <div className="description">
                <div>
                    <h1>{imageSlide[currentState].title}</h1>
                    <p>{imageSlide[currentState].body}</p>
                </div>
                <div className="carousel-bullet">
                    {imageSlide.map((slide, index) => (
                        <span key={index} onClick={() => goToNext(index)}></span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BackgroundSlider;
