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
        <main className='container about-page'>
            <article className='text-zone'>
                <header>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['F', 'o', 'r', 'm', ' ', '-', 'C', 'o', 'n', 't', 'a', 'c', 't']}
                            idx={15}
                        />
                    </h1>
                </header>

                <form className="form">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" />

                    <label htmlFor="lastName">Last Name</label>
                    <input type="lastName" id="lastName" name="lastName" />

                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input type="phoneNumber" id="phoneNumber" name="phoneNumber" />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="4" />

                    <div className="terms">
                        <input type="checkbox" id="termsCheckbox" name="termsCheckbox" />
                        <label htmlFor="termsCheckbox">Acepto los términos y condiciones</label>
                    </div>

                    <button type="submit" className="submit-button">Submit</button>
                </form>




            </article>
            <aside className='stage-cube-cont'>
                <figure className='cubespinner'>
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
                </figure>
            </aside>
            {/* Componente Loader */}
            <Loader type="pacman" />
        </main>
    );
}

// Exporta el componente About
export default About;


