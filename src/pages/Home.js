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
                                    Search and Highlight
                                </li>
                                <li>
                                    <img src={checkicon} alt="" />
                                    Search and Replace
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
                        <div className="features-image-box"></div>
                    </div>
                </div>
            </section>
            <section className="features2-section">
                <div className="container features2-container">
                    <div className="feature">
                        <div className="feature-icon-box">
                            <ion-icon
                                name="documents-outline"
                                class="feature-icon"
                            ></ion-icon>
                        </div>
                        <p className="feature-title">Search and Highlight</p>
                        <p className="feature-text">
                            our system is going to look through the uploaded
                            excel file and check every cell any cell that
                            matches the searched keyword would be highlighted.
                        </p>
                    </div>
                    <div className="feature">
                        <div className="feature-icon-box">
                            <ion-icon
                                name="documents-outline"
                                class="feature-icon"
                            ></ion-icon>
                        </div>
                        <p className="feature-title">Search and Replace</p>
                        <p className="feature-text">
                            our system is going to look through the uploaded
                            excel file and check every cell any cell that
                            matches the searched keyword would be replaced with
                            the given replace value.
                        </p>
                    </div>
                    <div className="feature">
                        <div className="feature-icon-box">
                            <ion-icon
                                name="documents-outline"
                                class="feature-icon"
                            ></ion-icon>
                        </div>
                        <p className="feature-title">Highlight Duplicates</p>
                        <p className="feature-text">
                            Our system is going to look through the uploaded
                            excel file and check every row that contains a
                            duplicate value for the specified unique columns and
                            highlight them.
                        </p>
                    </div>
                    <div className="feature">
                        <div className="feature-icon-box">
                            <ion-icon
                                name="documents-outline"
                                class="feature-icon"
                            ></ion-icon>
                        </div>
                        <p className="feature-title">Remove Duplicates</p>
                        <p className="feature-text">
                            Our system is going to look through the uploaded
                            excel file and check every row that contains a
                            duplicate value for the specified unique columns and
                            remove them.
                        </p>
                    </div>
                    <div className="feature">
                        <div className="feature-icon-box">
                            <ion-icon
                                name="documents-outline"
                                class="feature-icon"
                            ></ion-icon>
                        </div>
                        <p className="feature-title">
                            Highlight Duplicates and Return 2 Files
                        </p>
                        <p className="feature-text">
                            Our system is going to look through the uploaded
                            excel file and check every row that contains a
                            duplicate value for the specified unique columns and
                            highlight them and also generate an analysis of
                            duplicated data.
                        </p>
                    </div>
                    <div className="feature">
                        <div className="feature-icon-box">
                            <ion-icon
                                name="documents-outline"
                                class="feature-icon"
                            ></ion-icon>
                        </div>
                        <p className="feature-title">
                            Remove Duplicates and Return 2 Files
                        </p>
                        <p className="feature-text">
                            Our system is going to look through the uploaded
                            excel file and check every row that contains a
                            duplicate value for the specified unique columns and
                            remove them and also return an excel sheet
                            containing the removed rows.
                        </p>
                    </div>
                </div>
            </section>
            <section className="video-section">
                <div className="container">
                    <h3 className="video-title">Get Firsthand Practice</h3>
                    <video className="video" controls></video>
                </div>
            </section>
            <section className="testimonial-section">
                <div className="testimonial-container">
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
                <div className="newsletter-container">
                    <h3 className="newsletter-title">
                        Subscribe for our updates
                    </h3>
                    <form class="newsletter-form">
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
