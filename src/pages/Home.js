import React from 'react';
import chicky from '../components/images/chicky_talking.gif';
import './Home.css';
import Typed from "react-typed";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment} from '@fortawesome/free-solid-svg-icons';

function Home() {
    return (
        <div id = "home">
            <img src={chicky} id = "chicky" alt="Chicky the chick" class = "fade-in-image"/>
            <div id = "chickySpeech" class = "fade-in-image">
            <div id = "chickyDialogue">
            <Typed
      strings={[
            "hi i'm chicky, welcome to my home!",
            "my creator is not here right now, but keep scrolling if you would like to learn more about her!",
          ]}
          typeSpeed={150}
          backSpeed={100}
          loop
        />    
        </div>     
            <FontAwesomeIcon icon={faComment} id = "speechBubble"
            />
        </div>
        </div>
    )

}


export default Home;