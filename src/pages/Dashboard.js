import { Link } from "react-router-dom";

import DashboardSidebar from "../components/DashboardSidebar";
import DashboardHeader from "../components/DashboardHeader";

const Dashboard = () => {
    return (
        <>
            <main className="dashboard-container">
                <DashboardSidebar />
                <div className="dashbard-content">
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
                    </section>
                </div>
            </main>
        </>
    );
};

export default Dashboard;
