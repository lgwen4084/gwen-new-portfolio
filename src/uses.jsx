    // src/Uses.jsx
    import React from 'react'
    // eslint-disable-next-line no-unused-vars
    import { motion } from 'framer-motion'
    import Header from './header'
    import Footer from './footer'
    import './index.css'

    const PUBLIC = process.env.PUBLIC_URL

    const Uses = () => {
    return (
        <>
        <Header />

        <main className="uses-container">
            <h1 className="uses-title">SOFTWARE, GEAR, AND TOOLS I USE DAILY</h1>

            <section className="uses-section">
            <div className="uses-header">
                <img
                src={`${PUBLIC}/images/computer.png`}
                alt="Workstation"
                className="uses-icon"
                />
                <h2>Workstation</h2>
            </div>
            <ul>
                <li>
                <strong>MacBook Air (M2, 13.6")</strong> – My main portable machine for development.
                </li>
                <li>
                <strong>iMac Monitors (x2)</strong> – Used as external displays for multitasking and large design
                previews.
                </li>
                <li>
                <strong>Magic Keyboard + Trackpad</strong> – Clean and minimal Apple setup.
                </li>
            </ul>
            </section>

            <section className="uses-section">
            <div className="uses-header">
                <img
                src={`${PUBLIC}/images/source-code.png`}
                alt="Development Tools"
                className="uses-icon"
                />
                <h2>Development Tools</h2>
            </div>
            <ul>
                <li>
                <strong>VS Code</strong> – My go-to code editor with custom theme and extensions.
                </li>
                <li>
                <strong>Terminal (Warp + iTerm2)</strong> – Fast terminal workflows with Git aliases.
                </li>
                <li>
                <strong>GitHub</strong> – Source control and collaboration platform.
                </li>
                <li>
                <strong>Figma Dev Mode</strong> – For extracting dev specs from design files.
                </li>
                <li>
                <strong>Prettier & ESLint</strong> – Code formatting and linting for clean structure.
                </li>
                <li>
                <strong>Node.js & npm</strong> – For all JS/React/Next.js builds.
                </li>
                <li>
                <strong>Framer Motion</strong> – For adding smooth animations to React components.
                </li>
            </ul>
            </section>

            <section className="uses-section">
            <div className="uses-header">
                <img
                src={`${PUBLIC}/images/edit-text.png`}
                alt="Design Tools"
                className="uses-icon"
                />
                <h2>Design</h2>
            </div>
            <ul>
                <li>
                <strong>Figma</strong> – My design playground and wireframing tool.
                </li>
                <li>
                <strong>Adobe Illustrator</strong> – Logo design and vector assets.
                </li>
            </ul>
            </section>

            <section className="uses-section">
            <div className="uses-header">
                <img
                src={`${PUBLIC}/images/list.png`}
                alt="Productivity Tools"
                className="uses-icon"
                />
                <h2>Publishing & Productivity</h2>
            </div>
            <ul>
                <li>
                <strong>Notion</strong> – For content planning, documentation, and notes.
                </li>
                <li>
                <strong>Google Drive</strong> – Shared project assets and backups.
                </li>
                <li>
                <strong>Raycast</strong> – Productivity booster and app launcher.
                </li>
            </ul>
            </section>
        </main>

        <Footer />
        </>
    )
    }

    export default Uses
