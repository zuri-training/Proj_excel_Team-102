import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import DashboardSidebar from "../components/DashboardSidebar";
import DashboardHeader from "../components/DashboardHeader";

import operation1_img from "../assets/img/operation-1.png";
import operation2_img from "../assets/img/operation-2.png";
import operation3_img from "../assets/img/operation-3.png";
import operation4_img from "../assets/img/operation-4.png";

const Dashboard = () => {
    const root_url = useSelector((state) => state.app_data.root_url);

    return (
        <>
            <main className="dashboard-container">
                <DashboardSidebar />
                <div className="dashboard-content">
                    <DashboardHeader />
                    <section className="dashboard-main">
                        <div className="dashboard-breadcrumb">
                            <div className="dashboard-breadcrumb-left">
                                <h3 className="dashboard-breadcrumb-title">
                                    Dashboard
                                </h3>
                                <p className="dashboard-breadcrumb-text">
                                    Welcome to comparely dashboard
                                </p>
                            </div>
                            <div className="dashboard-breadcrumb-right">
                                <Link
                                    to="/add_new_file"
                                    className="dashboard-breadcrumb-link"
                                >
                                    <ion-icon name="add-outline"></ion-icon>Add
                                    New File
                                </Link>
                            </div>
                        </div>
                        <div className="dashboard-overview">
                            <h3 className="dashboard-overview-title">
                                Overview
                            </h3>
                            <div className="dashboard-overview-container">
                                <div className="dashboard-overview-instance">
                                    <img src={operation1_img} alt="" />
                                    <p>Search and Highlight</p>
                                </div>
                                <div className="dashboard-overview-instance">
                                    <img src={operation1_img} alt="" />
                                    <p>Search and Replace</p>
                                </div>
                                <div className="dashboard-overview-instance">
                                    <img src={operation1_img} alt="" />
                                    <p>Highlight Duplicates</p>
                                </div>
                                <div className="dashboard-overview-instance">
                                    <img src={operation2_img} alt="" />
                                    <p>Remove Duplicates</p>
                                </div>
                                <div className="dashboard-overview-instance">
                                    <img src={operation3_img} alt="" />
                                    <p>
                                        Highlight Duplicates and Return 2 Files
                                    </p>
                                </div>
                                <div className="dashboard-overview-instance">
                                    <img src={operation4_img} alt="" />
                                    <p>Remove Duplicates and Return 2 Files</p>
                                </div>
                            </div>
                        </div>
                        <div className="recent-files">
                            <h3 className="recent-files-title">Recent Files</h3>
                            <div className="recent-files-container">
                                <div className="recent-file">
                                    <iframe
                                        src={`${root_url}/preview_file/1`}
                                    ></iframe>
                                    <div>
                                        <h4 className="recent-file-name">
                                            students.xlsx
                                        </h4>
                                        <p className="recent-file-date">
                                            2022-04-04 5:00pm
                                        </p>
                                    </div>
                                </div>
                                <div className="recent-file">
                                    <iframe
                                        src={`${root_url}/preview_file/1`}
                                    ></iframe>
                                    <div>
                                        <h4 className="recent-file-name">
                                            students.xlsx
                                        </h4>
                                        <p className="recent-file-date">
                                            2022-04-04 5:00pm
                                        </p>
                                    </div>
                                </div>
                                <div className="recent-file">
                                    <iframe
                                        src={`${root_url}/preview_file/1`}
                                    ></iframe>
                                    <div>
                                        <h4 className="recent-file-name">
                                            students.xlsx
                                        </h4>
                                        <p className="recent-file-date">
                                            2022-04-04 5:00pm
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
};

export default Dashboard;
