import { HashRouter, Routes, Route } from "react-router-dom";

import { lazy, Suspense } from "react";

import Preloader from "./components/Preloader";

import Auth from "./components/Auth";

import Logout from "./pages/Logout";

const Home = lazy(() => import("./pages/Home"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const AddNewFile = lazy(() => import("./pages/AddNewFile"));
const NewOperation = lazy(() => import("./pages/NewOperation"));
const PreviewFile = lazy(() => import("./pages/PreviewFile"));
const Settings = lazy(() => import("./pages/Settings"));
const Files = lazy(() => import("./pages/Files"));
const FAQs = lazy(() => import("./pages/FAQs"));
const Product = lazy(() => import("./pages/Product"));
const About = lazy(() => import("./pages/About"));
const Features = lazy(() => import("./pages/Features"));

const SearchHighlight = lazy(() =>
    import("./pages/operations/SearchHighlight")
);
const SearchReplace = lazy(() => import("./pages/operations/SearchReplace"));
const DiffChecker = lazy(() => import("./pages/operations/DiffChecker"));
const HighlightDuplicates2 = lazy(() =>
    import("./pages/operations/HighlightDuplicates2")
);
const RemoveDuplicates2 = lazy(() =>
    import("./pages/operations/RemoveDuplicates2")
);
const HighlightDuplicates = lazy(() =>
    import("./pages/operations/HighlightDuplicates")
);
const RemoveDuplicates = lazy(() =>
    import("./pages/operations/RemoveDuplicates")
);

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
                    path="/about"
                    element={
                        <Suspense fallback={<Preloader />}>
                            <About />
                        </Suspense>
                    }
                />
                <Route
                    path="/faqs"
                    element={
                        <Suspense fallback={<Preloader />}>
                            <FAQs />
                        </Suspense>
                    }
                />
                <Route
                    path="/product"
                    element={
                        <Suspense fallback={<Preloader />}>
                            <Product />
                        </Suspense>
                    }
                />
                <Route
                    path="/features"
                    element={
                        <Suspense fallback={<Preloader />}>
                            <Features />
                        </Suspense>
                    }
                />
                <Route
                    path="/contact_us"
                    element={
                        <Suspense fallback={<Preloader />}>
                            <ContactUs />
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
                <Route
                    path="/search_highlight/:operation_id"
                    element={
                        <Auth>
                            <Suspense fallback={<Preloader />}>
                                <SearchHighlight />
                            </Suspense>
                        </Auth>
                    }
                />
                <Route
                    path="/search_replace/:operation_id"
                    element={
                        <Auth>
                            <Suspense fallback={<Preloader />}>
                                <SearchReplace />
                            </Suspense>
                        </Auth>
                    }
                />
                <Route
                    path="/diff_checker/:operation_id"
                    element={
                        <Auth>
                            <Suspense fallback={<Preloader />}>
                                <DiffChecker />
                            </Suspense>
                        </Auth>
                    }
                />
                <Route
                    path="/highlight_duplicates2/:operation_id"
                    element={
                        <Auth>
                            <Suspense fallback={<Preloader />}>
                                <HighlightDuplicates2 />
                            </Suspense>
                        </Auth>
                    }
                />
                <Route
                    path="/remove_duplicates2/:operation_id"
                    element={
                        <Auth>
                            <Suspense fallback={<Preloader />}>
                                <RemoveDuplicates2 />
                            </Suspense>
                        </Auth>
                    }
                />
                <Route
                    path="/highlight_duplicates/:operation_id"
                    element={
                        <Auth>
                            <Suspense fallback={<Preloader />}>
                                <HighlightDuplicates />
                            </Suspense>
                        </Auth>
                    }
                />
                <Route
                    path="/remove_duplicates/:operation_id"
                    element={
                        <Auth>
                            <Suspense fallback={<Preloader />}>
                                <RemoveDuplicates />
                            </Suspense>
                        </Auth>
                    }
                />
                <Route
                    path="/settings"
                    element={
                        <Auth>
                            <Suspense fallback={<Preloader />}>
                                <Settings />
                            </Suspense>
                        </Auth>
                    }
                />
                <Route
                    path="/files"
                    element={
                        <Auth>
                            <Suspense fallback={<Preloader />}>
                                <Files />
                            </Suspense>
                        </Auth>
                    }
                />
                <Route
                    path="/logout"
                    element={
                        <Auth>
                            <Logout />
                        </Auth>
                    }
                />
            </Routes>
        </HashRouter>
    );
};

export default App;
