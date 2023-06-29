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
                    <ul className="menu menu-sm dropdown-content mt-3 p-2 z-10 w-80 shadow bg-primary font-bold rounded-box">
                        <li><Link to="/">Főoldal</Link></li>
                        <li>
                            <details>
                                <summary>Szolgáltatások</summary>
                                <ul>
                                    <li>
                                        <details>
                                            <summary>Hastánc - Zumba</summary>
                                            <ul className="text-secondary">
                                                <li><a>Hastánc órák</a></li>
                                                <li><a>Hastánc fellépés</a></li>
                                                <li><a>Zumba órák</a></li>
                                            </ul>
                                        </details>
                                    </li>
                                    <li>
                                        <details>
                                            <summary>Telihold Anyaoltalom</summary>
                                            <ul className="text-secondary">
                                                <li><a>Fitmommy várandós hastánc</a></li>
                                                <li><a>Fitmommy várandós latin fitness</a></li>
                                                <li><a>Dúlai támogatás</a></li>
                                                <li><a>Gyermekágyas gondoskodás</a></li>
                                                <li><a>Császármetszés feldolgozó csoport</a></li>
                                                <li><a>Szülésáldó ünnep</a></li>
                                            </ul>
                                        </details>
                                    </li>
                                </ul>
                            </details>
                        </li>
                        <li><Link to="/orarend">Órarend</Link></li>
                        <li>
                            <details>
                                <summary>Bemutatkozás</summary>
                                <ul className="text-secondary">
                                    <li><a>Hastánc - Zumba</a></li>
                                    <li><a>Telihold Anyaoltalom</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><Link to="/kapcsolat">Kapcsolat</Link></li>
                    </ul>
                </div>
                <Link to="/" className="hidden lg:btn lg:btn-ghost lg:normal-case lg:text-xl">Mona Moon</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg font-bold">
                    <li className="dropdown dropdown-hover">
                        <label tabIndex={0}>Szolgáltatások</label>
                        <ul className="menu dropdown-content bg-primary rounded-box z-10 w-80 mr-0">
                            <li>
                                <details>
                                    <summary>Hastánc - Zumba</summary>
                                    <ul className="text-secondary">
                                        <li className="hover:text-accent"><a>Hastánc órák</a></li>
                                        <li className="hover:text-accent"><Link to="/szolgaltatasok/hastanc-fellepes">Hastánc fellépés</Link></li>
                                        <li className="hover:text-accent"><a>Zumba órák</a></li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details>
                                    <summary>Telihold Anyaoltalom</summary>
                                    <ul className="text-secondary">
                                        <li className="hover:text-accent"><a>Fitmommy várandós hastánc</a></li>
                                        <li className="hover:text-accent"><a>Fitmommy várandós latin fitness</a></li>
                                        <li className="hover:text-accent"><a>Dúlai támogatás</a></li>
                                        <li className="hover:text-accent"><a>Gyermekágyas gondoskodás</a></li>
                                        <li className="hover:text-accent"><a>Császármetszés feldolgozó csoport</a></li>
                                        <li className="hover:text-accent"><a>Szülésáldó ünnep</a></li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </li>
                    <li><Link to="/orarend">Órarend</Link></li>
                    <li className="dropdown dropdown-hover">
                        <label tabIndex={0}>Bemutatkozás</label>
                        <ul className="menu dropdown-content bg-primary text-secondary rounded-box z-10 w-80 mr-0">
                            <li className="hover:text-accent"><a>Hastánc - Zumba</a></li>
                            <li className="hover:text-accent"><a>Telihold Anyaoltalom</a></li>
                        </ul>
                    </li>
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