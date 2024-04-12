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
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e',]}
                        idx={15}
                    />
                </h1>
                <p>
                In my journey as a web developer, I am fueled by an insatiable curiosity and a passion for continuous learning. This drive emanates not only from the intricate world of coding and software development but is equally grounded in my pursuit of philosophy and juristic studies. Embracing the harmonious convergence of these diverse disciplines, I am deeply motivated to explore the intricate intersections where technology, philosophy, and law coalesce, fostering a holistic and enriched understanding that propels my growth as both a developer and a student of profound intellectual realms.
                </p>
                <br />
                <p>
                As a junior student at Factoria F5, I am not only developing my technical skills in web development but also honing a flexible and collaborative mindset essential for effective teamwork. Adaptability is ingrained in my learning journey, since I have been drequested to integrate into diverse team environments.
                </p>
                <br />
                <p>
                Known for my humility and politeness, I approach every interaction with a sincere and respectful demeanor. Whether collaborating with peers or engaging in discussions, I prioritize active listening and value the perspectives of others. 
                </p>
            </div>
            <div className='stage-cube-cont'>
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
                </div>
            </div>
            {/* Componente Loader */}
            <Loader type="pacman" />
        </div>
    );
}

// Exporta el componente About
export default About;
