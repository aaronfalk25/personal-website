import React from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";

import './experience.css';

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
                    Currently, I have 2 years of experience in software development. This extends from clubs at Penn State to internships at companies.
                    Below, I have listed my professional internship experience.
                </p>

                <ul>
                    <li key="PGT" className='experience-item'>
                        <h3>Applied Technology Intern</h3>
                        <p>Company: PGT Trucking</p>
                        <p>Location: Hopewell, PA</p>
                        <p>Duration: May 2022 - August 2023</p>
                    </li>
                    <li key="Medart" className='experience-item'>
                        <h3>IT Intern</h3>
                        <p>Company: Medart</p>
                        <p>Location: Ellwood City, PA</p>
                        <p>Duration: May 2024</p>
                    </li>
                    <li key="LifeWay" className='experience-item'>
                        <h3>Software Engineering Intern (Incoming)</h3>
                        <p>Company: LifeWay Christian Resources</p>
                        <p>Location: Nashville, TN (Remote)</p>
                        <p>Duration: June 2024 - August 2024</p>
                    </li>
                </ul>
            </motion.section>
        </Element>
    );
}

export default Experience;