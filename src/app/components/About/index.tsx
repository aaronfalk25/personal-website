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
                I am currently seeking opportunities to grow my skills and knowledge in software development. Whether that is a full-time position, internship, or a project collaboration, I am always open to new opportunities.
                As I am looking ahead to my graduation in December, I am excited to see where my journey in software development will take me.
                </p>
                <p>
                Outside of professional work, I am an avid believer in community and valued friendships.
                Whether it&apos;s playing volleyball, hiking, or just hanging out with friends, I am always looking for ways to connect with others.
                At Penn State, I&apos;ve had the great joy of knowing a deep and rich community, and I have learned what it means to be truly valued.
                I am excited to bring this same sense of community and value to my future workplace.
                </p>
            </motion.section>
        </Element>
    );
}

export default About;