import Header from "../components/Header";
import Footer from "../components/Footer";

const Product = () => {
    return (
        <>
            <Header />
            <section className="product-section">
                <div className="container">
                    <div className="product-header">
                        <h2>Comparely-Excel Product</h2>
                        <p>
                            Best tool to compare contents of an excel file on
                            your web browser.
                        </p>
                    </div>
                    <div className="product-body">
                        <h2>Comparely-Excel Features Include: </h2>
                        <div className="product">
                            <div className="product-feature">
                                <div className="product-info">
                                    <ion-icon
                                        name="document-text-outline"
                                        class="product-icon"
                                    ></ion-icon>
                                    <p>
                                        <strong>Accept</strong> Excel File
                                        Upload
                                    </p>
                                </div>
                                <div className="product-icon-box">
                                    <ion-icon
                                        name="checkmark-outline"
                                        class="product-icon"
                                    ></ion-icon>
                                </div>
                            </div>
                            <div className="product-feature">
                                <div className="product-info">
                                    <ion-icon
                                        name="document-text-outline"
                                        class="product-icon"
                                    ></ion-icon>
                                    <p>
                                        <strong>Accept</strong> CSV File Upload
                                    </p>
                                </div>
                                <div className="product-icon-box">
                                    <ion-icon
                                        name="checkmark-outline"
                                        class="product-icon"
                                    ></ion-icon>
                                </div>
                            </div>
                            <div className="product-feature">
                                <div className="product-info">
                                    <ion-icon
                                        name="document-text-outline"
                                        class="product-icon"
                                    ></ion-icon>
                                    <p>
                                        <strong>Highlight</strong> Duplicates
                                    </p>
                                </div>
                                <div className="product-icon-box">
                                    <ion-icon
                                        name="checkmark-outline"
                                        class="product-icon"
                                    ></ion-icon>
                                </div>
                            </div>
                            <div className="product-feature">
                                <div className="product-info">
                                    <ion-icon
                                        name="document-text-outline"
                                        class="product-icon"
                                    ></ion-icon>
                                    <p>
                                        <strong>Remove</strong> Duplicates
                                    </p>
                                </div>
                                <div className="product-icon-box">
                                    <ion-icon
                                        name="checkmark-outline"
                                        class="product-icon"
                                    ></ion-icon>
                                </div>
                            </div>
                            <div className="product-feature">
                                <div className="product-info">
                                    <ion-icon
                                        name="document-text-outline"
                                        class="product-icon"
                                    ></ion-icon>
                                    <p>
                                        <strong>Highlight</strong> Duplicates
                                        and Return 2 Files
                                    </p>
                                </div>
                                <div className="product-icon-box">
                                    <ion-icon
                                        name="checkmark-outline"
                                        class="product-icon"
                                    ></ion-icon>
                                </div>
                            </div>
                            <div className="product-feature">
                                <div className="product-info">
                                    <ion-icon
                                        name="document-text-outline"
                                        class="product-icon"
                                    ></ion-icon>
                                    <p>
                                        <strong>Search</strong> and Highlight
                                    </p>
                                </div>
                                <div className="product-icon-box">
                                    <ion-icon
                                        name="checkmark-outline"
                                        class="product-icon"
                                    ></ion-icon>
                                </div>
                            </div>
                            <div className="product-feature">
                                <div className="product-info">
                                    <ion-icon
                                        name="document-text-outline"
                                        class="product-icon"
                                    ></ion-icon>
                                    <p>
                                        <strong>Search</strong> and Replace
                                    </p>
                                </div>
                                <div className="product-icon-box">
                                    <ion-icon
                                        name="checkmark-outline"
                                        class="product-icon"
                                    ></ion-icon>
                                </div>
                            </div>
                            <div className="product-feature">
                                <div className="product-info">
                                    <ion-icon
                                        name="document-text-outline"
                                        class="product-icon"
                                    ></ion-icon>
                                    <p>
                                        <strong>Diff</strong> Checker
                                    </p>
                                </div>
                                <div className="product-icon-box">
                                    <ion-icon
                                        name="checkmark-outline"
                                        class="product-icon"
                                    ></ion-icon>
                                </div>
                            </div>
                        </div>
                        <h2 className="mt-2">Comparely-Excel Future Updates</h2>
                        <div className="product">
                            <div className="product-feature">
                                <div className="product-info">
                                    <ion-icon
                                        name="document-text-outline"
                                        class="product-icon"
                                    ></ion-icon>
                                    <p>
                                        <strong>Merge</strong> Excel Files
                                    </p>
                                </div>
                                <div className="product-icon-box">
                                    <ion-icon
                                        name="checkmark-outline"
                                        class="product-icon"
                                    ></ion-icon>
                                </div>
                            </div>
                            <div className="product-feature">
                                <div className="product-info">
                                    <ion-icon
                                        name="document-text-outline"
                                        class="product-icon"
                                    ></ion-icon>
                                    <p>
                                        <strong>Split</strong> Excel File
                                    </p>
                                </div>
                                <div className="product-icon-box">
                                    <ion-icon
                                        name="checkmark-outline"
                                        class="product-icon"
                                    ></ion-icon>
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

export default Product;
