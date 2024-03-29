import { HeaderDividerLine } from "../../../components/content/HeaderDividerLine.jsx";
import { WarningBoxElement } from "../../../components/content/WarningBoxElement.jsx";
import { WarningBox } from "../../../components/content/WarningBox.jsx";
import { InfoBox } from "../../../components/content/InfoBox.jsx";
import { InfoBoxElement } from "../../../components/content/InfoBoxElement.jsx";
import { NormalParagraph } from "../../../components/content/NormalParagraph.jsx";
import { HighlightedParagraph } from "../../../components/content/HighlightedParagraph.jsx";
import { ServiceHeader } from "../../../components/content/ServiceHeader.jsx";
import { ULParagraph } from "../../../components/content/ULParagraph.jsx";

export const DoulaSupport = () => {
    return (
        <div className="text-xl font-semibold">
            <ServiceHeader title="Dúlai támogatás"
                           imgPath="/src/assets/images/doula-support.png"
                           imgAlt="Dúlai támogatás" />
            <HeaderDividerLine />
            <div className="grid grid-cols-1 mb-6 text-center md:text-left text-2xl gap-7">
                <NormalParagraph text="Szeretnél készülni a várandósságra, szülésre (legyen az hüvelyi szülés vagy császár), szoptatásra, gyermekágyra?" />
                <NormalParagraph text="Jó lenne egy bizalmi személy, aki végigkíséri életed ezen fontos szakaszát,
                    akivel megoszthatod az érzéseid, illetve megbeszélheted a téged foglalkoztató éppen aktuális kérdéseket?
                    Esetleg lenne miről beszélni az előző szülésélményed kapcsán? Akkor jó helyen jársz!" />
                <NormalParagraph text="Dúlaként tudlak támogatni a fentebb említett területeken egyéni konzultáció keretein belül személyesen
                    Budapesten, vagy online földrajzi helyzettől függetlenül. Ha a pároddal közösen szeretnétek készülni,
                    akkor természetesen várlak mindkettőtöket szeretettel!" />
                <NormalParagraph text="Hogy milyen időtartamban, hány alkalommal szeretnéd igénybe venni a segítségem, az teljes mértékben
                    rád/rátok van bízva. Attól függ, hogy mi az, ami foglalkoztat, mire vagy kiváncsi, milyen érzéseken,
                    esetleges félelmeken szeretnél dolgozni. Készülhetünk együtt akár már a várandósságot megelőzően is,
                    vagy a várandósság elejétől kezdve rendszeres időközönként, sorba véve a várandósság, szülés, szoptatás,
                    gyermekágy fontos témaköreit. De akár egy-egy téged foglalkoztató konkrét kérdéssel is
                    megkereshetsz 1-2 konzultáció erejéig. Minden opció jó, és teljesen rendben van,
                    úgy fog történni, ahogy te szeretnéd!" />
                <ULParagraph title="A teljesség igénye nélkül témakörök, amikről pl. beszélgethetünk:">
                    <li>A várandósság testi-lelki változásai</li>
                    <li>Sport várandósan és a szülés után</li>
                    <li>Az élettani vajúdás és szülés szakaszai, testi-lelki állomásai</li>
                    <li>Vajúdástámogatási technikák - testi-lelki</li>
                    <li>Mitől lesz jó a szülés? A "jó" szülés legfontosabb feltételei</li>
                    <li>Beszélgetés az esetleges félelmekről és azok "kezeléséről"</li>
                    <li>Beavatkozások létjogosultsága, előnyök, hátrányok, kockázatok</li>
                    <li>A szülő nő, az újszülött, az apa jogai</li>
                    <li>Szülési terv, azaz lehet-e tervezni a szülést. Hogyan hozhatod ki a legtöbbet a szülésedből</li>
                    <li>Az apa szerepe, a várandósság, szülés, gyermekágy idején</li>
                    <li>Anya, Apa, Család születése, szerepek változása</li>
                    <li>Szexualitás</li>
                    <li>Az aranyóra jelentősége, illetve mit tegyünk, ha elmarad</li>
                    <li>A kisbaba valódi szükségletei</li>
                    <li>Gyermekágy - praktikus információk, testi-lelki folyamatok</li>
                    <li>A sikeres szoptatás feltételei, a szoptatás mint biológiai norma</li>
                    <li>Császármetszés - felkészülés a B tervre</li>
                    <li>Szülés utáni regeneráció lehetőségei hüvelyi szülés, császár esetén</li>
                    <li>Szülésélmény meghallgatás értő figyelemmel</li>
                    <li>Testvér érkezése</li>
                </ULParagraph>
                <HighlightedParagraph text="Várlak szeretettel, hogy támogathassalak életed egyik legmeghatározóbb időszakában, úgy, ahogy TE szeretnéd!" />
                <InfoBox>
                    <InfoBoxElement text="A fenti átfogó témák csupán javaslatok, természetesen ezektől eltérő kérdéseiddel is fordulhatsz hozzám." />
                    <InfoBoxElement text="Minden esetben igazodok az egyéni igényekhez. Éppen ezért a konzultációk hosszát sem szabályozom." />
                </InfoBox>
                <WarningBox>
                    <WarningBoxElement text="Van, ami egy órában átbeszélhető, de van olyan téma is,
                        amihez több óra/találkozó szükséges, így az árak is előzetes egyeztetés után kerülnek meghatározásra." />
                </WarningBox>
            </div>
        </div>
    )
}