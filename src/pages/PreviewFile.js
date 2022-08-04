import { useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { useEffect, useState } from "react";

import $ from "jquery";

import { user_actions } from "../store";

const PreviewFile = () => {
    const { file_id } = useParams();

    const dispatch = useDispatch();

    const api_base_url = useSelector((state) => state.app_data.api_base_url);
    const access_token = useSelector((state) => state.user.access_token);

    const [loading, set_loading] = useState(true);
    const [file_info, set_file_info] = useState("");

    useEffect(() => {
        $.ajax({
            type: "GET",
            url: `${api_base_url}/files/${file_id}`,
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
            success: function (data) {
                console.log(data.file.file_content);
                set_file_info(data.file.file_content);
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
    }, [access_token, api_base_url, dispatch, file_id]);

    if (loading) {
        return (
            <div className="preloader">
                <span className="fas fa-spinner fa-spin"></span> Fetching file
                contents
            </div>
        );
    }

    if (!file_info) {
        return <div className="preloader">Error fetching file</div>;
    }

    return (
        <>
            <table className="file-table">
                <thead>
                    <tr>
                        {file_info[0].map((cell, i) => {
                            return <th key={i}>{cell.value}</th>;
                        })}
                    </tr>
                </thead>
                <tbody>
                    {file_info.slice(1).map((row, i) => {
                        return (
                            <tr key={i}>
                                {row.map((cell, j) => {
                                    return <td key={j}>{cell.value}</td>;
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};

export default PreviewFile;
