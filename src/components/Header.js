import logo from "../assets/img/logo.png";

import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <div className="brand">
                    <img className="logo" src={logo} alt="Company Logo" />
                </div>
                <ul className="navbar">
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
                <div className="header-right">
                    <Link to="/login" className="login">
                        Login
                    </Link>
                    <Link to="/register" className="signup">
                        Sign Up
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
