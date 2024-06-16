import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css';
import Navbar from '../componentes/Navbar.jsx';


const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (

    <div className="home">
      <header className="home-header">
        <Navbar />
      </header>
      <div className="content">
        <h1>Bienvenidos a No Tenemos Veterinaria</h1>
        <p>Ofrecemos cuidado y atención veterinaria de alta calidad para tus mascotas.</p>

          <Slider {...settings}>
            <div>
              <img src="./public/cemele1.png" alt="Slide 1" />
            </div>
            <div>
              <img src="/public/cemele2.png" alt="Slide 2" />
            </div>
            <div>
              <img src="/public/cemele3.png" alt="Slide 3" />
            </div>
            <div>
              <img src="/public/cemeleflor.jpg" alt="Slide 3" />
            </div>
          </Slider>
      </div>


    </div>
  );
};

export default Home;
