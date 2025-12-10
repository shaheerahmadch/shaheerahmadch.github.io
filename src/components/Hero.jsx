import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-bg" />

            <div className="container hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <img src="/logo.svg" alt="Shaheer365 Logo" style={{ height: '80px', width: 'auto', marginBottom: '1.5rem' }} />
                    <br />
                    <span className="hero-badge">Microsoft MVP 2024-2025</span>
                </motion.div>

                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    Hi, I'm Shaheer Ahmad <br />
                    <span>Techno-Functional Consultant</span>
                </motion.h1>

                <motion.p
                    className="hero-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Empowering the community with Power Platform & Dynamics 365.
                    <br />
                    Founder of 365Connect & Gold Microsoft Learn Student Ambassador.
                </motion.p>

                <motion.div
                    className="hero-actions"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <a href="#blog" className="btn btn-primary">
                        Read my Blog <ArrowRight size={20} />
                    </a>
                    <a href="https://www.youtube.com/@365ConnectCommunity" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                        Join Community <ExternalLink size={20} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
