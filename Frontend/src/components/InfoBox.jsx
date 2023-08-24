import PropTypes from "prop-types";

export const InfoBox = ({ children }) => {
    return (
        <div className="grid grid-cols-1 bg-primary p-5 text-info xl:rounded-box text-center text-lg gap-4">
            { children }
        </div>
    )
}

InfoBox.propTypes = {
    children: PropTypes.any
};