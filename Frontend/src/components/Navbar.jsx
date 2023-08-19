import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className="navbar bg-primary text-primary-content max-h-12">
            {/* TABLET/MOBILE MENU */}
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
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
                                                <li><Link to="/szolgaltatasok/hastanc-orak">Hastánc órák</Link></li>
                                                <li><Link to="/szolgaltatasok/hastanc-fellepes">Hastánc fellépés</Link></li>
                                                <li><Link to="/szolgaltatasok/zumba-orak">Zumba órák</Link></li>
                                            </ul>
                                        </details>
                                    </li>
                                    <li>
                                        <details>
                                            <summary>Telihold Anyaoltalom</summary>
                                            <ul className="text-secondary">
                                                <li><a>Fitmummy várandós hastánc</a></li>
                                                <li><a>Fitmummy várandós latin fitness</a></li>
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

            {/* NORMAL MENU */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg font-bold">
                    <li className="dropdown dropdown-hover">
                        <label tabIndex={0}>Szolgáltatások</label>
                        <ul className="menu dropdown-content bg-primary rounded-box z-10 w-80 mr-0">
                            <li>
                                <details>
                                    <summary>Hastánc - Zumba</summary>
                                    <ul className="text-secondary">
                                        <li className="hover:text-accent"><Link to="/szolgaltatasok/hastanc-orak">Hastánc órák</Link></li>
                                        <li className="hover:text-accent"><Link to="/szolgaltatasok/hastanc-fellepes">Hastánc fellépés</Link></li>
                                        <li className="hover:text-accent"><Link to="/szolgaltatasok/zumba-orak">Zumba órák</Link></li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details>
                                    <summary>Telihold Anyaoltalom</summary>
                                    <ul className="text-secondary">
                                        <li className="hover:text-accent"><a>Fitmummy várandós hastánc</a></li>
                                        <li className="hover:text-accent"><a>Fitmummy várandós latin fitness</a></li>
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
                <div className="dropdown dropdown-end dropdown-hover">
                    <label tabIndex="0" className="btn btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 lg:h-7 lg:w-7 text-primary-content" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3"/>
                            <circle cx="12" cy="10" r="3"/><circle cx="12" cy="12" r="10"/>
                        </svg>
                    </label>
                    <ul className="menu dropdown-content mt-3 lg:mt-0 p-2 z-10 w-40 shadow bg-primary font-bold rounded-box">
                        <li><Link to="/bejelentkezes">Bejelentkezés</Link></li>
                        <li><Link to="/regisztracio">Regisztráció</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}