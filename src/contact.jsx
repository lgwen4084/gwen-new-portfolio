    // src/Contact.jsx
    import React from 'react';
    import Header from './header';
    import Footer from './footer';
    import { motion } from 'framer-motion';
    import './index.css';

    const PUBLIC = process.env.PUBLIC_URL;

    const Contact = () => {
    return (
        <>
        <Header />

        <main>
            <section>
            <motion.div 
                className="contact-title"
                initial={{ opacity: 0, y: -20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6 }}
            >
                <h1>GET IN TOUCH</h1>
            </motion.div>

            <motion.div 
                className="message"
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <h2>CONTACT SUNSCRIPT</h2>
                <p>Sunscript Creative Studio</p>
                <p>Phone: +1 (123) 456-7890</p>
                <p>Email: hello@sunscript.dev</p>

                <section className="adventures">
                <h2>We're here to collaborate with you</h2>
                <div className="employees-gallery">
                    <figure>
                    <img
                        src={`${PUBLIC}/images/smiling1.jpeg`}
                        alt="Creative Developer"
                    />
                    <figcaption>Fast & Friendly Support</figcaption>
                    </figure>
                    <figure>
                    <img
                        src={`${PUBLIC}/images/smiling2.jpeg`}
                        alt="Design Team"
                    />
                    <figcaption>Design That Connects</figcaption>
                    </figure>
                    <figure>
                    <img
                        src={`${PUBLIC}/images/smiling3.jpeg`}
                        alt="Project Manager"
                    />
                    <figcaption>Focused Project Delivery</figcaption>
                    </figure>
                </div>
                </section>
            </motion.div>
            </section>

            <section>
            <motion.div
                className="map"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.5834110040732!2d-111.90282132394422!3d40.77118647138481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752f5aa721d9be3%3A0xc118ae242cfd5461!2sEnsign%20College!5e0!3m2!1sen!2sus!4v1749914451544!5m2!1sen!2sus"
                width="400"
                height="300"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sunscript Location Map"
                />
            </motion.div>
            </section>

            <section>
            <motion.div
                className="form-container"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
            >
                <form>
                <fieldset className="contact">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </fieldset>

                <fieldset className="reason">
                    <div className="form-group">
                    <label>Purpose of your message:</label>
                    <input
                        type="radio"
                        id="inquiry"
                        name="purpose"
                        value="Collaboration"
                    />
                    <label htmlFor="inquiry">Collaboration</label>
                    <input
                        type="radio"
                        id="services"
                        name="purpose"
                        value="Services Inquiry"
                    />
                    <label htmlFor="services">Services Inquiry</label>
                    <input
                        type="radio"
                        id="feedback"
                        name="purpose"
                        value="Website Feedback"
                    />
                    <label htmlFor="feedback">Website Feedback</label>
                    </div>

                    <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        required
                    />
                    </div>
                </fieldset>

                <div className="submission">
                    <input
                    type="checkbox"
                    id="subscribe"
                    name="subscribe"
                    />
                    <label htmlFor="subscribe">
                    Subscribe me to Sunscript updates
                    </label>
                </div>

                <button type="submit" className="submit-button">
                    Send Message
                </button>
                </form>
            </motion.div>
            </section>
        </main>

        <Footer />
        </>
    );
    };

    export default Contact;
