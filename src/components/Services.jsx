import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, ArrowRight } from 'lucide-react';
import './Services.css';

const Services = () => {
    const services = [
        {
            icon: <Globe size={40} />,
            title: "SHAHEER365",
            description: "My personal brand where I share insights, tutorials, and experiences related to Power Platform and Dynamics 365. Join me on my journey of continuous learning.",
            link: "https://shaheer365.blogspot.com/",
            linkText: "Visit Blog"
        },
        {
            icon: <Users size={40} />,
            title: "365Connect Community",
            description: "A thriving community dedicated to Microsoft technologies. We foster a supportive environment for individuals to learn, teach, and collaborate globally.",
            link: "https://www.youtube.com/@365ConnectCommunity",
            linkText: "Join Community"
        }
    ];

    return (
        <section id="services" className="section container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="section-title">What I Do</h2>

                <div className="grid md:grid-cols-2 gap-8" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="service-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.description}</p>
                            <a href={service.link} target="_blank" rel="noopener noreferrer" className="service-link">
                                {service.linkText} <ArrowRight size={16} />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Services;
