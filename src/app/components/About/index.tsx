import React from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";

export const About: React.FC = () => {
    return (
        <Element name="about">
            <motion.section
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h1>About</h1>
                <p>
                I view the field of software development as the most artistic form of problem-solving in modern engineering.
                The crux of computer science is taking on a new problem and delivering a solution that is elegant, precise, and carefully crafted.
                </p>
                <p>
                Currently, I'm working as a software developer at Capital One where I build enterprise-grade software. 
                Design and intent are at the forefront of the work I do, and no solution gets built without preserving observability and maintainability.
                </p>
                <p>
                Outside of professional work, I am an avid believer in community and valued friendships.
                Whether it&apos;s playing volleyball, hiking, or just hanging out with friends, I am always looking for ways to connect with others.
                I am excited to bring this same sense of community and value with me in all steps of life.
                </p>
            </motion.section>
        </Element>
    );
}

export default About;