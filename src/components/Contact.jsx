import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="contact-container"
            >
                <h2 className="section-title">Get In Touch</h2>

                <div className="contact-card">
                    <p className="contact-text">
                        Whether you have a question about Power Platform, want to collaborate on a project,
                        or just want to say hi, I'd love to hear from you!
                    </p>

                    <div className="contact-actions">
                        <a href="mailto:shaheer.ahmad.ch@gmail.com" className="contact-btn contact-btn-primary">
                            <Mail size={20} /> Send an Email
                        </a>
                        <a href="https://pk.linkedin.com/in/shaheer-ahmad-ch" target="_blank" rel="noopener noreferrer" className="contact-btn contact-btn-secondary">
                            <MessageSquare size={20} /> Message on LinkedIn
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
