import Header from "../components/Header";
import Footer from "../components/Footer";

import dami from "../assets/img/team/dami.jpeg";
import kehinde from "../assets/img/team/kehinde.jpeg";
import opeoluwa from "../assets/img/team/opeoluwa.jpeg";
import akod from "../assets/img/team/akod.jpeg";
import aishat from "../assets/img/team/aishat.jpeg";
import anuoluwa from "../assets/img/team/anuoluwa.jpeg";
import edith from "../assets/img/team/edith.jpeg";
import fatimoh from "../assets/img/team/fatimoh.jpeg";
import favour from "../assets/img/team/favour.jpeg";
import kayode from "../assets/img/team/kayode.jpeg";
import micheal from "../assets/img/team/micheal.jpeg";
import promise from "../assets/img/team/promise.jpeg";
import rachel from "../assets/img/team/rachel.jpeg";
import raphael from "../assets/img/team/raphael.jpeg";
import ugonna from "../assets/img/team/ugonna.jpeg";
import rehoboth from "../assets/img/team/rehoboth.jpg";

const About = () => {
    return (
        <>
            <Header />
            <section className="about-section">
                <div className="about-breadcrumb">
                    <h2>About Comparely</h2>
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
                                        Fullstack developer
                                    </p>
                                </div>
                            </div>
                            <div className="team-member">
                                <img
                                    src={kehinde}
                                    alt=""
                                    className="team-member-img"
                                />
                                <div className="team-member-info">
                                    <p className="team-member-name">
                                        Kehinde Kayode Ohiosumuan
                                    </p>
                                    <p className="team-member-track">
                                        Fullstack developer
                                    </p>
                                </div>
                            </div>
                            <div className="team-member">
                                <img
                                    src={opeoluwa}
                                    alt=""
                                    className="team-member-img"
                                />
                                <div className="team-member-info">
                                    <p className="team-member-name">
                                        Ahmed Opeoluwa
                                    </p>
                                    <p className="team-member-track">
                                        Fullstack developer
                                    </p>
                                </div>
                            </div>
                            <div className="team-member">
                                <img
                                    src={akod}
                                    alt=""
                                    className="team-member-img"
                                />
                                <div className="team-member-info">
                                    <p className="team-member-name">
                                        Atunrase Kehinde
                                    </p>
                                    <p className="team-member-track">
                                        Product designer
                                    </p>
                                </div>
                            </div>
                            <div className="team-member">
                                <img
                                    src={edith}
                                    alt=""
                                    className="team-member-img"
                                />
                                <div className="team-member-info">
                                    <p className="team-member-name">
                                        Edith Osisike
                                    </p>
                                    <p className="team-member-track">
                                        Fullstack developer
                                    </p>
                                </div>
                            </div>
                            <div className="team-member">
                                <img
                                    src={ugonna}
                                    alt=""
                                    className="team-member-img"
                                />
                                <div className="team-member-info">
                                    <p className="team-member-name">
                                        Anya Ugonna Eberechi
                                    </p>
                                    <p className="team-member-track">
                                        Product designer
                                    </p>
                                </div>
                            </div>
                            <div className="team-member">
                                <img
                                    src={rachel}
                                    alt=""
                                    className="team-member-img"
                                />
                                <div className="team-member-info">
                                    <p className="team-member-name">
                                        Okafor Ebele Rachel
                                    </p>
                                    <p className="team-member-track">
                                        Product designer
                                    </p>
                                </div>
                            </div>
                            <div className="team-member">
                                <img
                                    src={fatimoh}
                                    alt=""
                                    className="team-member-img"
                                />
                                <div className="team-member-info">
                                    <p className="team-member-name">
                                        Bakare Fatimoh
                                    </p>
                                    <p className="team-member-track">
                                        Fullstack developer
                                    </p>
                                </div>
                            </div>
                            <div className="team-member">
                                <img
                                    src={favour}
                                    alt=""
                                    className="team-member-img"
                                />
                                <div className="team-member-info">
                                    <p className="team-member-name">
                                        Favour Martins
                                    </p>
                                    <p className="team-member-track">
                                        Product designer
                                    </p>
                                </div>
                            </div>
                            <div className="team-member">
                                <img
                                    src={anuoluwa}
                                    alt=""
                                    className="team-member-img"
                                />
                                <div className="team-member-info">
                                    <p className="team-member-name">
                                        Wonderful Anuoluwapo Agbozi
                                    </p>
                                    <p className="team-member-track">
                                        Product designer
                                    </p>
                                </div>
                            </div>
                            <div className="team-member">
                                <img
                                    src={promise}
                                    alt=""
                                    className="team-member-img"
                                />
                                <div className="team-member-info">
                                    <p className="team-member-name">
                                        Okoh Promise Isioma
                                    </p>
                                    <p className="team-member-track">
                                        Product designer
                                    </p>
                                </div>
                            </div>
                            <div className="team-member">
                                <img
                                    src={raphael}
                                    alt=""
                                    className="team-member-img"
                                />
                                <div className="team-member-info">
                                    <p className="team-member-name">
                                        Raphael Okai
                                    </p>
                                    <p className="team-member-track"></p>
                                </div>
                            </div>
                            <div className="team-member">
                                <img
                                    src={kayode}
                                    alt=""
                                    className="team-member-img"
                                />
                                <div className="team-member-info">
                                    <p className="team-member-name">
                                        Fawehinmi Kayode Olaoluwa
                                    </p>
                                    <p className="team-member-track">
                                        Product Designer
                                    </p>
                                </div>
                            </div>
                            <div className="team-member">
                                <img
                                    src={micheal}
                                    alt=""
                                    className="team-member-img"
                                />
                                <div className="team-member-info">
                                    <p className="team-member-name">
                                        Michael Oluokun
                                    </p>
                                    <p className="team-member-track">
                                        Full stack developer
                                    </p>
                                </div>
                            </div>
                            <div className="team-member">
                                <img
                                    src={aishat}
                                    alt=""
                                    className="team-member-img"
                                />
                                <div className="team-member-info">
                                    <p className="team-member-name">
                                        Aishat Dosunmu
                                    </p>
                                    <p className="team-member-track">
                                        Product Design
                                    </p>
                                </div>
                            </div>
                            <div className="team-member">
                                <img
                                    src={rehoboth}
                                    alt=""
                                    className="team-member-img"
                                />
                                <div className="team-member-info">
                                    <p className="team-member-name">
                                        Rehoboth Micah-Daniels
                                    </p>
                                    <p className="team-member-track">
                                        Full stack
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
