import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/pages/Home.css';
import BackgroundSlider from '../components/BackgroundSlider.jsx';
import Seccion1 from '../components/Secciones/Seccion1.jsx';
import Navbar from '../components/Navbar.jsx';
import Seccion2 from '../components/Secciones/Seccion2.jsx';
import Footer from '../components/Secciones/Footer.jsx';


const Home = () => {
  return (
    <div className="App">

      <header>
        <Navbar />
      </header>
      <BackgroundSlider />
      <Seccion1 />
      <Seccion2 />
      <Footer />
    </div>
  );
};

export default Home;
