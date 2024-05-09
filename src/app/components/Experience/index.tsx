import React from "react";
import { Element } from "react-scroll";

export const Experience: React.FC = () => {
    return (
        <Element name="experience">
            <h1>Experience</h1>
            <ul>
                <li>
                    <h2>Title 1</h2>
                    <p>Company: XXX</p>
                    <p>Location: XXX</p>
                    <p>Duration: XXX</p>
                </li>
                <li>
                    <h2>Title 2</h2>
                    <p>Company: XXX</p>
                    <p>Location: XXX</p>
                    <p>Duration: XXX</p>
                </li>
            </ul>
        </Element>
    );
}

export default Experience;