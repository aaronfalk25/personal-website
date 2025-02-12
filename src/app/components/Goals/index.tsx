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
                    <li>Read the Bible chronologically (<a target="_blank" rel="noopener noreferrer" href="https://www.blueletterbible.org/assets-v3/pdf/dbrp/1Yr_ChronologicalPlan.pdf" >This is what I&apos;m following</a>).</li>
                    <li>Complete 250+ DSA problems on Leetcode.</li>
                    <li>Obtain an AWS associate certification.</li>
                    <li>Reach the following gym milestones: squat 315, deadlift 405, bench 275.</li>
                </ol>
            </motion.section>
        </Element>
    );
}

export default Goals;