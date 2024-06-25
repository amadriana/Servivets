import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../../styles/components/Footer.css'; // Importa tus estilos de footer aquí

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="contacto">
                    <h3>Contáctanos</h3>
                    <p>Estamos aquí para ayudarte, contáctanos si tienes alguna pregunta o consulta.</p>
                </div>
                <div className="redes-sociales">
                    <a href="https://www.facebook.com/tuempresa" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} className="icono-red-social" />
                    </a>
                    <a href="https://twitter.com/tuempresa" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} className="icono-red-social" />
                    </a>
                    <a href="https://www.instagram.com/tuempresa" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} className="icono-red-social" />
                    </a>
                    <a href="https://www.linkedin.com/company/tuempresa" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className="icono-red-social" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
