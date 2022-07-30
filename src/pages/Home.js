import { useSelector } from "react-redux";

const Home = () => {
    const api_base_url = useSelector((state) => state.app_data.api_base_url);

    return (
        <>
            <h1>Landing Page</h1>
            <p>Api base url: {api_base_url}</p>
        </>
    );
};

export default Home;
