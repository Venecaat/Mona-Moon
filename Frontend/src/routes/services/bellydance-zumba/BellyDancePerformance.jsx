import { HeaderDividerLine } from "../../../components/content/HeaderDividerLine.jsx";
import { WarningBox } from "../../../components/content/WarningBox.jsx";
import { WarningBoxElement } from "../../../components/content/WarningBoxElement.jsx";
import { NormalParagraph } from "../../../components/content/NormalParagraph.jsx";
import { ServiceHeader } from "../../../components/content/ServiceHeader.jsx";
import { ULParagraph } from "../../../components/content/ULParagraph.jsx";

export const BellyDancePerformance = () => {
    return (
        <div className="text-xl font-semibold">
            <ServiceHeader title="Hastánc fellépés rendezvényekre!"
                           imgPath="/src/assets/images/bellydance-performance-mod.jpg"
                           imgAlt="Hastánc fellépés rendezvényekre" />
            <HeaderDividerLine />
            <div className="grid grid-cols-1 mb-6 text-center md:text-left text-2xl gap-7">
                <NormalParagraph text="Orientális tánc (hastánc) fellépéseket vállalok születésnapokon, leány-legénybúcsúkon,
                    esküvőkön, fesztiválokon, megnyitókon, falunapokon, szilveszteri bulikon, éttermekben,
                    évfordulókon, egyéb céges illetve magán rendezvényeken." />
                <NormalParagraph text="Ha egy keleties estével szeretnél kedveskedni barátaidnak, ismerőseidnek, vendégeidnek,
                    akkor keress bátran! Garantált a jó hangulat!" />
                <NormalParagraph text="A standard műsor 1 táncossal 10-15 perces (igény esetén lehet ettől eltérő műsoridőt is kérni, esetleg több táncossal is).
                    Az előadást rendezvény jellegéhez igazodva, annak megfelelő műsorösszeállítással, változatosan, magas színvonalon prezentálom." />
                <ULParagraph title="Repertoár">
                    <li>Klasszikus hastánc (Raks Sharki)</li>
                    <li>Dobszóló</li>
                    <li>Eszközös táncok: fátyol, ízisz szárny, legyezőfátyol, saidi bot, csörgődob, stb.</li>
                    <li>Hárem tánc</li>
                    <li>Modern show hastánc</li>
                    <li>Fúziós táncok: cigány, andalúz, samba, stb.</li>
                    <li>Néptáncok: beledi, saidi, khalidji, melaya</li>
                </ULParagraph>
                <WarningBox>
                    <WarningBoxElement text="Előzetes megbeszélés a részletek tisztázásához (időpont, helyszín, stb.) mindenképpen szükséges!" />
                    <WarningBoxElement text="Az árazás függ a helyszíntől, időponttól, a rendezvény jellegétől, illetve a kért műsor hosszától és a táncosok számától is." />
                </WarningBox>
            </div>
        </div>
    )
}