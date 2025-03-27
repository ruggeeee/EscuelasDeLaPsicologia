import React from 'react';
import { FaBars } from 'react-icons/fa'; // Importar el ícono

const Content = ({ toggleSidebar }) => {
    return (
        <div className="content">
            <FaBars style={{ position: 'fixed', top: '20px', left: '20px', cursor: 'pointer' }} onClick={toggleSidebar} /> {/* Ícono para mostrar/ocultar */}
            
            <section id="estructuralismo">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ flex: '3', paddingRight: '20px' }}>
                        <h2>Estructuralismo</h2>
                        <h3>Objeto de estudio</h3>
                        <ul>
                            <li>La experiencia inmediata dentro del campo de la conciencia.                            </li>
                        </ul>
                        <h3>Conceptos</h3>
                        <ul>
                            <li>La Universidad de Leipzig establecen las bases de la corriente en Alemania y se termina de desarrollar en Norte America                            </li>
                            <li>La psicofisiologia de la vista y el oído</li>
                            <li>Los diversos tiempos de reacción </li>
                            <li>Fenómenos de la psicofisica y de asociaciones verbales.</li>
                            <li>Analizar los contenidos de la ciencia, con la finalidad de descubrir la estructura de la mente. la mente como 3 elementos:</li>
                            <li>Sensaciones ( reacción hacia un estímulo )</li>
                            <li>Imágenes ( reacción generada por la mente: ejemplo, recuerdos )</li>
                            <li>Sentimientos ( emoción que acompaña a una experiencia )</li>
                        </ul>
                    </div>
                    <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <div>
                            <img src="image1-url" alt="Estructuralismo 1" style={{ width: '100%', borderRadius: '5px' }} />
                            <p>Descripción de la imagen 1.</p>
                        </div>
                        <div>
                            <img src="image2-url" alt="Estructuralismo 2" style={{ width: '100%', borderRadius: '5px' }} />
                            <p>Descripción de la imagen 2.</p>
                        </div>
                        <div>
                            <img src="image3-url" alt="Estructuralismo 3" style={{ width: '100%', borderRadius: '5px' }} />
                            <p>Descripción de la imagen 3.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="funcionalismo">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ flex: '3', paddingRight: '20px' }}>
                        <h2>Funcionalismo</h2>
                        <h3>Objeto de estudio</h3>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        </ul>
                        <h3>Conceptos</h3>
                        <ul>
                            <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                        </ul>
                    </div>
                    <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <div>
                            <img src="image1-url" alt="Funcionalismo 1" style={{ width: '100%', borderRadius: '5px' }} />
                            <p>Descripción de la imagen 1.</p>
                        </div>
                        <div>
                            <img src="image2-url" alt="Funcionalismo 2" style={{ width: '100%', borderRadius: '5px' }} />
                            <p>Descripción de la imagen 2.</p>
                        </div>
                        <div>
                            <img src="image3-url" alt="Funcionalismo 3" style={{ width: '100%', borderRadius: '5px' }} />
                            <p>Descripción de la imagen 3.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="reflexologia">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ flex: '3', paddingRight: '20px' }}>
                        <h2>Reflexología</h2>
                        <h3>Objeto de estudio</h3>
                        <ul>
                            <li>Reflejo condicionado en el comportamiento a través del método experimental</li>
                        </ul>
                        <h3>Conceptos Principales</h3>
                        <ul>
                        <li>Surge a principios del siglo XX en Rusia con los experimentos de Pávlov y Vladimir.</li>
                            <li>Reflejo condicionado: estímulo indiferente a si mismo que de forma temporaria se transforma en un estímulo natural </li>
                            <li>Reflejo incondicionado: es una respuesta de reflejo de forma inconsciente</li>
                            <li>Bejterev amplía el reduccionismo radical al ver fenómenos psíquicos a través de reflejos condicionados.</li>
                            <li> niega las asociaciones dentro de la esfera mental, diciendo que estas son reflejos. Para Bejterev existía una prioridad excesiva de los objetivo sobre lo subjetivo</li>
                        </ul>
                    </div>
                    <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <div>
                            <img src="image1-url" alt="Reflexología 1" style={{ width: '100%', borderRadius: '5px' }} />
                            <p>Descripción de la imagen 1.</p>
                        </div>
                        <div>
                            <img src="image2-url" alt="Reflexología 2" style={{ width: '100%', borderRadius: '5px' }} />
                            <p>Descripción de la imagen 2.</p>
                        </div>
                        <div>
                            <img src="image3-url" alt="Reflexología 3" style={{ width: '100%', borderRadius: '5px' }} />
                            <p>Descripción de la imagen 3.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="conductivismo">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ flex: '3', paddingRight: '20px' }}>
                        <h2>Conductivismo</h2>
                        <h3>Objeto de estudio</h3>
                        <ul>
                            <li></li>
                        </ul>
                        <h3>Conceptos</h3>
                        <ul>
                            <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                        </ul>
                    </div>
                    <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <div>
                            <img src="image1-url" alt="Conductivismo 1" style={{ width: '100%', borderRadius: '5px' }} />
                            <p>Descripción de la imagen 1.</p>
                        </div>
                        <div>
                            <img src="image2-url" alt="Conductivismo 2" style={{ width: '100%', borderRadius: '5px' }} />
                            <p>Descripción de la imagen 2.</p>
                        </div>
                        <div>
                            <img src="image3-url" alt="Conductivismo 3" style={{ width: '100%', borderRadius: '5px' }} />
                            <p>Descripción de la imagen 3.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="gestalt">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ flex: '3', paddingRight: '20px' }}>
                        <h2>Gestalt</h2>
                        <h3>Objeto de estudio</h3>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        </ul>
                        <h3>Conceptos</h3>
                        <ul>
                            <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                        </ul>
                    </div>
                    <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <div>
                            <img src="image1-url" alt="Gestalt 1" style={{ width: '100%', borderRadius: '5px' }} />
                            <p>Descripción de la imagen 1.</p>
                        </div>
                        <div>
                            <img src="image2-url" alt="Gestalt 2" style={{ width: '100%', borderRadius: '5px' }} />
                            <p>Descripción de la imagen 2.</p>
                        </div>
                        <div>
                            <img src="image3-url" alt="Gestalt 3" style={{ width: '100%', borderRadius: '5px' }} />
                            <p>Descripción de la imagen 3.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="psicoanalisis">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ flex: '3', paddingRight: '20px' }}>
                        <h2>Psicoanálisis</h2>
                        <h3>Objeto de estudio</h3>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        </ul>
                        <h3>Conceptos</h3>
                        <ul>
                            <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                        </ul>
                    </div>
                    <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <div>
                            <img src="image1-url" alt="Psicoanálisis 1" style={{ width: '100%', borderRadius: '5px' }} />
                            <p>Descripción de la imagen 1.</p>
                        </div>
                        <div>
                            <img src="image2-url" alt="Psicoanálisis 2" style={{ width: '100%', borderRadius: '5px' }} />
                            <p>Descripción de la imagen 2.</p>
                        </div>
                        <div>
                            <img src="image3-url" alt="Psicoanálisis 3" style={{ width: '100%', borderRadius: '5px' }} />
                            <p>Descripción de la imagen 3.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="humanismo">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ flex: '3', paddingRight: '20px' }}>
                        <h2>Humanismo</h2>
                        <h3>Objeto de estudio</h3>
                        <ul>
                            <li>Objeto de estudio: Las significaciones conscientes que permiten la comprensión existencial del hombre</li>
                        </ul>
                        <h3>Conceptos</h3>
                        <ul>
                            <li>Fecha y lugar de origen: Estados unidos a finales de la década del 50. Aprox. 1957 Gestación en Europa. Kurt Goldstein (considerado el fundador), Abraham H. Maslow y Carll R. Rogers.</li>
                            <li>Se opone al conductismo y al psicoanálisis freudiano                            </li>
                            <li>Hace una llamada de atención a la conciencia, responsabilidad y libertad individuales                            </li>
                            <li>Busca abrir la vasta y crucial vida interior del hombre, con vistas a liberar sus potencialidades y lograr la máxima autorrealización.                            </li>
                            <li>los contenidos conscientes constituyen la base para la comprensión existencial del hombre.                            </li>
                            <li>la libertad humana como proceso de deliberación consciente en lo que respecta a la toma de decisiones y elecciones que realiza el ser humano                            </li>
                            <li>Busca comprender los significados de la conducta humana                            </li>
                            <li>Psicoterapia no-directiva: el terapeuta debe abstenerse de toda injerencia en el curso del proceso terapéutico</li>
                        </ul>
                    </div>
                    <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <div>
                            <img src="image1-url" alt="Humanismo 1" style={{ width: '100%', borderRadius: '5px' }} />
                            <p>Descripción de la imagen 1.</p>
                        </div>
                        <div>
                            <img src="image2-url" alt="Humanismo 2" style={{ width: '100%', borderRadius: '5px' }} />
                            <p>Descripción de la imagen 2.</p>
                        </div>
                        <div>
                            <img src="image3-url" alt="Humanismo 3" style={{ width: '100%', borderRadius: '5px' }} />
                            <p>Descripción de la imagen 3.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="cognitivismo">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ flex: '3', paddingRight: '20px' }}>
                        <h2>Cognitivismo</h2>
                        <h3>Objeto de estudio</h3>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        </ul>
                        <h3>Conceptos</h3>
                        <ul>
                            <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                        </ul>
                    </div>
                    <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <div>
                            <img src="image1-url" alt="Cognitivismo 1" style={{ width: '100%', borderRadius: '5px' }} />
                            <p>Descripción de la imagen 1.</p>
                        </div>
                        <div>
                            <img src="image2-url" alt="Cognitivismo 2" style={{ width: '100%', borderRadius: '5px' }} />
                            <p>Descripción de la imagen 2.</p>
                        </div>
                        <div>
                            <img src="image3-url" alt="Cognitivismo 3" style={{ width: '100%', borderRadius: '5px' }} />
                            <p>Descripción de la imagen 3.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="mapa">
                <div style={{ textAlign: 'center', marginTop: '40px' }}>
                    <h2>Mapa</h2>
                    <img src="map-image-url" alt="Mapa" style={{ width: '80%', borderRadius: '10px' }} />
                </div>
            </section>
        </div>
    );
};

export default Content;
