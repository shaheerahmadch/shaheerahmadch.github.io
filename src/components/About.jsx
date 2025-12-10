import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Code, BookOpen } from 'lucide-react';
import './About.css';

const About = () => {
    const highlights = [
        {
            icon: <Award size={24} />,
            title: "Microsoft MVP 2024-2025",
            description: "Recognized for exceptional community leadership and technical expertise in Microsoft technologies."
        },
        {
            icon: <Users size={24} />,
            title: "Community Leader",
            description: "Founder of 365Connect Community, fostering learning and collaboration globally."
        },
        {
            icon: <BookOpen size={24} />,
            title: "Gold Student Ambassador",
            description: "Leading events and mentoring students as a Microsoft Learn Student Ambassador."
        },
        {
            icon: <Code size={24} />,
            title: "Techno-Functional",
            description: "Bridging the gap between technical implementation and business requirements."
        }
    ];

    const skills = [
        "Power Platform", "Dynamics 365", "Power Apps", "Power Automate",
        "Dataverse", "Azure", "C#", "JavaScript", "React"
    ];

    return (
        <section id="about" className="section container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="section-title">About Me</h2>

                <div className="grid md:grid-cols-2 gap-8 items-center" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    <div>
                        <p className="text-lg text-gray-300 mb-6" style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                            I am a Techno-Functional Consultant and Microsoft MVP with a passion for Power Platform and Dynamics 365.
                            As a Gold Microsoft Learn Student Ambassador and Founder of 365Connect, I strive to foster a supportive
                            environment for learning and collaboration.
                        </p>
                        <p className="text-lg text-gray-300 mb-6" style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                            My journey involves not just building solutions but also empowering others to do the same through
                            blogging, speaking engagements, and community events.
                        </p>

                        <div className="tech-stack">
                            {skills.map((skill, index) => (
                                <span key={index} className="tech-tag">{skill}</span>
                            ))}
                        </div>
                    </div>

                    <div className="grid gap-4" style={{ display: 'grid', gap: '1rem' }}>
                        {highlights.map((item, index) => (
                            <motion.div
                                key={index}
                                className="about-card about-highlight"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="highlight-icon">{item.icon}</div>
                                <div className="highlight-content">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
