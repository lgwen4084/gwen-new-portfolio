    // src/Projects.jsx
    import React from 'react';
    import Header from './header';
    import Footer from './footer';
    import './index.css';

    const PUBLIC = process.env.PUBLIC_URL;

    const Projects = () => {
    return (
        <>
        <Header />

        <main>
            {/* About Hero */}
            <section className="hero-section about-hero">
            <div className="hero">
                <div className="hero-content">
                <h1>Welcome to Sunscript</h1>
                <h3>
                    <span className="highlight">More Than Just Code</span>
                </h3>
                <p>
                    I'm a creative technologist crafting smooth digital journeys.
                    <br />
                    This is my story, my skills, and my mission.
                </p>
                </div>
                <div className="sun-shape">
                <div className="sun-core" />
                </div>
            </div>
            </section>

            {/* Deep About Section */}
            <section className="about-section deeper-about">
            <div className="about-inner">
                <div className="about-left">
                <img
                    src={`${PUBLIC}/images/about-me.jpeg`}
                    alt="Myself"
                    className="about-img"
                />
                </div>
                <div className="about-right">
                <h2>Who I Am</h2>
                <p>
                    I’m Gwen, the developer behind Sunscript, with roots as a front-end engineer and two years of full-stack experience.
                    I specialize in crafting responsive web interfaces and reliable back-end systems, blending intuitive design with solid architecture.
                    Whether it’s a custom CMS, API-driven app, or data pipeline, I deliver clean code and seamless user experiences for small and medium-sized businesses.
                </p>
                <p>
                    I bring two years of experience building responsive,
                    accessible, and modern interfaces for the web, alongside back-end
                    logic and API integration. I'm passionate about both front-end
                    aesthetics and robust software architecture.
                </p>
                <p>
                    Whether it's developing a custom CMS, designing data pipelines,
                    or building engaging user experiences, I deliver clean code and
                    thoughtful design.
                </p>
                </div>
            </div>
            </section>

                {/* Mission Section */}
                <section class="mission-section">
                    <h2>My Mission</h2>
                    <p>
                    My mission is to empower small and medium-sized businesses with dynamic web and app experiences—seamless transitions,
                    intuitive design, and rock-solid performance; so they can engage users and drive real growth.
                    </p>
                    <div class="values-list">
                <div class="value-item">
                    <h3>Scalability</h3>
                    <p>Architecting front-end and back-end components that grow seamlessly under load.</p>
                </div>
                <div class="value-item">
                    <h3>Security</h3>
                    <p>Enforcing secure coding, encrypted data flows, and robust authentication methods.</p>
                </div>
                <div class="value-item">
                    <h3>Automation</h3>
                    <p>Streamlining builds, deployments, and testing with CI/CD pipelines and Infrastructure as Code.</p>
                </div>
                </div>
            </section>

            {/* Technologies Section */}
            <section className="skills-section">
            <div className="skills-left">
                <h2>Technologies I Work With</h2>
                <div className="skills-icons">
                <div className="skills-row">
                    <img src={`${PUBLIC}/images/figma.svg`} alt="Figma" />
                    <img src={`${PUBLIC}/images/ps.svg`} alt="Photoshop" />
                    <img src={`${PUBLIC}/images/python.svg`} alt="Python" />
                    <img src={`${PUBLIC}/images/html.svg`} alt="HTML" />
                    <img src={`${PUBLIC}/images/c_plus.png`} alt="C++" />
                </div>
                <div className="skills-row-2">
                    <img src={`${PUBLIC}/images/jsx.svg`} alt="JSX" />
                    <img src={`${PUBLIC}/images/php.svg`} alt="PHP" />
                    <img src={`${PUBLIC}/images/css.svg`} alt="CSS" />
                    <img src={`${PUBLIC}/images/react.svg`} alt="React" />
                    <img src={`${PUBLIC}/images/vue.svg`} alt="Vue" />
                </div>
                </div>
            </div>
            <div className="skills-right">
                <h3>Engineering Meets Design</h3>
                <p>
                With a unique background in acoustics and software, I approach
                projects holistically—balancing usability, performance, and design
                fidelity.
                </p>
            </div>
            </section>

            {/* Contact Section */}
            <section className="contact-section">
            <h2>Want to Work Together?</h2>
            <p className="contact-email">sunscript@mail.com</p>
            <a href="contact.html" className="btn-secondary">
                Let's Talk
            </a>
            </section>
        </main>

        <Footer />
        </>
    );
    };

    export default Projects;
