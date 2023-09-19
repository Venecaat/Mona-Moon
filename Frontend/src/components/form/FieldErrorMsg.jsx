import PropTypes from "prop-types";

export const FieldErrorMsg = ( { errorMsg } ) => {
    return (
        <div className="text-error text-lg">
            { errorMsg }
        </div>
    )
}

FieldErrorMsg.propTypes = {
    errorMsg: PropTypes.string
};