import { HashRouter, Routes, Route } from "react-router-dom";

import { lazy, Suspense } from "react";

import Preloader from "./components/Preloader";

import Auth from "./components/Auth";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const AddNewFile = lazy(() => import("./pages/AddNewFile"));
const NewOperation = lazy(() => import("./pages/NewOperation"));
const PreviewFile = lazy(() => import("./pages/PreviewFile"));

const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Suspense fallback={<Preloader />}>
                            <Home />
                        </Suspense>
                    }
                />
                <Route
                    path="/login"
                    element={
                        <Suspense fallback={<Preloader />}>
                            <Login />
                        </Suspense>
                    }
                />
                <Route
                    path="/register"
                    element={
                        <Suspense fallback={<Preloader />}>
                            <Register />
                        </Suspense>
                    }
                />
                <Route
                    path="/dashboard"
                    element={
                        <Auth>
                            <Suspense fallback={<Preloader />}>
                                <Dashboard />
                            </Suspense>
                        </Auth>
                    }
                />
                <Route
                    path="/add_new_file"
                    element={
                        <Auth>
                            <Suspense fallback={<Preloader />}>
                                <AddNewFile />
                            </Suspense>
                        </Auth>
                    }
                />
                <Route
                    path="/new_operation/:files"
                    element={
                        <Auth>
                            <Suspense fallback={<Preloader />}>
                                <NewOperation />
                            </Suspense>
                        </Auth>
                    }
                />
                <Route
                    path="/preview_file/:file_id"
                    element={
                        <Auth>
                            <Suspense fallback={<Preloader />}>
                                <PreviewFile />
                            </Suspense>
                        </Auth>
                    }
                />
            </Routes>
        </HashRouter>
    );
};

export default App;
