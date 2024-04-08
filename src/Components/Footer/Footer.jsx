// Footer.js

import React from "react";
import './footerStyles.css';
import NavBarLogo from '../Assets/NavBarLogo.png';
import ImageOne from '../Assets/ImageOne.png';
import ImageThree from '../Assets/ImageThree.png';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-column">
                <img src={NavBarLogo} alt="Logo" className="footer-logo" />
            </div>
            <div className="footer-column">
                <img src={ImageThree} alt="Image" className="footer-image" />
                <p className="Mid-column-Text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="footer-column">
                <h3 className="Footer-Topic">Social Media</h3>
                <ul className="social-media">
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Instagram</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;

