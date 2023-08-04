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
  {/*const [isShown, setIsShown] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);
  const [isShown4, setIsShown4] = useState(false);
  const [isShown5, setIsShown5] = useState(false);

  const handleClick = event => {
    // 👇️ toggle shown state
    setIsShown(current => !current);
    setIsShown2(false);
    setIsShown3(false);
    setIsShown4(false);
    setIsShown5(false);
    // 👇️ or simply set it to true
    // setIsShown(true);
  };
  const handleClick2 = event => {
    // 👇️ toggle shown state
    setIsShown2(current => !current);
    setIsShown(false);
    setIsShown3(false);
    setIsShown4(false);
    setIsShown5(false);
    // 👇️ or simply set it to true
    // setIsShown(true);
  };
  const handleClick3 = event => {
    // 👇️ toggle shown state
    setIsShown3(current => !current);
    setIsShown(false);
    setIsShown2(false);
    setIsShown4(false);
    setIsShown5(false);
    // 👇️ or simply set it to true
    // setIsShown(true);
  };
  const handleClick4 = event => {
    // 👇️ toggle shown state
    setIsShown4(current => !current);
    setIsShown(false);
    setIsShown2(false);
    setIsShown3(false);
    setIsShown5(false);
    // 👇️ or simply set it to true
    // setIsShown(true);
  };
  const handleClick5 = event => {
    // 👇️ toggle shown state
    setIsShown5(current => !current);
    setIsShown(false);
    setIsShown2(false);
    setIsShown3(false);
    setIsShown4(false);
    // 👇️ or simply set it to true
    // setIsShown(true);
  };*/}
    return (
      <div id = "projects">
        <div id = "projectHeader">
        <p id = "projectTitle" className = "headerContent"> personal projects</p>
        </div>

        <div id = "designs">
        <p className = "groupName"> designs</p>
        <div id = "designsRow1"> 
        <img src = {dm} className = "app" id = "dm" alt = "dailymood" />
        <img src = {travel} className = "app" id = "travel" alt = "travel" />
        </div>
        <div id = "designsRow2"> 
        <img src = {cart} className = "app" id = "cart" alt = "cart"/>
        </div>
        </div>
        {/* end of designs */}

        <div id = "websites"> 
        <p className = "groupName"> websites</p>
        <div id = "sitesRow1"> 
        <img src = {ec} className = "app" id = "ec" alt = "espressco" />
        <img src = {shiba} className = "app" id = "shiba" alt = "tiktokpets" />
        </div>
        </div>

        {/* end of websites */}

        <div id = "programs">
        <p className = "groupName"> programs</p>
        <div id = "progsRow1"> 
        <img src = {shell} className = "app" id = "shell" alt = "shell"/>
        <img src = {apple} className = "app" id = "apple" alt = "apple"/>
        </div>
        <div id = "progsRow2"> 
        <img src = {canvas} className = "app" id = "canvas" alt = "canvas"/>
        </div>
          </div>

        {/* end of programs */}

          </div>
    );
    {/*
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
        {isShown2 && (<div>  
            <FadeIn>
            <p id = "macCommand" className= "macTypewriter"> sh /Users/admin/macinit.sh </p>
            <p id = "macDescription1" className= "macText"> A script run on macOS Monterey that accelerates the initialization process of Mac computers administered by the Phoenix Cluster at UC Davis. </p>
            <p id = "macDescription2" className= "macText"> Provides hardware information about the Mac (such as Serial Number and IP Address) so that the device and its information can be easily updated in the Phoenix Cluster inventory system.</p>
            <p id = "macDescription3" className= "macText"> Automates the installation of integral programs that lie within Microsoft Office 365, as well as backup and antimalware programs to ensure safety and security. </p>
            <img src = {mac} id = "mac" alt = "mac" />
             </FadeIn>
        </div>)}
        {isShown3 && (<div>  
            <FadeIn>
            <img src = {canvas_info} id = "canvas_info" alt = "canvas info" />
             </FadeIn>
        </div>)}
        {isShown4 && (<div>  
            <FadeIn>
            <a href = "https://tiktokpets-stage-3-meganmok.ecs162-s22.repl.co/" target="_blank" rel="noopener noreferrer"> 
            <img src = {tiktokpets} id = "tiktokpets" alt = "tiktok pets" /> 
            </a>
             </FadeIn>
        </div>)}
        {isShown5 && (<div>  
            <FadeIn>
            <a href = "https://www.figma.com/proto/7IxMljoy3vMJ3IHSPDq4Da/Hi-Fi-Prototypes?node-id=27%3A2918&starting-point-node-id=27%3A2918" target="_blank" rel="noopener noreferrer">
            <img src = {igshop} id = "igshop" alt = "ig shop" /> 
            </a>
             </FadeIn>
        </div>)}
        <div id = "iconHolder">
        <div id = "iconBar">
        <img src = {shell} className = "app" id = "shell" alt = "shell" onClick = {handleClick}/>
        <img src = {apple} className = "app" id = "apple" alt = "apple" onClick = {handleClick2}/>
        <img src = {canvas} className = "app" id = "canvas" alt = "canvas" onClick = {handleClick3}/>
        <img src = {shiba} className = "app" id = "shiba" alt = "shiba" onClick = {handleClick4}/>
        <img src = {cart} className = "app" id = "cart" alt = "cart" onClick = {handleClick5}/>
        </div>
        </div> */}
}

export default Projects;