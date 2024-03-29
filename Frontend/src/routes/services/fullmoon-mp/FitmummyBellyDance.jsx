import { Link } from "react-router-dom";
import { HeaderDividerLine } from "../../../components/content/HeaderDividerLine.jsx";
import { WarningBox } from "../../../components/content/WarningBox.jsx";
import { WarningBoxElement } from "../../../components/content/WarningBoxElement.jsx";
import { InfoBox } from "../../../components/content/InfoBox.jsx";
import { InfoBoxElement } from "../../../components/content/InfoBoxElement.jsx";
import { NormalParagraph } from "../../../components/content/NormalParagraph.jsx";
import { HighlightedParagraph } from "../../../components/content/HighlightedParagraph.jsx";
import { ServiceHeader } from "../../../components/content/ServiceHeader.jsx";
import { OLParagraph } from "../../../components/content/OLParagraph.jsx";
import { ULParagraph } from "../../../components/content/ULParagraph.jsx";

export const FitmummyBellyDance = () => {
    return (
        <div className="text-xl font-semibold">
            <ServiceHeader title="Fitmummy várandós hastánc"
                           imgPath="/src/assets/images/fitmummy-belly-dance.png"
                           imgAlt="Fitmummy várandós hastánc" />
            <HeaderDividerLine />
            <div className="grid grid-cols-1 mb-6 text-center md:text-left text-2xl gap-7">
                <NormalParagraph text="Könnyed, lágy, nőies mozgásforma, amely finom mozgásaival kellően átmozgatja az egész testet,
                    kiemelten a csípő, a has és a medence izmait, ezáltal finoman ringatva a babádat a pocakodban.
                    Miközben te táncolsz, és jól érzed magad, a babád is ellazulhat a kellemes keleti ritmusokra." />
                <NormalParagraph text="Az órákat rekreációs sportoktatóként, hastánc oktatói fakultációval (OKJ) és fitmummy prenatális trénerként tartom." />
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
                <ULParagraph title="Mit adhat neked a hastánc?">
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
                </ULParagraph>
                <OLParagraph title="Az óra felépítése">
                    <li>Bemelegítés, mobilizáció légzőtornával</li>
                    <li>Hastánc tréning 1-4 zeneszámmal</li>
                    <li>Mozdulattanulás és mini koreográfia</li>
                    <li>Nyújtás és gátizomlazítás</li>
                    <li>Gátizomtorna (erősítés)</li>
                    <li>Relaxáció</li>
                </OLParagraph>
                <NormalParagraph text="Egy változatos, jól felépített hastánc órára számíthatsz, ami a megváltozott állapot
                    sajátosságait figyelembe véve kellően átmozgat, és támogatja a testedben történő változásokkal
                    való adaptálódást. Segít fittnek maradni." />
                <ULParagraph title="Mit hozz magaddal?">
                    <li>Kényelmes, jól szellőző felsőt, nadrágot/szoknyát és zoknit vagy táncpapucsot - ha nem vagy fázós, akkor mezítláb is táncolhatsz</li>
                    <li>Rázóöv - helyettesíthető egy nagyobb kendővel is, amit a csípődre tudsz kötni</li>
                    <li>Egy üveg vízre is szükséged lesz</li>
                    <li>Hasznos lehet egy törülköző is, amit a jógaszőnyegre tudsz teríteni</li>
                </ULParagraph>
                <HighlightedParagraph text="Várlak szeretettel akkor is, ha korábban még nem táncoltál/hastáncoltál!" />
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