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
          <iframe frameborder="0" title="daily mood" width="372px" height="650px" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fneq1I7gN4DN84bdRlN6XGh%2FdailyMOOd%3Fkind%3D%26node-id%3D669-3832%26page-id%3D90%253A167%26scaling%3Dscale-down%26starting-point-node-id%3D669%253A3832%26t%3DxIHoYS2W0bBJcvt9-1%26type%3Ddesign%26mode%3Ddesign%26hide-ui%3D1" allowFullScreen> </iframe>
          </div>)}
        </div>

        <div id = "projectBottom">
        <div id = "designs">
        <p className = "groupName"> designs</p>
        <div id = "designsContainer" className = "container"> 
        <img src = {dm} className = "app" id = "dm" alt = "dailymood" onClick = {handleClick}/>
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
        <img src = {shell} className = "app" id = "shell" alt = "shell" />
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