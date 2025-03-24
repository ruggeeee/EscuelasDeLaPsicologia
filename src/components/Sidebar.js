import React from 'react';
import { FaBars } from 'react-icons/fa'; // Importar el ícono

const Sidebar = ({ toggleSidebar, isVisible }) => {
    const scrollToSection = (sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={`sidebar ${isVisible ? '' : 'hidden'}`}>
            <ul style={{ display: 'flex', justifyContent: 'space-around', padding: '0', listStyleType: 'none' }}>
                <li><button className="sidebar-link" onClick={() => scrollToSection('universidad-uflo')}>Presentación</button></li>
                <li><button className="sidebar-link" onClick={() => scrollToSection('estructuralismo')}>Estructuralismo</button></li>
                <li><button className="sidebar-link" onClick={() => scrollToSection('funcionalismo')}>Funcionalismo</button></li>
                <li><button className="sidebar-link" onClick={() => scrollToSection('reflexologia')}>Reflexología</button></li>
                <li><button className="sidebar-link" onClick={() => scrollToSection('conductivismo')}>Conductivismo</button></li>
                <li><button className="sidebar-link" onClick={() => scrollToSection('gestalt')}>Gestalt</button></li>
                <li><button className="sidebar-link" onClick={() => scrollToSection('psicoanalisis')}>Psicoanálisis</button></li>
                <li><button className="sidebar-link" onClick={() => scrollToSection('humanismo')}>Humanismo</button></li>
                <li><button className="sidebar-link" onClick={() => scrollToSection('cognitivismo')}>Cognitivismo</button></li>
            </ul>
            <FaBars style={{ position: 'fixed', top: '20px', left: '20px', cursor: 'pointer' }} onClick={toggleSidebar} /> {/* Ícono para mostrar/ocultar */}
        </div>
    );
};

export default Sidebar;
