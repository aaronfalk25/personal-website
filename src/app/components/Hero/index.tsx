import React from "react";
import { Element } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Hero: React.FC = () => {
    return (
        <Element name="hero" className='border border-gray-200 rounded p-6'>
            <h1 className='title'>I'm Aaron Falk</h1>
            <p>
                I'm a student at The Pennsylvania State University, currently pursuing my Bachelor's in Computer Science with a minor in mathematics.
                I will be graduating in December 2024.
                As I am studying my coursework, I am learning how to become a software engineer that helps build dynamic, user-friendly applications.
            </p>
            <p>
                In my free time, you can find me working on personal projects, lifting weights, or picking up a new hobby.
            </p>

            <div className='mt-20'>
                <a href="https://www.linkedin.com/in/aaron-falk-730427229/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className='icon' />
                </a>
                <a href="https://github.com/aaronfalk25" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className='icon' />
                </a>
            </div>

        </Element>
    );
}

export default Hero;
