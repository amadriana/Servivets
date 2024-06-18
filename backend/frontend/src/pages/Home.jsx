import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css';
import BackgroundSlider from '../components/BackgroundSlider.jsx';


const Home = () => {
  return (
    <div className="App">
      <BackgroundSlider />
    </div>
  );
};

export default Home;
