import PropTypes from "prop-types";

export const ULParagraph = ({ title, extraClasses, children }) => {
    return (
        <div className="px-4 xl:px-0">
            <h2 className="text-primary font-bold text-3xl">{ title }</h2>
            <ul className={"italic grid grid-cols-1 gap-2 mt-3 md:ml-5 " + extraClasses}>
                { children }
            </ul>
        </div>
    )
}

ULParagraph.propTypes = {
    title: PropTypes.string,
    extraClasses: PropTypes.string,
    children: PropTypes.any
};