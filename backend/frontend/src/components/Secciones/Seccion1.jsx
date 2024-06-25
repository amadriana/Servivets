import React from 'react';
import '../../styles/components/Seccion1.css';
import veterinariaImage from '../../assets/veterinario.png';

const Seccion1 = () => {
    return (
        <div className="section1">

            <div className="imagen-container">
                <img src={veterinariaImage} alt="Imagen Veterinaria" className="imagen-veterinaria" />
            </div>

            <div className="fondo-section1">
                <h2>¡Bienvenido a SERVI<span style={{ color: '#81ECB9' }}>VETS!</span></h2>

                <p><span style={{ color: '#0f243f' }}>Con años de experiencia y un profundo
                    amor por los animales, nos comprometemos
                    a proporcionar un servicio de calidad
                    que puedas confiar en cada visita.</span></p>
            </div>
        </div>
    );
};

export default Seccion1;