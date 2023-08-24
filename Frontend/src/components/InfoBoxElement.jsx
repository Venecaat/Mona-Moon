import PropTypes from "prop-types";

export const InfoBoxElement = ({ text }) => {
    return (
        <div>
            { text }
        </div>
    )
}

InfoBoxElement.propTypes = {
    text: PropTypes.string
};