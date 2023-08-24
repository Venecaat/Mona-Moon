import { HeaderDividerLine } from "../../../components/HeaderDividerLine.jsx";
import { WarningBox } from "../../../components/WarningBox.jsx";
import { WarningBoxElement } from "../../../components/WarningBoxElement.jsx";

export const ZumbaLesson = () => {
    return (
        <div className="text-xl font-semibold">
            <div className="bg-base">
                <div className="hero-content flex-col md:flex-row gap-0 lg:gap-4">
                    <div>
                        <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left text-primary">Gyere és próbáld ki!</h1>
                    </div>
                    <img src="/src/assets/images/zumba-lesson.png" className="max-w-sm shadow-2xl scale-90 lg:scale-100" alt="Zumba órák" />
                </div>
            </div>
            <HeaderDividerLine />
            <div className="grid grid-cols-1 mb-6 text-center md:text-left text-2xl gap-7">
                <div className="px-4 xl:px-0">
                    <h2 className="text-primary font-bold text-3xl">Használt táncstílusok fitness mozdulatokkal kombinálva</h2>
                    <ul className="md:ml-5 mt-3 italic grid grid-cols-2 md:grid-cols-3 gap-2">
                        <li>Salsa</li>
                        <li>Cumbia</li>
                        <li>Reggaeton</li>
                        <li>Merengue</li>
                        <li>Hastánc</li>
                        <li>Flamenco</li>
                        <li>Bachata</li>
                        <li>Calypso</li>
                        <li>Samba</li>
                    </ul>
                </div>
                <div className="px-4 xl:px-0 font-bold">
                    Nem egy komplett táncstílust tanulunk meg, hanem csak táncolunk és jól érezzük magunkat!
                </div>
                <div className="px-4 xl:px-0">
                    Ideje, hogy te is felfedezd azt a mozgásformát, ami neked a legjobb! Talán az én órámon találod meg, amit keresel. Várlak kortól és alkattól függetlenül!
                </div>
                <div className="px-4 xl:px-0">
                    <h2 className="text-primary font-bold text-3xl">Az órák felépítése</h2>
                    <ol className="md:ml-11 mt-3 italic grid grid-cols-1 gap-2 md:list-decimal">
                        <li>Bemelegítés: 8-10 perc</li>
                        <li>Koreográfiák: 40-45 perc, 8-10 zeneszám - havonta cserélek le egy számot, így követhető marad az óra, de mégsem lesz unalmas!</li>
                        <li>Nyújtás: 5-10 perc</li>
                    </ol>
                </div>
                <div className="px-4 xl:px-0">
                    <h2 className="text-primary font-bold text-3xl">Milyen ruhában érdemes Zumba órára jönni?</h2>
                    <ul className="md:ml-5 mt-3 italic grid grid-cols-1 gap-2">
                        <li>Kényelmes nadrág, amiben könnyedén tudsz mozogni</li>
                        <li>Kényelmes póló vagy top - lehetőleg rövid ujjú, mert meleged lesz</li>
                        <li>Sportcipő, edzőcipő</li>
                        <li>Mindenképpen szükséges legalább fél liter folyadék</li>
                        <li>Esetleg egy kisméretű törülköző</li>
                    </ul>
                </div>
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