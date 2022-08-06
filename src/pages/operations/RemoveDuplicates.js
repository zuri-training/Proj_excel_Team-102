import { useSelector, useDispatch } from "react-redux";

import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";

import $ from "jquery";

import { user_actions } from "../../store";

import DashboardSidebar from "../../components/DashboardSidebar";
import DashboardHeader from "../../components/DashboardHeader";

const RemoveDuplicates = () => {
    const { operation_id } = useParams();

    const dispatch = useDispatch();

    const api_base_url = useSelector((state) => state.app_data.api_base_url);
    const access_token = useSelector((state) => state.user.access_token);

    const [loading, set_loading] = useState(true);
    const [operation_info, set_operation_info] = useState("");

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
                                        <button className="change-file-btn">
                                            Rename
                                        </button>
                                        <button className="change-file-btn">
                                            Download
                                        </button>
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
                                        <button className="change-file-btn">
                                            Rename
                                        </button>
                                        <button className="change-file-btn">
                                            Download
                                        </button>
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
