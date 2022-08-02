import { useSelector } from "react-redux";

const Dashboard = () => {
    const { user_info } = useSelector((state) => state.user);

    return (
        <>
            <h3>Welcome {`${user_info.first_name} ${user_info.last_name}`}</h3>
        </>
    );
};

export default Dashboard;
