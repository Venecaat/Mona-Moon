import { HeaderDividerLine } from "../../../components/content/HeaderDividerLine.jsx";
import { WarningBox } from "../../../components/content/WarningBox.jsx";
import { WarningBoxElement } from "../../../components/content/WarningBoxElement.jsx";
import { NormalParagraph } from "../../../components/content/NormalParagraph.jsx";
import { ServiceHeader } from "../../../components/content/ServiceHeader.jsx";
import { OLParagraph } from "../../../components/content/OLParagraph.jsx";
import { ULParagraph } from "../../../components/content/ULParagraph.jsx";

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
                <OLParagraph title="Az órák felépítése">
                    <li>Bemelegítés</li>
                    <li>Alaptartás gyakorlása</li>
                    <li>Tréning</li>
                    <li>Mozdulattanítás, új mozdulat/mozdulatok begyakorlása</li>
                    <li>Mini koreográfia</li>
                    <li>Nyújtás</li>
                </OLParagraph>
                <ULParagraph title="Mit hozz magaddal?">
                    <li>Kényelmes nadrág vagy hosszú szoknya</li>
                    <li>Kényelmes, nem túl bő felső - amiben látom a mozgásod, hogy tudjak segíteni a helyes kivitelezésben</li>
                    <li>Táncpapucs vagy zokni, illetve mezítláb is táncolhatsz - cipő nem szükséges</li>
                    <li>Rázóöv - helyettesíthető egy nagyobb kendővel is, amit a csípőd köré fel tudsz kötni</li>
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
