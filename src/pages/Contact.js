import React, { useEffect } from 'react';
import './Contact.css';
import meg from '../components/images/meg.png';
import mail from '../components/images/mail.png';
import linkedin from '../components/images/linkedin.png';
import github from '../components/images/github.png';
import Aos from "aos";


function Contact() {
    useEffect(() => {
        Aos.init({
            disable: window.matchMedia('(prefers-reduced-motion: reduce)')
        });
    }, []);
    return (
        <div id = "contact">
            <p id = "contactMe"> contact me </p>
            <div id = "contactMiddle">
            <img src={meg} id = "meg" alt="meg"/>
            <div id = "socials">
            <a href = "mailto: mpmok@ucdavis.edu" target="_blank" rel="noopener noreferrer">
            <img src={mail} id = "mail" className = "zoom" alt="mail"/> 
            </a>
            <a href = "https://www.linkedin.com/in/megan-mok/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} id = "linkedin" className = "zoom" alt="linkedin"/>
            </a>
            <a href = "https://github.com/meganmok" target="_blank" rel="noopener noreferrer"> 
            <img src={github} id = "github" className = "zoom" alt="github"/>
            </a>
            </div>
            </div>
            <div id = "iMessage">
            <p className="text" id = "firstText" data-aos = "fade-up" data-aos-easing="ease-in-out" data-aos-duration= "1000"  data-aos-once="true"> click the icons above to contact me! </p>
            <p className="text" id = "secondText" data-aos = "fade-up"  data-aos-easing="ease-in-out" data-aos-duration= "1000" data-aos-delay= "1000" data-aos-once="true"> i'm looking forward to hearing from you! </p>
            </div>
            </div>
    )
}

export default Contact;