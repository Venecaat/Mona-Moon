import PropTypes from "prop-types";

export const OLParagraph = ({ title, children }) => {
    return (
        <div className="px-4 xl:px-0">
            <h2 className="text-primary font-bold text-3xl">{ title }</h2>
            <ol className="italic grid grid-cols-1 gap-2 mt-3 md:ml-11 md:list-decimal">
                { children }
            </ol>
        </div>
    )
}

OLParagraph.propTypes = {
    title: PropTypes.string,
    children: PropTypes.any
};