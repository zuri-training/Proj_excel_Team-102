import logo from "../assets/img/logo.png";

import { Link } from "react-router-dom";

import { useState } from "react";

const Header = () => {
    const [modal_open, set_modal_open] = useState(false);

    return (
        <header className={`header ${modal_open && "navbar-open"}`}>
            <div className="header-content">
                <div className="brand">
                    <img className="logo" src={logo} alt="Company Logo" />
                </div>
                <nav className="navbar">
                    <ul className="navbar-nav">
                        <li>
                            <Link to="/" className="navbar-link">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="navbar-link">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/product" className="navbar-link">
                                Product
                            </Link>
                        </li>
                        <li>
                            <Link to="/features" className="navbar-link">
                                Features
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact_us" className="navbar-link">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                    <div className="navbar-right">
                        <Link to="/login" className="login">
                            Login
                        </Link>
                        <Link to="/register" className="signup">
                            Sign Up
                        </Link>
                    </div>
                </nav>
                <button
                    className="navbar-btn"
                    onClick={() => set_modal_open(!modal_open)}
                >
                    <ion-icon
                        name="menu-outline"
                        class="navbar-btn-icon"
                    ></ion-icon>
                    <ion-icon
                        name="close-outline"
                        class="navbar-btn-icon"
                    ></ion-icon>
                </button>
            </div>
        </header>
    );
};

export default Header;
