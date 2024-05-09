'use client';
import './styles.css'

import { ThemePicker } from './ThemePicker';
import { Link } from 'react-scroll';

export const Navbar = () => {
    type Linker = {
        name: string;
        to: string;
    }

    function mapper(link: Linker) {
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
    ]

    return (
        <nav className = 'mb-2'>
            {links.map(mapper)}
            <ThemePicker/>
        </nav>
    );
}

export default Navbar;