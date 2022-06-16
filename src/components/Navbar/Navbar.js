import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import $ from "jquery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTypo3 } from "@fortawesome/free-brands-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    const container = document.getElementById("containerElement");

    if (container != null) {
      container.addEventListener("scroll", () => changeBackground());
    }

    function changeBackground() {
      if (container.scrollTop >= 80) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    }
  });

  var selector = ".nav-menu li";
  var selector2 = ".nav-home li";
  $(selector).on("click", function () {
    $(selector2).addClass("active2");
    $(selector).removeClass("actived");
    $(this).addClass("actived");
  });

  $(selector2).on("click", function () {
    $(selector2).removeClass("active2");
    $(selector).removeClass("actived");
    $(this).removeClass("active2");
  });
  return (
    <>
      <nav className={navbar ? "navbar active" : "navbar"}>
        <div className="navbar-container">
        <ul className="nav-home" >
          <li className="nav-item">
        <Link
        style={{color:"#fff !important"}}
                onClick={closeMobileMenu}
                containerId="containerElement"
                to="home"
                spy={true}
                smooth={true}
                duration={100}
              >
         
            MyPortfolio <FontAwesomeIcon icon={faTypo3} />
          </Link>
          </li>
          </ul>
          <div className="menu-icon" onClick={handleClick}>
            <FontAwesomeIcon icon={click? faXmark : faBars}/>
          
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
    
            <li className="nav-item">
              <Link
                onClick={closeMobileMenu}
                containerId="containerElement"

                to="about"
                spy={true}
                smooth={true}
                duration={100}
              >
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={closeMobileMenu}
                containerId="containerElement"
       
                to="works"
                spy={true}
                smooth={true}
                duration={100}
              >
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={closeMobileMenu}
                containerId="containerElement"
       
                to="projects"
                spy={true}
                smooth={true}
                duration={100}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={closeMobileMenu}
                containerId="containerElement"

                to="contact"
                spy={true}
                smooth={true}
                duration={100}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
