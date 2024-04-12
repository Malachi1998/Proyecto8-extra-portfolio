import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import AnimatedLetters from '../AnimatedLetters';
//import LogoTitle from '../../assets/images/logo-s.png'
// import Logo from './Logo'
import './index.scss';
import Loader from 'react-loaders';
import imageMountain from '../../assets/images/foto-monte.jpeg';



const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['M', 'i', 'r', 'a', 'c', 'l', 'e', '.'];
    const jobArray = [
        'w',
        'e',
        'b',
        ' ',
        'd',
        'e',
        'v',
        'e',
        'l',
        'o',
        'p',
        'e',
        'r',
        '.',
    ] /*Aquí inicialicé el estado letterClass con el valor inicial 'text-animate'. nameArray y jobArray son matrices que contienen las letras de las palabras "Miracle" y "Web Developer" */

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);

        // Limpiar el temporizador al desmontar el componente
        return () => clearTimeout(timeoutId);
    }, []) /* Cuando la clase cambia a 'text-animate-hover', se activa un nuevo estilo o animación. */

    return (
        <>
            <main className="container home-page">
                <article className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>This </span>

                        <span className={`${letterClass} _14`} style={{ marginLeft: '15px' }}>i</span> {/*Da un margen izquierdo a la letra i para que se vea acoplada al logo giratorio  "S" */}
                        <img src={LogoTitle} alt="developer" /> {/*Logo ANIMADO */}

                        <br />

                        <span className={letterClass}>
                            <AnimatedLetters
                                letterClass={letterClass}
                                strArray={nameArray}
                                idx={15}
                            /> {/*Letras animadas de Miracle */}
                        </span>

                        <br />

                        <span className={letterClass}>
                            <AnimatedLetters
                                letterClass={letterClass}
                                strArray={jobArray}
                                idx={22}
                            /> {/*Letras animadas de web developer */}
                        </span>

                        {/* "Miracle" y "Web Developer" son envueltas en elementos span con la clase letterClass. Estas clases se actualizarán debido al efecto de temporizador, lo que cambiará el estilo o la animación de las letras. */}

                    </h1>
                    <h2>Frontend Developer/ JavaScript Export / Double Degree in Law and Philosophy</h2>
                    <Link to="/contact" className="flat-button">
                        Contact Me
                    </Link>

                </article>
                {/* <Logo /> */}
                <aside className="image-container-mountain">
                    <img src={imageMountain} alt="image in the mountain" />
                </aside>

            </main>
            <Loader type="pacman" />
        </>
    );
};

export default Home;
