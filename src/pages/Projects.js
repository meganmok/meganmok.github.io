import React, { useState } from 'react';
import FadeIn from 'react-fade-in';
import './Projects.css';
import shell from '../components/images/shell_app.png';
import apple from '../components/images/apple_app.png';
import canvas from '../components/images/canvas_app.png';
import cart from '../components/images/cart_app.png';
import shiba from '../components/images/shiba_app.png';
import linux from '../components/images/linux_terminal.png';
import mac from '../components/images/mac_terminal.png';
import canvas_info from '../components/images/canvas_algo.png';
import tiktokpets from '../components/images/tiktokpets.png';
import igshop from '../components/images/ig_shop.png';
import dm from '../components/images/dm_app.png';
import travel from '../components/images/travel_app.png';
import ec from '../components/images/espressco_app.png';

function Projects() {
  const [isShown, setIsShown] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);
  const [isShown4, setIsShown4] = useState(false);
  const [isShown5, setIsShown5] = useState(false);
  const [isShown6, setIsShown6] = useState(false);
  const [isShown7, setIsShown7] = useState(false);
  const handleClick = event => {
    setIsShown(current => !current);
    setIsShown2(false);
    setIsShown3(false);
    setIsShown4(false);
    setIsShown5(false);
    setIsShown6(false);
    setIsShown7(false);
  };
    return (
      <div id = "projects">
        <div id = "projectHeader">
        <p id = "projectTitle" className = "headerContent"> personal projects</p>
        </div>
        <div id = "projectMiddle">
        {isShown && (<div>  
    <FadeIn>
    <p id = "shellCommand" className= "typewriter"> cat description.txt </p>
    <p id = "shellDescription1" className= "shellText"> a C program that is designed to emulate the linux shell, by creating a shell environment for the user. 
</p>
<p id = "shellDescription2" className= "shellText"> implements basic directory functions, in addition to the incorporation of a directory stack. 
</p>
<p id = "shellDescription3" className= "shellText"> handles simple commands, the piping of multiple commands, as well as standard input and output redirection.
</p>
    <img src = {linux} id = "linux" alt = "linux" />
    </FadeIn>
</div>)}
        </div>
        <div id = "projectBottom">
        <div id = "designs">
        <p className = "groupName"> designs</p>
        <div id = "designsContainer" className = "container"> 
        <img src = {dm} className = "app" id = "dm" alt = "dailymood" />
        <img src = {travel} className = "app" id = "travel" alt = "travel" />
        <img src = {cart} className = "app" id = "cart" alt = "cart"/>
        </div>
        </div>
        {/* end of designs */}

        <div id = "websites"> 
        <p className = "groupName"> websites</p>
        <div id = "sitesContainer" className = "container"> 
        <img src = {ec} className = "app" id = "ec" alt = "espressco" />
        <img src = {shiba} className = "app" id = "shiba" alt = "tiktokpets" />
        </div>
        </div>

        {/* end of websites */}

        <div id = "programs">
        <p className = "groupName"> programs</p>
        <div id = "progsContainer" className = "container"> 
        <img src = {shell} className = "app" id = "shell" alt = "shell" onClick = {handleClick}/>
        <img src = {apple} className = "app" id = "apple" alt = "apple"/>
        <img src = {canvas} className = "app" id = "canvas" alt = "canvas"/>
        </div>
          </div>
          </div>
        {/* end of programs */}

          </div>
    );
}

export default Projects;