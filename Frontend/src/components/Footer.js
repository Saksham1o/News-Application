import React from 'react';
import '../footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    {/* Social Icons */}
                    <div className="col">
                        <h5>Follow Us</h5>
                        <ul className="social-icons">
                            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a></li>
                            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a></li>
                            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                        </ul>
                    </div>

                    {/* Download Apps */}
                    <div className="col">
                        <h5>Download Apps</h5>
                        <ul className="app-icons">
                            <li><a href="/" aria-label="Download Android App">
                                Android
                            </a></li>
                            <li><a href="/" aria-label="Download Apple App">
                                Apple
                            </a></li>
                        </ul>
                    </div>

                    {/* Express Group */}
                    <div className="col">
                        <h5>Express Group</h5>
                        <ul>
                            <li><a href="/">The Indian Express</a></li>
                            <li><a href="/">The Financial Express</a></li>
                            <li><a href="/">Loksatta</a></li>
                            <li><a href="/">Jansatta</a></li>
                            <li><a href="/">inUth</a></li>
                            <li><a href="/">The ExpressGroup</a></li>
                            <li><a href="/">26/11 Stories of Strength</a></li>
                            <li><a href="/">Light House Journalism</a></li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="col">
                        <h5>Quick Links</h5>
                        <ul>
                            <li><a href="/">T&C</a></li>
                            <li><a href="/">Privacy Policy</a></li>
                            <li><a href="/">Advertise with Us</a></li>
                            <li><a href="/">Brand Solutions</a></li>
                            <li><a href="/">Contact Us</a></li>
                            <li><a href="/">Subscribe</a></li>
                            <li><a href="/">Statutory provisions on reporting (sexual offenses)</a></li>
                            <li><a href="/">CSR</a></li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="copyright">
                    <p>Copyright © 2025 The Saksham [P] Ltd. All Rights Reserved</p>
                    <p>Powered by WordPress.com VIP</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;