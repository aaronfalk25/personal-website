'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';

import { useAppContext } from '@/context';


export const ThemePicker: React.FC = () => {
    const { theme, setTheme } = useAppContext();

    const handleThemeChange = () => {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    return (
        <div>
            <button onClick={handleThemeChange}>
                {theme === "light" ? 
                <FontAwesomeIcon icon={faMoon} size="xl"/>
                :
                <FontAwesomeIcon icon={faSun} size="xl"/>
                }
            </button>
        </div>
    );
}