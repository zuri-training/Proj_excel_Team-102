import { createSlice, configureStore } from "@reduxjs/toolkit";

const load_app_state = () => {
    const app_state = localStorage.getItem("app_state");

    if (app_state) {
        return JSON.parse(app_state);
    } else {
        const initial_state = {
            app_data: {
                api_base_url: "http://localhost:8000/api/v1",
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

export const user_actions = user_slice.actions;

export default configureStore({
    reducer: {
        app_data: app_data_slice.reducer,
        user: user_slice.reducer,
    },
});
