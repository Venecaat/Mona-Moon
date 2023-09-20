import PropTypes from "prop-types";

export const FieldErrorMsg = ( { errorMsg, extraClasses } ) => {
    return (
        <div className={"text-error text-lg " + extraClasses}>
            { errorMsg }
        </div>
    )
}

FieldErrorMsg.defaultProps = {
    extraClasses: ""
}

FieldErrorMsg.propTypes = {
    errorMsg: PropTypes.string,
    extraClasses: PropTypes.string
};