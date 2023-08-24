import { Link } from "react-router-dom";
import { HeaderDividerLine } from "../../../components/HeaderDividerLine.jsx";
import { NormalParagraph } from "../../../components/NormalParagraph.jsx";

export const Childcare = () => {
    return (
        <div className="text-xl font-semibold">
            <div className="bg-base">
                <div className="hero-content flex-col md:flex-row gap-0 lg:gap-4">
                    <div>
                        <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left text-primary">Gyermekágyas gondoskodás</h1>
                    </div>
                    <img src="/src/assets/images/childcare.png" className="max-w-sm shadow-2xl scale-90 lg:scale-100" alt="Gyermekágyas gondoskodás" />
                </div>
            </div>
            <HeaderDividerLine />
            <div className="grid grid-cols-1 mb-6 text-center md:text-left text-2xl gap-7">
                <NormalParagraph text="Hogy mi fán terem a gyermekágyas segítés? Mit csinál egy gyermekágyas dúla/segítő?" />
                <NormalParagraph text="Ha egyszerű akarok lenni, akkor erre az a válaszom, hogy azt, amiben megállapodtok. Ezzel nem mondtam sok újat, igaz?
                    A helyzet az, hogy minden család és segítő más, így némiben eltérőek lehetnek az igények és a vállalások is." />
                <NormalParagraph text="Ha engem szeretnél segítődnek, akkor első körben küldök neked egy kérdőívet, ami alapján felmérem
                    az igényeidet/igényeiteket, illetve információt adok magamról, arról, hogy mi az, amit tudok nyújtani.
                    Ha ez alapján szimpatikusak vagyunk egymásnak, akkor tovább tudunk lépni a személyes találkozásra, majd az elköteleződésre." />
                <div className="px-4 xl:px-0">
                    <h2 className="text-primary font-bold text-3xl">Miben is lehet szükség segítségre a gyermekágyas időszakban?</h2>
                    <ol start="0" className="md:ml-11 mt-3 italic grid grid-cols-1 gap-2 md:list-decimal">
                        <li>
                            <h3 className="underline mb-4">Ismerkedés, összehangolódás</h3>
                            <div>
                                Érdemes megismerkedni a leendő segítővel már a várandósság utolsó időszakában.
                                Már ekkor is jól jöhet a segítség a háztartásban, a nagyobb gyerekek lefoglalásában,
                                és a baba érkezésére való felkészülésben.
                                Jó, ha a segítő előzetesen megismeri a család szokásait, elvárásait, kiismeri magát a lakásban.
                                Így a baba megszületése után már nem idegenként, hanem ismerősként lép be a térbe.
                                Ez sokban megkönnyítheti mindenki dolgát, gördülékennyé tudja tenni a mindennapokat.
                            </div>
                        </li>
                        <li>
                            <h3 className="underline my-4">Háztartás</h3>
                            <div>
                                A gyermekágyas időszak nem a csillogó-villogó háztartásról, hanem az összehangolódásról,
                                pihenésről szól. De van, hogy ezt nem könnyű elengedni, és teljesen nem is lehet.
                                De ez nem az anya feladata kell, hogy legyen az első hetekben.
                                Jól használható a segítség kisebb háztartási munkákban.
                                Pl: mosogatni, berakni egy mosást, kiteregetni, felporszívózni, ételt hozni, stb.
                                Miközben te a babáddal foglalkozol, és segíted a tested regenerálódását és
                                gyógyulását az után a hatalmas munka (várandósság és szülés) után, amit elvégzett,
                                a segítő le tudja venni a válladról a háztartás terheit.
                            </div>
                        </li>
                        <li>
                            <h3 className="underline my-4">Lelki támogatás</h3>
                            <div>
                                A várva várt kisbaba megérkezése után minden, de tényleg minden megváltozik.
                                Pl: a test, az életritmus, a szerepek, stb. Van, aki nehezen éli meg, hogy semmi sem lesz
                                ugyanolyan mint előtte, egy új élet függ teljes mértékben tőle.
                                Új szerepben, új helyzetekben kell helytállni, megfelelni. Ez egy normatív krízis.
                                Azaz a normál életfolyamatok változásából adódó krízis, aminek bekövetkezése normális,
                                de ettől még lehet nehéz. Erre még rátehet egy lapáttal a hormonok tánca.
                                Nehéz szülésélmény is állhat a háttérben, ami kapcsán szintén elkél a támogatás,
                                az értő figyelem, az ítélkezésmentes meghallgatás.
                            </div>
                        </li>
                        <li>
                            <h3 className="underline my-4">Anyakényeztetés</h3>
                            <div>
                                Ahhoz, hogy gondoskodni tudj a babáról, valakinek rólad is gondoskodnia kell.
                                Egy jó gyermekágyas segítő figyel arra, hogy az anya eleget egyen, igyon,
                                kényelmes helyen üljön, feküdjön. Jó szolgálatot tehet a nagyobb gyermekek lefoglalása,
                                a háziállatokról való gondoskodás is. Sokat számít önmagában már az is, hogy nem vagy egyedül,
                                van kivel beszélgetni, van aki elkísér sétálni a babával, vagy az orvosi vizitekre.
                            </div>
                        </li>
                        <li>
                            <h3 className="underline my-4">Babagondozás</h3>
                            <div>
                                Ha igény van rá, abban az esetben a segítő szívesen foglalkozik a babával is.
                                Ha szeretnél elmenni zuhanyozni, kicsit kinyújtóztatni a tagjaidat,
                                vagy a nagyobb gyerkőcöddel is töltenél egy kis időt, akkor ebben is számíthatsz a segítődre.
                                Természetesen a babához kizárólag a te engedélyeddel, a kérésedre nyúlunk hozzá.
                                Persze egy-egy pelenka csere, öltözetés, dajkálás sem okoz problémát,
                                de alapvetően a gyermekágyas segítő feladata nem ez, hanem az anya testi-lelki jóllétének támogatása,
                                hogy minél kiegyensúlyozottabban tudjon a babájával lenni,
                                párjával/nagyobb gyermekeivel együtt családdá formálódni.
                            </div>
                        </li>
                        <li>
                            <h3 className="underline my-4">+1 Szoptatás</h3>
                            <div>
                                Bár nem minden gyermekágyas segítő jártas a szoptatás terén, de rám például számíthatsz ezen a vonalon.
                                Kompetencia határaimon belül (önkéntes szoptatási segítő) szívesen segítek szoptatási kérdésekben.
                                Ha szeretnéd, ellátlak korszerű szoptatási és babagondozási ismeretekkel,
                                segítek a helyes mellretételben, a megfelelő szoptatási pozíció megtalálásában.
                                Ha szükség van rá, tovább tudlak irányítani szoptatás terén magasabban képzett szakemberhez, szoptatási tanácsadóhoz.
                            </div>
                        </li>
                    </ol>
                </div>
                <div className="px-4 xl:px-0">
                    <h2 className="text-primary font-bold text-3xl">Kinek jöhet jól a gyermekágyas segítő?</h2>
                    <ul className="md:ml-5 mt-3 italic grid grid-cols-1 gap-5">
                        <li>
                            Minden gyermekágyas anyának és apának is jól jön a kompetenciáiban való megerősítés,
                            a biológiai norma támogatása, sok dicséret, meghallgatás, a félelmek, kételyek oldása és persze a praktikus segítség
                        </li>
                        <li>
                            Annak, akinek a családja/rokonai/barátai távol vannak/nincsenek/nem olyan a viszony,
                            és az édesanya/édesapa magára maradna a gyermekágyban, annak minden testi-lelki változásával,
                            fizikai leterheltségével együtt
                        </li>
                        <li>
                            Annak, aki szeretne olyan segítséget maga mellett tudni, aki maga is megélte a gyermekágyas időszakot,
                            aki tisztában van a korszerű babagondozási és szoptatási ismeretekkel, a biológiai normával
                        </li>
                        <li>
                            Annak, aki olyan segítőre vágyik, aki elfogadja a család szokásait, alkalmazkodik hozzá,
                            nem vitatja azokat, és csak akkor ad tanácsot, ha megkérdezik
                        </li>
                    </ul>
                </div>
                <div className="px-4 my-4 xl:px-0 text-center text-3xl text-primary font-bold">
                    Ha bármilyen további kérdésed van, vagy szeretnél felkérni segítődnek, akkor keress bátran!
                </div>
                <button type="button" className="btn w-3/4 md:w-1/2 mx-auto bg-secondary text-primary font-bold border-secondary text-2xl hover:bg-accent hover:border-accent">
                    <Link to="/kapcsolat">Elérhetőségek</Link>
                </button>
            </div>
        </div>
    )
}