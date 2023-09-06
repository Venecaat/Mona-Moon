import PropTypes from "prop-types";

export const ULParagraph = ({ title, extraClasses, children, gap }) => {
    return (
        <div className="px-4 xl:px-0">
            <h2 className="text-primary font-bold text-3xl">{ title }</h2>
            <ul className={"italic grid grid-cols-1 gap-"+ gap + " mt-3 md:ml-5 " + extraClasses}>
                { children }
            </ul>
        </div>
    )
}

ULParagraph.defaultProps = {
    extraClasses: "",
    gap: 2
}

ULParagraph.propTypes = {
    title: PropTypes.string,
    extraClasses: PropTypes.string,
    children: PropTypes.any,
    gap: PropTypes.number
};