import React from "react";
import { Element } from "react-scroll";

export const Contact: React.FC = () => {
    return (
        <Element name="contact">
            <section>
                <h1>Contact</h1>
                <p>
                    Want to get in touch? I'm always open to hearing new ideas, suggestions, or opportunities.
                </p>
                <p> 
                    Feel free to email me at: <a href="mailto:aaronfalk25@gmail.com" className="text-blue-500 hover:underline">aaronfalk25@gmail.com</a>
                </p>
            </section>
        </Element>
    );
}

export default Contact;