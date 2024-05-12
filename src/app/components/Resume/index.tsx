import React from "react";
import { Element } from "react-scroll";

export const Resume: React.FC = () => {
    const openResume = () => {
        window.open('Aaron_Falk_Resume.pdf', '_blank');
    };
    

    return (
        <Element name="resume">
            <h1>Resume</h1>
            <p>
                Click the button below to view and download my resume.
            </p>
            <button 
                className='border rounded-md p-2 bg-blue-500 text-white mt-2 cursor-pointer hover:bg-blue-700'
                onClick={openResume}
            >
                Download Resume
            </button>
        </Element>
    );
}

export default Resume;