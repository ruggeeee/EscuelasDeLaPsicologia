import React, { useState, useEffect } from 'react';
import './FadingHeader.css'; // Asegúrate de que este archivo exista
import RightImage from '../assets/images/text.svg'; // Imagen derecha
import LeftImage from '../assets/images/left-image.png'; // Imagen izquierda

const FadingHeader = () => {
    const [opacity, setOpacity] = useState(1);
    const [scale, setScale] = useState(1);
    const [translateY, setTranslateY] = useState(0);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const newOpacity = Math.max(0, 1 - scrollY / 300); // Cambiar la opacidad gradualmente
        const newScale = Math.min(2, 1 + scrollY / 300); // Escalar hasta un máximo de 2x
        const newTranslateY = Math.min(100, scrollY / 3); // Mover hacia abajo hasta un máximo de 100px

        setOpacity(newOpacity);
        setScale(newScale);
        setTranslateY(newTranslateY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header style={{ background: 'pink', height: '100vh', textAlign: 'center', position: 'relative' }}>
            <img
                src={LeftImage} // Usa la imagen SVG importada para la izquierda
                alt="Left"
                style={{
                    position: 'absolute',
                    top: `calc(66% + ${translateY + 100}px)`, // Aumentar desplazamiento en 100px
                    left: '180px', // Simétrico respecto a la imagen derecha
                    transform: 'translateY(-50%)',
                    height: '80px', // Ajusta el tamaño según sea necesario
                    transition: 'top 0.3s ease-out', // Suavizar el movimiento
                }}
            />
            <img
                src={RightImage} // Usa la imagen SVG importada para la derecha
                alt="Right"
                style={{
                    position: 'absolute',
                    top: `calc(66% + ${translateY + 100}px)`, // Aumentar desplazamiento en 100px
                    right: '150px', // Simétrico respecto a la imagen izquierda
                    transform: 'translateY(-50%)',
                    height: '80px', // Ajusta el tamaño según sea necesario
                    transition: 'top 0.3s ease-out', // Suavizar el movimiento
                }}
            />
            <h1 id="universidad-uflo" style={{ color: '#584730', fontSize: '3em', fontWeight: 'bold', opacity }}>Universidad UFLO</h1>
            <div style={{ textAlign: 'center', color: '#584730', marginTop: '0px' }}>
                <h2 style={{ fontSize: '2em', fontWeight: 'bold', opacity }}>Psicología General I</h2>
                <h3 style={{ fontSize: '2.0em', opacity }}>Integrantes:</h3>
                <ul style={{ padding: '0', listStyleType: 'none' }}>
                    <li style={{ opacity }}><strong>Pirchi, Aldana Belén</strong></li>
                    <li style={{ opacity }}><strong>Stadnitchi, Victoria</strong></li>
                    <li style={{ opacity }}><strong>Quinteros, Sofía Ailín</strong></li>
                    <li style={{ opacity }}><strong>Saravia, Rocío Elisa</strong></li>
                    <li style={{ opacity }}><strong>Quiroga, Rocío</strong></li>
                    <li style={{ opacity }}><strong>Ruggeroni, Facundo Emmanuel</strong></li>
                </ul>
                <h2 style={{ fontSize: '1.8em', opacity }}>Presentan:</h2>
                <h3
                    id="escuelas-psicologicas"
                    style={{
                        fontSize: '2.2em',
                        transform: `scale(${scale}) translateY(${translateY - 55}px)`, // Restar 10px al valor de translateY
                        transition: 'transform 0.3s ease-out',
                        opacity: 1, // Asegurar que no se desvanezca
                    }}
                >
                    Escuelas Psicológicas
                </h3>
            </div>
        </header>
    );
};

export default FadingHeader;
