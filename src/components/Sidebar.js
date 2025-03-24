import React from 'react';
import { FaBars } from 'react-icons/fa'; // Importar el ícono

const Sidebar = ({ toggleSidebar, isVisible }) => {

    return (
        <div className={`sidebar ${isVisible ? '' : 'hidden'}`}>

            <h2>Navegación</h2>
            <ul>
                <li><a href="#conductivismo">Conductivismo</a></li>
                <li><a href="#cognitivismo">Cognitivismo</a></li>
                {/* Agregar más enlaces según sea necesario */}
            </ul>
            <FaBars style={{ position: 'fixed', top: '20px', left: '20px', cursor: 'pointer' }} onClick={toggleSidebar} /> {/* Ícono para mostrar/ocultar */}
        </div>
    );
};

export default Sidebar;
