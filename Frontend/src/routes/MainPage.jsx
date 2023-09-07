import { Header } from "../components/mainpage/Header.jsx";
import { ServiceCard } from "../components/mainpage/ServiceCard.jsx";

export const MainPage = () => {
    return (
        <div className="text-xl font-semibold">
            <div className="bg-base">
                <div className="hero-content flex-col md:flex-row gap-0 lg:gap-4">
                    <img src="/src/assets/images/Intro.png" className="max-w-sm rounded-full shadow-2xl scale-90 lg:scale-100" />
                    <div>
                        <h1 className="text-6xl font-bold text-center md:text-left text-primary">Mona Moon</h1>
                        <p className="py-6 text-center md:text-left">
                            Beczkó Mónika vagyok. Orientális táncos, hastánc és zumba fitness oktató. Dúla, önkéntes szoptatási segítő,
                            gyermekágyas segítő, pre- és postnatal mozgás tréner, "Szülésnap" császármetszés feldolgozó csoportvezető,
                            szülésáldó ünnep (blessingway) szervező, és nem utolsó sorban egy csodás kislány Édesanyja.
                        </p>
                    </div>
                </div>
            </div>
            <Header title="Mi érdekel?" classes="text-center" />
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-y-5">
                <ServiceCard imageLink="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" linkTitle="Hastánc - Zumba" />
                <ServiceCard imageLink="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" linkTitle="Telihold Anyaoltalom" />
            </div>
        </div>
    )
}