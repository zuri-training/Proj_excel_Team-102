import { Link } from "react-router-dom";

import DashboardSidebar from "../components/DashboardSidebar";
import DashboardHeader from "../components/DashboardHeader";
import DashboardFooter from "../components/DashboardFooter";

const Files = () => {
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
                                    Files
                                </h3>
                                <p className="dashboard-breadcrumb-text">
                                    These are your files
                                </p>
                            </div>
                            <div className="dashboard-breadcrumb-right">
                                <Link
                                    to="/add_new_file"
                                    className="dashboard-breadcrumb-link"
                                >
                                    <ion-icon name="add-outline"></ion-icon> Add New
                                </Link>
                            </div>
                        </div>
                    </section>
                    <DashboardFooter />
                </div>
            </main>
        </>
    );
}

export default Files;