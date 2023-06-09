import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className="navbar bg-primary text-primary-content">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h8m-8 6h16"/>
                        </svg>
                    </label>
                    <ul tabIndex="0"
                        className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52 font-bold z-10">
                        <li><a>Órarend</a></li>
                        <li><Link to="/bemutatkozas">Bemutatkozás</Link></li>
                        <li><Link to="/kapcsolat">Kapcsolat</Link></li>
                    </ul>
                </div>
                <Link to="/" className="hidden lg:btn lg:btn-ghost lg:normal-case lg:text-xl">Mona Moon</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg font-bold">
                    <li><a>Órarend</a></li>
                    <li><Link to="/bemutatkozas">Bemutatkozás</Link></li>
                    <li><Link to="/kapcsolat">Kapcsolat</Link></li>
                </ul>
            </div>
            <div className="navbar-center lg:hidden flex">
                <Link to="/" className="btn btn-ghost normal-case text-xl">Mona Moon</Link>
            </div>
            <div className="navbar-end">
                <a className="btn">Bejelentkezés</a>
            </div>
        </div>
    )
}