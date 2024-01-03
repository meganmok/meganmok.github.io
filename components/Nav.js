import React from 'react';
import { Link } from "react-scroll"
import Home from '../pages/Home.js';
import AboutMe from '../pages/AboutMe.js';
import Projects from '../pages/Projects.js';
import Contact from '../pages/Contact.js';
import './Nav.css';
import egg from './images/the_better_egg.png';
import winky from './images/winky_eggo.png';


const arr = [
    {
        sectionName: "home",
        url: "home",
        page: <Home />
    },
    {
        sectionName: "about",
        url: "about",
        page: <AboutMe />
    },
    {
        sectionName: "projects",
        url: "projects",
        page: <Projects />
    },
    {
        sectionName: "contact",
        url: "contact",
        page: <Contact />
    },
]



function Nav() {
    return (
        <div>
            <header>
            <div className = "change-eggs">
            <div className = "change-egg">
            <img src={egg} className = "icon" alt="fried egg icon"/>
            </div>
            <div className = "change-egg">
            <img src={winky}  className = "icon" alt="winky egg icon"/>
            </div>
            </div>
                <div id = "navBar">
                    {
                        arr.map((item) =>
                            <nav>
                                <ul>
                                    <li>
                                        <Link smooth spy to={item.url}>
                                            {item.sectionName}
                                            {item.image}
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        )
                    }
                </div>
            </header>

            {
                arr.map((item) =>
                    <div>
                        <section id={item.url}>
                            {item.page}
                        </section>
                    </div>
                )
            } 
        </div>
    )
}

export default Nav;