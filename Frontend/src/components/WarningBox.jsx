import PropTypes from "prop-types";

export const WarningBox = ({ children }) => {
    return (
        <div className="grid grid-cols-1 bg-primary p-5 text-warning xl:rounded-box text-center gap-4">
            { children }
        </div>
    )
}

WarningBox.propTypes = {
    children: PropTypes.any
};