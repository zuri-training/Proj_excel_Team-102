import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState, useRef } from "react";

import { app_data_actions, user_actions } from "../store";

import $ from "jquery";

import DashboardSidebar from "../components/DashboardSidebar";
import DashboardHeader from "../components/DashboardHeader";
import DashboardFooter from "../components/DashboardFooter";

import avatar from "../assets/img/avatar.jpg";

const Settings = () => {
    const dispatch = useDispatch();

    const {
        access_token,
        user_info: { first_name, last_name, email_address, profile_picture },
    } = useSelector((state) => state.user);

    const base_url = useSelector((state) => state.app_data.base_url);
    const api_base_url = useSelector((state) => state.app_data.api_base_url);
    const user_id = useSelector((state) => state.user.user_info.id);

    const upload_picture_btn = useRef();
    const remove_picture_btn = useRef();
    const user_info_btn = useRef();
    const change_password_btn = useRef();

    const file_input_ref = useRef();

    const [user_info, set_user_info] = useState({
        first_name,
        last_name,
        email_address,
    });

    const [change_password, set_change_password] = useState({
        current_password: "",
        new_password: "",
        confirm_new_password: "",
    });

    const [settings_message, set_settings_message] = useState("");

    const handleUIInputChange = (e) => {
        set_user_info({
            ...user_info,
            [e.target.name]: e.target.value,
        });
    };

    const handleUserInfoUpdate = (e) => {
        e.preventDefault();

        user_info_btn.current.innerHTML = `<span class="fas fa-spinner fa-spin"></span> Saving`;

        $.ajax({
            type: "PATCH",
            data: JSON.stringify(user_info),
            contentType: "application/json",
            processData: false,
            url: `${api_base_url}/users/info`,
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
            success: function (data) {
                dispatch(
                    user_actions.login({ access_token, user_info: data.user })
                );
                set_settings_message(data.message);
                user_info_btn.current.innerHTML = "Save";
            },
            statusCode: {
                406: function ({ responseJSON: { message } }) {
                    set_settings_message(message);
                    user_info_btn.current.innerHTML = "Save";
                },
                401: function () {
                    dispatch(user_actions.logout());
                },
            },
        });

        e.stopPropagation();
    };

    const handleCPInputChange = (e) => {
        set_change_password({
            ...change_password,
            [e.target.name]: e.target.value,
        });
    };

    const handleChangePassword = (e) => {
        e.preventDefault();

        change_password_btn.current.innerHTML = `<span class="fas fa-spinner fa-spin"></span> Saving`;

        $.ajax({
            type: "PATCH",
            data: JSON.stringify(change_password),
            contentType: "application/json",
            processData: false,
            url: `${api_base_url}/users/password`,
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
            success: function (data) {
                dispatch(
                    user_actions.login({ access_token, user_info: data.user })
                );
                set_change_password({
                    current_password: "",
                    new_password: "",
                    confirm_new_password: "",
                });
                set_settings_message(data.message);
                change_password_btn.current.innerHTML = "Save";
            },
            statusCode: {
                406: function ({ responseJSON: { message } }) {
                    set_settings_message(message);
                    change_password_btn.current.innerHTML = "Save";
                },
                401: function () {
                    dispatch(user_actions.logout());
                },
            },
        });

        e.stopPropagation();
    };

    const handleFileChange = (e) => {
        const [file] = e.target.files;

        if (file) {
            upload_picture_btn.current.innerHTML = `<span class="fas fa-spinner fa-spin"></span> Uploading...`;

            const form_data = new FormData();

            form_data.append("picture", file);

            $.ajax({
                type: "PATCH",
                url: `${api_base_url}/users/picture`,
                data: form_data,
                contentType: false,
                processData: false,
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
                success: function (data) {
                    dispatch(
                        user_actions.login({
                            access_token,
                            user_info: data.user,
                        })
                    );
                    set_settings_message("Picture updated successfully");
                    upload_picture_btn.current.innerHTML = "Upload";
                    file_input_ref.current.value = null;
                },
                statusCode: {
                    406: function ({ responseJSON: { message } }) {
                        set_settings_message(message);
                        upload_picture_btn.current.innerHTML = "Upload";
                    },
                    401: function () {
                        dispatch(user_actions.logout());
                    },
                },
            });
        }
    };

    const removeProfilePicture = () => {
        remove_picture_btn.current.innerHTML = `<span class="fas fa-spinner fa-spin"></span> Removing`;

        $.ajax({
            type: "PATCH",
            url: `${api_base_url}/users/picture`,
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
            success: function (data) {
                dispatch(
                    user_actions.login({ access_token, user_info: data.user })
                );
                set_settings_message("Picture removed successfully");
                remove_picture_btn.current.innerHTML = "Remove";
            },
            statusCode: {
                401: function () {
                    dispatch(user_actions.logout());
                },
            },
        });
    };

    useEffect(() => {
        dispatch(app_data_actions.set_dashboard_navbar_active("settings"));
    }, [dispatch]);

    return (
        <>
            <input
                type="file"
                style={{ display: "none" }}
                ref={file_input_ref}
                onChange={handleFileChange}
            />
            <div className={`modal ${settings_message && "modal-open"}`}>
                <div className="modal-header">
                    Info
                    <span onClick={() => set_settings_message("")}>
                        &times;
                    </span>
                </div>
                <div className="modal-body">{settings_message}</div>
            </div>
            <main className="dashboard-container">
                <DashboardSidebar />
                <div className="dashboard-content">
                    <DashboardHeader />
                    <section className="dashboard-main">
                        <div className="dashboard-breadcrumb">
                            <div className="dashboard-breadcrumb-left">
                                <h3 className="dashboard-breadcrumb-title">
                                    Settings
                                </h3>
                                <p className="dashboard-breadcrumb-text">
                                    Edit your profile information
                                </p>
                            </div>
                            <div className="dashboard-breadcrumb-right">
                                <Link
                                    to="/logout"
                                    className="dashboard-breadcrumb-link"
                                >
                                    <ion-icon name="log-out-outline"></ion-icon>{" "}
                                    Logout
                                </Link>
                            </div>
                        </div>
                        <div className="profile-edit">
                            <img
                                src={
                                    profile_picture
                                        ? `${base_url}dc/${user_id}/${profile_picture}`
                                        : avatar
                                }
                                className="profile-image"
                                alt=""
                            />
                            <button
                                className="settings-btn-1"
                                ref={upload_picture_btn}
                                onClick={() => file_input_ref.current.click()}
                            >
                                Upload
                            </button>
                            <button
                                className="settings-btn-2"
                                ref={remove_picture_btn}
                                onClick={removeProfilePicture}
                            >
                                Remove
                            </button>
                        </div>
                        <form
                            className="info-edit"
                            onSubmit={handleUserInfoUpdate}
                        >
                            <div className="info-form-group">
                                <label className="contact-form-label">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    name="first_name"
                                    className="contact-form-input"
                                    placeholder="Enter first name"
                                    required
                                    value={user_info.first_name}
                                    onChange={handleUIInputChange}
                                />
                            </div>
                            <div className="info-form-group">
                                <label className="contact-form-label">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    name="last_name"
                                    className="contact-form-input"
                                    placeholder="Enter last name"
                                    required
                                    value={user_info.last_name}
                                    onChange={handleUIInputChange}
                                />
                            </div>
                            <div className="info-form-group">
                                <label className="contact-form-label">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email_address"
                                    className="contact-form-input"
                                    placeholder="Enter email address"
                                    required
                                    value={user_info.email_address}
                                    onChange={handleUIInputChange}
                                />
                            </div>
                            <button
                                className="settings-btn-1"
                                ref={user_info_btn}
                            >
                                Save
                            </button>
                        </form>
                        <form
                            className="info-edit"
                            onSubmit={handleChangePassword}
                        >
                            <div className="info-form-group">
                                <label className="contact-form-label">
                                    Current Password
                                </label>
                                <input
                                    type="password"
                                    name="current_password"
                                    className="contact-form-input"
                                    placeholder="Enter current password"
                                    required
                                    value={change_password.current_password}
                                    onChange={handleCPInputChange}
                                />
                            </div>
                            <div className="info-form-group">
                                <label className="contact-form-label">
                                    New Password
                                </label>
                                <input
                                    type="password"
                                    name="new_password"
                                    className="contact-form-input"
                                    placeholder="Enter new password"
                                    required
                                    value={change_password.new_password}
                                    onChange={handleCPInputChange}
                                />
                            </div>
                            <div className="info-form-group">
                                <label className="contact-form-label">
                                    Retype New Password
                                </label>
                                <input
                                    type="password"
                                    name="confirm_new_password"
                                    className="contact-form-input"
                                    placeholder="Retype new password"
                                    required
                                    value={change_password.confirm_new_password}
                                    onChange={handleCPInputChange}
                                />
                            </div>
                            <button
                                className="settings-btn-1"
                                ref={change_password_btn}
                            >
                                Save
                            </button>
                        </form>
                    </section>
                    <DashboardFooter />
                </div>
            </main>
        </>
    );
};

export default Settings;
