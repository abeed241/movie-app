import React, { useState, useEffect } from "react";
import "./Navbar.css"
import { Link, useLocation } from "react-router-dom";
function Navbar() {
    const [menuOpen,setMenuOpen] = useState(false);
    const location = useLocation();

    // Close menu on route change (ensures links close menu on navigation)
    useEffect(() => {
      setMenuOpen(false);
    }, [location]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className="navbar">
            <div className="navbar-logo">MovieFinder</div>
            <ul className = {`navbar-links ${menuOpen ? "active" : ""}`}>
                <li><Link to = "/" onClick={closeMenu}>Home</Link></li>
                <li><Link to = "/favorites" onClick={closeMenu}>Favorites</Link></li>
                <li><Link to = "" onClick={closeMenu}>Contact us</Link></li>
                <li><Link to = "" onClick={closeMenu}>blog</Link></li>
            </ul>
            <div className="hamburger" onClick = {toggleMenu}>
               {menuOpen ? "X" : "☰"}
            </div>  
        </nav>
    );
}
export default Navbar;