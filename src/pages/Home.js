import hero_img from "../assets/img/hero-img.png";
import features_img from "../assets/img/features-img.png";
import checkicon from "../assets/img/checkicon.png";

import howto_video from "../assets/video/howto_use_comparely.mp4";

import excel_icon from "../assets/img/excel-icon.svg";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { Link, useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

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
            <section className="try-it-section">
                <div className="container">
                    <h2 className="try-it-title">
                        Try our service at the spot
                    </h2>
                </div>
                <div className="container try-it-container">
                    <div className="try-it">
                        <div
                            className="try-it-header"
                            onClick={() => navigate("/login")}
                        >
                            <img src={excel_icon} alt="" />
                            <div className="try-it-icons">
                                <ion-icon
                                    name="arrow-forward-outline"
                                    class="try-it-icon"
                                ></ion-icon>
                                <ion-icon
                                    name="arrow-back-outline"
                                    class="try-it-icon"
                                ></ion-icon>
                            </div>
                            <img src={excel_icon} alt="" />
                        </div>
                        <p className="try-it-heading">Highlight Duplicates</p>
                        <p className="try-it-paragraph">
                            Comparely helps you highlight entities(rows)
                            containing duplicate values for unique
                            features(columns).
                        </p>
                    </div>
                    <div className="try-it">
                        <div
                            className="try-it-header"
                            onClick={() => navigate("/login")}
                        >
                            <img src={excel_icon} alt="" />
                            <div className="try-it-icons">
                                <ion-icon
                                    name="arrow-forward-outline"
                                    class="try-it-icon"
                                ></ion-icon>
                                <ion-icon
                                    name="arrow-back-outline"
                                    class="try-it-icon"
                                ></ion-icon>
                            </div>
                            <img src={excel_icon} alt="" />
                        </div>
                        <p className="try-it-heading">Remove Duplicates</p>
                        <p className="try-it-paragraph">
                            Comparely helps you remove entities(rows) containing
                            duplicate values for unique features(columns).
                        </p>
                    </div>
                    <div className="try-it">
                        <div
                            className="try-it-header"
                            onClick={() => navigate("/login")}
                        >
                            <img src={excel_icon} alt="" />
                            <div className="try-it-icons">
                                <ion-icon
                                    name="arrow-forward-outline"
                                    class="try-it-icon"
                                ></ion-icon>
                                <ion-icon
                                    name="arrow-back-outline"
                                    class="try-it-icon"
                                ></ion-icon>
                            </div>
                            <img src={excel_icon} alt="" />
                            <img src={excel_icon} alt="" />
                        </div>
                        <p className="try-it-heading">
                            Highlight Duplicates and Return 2 Files
                        </p>
                        <p className="try-it-paragraph">
                            Comparely helps you highlight entities(rows)
                            containing duplicate values for unique
                            features(columns) and also give analytics on what
                            values were repeated or duplicated.
                        </p>
                    </div>
                    <div className="try-it">
                        <div
                            className="try-it-header"
                            onClick={() => navigate("/login")}
                        >
                            <img src={excel_icon} alt="" />
                            <div className="try-it-icons">
                                <ion-icon
                                    name="arrow-forward-outline"
                                    class="try-it-icon"
                                ></ion-icon>
                                <ion-icon
                                    name="arrow-back-outline"
                                    class="try-it-icon"
                                ></ion-icon>
                            </div>
                            <img src={excel_icon} alt="" />
                            <img src={excel_icon} alt="" />
                        </div>
                        <p className="try-it-heading">
                            Remove Duplicates and Return 2 Files
                        </p>
                        <p className="try-it-paragraph">
                            Comparely helps you remove entities(rows) containing
                            duplicate values for unique features(columns) and
                            also give you a file containing the removed
                            entities(rows).
                        </p>
                    </div>
                </div>
            </section>
            <section className="features-section">
                <div className="container features-container">
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
                                    Search and Highlight
                                </li>
                                <li>
                                    <img src={checkicon} alt="" />
                                    Search and Replace
                                </li>
                                <li>
                                    <img src={checkicon} alt="" />
                                    Diff Checker
                                </li>
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
                            </ul>
                        </div>
                        <div className="features-img-box">
                            <img
                                src={features_img}
                                alt=""
                                className="features-img"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="video-section">
                <div className="container">
                    <h3 className="video-title">Get Firsthand Practice</h3>
                    <video className="video" src={howto_video} controls></video>
                    <p className="video-paragraph">
                        <a
                            href="https://youtu.be/NIvCH-eOqZk"
                            target="_blank"
                            rel="noreferrer"
                            className="video-link"
                        >
                            Watch full video on youtube
                        </a>
                    </p>
                </div>
            </section>
            <section className="testimonial-section">
                <div className="container testimonial-container">
                    <ion-icon
                        name="chevron-back-circle-outline"
                        class="testimonial-icon testimonial-icon--left"
                    ></ion-icon>
                    <ion-icon
                        name="chevron-forward-circle-outline"
                        class="testimonial-icon testimonial-icon--right"
                    ></ion-icon>
                    <div className="testimonial">
                        <h3 className="testimonial-title">
                            &quot;I can't express how happy I am using
                            Comparely&quot;
                        </h3>
                        <p className="testimonial-text">
                            I can’t express how happy I am using Comparely.
                            Comparely has made comparing Excel files really easy
                            for me.. I will always recommend Comparely in years
                            to come.
                        </p>
                        <div className="testimonial-footer">
                            <ion-icon
                                name="person-outline"
                                class="testimonial-footer-icon"
                            ></ion-icon>
                            <p className="testimonial-person">Bob Reyes</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="newsletter-section">
                <div className="container">
                    <h3 className="newsletter-title">
                        Subscribe for our updates
                    </h3>
                    <form className="newsletter-form">
                        <input
                            type="text"
                            name="email_address"
                            placeholder="Enter your email address"
                        />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Home;
