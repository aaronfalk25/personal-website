import React from "react";
import { Element } from "react-scroll";

export const About: React.FC = () => {
    return (
        <Element name="about">
            <h1>About</h1>
            <p>
                This is a Next.js app with TypeScript, ESLint, Prettier, and Tailwind CSS.
            </p>
        </Element>
    );
}

export default About;