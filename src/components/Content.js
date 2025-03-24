import React from 'react';
import { FaBars } from 'react-icons/fa'; // Importar el ícono

const Content = ({ toggleSidebar }) => {
    return (
        <div className="content"> {/* Eliminar estilo en línea */}
            <FaBars style={{ position: 'fixed', top: '20px', left: '20px', cursor: 'pointer' }} onClick={toggleSidebar} /> {/* Ícono para mostrar/ocultar */}
            
            <section id="estructuralismo">
                <h2>Estructuralismo</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </section>

            <section id="funcionalismo">
                <h2>Funcionalismo</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </section>
            
            <section id="reflexologia">
                <h2>Reflexología</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </section>
            
            <section id="conductivismo">
                <h2>Conductivismo</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </section>
            
            <section id="gestalt">
                <h2>Gestalt</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </section>
            
            <section id="psicoanalisis">
                <h2>Psicoanálisis</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </section>
            
            <section id="humanismo">
                <h2>Humanismo</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </section>
            
            <section id="cognitivismo">
                <h2>Cognitivismo</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </section>
        </div>
    );
};

export default Content;
