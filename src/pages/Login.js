import { Link, useNavigate } from "react-router-dom";

import { useState, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";

import $ from "jquery";

import { user_actions } from "../store";

const Login = () => {
    const api_base_url = useSelector((state) => state.app_data.api_base_url);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const login_btn_ref = useRef();

    const [user_credentials, set_user_credentials] = useState({
        email_address: "",
        password: "",
    });

    const [server_response, set_server_response] = useState("");

    const handleChange = (e) => {
        set_user_credentials({
            ...user_credentials,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        login_btn_ref.current.innerHTML = `<span class="fa fa-spinner fa-spin"></span> Logging in`;

        $.ajax({
            type: "POST",
            url: `${api_base_url}/auth/login`,
            data: {
                username: user_credentials.email_address,
                password: user_credentials.password,
            },
            success: function (data) {
                const { user_info, access_token } = data;
                dispatch(user_actions.login({ access_token, user_info }));
                navigate("/dashboard");
            },
            error: function ({ responseJSON: response }) {
                set_server_response(response.message);
                login_btn_ref.current.innerHTML = "Login";
            },
        });

        e.stopPropagation();
    };

    return (
        <main>
            <div className="auth-container">
                <div className="auth-left auth-left--login"></div>
                <div className="auth-right">
                    <div className="auth-content">
                        <h3 className="auth-title">
                            Welcome Back. Comparely is waiting...
                        </h3>
                        <p className="auth-subtitle">
                            Don't have an account?{" "}
                            <Link to="/register">Sign up</Link>
                        </p>
                        <form className="auth-form" onSubmit={handleSubmit}>
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
                                    value={user_credentials.email_address}
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
                                    value={user_credentials.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="auth-btn"
                                    ref={login_btn_ref}
                                >
                                    Login
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

export default Login;
