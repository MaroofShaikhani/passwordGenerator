import React from 'react';
import './Header.css'; // Import CSS for styling (create this file if needed)
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
 
    <header className="header">
      <nav className="navbar">
        <div className="container">
          <h1 className="logo"></h1><img src="/Maroof-logos.jpeg" width={130} height={80}/>
          <ul className="nav-links">
            <li><Link to="/">About </Link> </li>
            <li><Link to="Resume">Resume</Link></li>
            <li><Link to="projects">Projects</Link></li>
            <li><Link to="contact">contact</Link></li>
          </ul>
        </div>
      </nav>
    </header>
    </div>
  );
}

export default Header;
