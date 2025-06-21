    // src/Footer.jsx
    import React from 'react';
    const PUBLIC = process.env.PUBLIC_URL;

    const Footer = () => {
    return (
        <footer>
        <div className="footer-content">
            <div className="footer-left">
            <h3>SUNSCRIPT</h3>
            <p>
                Contact us for a killer website that stands out in the digital world.
            </p>
            <div className="newsletter">
                <h4>Our Newsletter</h4>
                <input type="text" placeholder="Email Address" />
            </div>
            </div>

            <div className="footer-center">
            <h3 className="useful-links">Useful Links</h3>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="pages.html">Pages</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="blogs.html">Blogs</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
            </div>

            <div className="footer-right">
            <h3>Contact Info</h3>
            <p>Phone: +1 000 000 0000</p>
            <p>Email: sunscript@gmail.com</p>
            <p>Address: Salt Lake City, UT</p>
            <div className="social-icons">
                <a href="https://facebook.com">
                <img src={`${PUBLIC}/images/fb_end.png`} alt="Facebook" />
                </a>
                <a href="https://linkedin.com">
                <img src={`${PUBLIC}/images/in_end.png`} alt="LinkedIn" />
                </a>
                <a href="https://x.com">
                <img src={`${PUBLIC}/images/tw_end.png`} alt="Twitter" />
                </a>
                <a href="https://youtube.com">
                <img src={`${PUBLIC}/images/yt_end.png`} alt="YouTube" />
                </a>
            </div>
            </div>
        </div>

        <section className="footer-bottom">
            <p>© 2025 Designed by Sunscript.</p>
            <div className="payment-icons">
            <img src={`${PUBLIC}/images/visa.svg`} alt="Visa" />
            <img src={`${PUBLIC}/images/mastercard.svg`} alt="Mastercard" />
            <img src={`${PUBLIC}/images/paypal.svg`} alt="PayPal" />
            <img src={`${PUBLIC}/images/skrill.svg`} alt="Skrill" />
            <img src={`${PUBLIC}/images/payoneer.svg`} alt="Payoneer" />
            <img src={`${PUBLIC}/images/gpay.svg`} alt="Google Pay" />
            </div>
            <p>
            <a href="/terms-and-conditions">Terms &amp; Conditions</a> |{' '}
            <a href="https://www.ensign.com">Privacy Policy</a>
            </p>
        </section>
        </footer>
    );
    };

    export default Footer;
