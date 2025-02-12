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
                    Currently, I have 2 years of experience in software development. This extends from clubs at Penn State, internships at companies, and full time work.
                    Below, I have chronologically listed these experiences.
                </p>

                <ul>
                    {experiences.map((exp: ExperienceItem) => (
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