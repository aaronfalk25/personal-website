'use client';
import './navbar.css'

import { ThemePicker } from './ThemePicker';
import { Link } from 'react-scroll';

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

    return (
        <nav className = 'navbar'>
            {links.map(linkMapper)}
            <ThemePicker/>
        </nav>
    );
}

export default Navbar;