import { HeaderDividerLine } from "../../../components/content/HeaderDividerLine.jsx";
import { InfoBox } from "../../../components/content/InfoBox.jsx";
import { InfoBoxElement } from "../../../components/content/InfoBoxElement.jsx";
import { NormalParagraph } from "../../../components/content/NormalParagraph.jsx";
import { HighlightedParagraph } from "../../../components/content/HighlightedParagraph.jsx";
import { ServiceHeader } from "../../../components/content/ServiceHeader.jsx";
import { ULParagraph } from "../../../components/content/ULParagraph.jsx";

export const CaesareanSection = () => {
    return (
        <div className="text-xl font-semibold">
            <ServiceHeader title="A te szülésed is számít!"
                           imgPath="/src/assets/images/caesarean-section.png"
                           imgAlt="Császármetszés feldolgozó csoport" />
            <HeaderDividerLine />
            <div className="grid grid-cols-1 mb-6 text-center md:text-left text-2xl gap-7">
                <NormalParagraph text="Nem törvényszerű, hogy a császármetszés rossz élmény, trauma legyen.
                    Ha úgy érzed neked nem volt az, akkor az alábbi lehetőség nem neked szól." />
                <NormalParagraph text="Ha viszont nem tervezett császármetszéssel szültél, ami kapcsán nehéz érzések vannak benned,
                    nem erre készültél, vagy nem tudod hova tenni az eseményeket, úgy érzed nehezen lépsz tovább,
                    akkor ez a lehetőség érdekes lehet számodra."
                                 extraClasses="font-bold" />
                <ULParagraph title="Ismerősek az ilyen és ehhez hasonló mondatok?" extraClasses="font-bold">
                    <li>Örülj, hogy egészségesek vagytok!</li>
                    <li>Mi értelme ezzel ennyit foglalkozni?</li>
                    <li>A lényeg, hogy túl vagytok rajta, nem?</li>
                </ULParagraph>
                <NormalParagraph text="Téged nem vigasztalnak, sőt inkább elszomorítanak vagy felbosszantanak?
                    Nem tudsz kihez fordulni az érzéseiddel? Úgy érzed, nem értenek meg?" />
                <HighlightedParagraph text="Jó hírem van!" />
                <NormalParagraph text="Létezik egy olyan 10 alkalmas csoportfolyamat, egy támogató, megértő, sorstárs közeg,
                    egy biztonságos tér, ahol elmondhatod mindazt, ami fáj/bánt, ami neked nehézséget okoz, amit nehezen éltél meg." />
                <NormalParagraph text="Nem terápiás, hanem önsegítő csoportba fogsz érkezni,
                    ahol érezni fogod a sorstársak megértését, ami már önmagában sokat fog adni." />
                <NormalParagraph text="Lehetőséged lesz a saját magad tempójában haladnod a gyászfolyamatban.
                    Igen a császár is lehet egyfajta gyász, veszteségélmény." />
                <NormalParagraph text="Minden alkalommal valamilyen más témát előtérbe helyezve nézhetsz majd rá a császárodra.
                    Ezek a tematikus napok üdítő kapcsolódásokra is rávilágíthatnak.
                    A veszteségektől, nehéz érzésektől elindulva eljutunk majd az erőforrások kiaknázásáig,
                    a saját kapaszkodók megtalálásáig." />
                <HighlightedParagraph text="Szeretettel várlak!" />
                <InfoBox>
                    <InfoBoxElement text="Egy csoportalkalom időtartama 2 óra, és 2 hetente kerül megszervezésre." />
                    <InfoBoxElement text="Az első 2 alkalom nyitott, utána a kör bezárul, már nem tudunk új résztvevőt fogadni.
                    Elköteleződünk egymás mellett 10 alkalomra." />
                </InfoBox>
            </div>
        </div>
    )
}