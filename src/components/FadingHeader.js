import React, { useState, useEffect } from 'react';
import './FadingHeader.css'; // Asegúrate de que este archivo exista

const FadingHeader = () => {
    const [opacity, setOpacity] = useState(1);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const newOpacity = Math.max(0, 1 - scrollY / 300); // Cambiar la opacidad gradualmente
        setOpacity(newOpacity);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header style={{ background: 'pink', height: '100vh', textAlign: 'center' }}>
            <h1 style={{ color: '#4B3C3C', fontSize: '3em', fontWeight: 'bold', opacity }}>Universidad Uflo</h1>
            <div style={{ textAlign: 'center', color: '#4B3C3C', marginTop: '20px' }}>
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
                <h3 style={{ fontSize: '2.2em', opacity }}>Escuelas Psicológicas</h3>
            </div>
        </header>
    );
};

export default FadingHeader;
