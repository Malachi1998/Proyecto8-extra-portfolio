// Importa los estilos y componentes necesarios
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import React, { useState, useEffect } from 'react';
import Loader from 'react-loaders';


// Importa los iconos de marcas desde la biblioteca
import { faAngular, faHtml5, faCss3, faReact, faGitAlt } from '@fortawesome/free-brands-svg-icons'; //Importación de Logo

// Importa el componente FontAwesomeIcon de la nueva biblioteca
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Define el componente About
const About = () => {
    // Estado y efecto para manejar las animaciones
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        // Limpiar el temporizador al desmontar el componente
        return () => clearTimeout(timeoutId);
    }, []);

    // JSX del componente About
    return (
        <section className='container about-page'>
            <main className='text-zone'>
                <article>
                    <header>
                        <h1>
                            <AnimatedLetters
                                letterClass={letterClass}
                                strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o',]}
                                idx={15}
                            />
                        </h1>
                    </header>

                    <section className= "subtitle">
                    <p>Mis proyectos web</p>
                    </section>

                    <ol>
                        <li>Landing Page: "Guitarras Vivas"</li>
                        <p>Tecnologías:</p>
                        <p>Descripción del proyecto: lore</p>

                        <li>E-coomerce</li>
                        <p>Tecnologías:</p>
                        <p>Descripción del proyecto:</p>

                        <li>Marvel Api"</li>
                        <p>Tecnologías:</p>
                        <p>Descripción del proyecto:</p>


                        <li>MERN</li>
                        <p>Tecnologías:</p>
                        <p>Descripción del proyecto:</p>

                        <li>Hackaton: Desmos</li>
                        <p>Tecnologías:</p>
                        <p>Descripción del proyecto:</p>

                        <li>Proyecto Salas</li>
                        <p>Tecnologías:</p>
                        <p>Descripción del proyecto:</p>
                    </ol>

                </article>





            </main>
            <aside className='stage-cube-cont'>
                <div className='cubespinner'>
                    {/* Utiliza el componente FontAwesomeIcon para cada ícono */}
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                </div>
            </aside>
            {/* Componente Loader */}
            <Loader type="pacman" />
        </section>
    );
}

// Exporta el componente About
export default About;
