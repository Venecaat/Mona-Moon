import { Link } from "react-router-dom";
import { HeaderDividerLine } from "../../../components/HeaderDividerLine.jsx";
import { WarningBoxElement } from "../../../components/WarningBoxElement.jsx";
import { WarningBox } from "../../../components/WarningBox.jsx";
import { InfoBox } from "../../../components/InfoBox.jsx";
import { InfoBoxElement } from "../../../components/InfoBoxElement.jsx";
import { NormalParagraph } from "../../../components/NormalParagraph.jsx";
import { HighlightedParagraph } from "../../../components/HighlightedParagraph.jsx";
import { ServiceHeader } from "../../../components/ServiceHeader.jsx";

export const BirthBlessing = () => {
    return (
        <div className="text-xl font-semibold">
            <ServiceHeader title="Szülésáldó ünnep"
                           imgPath="/src/assets/images/birth-blessing.png"
                           imgAlt="Szülésáldó ünnep" />
            <HeaderDividerLine />
            <div className="grid grid-cols-1 mb-6 text-center md:text-left text-2xl gap-7">
                <div className="px-4 xl:px-0">
                    A szülésáldó, szülésre bocsájtó ünnep, azaz közismertebb nevén <span className="italic">Blessingway</span>,
                    egy nap, ami <span className="font-bold">RÓLAD</span> szól, ami érted van,
                    olyan női rokonok, barátok, hozzád közelálló nők részvételével, akik megtartanak,
                    támogatnak, bátorítanak az anyává válás útján.
                </div>
                <NormalParagraph text="Régebben fontos szerepet töltöttek be az emberek életében a rítusok, szertartások,
                    amik mára már néhány kivételtől eltekintve igencsak kikoptak az életünkből.
                    Pedig milyen fontos lenne egy-egy nagyobb életesemény előtt elbúcsúztatni a régi önmagunkat,
                    és teret adni valami újnak, valami másnak. Bátorságot gyűjteni, elengedni a félelmeinket szeretteink körében
                    egy-egy nagy lépés megtétele előtt." />
                <NormalParagraph text="És mi lehetne nagyobb dolog az első, második, harmadik vagy akár többedik gyermekünk születésénél?
                    Szerintem nem sok minden.... És nem is sokszor történik meg az életünk során." />
                <NormalParagraph text='Ezért érdemes lehet megünnepelni gyönyörű virágokkal, gyertyákkal feldíszített közegben,
                    ami lehet a szabadban, az otthonod melegében, vagy akár egy bérelt teremben a kedvenc "ünneplő" ruhádba öltözve.
                    Meglátod mennyire jó érzés fogadni a szeretetet, odafigyelést, vagy akár egy kis kényeztetést.
                    Pl: hajfonás, koszorúkészítés, masszázs, lábmosás.' />
                <NormalParagraph text="Az ünnep minden esetben a TE személyiségedhez, igényeidhez lesz igazítva.
                    Bár általában vannak állandó elemei, mint például az áldásadás, fonálceremónia, útravaló ajándék." />
                <NormalParagraph text="A szülés óráiban lesz majd mihez visszanyúlnod, az itt megtapasztalt megerősítések,
                    pozitív energiák a tapasztalatok alapján sokszor erőt adnak a vajúdó anyának.
                    Ha szeretnéd, veled lehetnek szülésed alatt az itt kapott ajándékok,
                    amik szintén emlékeztetni tudnak erre a különleges napra." />
                <HighlightedParagraph text="Ha szeretnéd magadat, lányodat, barátnődet meglepni egy ősi gyökerekkel rendelkező,
                    de abszolút modern szertartással Budapesten belül, akkor bátran fordulj hozzám!" />
                <button type="button" className="btn w-3/4 md:w-1/2 mx-auto bg-secondary text-primary font-bold border-secondary text-2xl hover:bg-accent hover:border-accent">
                    <Link to="/kapcsolat">Elérhetőségek</Link>
                </button>
                <InfoBox>
                    <InfoBoxElement text="Az ünnep időtartama általában 2-3 óra, ami a résztvevők számától függően változhat." />
                </InfoBox>
                <WarningBox>
                    <WarningBoxElement text="Az árazás több tényezőtől függ, ezért előzetes egyeztetés után tudok árajánlatot adni." />
                </WarningBox>
            </div>
        </div>
    )
}