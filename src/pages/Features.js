import { useState } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import upload from "../assets/img/steps/upload.png";

import hd_2 from "../assets/img/steps/hd_2.png";
import hd_3 from "../assets/img/steps/hd_3.png";
import hd_4 from "../assets/img/steps/hd_4.png";

import rd_2 from "../assets/img/steps/rd_2.png";
import rd_3 from "../assets/img/steps/rd_3.png";
import rd_4 from "../assets/img/steps/rd_4.png";

import hd2_2 from "../assets/img/steps/hd2_2.png";
import hd2_3 from "../assets/img/steps/hd2_3.png";
import hd2_4 from "../assets/img/steps/hd2_4.png";

import rd2_2 from "../assets/img/steps/rd2_2.png";
import rd2_3 from "../assets/img/steps/rd2_3.png";
import rd2_4 from "../assets/img/steps/rd2_4.png";

import sh_2 from "../assets/img/steps/sh_2.png";
import sh_3 from "../assets/img/steps/sh_3.png";
import sh_4 from "../assets/img/steps/sh_4.png";

import sr_2 from "../assets/img/steps/sr_2.png";
import sr_3 from "../assets/img/steps/sr_3.png";
import sr_4 from "../assets/img/steps/sr_4.png";

import dc_2 from "../assets/img/steps/dc_2.png";
import dc_3 from "../assets/img/steps/dc_3.png";
import dc_4 from "../assets/img/steps/dc_4.png";

const Features = () => {
    const [hd, set_hd] = useState(upload);
    const [rd, set_rd] = useState(upload);
    const [hd2, set_hd2] = useState(upload);
    const [rd2, set_rd2] = useState(upload);
    const [sh, set_sh] = useState(upload);
    const [sr, set_sr] = useState(upload);
    const [dc, set_dc] = useState(upload);

    return (
        <>
            <Header />
            <section className="features-section">
                <div className="features-pg-container">
                    <div className="features-header">
                        <h2>Our features</h2>
                        <p>A walkthrough of our features</p>
                    </div>
                    <div className="feature-block">
                        <h2>Highlight Duplicates</h2>
                        <p>
                            Comparely saves you hours of manual work by allowing
                            you check for entitied with duplicated unique
                            feature and highlight them. This feature boosts your
                            productivity as comparely helps you do this
                            automatically.
                        </p>
                        <div className="feature-image-box">
                            <img src={hd} alt="" className="feature-img" />
                            <div className="feature-image-preview-box">
                                <img
                                    src={upload}
                                    alt=""
                                    className={`feature-img-preview ${
                                        hd === upload
                                            ? "feature-img-preview-active"
                                            : ""
                                    }`}
                                    onClick={() => set_hd(upload)}
                                />
                                <img
                                    src={hd_2}
                                    alt=""
                                    className={`feature-img-preview ${
                                        hd === hd_2
                                            ? "feature-img-preview-active"
                                            : ""
                                    }`}
                                    onClick={() => set_hd(hd_2)}
                                />
                                <img
                                    src={hd_3}
                                    alt=""
                                    className={`feature-img-preview ${
                                        hd === hd_3
                                            ? "feature-img-preview-active"
                                            : ""
                                    }`}
                                    onClick={() => set_hd(hd_3)}
                                />
                                <img
                                    src={hd_4}
                                    alt=""
                                    className={`feature-img-preview ${
                                        hd === hd_4
                                            ? "feature-img-preview-active"
                                            : ""
                                    }`}
                                    onClick={() => set_hd(hd_4)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="feature-block">
                        <h2>Remove Duplicates</h2>
                        <p>
                            Comparely saves you hours of manual work by allowing
                            you check for entities with duplicated unique
                            feature and remove them. This feature boosts your
                            productivity as comparely helps you do this
                            automatically.
                        </p>
                        <div className="feature-image-box">
                            <img src={rd} alt="" className="feature-img" />
                            <div className="feature-image-preview-box">
                                <img
                                    src={upload}
                                    alt=""
                                    className={`feature-img-preview ${
                                        rd === upload
                                            ? "feature-img-preview-active"
                                            : ""
                                    }`}
                                    onClick={() => set_rd(upload)}
                                />
                                <img
                                    src={rd_2}
                                    alt=""
                                    className={`feature-img-preview ${
                                        rd === rd_2
                                            ? "feature-img-preview-active"
                                            : ""
                                    }`}
                                    onClick={() => set_rd(rd_2)}
                                />
                                <img
                                    src={rd_3}
                                    alt=""
                                    className={`feature-img-preview ${
                                        rd === rd_3
                                            ? "feature-img-preview-active"
                                            : ""
                                    }`}
                                    onClick={() => set_rd(rd_3)}
                                />
                                <img
                                    src={rd_4}
                                    alt=""
                                    className={`feature-img-preview ${
                                        rd === rd_4
                                            ? "feature-img-preview-active"
                                            : ""
                                    }`}
                                    onClick={() => set_rd(rd_4)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="feature-block">
                        <h2>Highlight Duplicates and Return 2 Files</h2>
                        <p>
                            Comparely saves you hours of manual work by allowing
                            you check for entities with duplicated unique
                            feature and highlight them and get an analysis file.
                            This feature boosts your productivity as comparely
                            helps you do this automatically.
                        </p>
                        <div className="feature-image-box">
                            <img src={hd2} alt="" className="feature-img" />
                            <div className="feature-image-preview-box">
                                <img
                                    src={upload}
                                    alt=""
                                    className={`feature-img-preview ${
                                        hd2 === upload
                                            ? "feature-img-preview-active"
                                            : ""
                                    }`}
                                    onClick={() => set_hd2(upload)}
                                />
                                <img
                                    src={hd2_2}
                                    alt=""
                                    className={`feature-img-preview ${
                                        hd2 === hd2_2
                                            ? "feature-img-preview-active"
                                            : ""
                                    }`}
                                    onClick={() => set_hd2(hd2_2)}
                                />
                                <img
                                    src={hd2_3}
                                    alt=""
                                    className={`feature-img-preview ${
                                        hd2 === hd2_3
                                            ? "feature-img-preview-active"
                                            : ""
                                    }`}
                                    onClick={() => set_hd2(hd2_3)}
                                />
                                <img
                                    src={hd2_4}
                                    alt=""
                                    className={`feature-img-preview ${
                                        hd2 === hd2_4
                                            ? "feature-img-preview-active"
                                            : ""
                                    }`}
                                    onClick={() => set_hd2(hd2_4)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="feature-block">
                        <h2>Remove Duplicates and Return 2 Files</h2>
                        <p>
                            Comparely saves you hours of manual work by allowing
                            you check for entities with duplicated unique
                            feature and remove them and get a file with the
                            removed duplicates. This feature boosts your
                            productivity as comparely helps you do this
                            automatically.
                        </p>
                        <div className="feature-image-box">
                            <img src={rd2} alt="" className="feature-img" />
                            <div className="feature-image-preview-box">
                                <img
                                    src={upload}
                                    alt=""
                                    className={`feature-img-preview ${
                                        rd2 === upload
                                            ? "feature-img-preview-active"
                                            : ""
                                    }`}
                                    onClick={() => set_rd2(upload)}
                                />
                                <img
                                    src={rd2_2}
                                    alt=""
                                    className={`feature-img-preview ${
                                        rd2 === rd2_2
                                            ? "feature-img-preview-active"
                                            : ""
                                    }`}
                                    onClick={() => set_rd2(rd2_2)}
                                />
                                <img
                                    src={rd2_3}
                                    alt=""
                                    className={`feature-img-preview ${
                                        rd2 === rd2_3
                                            ? "feature-img-preview-active"
                                            : ""
                                    }`}
                                    onClick={() => set_rd2(rd2_3)}
                                />
                                <img
                                    src={rd2_4}
                                    alt=""
                                    className={`feature-img-preview ${
                                        rd2 === rd2_4
                                            ? "feature-img-preview-active"
                                            : ""
                                    }`}
                                    onClick={() => set_rd2(rd2_4)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="feature-block">
                        <h2>Search and Highlight</h2>
                        <p>
                            Comparely saves you hours of manual work by allowing
                            you to search for values in an excel sheet and
                            highlight all occurrences of the search value. This
                            feature boosts your productivity as comparely helps
                            you do this automatically.
                        </p>
                        <div className="feature-image-box">
                            <img src={sh} alt="" className="feature-img" />
                            <div className="feature-image-preview-box">
                                <img
                                    src={upload}
                                    alt=""
                                    className={`feature-img-preview ${
                                        sh === upload
                                            ? "feature-img-preview-active"
                                            : ""
                                    }`}
                                    onClick={() => set_sh(upload)}
                                />
                                <img
                                    src={sh_2}
                                    alt=""
                                    className={`feature-img-preview ${
                                        sh === sh_2
                                            ? "feature-img-preview-active"
                                            : ""
                                    }`}
                                    onClick={() => set_sh(sh_2)}
                                />
                                <img
                                    src={sh_3}
                                    alt=""
                                    className={`feature-img-preview ${
                                        sh === sh_3
                                            ? "feature-img-preview-active"
                                            : ""
                                    }`}
                                    onClick={() => set_sh(sh_3)}
                                />
                                <img
                                    src={sh_4}
                                    alt=""
                                    className={`feature-img-preview ${
                                        sh === sh_4
                                            ? "feature-img-preview-active"
                                            : ""
                                    }`}
                                    onClick={() => set_sh(sh_4)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="feature-block">
                        <h2>Search and Replace</h2>
                        <p>
                            Comparely saves you hours of manual work by allowing
                            you to search for values in an excel sheet and
                            replace all occurrences of the search value with the
                            new value. This feature boosts your productivity as
                            comparely helps you do this automatically.
                        </p>
                        <div className="feature-image-box">
                            <img src={sr} alt="" className="feature-img" />
                            <div className="feature-image-preview-box">
                                <img
                                    src={upload}
                                    alt=""
                                    className={`feature-img-preview ${
                                        sr === upload
                                            ? "feature-img-preview-active"
                                            : ""
                                    }`}
                                    onClick={() => set_sr(upload)}
                                />
                                <img
                                    src={sr_2}
                                    alt=""
                                    className={`feature-img-preview ${
                                        sr === sr_2
                                            ? "feature-img-preview-active"
                                            : ""
                                    }`}
                                    onClick={() => set_sr(sr_2)}
                                />
                                <img
                                    src={sr_3}
                                    alt=""
                                    className={`feature-img-preview ${
                                        sr === sr_3
                                            ? "feature-img-preview-active"
                                            : ""
                                    }`}
                                    onClick={() => set_sr(sr_3)}
                                />
                                <img
                                    src={sr_4}
                                    alt=""
                                    className={`feature-img-preview ${
                                        sr === sr_4
                                            ? "feature-img-preview-active"
                                            : ""
                                    }`}
                                    onClick={() => set_sr(sr_4)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="feature-block">
                        <h2>Diff Checker</h2>
                        <p>
                            Comparely saves you hours of manual work by allowing
                            you to compare the cells of two excel files and
                            highlight the cells where they don't match. This
                            feature boosts your productivity as comparely helps
                            you do this automatically.
                        </p>
                        <div className="feature-image-box">
                            <img src={dc} alt="" className="feature-img" />
                            <div className="feature-image-preview-box">
                                <img
                                    src={upload}
                                    alt=""
                                    className={`feature-img-preview ${
                                        dc === upload
                                            ? "feature-img-preview-active"
                                            : ""
                                    }`}
                                    onClick={() => set_dc(upload)}
                                />
                                <img
                                    src={dc_2}
                                    alt=""
                                    className={`feature-img-preview ${
                                        dc === dc_2
                                            ? "feature-img-preview-active"
                                            : ""
                                    }`}
                                    onClick={() => set_dc(dc_2)}
                                />
                                <img
                                    src={dc_3}
                                    alt=""
                                    className={`feature-img-preview ${
                                        dc === dc_3
                                            ? "feature-img-preview-active"
                                            : ""
                                    }`}
                                    onClick={() => set_dc(dc_3)}
                                />
                                <img
                                    src={dc_4}
                                    alt=""
                                    className={`feature-img-preview ${
                                        dc === dc_4
                                            ? "feature-img-preview-active"
                                            : ""
                                    }`}
                                    onClick={() => set_dc(dc_4)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Features;
