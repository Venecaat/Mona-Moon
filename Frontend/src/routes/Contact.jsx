import {Header} from "../components/mainpage/Header.jsx";
import {Link} from "react-router-dom";

export const Contact = () => {
    return (
        <div>
            <Header title="Elérhetőségek" classes="pl-4" />
            <div className="flex flex-col w-full text-xl font-semibold">
                <div className="flex">
                    <div className="pl-4">E-mail:</div>
                    <div className="ml-5">monamoon88@gmail.com</div>
                </div>
                <div className="flex">
                    <div className="pl-4">Telefon:</div>
                    <div className="ml-3">06-70-416-5279</div>
                </div>
            </div>
            <div className="pl-4 mt-12">
                <div className="text-3xl font-semibold mt-5">Kövess a közösségi oldalakon</div>
                <div className="flex flex-col w-full text-xl font-semibold mt-3 pl-5">
                    <div className="flex">
                        <div className="">Hastánc - Zumba </div>
                        <div className="ml-3 flex gap-3 items-center">
                            <Link to="https://www.facebook.com/MonaMoon.Bellydance.Zumba">
                                <svg className="fill-white hover:fill-secondary ease-in duration-200" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 24 24">
                                    <path d="M17,3H7C4.791,3,3,4.791,3,7v10c0,2.209,1.791,4,4,4h5.621v-6.961h-2.343v-2.725h2.343V9.309 c0-2.324,1.421-3.591,3.495-3.591c0.699-0.002,1.397,0.034,2.092,0.105v2.43h-1.428c-1.13,0-1.35,0.534-1.35,1.322v1.735h2.7 l-0.351,2.725h-2.365V21H17c2.209,0,4-1.791,4-4V7C21,4.791,19.209,3,17,3z"></path>
                                </svg>
                            </Link>
                            <Link to="https://www.instagram.com/mona_moon_hastanc_zumba/?igshid=ZDc4ODBmNjlmNQ%3D%3D&fbclid=IwAR1_PmGI6bQySkChfx7p5YKMTLqGUm3CscmDKDM0sGvAbNDQXGCRzOBl13c">
                                <svg className="fill-white hover:fill-secondary ease-in duration-200" xmlns="http://www.w3.org/2000/svg" width="32" height="40" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="flex mt-1 items-center">
                        <div className="">Telihold Anyaoltalom</div>
                        <div className="ml-3 flex gap-3">
                            <Link to="https://www.facebook.com/teliholdanyaoltalom">
                                <svg className="fill-white hover:fill-secondary ease-in duration-200" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 24 24">
                                    <path d="M17,3H7C4.791,3,3,4.791,3,7v10c0,2.209,1.791,4,4,4h5.621v-6.961h-2.343v-2.725h2.343V9.309 c0-2.324,1.421-3.591,3.495-3.591c0.699-0.002,1.397,0.034,2.092,0.105v2.43h-1.428c-1.13,0-1.35,0.534-1.35,1.322v1.735h2.7 l-0.351,2.725h-2.365V21H17c2.209,0,4-1.791,4-4V7C21,4.791,19.209,3,17,3z"></path>
                                </svg>
                            </Link>
                            <Link to="https://www.instagram.com/telihold_anyaoltalom/?igshid=ZDc4ODBmNjlmNQ%3D%3D&fbclid=IwAR1elhAGJ9wTMkA-DOujumrDzhIgqe8YijtvESJ1bYT2ukhLLhUf8dY7XJE">
                                <svg className="fill-white hover:fill-secondary ease-in duration-200" xmlns="http://www.w3.org/2000/svg" width="32" height="40" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="flex mt-1 items-center">
                        <div className="">88monamoon</div>
                        <div className="ml-3 flex gap-3">
                            <Link to="https://www.youtube.com/@88monamoon">
                                <svg className="fill-white hover:fill-secondary ease-in duration-200" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 24 24">
                                    <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,14.598V9.402c0-0.385,0.417-0.625,0.75-0.433l4.5,2.598c0.333,0.192,0.333,0.674,0,0.866l-4.5,2.598 C10.417,15.224,10,14.983,10,14.598z"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}