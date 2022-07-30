import { HashRouter, Routes, Route } from "react-router-dom";

import { lazy, Suspense } from "react";

import Preloader from "./components/Preloader";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));

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
            </Routes>
        </HashRouter>
    );
};

export default App;
