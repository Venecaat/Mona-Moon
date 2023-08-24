import { HeaderDividerLine } from "../../../components/HeaderDividerLine.jsx";
import { WarningBox } from "../../../components/WarningBox.jsx";
import { WarningBoxElement } from "../../../components/WarningBoxElement.jsx";
import { NormalParagraph } from "../../../components/NormalParagraph.jsx";

export const ZumbaPerformance = () => {
    return (
        <div className="text-xl font-semibold">
            <div className="bg-base">
                <div className="hero-content flex-col md:flex-row gap-0 lg:gap-4">
                    <div>
                        <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left text-primary">Színesítsd te is Zumbával a rendezvényed!</h1>
                    </div>
                    <img src="/src/assets/images/zumba-performance.png" className="max-w-sm shadow-2xl scale-90 lg:scale-100" alt="Zumba bemutató rendezvényekre" />
                </div>
            </div>
            <HeaderDividerLine />
            <div className="grid grid-cols-1 mb-6 text-center md:text-left text-2xl gap-7">
                <NormalParagraph text="Családi napot, vagy céges sportnapot szervezel? Vagy csak a barátaid szeretnéd megmozgatni egy
                    jó hangulatú fitness órán? Feldobnád a szülinapi bulit, lánybúcsút egy kis mozgással?"/>
                <NormalParagraph text="Akkor ajánlom figyelmedbe a pörgős latin ritmusokra épülő Zumba Fitnesst. Garantált a jó hangulat!
                    Nem kell táncosnak lenni hozzá, mivel a zumba koreográfiák egyszerű lépésekből állnak,
                    így bárki számára követhetők, élvezhetők!"/>
                <NormalParagraph text="Zumbán nem egy komplett táncstílust tanítok meg, nem a tökéletességre törekszem, csak arra,
                    hogy táncoljunk és jól érezzük magunkat!"
                                 extraClasses="font-bold"/>
                <WarningBox>
                    <WarningBoxElement text="Az árazás függ a helyszíntől, időponttól, a rendezvény jellegétől, illetve a kért óra/bemutató hosszától." />
                </WarningBox>
            </div>
        </div>
    )
}