import PropTypes from "prop-types";

export const ServiceHeader = ({ title, imgPath, imgAlt }) => {
    return (
        <div>
            <div className="hero-content flex-col md:flex-row gap-0 lg:gap-4">
                <div>
                    <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left text-primary">{ title }</h1>
                </div>
                <img src={ imgPath } className="max-w-sm shadow-2xl scale-90 lg:scale-100" alt={ imgAlt } />
            </div>
        </div>
    )
}

ServiceHeader.propTypes = {
    title: PropTypes.string,
    imgPath: PropTypes.string,
    imgAlt: PropTypes.string
};