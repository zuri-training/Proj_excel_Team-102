const DashboardFooter = () => {
    return (
        <footer className="dashboard-footer">
            <div className="footer-menu-item footer-menu-item-active">
                <div className="footer-menu-item-icon-box">
                    <div className="footer-menu-item-icon-box-inner1">
                        <div className="footer-menu-item-icon-box-inner2">
                            <ion-icon name="home-outline" class="footer-menu-item-icon"></ion-icon>
                        </div>
                    </div>
                </div>
                <p>Home</p>
            </div>
            <div className="footer-menu-item">
                <div className="footer-menu-item-icon-box">
                    <div className="footer-menu-item-icon-box-inner1">
                        <div className="footer-menu-item-icon-box-inner2">
                            <ion-icon name="documents-outline" class="footer-menu-item-icon"></ion-icon>
                        </div>
                    </div>
                </div>
                <p>Files</p>
            </div>
            <div className="footer-menu-item">
                <div className="footer-menu-item-icon-box">
                    <div className="footer-menu-item-icon-box-inner1">
                        <div className="footer-menu-item-icon-box-inner2">
                            <ion-icon name="add-outline" class="footer-menu-item-icon"></ion-icon>
                        </div>
                    </div>
                </div>
                <p>New</p>
            </div>
            <div className="footer-menu-item">
                <div className="footer-menu-item-icon-box">
                    <div className="footer-menu-item-icon-box-inner1">
                        <div className="footer-menu-item-icon-box-inner2">
                            <ion-icon name="person-outline" class="footer-menu-item-icon"></ion-icon>
                        </div>
                    </div>
                </div>
                <p>Profile</p>
            </div>
        </footer>
    );
}

export default DashboardFooter;