import { UsersApi } from "../../api/UsersApi.jsx";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export const Logout = ({ setEmail }) => {
    const navigate = useNavigate();
    const logout = async () => {
        await UsersApi.logout();

        setEmail(null);
        sessionStorage.clear();
        navigate("/");
    }

    logout();
}

Logout.propTypes = {
    setEmail: PropTypes.func
}