import { useRef, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import $ from "jquery";

import { user_actions } from "../store";

import DashboardSidebar from "../components/DashboardSidebar";
import DashboardHeader from "../components/DashboardHeader";

const AddNewFile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const api_base_url = useSelector((state) => state.app_data.api_base_url);
    const access_token = useSelector((state) => state.user.access_token);

    const file_input_ref = useRef();
    const upload_box_ref = useRef();

    const [upload_progress, set_upload_progress] = useState("");

    const [upload_message, set_upload_message] = useState("");
    const [fe_modal_open, set_fe_modal_open] = useState(false);

    const handleUploadBoxClick = () => {
        file_input_ref.current.click();
    };

    const doUpload = (replace = 0) => {
        const [file] = file_input_ref.current.files;

        const form_data = new FormData();

        form_data.append("file", file);

        $.ajax({
            type: "POST",
            data: form_data,
            url: `${api_base_url}/files/?replace=${replace}`,
            contentType: false,
            processData: false,
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
            success: function (data) {
                navigate(`/new_operation/${data.file.id}`);
            },
            statusCode: {
                401: function () {
                    dispatch(user_actions.logout());
                },
                406: function ({ responseJSON: response }) {
                    if (response.message === "Unaccepted file format") {
                        set_upload_progress(false);
                        file_input_ref.current.value = null;
                        set_upload_message(response.message);
                    } else if (
                        response.message === "File exists with the same name"
                    ) {
                        set_fe_modal_open(true);
                    }
                },
            },
        });
    };

    const handleFileChange = (e) => {
        const [file] = e.target.files;

        if (file) {
            set_upload_progress(true);

            doUpload();
        }
    };

    return (
        <>
            <input
                type="file"
                style={{ display: "none" }}
                ref={file_input_ref}
                onChange={handleFileChange}
            />
            <div className={`modal ${fe_modal_open && "modal-open"}`}>
                <div className="modal-header">
                    File exists <span>&times;</span>
                </div>
                <div className="modal-body">
                    You've already uploaded a file with the same name. Do you
                    want to replace?
                </div>
                <div className="modal-footer">
                    <button
                        className="modal-btn"
                        onClick={() => {
                            set_fe_modal_open(false);
                            doUpload(1);
                        }}
                    >
                        Yes
                    </button>
                    <button
                        className="modal-btn"
                        onClick={() => {
                            set_fe_modal_open(false);
                            set_upload_progress(false);
                            file_input_ref.current.value = null;
                        }}
                    >
                        No
                    </button>
                </div>
            </div>
            <div className={`modal ${upload_message && "modal-open"}`}>
                <div className="modal-header">
                    Upload Message
                    <span onClick={() => set_upload_message("")}>&times;</span>
                </div>
                <div className="modal-body">{upload_message}</div>
            </div>
            <main className="dashboard-container">
                <DashboardSidebar />
                <div className="dashbard-content">
                    <DashboardHeader />
                    <section className="dashboard-main">
                        <div className="dashboard-breadcrumb">
                            <div className="dashboard-breadcrumb-left">
                                <h3 className="dashboard-breadcrumb-title">
                                    Add New File
                                </h3>
                                <p className="dashboard-breadcrumb-text">
                                    Upload a file to perform operation on
                                </p>
                            </div>
                            <div className="dashboard-breadcrumb-right"></div>
                        </div>
                        <div
                            className="upload-file-box"
                            onClick={handleUploadBoxClick}
                            ref={upload_box_ref}
                        >
                            <div className="upload-icon-box">
                                <ion-icon
                                    name="cloud-upload-outline"
                                    class="upload-icon"
                                ></ion-icon>
                            </div>
                            <div className="upload-info1">
                                Drag and Drop your file here
                            </div>
                            <div className="upload-info1">Or</div>
                            <div className="upload-info2">
                                Click to browse your files
                            </div>
                            <div className="upload-info">
                                <ion-icon
                                    name="document-text-outline"
                                    class="upload-file-icon"
                                ></ion-icon>
                                <ion-icon
                                    name="documents-outline"
                                    class="upload-file-icon"
                                ></ion-icon>
                                <p>You can upload CSV or Excel Files</p>
                            </div>
                        </div>
                        {upload_progress && (
                            <div className="upload-progress">
                                <span className="fas fa-spinner fa-spin"></span>{" "}
                                Uploading...
                            </div>
                        )}
                    </section>
                </div>
            </main>
        </>
    );
};

export default AddNewFile;
