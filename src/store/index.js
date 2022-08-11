import { createSlice, configureStore } from "@reduxjs/toolkit";

const load_app_state = () => {
    const type = "development";
    // const type = "production";

    const app_state = localStorage.getItem("app_state");

    if (app_state) {
        return JSON.parse(app_state);
    } else {
        const initial_state = {
            app_data: {
                api_base_url: `${
                    type === "development"
                        ? "http://localhost:8000/api/v1"
                        : window.location.origin + "/api/v1"
                }`,
                base_url: `${
                    type === "development"
                        ? "http://localhost:8000/"
                        : window.location.origin + "/"
                }`,
                root_url: `${
                    type === "development"
                        ? "http://localhost:3000/#"
                        : window.location.origin + "/#"
                }`,
                dashboard_navbar_active: "dashboard",
            },
            user: {
                logged_in: false,
                access_token: "",
                user_info: {},
            },
        };

        localStorage.setItem("app_state", JSON.stringify(initial_state));

        return initial_state;
    }
};

const app_state = load_app_state();

const update_app_state = (data_key, new_value) => {
    const app_state = load_app_state();

    app_state[data_key] = new_value;

    localStorage.setItem("app_state", JSON.stringify(app_state));
};

const app_data_slice = createSlice({
    name: "app_data",
    initialState: app_state.app_data,
    reducers: {
        set_dashboard_navbar_active: (state, data) => {
            state.dashboard_navbar_active = data.payload;

            update_app_state("app_data", state);
        },
    },
});

const user_slice = createSlice({
    name: "user",
    initialState: app_state.user,
    reducers: {
        login: (state, data) => {
            const { access_token, user_info } = data.payload;

            state.logged_in = true;
            state.access_token = access_token;
            state.user_info = user_info;

            update_app_state("user", state);
        },
        logout: (state) => {
            state.logged_in = false;
            state.access_token = "";
            state.user_info = {};

            update_app_state("user", state);
        },
    },
});

export const app_data_actions = app_data_slice.actions;
export const user_actions = user_slice.actions;

export default configureStore({
    reducer: {
        app_data: app_data_slice.reducer,
        user: user_slice.reducer,
    },
});
