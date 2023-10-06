import { useNavigate } from "react-router-dom";
import { UsersApi } from "../../api/UsersApi.jsx";
import PropTypes from "prop-types";

export const Logout = ({ setEmail, setLastName, setFirstName }) => {
    const navigate = useNavigate();
    const logout = async () => {
        await UsersApi.logout();

        setEmail(null);
        setLastName(null);
        setFirstName(null);

        sessionStorage.clear();
        navigate("/");
    }

    logout();
}

Logout.propTypes = {
    setEmail: PropTypes.func,
    setLastName: PropTypes.func,
    setFirstName: PropTypes.func
}