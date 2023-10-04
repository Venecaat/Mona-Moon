import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const Navbar = ({ email, lastName, firstName }) => {
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
                                                <li><Link to="/szolgaltatasok/zumba-fellepes">Zumba fellépés</Link></li>
                                            </ul>
                                        </details>
                                    </li>
                                    <li>
                                        <details>
                                            <summary>Telihold Anyaoltalom</summary>
                                            <ul className="text-secondary">
                                                <li><Link to="/szolgaltatasok/fitmummy-hastanc">Fitmummy várandós hastánc</Link></li>
                                                <li><Link to="/szolgaltatasok/fitmummy-latin-fitness">Fitmummy várandós latin fitness</Link></li>
                                                <li><Link to="/szolgaltatasok/dulai-tamogatas">Dúlai támogatás</Link></li>
                                                <li><Link to="/szolgaltatasok/gyermekagyas-gondoskodas">Gyermekágyas gondoskodás</Link></li>
                                                <li><Link to="/szolgaltatasok/csaszarmetszes-feldolgozo-csoport">Császármetszés feldolgozó csoport</Link></li>
                                                <li><Link to="/szolgaltatasok/szulesaldo-unnep">Szülésáldó ünnep</Link></li>
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
                                    <li><Link to="/bemutatkozas/hastánc-zumba">Hastánc - Zumba</Link></li>
                                    <li><Link to="/bemutatkozas/telihold-anyaoltalom">Telihold Anyaoltalom</Link></li>
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
                                        <li className="hover:text-accent"><Link to="/szolgaltatasok/zumba-fellepes">Zumba fellépés</Link></li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details>
                                    <summary>Telihold Anyaoltalom</summary>
                                    <ul className="text-secondary">
                                        <li className="hover:text-accent"><Link to="/szolgaltatasok/fitmummy-hastanc">Fitmummy várandós hastánc</Link></li>
                                        <li className="hover:text-accent"><Link to="/szolgaltatasok/fitmummy-latin-fitness">Fitmummy várandós latin fitness</Link></li>
                                        <li className="hover:text-accent"><Link to="/szolgaltatasok/dulai-tamogatas">Dúlai támogatás</Link></li>
                                        <li className="hover:text-accent"><Link to="/szolgaltatasok/gyermekagyas-gondoskodas">Gyermekágyas gondoskodás</Link></li>
                                        <li className="hover:text-accent"><Link to="/szolgaltatasok/csaszarmetszes-feldolgozo-csoport">Császármetszés feldolgozó csoport</Link></li>
                                        <li className="hover:text-accent"><Link to="/szolgaltatasok/szulesaldo-unnep">Szülésáldó ünnep</Link></li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </li>
                    <li><Link to="/orarend">Órarend</Link></li>
                    <li className="dropdown dropdown-hover">
                        <label tabIndex={0}>Bemutatkozás</label>
                        <ul className="menu dropdown-content bg-primary text-secondary rounded-box z-10 w-80 mr-0">
                            <li><Link to="/bemutatkozas/hastánc-zumba" className="hover:text-accent">Hastánc - Zumba</Link></li>
                            <li><Link to="/bemutatkozas/telihold-anyaoltalom" className="hover:text-accent">Telihold Anyaoltalom</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/kapcsolat">Kapcsolat</Link></li>
                </ul>
            </div>

            {/* ALWAYS VISIBLE */}
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
                    <ul className="menu dropdown-content bg-primary text-secondary rounded-box font-bold mt-3 lg:mt-0 p-2 z-10 w-52">
                        { !email ?
                            <div>
                                <li><Link to="/bejelentkezes" className="hover:text-accent">Bejelentkezés</Link></li>
                                <li><Link to="/regisztracio" className="hover:text-accent">Regisztráció</Link></li>
                            </div> : null
                        }
                        { email ?
                            (<div>
                                <Link to={"/profil/" + lastName + "-" + firstName}>
                                    <div className="text-base-100 px-4 hover:text-accent">
                                        <div className="avatar grid grid-cols-3 w-full max-h-14">
                                            <div className="w-12 max-h-12 rounded-full">
                                                <img src="/src/assets/images/profile_img_tmp_small.png" />
                                            </div>
                                            <div className="text-center col-span-2 max-h-14 w-full">
                                                <h5>{ lastName }</h5>
                                                <h5>{ firstName }</h5>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <hr className="w-11/12 mx-auto border-1 border-secondary rounded" />
                                <li><Link to="/kijelentkezes" className="hover:text-accent">Kijelentkezés</Link></li>
                            </div> ) : null
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

Navbar.propTypes = {
    email: PropTypes.string,
    lastName: PropTypes.string,
    firstName: PropTypes.string
};