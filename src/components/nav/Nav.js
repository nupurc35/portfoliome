import React,{useEffect}from 'react';
import './Nav.css';
import PropTypes from 'prop-types'; 
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

const Nav = ()=>{ 
    const location = useLocation();
    let pathname = window.location.pathname;
    useEffect(()=>{
            pathname = window.location.pathname
      },[window.location.pathname])
    const homeClass = location.pathname ==='/' ? "activeClass" : "";
    const aboutClass = location.pathname.match('/about') ? "activeClass" : "";
    const projectClass = location.pathname.match('/project') ? "activeClass" : "";
    const contactClass = location.pathname.match('/contact') ? "activeClass" : "";
  return (
  <nav className="nav-bar">
        <span className = "navbar-toggle" id="js-navbar-toggle">
            <i className = "fas fa-bars"></i>
        </span>
        <a href="#" className="logo">Nupur Das</a>      
        <ul className="main-nav" id="js-menu">
            <li>
            <NavLink to="/" className= {`nav-links ${homeClass}`}>Home</NavLink>
            </li>
            <li>
            <NavLink to="/about" className={`nav-links ${aboutClass}`}>About</NavLink>
            </li>
            <li>
            <NavLink to="/project" className= {`nav-links ${projectClass}`}>Project</NavLink>
            </li>
            <li>
               <NavLink to="/contact" className={`nav-links ${contactClass}`}>Contact</NavLink>
            </li>
        </ul>
</nav>
 ) 
}
export default Nav



