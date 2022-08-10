import excel_icon from "../assets/img/excel-icon.svg";

import DashboardSidebar from "../components/DashboardSidebar";
import DashboardHeader from "../components/DashboardHeader";
import DashboardFooter from "../components/DashboardFooter";

import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import $ from "jquery";

import { user_actions } from "../store";

const Files = () => {
    const dispatch = useDispatch();

    const api_base_url = useSelector((state) => state.app_data.api_base_url);
    const access_token = useSelector((state) => state.user.access_token);

    const root_url = useSelector((state) => state.app_data.root_url);

    const base_url = useSelector((state) => state.app_data.base_url);
    const user_id = useSelector((state) => state.user.user_info.id);

    const [files_view, set_files_view] = useState("list");

    const [active_file, set_active_file] = useState(false);

    const [files, set_files] = useState([]);
    const [search, set_search] = useState("");
    const [pagination, set_pagination] = useState(0);
    const [page, set_page] = useState(1);
    const [division] = useState(10);

    useEffect(() => {
        $.ajax({
            type: "GET",
            url: `${api_base_url}/files/?page=${page}&division=${division}&search=${search}`,
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
            success: function (data) {
                set_files(data.files);
                set_pagination(data.meta_data.pagination);
            },
            statusCode: {
                401: function () {
                    dispatch(user_actions.logout());
                },
            },
        });
    }, [page, division, access_token, api_base_url, search, dispatch]);

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
                                    Files
                                </h3>
                                <p className="dashboard-breadcrumb-text">
                                    These are your files
                                </p>
                            </div>
                            <div className="dashboard-breadcrumb-right">
                                <Link
                                    to="/add_new_file"
                                    className="dashboard-breadcrumb-link"
                                >
                                    <ion-icon name="add-outline"></ion-icon> Add
                                    New
                                </Link>
                            </div>
                        </div>
                        <div className="files-list-header">
                            <div className="files-list-header-left">
                                <p>Sort By:</p>
                                <ion-icon name="filter-outline"></ion-icon>
                            </div>
                            <div className="files-list-header-right">
                                {active_file && (
                                    <div className="files-list-actions">
                                        <button
                                            className="files-list-action"
                                            onClick={() => {
                                                const url = `${root_url}/new_operation/${active_file.id}`;
                                                window.location = url;
                                            }}
                                        >
                                            <ion-icon
                                                name="barcode-outline"
                                                class="files-list-action-icon"
                                            ></ion-icon>
                                        </button>
                                        <button
                                            className="files-list-action"
                                            onClick={async () => {
                                                const url = `${base_url}dc/${user_id}/${active_file.file_name}`;
                                                await navigator.clipboard.writeText(
                                                    url
                                                );
                                                alert(
                                                    "File link copied to clipboard successfully"
                                                );
                                            }}
                                        >
                                            <ion-icon
                                                name="link-outline"
                                                class="files-list-action-icon"
                                            ></ion-icon>
                                        </button>
                                        <button className="files-list-action">
                                            <ion-icon
                                                name="create-outline"
                                                class="files-list-action-icon"
                                            ></ion-icon>
                                        </button>
                                        <button
                                            className="files-list-action"
                                            onClick={() => {
                                                const url = `${base_url}dc/${user_id}/${active_file.file_name}`;
                                                window.open(url, "_blank");
                                            }}
                                        >
                                            <ion-icon
                                                name="download-outline"
                                                class="files-list-action-icon"
                                            ></ion-icon>
                                        </button>
                                        <button className="files-list-action">
                                            <ion-icon
                                                name="trash-outline"
                                                class="files-list-action-icon"
                                            ></ion-icon>
                                        </button>
                                    </div>
                                )}
                                <div className="files-list-change-view">
                                    <p>View:</p>
                                    <ion-icon
                                        name="list-outline"
                                        class={`change-files-view-icon ${
                                            files_view === "list"
                                                ? "color--active"
                                                : ""
                                        }`}
                                        onClick={() => set_files_view("list")}
                                    ></ion-icon>
                                    <ion-icon
                                        name="grid-outline"
                                        class={`change-files-view-icon ${
                                            files_view === "grid"
                                                ? "color--active"
                                                : ""
                                        }`}
                                        onClick={() => set_files_view("grid")}
                                    ></ion-icon>
                                </div>
                            </div>
                        </div>
                        <div className="files-search">
                            <input
                                type="text"
                                placeholder="Search files"
                                value={search}
                                onChange={(e) => set_search(e.target.value)}
                            />
                        </div>
                        {files_view === "list" && (
                            <table className="files-list-list">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th className="file-type">File Type</th>
                                        <th className="file-size">Size</th>
                                        <th className="file-last-modified">
                                            Last Modified
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {files.map((file) => {
                                        return (
                                            <tr
                                                className={`file-list-item ${
                                                    file &&
                                                    file.id === active_file.id
                                                        ? "file-list-item-active"
                                                        : ""
                                                }`}
                                                key={file.id}
                                                onClick={() =>
                                                    set_active_file(file)
                                                }
                                            >
                                                <td className="file-cell">
                                                    <img
                                                        src={excel_icon}
                                                        alt=""
                                                    />
                                                    <p>{file.file_name}</p>
                                                </td>
                                                <td className="file-type">
                                                    xlsx
                                                </td>
                                                <td className="file-size">
                                                    2kb
                                                </td>
                                                <td className="file-last-modified">
                                                    {file.time_added.substr(
                                                        0,
                                                        10
                                                    )}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        )}
                        {files_view === "grid" && (
                            <div className="files-list-grid">
                                {files.map((file) => {
                                    return (
                                        <div
                                            className={`file-grid-item ${
                                                file &&
                                                file.id === active_file.id
                                                    ? "file-grid-item-active"
                                                    : ""
                                            }`}
                                            key={file.id}
                                            onClick={() =>
                                                set_active_file(file)
                                            }
                                        >
                                            <img src={excel_icon} alt="" />
                                            <p title={file.file_name}>
                                                {file.file_name.substr(0, 12)}
                                                {file.file_name.length > 12 &&
                                                    "..."}
                                            </p>
                                            <p>
                                                {file.time_added.substr(0, 10)}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                        <div className="files-pagination">
                            {new Array(pagination)
                                .fill(null)
                                .map((value, i) => {
                                    return (
                                        <button
                                            key={i}
                                            className={
                                                page === i + 1
                                                    ? "files-pagination-active"
                                                    : ""
                                            }
                                            onClick={() => set_page(i + 1)}
                                        >
                                            {i + 1}
                                        </button>
                                    );
                                })}
                        </div>
                    </section>
                    <DashboardFooter />
                </div>
            </main>
        </>
    );
};

export default Files;
