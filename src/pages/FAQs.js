import Header from "../components/Header";
import Footer from "../components/Footer";

const FAQs = () => {
    return (
        <>
            <Header />
            <section className="faq-section">
                <div className="faq-container">
                    <h3 className="faq-title">FAQs</h3>
                    <p className="faq-subtitle">
                        Our frequently asked questions
                    </p>
                    <div className="accordion">
                        <div className="item">
                            <p className="number">
                                <ion-icon
                                    name="add-outline"
                                    class="icon icon--open"
                                ></ion-icon>
                                <ion-icon
                                    name="remove-outline"
                                    class="icon icon--close"
                                ></ion-icon>
                            </p>
                            <p className="text">
                                How can I search for duplicates??
                            </p>
                            <div className="hidden-box">
                                <p></p>
                            </div>
                        </div>
                        <div className="item item-active">
                            <p className="number">
                                <ion-icon
                                    name="add-outline"
                                    class="icon icon--open"
                                ></ion-icon>
                                <ion-icon
                                    name="remove-outline"
                                    class="icon icon--close"
                                ></ion-icon>
                            </p>
                            <p className="text">
                                How can I export duplicates to my personal
                                laptop?
                            </p>
                            <div className="hidden-box">
                                <p>
                                    Once you have duplicated or compared your
                                    excel files, click on the save button or
                                    download button and your files will be saved
                                    in your personal storage.
                                </p>
                            </div>
                        </div>
                        <div className="item">
                            <p className="number">
                                <ion-icon
                                    name="add-outline"
                                    class="icon icon--open"
                                ></ion-icon>
                                <ion-icon
                                    name="remove-outline"
                                    class="icon icon--close"
                                ></ion-icon>
                            </p>
                            <p className="text">How do i search for a file?</p>
                            <div className="hidden-box">
                                <p></p>
                            </div>
                        </div>
                        <div className="item">
                            <p className="number">
                                <ion-icon
                                    name="add-outline"
                                    class="icon icon--open"
                                ></ion-icon>
                                <ion-icon
                                    name="remove-outline"
                                    class="icon icon--close"
                                ></ion-icon>
                            </p>
                            <p className="text">
                                Can I import other file types?
                            </p>
                            <div className="hidden-box">
                                <p></p>
                            </div>
                        </div>
                        <div className="item">
                            <p className="number">
                                <ion-icon
                                    name="add-outline"
                                    class="icon icon--open"
                                ></ion-icon>
                                <ion-icon
                                    name="remove-outline"
                                    class="icon icon--close"
                                ></ion-icon>
                            </p>
                            <p className="text">
                                How can I highlight my duplicates?
                            </p>
                            <div className="hidden-box">
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default FAQs;
