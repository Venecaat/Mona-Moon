import PropTypes from "prop-types";

export const WarningBoxElement = ({ text }) => {
    return (
        <div>
            { text }
        </div>
    )
}

WarningBoxElement.propTypes = {
    text: PropTypes.string
};