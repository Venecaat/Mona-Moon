import { Link } from "react-router-dom";
import { HeaderDividerLine } from "../../../components/HeaderDividerLine.jsx";

export const FitmummyBellyDance = () => {
    return (
        <div className="text-xl font-semibold">
            <div className="bg-base">
                <div className="hero-content flex-col md:flex-row gap-0 lg:gap-4">
                    <div>
                        <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left text-primary">Fitmummy várandós hastánc</h1>
                    </div>
                    <img src="/src/assets/images/fitmummy-belly-dance.png" className="max-w-sm shadow-2xl scale-90 lg:scale-100" alt="Fitmummy várandós hastánc" />
                </div>
            </div>
            <HeaderDividerLine />
            <div className="grid grid-cols-1 mb-6 text-center md:text-left text-2xl gap-7">
                <div className="px-4 xl:px-0">
                    Könnyed, lágy, nőies mozgásforma, amely finom mozgásaival kellően átmozgatja az egész testet,
                    kiemelten a csípő, a has és a medence izmait, ezáltal finoman ringatva a babádat a pocakodban.
                    Miközben te táncolsz, és jól érzed magad, a babád is ellazulhat a kellemes keleti ritmusokra.
                </div>
                <div className="px-4 xl:px-0">
                    Az órákat rekreációs sportoktatóként, hastánc oktatói fakultációval (OKJ) és fitmummy prenatális trénerként tartom.
                </div>
                <div className="px-4 xl:px-0">
                    A fitmummy programról itt olvashatsz bővebben: <Link to="http://fitmummy.hu/" className="text-primary hover:text-accent ease-in duration-100 underline">Fitmummy.hu</Link>
                </div>
                <div className="px-4 xl:px-0">
                    <h2 className="text-primary font-bold text-3xl">Kinek ajánlom?</h2>
                    <div className="md:ml-5 mt-3">
                        Ha a hagyományos torna, edzés nem a te világod, de szeretnél mozogni. Jobban szereted a
                        táncos-zenés mozgásformákat. Betöltött <span className="font-bold">12.</span> terhességi héttől javaslom.
                    </div>
                </div>
                <div className="px-4 xl:px-0">
                    <h2 className="text-primary font-bold text-3xl">Mit adhat neked a hastánc?</h2>
                    <ul className="md:ml-5 mt-3 grid grid-cols-1 gap-4">
                        <li>
                            Segíthet a harmonikus testtartás fenntartásában. Ellensúlyozza az ülő életmód,
                            a várandós lét testtartásbeli változásait. Testtudatosságra tanít,
                            ezáltal megkönnyítheti viselni a várandósság terheit és a szülést.
                        </li>
                        <li>
                            A hát- és derékfájást csökkenti, akár meg is szüntetheti.
                            Jótékony hatása van a keringési és a légzési rendszerre.
                            Erősíti a hát alsó részét, dolgoztatja a has izmait, a combot és a feneket is tónusban tartja.
                        </li>
                        <li>
                            A medence környéki izmok és gátizmok feszességét oldja, ami a harmadik trimeszterben
                            a szülés közeledtével különösen fontos. Segíti a női szervek egészséges működését.
                            Szülésnél a lágy csípőkörök, nyolcasok, hullámok segíthetik a babádat a megfelelő pozícióba helyezkedni.
                            A tánc/hastánc mivel zenére történik, jelentős hatással van a pszichére is.
                            Feszültségoldó hatása elvitathatatlan, ami várandósan egy nagyon fontos dolog.
                            Azért különleges, mert arra tanítja a nőket, hogy hogyan tudják elfogadni, szépnek látni magukat.
                            Segít az önbizalom kialakításában, a nőiesség megélésében.
                        </li>
                        <li className="font-bold">
                            Harmónia testnek és léleknek egyaránt.
                        </li>
                    </ul>
                </div>
                <div className="px-4 xl:px-0">
                    <h2 className="text-primary font-bold text-3xl">Az óra felépítése</h2>
                    <ol className="md:ml-11 mt-3 italic grid grid-cols-1 gap-2 md:list-decimal">
                        <li>Bemelegítés, mobilizáció légzőtornával</li>
                        <li>Hastánc tréning 1-4 zeneszámmal</li>
                        <li>Mozdulattanulás és mini koreográfia</li>
                        <li>Nyújtás és gátizomlazítás</li>
                        <li>Gátizomtorna (erősítés)</li>
                        <li>Relaxáció</li>
                    </ol>
                </div>
                <div className="px-4 xl:px-0">
                    Egy változatos, jól felépített hastánc órára számíthatsz, ami a megváltozott állapot
                    sajátosságait figyelembe véve kellően átmozgat, és támogatja a testedben történő változásokkal
                    való adaptálódást. Segít fittnek maradni.
                </div>
                <div className="px-4 xl:px-0">
                    <h2 className="text-primary font-bold text-3xl">Mit hozz magaddal?</h2>
                    <ul className="md:ml-5 mt-3 italic grid grid-cols-1 gap-2">
                        <li>Kényelmes, jól szellőző felsőt, nadrágot/szoknyát és zoknit vagy táncpapucsot - ha nem vagy fázós, akkor mezítláb is táncolhatsz</li>
                        <li>Rázóöv - helyettesíthető egy nagyobb kendővel is, amit a csípődre tudsz kötni</li>
                        <li>Egy üveg vízre is szükséged lesz</li>
                        <li>Hasznos lehet egy törülköző is, amit a jógaszőnyegre tudsz teríteni</li>
                    </ul>
                </div>
                <div className="grid grid-cols-1 bg-primary p-5 text-info xl:rounded-box text-center text-lg gap-4">
                    <div>
                        Az órán való részvétel nem igényel semmilyen előképzettséget.
                    </div>
                </div>
                <div className="grid grid-cols-1 bg-primary p-5 text-info xl:rounded-box text-center text-lg gap-4">
                    <div>
                        Mindig figyelj a tested jelzéseire, ha úgy érzed pihenned kell, akkor pihenj, ha innod kell, igyál.
                    </div>
                    <div>
                        Ha valamelyik mozdulat nem esik jól, akkor állj meg egy kicsit, hagyd ki, helyettesítsd mással.
                    </div>
                    <div>
                        Ha szükséges, akkor csökkentsd a mozgás intenzitását például kisebb lépésekkel, a karmozdulatok kihagyásával stb.
                    </div>
                </div>
                <div className="px-4 my-4 xl:px-0 text-center text-3xl text-primary font-bold">
                    Várlak szeretettel akkor is, ha korábban még nem táncoltál/hastáncoltál!
                </div>
                <div className="grid grid-cols-1 bg-primary p-5 text-warning xl:rounded-box text-center gap-4">
                    <div>
                        Az órákon saját felelősségre veszel részt.
                    </div>
                    <div>
                        Amennyiben egészségügyi problémád, panaszod van, konzultálj kezelőorvosoddal.
                        Az órákon való részvétel nem helyettesíti az orvossal, gyógytornásszal való konzultációt.
                    </div>
                    <div>
                        A fentieket a részvételeddel elfogadottnak tekinted.
                    </div>
                </div>
            </div>
        </div>
    )
}