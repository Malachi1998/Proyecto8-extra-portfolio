// Importa los estilos y componentes necesarios
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import React, { useState, useEffect } from 'react';
import Loader from 'react-loaders';
import imageCoffeShop from '../../assets/images/foto-cafe.jpeg'



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

    const images = ['imagen1.jpg', 'imagen2.jpg', 'imagen3.jpg']; // Lista de imágenes

    const Carousel = () => {
        const [currentImageIndex, setCurrentImageIndex] = useState(0);

        useEffect(() => {
            // Cambia la imagen automáticamente cada 3 segundos
            const interval = setInterval(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 3000);

            return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
        }, []);
    }

    // JSX del componente About
    return (
        <section className='container about-page'>
            <main className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e',]}
                        idx={15}
                    />
                </h1>

                <div className="textAboutMe">
                <p >
                    In my journey as a web developer, I am fueled by an insatiable curiosity and a passion for continuous learning. This drive emanates not only from the intricate world of coding and software development but is equally grounded in my pursuit of philosophy and juristic studies. Embracing the harmonious convergence of these diverse disciplines, I am deeply motivated to explore the intricate intersections where technology, philosophy, and law coalesce, fostering a holistic and enriched understanding that propels my growth as both a developer and a student of profound intellectual realms.
                </p>
                <br />
                <p >
                    As a junior student at Factoria F5, I am not only developing my technical skills in web development but also honing a flexible and collaborative mindset essential for effective teamwork. Adaptability is ingrained in my learning journey, since I have been drequested to integrate into diverse team environments.
                </p>
                <br />
                <p >
                    Known for my humility and politeness, I approach every interaction with a sincere and respectful demeanor. Whether collaborating with peers or engaging in discussions, I prioritize active listening and value the perspectives of others.
                </p>

                </div>

            </main>
            <aside className='image-content'>

             <img src= {imageCoffeShop} alt= "Miracle en un caffeShop"/>

            </aside>
            {/* Componente Loader */}
            <Loader type="pacman" />
        </section>
    );
}

// Exporta el componente About
export default About;
