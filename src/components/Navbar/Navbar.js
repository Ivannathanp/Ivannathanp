import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import ScrollToTop from "../../scrollToTop";


function Navbar() {
    const [click, setClick] = useState(false);
    const [navbar,setNavbar] = useState(false);
    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const changeBackground = () => {
        if(window.scrollY >= 80){
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    window.addEventListener('scroll', changeBackground);

    return (
        <>
            <nav className={navbar ? 'navbar active' : 'navbar'}>
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        MyPortfolio <i className="fab fa-typo3"></i>  
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/About" className="nav-links" onClick={closeMobileMenu}>
                                About Me
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Works" className="nav-links" onClick={closeMobileMenu}>
                                Experience
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Contact" className="nav-links" onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>                    
                </div>

            </nav>    
        </>
    )
}

export default Navbar
