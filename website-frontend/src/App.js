import React from 'react';
import './App.css';
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";
import lakshay from './images/lakshay.jpeg';
import nomic_logo from './images/nomic.png';
import lambda from './images/lambda.png';
import deeprun from './images/deeprun.png';
import Pdf from './Lakshay_Kansal.pdf';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useParams,
    useSearchParams,
    useLocation,
} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/sudoku" element={<Sudoku/>}/>
                    <Route path="/movie" element={<Movie/>}/>
                </Routes>
            </Router>
        </div>
    );
}

function Home() {

    const resume = () => {
        window.open(Pdf);
    }

    const github = () => {
        window.open('https://github.com/lakkn', '_blank');
    };

    const linkedin = () => {
        window.open('https://www.linkedin.com/in/lakshay-kansal-5443341b9/', '_blank');
    };

    const nomic = () => {
        window.open('https://home.nomic.ai/', '_blank');
    };

    const sudoku = () => {
        // window.location.href = window.location.protocol + "//sudoku." + window.location.host;
        window.location.href = window.location.href + 'sudoku';
    };

    const movie = () => {
        // window.location.href = window.location.protocol + "//movie." + window.location.host;
        window.location.href = window.location.href + 'movie';
    };

    const toggle_menu = () => {
        const nav_content = document.querySelector(".h-navbar-content");
        const nav_button = document.querySelector(".h-mobile-nav-toggle");
        const visibility = nav_content.getAttribute('data-visible');
        nav_button.classList.toggle("open");
        document.body.classList.toggle("blur");
        if(visibility === "false"){
            nav_content.setAttribute('data-visible', 'true');
            nav_button.setAttribute('aria-expanded', 'true');
        }else{
            nav_content.setAttribute('data-visible', 'false');
            nav_button.setAttribute('aria-expanded', 'false');
        }
    }

    const go_to = (num) => {
        if(num === 1){
            document.getElementById('h-projects').scrollIntoView({behavior: "smooth"});
        }
        if(num === 2){
            document.getElementById('h-skills').scrollIntoView({behavior: "smooth"});
        }
        if(num === 3){
            document.getElementById('h-experience').scrollIntoView({behavior: "smooth"});
        }
        if(num === 4){
            document.getElementById('h-education').scrollIntoView({behavior: "smooth"})
        }
        toggle_menu();
    };

    return (
        <div className="h-whole">
            <div className="h-navbar">
                <div className="h-navbar-logo">
                    <img className="h-navbar-image" alt="" src={ lambda } />
                </div>
                <div onClick={toggle_menu} className="h-mobile-nav-toggle" id="h-nav-toggle" aria-controls="h-primary-nav" aria-expanded="false"><span></span><span></span><span></span><span></span></div>
                <div data-visible="false" id="h-primary-nav" className="h-navbar-content">
                    <div style={{'cursor':'pointer'}} onClick={() => go_to(1)}>
                        Projects
                    </div>
                    <div style={{'cursor':'pointer'}} onClick={() => go_to(2)}>
                        Skills
                    </div>
                    <div style={{'cursor':'pointer'}} onClick={() => go_to(3)}>
                        Experience
                    </div>
                    <div style={{'cursor':'pointer'}} onClick={() => go_to(4)}>
                        Education
                    </div>
                    <div style={{'cursor':'pointer'}} onClick={resume}>
                        Résumé
                    </div>
                </div>
            </div>
            <div className="h-page">
                <div className="h-start-container">
                    <div className="h-start">
                        <p className="h-start-text noselect"><i>hello, i'm</i></p>
                        <p className="h-start-head noselect"><strong>LAKSHAY KANSAL</strong></p>
                        <div className="h-contact-logos">
                            <IoLogoGithub onClick={github} className="h-contact-logo" />
                            <IoLogoLinkedin onClick={linkedin} className="h-contact-logo" />
                        </div>
                    </div>
                    <div className="h-start-image">
                        <img className="selector" src={lakshay} alt="me" />
                    </div>
                </div>
                <div id="h-projects" className="h-section">
                    <p className="h-section-head noselect"><strong>my projects</strong></p>
                    <div className="h-project-holder noselect">
                        <button onClick={sudoku} className="h-project-card"><p className="h-project-card-text">sudoku solver</p></button>
                        <button onClick={movie} className="h-project-card"><p className="h-project-card-text">movie recommender</p></button>
                    </div>
                </div>
                <div id="h-skills" className="h-section">
                    <p className="h-section-head noselect"><strong>my skills</strong></p>
                    <div className="h-skills-holder">
                        <div className="h-skill">
                            <div className="h-skill-text">
                                <strong>Python</strong>
                            </div>
                            <div className="h-skill-bar">
                                <div className="h-skill-bar-color python-bar"></div>
                            </div>
                        </div>
                        <div className="h-skill">
                            <div className="h-skill-text">
                                <strong>HTML CSS</strong>
                            </div>
                            <div className="h-skill-bar">
                                <div className="h-skill-bar-color html-bar"></div>
                            </div>
                        </div>
                        <div className="h-skill">
                            <div className="h-skill-text">
                                <strong>Java</strong>
                            </div>
                            <div className="h-skill-bar">
                                <div className="h-skill-bar-color java-bar"></div>
                            </div>
                        </div>
                        <div className="h-skill">
                            <div className="h-skill-text">
                                <strong>React.JS</strong>
                            </div>
                            <div className="h-skill-bar">
                                <div className="h-skill-bar-color react-bar"></div>
                            </div>
                        </div>
                        <div className="h-skill">
                            <div className="h-skill-text">
                                <strong>Git</strong>
                            </div>
                            <div className="h-skill-bar">
                                <div className="h-skill-bar-color git-bar"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="h-experience" className='h-section'>
                    <p className="h-section-head noselect"><strong>experience</strong></p>
                    <div className="h-experience">
                        <div className="h-experience-header">
                            <div className="h-experience-image-holder"><img alt="" src={nomic_logo} onClick={nomic} className="h-experience-image" /></div>
                            <div className="h-experience-date">Jun. 2022 - Present</div>
                        </div>
                        <div className="h-experience-description">
                            <div className="h-experience-title">Junior Software Engineer</div>
                            <div className="h-experience-content">- Utilized React.JS and Python to develop an interactive frontend for Nomic's Atlas Maps to give users a better understanding of their data.</div>
                            <div className="h-experience-content">- Constructed Nomic News, a platform that scrapes various news sources from pro-western and pro-russian sources and simplistically displays it to see the difference in the point-of-views of russian and western propaganda.</div>
                        </div>
                    </div>
                </div>
                <div id="h-education" className='h-section'>
                    <p className="h-section-head noselect"><strong>education</strong></p>
                    <div className="h-experience">
                        <div className="h-experience-header">
                            <div className="h-experience-image-holder"><img alt="" src={deeprun} className="h-experience-image" /></div>
                            <div className="h-experience-date">Sep. 2019 - Present</div>
                        </div>
                        <div className="h-experience-description" style={{'justifyContent': 'center'}}>
                            <div className="h-experience-title" style={{'maxWidth': '300px'}}>Center for Information Technology @ Deep Run High School</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Sudoku() {
    return (
        <div style={{'margin': '30px'}}>
            <div><a href={window.location.protocol + "//" + window.location.host}>go back</a></div>
            <div>full demo coming soon</div>
            <div>github repository: <a href="https://github.com/lakkn/sudoku-solver" target="_blank" rel="noreferrer">https://github.com/lakkn/sudoku-solver</a></div>
        </div>
    )
}

function Movie() {
    return (
        <div style={{'margin': '30px'}}>
            <div><a href={window.location.protocol + "//" + window.location.host}>go back</a></div>
            <div>full demo coming soon</div>
            <div>github repository: <a href="https://github.com/lakkn/movie-recommender" target="_blank" rel="noreferrer">https://github.com/lakkn/movie-recommender</a></div>
        </div>
    )
}

export default App;