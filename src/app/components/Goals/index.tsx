import React from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";

export const Goals: React.FC = () => {
    return (
        <Element name="goals">
            <motion.section
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h1>Goals</h1>
                <h3>Want to know what I&apos;m up to in my free time? Here are some of the things I&apos;m trying to accomplish this year!</h3>
                <ol>
                    <li>Run a marathon</li>
                    <li>Read 20 books</li>
                    <li>Build more on my own time</li>
                </ol>
            </motion.section>
        </Element>
    );
}

export default Goals;