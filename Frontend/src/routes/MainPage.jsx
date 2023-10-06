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
            <Header title="Hastánc - Zumba" classes="text-center" />
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-y-5">
                <ServiceCard imageLink="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" linkTitle="Hastánc Órák" />
                <ServiceCard imageLink="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" linkTitle="Hastánc Fellépés" />
                <ServiceCard imageLink="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" linkTitle="Zumba Órák" />
                <ServiceCard imageLink="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" linkTitle="Zumba Fellépés" />
            </div>
            <Header title="Telihold Anyaoltalom" classes="text-center" />
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-y-5">
                <ServiceCard imageLink="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" linkTitle="Fitmummy Várandós Hastánc" />
                <ServiceCard imageLink="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" linkTitle="Fitmummy Várandós Latin Fitness" />
                <ServiceCard imageLink="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" linkTitle="Dúlai Támogatás" />
                <ServiceCard imageLink="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" linkTitle="Gyermekágyas Gondoskodás" />
                <ServiceCard imageLink="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" linkTitle="Császármetszés Feldolgozó Csoport" />
                <ServiceCard imageLink="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" linkTitle="Szülésáldó Ünnep" />
            </div>
        </div>
    )
}