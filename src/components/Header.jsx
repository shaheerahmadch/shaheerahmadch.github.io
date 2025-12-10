import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Youtube } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Blog', href: '#blog' },
        { name: 'Contact', href: '#contact' },
    ];

    const socialLinks = [
        { icon: <Github size={20} />, href: 'https://github.com/shaheerahmadch', label: 'GitHub' },
        { icon: <Linkedin size={20} />, href: 'https://pk.linkedin.com/in/shaheer-ahmad-ch', label: 'LinkedIn' },
        { icon: <Youtube size={20} />, href: 'https://www.youtube.com/@365ConnectCommunity', label: 'YouTube' },
    ];

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container header-content">
                <a href="#" className="logo flex items-center gap-2" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <img src="/logo.svg" alt="Shaheer365 Logo" style={{ height: '32px', width: 'auto' }} />
                    <span>SHAHEER<span>365</span></span>
                </a>

                <nav className="nav-desktop">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href}>
                            {link.name}
                        </a>
                    ))}
                </nav>

                <div className="social-links">
                    <div className="hidden md:flex gap-4" style={{ display: 'flex', gap: '1rem' }}>
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.label}
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>

                    <button
                        className="mobile-toggle"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="mobile-menu"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                    >
                        <nav className="mobile-nav">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
