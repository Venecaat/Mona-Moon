import { Link } from "react-router-dom";
import { HeaderDividerLine } from "../../../components/HeaderDividerLine.jsx";
import { WarningBoxElement } from "../../../components/WarningBoxElement.jsx";
import { WarningBox } from "../../../components/WarningBox.jsx";
import { InfoBox } from "../../../components/InfoBox.jsx";
import { InfoBoxElement } from "../../../components/InfoBoxElement.jsx";
import { NormalParagraph } from "../../../components/NormalParagraph.jsx";
import { HighlightedParagraph } from "../../../components/HighlightedParagraph.jsx";

export const FitmummyLatinFitness = () => {
    return (
        <div className="text-xl font-semibold">
            <div className="bg-base">
                <div className="hero-content flex-col md:flex-row gap-0 lg:gap-4">
                    <div>
                        <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left text-primary">Fitmummy várandós latin fitness</h1>
                    </div>
                    <img src="/src/assets/images/fitmummy-belly-dance.png" className="max-w-sm shadow-2xl scale-90 lg:scale-100" alt="Fitmummy várandós latin fitness" />
                </div>
            </div>
            <HeaderDividerLine />
            <div className="grid grid-cols-1 mb-6 text-center md:text-left text-2xl gap-7">
                <NormalParagraph text="Ha szeretnéd megőrizni a fittséged várandósan, és közben jól is éreznéd magad más kismamák társaságában.
                    Ha szereted a latin ritmusokat, akkor..." />
                <HighlightedParagraph text="Várlak szeretettel a kismamákra szabott Fitmummy latin fitness órámon akkor is,
                    ha korábban még nem voltál ilyen típusú órán!" />
                <NormalParagraph text="Az órákat rekreációs sportoktatóként (OKJ) és fitmummy prenatális trénerként tartom." />
                <div className="px-4 xl:px-0">
                    A fitmummy programról itt olvashatsz bővebben: <Link to="http://fitmummy.hu/" className="text-primary hover:text-accent ease-in duration-100 underline">Fitmummy.hu</Link>
                </div>
                <div className="px-4 xl:px-0">
                    <h2 className="text-primary font-bold text-3xl">Mikortól ajánlott bekapcsolódnod?</h2>
                    <div className="md:ml-5 mt-3">
                        Betöltött <span className="font-bold">12.</span> terhességi héttől javaslom a csatlakozást.
                    </div>
                </div>
                <div className="px-4 xl:px-0">
                    <h2 className="text-primary font-bold text-3xl">Miért jó?</h2>
                    <ul className="md:ml-5 mt-3 grid grid-cols-1 gap-4">
                        <li>
                            A szív és keringési rendszer, légzőrendszer kapacitását fejleszti, kedvezően befolyásolja
                            a szénhidrát és zsír anyagcserét, ami által alakformáló hatását is kifejti.
                            Könnyebb lesz megtartani a fittséged általa, mivel kardió tréningről van szó.
                            A kardió edzés pedig abszolút javasolt a kismamáknak is. Kedvezően hat az idegrendszerre,
                            ami szintén nem egy utolsó szempont. A zene és a csoport ereje pedig hatékonyan oldja
                            a felgyülemlett stresszt, csökkenti a feszültséget.
                        </li>
                        <li>
                            A nagy rázkódással járó mozdulatokat, ugrásokat mellőzzük, amik túlságosan megterhelnék
                            az amúgy is nagy súlyt cipelő gátizmokat, helyette kellemes csípő-
                            és karmozdulatokat, lépéseket használunk dinamikus formában.
                        </li>
                    </ul>
                </div>
                <div className="px-4 xl:px-0">
                    <h2 className="text-primary font-bold text-3xl">Az óra felépítése</h2>
                    <ol className="md:ml-11 mt-3 italic grid grid-cols-1 gap-2 md:list-decimal">
                        <li>Bemelegítés</li>
                        <li>Légzőtorna mobilizációval</li>
                        <li>Táncos fitness zenére 6-7 koreográfiával, amiket van idő begyakorolni - havonta egy számot lecserélek.</li>
                        <li>Nyújtás és gátizomlazítás</li>
                        <li>Gátizomtorna (erősítés)</li>
                        <li>Relaxáció</li>
                    </ol>
                </div>
                <div className="px-4 xl:px-0">
                    <h2 className="text-primary font-bold text-3xl">Mit hozz magaddal?</h2>
                    <ul className="md:ml-5 mt-3 italic grid grid-cols-1 gap-2">
                        <li>Kényelmes, jól szellőző nadrágot és felsőt</li>
                        <li>Megfelelő sportcipőt</li>
                        <li>Egy üveg vizet</li>
                        <li>Egy kis törülközőt</li>
                        <li>+1 Ha van okosórád, ami a pulzusodat tudja mérni, akkor vedd fel nyugodtan</li>
                    </ul>
                </div>
                <InfoBox>
                    <InfoBoxElement text="Az órán való részvétel nem igényel semmilyen előképzettséget." />
                </InfoBox>
                <InfoBox>
                    <InfoBoxElement text="Mindig figyelj a tested jelzéseire, ha úgy érzed pihenned kell, akkor pihenj, ha innod kell, igyál." />
                    <InfoBoxElement text="Ha valamelyik mozdulat nem esik jól, akkor állj meg egy kicsit, hagyd ki, helyettesítsd mással." />
                    <InfoBoxElement text="Ha szükséges, akkor csökkentsd a mozgás intenzitását például kisebb lépésekkel, a karmozdulatok kihagyásával, stb." />
                </InfoBox>
                <WarningBox>
                    <WarningBoxElement text="Az órákon saját felelősségre veszel részt." />
                    <WarningBoxElement text="Amennyiben egészségügyi problémád, panaszod van, konzultálj kezelőorvosoddal.
                        Az órákon való részvétel nem helyettesíti az orvossal, gyógytornásszal való konzultációt." />
                    <WarningBoxElement text="A fentieket a részvételeddel elfogadottnak tekinted." />
                </WarningBox>
            </div>
        </div>
    )
}