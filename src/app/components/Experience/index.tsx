import React from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";

import './experience.css';
import experiences from './experiences.json'
interface ExperienceItem {
    key: string,
    title: string,
    company: string,
    location: string,
    start: string,
    end: string | null
}

export const Experience: React.FC = () => {
    return (
        <Element name="experience">
            <motion.section
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h1>Experience</h1>
                <p>
                    Below is a list of my current and past experience. 
                </p>

                <ul>
                    {experiences
                        .sort((a, b) => new Date(b.start).getTime() - new Date(a.start).getTime())
                        .map((exp: ExperienceItem) => (
                            <li key={exp.key} className="experience-item">
                                <h3>{exp.title}</h3>
                                <p>Company: {exp.company}</p>
                                <p>Location: {exp.location}</p>
                                <p>
                                    Duration: {exp.start} - {exp.end ?? "Current"}
                                </p>
                            </li>
                        ))}
                </ul>
            </motion.section>
        </Element>
    );
}

export default Experience;