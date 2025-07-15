import React, { useEffect, useState, useCallback } from 'react';
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";
import { SiPython, SiReact, SiHtml5, SiJava, SiGit, SiAmazonaws } from "react-icons/si";
import { HiPlus, HiMenu, HiX } from "react-icons/hi";
import { MdRefresh } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
import lakshay from './images/lakshay.jpeg';
import nomic_logo from './images/nomic.png';
import lambda from './images/lambda.svg';
import deeprun from './images/deeprun.png';
import haymarket_logo from './images/haymarket.jpg';
import deepweave_logo from './images/deepweave.png';
import Pdf from './Lakshay_Kansal.pdf';
import LoadingOverlay from 'react-loading-overlay-ts';
import PropagateLoader from 'react-spinners/PropagateLoader';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";

// API configuration
const api_base_path = 'https://0tc8svpio2.execute-api.us-east-1.amazonaws.com/default'

const App = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sudoku" element={<Sudoku />} />
                    <Route path="/movie" element={<Movie />} />
                    <Route path="/cyberpatriot" element={<CyberPatriot />} />
                    <Route path="/cyberpatriot/:teams" element={<CyberPatriot />} />
                </Routes>
            </Router>
        </div>
    );
}

const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const handleResumeClick = () => {
        window.open(Pdf, '_blank');
    };

    const handleGithubClick = () => {
        window.open('https://github.com/lakkn', '_blank');
    };

    const handleLinkedinClick = () => {
        window.open('https://www.linkedin.com/in/lakshay-kansal-5443341b9/', '_blank');
    };

    const handleNomicClick = () => {
        window.open('https://home.nomic.ai/', '_blank');
    };

    const handleHaymarketClick = () => {
        window.open('https://haymarket.com/', '_blank');
    };

    const handleDeepWeaveClick = () => {
        window.open('https://www.deepweave.org/', '_blank');
    };

    // Project navigation functions - commented out while projects section is hidden
    // const handleSudokuClick = () => {
    //     window.location.href = window.location.href + 'sudoku';
    // };

    // const handleMovieClick = () => {
    //     window.location.href = window.location.href + 'movie';
    // };

    // const handleCyberpatriotClick = () => {
    //     window.location.href = window.location.href + 'cyberpatriot';
    // };

    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleScrollTo = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    // Intersection Observer for active section
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.3 }
        );

        const sections = ['home', 'skills', 'experience', 'education'];
        sections.forEach((section) => {
            const element = document.getElementById(section);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex items-center">
                            <img 
                                src={lambda} 
                                alt="Logo" 
                                className="h-8 w-8 invert opacity-80"
                            />
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {[
                                { id: 'skills', label: 'Skills' },
                                { id: 'experience', label: 'Experience' },
                                { id: 'education', label: 'Education' },
                            ].map(({ id, label }) => (
                                <button
                                    key={id}
                                    onClick={() => handleScrollTo(id)}
                                    className={`text-sm font-medium transition-colors duration-200 ${
                                        activeSection === id
                                            ? 'text-blue-400'
                                            : 'text-slate-300 hover:text-white'
                                    }`}
                                >
                                    {label}
                                </button>
                            ))}
                            <button
                                onClick={handleResumeClick}
                                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                            >
                                <FiDownload className="w-4 h-4 mr-2" />
                                Resume
                            </button>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={handleToggleMenu}
                                className="text-slate-300 hover:text-white p-2"
                            >
                                {isMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden bg-slate-800/95 backdrop-blur-md border-t border-slate-700/50">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {[
                                { id: 'skills', label: 'Skills' },
                                { id: 'experience', label: 'Experience' },
                                { id: 'education', label: 'Education' },
                            ].map(({ id, label }) => (
                                <button
                                    key={id}
                                    onClick={() => handleScrollTo(id)}
                                    className="block w-full text-left px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-md transition-colors duration-200"
                                >
                                    {label}
                                </button>
                            ))}
                            <button
                                onClick={handleResumeClick}
                                className="block w-full text-left px-3 py-2 text-blue-400 hover:text-blue-300 hover:bg-slate-700/50 rounded-md transition-colors duration-200"
                            >
                                Resume
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left side - Text */}
                        <div className="space-y-8 animate-fade-in-up">
                            <div className="space-y-4">
                                <p className="text-blue-400 text-lg font-medium">Hello, I'm</p>
                                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                                    LAKSHAY KANSAL
                                </h1>
                                <div className="flex items-center space-x-4 text-2xl md:text-3xl">
                                    <span className="text-slate-300">A</span>
                                    <div className="relative">
                                        <span className="text-yellow-400 font-mono typewriter">
                                            Student
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4 text-2xl md:text-3xl">
                                    <span className="text-slate-300">A</span>
                                    <div className="relative">
                                        <span className="text-green-400 font-mono typewriter animation-delay-1000">
                                            Developer
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4 text-2xl md:text-3xl">
                                    <span className="text-slate-300">A</span>
                                    <div className="relative">
                                        <span className="text-purple-400 font-mono typewriter animation-delay-2000">
                                            Human
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="flex space-x-6">
                                <button
                                    onClick={handleGithubClick}
                                    className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-all duration-300 hover:scale-110"
                                    aria-label="GitHub"
                                >
                                    <IoLogoGithub className="w-6 h-6 text-slate-300" />
                                </button>
                                <button
                                    onClick={handleLinkedinClick}
                                    className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-all duration-300 hover:scale-110"
                                    aria-label="LinkedIn"
                                >
                                    <IoLogoLinkedin className="w-6 h-6 text-blue-400" />
                                </button>
                            </div>
                        </div>

                        {/* Right side - Image */}
                        <div className="flex justify-center lg:justify-end animate-fade-in-up">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                                <img
                                    src={lakshay}
                                    alt="Lakshay Kansal"
                                    className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-slate-700 shadow-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section - Hidden for now */}
            {/* <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Projects</h2>
                        <p className="text-slate-400 text-lg">Here are some of my recent projects</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "CyberPatriot Tracker",
                                description: "Track and analyze CyberPatriot team performance",
                                onClick: handleCyberpatriotClick,
                                gradient: "from-red-500 to-pink-500"
                            },
                            {
                                title: "Sudoku Solver",
                                description: "AI-powered sudoku solving algorithm",
                                onClick: handleSudokuClick,
                                gradient: "from-blue-500 to-cyan-500"
                            },
                            {
                                title: "Movie Recommender",
                                description: "Personalized movie recommendation system",
                                onClick: handleMovieClick,
                                gradient: "from-purple-500 to-indigo-500"
                            }
                        ].map((project, index) => (
                            <div
                                key={index}
                                onClick={project.onClick}
                                className="group relative bg-slate-900 rounded-2xl p-6 hover:bg-slate-800 transition-all duration-300 cursor-pointer hover-lift"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                                <div className="relative z-10">
                                    <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                                    <p className="text-slate-400 mb-4">{project.description}</p>
                                    <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                                        <span className="text-sm font-medium">View Project</span>
                                        <FiExternalLink className="w-4 h-4 ml-2" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Skills Section */}
            <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills</h2>
                        <p className="text-slate-400 text-lg">Technologies I work with</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                        {[
                            { icon: SiPython, name: "Python", color: "text-yellow-400" },
                            { icon: SiReact, name: "React.JS", color: "text-cyan-400" },
                            { icon: SiHtml5, name: "HTML/CSS", color: "text-orange-400" },
                            { icon: SiJava, name: "Java", color: "text-red-400" },
                            { icon: SiGit, name: "Git", color: "text-orange-500" },
                            { icon: SiAmazonaws, name: "AWS", color: "text-yellow-400" }
                        ].map((skill, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center p-6 bg-slate-900 rounded-xl hover:bg-slate-800 transition-all duration-300 hover-lift group"
                            >
                                <skill.icon className={`w-12 h-12 ${skill.color} mb-3 group-hover:scale-110 transition-transform duration-300`} />
                                <span className="text-slate-300 text-sm font-medium">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience</h2>
                        <p className="text-slate-400 text-lg">My professional journey</p>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <div className="relative">
                            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-700"></div>
                            <div className="space-y-12">
                                {/* DeepWeave - Most Recent */}
                                <div className="relative flex items-start">
                                    <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300">
                                        <img
                                            src={deepweave_logo}
                                            alt="DeepWeave"
                                            className="w-10 h-10 object-contain"
                                            onClick={handleDeepWeaveClick}
                                        />
                                    </div>
                                    <div className="ml-8 flex-1">
                                        <div className="bg-slate-900 rounded-xl p-6 hover:bg-slate-800 transition-colors duration-300">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="text-xl font-semibold text-blue-400">Co-Founder and CEO</h3>
                                                <span className="text-slate-400 text-sm">2025 - Present</span>
                                            </div>
                                            <p className="text-slate-300 mb-2 font-medium">DeepWeave</p>
                                            <p className="text-slate-300">
                                            Engineered Plannr, a fully functional AI-powered Meal Planning application that utilizes
                                            professional grade LLM models and Stable Diffusion Loras to produce both unique cooking
                                            recipes and dish images tailored to the users preferences, distastes, and budget.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Haymarket Media */}
                                <div className="relative flex items-start">
                                    <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300">
                                        <img
                                            src={haymarket_logo}
                                            alt="Haymarket Media"
                                            className="w-10 h-10 object-contain"
                                            onClick={handleHaymarketClick}
                                        />
                                    </div>
                                    <div className="ml-8 flex-1">
                                        <div className="bg-slate-900 rounded-xl p-6 hover:bg-slate-800 transition-colors duration-300">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="text-xl font-semibold text-blue-400">Data Engineering Intern</h3>
                                                <span className="text-slate-400 text-sm">2025 - 2025</span>
                                            </div>
                                            <p className="text-slate-300 mb-2 font-medium">Haymarket Media</p>
                                            <p className="text-slate-300">
                                            Leveraged prompt engineering with Google’s Vertex AI to normalize the varied headers
                                            throughout the companies large database. Lead the product team for designing and
                                            prototyping an AI chatbot within legal AI guidelines for a healthcare practitioner course
                                            catalog provided by the company. Communicated regularly with design, content, marketing,
                                            and legal teams to bring the product to fruition. 
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Nomic */}
                                <div className="relative flex items-start">
                                    <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300">
                                        <img
                                            src={nomic_logo}
                                            alt="Nomic"
                                            className="w-10 h-10 object-contain"
                                            onClick={handleNomicClick}
                                        />
                                    </div>
                                    <div className="ml-8 flex-1">
                                        <div className="bg-slate-900 rounded-xl p-6 hover:bg-slate-800 transition-colors duration-300">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="text-xl font-semibold text-blue-400">Software Engineer</h3>
                                                <span className="text-slate-400 text-sm">2023 - 2024</span>
                                            </div>
                                            <p className="text-slate-300 mb-2 font-medium">Nomic</p>
                                            <p className="text-slate-300 mb-4">
                                                Developed UI for GPT4All’s (70k+ starred github open-source LLM repo) LLM Client,
                                                to accurately and proficiently display the results of API calls and AI requests to
                                                models, including incorporation of markdown for text and formatting for various programming
                                                languages. Worked closely with Web Dev Professionals in effectively converting website
                                                design to applicable code for website revamp and transfer from React.JS to Next.JS.
                                            </p>
                                            <div className="border-t border-slate-700 pt-4">
                                                <div className="flex justify-between items-start mb-2">
                                                    <h4 className="text-lg font-semibold text-blue-400">Intern</h4>
                                                    <span className="text-slate-400 text-sm">2022 - 2023</span>
                                                </div>
                                                <p className="text-slate-300">
                                                    Constructed Nomic News, a platform that scrapes various news sources from 
                                                    pro-western and pro-russian sources and simplistically displays it to see 
                                                    the difference in the point-of-views of russian and western propaganda.
                                                    Utilized React.JS and Python to develop an interactive frontend for Nomic's
                                                    Atlas Maps to give users a better understanding of their data.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Education</h2>
                        <p className="text-slate-400 text-lg">My educational background</p>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-8">
                            {/* University of Virginia */}
                            <div className="bg-slate-900 rounded-xl p-8 hover:bg-slate-800 transition-colors duration-300">
                                <div className="flex items-center mb-4">
                                    <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mr-6">
                                        <span className="text-white font-bold text-xl">UVA</span>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="text-xl font-semibold text-blue-400">
                                                    Bachelor of Science in Computer Science
                                                </h3>
                                                <p className="text-slate-300">University of Virginia</p>
                                            </div>
                                            <span className="text-slate-400 text-sm">2023 - 2027</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Deep Run High School */}
                            <div className="bg-slate-900 rounded-xl p-8 hover:bg-slate-800 transition-colors duration-300">
                                <div className="flex items-center mb-4">
                                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-6">
                                        <img
                                            src={deeprun}
                                            alt="Deep Run High School"
                                            className="w-10 h-10 object-contain"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="text-xl font-semibold text-blue-400">
                                                    Center for Information Technology
                                                </h3>
                                                <p className="text-slate-300">Deep Run High School</p>
                                            </div>
                                            <span className="text-slate-400 text-sm">2019 - 2023</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900 border-t border-slate-700">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-slate-400">
                        © 2024 Lakshay Kansal. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

const Sudoku = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
                    <Link 
                        to="/"
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200 mb-6"
                    >
                        ← Go back
                    </Link>
                    <h1 className="text-3xl font-bold text-white mb-4">Sudoku Solver</h1>
                    <p className="text-slate-300 mb-4">Full demo coming soon</p>
                    <div className="flex items-center text-slate-300">
                        <span className="mr-2">GitHub repository:</span>
                        <a 
                            href="https://github.com/lakkn/sudoku-solver" 
                            target="_blank" 
                            rel="noreferrer"
                            className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                        >
                            https://github.com/lakkn/sudoku-solver
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Movie = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
                    <Link 
                        to="/"
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200 mb-6"
                    >
                        ← Go back
                    </Link>
                    <h1 className="text-3xl font-bold text-white mb-4">Movie Recommender</h1>
                    <p className="text-slate-300 mb-4">Full demo coming soon</p>
                    <div className="flex items-center text-slate-300">
                        <span className="mr-2">GitHub repository:</span>
                        <a 
                            href="https://github.com/lakkn/movie-recommender" 
                            target="_blank" 
                            rel="noreferrer"
                            className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                        >
                            https://github.com/lakkn/movie-recommender
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

const CyberPatriot = () => {
    const [teams, setTeams] = useState([]);
    const [teamData, setTeamData] = useState([]);
    const [urlLoaded, setUrlLoaded] = useState(0);
    const [newTeam, setNewTeam] = useState("");
    const [currentDisplay, toggleDisplay] = useState('card');
    const [cardClass] = useState('bg-slate-800 border border-slate-700');
    const [alertMessage, setAlertMessage] = useState('');
    const [isActive, setIsActive] = useState(false);

    const getTeamData = useCallback(() => {
        setIsActive(true);
        fetch(api_base_path + '/cyberpatriot-read', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                teams: teams,
            })
        })
            .then((response) => response.json())
            .then((response) => setTeamData(response['teams']))
            .then(() => setIsActive(false));
    }, [teams, setTeamData, setIsActive]);

    useEffect(() => {
        const windows_raw = window.location.href.split('/');
        const teams_raw = windows_raw[windows_raw.length - 1];
        if (teams_raw !== "cyberpatriot" && urlLoaded < 10) {
            const teams_link = teams_raw.split("-");
            let link_check = true;
            for (let i = 0; i < teams_link.length; i++) {
                const current_team = teams_link[i];
                if (current_team.length !== 4) {
                    link_check = false;
                }
            }
            if (link_check) {
                setTeams(teams_link);
                getTeamData();
            }
            setUrlLoaded(urlLoaded + 1);
        }
    }, [urlLoaded, getTeamData]);

    const handleChange = (event) => {
        setNewTeam(event.target.value);
    };

    const handleDisplayChange = () => {
        if (currentDisplay === "card") {
            toggleDisplay("grid");
        } else {
            toggleDisplay("card");
        }
    };

    const handleGoToTeam = (team_num) => {
        window.open('http://scoreboard.uscyberpatriot.org/team.php?team=' + team_num, '_blank');
    };

    const handleLoadData = () => {
        const windows_raw = window.location.href.split('/');
        const teams_raw = windows_raw[windows_raw.length - 1];
        if (teams_raw !== "cyberpatriot") {
            const teams_link = teams_raw.split("-");
            let link_check = true;
            for (let i = 0; i < teams_link.length; i++) {
                const current_team = teams_link[i];
                if (current_team.length !== 4) {
                    link_check = false;
                }
            }
            if (link_check) {
                setTeams(teams_link);
                getTeamData();
            }
        }
    };

    const handleAddTeam = () => {
        if (newTeam.length === 4) {
            let teams_holder = teams;
            if (teams_holder.indexOf(newTeam) !== -1) {
                showAlert('Team already exists');
            } else {
                teams_holder.push(newTeam);
                setTeams(teams_holder);
                const current_url = window.location.href;
                if (current_url.split('/')[current_url.split('/').length - 1] === 'cyberpatriot') {
                    window.history.pushState("", "", "cyberpatriot/" + newTeam);
                } else if (current_url.split('/')[current_url.split('/').length - 1] === '') {
                    window.history.pushState("", "", newTeam);
                } else {
                    window.history.pushState("", "", current_url.split('/')[current_url.split('/').length - 1] + "-" + newTeam);
                }
                getTeamData();
            }
        } else {
            showAlert('Team length must be 4 characters');
        }
    };

    const handleDeleteTeam = (team) => {
        const tnum = team.substring(3);
        let teams_holder = teams;
        teams_holder = teams_holder.filter(function (item) {
            return item !== tnum;
        });
        let teams_data = teamData;
        teams_data = teams_data.filter(function (item) {
            return item['TeamNumber'] !== team;
        });
        setTeamData(teams_data);
        setTeams(teams_holder);
        const current_url = window.location.href;
        if (teams_holder.length > 0) {
            if (current_url.split('/')[current_url.split('/').length - 1] !== 'cyberpatriot' && current_url.split('/')[current_url.split('/').length - 1] !== '') {
                window.history.pushState("", "", teams_holder.join("-"));
            }
        } else {
            setTeamData([]);
            window.history.pushState("", "", "");
        }
    };

    const showAlert = (message) => {
        setAlertMessage(message);
        setTimeout(() => {
            setAlertMessage('');
        }, 3000);
    };



    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <LoadingOverlay
                active={isActive}
                text='Gathering Team Data'
                spinner={<PropagateLoader color="#0ea5e9" />}
                styles={{
                    wrapper: {},
                    overlay: (base) => ({
                        ...base,
                        background: 'rgba(15, 23, 42, 0.9)'
                    }),
                    content: (base) => ({
                        ...base,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: "30px",
                        alignItems: "center",
                    })
                }}
            />

            {/* Alert */}
            {alertMessage && (
                <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg animate-slide-up">
                    {alertMessage}
                </div>
            )}

            {/* Navigation */}
            <nav className="bg-slate-800/50 backdrop-blur-md border-b border-slate-700 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <h1 className="text-xl font-bold text-white">CyberTracker</h1>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center">
                                <input
                                    value={newTeam}
                                    placeholder="Team #"
                                    onChange={handleChange}
                                    className="px-3 py-2 bg-slate-700 border border-slate-600 rounded-l-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <button
                                    onClick={handleAddTeam}
                                    className="px-4 py-2 bg-green-600 text-white rounded-r-lg hover:bg-green-700 transition-colors duration-200"
                                >
                                    <HiPlus className="w-5 h-5" />
                                </button>
                            </div>
                            <button
                                onClick={handleLoadData}
                                className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                            >
                                <MdRefresh className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {teamData.length === 0 ? (
                    <div className="text-center py-16">
                        <h2 className="text-3xl font-bold text-white mb-4">Welcome to CyberTracker</h2>
                        <p className="text-slate-300 text-lg mb-6">
                            To begin, enter a 4-digit Team Number in the top right (e.g., 1767)
                        </p>
                        <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
                            If you want to load multiple teams at once or share your setup, 
                            just copy and paste the link with teams separated by dashes like{' '}
                            <span className="text-blue-400 font-mono">lakshay.io/cyberpatriot/XXXX-YYYY-ZZZZ</span>
                        </p>
                        <a
                            href="http://scoreboard.uscyberpatriot.org/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                        >
                            Official CyberPatriot Scoreboard
                        </a>
                    </div>
                ) : (
                    <>
                        <div className="flex justify-end mb-8">
                            <button
                                onClick={handleDisplayChange}
                                className="px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors duration-200"
                            >
                                Toggle Layout
                            </button>
                        </div>

                        {currentDisplay === "card" ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {teamData.map((team, index) => (
                                    <div key={index} className={`${cardClass} rounded-xl p-6 transition-all duration-300 hover:bg-slate-700`}>
                                        <div 
                                            className="text-xl font-bold text-white mb-4 cursor-pointer hover:text-blue-400 transition-colors duration-200"
                                            onClick={() => handleGoToTeam(team['TeamNumber'])}
                                        >
                                            Team {team['TeamNumber']}
                                        </div>
                                        {team['InvalidTeam'] === 1 ? (
                                            <div className="text-red-400">Invalid Team or Team has not competed</div>
                                        ) : (
                                            <div className="space-y-4">
                                                <div className="text-slate-300">
                                                    {team['Division']} | {team['Tier']} | {team['State']}
                                                </div>
                                                <div className="border-t border-slate-600 pt-4 space-y-2">
                                                    <div className="text-slate-300">Image Score: {team['ImageScore']}</div>
                                                    <div className="text-slate-300">
                                                        Cisco Score: {team['CiscoScore'] === 0 ? '0' : Math.round((team['CiscoScore'] + Number.EPSILON) * 100) / 100}
                                                    </div>
                                                    <div className="text-slate-300">
                                                        Administrative Adjustment: {team['AdjustedScore'] === 0 ? '0' : team['AdjustedScore']}
                                                    </div>
                                                    <div className="text-white font-semibold">Total Score: {team['TotalScore']}</div>
                                                </div>
                                                <div className="border-t border-slate-600 pt-4 grid grid-cols-3 gap-4 text-sm">
                                                    <div>
                                                        <div className="text-blue-400 font-semibold">Rank</div>
                                                        <div className="text-slate-300">{team['Place']} place</div>
                                                        <div className="text-slate-300">{team['Percentile']} percentile</div>
                                                    </div>
                                                    <div>
                                                        <div className="text-blue-400 font-semibold">Margin</div>
                                                        <div className="text-slate-300">{Math.round((team['PointsBelowFirst'] + Number.EPSILON) * 100) / 100} below 1st</div>
                                                        <div className="text-slate-300">{Math.round((team['PointsBelow'] + Number.EPSILON) * 100) / 100} below {team['Place'] - 1}</div>
                                                    </div>
                                                    <div>
                                                        <div className="text-blue-400 font-semibold">Standing</div>
                                                        <div className="text-slate-300">{team['StateRank']} of {team['TotalTeamsState']} in state</div>
                                                        <div className="text-slate-300">{team['TierRank']} of {team['TotalTeamsTier']} in tier</div>
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={() => handleDeleteTeam(team['TeamNumber'])}
                                                    className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
                                                >
                                                    Delete Team
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="bg-slate-800 rounded-xl overflow-hidden">
                                <div className="grid grid-cols-7 bg-blue-600 text-white text-center py-4 font-semibold">
                                    <div>Number</div>
                                    <div>Location</div>
                                    <div>Division</div>
                                    <div>Tier</div>
                                    <div>Score</div>
                                    <div>Rank</div>
                                    <div>State Rank</div>
                                </div>
                                {teamData.map((team, index) => (
                                    <div
                                        key={index}
                                        className={`grid grid-cols-7 text-center py-3 ${index % 2 === 0 ? 'bg-slate-700' : 'bg-slate-800'} text-slate-300`}
                                    >
                                        <div>{team["TeamNumber"]}</div>
                                        <div>{team["State"]}</div>
                                        <div>{team["Division"]}</div>
                                        <div>{team["Tier"]}</div>
                                        <div>{team["TotalScore"]}</div>
                                        <div>{team["Place"]}</div>
                                        <div>{team["StateRank"]}</div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {teamData.length > 1 && teamData.length < 20 && (
                            <div className="mt-16 bg-slate-800 rounded-xl p-8">
                                <h3 className="text-2xl font-bold text-white mb-8 text-center">Total Score Distribution</h3>
                                <ResponsiveContainer width="100%" height={400}>
                                    <BarChart data={teamData}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                                        <XAxis dataKey="TeamNumber" stroke="#94a3b8" />
                                        <YAxis stroke="#94a3b8" />
                                        <Tooltip 
                                            contentStyle={{
                                                backgroundColor: '#1e293b',
                                                border: '1px solid #475569',
                                                borderRadius: '8px',
                                                color: '#e2e8f0'
                                            }}
                                        />
                                        <Bar dataKey="TotalScore" fill="#0ea5e9" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default App;