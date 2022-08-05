import logo from "../assets/img/logo.png";

import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div>
                    <img src={logo} className="footer-logo" alt="" />
                    <p className="footer-text">
                        Comparely enables you to perform different operations on
                        excel and csv files at ease on your browser
                    </p>
                </div>
                <div>
                    <h3 className="footer-title">Quick Links</h3>
                    <ul className="footer-links">
                        <li>
                            <Link to="/" className="footer-link">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="footer-link">
                                Product
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="footer-link">
                                Features
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="footer-title">Need Help</h3>
                    <p>
                        <Link to="/contact_us" className="footer-link">
                            Contact Us
                        </Link>
                    </p>
                    <a href="tel:09073193054" className="footer-btn">
                        Call Us Today
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
