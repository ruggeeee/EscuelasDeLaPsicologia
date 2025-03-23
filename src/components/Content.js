import React from 'react';
import { FaBars } from 'react-icons/fa'; // Importar el ícono


const Content = ({ toggleSidebar }) => {

    return (
        <div className="content">
            <FaBars style={{ position: 'fixed', top: '20px', left: '20px', cursor: 'pointer' }} onClick={toggleSidebar} /> {/* Ícono para mostrar/ocultar */}

            <section id="conductivismo">
                <h2>Conductivismo</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </section>
            <section id="cognitivismo">
                <h2>Cognitivismo</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </section>
            {/* Agregar más secciones según sea necesario */}
        </div>
    );
};

export default Content;
