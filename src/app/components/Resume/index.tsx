import React from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";

export const Resume: React.FC = () => {
    const openResume = () => {
        window.open('Aaron_Falk_Resume.pdf', '_blank');
    };
    

    return (
        <Element name="resume">
            <motion.section
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h1>Resume</h1>
                <p>
                    Click the button below to view and download my resume.
                </p>
                <button 
                    className='rounded-md p-2 bg-blue-500 text-white mt-2 cursor-pointer hover:bg-blue-700'
                    onClick={openResume}
                >
                    View Resume
                </button>
            </motion.section>
        </Element>
    );
}

export default Resume;