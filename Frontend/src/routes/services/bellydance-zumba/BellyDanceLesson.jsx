import { HeaderDividerLine } from "../../../components/HeaderDividerLine.jsx";
import { WarningBox } from "../../../components/WarningBox.jsx";
import { WarningBoxElement } from "../../../components/WarningBoxElement.jsx";
import { NormalParagraph } from "../../../components/NormalParagraph.jsx";
import { ServiceHeader } from "../../../components/ServiceHeader.jsx";

export const BellyDanceLesson = () => {
    return (
        <div className="text-xl font-semibold">
            <ServiceHeader title="Engedd, hogy a kelet misztikus világa magával ragadjon"
                           imgPath="/src/assets/images/bellydance-performance.jpg"
                           imgAlt="Hastánc órák" />
            {/* Change picture */}
            <HeaderDividerLine />
            <div className="grid grid-cols-1 mb-6 text-center md:text-left text-2xl gap-7">
                <NormalParagraph text="Ideje, hogy te is felfedezd azt a mozgásformát, ami neked a legjobb!
                    Talán az én órámon találod meg, amit keresel. Várlak kortól és alkattól függetlenül!" />
                <div className="px-4 xl:px-0">
                    <h2 className="text-primary font-bold text-3xl">Az órák felépítése</h2>
                    <ol className="md:ml-11 mt-3 italic grid grid-cols-1 gap-2 md:list-decimal">
                        <li>Bemelegítés</li>
                        <li>Alaptartás gyakorlása</li>
                        <li>Tréning</li>
                        <li>Mozdulattanítás, új mozdulat/mozdulatok begyakorlása</li>
                        <li>Mini koreográfia</li>
                        <li>Nyújtás</li>
                    </ol>
                </div>
                <div className="px-4 xl:px-0">
                    <h2 className="text-primary font-bold text-3xl">Mit hozz magaddal?</h2>
                    <ul className="md:ml-5 mt-3 italic grid grid-cols-1 gap-2">
                        <li>Kényelmes nadrág vagy hosszú szoknya</li>
                        <li>Kényelmes, nem túl bő felső - amiben látom a mozgásod, hogy tudjak segíteni a helyes kivitelezésben</li>
                        <li>Táncpapucs vagy zokni, illetve mezítláb is táncolhatsz - cipő nem szükséges</li>
                        <li>Rázóöv - helyettesíthető egy nagyobb kendővel is, amit a csípőd köré fel tudsz kötni</li>
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
