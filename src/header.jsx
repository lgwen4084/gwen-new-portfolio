    import React from 'react';
    import { Link } from 'react-router-dom';

    const Header = () => {
    return (
        <header>
        <div className="tab-black"></div>
        <h1 className="logo">SUNSCRIPT</h1>
        <nav className="navbar" aria-label="Main navigation">
            <ul className="nav-links center-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/uses">Uses</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            </ul>
            <ul className="touch-links">
            <li><Link to="/contact">Get In Touch</Link></li>
            </ul>
        </nav>
        <div className="tab-white"></div>
        </header>
    );
    };

    export default Header;
