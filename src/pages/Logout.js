import { useDispatch } from "react-redux";

import { useEffect } from "react";

import { user_actions } from "../store";

const Logout = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(user_actions.logout());
    }, [dispatch]);

    return (
        <div className="preloader">
            <span className="fas fa-spinner fa-spin"></span> Logging Out
        </div>
    );

}

export default Logout;