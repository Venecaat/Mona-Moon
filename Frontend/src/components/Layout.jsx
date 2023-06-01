import PropTypes from "prop-types";
import {Footer} from "./Footer.jsx";

export const Layout = ({ children }) => {
    return (
        <div>
            <div className="text-neutral w-6/12 border-2 text-center font-bold text-3xl p-2 border-accent-content bg-info">Navbar</div>
                <main>
                    { children }
                </main>
            <Footer />
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.any
};