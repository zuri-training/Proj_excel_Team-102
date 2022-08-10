import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

const DashboardFooter = () => {
    const navigate = useNavigate();

    const dashboard_navbar_active = useSelector(
        (state) => state.app_data.dashboard_navbar_active
    );

    return (
        <footer className="dashboard-footer">
            <div
                className={`footer-menu-item ${
                    dashboard_navbar_active === "dashboard"
                        ? "footer-menu-item-active"
                        : ""
                }`}
                onClick={() => navigate("/dashboard")}
            >
                <div className="footer-menu-item-icon-box">
                    <div className="footer-menu-item-icon-box-inner1">
                        <div className="footer-menu-item-icon-box-inner2">
                            <ion-icon
                                name="home-outline"
                                class="footer-menu-item-icon"
                            ></ion-icon>
                        </div>
                    </div>
                </div>
                <p>Home</p>
            </div>
            <div
                className={`footer-menu-item ${
                    dashboard_navbar_active === "files"
                        ? "footer-menu-item-active"
                        : ""
                }`}
                onClick={() => navigate("/files")}
            >
                <div className="footer-menu-item-icon-box">
                    <div className="footer-menu-item-icon-box-inner1">
                        <div className="footer-menu-item-icon-box-inner2">
                            <ion-icon
                                name="documents-outline"
                                class="footer-menu-item-icon"
                            ></ion-icon>
                        </div>
                    </div>
                </div>
                <p>Files</p>
            </div>
            <div
                className={`footer-menu-item ${
                    dashboard_navbar_active === "new_file"
                        ? "footer-menu-item-active"
                        : ""
                }`}
                onClick={() => navigate("/add_new_file")}
            >
                <div className="footer-menu-item-icon-box">
                    <div className="footer-menu-item-icon-box-inner1">
                        <div className="footer-menu-item-icon-box-inner2">
                            <ion-icon
                                name="add-outline"
                                class="footer-menu-item-icon"
                            ></ion-icon>
                        </div>
                    </div>
                </div>
                <p>New</p>
            </div>
            <div
                className={`footer-menu-item ${
                    dashboard_navbar_active === "settings"
                        ? "footer-menu-item-active"
                        : ""
                }`}
                onClick={() => navigate("/settings")}
            >
                <div className="footer-menu-item-icon-box">
                    <div className="footer-menu-item-icon-box-inner1">
                        <div className="footer-menu-item-icon-box-inner2">
                            <ion-icon
                                name="person-outline"
                                class="footer-menu-item-icon"
                            ></ion-icon>
                        </div>
                    </div>
                </div>
                <p>Profile</p>
            </div>
        </footer>
    );
};

export default DashboardFooter;
