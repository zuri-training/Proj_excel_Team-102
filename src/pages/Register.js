import "../assets/css/auth.css";

import placeholder_img from "../assets/img/Frame-6@2x.png";

import { Link, useNavigate } from "react-router-dom";

import { useState, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";

import $ from "jquery";

import { user_actions } from "../store";

const Register = () => {
    const api_base_url = useSelector((state) => state.app_data.api_base_url);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const signup_btn_ref = useRef();

    const [user_details, set_user_details] = useState({
        first_name: "",
        last_name: "",
        email_address: "",
        password: "",
    });

    const [server_response, set_server_response] = useState("");

    const handleChange = (e) => {
        set_user_details({
            ...user_details,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        signup_btn_ref.current.innerHTML = `<span class="fa fa-spinner fa-spin"></span> Getting Started`;

        $.ajax({
            type: "POST",
            url: `${api_base_url}/users/`,
            contentType: "application/json",
            processData: false,
            data: JSON.stringify(user_details),
            success: function (data) {
                const { user_info, access_token } = data;
                dispatch(user_actions.login({ access_token, user_info }));
                navigate("/dashboard");
            },
            error: function ({ responseJSON: response }) {
                set_server_response(response.message);
                signup_btn_ref.current.innerHTML = "Get Started";
            },
        });

        e.stopPropagation();
    };

    return (
        <main>
            <div className="auth-container">
                <div className="auth-left">
                    <img src={placeholder_img} alt="" />
                </div>
                <div className="auth-right">
                    <div className="auth-content">
                        <h3 className="auth-title">
                            Create your account. No strings attached...
                        </h3>
                        <p className="auth-subtitle">
                            Already have an account?{" "}
                            <Link to="/login">Login</Link>
                        </p>
                        <form className="auth-form" onSubmit={handleSubmit}>
                            <div>
                                <label
                                    htmlFor="first_name"
                                    className="auth-label"
                                >
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    name="first_name"
                                    placeholder="Enter first name"
                                    autoComplete="off"
                                    className="auth-input"
                                    required
                                    value={user_details.first_name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="last_name"
                                    className="auth-label"
                                >
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    name="last_name"
                                    placeholder="Enter last name"
                                    autoComplete="off"
                                    className="auth-input"
                                    required
                                    value={user_details.last_name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="auth-label">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email_address"
                                    placeholder="Enter email address"
                                    autoComplete="off"
                                    className="auth-input"
                                    required
                                    value={user_details.email_address}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="auth-label"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter password"
                                    autoComplete="off"
                                    className="auth-input"
                                    required
                                    value={user_details.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="auth-btn"
                                    ref={signup_btn_ref}
                                >
                                    Get Started
                                </button>
                            </div>
                            {server_response && (
                                <div className="auth-server-response">
                                    {server_response}
                                </div>
                            )}
                        </form>
                        <p className="auth-tandcs">
                            By signing up you are automatically agreeing to
                            Comparely's <strong> Terms of Use </strong> and
                            <strong> Privacy policy</strong>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Register;
