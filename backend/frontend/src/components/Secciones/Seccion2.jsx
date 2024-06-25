import React from 'react';
import '../../styles/components/Seccion2.css';

const Seccion2 = () => {
    return (
        <div className="section2">

            <div className="fondo-section2">
                <p><span style={{ color: '#0f243f' }}>Explora nuestra aplicación y descubre
                    la comodidad de agendar citas, recibir
                    recordatorios de vacunación, acceder a
                    historiales médicos y más, todo desde
                    la comodidad de tu hogar. </span></p>
            </div>
            <div className='agendar-cita'>
                <h2>Agenda tu Cita</h2>
                <button className="agendar-btn">Agendar Cita</button>
            </div>
        </div>
    );
};

export default Seccion2;
