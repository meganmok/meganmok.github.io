import React from 'react';
import './Footer.css';
import smiley_chicky from '../components/images/smiley_talk.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment} from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <div id = "footer">
        <img src={smiley_chicky} id = "smiley" alt="smiley chicky" data-aos = "fade-in"  data-aos-easing="ease-in-out" data-aos-duration= "1500" data-aos-once="true"/>
        <div id = "goodbyeSpeech" data-aos = "fade-in"  data-aos-easing="ease-in-out" data-aos-delay= "900" data-aos-duration= "1200" data-aos-once="true" >
        <div id = "goodbyeDialogue" > thanks for visiting! </div>
        <FontAwesomeIcon icon={faComment} id = "goodbye"/>
        </div>
    </div>
    )

}


export default Footer;