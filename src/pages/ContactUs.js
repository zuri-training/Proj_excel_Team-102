import Header from "../components/Header";
import Footer from "../components/Footer";

const ContactUs = () => {
    return (
        <>
            <Header />
            <section className="contact-section">
                <div className="contact-container">
                    <h3 className="contact-title">Contact us anytime</h3>
                    <p className="contact-text">
                        We are avaliable to answer you immediately your emails
                        sent during business hour from 9am to 4am. Any email
                        gotten during non business hours will be visited as soon
                        as resumption starts.
                    </p>
                    <p className="contact-text">
                        DISCLAIMER: ALL YOUR PERSONAL INFORMATION SENT IN WILL
                        NOT BE USED OUTSIDE THE SCOPE OF CONTEXT.
                    </p>
                    <form className="contact-form">
                        <div class="contact-form-group">
                            <label
                                for="full_name"
                                className="contact-form-label"
                            >
                                Full Name<span>*</span>
                            </label>
                            <input
                                type="text"
                                name="full_name"
                                className="contact-form-input"
                                placeholder="Enter full name"
                                required
                            />
                        </div>
                        <div class="contact-form-group">
                            <label for="email" className="contact-form-label">
                                Email Address<span>*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                className="contact-form-input"
                                placeholder="Enter email address"
                                required
                            />
                        </div>
                        <div class="contact-form-group">
                            <label for="message" className="contact-form-label">
                                How can we be better<span>*</span>
                            </label>
                            <textarea
                                name="message"
                                rows="5"
                                minlength="10"
                                maxlength="500"
                                placeholder="Write your suggestion here ..."
                                className="contact-form-input"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="contact-btn">
                            Submit
                        </button>
                    </form>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ContactUs;
