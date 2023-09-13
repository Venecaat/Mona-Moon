import PropTypes from "prop-types";

export const ULParagraph = ({ title, extraClasses, children, gap }) => {
    return (
        <div className="md:px-4 xl:px-0">
            <h2 className="px-4 md:px-0 text-primary font-bold text-3xl">{ title }</h2>
            <ul className={"italic grid grid-cols-1 md:gap-"+ gap + " mt-3 md:ml-5 md:[&>*]:py-0 [&>*]:py-4 [&>*]:px-4 md:[&>*]:px-0 " +
                "[&>*:nth-child(even)]:bg-base-200 md:[&>*:nth-child(even)]:bg-base-100 " + extraClasses}>
                { children }
            </ul>
        </div>
    )
}

ULParagraph.defaultProps = {
    extraClasses: "",
    gap: 4
}

ULParagraph.propTypes = {
    title: PropTypes.string,
    extraClasses: PropTypes.string,
    children: PropTypes.any,
    gap: PropTypes.number
};