import { HeaderDividerLine } from "../../../components/HeaderDividerLine.jsx";
import { InfoBox } from "../../../components/InfoBox.jsx";
import { InfoBoxElement } from "../../../components/InfoBoxElement.jsx";

export const CaesareanSection = () => {
    return (
        <div className="text-xl font-semibold">
            <div className="bg-base">
                <div className="hero-content flex-col md:flex-row gap-0 lg:gap-4">
                    <div>
                        <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left text-primary">A te szülésed is számít!</h1>
                    </div>
                    <img src="/src/assets/images/caesarean-section.png" className="max-w-sm shadow-2xl scale-90 lg:scale-100" alt="Császármetszés feldolgozó csoport" />
                </div>
            </div>
            <HeaderDividerLine />
            <div className="grid grid-cols-1 mb-6 text-center md:text-left text-2xl gap-7">
                <div className="px-4 xl:px-0">
                    Nem törvényszerű, hogy a császármetszés rossz élmény, trauma legyen.
                    Ha úgy érzed neked nem volt az, akkor az alábbi lehetőség nem neked szól.
                </div>
                <div className="px-4 xl:px-0 font-bold">
                    Ha viszont nem tervezett császármetszéssel szültél, ami kapcsán nehéz érzések vannak benned,
                    nem erre készültél, vagy nem tudod hova tenni az eseményeket, úgy érzed nehezen lépsz tovább,
                    akkor ez a lehetőség érdekes lehet számodra.
                </div>
                <div className="px-4 xl:px-0">
                    <h2 className="text-primary font-bold text-3xl">Ismerősek az ilyen és ehhez hasonló mondatok?</h2>
                    <ul className="md:ml-5 mt-3 grid grid-cols-1 gap-4 font-bold">
                        <li>Örülj, hogy egészségesek vagytok!</li>
                        <li>Mi értelme ezzel ennyit foglalkozni?</li>
                        <li>A lényeg, hogy túl vagytok rajta, nem?</li>
                    </ul>
                </div>
                <div className="px-4 xl:px-0">
                    Téged nem vigasztalnak, sőt inkább elszomorítanak vagy felbosszantanak? Nem tudsz kihez fordulni az érzéseiddel? Úgy érzed, nem értenek meg?
                </div>
                <div className="px-4 my-4 xl:px-0 text-center text-3xl text-primary font-bold">
                    Jó hírem van!
                </div>
                <div className="px-4 xl:px-0">
                    Létezik egy olyan 10 alkalmas csoportfolyamat, egy támogató, megértő, sorstárs közeg,
                    egy biztonságos tér, ahol elmondhatod mindazt, ami fáj/bánt, ami neked nehézséget okoz, amit nehezen éltél meg.
                </div>
                <div className="px-4 xl:px-0">
                    Nem terápiás, hanem önsegítő csoportba fogsz érkezni, ahol érezni fogod a sorstársak megértését, ami már önmagában sokat fog adni.
                </div>
                <div className="px-4 xl:px-0">
                    Lehetőséged lesz a saját magad tempójában haladnod a gyászfolyamatban. Igen a császár is lehet egyfajta gyász, veszteségélmény.
                </div>
                <div className="px-4 xl:px-0">
                    Minden alkalommal valamilyen más témát előtérbe helyezve nézhetsz majd rá a császárodra.
                    Ezek a tematikus napok üdítő kapcsolódásokra is rávilágíthatnak.
                    A veszteségektől, nehéz érzésektől elindulva eljutunk majd az erőforrások kiaknázásáig,
                    a saját kapaszkodók megtalálásáig.
                </div>
                <div className="px-4 my-4 xl:px-0 text-center text-3xl text-primary font-bold">
                    Szeretettel várlak!
                </div>
                <InfoBox>
                    <InfoBoxElement text="Egy csoportalkalom időtartama 2 óra, és 2 hetente kerül megszervezésre." />
                    <InfoBoxElement text="Az első 2 alkalom nyitott, utána a kör bezárul, már nem tudunk új résztvevőt fogadni.
                    Elköteleződünk egymás mellett 10 alkalomra." />
                </InfoBox>
            </div>
        </div>
    )
}