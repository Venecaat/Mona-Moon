import PropTypes from "prop-types";
import { Footer } from "./Footer.jsx";
import { Navbar } from "./Navbar.jsx";

export const Layout = ({ children }) => {
    return (
        <div className="flex flex-col justify-between h-screen">
            <Navbar />
                <main className="max-w-5xl mx-auto my-6">
                    { children }
                </main>
            <Footer />
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.any
};