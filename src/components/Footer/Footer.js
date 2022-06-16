import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer-container">
    <section class="social-media">
      <div class="social-media-wrap">
        <small class="website-rights">
          Made by Ivan Nathan Parmenas © 2022
        </small>
        <div class="social-icons">
          <Link
            class="social-icon-link instagram"
            to={{ pathname: "https://www.instagram.com/ivan_nathan1/" }}
            target="_blank"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
          <Link
            class="social-icon-link whatsapp"
            to={{ pathname: "https://wa.me/6289638303065" }}
            target="_blank"
            aria-label="Whatsapp"
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </Link>
          <Link
            class="social-icon-link linkedin"
            to={{ pathname: "www.linkedin.com/in/ivannathanp99" }}
            target="_blank"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
        </div>
      </div>
    </section>
  </div>
  );
}

export default Footer;