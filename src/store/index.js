import { createSlice, configureStore } from "@reduxjs/toolkit";

const load_initial_state = () => {
    const app_state = localStorage.getItem("app_state");

    if (app_state) {
        return JSON.parse(app_state);
    } else {
        const initial_state = {
            app_data: {
                api_base_url: "http://localhost:8000/",
            },
        };

        localStorage.setItem("app_state", JSON.stringify(initial_state));

        return initial_state;
    }
};

const app_state = load_initial_state();

const app_data_slice = createSlice({
    name: "app_data",
    initialState: app_state.app_data,
});

export default configureStore({
    reducer: {
        app_data: app_data_slice.reducer,
    },
});
