import PropTypes from "prop-types";

export const HeroParagraph = ({ text, title, titleExtraClasses, imgPath, imgAlt, imgRightSide }) => {
    return (
        <div className="hero">
            <div className={"hero-content flex-col " + (imgRightSide ? "lg:flex-row-reverse" : "lg:flex-row")}>
                <img src={ imgPath } className="max-w-sm rounded-lg shadow-2xl" alt={ imgAlt } />
                <div className="leading-10 text-center">
                    <h2 className={"text-primary font-bold text-3xl mb-4 " + titleExtraClasses}>{ title }</h2>
                    <p>
                        { text }
                    </p>
                </div>
            </div>
        </div>
    )
}

HeroParagraph.defaultProps = {
    titleExtraClasses: "",
    imgRightSide: true
}

HeroParagraph.propTypes = {
    text: PropTypes.string,
    title: PropTypes.string,
    titleExtraClasses: PropTypes.string,
    imgPath: PropTypes.string,
    imgAlt: PropTypes.string,
    imgRightSide: PropTypes.bool
};