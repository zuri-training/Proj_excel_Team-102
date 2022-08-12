import Header from "../components/Header";
import Footer from "../components/Footer";

import { useState } from "react";

const FAQs = () => {
    const [active, set_active] = useState(1);

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
                        <div
                            className={`item ${
                                active === 1 ? "item-active" : ""
                            }`}
                        >
                            <p className="number" onClick={() => set_active(1)}>
                                <ion-icon
                                    name="add-outline"
                                    class="icon icon--open"
                                ></ion-icon>
                                <ion-icon
                                    name="remove-outline"
                                    class="icon icon--close"
                                ></ion-icon>
                            </p>
                            <p className="text" onClick={() => set_active(1)}>
                                What is an entity dataset?
                            </p>
                            <div className="divider"></div>
                            <div className="hidden-box">
                                <p>
                                    An entity dataset in the scope of comparely
                                    is an excel or csv Filewhere each row
                                    represent an object or a real world entity.
                                    And entities have unique features(columns).
                                </p>
                            </div>
                        </div>
                        <div
                            className={`item ${
                                active === 2 ? "item-active" : ""
                            }`}
                        >
                            <p className="number" onClick={() => set_active(2)}>
                                <ion-icon
                                    name="add-outline"
                                    class="icon icon--open"
                                ></ion-icon>
                                <ion-icon
                                    name="remove-outline"
                                    class="icon icon--close"
                                ></ion-icon>
                            </p>
                            <p className="text" onClick={() => set_active(2)}>
                                How do I get access to Comparely operations?
                            </p>
                            <div className="divider"></div>
                            <div className="hidden-box">
                                <p>
                                    For you to be able to perform any operaion
                                    that Comparely offers on your excel files
                                    you need to be logged in and if you don't
                                    have an account you need to sign up.
                                </p>
                            </div>
                        </div>
                        <div
                            className={`item ${
                                active === 3 ? "item-active" : ""
                            }`}
                        >
                            <p className="number" onClick={() => set_active(3)}>
                                <ion-icon
                                    name="add-outline"
                                    class="icon icon--open"
                                ></ion-icon>
                                <ion-icon
                                    name="remove-outline"
                                    class="icon icon--close"
                                ></ion-icon>
                            </p>
                            <p className="text" onClick={() => set_active(3)}>
                                What file formats does Comparely accept?
                            </p>
                            <div className="divider"></div>
                            <div className="hidden-box">
                                <p>
                                    Comparely accepts only Excel and CSV files
                                    to perform operation. Note that when you
                                    upload a csv file Comparely converts it to
                                    an excel file with the same name to perform
                                    it's operation.
                                </p>
                            </div>
                        </div>
                        <div
                            className={`item ${
                                active === 4 ? "item-active" : ""
                            }`}
                        >
                            <p className="number" onClick={() => set_active(4)}>
                                <ion-icon
                                    name="add-outline"
                                    class="icon icon--open"
                                ></ion-icon>
                                <ion-icon
                                    name="remove-outline"
                                    class="icon icon--close"
                                ></ion-icon>
                            </p>
                            <p className="text" onClick={() => set_active(4)}>
                                How fast does Comparely perform it's operation?
                            </p>
                            <div className="divider"></div>
                            <div className="hidden-box">
                                <p>
                                    We at Comparely have emplored the best
                                    algorithms to perform operations on your
                                    file any latency that occurs would depend on
                                    the size of your file i.e Large sized files
                                    tends to be processed slower than Small
                                    sized files.
                                </p>
                            </div>
                        </div>
                        <div
                            className={`item ${
                                active === 5 ? "item-active" : ""
                            }`}
                        >
                            <p className="number" onClick={() => set_active(5)}>
                                <ion-icon
                                    name="add-outline"
                                    class="icon icon--open"
                                ></ion-icon>
                                <ion-icon
                                    name="remove-outline"
                                    class="icon icon--close"
                                ></ion-icon>
                            </p>
                            <p className="text" onClick={() => set_active(5)}>
                                Will more features be added to comparely?
                            </p>
                            <div className="divider"></div>
                            <div className="hidden-box">
                                <p>
                                    Yeah Comparely is working on adding more
                                    features that aid in manipulating excel and
                                    csv files to suit our end users purposes.
                                    Two of our coming updates are Merge file and
                                    Split file, Stay tuned !!!.
                                </p>
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
