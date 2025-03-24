import React, { useState, useEffect } from 'react';
import './FadingHeader.css'; // Asegúrate de que este archivo exista

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
            <h1 id="universidad-uflo" style={{ color: '#584730', fontSize: '3em', fontWeight: 'bold', opacity }}>Universidad Uflo</h1>
            <div style={{ textAlign: 'center', color: '#584730', marginTop: '0px' }}>
                <h2 style={{ fontSize: '2em', fontWeight: 'bold', opacity }}>Psicología General I</h2>
                <h3 style={{ fontSize: '2.0em', opacity }}>Integrantes:</h3>
                <ul style={{ padding: '0', listStyleType: 'none' }}>
                    <li style={{ opacity }}>Lorem ipsum</li>
                    <li style={{ opacity }}>Lorem ipsum</li>
                    <li style={{ opacity }}>Lorem ipsum</li>
                    <li style={{ opacity }}>Lorem ipsum</li>
                    <li style={{ opacity }}>Lorem ipsum</li>
                </ul>
                <h2 style={{ fontSize: '1.8em', opacity }}>Presentan:</h2>
                <h3
                    id="escuelas-psicologicas"
                    style={{
                        fontSize: '2.2em',
                        transform: `scale(${scale}) translateY(${translateY - 30}px)`, // Restar 10px al valor de translateY
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
