import React from 'react';
import '../styles/Navbar.scss'

const Navbar = () => {
    return (
    
        <nav id="navbar"  className="navbar navbar-expand-md navbar-dark fixed-top">
            <a  className="navbar-brand p-3  " href="#">
                Front End Developer
            </a>
            <button  className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span  className="navbar-toggler-icon text-white"></span>
            </button>

            <div  className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul  className="navbar-nav mr-auto">
                    <li  className="nav-item ">
                        <a  className="nav-link" href="#home">Home <span  className="sr-only">(current)</span></a>
                    </li>
                    <li  className="nav-item">
                        <a  className="nav-link" href="#about-me">About Me</a>
                    </li>
                    <li  className="nav-item">
                        <a  className="nav-link" href="#projects">My Projects</a>
                    </li>
                </ul>

            </div>
        </nav>
    );
}

export default Navbar;