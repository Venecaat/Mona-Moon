import { useEffect } from "react";
import { Footer } from "./Footer.jsx";
import { Navbar } from "./Navbar.jsx";
import PropTypes from "prop-types";

export const Layout = ({ children, email, lastName, firstName, lowerLastName, lowerFirstName }) => {
    useEffect(() => {
        const backToTopButton = document.getElementById("backToTop");

        const checkScroll = () => {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                backToTopButton.style.display = "inline-flex";
            } else {
                backToTopButton.style.display = "none";
            }
        }
        window.onscroll = checkScroll;
    })

    return (
        <div className="flex flex-col justify-between h-screen">
            <Navbar email={ email } lastName={ lastName } firstName={ firstName } lowerLastName={lowerLastName} lowerFirstName={lowerFirstName} />
                <main className="max-w-5xl w-full mx-auto my-6">
                    { children }
                </main>
            <button id="backToTop" className="btn btn-circle border-0 bg-secondary hover:bg-accent text-primary fixed right-8 bottom-20 w-14 h-14 hidden"
                    onClick={() => window.scrollTo(0, 0)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none"
                     stroke="CurrentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 19V6M5 12l7-7 7 7"/>
                </svg>
            </button>
            <Footer />
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.any,
    email: PropTypes.string,
    lastName: PropTypes.string,
    firstName: PropTypes.string,
    lowerLastName: PropTypes.string,
    lowerFirstName: PropTypes.string
};