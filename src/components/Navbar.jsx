import React ,{useState} from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";
function Navbar() {
    const [menuOpen,setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <nav className="navbar">
            <div className="navbar-logo">MovieFinder</div>
            <ul className = {`navbar-links ${menuOpen ? "active" : ""}`}>
                <li><Link to = "/">Home</Link></li>
                <li><Link to = "/favorites">Favorites</Link></li>
                <li><Link to = "">Contact us</Link></li>
                <li><Link to = "">blog</Link></li>
            </ul>
            <div className="hamburger" onClick = {toggleMenu}>
               {menuOpen ? "X" : "☰"}
            </div>  
        </nav>
    );
}
export default Navbar;