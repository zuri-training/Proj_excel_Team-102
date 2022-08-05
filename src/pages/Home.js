import hero_img from "../assets/img/hero-img.png";
import checkicon from "../assets/img/checkicon.png";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <Header />
            <section className="hero-section">
                <div className="container hero-container">
                    <div className="hero-content">
                        <h2 className="hero-title">
                            The best tool for comparing CSV files and Excel
                            files
                        </h2>
                        <p className="hero-text">
                            Comparely enables you to perform different
                            operations on excel and csv files at ease on your
                            browser
                        </p>
                        <Link to="/login" className="hero-btn">
                            Get Started
                        </Link>
                    </div>
                    <div className="hero-img-box">
                        <img className="hero-img" src={hero_img} alt="" />
                    </div>
                </div>
            </section>
            <section className="features-section">
                <div className="container">
                    <div className="features-header">
                        <h3 className="features-title">Our Features</h3>
                        <p className="features-subtitle">
                            Take the advantage today and leverage on these
                            unique features Comparely got!
                        </p>
                    </div>
                    <div className="features">
                        <div className="features-content">
                            <ul className="features-list">
                                <li>
                                    <img src={checkicon} alt="" />
                                    Highlight Duplicates
                                </li>
                                <li>
                                    <img src={checkicon} alt="" />
                                    Remove Duplicates
                                </li>
                                <li>
                                    <img src={checkicon} alt="" />
                                    Highlight Duplicates and Return 2 Files
                                </li>
                                <li>
                                    <img src={checkicon} alt="" />
                                    Remove Duplicates and Return 2 Files
                                </li>
                                <li>
                                    <img src={checkicon} alt="" />
                                    Search and Highlight
                                </li>
                                <li>
                                    <img src={checkicon} alt="" />
                                    Search and Replace
                                </li>
                            </ul>
                        </div>
                        <div className="features-image-box"></div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Home;
