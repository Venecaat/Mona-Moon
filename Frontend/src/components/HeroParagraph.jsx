import PropTypes from "prop-types";

export const HeroParagraph = ({ text, imgPath, imgAlt, imgRightSide }) => {
    return (
        <div className="hero">
            <div className={"hero-content flex-col " + (imgRightSide ? "md:flex-row-reverse" : "md:flex-row")}>
                <img src={ imgPath } className="max-w-sm rounded-lg shadow-2xl" alt={ imgAlt } />
                <div className="leading-10">
                    { text }
                </div>
            </div>
        </div>
    )
}

HeroParagraph.defaultProps = {
    imgRightSide: true
}

HeroParagraph.propTypes = {
    text: PropTypes.string,
    imgPath: PropTypes.string,
    imgAlt: PropTypes.string,
    imgRightSide: PropTypes.bool
};