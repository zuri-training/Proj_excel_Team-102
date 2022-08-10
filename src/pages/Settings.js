import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";

import { useEffect } from "react";

import { app_data_actions } from "../store";

import DashboardSidebar from "../components/DashboardSidebar";
import DashboardHeader from "../components/DashboardHeader";
import DashboardFooter from "../components/DashboardFooter";

const Settings = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(app_data_actions.set_dashboard_navbar_active("settings"));
    }, [dispatch]);

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
                                    Settings
                                </h3>
                                <p className="dashboard-breadcrumb-text">
                                    Edit your profile information
                                </p>
                            </div>
                            <div className="dashboard-breadcrumb-right">
                                <Link
                                    to="/logout"
                                    className="dashboard-breadcrumb-link"
                                >
                                    <ion-icon name="log-out-outline"></ion-icon>{" "}
                                    Logout
                                </Link>
                            </div>
                        </div>
                    </section>
                    <DashboardFooter />
                </div>
            </main>
        </>
    );
};

export default Settings;
