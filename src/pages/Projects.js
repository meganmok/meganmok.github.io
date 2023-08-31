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
import dm_login from '../components/images/dm_login.png';
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
  const [isShown8, setIsShown8] = useState(false);
  const [coverShown2, setCover2] = useState(false);
  const [coverShown3, setCover3] = useState(false);

  const handleClick = event => {
    setIsShown(current => !current);
    setIsShown2(false);
    setIsShown3(false);
    setIsShown4(false);
    setIsShown5(false);
    setIsShown6(false);
    setIsShown7(false);
    setIsShown8(false);
    setCover3(false);
  };
  const handleClick2 = event => {
    setIsShown2(current => !current);
    setIsShown(false);
    setIsShown3(false);
    setIsShown4(false);
    setIsShown5(false);
    setIsShown6(false);
    setIsShown7(false);
    setIsShown8(false);
    setCover3(false);
  };  
  const handleClick3 = event => {
    setIsShown3(current => !current);
    setIsShown(false);
    setIsShown2(false);
    setIsShown4(false);
    setIsShown5(false);
    setIsShown6(false);
    setIsShown7(false);
    setIsShown8(false);
    setCover3(false);
  };
  const handleClick4 = event => {
    setIsShown4(current => !current);
    setIsShown(false);
    setIsShown2(false);
    setIsShown3(false);
    setIsShown5(false);
    setIsShown6(false);
    setIsShown7(false);
    setIsShown8(false);
    setCover3(false);
  };
  const handleClick5 = event => {
    setIsShown5(current => !current);
    setIsShown(false);
    setIsShown2(false);
    setIsShown3(false);
    setIsShown4(false);
    setIsShown6(false);
    setIsShown7(false);
    setIsShown8(false);
    setCover3(false);
  };
  const handleClick6 = event => {
    setIsShown6(current => !current);
    setIsShown(false);
    setIsShown2(false);
    setIsShown3(false);
    setIsShown4(false);
    setIsShown5(false);
    setIsShown7(false);
    setIsShown8(false);
    setCover3(false);
  };
  const handleClick7 = event => {
    setIsShown7(current => !current);
    setIsShown(false);
    setIsShown2(false);
    setIsShown3(false);
    setIsShown4(false);
    setIsShown5(false);
    setIsShown6(false);
    setIsShown8(false);   
    setCover3(false);
  };
  const handleClick8 = event => {
    setIsShown8(current => !current);
    setIsShown(false);
    setIsShown2(false);
    setIsShown3(false);
    setIsShown4(false);
    setIsShown5(false);
    setIsShown6(false);
    setIsShown7(false);
    setCover3(false);
  };
  const dmClick = event => {
    setCover2(current => !current);
    setIsShown2(false);
  };
  const igClick = event => {
    setCover3(current => !current);
    setIsShown3(false);
  };
    return (
      <div id = "projects">
        <div id = "projectHeader">
        <p id = "projectTitle" className = "headerContent"> personal projects</p>
        </div>
        <div id = "projectMiddle">
        {isShown && (
        <FadeIn>
          <div> 
          <iframe frameborder="0" title="dailymood" width="1000" height="500" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FQZQozvUXfCMURNVzpJq2ym%2FdailyMOOd-(Copy)%3Ftype%3Ddesign%26node-id%3D162-1718%26t%3Dbo08uXDVRrLAlOCN-1%26scaling%3Dscale-down%26page-id%3D90%253A167%26starting-point-node-id%3D162%253A1718%3D0%26mode%3Ddesign%26hide-ui%3D1" allowFullScreen> </iframe>   
          </div>
          </FadeIn> )}
          {coverShown2 && (
            <FadeIn>
            <div> 
          <iframe frameborder="0" title="shopapp" width="1000" height="500" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F7IxMljoy3vMJ3IHSPDq4Da%2FHi-Fi-Prototypes%3Ftype%3Ddesign%26node-id%3D27-2918%26t%3DcLuAbGg9P0zeUSNZ-1%26scaling%3Dscale-down%26page-id%3D27%253A2917%26starting-point-node-id%3D27%253A2918%3D0%26mode%3Ddesign%26hide-ui%3D1" allowFullScreen> </iframe>   
          </div>
            </FadeIn>
          )}
            {isShown2 && (
        <FadeIn>
          <div> 
          <img src = {dm_login} id = "dmlogin" alt = "dm login" onClick = {dmClick}/> 
          </div>
          </FadeIn> )}

          {coverShown3 && (
            <FadeIn>
            <div> 
          <iframe frameborder="0" title="shopapp" width="1000" height="500" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F7IxMljoy3vMJ3IHSPDq4Da%2FHi-Fi-Prototypes%3Ftype%3Ddesign%26node-id%3D27-2918%26t%3DcLuAbGg9P0zeUSNZ-1%26scaling%3Dscale-down%26page-id%3D27%253A2917%26starting-point-node-id%3D27%253A2918%3D0%26mode%3Ddesign%26hide-ui%3D1" allowFullScreen> </iframe>   
          </div>
            </FadeIn>
          )}
          {isShown3 && (
        <FadeIn>
          <div> 
          <img src = {igshop} id = "igshop" alt = "ig shop" onClick = {igClick}/> 
          </div>
          </FadeIn> )}
         {/* end of designs */}
         {isShown4 && (
        <FadeIn>
          <div> 
          <p id = "comingSoon"> coming soon! </p>
          </div>
          </FadeIn> )}
        </div>
        {isShown5 && (<div>  
            <FadeIn>
            <a href = "https://tiktokpets-stage-3-meganmok.ecs162-s22.repl.co/" target="_blank" rel="noopener noreferrer"> 
            <img src = {tiktokpets} id = "tiktokpets" alt = "tiktok pets" /> 
            </a>
             </FadeIn>
        </div>)}
        {/* end of websites */}
        {isShown6 && (<div>  
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
        {isShown7 && (<div>  
            <FadeIn>
            <p id = "macCommand" className= "macTypewriter"> sh /Users/admin/macinit.sh </p>
            <p id = "macDescription1" className= "macText"> A script run on macOS Monterey that accelerates the initialization process of Mac computers administered by the Phoenix Cluster at UC Davis. </p>
            <p id = "macDescription2" className= "macText"> Provides hardware information about the Mac (such as Serial Number and IP Address) so that the device and its information can be easily updated in the Phoenix Cluster inventory system.</p>
            <p id = "macDescription3" className= "macText"> Automates the installation of integral programs that lie within Microsoft Office 365, as well as backup and antimalware programs to ensure safety and security. </p>
            <img src = {mac} id = "mac" alt = "mac" />
             </FadeIn>
        </div>)}
        {isShown8 && (<div>  
            <FadeIn>
            <img src = {canvas_info} id = "canvas_info" alt = "canvas info" />
             </FadeIn>
        </div>)}
        {/* end of programs */}
        <div id = "projectDock">
        <div id = "designs">
        <p className = "groupName"> prototypes </p>
        <div id = "designsContainer" className = "container"> 
        <img src = {dm} className = "app" id = "dm" alt = "dailymood" onClick = {handleClick}/>
        <img src = {travel} className = "app" id = "travel" alt = "travel" onClick = {handleClick2}/>
        <img src = {cart} className = "app" id = "cart" alt = "cart" onClick = {handleClick3}/>
        </div>
        </div>
        {/* end of designs */}

        <div id = "websites"> 
        <p className = "groupName"> websites</p>
        <div id = "sitesContainer" className = "container"> 
        <img src = {ec} className = "app" id = "ec" alt = "espressco" onClick = {handleClick4}/>
        <img src = {shiba} className = "app" id = "shiba" alt = "tiktokpets" onClick = {handleClick5} />
        </div>
        </div>

        {/* end of websites */}

        <div id = "programs">
        <p className = "groupName"> programs</p>
        <div id = "progsContainer" className = "container"> 
        <img src = {shell} className = "app" id = "shell" alt = "shell" onClick = {handleClick6}/>
        <img src = {apple} className = "app" id = "apple" alt = "apple" onClick = {handleClick7}/>
        <img src = {canvas} className = "app" id = "canvas" alt = "canvas" onClick = {handleClick8}/>
        </div>
          </div>
          </div>
        {/* end of programs */}

          </div>
    );
}

export default Projects;