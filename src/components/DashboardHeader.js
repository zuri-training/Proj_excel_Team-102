import logo from "../assets/img/logo.png";

import { useSelector } from "react-redux";

import avatar from "../assets/img/avatar.jpg";

const DashboardHeader = () => {
    const { user_info } = useSelector((state) => state.user);

    return (
        <>
            <header className="dashboard-header">
                <div className="dashboard-header-logo">
                    <img src={logo} alt="" />
                </div>
                <div className="dashboard-user">
                    <img className="dashboard-user-img" src={avatar} alt="" />
                    <p className="dashboard-user-name">
                        {`${user_info.first_name}`}
                    </p>
                    <ion-icon
                        name="chevron-down-outline"
                        class="caret"
                    ></ion-icon>
                </div>
            </header>
        </>
    );
};

export default DashboardHeader;
