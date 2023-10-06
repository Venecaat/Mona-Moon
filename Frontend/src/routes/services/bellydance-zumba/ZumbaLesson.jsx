import { HeaderDividerLine } from "../../../components/content/HeaderDividerLine.jsx";
import { WarningBox } from "../../../components/content/WarningBox.jsx";
import { WarningBoxElement } from "../../../components/content/WarningBoxElement.jsx";
import { NormalParagraph } from "../../../components/content/NormalParagraph.jsx";
import { HighlightedParagraph } from "../../../components/content/HighlightedParagraph.jsx";
import { ServiceHeader } from "../../../components/content/ServiceHeader.jsx";
import { OLParagraph } from "../../../components/content/OLParagraph.jsx";
import { ULParagraph } from "../../../components/content/ULParagraph.jsx";

export const ZumbaLesson = () => {
    return (
        <div className="text-xl font-semibold">
            <ServiceHeader title="Gyere és próbáld ki!"
                           imgPath="/src/assets/images/zumba-lesson.png"
                           imgAlt="Zumba órák" />
            <HeaderDividerLine />
            <div className="grid grid-cols-1 mb-6 text-center md:text-left text-2xl gap-7">
                <ULParagraph title="Használt táncstílusok fitness mozdulatokkal kombinálva" gap={2} extraClasses="md:grid-cols-3">
                    <li>Salsa</li>
                    <li>Cumbia</li>
                    <li>Reggaeton</li>
                    <li>Merengue</li>
                    <li>Hastánc</li>
                    <li>Flamenco</li>
                    <li>Bachata</li>
                    <li>Calypso</li>
                    <li>Samba</li>
                </ULParagraph>
                <NormalParagraph text="Nem egy komplett táncstílust tanulunk meg, hanem csak táncolunk és jól érezzük magunkat!"
                                 extraClasses="font-bold" />
                <NormalParagraph text="Ideje, hogy te is felfedezd azt a mozgásformát, ami neked a legjobb!
                    Talán az én órámon találod meg, amit keresel." />
                <HighlightedParagraph text="Várlak kortól és alkattól függetlenül!" />
                <OLParagraph title="Az órák felépítése">
                    <li>Bemelegítés: 8-10 perc</li>
                    <li>Koreográfiák: 40-45 perc, 8-10 zeneszám - havonta cserélek le egy számot, így követhető marad az óra, de mégsem lesz unalmas!</li>
                    <li>Nyújtás: 5-10 perc</li>
                </OLParagraph>
                <ULParagraph title="Milyen ruhában érdemes Zumba órára jönni?">
                    <li>Kényelmes nadrág, amiben könnyedén tudsz mozogni</li>
                    <li>Kényelmes póló vagy top - lehetőleg rövid ujjú, mert meleged lesz</li>
                    <li>Sportcipő, edzőcipő</li>
                    <li>Mindenképpen szükséges legalább fél liter folyadék</li>
                    <li>Esetleg egy kisméretű törülköző</li>
                </ULParagraph>
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