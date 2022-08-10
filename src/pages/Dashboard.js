import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { useState, useEffect } from "react";

import $ from "jquery";

import { user_actions } from "../store";

import DashboardSidebar from "../components/DashboardSidebar";
import DashboardHeader from "../components/DashboardHeader";
import DashboardFooter from "../components/DashboardFooter";

import operation1_img from "../assets/img/operation-1.png";
import operation2_img from "../assets/img/operation-2.png";
import operation3_img from "../assets/img/operation-3.png";
import operation4_img from "../assets/img/operation-4.png";

const Dashboard = () => {
    const dispatch = useDispatch();

    const api_base_url = useSelector((state) => state.app_data.api_base_url);
    const root_url = useSelector((state) => state.app_data.root_url);
    const access_token = useSelector((state) => state.user.access_token);

    const [recent_files, set_recent_files] = useState([]);

    useEffect(() => {
        $.ajax({
            type: "GET",
            url: `${api_base_url}/files/?division=3`,
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
            success: function (data) {
                set_recent_files(data.files);
            },
            statusCode: {
                401: function() {
                    dispatch(user_actions.logout());
                }
            }
        });
    }, [access_token, api_base_url, dispatch]);

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
                                    <ion-icon name="add-outline"></ion-icon> Add
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
                        {recent_files.length > 0 && (
                            <div className="recent-files">
                                <h3 className="recent-files-title">
                                    Recent Files
                                </h3>
                                <div className="recent-files-container">
                                    {recent_files.map((file) => {
                                        return (
                                            <div
                                                className="recent-file"
                                                key={file.id}
                                            >
                                                <iframe
                                                    src={`${root_url}/preview_file/${file.id}`}
                                                    title={`Recent file preview - ${file.file_name}`}
                                                ></iframe>
                                                <div>
                                                    <h4
                                                        title={file.file_name}
                                                        className="recent-file-name"
                                                    >
                                                        {file.file_name.substr(
                                                            0,
                                                            20
                                                        )}
                                                        {file.file_name.length >
                                                            20 && "..."}
                                                    </h4>
                                                    <p className="recent-file-date">
                                                        {file.time_added.substr(0, 19)}
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </section>
                    <DashboardFooter />
                </div>
            </main>
        </>
    );
};

export default Dashboard;
