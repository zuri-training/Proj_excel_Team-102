import { useSelector, useDispatch } from "react-redux";

import { useState, useEffect } from "react";

import $ from "jquery";

import { useParams } from "react-router-dom";

import { user_actions } from "../store";

const NewOperation = () => {
    const { files } = useParams();

    const dispatch = useDispatch();

    const api_base_url = useSelector((state) => state.app_data.api_base_url);
    const access_token = useSelector((state) => state.user.access_token);

    const [loading, set_loading] = useState(true);

    const [file1, set_file1] = useState("");
    const [file2, set_file2] = useState("");

    useEffect(() => {
        const [file1_id, file2_id] = files.split(".");

        if (file1_id) {
            $.ajax({
                type: "GET",
                url: `${api_base_url}/files/${file1_id}`,
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
                async: false,
                success: function (data) {
                    set_file1(data.file);
                },
                statusCode: {
                    401: function () {
                        dispatch(user_actions.logout());
                    },
                    404: function () {},
                },
            });
        }

        if (file2_id) {
            $.ajax({
                type: "GET",
                url: `${api_base_url}/files/${file2_id}`,
                headers: {
                    Authorization: `Bearer ${access_token}`,
                },
                async: false,
                success: function (data) {
                    set_file2(data.file);
                },
                statusCode: {
                    401: function () {
                        dispatch(user_actions.logout());
                    },
                    404: function () {},
                },
            });
        }

        set_loading(false);
    }, [access_token, api_base_url, dispatch, files]);

    if (loading) {
        return (
            <div className="preloader">
                <span className="fas fa-spinner fa-spin"></span> Fetching file
                contents
            </div>
        );
    }

    if (!file1 && !file2) {
        return <div className="preloader">Invalid operation</div>;
    }

    return (
        <>
            <section className="main-content">
                <div className="files-preview">
                    <div className="file">
                        <div className="file-header">
                            <h3 className="file-name">{file1.file_name}</h3>
                            <button className="change-file-btn">Change</button>
                        </div>
                        <div className="file-preview-box">
                            <table className="file-table">
                                <thead>
                                    <tr>
                                        {file1.file_content[0].map(
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
                                    {file1.file_content
                                        .slice(1)
                                        .map((row, i) => {
                                            return (
                                                <tr key={i}>
                                                    {row.map((cell, j) => {
                                                        return (
                                                            <td
                                                                key={j}
                                                                style={{
                                                                    backgroundColor: `#${cell.background}`,
                                                                }}
                                                            >
                                                                {cell.value}
                                                            </td>
                                                        );
                                                    })}
                                                </tr>
                                            );
                                        })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {file2 && (
                        <div className="file">
                            <div className="file-header">
                                <h3 className="file-name">{file2.file_name}</h3>
                                <button className="change-file-btn">
                                    Change
                                </button>
                            </div>
                            <div className="file-preview-box">
                                <table className="file-table">
                                    <thead>
                                        <tr>
                                            {file2.file_content[0].map(
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
                                        {file2.file_content
                                            .slice(1)
                                            .map((row, i) => {
                                                return (
                                                    <tr key={i}>
                                                        {row.map((cell, j) => {
                                                            return (
                                                                <td
                                                                    key={j}
                                                                    style={{
                                                                        backgroundColor: `#${cell.background}`,
                                                                    }}
                                                                >
                                                                    {cell.value}
                                                                </td>
                                                            );
                                                        })}
                                                    </tr>
                                                );
                                            })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>
                <div className="files-actions">
                    <div className="file-action">
                        <p className="file-action-icon-text">
                            <ion-icon
                                name="document-outline"
                                class="file-action-icon"
                            ></ion-icon>
                        </p>
                        <p>Search and Highlight</p>
                    </div>
                    <div className="file-action">
                        <p className="file-action-icon-text">
                            <ion-icon
                                name="document-outline"
                                class="file-action-icon"
                            ></ion-icon>
                        </p>
                        <p>Search and Replace</p>
                    </div>
                    <div className="file-action">
                        <p className="file-action-icon-text">
                            <ion-icon
                                name="document-outline"
                                class="file-action-icon"
                            ></ion-icon>
                        </p>
                        <p>Highlight Duplicates</p>
                    </div>
                    <div className="file-action">
                        <p className="file-action-icon-text">
                            <ion-icon
                                name="document-outline"
                                class="file-action-icon"
                            ></ion-icon>
                        </p>
                        <p>Remove Duplicates</p>
                    </div>
                    <div className="file-action">
                        <p className="file-action-icon-text">
                            <ion-icon
                                name="document-outline"
                                class="file-action-icon"
                            ></ion-icon>
                        </p>
                        <p>
                            Highlight Duplicates <br />
                            and Return 2 Files
                        </p>
                    </div>
                    <div className="file-action">
                        <p className="file-action-icon-text">
                            <ion-icon
                                name="document-outline"
                                class="file-action-icon"
                            ></ion-icon>
                        </p>
                        <p>
                            Remove Duplicates <br /> and Return 2 Files
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NewOperation;
