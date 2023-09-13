import PropTypes from "prop-types";

export const OLParagraph = ({ title, children }) => {
    return (
        <div className="md:px-4 xl:px-0">
            <h2 className="px-4 md:px-0 text-primary font-bold text-3xl">{ title }</h2>
            <ol className="italic grid grid-cols-1 md:gap-4 mt-3 md:ml-11 md:list-decimal md:[&>*]:py-0 [&>*]:py-4 [&>*]:px-4
                    md:[&>*]:px-0 [&>*:nth-child(even)]:bg-base-200 md:[&>*:nth-child(even)]:bg-base-100">
                { children }
            </ol>
        </div>
    )
}

OLParagraph.propTypes = {
    title: PropTypes.string,
    children: PropTypes.any
};