import React, {useEffect, useState} from 'react';
import './App.css';
import './CyberPatriot.css';
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";
import { SiPython, SiReact, SiHtml5, SiJava, SiGit, SiAmazonaws } from "react-icons/si";
import { HiPlus } from "react-icons/hi";
import { MdRefresh, MdLightMode } from "react-icons/md";
import lakshay from './images/lakshay.jpeg';
import nomic_logo from './images/nomic.png';
import lambda from './images/lambda.svg';
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

// path config for api
// const api_base_path = process.env.REACT_APP_API_BASE_PATH || 'http://localhost'
const api_base_path = 'http://localhost:80'

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/sudoku" element={<Sudoku/>}/>
                    <Route path="/movie" element={<Movie/>}/>
                    <Route path="/cyberpatriot" element={<CyberPatriot/>}/>
                    <Route path="/cyberpatriot/:teams" element={<CyberPatriot/>}/>
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
                    <img style={{"filter":"invert(88%) sepia(6%) saturate(78%) hue-rotate(87deg) brightness(93%) contrast(85%)"}} className="h-navbar-image" alt="" src={ lambda } />
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
                        <p className="h-start-head noselect" style={{'color':'#B5BD68'}}><strong>LAKSHAY KANSAL</strong></p>
                        <div className="h-subtitles">
                            <div className="h-static-txt">A</div>
                            <ul className="h-dynamic-txts">
                                <li><span>Student</span></li>
                                <li><span>Programmer</span></li>
                                <li><span>Developer</span></li>
                                <li><span>Human</span></li>
                            </ul>
                        </div>
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
                    <p className="h-section-head noselect"><strong>Projects</strong></p>
                    <div className="h-project-holder noselect">
                        <button onClick={sudoku} className="h-project-card"><p className="h-project-card-text">sudoku solver</p></button>
                        <button onClick={movie} className="h-project-card"><p className="h-project-card-text">movie recommender</p></button>
                    </div>
                </div>
                <div id="h-skills" className="h-section">
                    <p className="h-section-head noselect"><strong>Skills</strong></p>
                    <div className="h-skills-holder">
                        <div className="h-skill-card">
                            <SiPython style={{'color':'#F0C674','width': '50px', 'height': '50px'}}/>
                            Python
                        </div>
                        <div className="h-skill-card">
                            <SiReact style={{'color':'#8ABEB7','width': '50px', 'height': '50px'}}/>
                            React.JS
                        </div>
                        <div className="h-skill-card">
                            <SiHtml5 style={{'color':'#CC6666','width': '50px', 'height': '50px'}}/>
                            HTML/CSS
                        </div>
                        <div className="h-skill-card">
                            <SiJava style={{'color':'#81A2BE','width': '50px', 'height': '50px'}}/>
                            Java
                        </div>
                        <div className="h-skill-card">
                            <SiGit style={{'color':'#DE935F','width': '50px', 'height': '50px'}}/>
                            Git
                        </div>
                        <div className="h-skill-card">
                            <SiAmazonaws style={{'color':'#F0C674','width': '50px', 'height': '50px'}}/>
                            AWS
                        </div>
                    </div>
                </div>
                <div id="h-experience" className='h-section'>
                    <p className="h-section-head noselect"><strong>Experience</strong></p>
                    <div className="h-experience-holder">
                        <div className="h-experience">
                            <div className="h-experience-header" onClick={nomic} style={{'background': '#ffffff'}}>
                                <div className="h-experience-image-holder"><img alt="" src={nomic_logo} className="h-experience-image" /></div>
                            </div>
                            <div className="h-experience-description">
                                <div className="h-experience-title" style={{'color': '#CC6666'}}>Junior Software Engineer</div>
                                <div className="h-experience-content">- Utilized React.JS and Python to develop an interactive frontend for Nomic's Atlas Maps to give users a better understanding of their data.</div>
                                <div className="h-experience-title" style={{'color': "#DE935F"}}>Intern</div>
                                <div className="h-experience-content">- Constructed Nomic News, a platform that scrapes various news sources from pro-western and pro-russian sources and simplistically displays it to see the difference in the point-of-views of russian and western propaganda.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="h-education" className='h-section'>
                    <p className="h-section-head noselect"><strong>Education</strong></p>
                    <div className="h-experience-holder">
                        <div className="h-experience">
                            <div className="h-experience-header" style={{'background': '#ffffff'}}>
                                <div className="h-experience-image-holder"><img alt="" src={deeprun} className="h-experience-image" /></div>
                            </div>
                            <div className="h-experience-description" style={{'justifyContent': 'center'}}>
                                <div className="h-experience-title" style={{'max-width': '360px', 'color': '#B5BD68'}}>Center for Information Technology @ Deep Run High School</div>
                            </div>
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

function CyberPatriot() {

    const [teams, setTeams] = useState([]);
    const [teamData, setTeamData] = useState([]);
    const [urlLoaded, setUrlLoaded] = useState(0);
    const [newTeam, setNewTeam] = useState("");

    useEffect(() => {
        var windows_raw = window.location.href.split('/');
        var teams_raw = windows_raw[windows_raw.length - 1];
        if(teams_raw != "cyberpatriot" && urlLoaded < 10){
            var teams_link = teams_raw.split("-");
            let link_check = true;
            for(var i = 0; i < teams_link.length; i++){
                var current_team = teams_link[i];
                if(current_team.length != 4){
                    link_check = false;
                }
            }
            if(link_check){
                setTeams(teams_link);
                get_team_data();
            }else{

            }
            setUrlLoaded(urlLoaded + 1);
        }
    });

    const handle_change = (event) => {
        setNewTeam(event.target.value);
    }

    const load_data = () => {
        var windows_raw = window.location.href.split('/');
        var teams_raw = windows_raw[windows_raw.length - 1];
        if(teams_raw != "cyberpatriot"){
            var teams_link = teams_raw.split("-");
            let link_check = true;
            for(var i = 0; i < teams_link.length; i++){
                var current_team = teams_link[i];
                if(current_team.length != 4){
                    link_check = false;
                }
            }
            if(link_check){
                setTeams(teams_link);
                get_team_data();
            }
        }
    };

    const add_team = () => {
        if(newTeam.length == 4){
            var teams_holder = teams;
            teams_holder.push(newTeam);
            setTeams(teams_holder);
            var current_url = window.location.href;
            if(current_url.split('/')[current_url.split('/').length-1] == 'cyberpatriot'){
                window.history.pushState("", "", "cyberpatriot/"+newTeam);
            }else if(current_url.split('/')[current_url.split('/').length-1] == ''){
                window.history.pushState("","", newTeam);
            }else{
                window.history.pushState("", "", current_url.split('/')[current_url.split('/').length-1]+"-"+newTeam);
            }
            get_team_data();
        }
    }

    const get_team_data = () => {
        var promise = fetch(api_base_path + '/locate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                teams: teams,
            })
        });
        console.log(promise);
        promise.then((response) => response.json())
        .then((response) => setTeamData(response['team_data']))
    };

    const toggle_color = () => {
        var cards = document.getElementsByClassName("cp-card");
        for(var i = 0; i < cards.length; i++){
            cards[i].classList.toggle("cp-card-dark");
        }
        document.getElementsByClassName("cp-navbar")[0].classList.toggle('cp-navbar-dark');
        document.getElementsByClassName("cp-all")[0].classList.toggle('cp-all-dark');
        document.getElementsByClassName("cp-add-button")[0].classList.toggle('cp-add-button-dark');
        document.getElementsByClassName("cp-refresh")[0].classList.toggle('cp-refresh-dark');
        document.getElementsByClassName("cp-refresh-icon")[0].classList.toggle('cp-refresh-icon-dark');

    }

    return (
        <div className="cp-all">
            <div className="cp-navbar">
                <div>
                    <div className="cp-navbar-heading"><strong>CyberTracker</strong></div>
                </div>
                <div style={{'display': 'flex'}}>
                    <div style={{'display': 'flex'}} className="cp-add">
                        <input value={newTeam} placeholder="1767" onChange={handle_change} className="cp-add-input"/>
                        <div onClick={add_team} className="cp-add-button"><HiPlus/></div>
                    </div>
                    <div className="cp-refresh" onClick={load_data}><MdRefresh className="cp-refresh-icon"/></div>
                    <div className="cp-color-mode" onClick={toggle_color}><MdLightMode/></div>
                </div>
            </div>
            <div className="cp-holder">
            {teamData.map((team) => (
                <div className="cp-card">
                    <div className="cp-team-number"><strong>Team {team['TeamNumber']}</strong></div>
                    <div className="cp-team-classifiers">{team['Division']} | {team['Tier']} | {team['State']}</div>
                    <hr/>
                    <div className="cp-score-text">Image Score: {team['ImageScore']}</div>
                    {team['CiscoScore'] &&
                        <div className="cp-score-text">Cisco Score: {team['CiscoScore']}</div>
                    }
                    <div className="cp-score-text">Total Score: {team['TotalScore']}</div>
                    <hr/>
                    <div className="cp-sub-holder">
                        <div>
                            <div className="cp-sub-title"><strong>Rank</strong></div>
                            <div>{team['Place']} place</div>
                            <div>{team['Percentile']} percentile</div>
                        </div>
                        <div>
                            <div className="cp-sub-title"><strong>Margin</strong></div>
                            <div>{team['PointsBelowFirst']} points below 1st place</div>
                            <div>{team['PointsBelow']} points below {team['Place'] - 1} place</div>
                            <div>{team['PointsAbove']} points above {team['Place'] + 1} place</div>
                        </div>
                        <div>
                            <div className="cp-sub-title"><strong>Standing</strong></div>
                            <div>{team['StateRank']} of {team['TotalTeamsState']} peer teams in state</div>
                            <div>{team['TierRank']} of {team['TotalTeamsTier']} peer teams in tier</div>
                            <div>{team['DivisionRank']} of {team['TotalTeamsDivision']} peer teams in division</div>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default App;