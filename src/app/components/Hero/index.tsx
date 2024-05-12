'use client';

import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import "./hero.css";

const Hero: React.FC = () => {
    const [gradient, setGradient] = useState<string>('linear-gradient(90deg, rgba(131, 58, 180, 1) 0%, rgba(253, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%)');
    const [degrees, setDegrees] = useState<number>(90);

    // Rotate gradient using timer
    useEffect(() => {
        const intervalId = setInterval(() => {
            setDegrees(prevDegrees => {
                const newDegrees = prevDegrees + 1;
                const newGradient = `linear-gradient(${newDegrees}deg, rgba(131, 58, 180, 1) 0%, rgba(253, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%)`;
                setGradient(newGradient);
                return newDegrees;
            });
        }, 80);
    
        return () => clearInterval(intervalId);
    }, []);

    return (
        <Element name="hero">
            <section className="hero-frame"  style={{ background: gradient }} id='hero-frame'>
                <h1 className='title'>I'm Aaron Falk</h1>
                <div className='flex flex-row'>
              
                    <div className="mx-auto my-10" style={{ flex: '8' }}>
                        <p className='text-xl'>
                            I'm a student at The Pennsylvania State University, currently pursuing my Bachelor's in Computer Science with a minor in mathematics.
                            I will be graduating in December 2024.
                            As I am studying my coursework, I am learning how to become a software engineer that helps build dynamic, user-friendly applications.
                        </p>
                        <p className='text-xl'>
                            In my free time, you can find me working on personal projects, lifting weights, or picking up a new hobby.
                        </p>
                    </div>

                    
                    <div style={{ flex: '2' }}>
                        <img src="me.jpg" alt="Aaron Falk" className='img' id='profile-pic' />

                        <div className='p-4 m-auto'>
                            <a href="https://www.linkedin.com/in/aaron-falk-730427229/" target="_blank" rel="noopener noreferrer" className='px-2'>
                                <FontAwesomeIcon icon={faLinkedin} className='icon' />
                            </a>
                            <a href="https://github.com/aaronfalk25" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} className='icon' />
                            </a>
                        </div>
                    </div>

                </div>


                
            </section>

        </Element>
    );
}

export default Hero;
