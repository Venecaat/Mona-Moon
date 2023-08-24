import { Link } from "react-router-dom";
import { HeaderDividerLine } from "../../../components/HeaderDividerLine.jsx";
import { WarningBoxElement } from "../../../components/WarningBoxElement.jsx";
import { WarningBox } from "../../../components/WarningBox.jsx";
import { InfoBox } from "../../../components/InfoBox.jsx";
import { InfoBoxElement } from "../../../components/InfoBoxElement.jsx";

export const BirthBlessing = () => {
    return (
        <div className="text-xl font-semibold">
            <div className="bg-base">
                <div className="hero-content flex-col md:flex-row gap-0 lg:gap-4">
                    <div>
                        <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left text-primary">Szülésáldó ünnep</h1>
                    </div>
                    <img src="/src/assets/images/birth-blessing.png" className="max-w-sm shadow-2xl scale-90 lg:scale-100" alt="Szülésáldó ünnep" />
                </div>
            </div>
            <HeaderDividerLine />
            <div className="grid grid-cols-1 mb-6 text-center md:text-left text-2xl gap-7">
                <div className="px-4 xl:px-0">
                    A szülésáldó, szülésre bocsájtó ünnep, azaz közismertebb nevén <span className="italic">Blessingway</span>,
                    egy nap, ami <span className="font-bold">RÓLAD</span> szól, ami érted van,
                    olyan női rokonok, barátok, hozzád közelálló nők részvételével, akik megtartanak,
                    támogatnak, bátorítanak az anyává válás útján.
                </div>
                <div className="px-4 xl:px-0">
                    Régebben fontos szerepet töltöttek be az emberek életében a rítusok, szertartások,
                    amik mára már néhány kivételtől eltekintve igencsak kikoptak az életünkből.
                    Pedig milyen fontos lenne egy-egy nagyobb életesemény előtt elbúcsúztatni a régi önmagunkat,
                    és teret adni valami újnak, valami másnak. Bátorságot gyűjteni, elengedni a félelmeinket szeretteink körében
                    egy-egy nagy lépés megtétele előtt.
                </div>
                <div className="px-4 xl:px-0">
                    És mi lehetne nagyobb dolog az első, második, harmadik vagy akár többedik gyermekünk születésénél?
                    Szerintem nem sok minden.... És nem is sokszor történik meg az életünk során.
                </div>
                <div className="px-4 xl:px-0">
                    Ezért érdemes lehet megünnepelni gyönyörű virágokkal, gyertyákkal feldíszített közegben,
                    ami lehet a szabadban, az otthonod melegében, vagy akár egy bérelt teremben a kedvenc "ünneplő" ruhádba öltözve.
                    Meglátod mennyire jó érzés fogadni a szeretetet, odafigyelést, vagy akár egy kis kényeztetést.
                    Pl: hajfonás, koszorúkészítés, masszázs, lábmosás.
                </div>
                <div className="px-4 xl:px-0">
                    Az ünnep minden esetben a TE személyiségedhez, igényeidhez lesz igazítva.
                    Bár általában vannak állandó elemei, mint például az áldásadás, fonálceremónia, útravaló ajándék.
                </div>
                <div className="px-4 xl:px-0">
                    A szülés óráiban lesz majd mihez visszanyúlnod, az itt megtapasztalt megerősítések,
                    pozitív energiák a tapasztalatok alapján sokszor erőt adnak a vajúdó anyának.
                    Ha szeretnéd, veled lehetnek szülésed alatt az itt kapott ajándékok,
                    amik szintén emlékeztetni tudnak erre a különleges napra.
                </div>
                <div className="px-4 my-4 xl:px-0 text-center text-3xl text-primary font-bold">
                    Ha szeretnéd magadat, lányodat, barátnődet meglepni egy ősi gyökerekkel rendelkező,
                    de abszolút modern szertartással Budapesten belül, akkor bátran fordulj hozzám!
                </div>
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