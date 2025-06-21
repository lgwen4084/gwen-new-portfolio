    // src/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Header from './header';
import Footer from './footer';
import './index.css';

    const PUBLIC = process.env.PUBLIC_URL;

    const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
    };

    const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    };

    const projectData = [
    {
        title: 'Become Solid',
        image: `${PUBLIC}/images/example.png`,
        alt: 'Become Solid project preview',
        link: 'https://becomesolid.com/',
        description:
        'SOLID® is the world’s first pre-workout that dissolves in your mouth and absorbs directly through your cheek to deliver 3–10× nutrients into your bloodstream.',
    },
    {
        title: 'Solase Pickleball',
        image: `${PUBLIC}/images/example2.png`,
        alt: 'Solase Pickleball project preview',
        link: 'https://solasepickleball.com/',
        description:
        'Solase Pickleball shoes are engineered for players who push every point, featuring a wider toe box, mid-cut ankle support, and a shock-absorbing sole to enhance stability, comfort, and protection.',
    },
    {
        title: 'Devos Outdoors',
        image: `${PUBLIC}/images/example3.png`,
        alt: 'Devos Outdoors project preview',
        link: 'https://www.devosoutdoor.com/',
        description:
        'Devos Outdoors designs problem-solving camping and outdoor gear—like the LightRanger Ultimate Kit—that combines engineered lighting solutions with rugged portability for base camp and backcountry adventures.',
    },
    {
        title: 'ODR Skis',
        image: `${PUBLIC}/images/example4.png`,
        alt: 'ODR Skis project preview',
        link: 'https://odrskis.com/',
        description:
        'ODR Skis creates modular, lightweight ski systems that learn 4× faster than traditional skis and pack down for easy transport—no bulky gear required for a more controlled, natural fall.',
    },
    {
        title: 'The Ocean Cleanup',
        image: `${PUBLIC}/images/example5.webp`,
        alt: 'The Ocean Cleanup project preview',
        link: 'https://theoceancleanup.com/',
        description:
        'The Ocean Cleanup is a nonprofit engineering organization deploying ocean- and river-based systems to extract plastic pollution, aiming to remove 90% of floating ocean plastic by 2040.',
    },
    {
        title: 'Barbell Apparel',
        image: `${PUBLIC}/images/example6.png`,
        alt: 'Barbell Apparel project preview',
        link: 'https://barbellapparel.com/',
        description:
        'Barbell Apparel produces athletic-inspired jeans and pants built for movement and durability—versatile performance wear backed by a lifetime guarantee.',
    },
    ];

    const Projects = () => (
    <>
        <Header />

        <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="projects-section"
        >
        <section id="projects" className="projects-section container">
            <h2>Take A Look At My Recent Projects</h2>
            <div className="project-grid">
            {projectData.map((proj) => (
                <motion.a
                key={proj.title}
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${proj.title} (opens in new tab)`}
                className="project-card"
                variants={cardVariants}
                >
                <div
                    className="project-image"
                    role="img"
                    aria-label={`${proj.title} Project Preview`}
                >
                    <img src={proj.image} alt={proj.alt} />
                </div>
                <h3>{proj.title}</h3>
                <p className="project-description">{proj.description}</p>
                </motion.a>
            ))}
            </div>

            <a href="#projects" className="btn-primary">
            View All Works
            </a>
        </section>
        </motion.main>

        <Footer />
    </>
    );

    export default Projects;
