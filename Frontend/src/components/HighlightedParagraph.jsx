import PropTypes from "prop-types";

export const HighlightedParagraph = ({ text }) =>{
    return (
        <div className="px-4 my-4 xl:px-0 text-center text-3xl text-primary font-bold">
            { text }
        </div>
    )
}

HighlightedParagraph.propTypes = {
    text: PropTypes.string
};