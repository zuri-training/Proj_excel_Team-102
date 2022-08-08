import { useSelector, useDispatch } from "react-redux";

import { useState, useEffect, useRef } from "react";

import $ from "jquery";

import { useNavigate, useParams } from "react-router-dom";

import { user_actions } from "../store";

import DashboardSidebar from "../components/DashboardSidebar";
import DashboardHeader from "../components/DashboardHeader";

const NewOperation = () => {
    const { files } = useParams();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const api_base_url = useSelector((state) => state.app_data.api_base_url);
    const access_token = useSelector((state) => state.user.access_token);
    const root_url = useSelector((state) => state.app_data.root_url);

    const [loading, set_loading] = useState(true);

    const [file1, set_file1] = useState("");
    const [file2, set_file2] = useState("");

    const [files_modal_open, set_files_modal_open] = useState(false);
    const [files_search, set_files_search] = useState("");
    const [user_files, set_user_files] = useState([]);
    const [file_select_operation, set_file_select_operation] =
        useState("new_file");

    const [current_operation, set_current_operation] = useState("");

    const diff_checker_btn = useRef();
    const search_highlight_btn = useRef();
    const search_replace_btn = useRef();
    const highlight_duplicates2_btn = useRef();
    const highlight_duplicates_btn = useRef();
    const remove_duplicates2_btn = useRef();
    const remove_duplicates_btn = useRef();

    const [unique_columns, set_unique_columns] = useState("");
    const [search_keyword, set_search_keyword] = useState("");
    const [replace_with, set_replace_with] = useState("");

    const removeFile = (num) => {
        if (num === 1) {
            const redirect_url = `${root_url}/new_operation/${file2.id}`;
            window.location = redirect_url;
        } else if (num === 2) {
            const redirect_url = `${root_url}/new_operation/${file1.id}`;
            window.location = redirect_url;
        }
    };

    const doFileSelectOperation = (file_id) => {
        const [file1_id, file2_id] = files.split(".");

        if (file_select_operation === "change_file1") {
            let redirect_url = `${root_url}/new_operation/${file_id}`;
            redirect_url += file2_id ? `.${file2_id}` : "";
            window.location = redirect_url;
        } else if (
            file_select_operation === "change_file2" ||
            file_select_operation === "new_file"
        ) {
            let redirect_url = `${root_url}/new_operation/${file1_id}.${file_id}`;
            window.location = redirect_url;
        }

        set_files_modal_open(false);
    };

    const doDiffChecker = (e) => {
        e.preventDefault();

        diff_checker_btn.current.innerHTML = `<span class="fas fa-spinner fa-spin"></span> Processing...`;

        $.ajax({
            type: "POST",
            url: `${api_base_url}/operations/diff_checker/`,
            data: JSON.stringify({
                file1: file1.id,
                file2: file2.id,
            }),
            contentType: "application/json",
            processData: false,
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
            success: function (response) {
                navigate(`/diff_checker/${response.data.id}`);
            },
            statusCode: {
                401: function () {
                    dispatch(user_actions.logout());
                },
                404: function () {
                    window.location.reload();
                },
            },
        });

        e.stopPropagation();
    };

    const doSearchHighlight = (e) => {
        e.preventDefault();

        search_highlight_btn.current.innerHTML = `<span class="fas fa-spinner fa-spin"></span> Processing...`;

        $.ajax({
            type: "POST",
            url: `${api_base_url}/operations/search_highlight/`,
            data: JSON.stringify({
                file: file1.id,
                search_keyword,
            }),
            contentType: "application/json",
            processData: false,
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
            success: function (response) {
                navigate(`/search_highlight/${response.data.id}`);
            },
            statusCode: {
                401: function () {
                    dispatch(user_actions.logout());
                },
                404: function () {
                    window.location.reload();
                },
            },
        });

        e.stopPropagation();
    };

    const doSearchReplace = (e) => {
        e.preventDefault();

        search_replace_btn.current.innerHTML = `<span class="fas fa-spinner fa-spin"></span> Processing...`;

        $.ajax({
            type: "POST",
            url: `${api_base_url}/operations/search_replace/`,
            data: JSON.stringify({
                file: file1.id,
                search_keyword,
                replace_with,
            }),
            contentType: "application/json",
            processData: false,
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
            success: function (response) {
                navigate(`/search_replace/${response.data.id}`);
            },
            statusCode: {
                401: function () {
                    dispatch(user_actions.logout());
                },
                404: function () {
                    window.location.reload();
                },
            },
        });

        e.stopPropagation();
    };

    const doHighlightDuplicates = (e) => {
        e.preventDefault();

        highlight_duplicates_btn.current.innerHTML = `<span class="fas fa-spinner fa-spin"></span> Processing...`;

        $.ajax({
            type: "POST",
            url: `${api_base_url}/operations/highlight_duplicates/`,
            data: JSON.stringify({
                file: file1.id,
                unique_columns,
            }),
            contentType: "application/json",
            processData: false,
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
            success: function (response) {
                navigate(`/highlight_duplicates/${response.data.id}`);
            },
            statusCode: {
                401: function () {
                    dispatch(user_actions.logout());
                },
                404: function () {
                    window.location.reload();
                },
            },
        });

        e.stopPropagation();
    };

    const doHighlightDuplicates2 = (e) => {
        e.preventDefault();

        highlight_duplicates2_btn.current.innerHTML = `<span class="fas fa-spinner fa-spin"></span> Processing...`;

        $.ajax({
            type: "POST",
            url: `${api_base_url}/operations/highlight_duplicates2/`,
            data: JSON.stringify({
                file: file1.id,
                unique_columns,
            }),
            contentType: "application/json",
            processData: false,
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
            success: function (response) {
                navigate(`/highlight_duplicates2/${response.data.id}`);
            },
            statusCode: {
                401: function () {
                    dispatch(user_actions.logout());
                },
                404: function () {
                    window.location.reload();
                },
            },
        });

        e.stopPropagation();
    };

    const doRemoveDuplicates2 = (e) => {
        e.preventDefault();

        remove_duplicates2_btn.current.innerHTML = `<span class="fas fa-spinner fa-spin"></span> Processing...`;

        $.ajax({
            type: "POST",
            url: `${api_base_url}/operations/remove_duplicates2/`,
            data: JSON.stringify({
                file: file1.id,
                unique_columns,
            }),
            contentType: "application/json",
            processData: false,
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
            success: function (response) {
                navigate(`/remove_duplicates2/${response.data.id}`);
            },
            statusCode: {
                401: function () {
                    dispatch(user_actions.logout());
                },
                404: function () {
                    window.location.reload();
                },
            },
        });

        e.stopPropagation();
    };

    const doRemoveDuplicates = (e) => {
        e.preventDefault();

        remove_duplicates_btn.current.innerHTML = `<span class="fas fa-spinner fa-spin"></span> Processing...`;

        $.ajax({
            type: "POST",
            url: `${api_base_url}/operations/remove_duplicates/`,
            data: JSON.stringify({
                file: file1.id,
                unique_columns,
            }),
            contentType: "application/json",
            processData: false,
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
            success: function (response) {
                navigate(`/remove_duplicates/${response.data.id}`);
            },
            statusCode: {
                401: function () {
                    dispatch(user_actions.logout());
                },
                404: function () {
                    window.location.reload();
                },
            },
        });

        e.stopPropagation();
    };

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
        } else {
            set_file2("");
        }

        set_loading(false);
    }, [access_token, api_base_url, dispatch, files]);

    useEffect(() => {
        $.ajax({
            type: "GET",
            url: `${api_base_url}/files/?division=8&search=${files_search}`,
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
            success: function (data) {
                set_user_files(data.files);
            },
        });
    }, [access_token, api_base_url, files_search]);

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
            {files_modal_open && (
                <div className="modal modal-open modal--files-select">
                    <div className="modal-header">
                        My files
                        <span onClick={() => set_files_modal_open(false)}>
                            &times;
                        </span>
                    </div>
                    <div className="modal-body" style={{ textAlign: "left" }}>
                        <h3 className="files-select-title">Select a file</h3>
                        <div className="files-select">
                            {user_files.map((file) => {
                                return (
                                    <div
                                        className="file-select"
                                        key={file.id}
                                        onClick={() =>
                                            doFileSelectOperation(file.id)
                                        }
                                    >
                                        <ion-icon
                                            name="document-text-outline"
                                            class="file-select-icon"
                                        ></ion-icon>
                                        <p title={file.file_name}>
                                            {file.file_name.substr(0, 12)}
                                            {file.file_name.length > 12 &&
                                                "..."}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="modal-footer" style={{ textAlign: "left" }}>
                        <div className="files-search-footer">
                            <input
                                type="text"
                                placeholder="Search your files"
                                value={files_search}
                                onChange={(e) =>
                                    set_files_search(e.target.value)
                                }
                            />
                            {/* <p>or Browse Files</p> */}
                        </div>
                    </div>
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
                                    New operation
                                </h3>
                                <p className="dashboard-breadcrumb-text">
                                    Perform an operation on uploaded file from
                                    the provided operations below
                                </p>
                            </div>
                            <div className="dashboard-breadcrumb-right"></div>
                        </div>
                        <div className="files-preview">
                            <div className="file">
                                <div className="file-header">
                                    <h3 className="file-name">
                                        {file1.file_name}
                                    </h3>
                                    <button
                                        className="change-file-btn"
                                        onClick={() => {
                                            set_file_select_operation(
                                                "change_file1"
                                            );
                                            set_files_modal_open(true);
                                        }}
                                    >
                                        Change
                                    </button>
                                </div>
                                <div className="file-preview-box-container">
                                    {!file2 ? (
                                        <button
                                            className="file-add-remove"
                                            onClick={() => {
                                                set_file_select_operation(
                                                    "new_file"
                                                );
                                                set_files_modal_open(true);
                                            }}
                                        >
                                            <ion-icon
                                                name="add-outline"
                                                class="file-add-remove-icon"
                                            ></ion-icon>
                                        </button>
                                    ) : (
                                        <button
                                            className="file-add-remove file-add-remove--variant"
                                            onClick={() => removeFile(1)}
                                        >
                                            <ion-icon
                                                name="remove-outline"
                                                class="file-add-remove-icon"
                                            ></ion-icon>
                                        </button>
                                    )}
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
                                                                {row.map(
                                                                    (
                                                                        cell,
                                                                        j
                                                                    ) => {
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
                            {file2 && (
                                <div className="file">
                                    <div className="file-header">
                                        <h3 className="file-name">
                                            {file2.file_name}
                                        </h3>
                                        <button
                                            className="change-file-btn"
                                            onClick={() => {
                                                set_file_select_operation(
                                                    "change_file2"
                                                );
                                                set_files_modal_open(true);
                                            }}
                                        >
                                            Change
                                        </button>
                                    </div>
                                    <div className="file-preview-box-container">
                                        <button
                                            className="file-add-remove file-add-remove--variant"
                                            onClick={() => removeFile(2)}
                                        >
                                            <ion-icon
                                                name="remove-outline"
                                                class="file-add-remove-icon"
                                            ></ion-icon>
                                        </button>
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
                                                                        {
                                                                            cell.value
                                                                        }
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
                                                                    {row.map(
                                                                        (
                                                                            cell,
                                                                            j
                                                                        ) => {
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
                            )}
                        </div>
                        {!file2 ? (
                            <div className="files-actions">
                                <div
                                    className="file-action"
                                    onClick={() =>
                                        set_current_operation(
                                            "search_and_highlight"
                                        )
                                    }
                                >
                                    <p className="file-action-icon-text">
                                        <ion-icon
                                            name="document-outline"
                                            class="file-action-icon"
                                        ></ion-icon>
                                    </p>
                                    <p>Search and Highlight</p>
                                </div>
                                <div
                                    className="file-action"
                                    onClick={() =>
                                        set_current_operation(
                                            "search_and_replace"
                                        )
                                    }
                                >
                                    <p className="file-action-icon-text">
                                        <ion-icon
                                            name="document-outline"
                                            class="file-action-icon"
                                        ></ion-icon>
                                    </p>
                                    <p>Search and Replace</p>
                                </div>
                                <div
                                    className="file-action"
                                    onClick={() =>
                                        set_current_operation(
                                            "highlight_duplicates"
                                        )
                                    }
                                >
                                    <p className="file-action-icon-text">
                                        <ion-icon
                                            name="document-outline"
                                            class="file-action-icon"
                                        ></ion-icon>
                                    </p>
                                    <p>Highlight Duplicates</p>
                                </div>
                                <div
                                    className="file-action"
                                    onClick={() =>
                                        set_current_operation(
                                            "remove_duplicates"
                                        )
                                    }
                                >
                                    <p className="file-action-icon-text">
                                        <ion-icon
                                            name="document-outline"
                                            class="file-action-icon"
                                        ></ion-icon>
                                    </p>
                                    <p>Remove Duplicates</p>
                                </div>
                                <div
                                    className="file-action"
                                    onClick={() =>
                                        set_current_operation(
                                            "highlight_duplicates2"
                                        )
                                    }
                                >
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
                                <div
                                    className="file-action"
                                    onClick={() =>
                                        set_current_operation(
                                            "remove_duplicates2"
                                        )
                                    }
                                >
                                    <p className="file-action-icon-text">
                                        <ion-icon
                                            name="document-outline"
                                            class="file-action-icon"
                                        ></ion-icon>
                                    </p>
                                    <p>
                                        Remove Duplicates <br /> and Return 2
                                        Files
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div className="files-actions">
                                <div
                                    className="file-action"
                                    onClick={() =>
                                        set_current_operation("diff_checker")
                                    }
                                >
                                    <p className="file-action-icon-text">
                                        <ion-icon
                                            name="document-outline"
                                            class="file-action-icon"
                                        ></ion-icon>
                                    </p>
                                    <p>Diff Checker</p>
                                </div>
                            </div>
                        )}
                        {current_operation === "diff_checker" && (
                            <div className="operation">
                                <h3 className="operation-title">
                                    Diff Checker
                                </h3>
                                <p className="operation-text">
                                    For the diff checker operation our system is
                                    going to look through the two uploaded excel
                                    file and check every cell in both excel
                                    files any cell that do not match are
                                    highlighted.
                                </p>
                                <p className="operation-text">
                                    <strong>Note:</strong> we would only be
                                    considering the first sheet
                                </p>
                                <form onSubmit={doDiffChecker}>
                                    <div className="form-group">
                                        <button
                                            type="submit"
                                            className="operation-action"
                                            ref={diff_checker_btn}
                                        >
                                            Check Difference
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}
                        {current_operation === "search_and_highlight" && (
                            <div className="operation">
                                <h3 className="operation-title">
                                    Search and Highlight
                                </h3>
                                <p className="operation-text">
                                    For the search and highlight operation our
                                    system is going to look through the uploaded
                                    excel file and check every cell any cell
                                    that matches the searched keyword would be
                                    highlighted.
                                </p>
                                <p className="operation-text">
                                    <strong>Note:</strong> we would only be
                                    considering the first sheet
                                </p>
                                <form onSubmit={doSearchHighlight}>
                                    <div className="form-group">
                                        <label>Search keyword</label>
                                        <input
                                            type="text"
                                            name="search_keyword"
                                            placeholder="Enter value to search for"
                                            className="form-input"
                                            value={search_keyword}
                                            onChange={(e) =>
                                                set_search_keyword(
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                    <div className="form-group">
                                        <button
                                            type="submit"
                                            className="operation-action"
                                            ref={search_highlight_btn}
                                        >
                                            Search and Highlight
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}
                        {current_operation === "search_and_replace" && (
                            <div className="operation">
                                <h3 className="operation-title">
                                    Search and Replace
                                </h3>
                                <p className="operation-text">
                                    For the search and relace operation our
                                    system is going to look through the uploaded
                                    excel file and check every cell any cell
                                    that matches the searched keyword would be
                                    replaced with the given replace value.
                                </p>
                                <p className="operation-text">
                                    <strong>Note:</strong> we would only be
                                    considering the first sheet
                                </p>
                                <form onSubmit={doSearchReplace}>
                                    <div className="form-group">
                                        <label>Search keyword</label>
                                        <input
                                            type="text"
                                            name="search_keyword"
                                            placeholder="Enter value to search for"
                                            className="form-input"
                                            value={search_keyword}
                                            onChange={(e) =>
                                                set_search_keyword(
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Replace With</label>
                                        <input
                                            type="text"
                                            name="replace_with"
                                            placeholder="Enter value to replace with"
                                            className="form-input"
                                            value={replace_with}
                                            onChange={(e) =>
                                                set_replace_with(e.target.value)
                                            }
                                        />
                                    </div>
                                    <div className="form-group">
                                        <button
                                            type="submit"
                                            className="operation-action"
                                            ref={search_replace_btn}
                                        >
                                            Search and Replace
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}
                        {current_operation === "highlight_duplicates" && (
                            <div className="operation">
                                <h3 className="operation-title">
                                    Highlight Duplicates
                                </h3>
                                <p className="operation-text">
                                    For the highlight duplicates operation our
                                    system is going to look through the uploaded
                                    excel file and check every row that contains
                                    a duplicate value for the specified unique
                                    columns and highlight them.
                                </p>
                                <p className="operation-text">
                                    <strong>Note:</strong> we would only be
                                    considering the first sheet
                                </p>
                                <form onSubmit={doHighlightDuplicates}>
                                    <div className="form-group">
                                        <label>Unique Columns</label>
                                        <input
                                            type="text"
                                            name="uniqu_columns"
                                            placeholder="Enter unique columns separated by comma"
                                            className="form-input"
                                            value={unique_columns}
                                            onChange={(e) =>
                                                set_unique_columns(
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                    <div className="form-group">
                                        <button
                                            type="submit"
                                            className="operation-action"
                                            ref={highlight_duplicates_btn}
                                        >
                                            Highlight Duplicates
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}
                        {current_operation === "remove_duplicates" && (
                            <div className="operation">
                                <h3 className="operation-title">
                                    Remove Duplicates
                                </h3>
                                <p className="operation-text">
                                    For the remove duplicates operation our
                                    system is going to look through the uploaded
                                    excel file and check every row that contains
                                    a duplicate value for the specified unique
                                    columns and remove them.
                                </p>
                                <p className="operation-text">
                                    <strong>Note:</strong> we would only be
                                    considering the first sheet
                                </p>
                                <form onSubmit={doRemoveDuplicates}>
                                    <div className="form-group">
                                        <label>Unique Columns</label>
                                        <input
                                            type="text"
                                            name="uniqu_columns"
                                            placeholder="Enter unique columns separated by comma"
                                            className="form-input"
                                            value={unique_columns}
                                            onChange={(e) =>
                                                set_unique_columns(
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                    <div className="form-group">
                                        <button
                                            type="submit"
                                            className="operation-action"
                                            ref={remove_duplicates_btn}
                                        >
                                            Remove Duplicates
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}
                        {current_operation === "highlight_duplicates2" && (
                            <div className="operation">
                                <h3 className="operation-title">
                                    Highlight Duplicates and Return 2 files
                                </h3>
                                <p className="operation-text">
                                    For the highlight duplicates operation our
                                    system is going to look through the uploaded
                                    excel file and check every row that contains
                                    a duplicate value for the specified unique
                                    columns and highlight them and also generate
                                    an analysis of duplicated data.
                                </p>
                                <p className="operation-text">
                                    <strong>Note:</strong> we would only be
                                    considering the first sheet
                                </p>
                                <form onSubmit={doHighlightDuplicates2}>
                                    <div className="form-group">
                                        <label>Unique Columns</label>
                                        <input
                                            type="text"
                                            name="unique_columns"
                                            placeholder="Enter unique columns separated by comma"
                                            className="form-input"
                                            value={unique_columns}
                                            onChange={(e) =>
                                                set_unique_columns(
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                    <div className="form-group">
                                        <button
                                            type="submit"
                                            className="operation-action"
                                            ref={highlight_duplicates2_btn}
                                        >
                                            Highlight Duplicates and Return 2
                                            Files
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}
                        {current_operation === "remove_duplicates2" && (
                            <div className="operation">
                                <h3 className="operation-title">
                                    Remove Duplicates and Return 2 Files
                                </h3>
                                <p className="operation-text">
                                    For the remove duplicates operation our
                                    system is going to look through the uploaded
                                    excel file and check every row that contains
                                    a duplicate value for the specified unique
                                    columns and remove them and also return an
                                    excel sheet containing the removed rows.
                                </p>
                                <p className="operation-text">
                                    <strong>Note:</strong> we would only be
                                    considering the first sheet
                                </p>
                                <form onSubmit={doRemoveDuplicates2}>
                                    <div className="form-group">
                                        <label>Unique Columns</label>
                                        <input
                                            type="text"
                                            name="uniqu_columns"
                                            placeholder="Enter unique columns separated by comma"
                                            className="form-input"
                                            value={unique_columns}
                                            onChange={(e) =>
                                                set_unique_columns(
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                    <div className="form-group">
                                        <button
                                            type="submit"
                                            className="operation-action"
                                            ref={remove_duplicates2_btn}
                                        >
                                            Remove Duplicates and Return 2 Files
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}
                    </section>
                </div>
            </main>
        </>
    );
};

export default NewOperation;
