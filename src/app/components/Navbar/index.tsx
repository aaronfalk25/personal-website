'use client';
import './navbar.css'

import { ThemePicker } from './ThemePicker';
import { Link } from 'react-scroll';
import { motion, useScroll } from 'framer-motion';

export const Navbar = () => {
    type Linker = {
        name: string;
        to: string;
    }

    function linkMapper(link: Linker) {
        return (
            <>
            <Link
                className='link'
                to={link.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            > {link.name}
            </Link>
            {" "}
            </>
        );
    }
    const links = [
        { name: 'Home', to: 'hero' },
        { name: 'About', to: 'about' },
        { name: 'Experience', to: 'experience' },
        { name: 'Resume', to: 'resume' },
        { name: 'Contact', to: 'contact'}
    ]

    const { scrollYProgress } = useScroll();

    return (
        <div className='navbar-container hidden md:block'>
            <nav className = 'navbar'>
                {links.map(linkMapper)}
                <ThemePicker/>
            </nav>
            <motion.div
                style={{
                    scaleX: scrollYProgress,
                    backgroundColor: '#64ffda',
                    height: '5px',
                    transformOrigin: 'left'
                }}
            />
        </div>
    );
}

export default Navbar;