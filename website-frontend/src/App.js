import React from 'react';
import './App.css';
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";
import lakshay from './images/lakshay.jpeg';
import nomic from './images/nomic.png';
import lambda from './images/lambda.png';

class Home extends React.Component{

    componentDidMount(){
        document.title = "Home";
    }

    github(){
        window.open('https://github.com/lakkn', '_blank');
    }

    linkedin(){
        window.open('https://www.linkedin.com/in/lakshay-kansal-5443341b9/', '_blank');
    }

    nomic(){
        window.open('https://home.nomic.ai/', '_blank');
    }

    sudoku(){
        window.location.href = window.location.protocol + "//sudoku." + window.location.host;
    }

    movie(){
        window.location.href = window.location.protocol + "//movie." + window.location.host;
    }

    toggle_menu(){
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

    render() {
        return (
            <div className="h-whole">
                <div className="h-navbar">
                    <div className="h-navbar-logo">
                        <img className="h-navbar-image" alt="" src={ lambda } />
                    </div>
                    <div onClick={this.toggle_menu} className="h-mobile-nav-toggle" id="h-nav-toggle" aria-controls="h-primary-nav" aria-expanded="false"><span></span><span></span><span></span><span></span></div>
                    <div data-visible="false" id="h-primary-nav" className="h-navbar-content">
                        <div>
                            Projects
                        </div>
                        <div>
                            Skills
                        </div>
                        <div>
                            Experience
                        </div>
                    </div>
                </div>
                <div className="h-page">
                    <div className="h-start-container">
                        <div className="h-start">
                            <p className="h-start-text noselect"><i>hello, i'm</i></p>
                            <p className="h-start-head noselect"><strong>LAKSHAY KANSAL</strong></p>
                            <div className="h-contact-logos">
                                <IoLogoGithub onClick={this.github} className="h-contact-logo" />
                                <IoLogoLinkedin onClick={this.linkedin} className="h-contact-logo" />
                            </div>
                        </div>
                        <div className="h-start-image">
                            <img className="selector" src={lakshay} alt="me" />
                        </div>
                    </div>
                    <div id="h-projects" className="h-section">
                        <p className="h-section-head noselect"><strong>my projects</strong></p>
                        <div className="h-project-holder noselect">
                            <button onClick={this.sudoku} className="h-project-card"><p className="h-project-card-text">sudoku solver</p></button>
                            <button onClick={this.movie} className="h-project-card"><p className="h-project-card-text">movie recommender</p></button>
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
                                <div className="h-experience-image-holder"><img alt="" onClick={this.nomic} className="h-experience-image" src={nomic} /></div>
                                <p className="h-experience-date">Jun. 2022 - Present</p>
                            </div>
                            <div className="h-experience-description">
                                <p className="h-experience-title">Junior Software Engineer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Home;