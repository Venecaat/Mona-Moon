import { HeaderDividerLine } from "../../../components/HeaderDividerLine.jsx";
import { WarningBox } from "../../../components/WarningBox.jsx";
import { WarningBoxElement } from "../../../components/WarningBoxElement.jsx";
import { NormalParagraph } from "../../../components/NormalParagraph.jsx";
import { ServiceHeader } from "../../../components/ServiceHeader.jsx";

export const ZumbaPerformance = () => {
    return (
        <div className="text-xl font-semibold">
            <ServiceHeader title="Színesítsd te is Zumbával a rendezvényed!"
                           imgPath="/src/assets/images/zumba-performance.png"
                           imgAlt="Zumba bemutató rendezvényekre" />
            <HeaderDividerLine />
            <div className="grid grid-cols-1 mb-6 text-center md:text-left text-2xl gap-7">
                <NormalParagraph text="Családi napot, vagy céges sportnapot szervezel? Vagy csak a barátaid szeretnéd megmozgatni egy
                    jó hangulatú fitness órán? Feldobnád a szülinapi bulit, lánybúcsút egy kis mozgással?"/>
                <NormalParagraph text="Akkor ajánlom figyelmedbe a pörgős latin ritmusokra épülő Zumba Fitnesst. Garantált a jó hangulat!
                    Nem kell táncosnak lenni hozzá, mivel a zumba koreográfiák egyszerű lépésekből állnak,
                    így bárki számára követhetők, élvezhetők!"/>
                <NormalParagraph text="Zumbán nem egy komplett táncstílust tanítok meg, nem a tökéletességre törekszem, csak arra,
                    hogy táncoljunk és jól érezzük magunkat!" extraClasses="font-bold"/>
                <WarningBox>
                    <WarningBoxElement text="Az árazás függ a helyszíntől, időponttól, a rendezvény jellegétől, illetve a kért óra/bemutató hosszától." />
                </WarningBox>
            </div>
        </div>
    )
}