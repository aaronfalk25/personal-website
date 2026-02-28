'use client';

import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { motion } from "framer-motion";

import "./hero.css";

const Hero: React.FC = () => {
    const GRAD = "rgb(30, 14, 40) 0%, rgb(10, 38, 74) 50%, hsl(141, 81%, 22%) 100%";

    const [gradient, setGradient] = useState<string>(`linear-gradient(90deg, ${GRAD})`);
    const [degrees, setDegrees] = useState<number>(90);
    const [showIcons, setShowIcons] = useState<boolean>(false);

    // Rotate gradient using timer
    useEffect(() => {
        const MILLISECOND_WAIT = 80;
        const intervalId = setInterval(() => {
            setDegrees(prevDegrees => {
                const newDegrees = prevDegrees + 1;
                const newGradient = `linear-gradient(${newDegrees}deg, ${GRAD}`;
                setGradient(newGradient);
                
                // It takes a second for icons to load CSS styles to override FontAwesome default size. Use this to wait 80ms before showing icons.
                if (newDegrees == 91) {
                    setShowIcons(true);
                }

                return newDegrees;
            });
        }, MILLISECOND_WAIT);
    
        return () => clearInterval(intervalId);
    }, []);

    return (
        <Element name="hero">
            <motion.section
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="hero-frame"  
                style={{ background: gradient }} 
                id='hero-frame'
            >
                <h1 className='title mb-0'>I&apos;m Aaron Falk</h1>
                <h3 className='mt-0'><i>Software Developer</i></h3>
                <div className='flex flex-row'>
              
                    <div className="mx-auto my-10 md:px-10" style={{ flex: '15' }}>
                        <p className='text-xl xl:text-2xl 2xl:text-3xl'>
                            I&apos;m a software developer who builds, designs, and solves problems with intent and clarity. Often, the less the better; reduce entropy to pave the way for innovation.
                        </p>
                        <br></br>  
                        <p className='text-xl xl:text-2xl 2xl:text-3xl'>        
                            <i>"Simplicity is prerequisite for reliability."</i>
                        </p>
                    </div>

                    
                    <div style={{ flex: '5' }} className='hidden md:block'>
                        <img src="me.jpg" alt="Aaron Falk" className='img' id='profile-pic' />

                        { showIcons && 
                        <div className='p-4 m-auto'>
                            <a href="https://www.linkedin.com/in/aaron-falk-730427229/" target="_blank" rel="noopener noreferrer" className='px-2'>
                                <FontAwesomeIcon icon={faLinkedin} className='icon' />
                            </a>
                            <a href="https://github.com/aaronfalk25" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} className='icon' />
                            </a>
                        </div>
                        }
                    </div>

                </div>


                
            </motion.section>

        </Element>
    );
}

export default Hero;
