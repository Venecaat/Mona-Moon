import PropTypes from "prop-types";

export const ServiceCard = ( props ) => {
    return (
        <div className="card card-compact w-96 bg-primary shadow-xl">
            <figure><img src={ props.imageLink } alt="Shoes" /></figure>
            <div className="card-body text-center">
                <a className="underline underline-offset-4 lg:no-underline text-2xl font-semibold text-secondary hover:text-accent hover:cursor-pointer">
                    { props.linkTitle }
                </a>
            </div>
        </div>
    )
}

ServiceCard.propTypes = {
    imageLink: PropTypes.string,
    linkTitle: PropTypes.string
};