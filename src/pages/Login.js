import "../assets/css/login.css";

import placeholder_img from "../assets/img/Frame-6@2x.png";

import { Link } from "react-router-dom";

const Login = () => {
    return (
        <main>
            <div className="container-main">
                <div className="first-container">
                    <img src={placeholder_img} alt="" />
                </div>
                <div className="second-container">
                    <div className="login-content">
                        <h3 className="welcome">
                            Welcome Back. Comparely is waiting...
                        </h3>
                        <p className="signup">
                            Don't have an account?
                            <Link to="/register"> Sign up</Link>
                        </p>
                        <form action="">
                            <div className="email">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" name="email" required />
                            </div>
                            <div className="password">
                                <label htmlFor="password"> Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    required
                                />
                            </div>
                            <div className="btn">
                                <input type="submit" value="Login" />
                            </div>
                        </form>
                        <p className="Ts-and-Cs">
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
