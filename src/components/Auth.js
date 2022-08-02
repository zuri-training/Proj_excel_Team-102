import { useSelector } from "react-redux";

import { Navigate } from "react-router-dom";

const Auth = ({ children }) => {
    const logged_in = useSelector((state) => state.user.logged_in);

    if (!logged_in) return <Navigate to="/login" />;

    return children;
};

export default Auth;
