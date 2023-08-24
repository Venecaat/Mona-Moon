import PropTypes from "prop-types";

export const NormalParagraph = ({ text, extraClasses }) =>{
    return (
        <div className={"px-4 xl:px-0 " + extraClasses}>
            { text }
        </div>
    )
}

NormalParagraph.propTypes = {
    text: PropTypes.string,
    extraClasses: PropTypes.string
};