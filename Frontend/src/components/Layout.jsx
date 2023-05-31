import PropTypes from "prop-types";

export const Layout = ({ children }) => {
    return (
        <div>
            <div>Navbar</div>
                <main>
                    { children }
                </main>
            <div>Footer</div>
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.any
};