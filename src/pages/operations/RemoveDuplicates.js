import { useSelector, useDispatch } from "react-redux";

import { useParams } from "react-router-dom";

import { useState, useEffect, useRef } from "react";

import $ from "jquery";

import { user_actions } from "../../store";

import DashboardSidebar from "../../components/DashboardSidebar";
import DashboardHeader from "../../components/DashboardHeader";

const RemoveDuplicates = () => {
    const { operation_id } = useParams();

    const dispatch = useDispatch();

    const api_base_url = useSelector((state) => state.app_data.api_base_url);
    const access_token = useSelector((state) => state.user.access_token);

    const base_url = useSelector((state) => state.app_data.base_url);
    const user_id = useSelector((state) => state.user.user_info.id);

    const [loading, set_loading] = useState(true);
    const [operation_info, set_operation_info] = useState("");

    const rn_btn = useRef();

    const [rn_modal_open, set_rn_modal_open] = useState(false);
    const [rn_file_id, set_rn_file_id] = useState(null);
    const [new_filename, set_new_filename] = useState("");
    const [rename_server_response, set_rename_server_response] = useState("");

    const doRenameFile = (e) => {
        e.preventDefault();

        rn_btn.current.innerHTML = `<span className="fas fa-spinner fa-spin"></span> Renaming file`;

        $.ajax({
            type: "PATCH",
            url: `${api_base_url}/files/${rn_file_id}?new_filename=${new_filename}`,
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
            success: function () {
                window.location.reload();
            },
            statusCode: {
                406: function ({ responseJSON: response }) {
                    set_rename_server_response(response.message);
                    rn_btn.current.innerHTML = "Rename";
                },
            },
        });

        e.stopPropagation();
    };

    const renameFile = (file_id, filename) => {
        set_rn_file_id(file_id);
        set_new_filename(filename);
        set_rn_modal_open(true);
    };

    const closeRenameFile = () => {
        set_rn_modal_open(false);
        set_rn_file_id(null);
        set_new_filename("");
    };

    useEffect(() => {
        $.ajax({
            type: "GET",
            url: `${api_base_url}/operations/remove_duplicates/${operation_id}`,
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
            success: function (response) {
                set_operation_info(response.data);
                set_loading(false);
            },
            statusCode: {
                401: function () {
                    dispatch(user_actions.logout());
                },
                404: function () {
                    set_loading(false);
                },
            },
        });
    }, [access_token, api_base_url, dispatch, operation_id]);

    if (loading) {
        return (
            <div className="preloader">
                <span className="fas fa-spinner fa-spin"></span> Fetching file
                contents
            </div>
        );
    }

    if (!operation_info) {
        return <div className="preloader">Error fetching file</div>;
    }

    return (
        <>
            {rn_modal_open && (
                <div className={`modal modal-open`}>
                    <div className="modal-header">
                        Rename File{" "}
                        <span onClick={closeRenameFile}>&times;</span>
                    </div>
                    <form onSubmit={doRenameFile}>
                        <div
                            className="modal-body"
                            style={{ textAlign: "left" }}
                        >
                            <label className="modal-label">New name</label>
                            <input
                                type="text"
                                className="modal-input"
                                placeholder="Enter new file name"
                                value={new_filename}
                                onChange={(e) =>
                                    set_new_filename(e.target.value)
                                }
                            />
                        </div>
                        <div
                            className="modal-footer"
                            style={{ textAlign: "right" }}
                        >
                            {rename_server_response}&nbsp;&nbsp;&nbsp;&nbsp;
                            <button className="modal-btn" ref={rn_btn}>
                                Rename
                            </button>
                        </div>
                    </form>
                </div>
            )}
            <main className="dashboard-container">
                <DashboardSidebar />
                <div className="dashboard-content">
                    <DashboardHeader />
                    <section className="dashboard-main">
                        <div className="dashboard-breadcrumb">
                            <div className="dashboard-breadcrumb-left">
                                <h3 className="dashboard-breadcrumb-title">
                                    Remove Duplicates
                                </h3>
                                <p className="dashboard-breadcrumb-text">
                                    A remove duplicates operation performed by
                                    you
                                </p>
                            </div>
                            <div className="dashboard-breadcrumb-right"></div>
                        </div>
                        <div className="files-preview mb-3">
                            <div className="file">
                                <div className="file-header">
                                    <h3 className="file-name">
                                        {operation_info.file_details.file_name}
                                    </h3>
                                    <div className="file-action-btns">
                                        <button
                                            className="change-file-btn"
                                            onClick={() =>
                                                renameFile(
                                                    operation_info.file_details
                                                        .id,
                                                    operation_info.file_details
                                                        .file_name
                                                )
                                            }
                                        >
                                            Rename
                                        </button>
                                        <a
                                            href={`${base_url}dc/${user_id}/${operation_info.file_details.file_name}`}
                                            target="_new"
                                            className="change-file-btn"
                                        >
                                            Download
                                        </a>
                                    </div>
                                </div>
                                <div className="file-preview-box">
                                    <table className="file-table">
                                        <thead>
                                            <tr>
                                                {operation_info.file_details.file_content[0].map(
                                                    (cell, i) => {
                                                        return (
                                                            <th
                                                                key={i}
                                                                style={{
                                                                    backgroundColor: `#${cell.background}`,
                                                                }}
                                                            >
                                                                {cell.value}
                                                            </th>
                                                        );
                                                    }
                                                )}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {operation_info.file_details.file_content
                                                .slice(1)
                                                .map((row, i) => {
                                                    return (
                                                        <tr key={i}>
                                                            {row.map(
                                                                (cell, j) => {
                                                                    return (
                                                                        <td
                                                                            key={
                                                                                j
                                                                            }
                                                                            style={{
                                                                                backgroundColor: `#${cell.background}`,
                                                                            }}
                                                                        >
                                                                            {
                                                                                cell.value
                                                                            }
                                                                        </td>
                                                                    );
                                                                }
                                                            )}
                                                        </tr>
                                                    );
                                                })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="files-preview">
                            <div className="file">
                                <div className="file-header">
                                    <h3 className="file-name">
                                        {
                                            operation_info
                                                .without_duplicates_file_details
                                                .file_name
                                        }
                                    </h3>
                                    <div className="file-action-btns">
                                        <button
                                            className="change-file-btn"
                                            onClick={() =>
                                                renameFile(
                                                    operation_info
                                                        .without_duplicates_file_details
                                                        .id,
                                                    operation_info
                                                        .without_duplicates_file_details
                                                        .file_name
                                                )
                                            }
                                        >
                                            Rename
                                        </button>
                                        <a
                                            href={`${base_url}dc/${user_id}/${operation_info.without_duplicates_file_details.file_name}`}
                                            target="_new"
                                            className="change-file-btn"
                                        >
                                            Download
                                        </a>
                                    </div>
                                </div>
                                <div className="file-preview-box">
                                    <table className="file-table">
                                        <thead>
                                            <tr>
                                                {operation_info.without_duplicates_file_details.file_content[0].map(
                                                    (cell, i) => {
                                                        return (
                                                            <th
                                                                key={i}
                                                                style={{
                                                                    backgroundColor: `#${cell.background}`,
                                                                }}
                                                            >
                                                                {cell.value}
                                                            </th>
                                                        );
                                                    }
                                                )}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {operation_info.without_duplicates_file_details.file_content
                                                .slice(1)
                                                .map((row, i) => {
                                                    return (
                                                        <tr key={i}>
                                                            {row.map(
                                                                (cell, j) => {
                                                                    return (
                                                                        <td
                                                                            key={
                                                                                j
                                                                            }
                                                                            style={{
                                                                                backgroundColor: `#${cell.background}`,
                                                                            }}
                                                                        >
                                                                            {
                                                                                cell.value
                                                                            }
                                                                        </td>
                                                                    );
                                                                }
                                                            )}
                                                        </tr>
                                                    );
                                                })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
};

export default RemoveDuplicates;
