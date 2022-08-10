import Header from "../components/Header";
import Footer from "../components/Footer";

import dami from "../assets/img/team/dami.jpeg";

const About = () => {
    return (
        <>
            <Header />
            <section className="about-section">
                <div className="about-breadcrumb">
                    <h2>About Comaparely</h2>
                </div>
                <div className="container">
                    <div className="about-info-grid">
                        <div className="about-info">
                            <h2 className="about-info-title">Mission</h2>
                            <p className="about-info-text">
                                Our mission is to offer a free, easy to use
                                software to end - users with a simple interface
                                which allows them to compare Excel files, edit
                                Excel files and save changes made to Excel files
                                in CSV and all Excel file formats.
                            </p>
                        </div>
                        <div className="about-info">
                            <h2 className="about-info-title">Background</h2>
                            <p className="about-info-text">
                                Comparely was launched in 2022 by project team
                                102 and powered by 14GXZURI. Comparely started
                                as a web application which users can access from
                                any device, through any browser.
                            </p>
                        </div>
                        <div className="about-info">
                            <h2 className="about-info-title">Objectives</h2>
                            <p className="about-info-text">
                                Comparely aims to offer a wide range of features
                                for end users to perform countless operations on
                                Excel files on any device. Comparely aims to as
                                well provide our users with utmost satisfaction
                                while using our application.
                            </p>
                        </div>
                    </div>
                    <div className="team-section">
                        <h2 className="team-title">Meet the Team</h2>
                        <p className="team-subtitle">
                            To provide our users with utmost satisfaction while
                            using comparely, It takes an eclectic group of
                            passionate individuals. Get to know the brains
                            behind Comparely.
                        </p>
                        <div className="team-grid">
                            <div className="team-member">
                                <img
                                    src={dami}
                                    alt=""
                                    className="team-member-img"
                                />
                                <div className="team-member-info">
                                    <p className="team-member-name">Damilola</p>
                                    <p className="team-member-track">
                                        Fulltime Fullstack
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default About;
