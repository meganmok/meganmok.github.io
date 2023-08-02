import React, { useEffect } from 'react';
import './AboutMe.css';
import meggy from '../components/images/meggy_and_chicky.png';
import Aos from "aos";

function AboutMe() {
    useEffect(() => {
        Aos.init({
            disable: window.matchMedia('(prefers-reduced-motion: reduce)')
        });
    }, []);
    return (
        <div data-aos = "fade-up" data-aos-easing="ease-in-out" data-aos-duration= "1200" id = "aboutme" data-aos-once="true">
        <h1>
        <img src = {meggy} id = "meggy" alt = "meggy" />
        <div id = "bio">
        <p id = "name"> megan mok</p>
        <p id = "job"> software engineer </p>
        </div>
        </h1>
        <div id = "introContainer">
        <p id = "title"> about me</p>
        <div id = "intro">
        <div className = "emojiText">
        <span role="img" aria-labelledby="wave" className = "emoji" id = "wave"> 👋 </span>
        <p className= "introText">
        hi my name is megan! i am currently a uc davis alum seeking job opportunities within web development and ux engineering. 
        </p>
        </div>
        <div className = "emojiText">
        <span role="img" aria-labelledby="egg" className = "emoji" id = "boiledEgg"> 🥚 </span>
        <p className= "introText">
        i designed this website around eggs, since my friends like to call me “meg” (which rhymes with “egg”) and i love eggs! 
        </p>
        </div>
        <div className = "emojiText">
        <span role="img" aria-labelledby="paint" className = "emoji" id = "paint"> 🎨 </span>
        <p className= "introText">
        as you scroll through, you will be able to see some projects i have worked on!
        </p>
        </div>
        <div className = "emojiText">
        <span role="img" aria-labelledby="laptop" className = "specialEmoji" id = "laptop"> 💻️ </span>
        <p className= "introText">
        this site was drawn, coded, and animated by me! 
        </p>
        </div>
        <div className = "emojiText">
        <span role="img" aria-labelledby="smile" className = "specialEmoji" id = "smile"> 😄 </span>
        <p className= "introText">
        some of the icons on my site animate, so have fun exploring! 
        </p>
        </div>
        </div>
        </div>
        </div>
    )
}

export default AboutMe;