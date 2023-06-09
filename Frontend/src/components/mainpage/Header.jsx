import PropTypes from "prop-types";

export const Header = ( props ) => {
    return (
        <div className="w-full text-center text-3xl bg-primary text-primary-content lg:rounded-box py-2 mb-3 mt-4 font-bold">
            <h2>{ props.title }</h2>
        </div>
    )
}

Header.propTypes = {
    title: PropTypes.string
};