import React from 'react';
import { Github, Linkedin, Youtube, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                            <img src="/logo.svg" alt="Shaheer365 Logo" style={{ height: '40px', width: 'auto' }} />
                            <h3>SHAHEER<span>365</span></h3>
                        </div>
                        <p>
                            Empowering developers and businesses with Microsoft Power Platform & Dynamics 365 solutions.
                        </p>
                        <div className="footer-social">
                            <a href="https://github.com/shaheerahmadch" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={20} /></a>
                            <a href="https://pk.linkedin.com/in/shaheer-ahmad-ch" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
                            <a href="https://www.youtube.com/@365ConnectCommunity" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Youtube size={20} /></a>
                            <a href="mailto:contact@example.com" aria-label="Email"><Mail size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#blog">Blog</a></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>Community</h4>
                        <ul>
                            <li><a href="https://www.youtube.com/@365ConnectCommunity" target="_blank" rel="noopener noreferrer">365Connect</a></li>
                            <li><a href="https://shaheer365.blogspot.com/" target="_blank" rel="noopener noreferrer">Shaheer365 Blog</a></li>
                            <li><a href="https://mvp.microsoft.com/en-US/mvp/profile/d667f796-68b2-4580-be96-4c073caf6ffb" target="_blank" rel="noopener noreferrer">MVP Profile</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Shaheer Ahmad. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
