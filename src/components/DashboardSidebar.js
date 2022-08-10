import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import desktop_logo from "../assets/img/desktop-logo.png";

const DashboardSidebar = () => {
    const dashboard_navbar_active = useSelector(
        (state) => state.app_data.dashboard_navbar_active
    );

    return (
        <>
            <aside className="dashboard-sidenav">
                <div className="sidenav-logo">
                    <img src={desktop_logo} alt="" />
                </div>
                <ul className="dashboard-menu">
                    <li
                        className={`dashboard-menu-item ${
                            dashboard_navbar_active === "dashboard"
                                ? "active"
                                : ""
                        }`}
                    >
                        <ion-icon
                            name="bar-chart-outline"
                            class="dashboard-menu-icon"
                        ></ion-icon>
                        <Link to="/dashboard" className="dashboard-menu-link">
                            Dashboard
                        </Link>
                    </li>
                    <li
                        className={`dashboard-menu-item ${
                            dashboard_navbar_active === "files" ? "active" : ""
                        }`}
                    >
                        <ion-icon
                            name="document-text-outline"
                            class="dashboard-menu-icon"
                        ></ion-icon>
                        <Link to="/files" className="dashboard-menu-link">
                            Files
                        </Link>
                    </li>
                    <li
                        className={`dashboard-menu-item ${
                            dashboard_navbar_active === "new_file"
                                ? "active"
                                : ""
                        }`}
                    >
                        <ion-icon
                            name="add-circle-outline"
                            class="dashboard-menu-icon"
                        ></ion-icon>
                        <Link
                            to="/add_new_file"
                            className="dashboard-menu-link"
                        >
                            Add New File
                        </Link>
                    </li>
                </ul>
                <ul className="dashboard-menu dashboard-menu-footer">
                    <li
                        className={`dashboard-menu-item ${
                            dashboard_navbar_active === "settings"
                                ? "active"
                                : ""
                        }`}
                    >
                        <ion-icon
                            name="settings-outline"
                            class="dashboard-menu-icon"
                        ></ion-icon>
                        <Link to="/settings" className="dashboard-menu-link">
                            Settings
                        </Link>
                    </li>
                    <li className="dashboard-menu-item">
                        <ion-icon
                            name="log-out-outline"
                            class="dashboard-menu-icon"
                        ></ion-icon>
                        <Link to="/logout" className="dashboard-menu-link">
                            Logout
                        </Link>
                    </li>
                </ul>
            </aside>
        </>
    );
};

export default DashboardSidebar;
