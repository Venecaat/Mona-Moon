import { NormalParagraph } from "../../components/NormalParagraph.jsx";
import { HighlightedParagraph } from "../../components/HighlightedParagraph.jsx";
import { HeroParagraph } from "../../components/HeroParagraph.jsx";

export const BellyDanceZumba = () => {
    return (
        <div className="text-xl font-semibold">
            <div className="grid grid-cols-1 mb-6 text-center md:text-left text-2xl gap-7">
                <HeroParagraph text="Gyerekkorom óta érdekelnek a különböző táncok,
                    mindig foglalkoztatott a színpad világa, az előadóművészet. Több táncműfajjal is megismerkedtem gyerekkoromban
                    (balett, néptánc, társastánc, modern tánc, cigány tánc, salsa, stb.),
                    de legjobban a Kelet varázslatos tánca ragadott meg."
                               imgPath="/src/assets/images/intro_bellydance_zumba_1.png"
                               imgAlt="Beczkó Mónika" imgRightSide={true}
                />
                <HeroParagraph text="A hastáncot 2005 januárjában kezdtem el, és azóta az életem egyik legfontosabb részévé vált.
                    Ezt a nőies táncműfajt Dina Jamilah ismertette meg velem az 1001 Éjszaka Hastánc Stúdióban."
                               imgPath="/src/assets/images/intro_bellydance_zumba_2.png"
                               imgAlt="A kezdetek" imgRightSide={false}
                />
                <HeroParagraph text="Akkoriban sok hazai versenyen vettem részt szólóban és Dina versenyző csapatának tagjaként.
                    Számos versenyt nyertünk csoportban, illetve szólóban is általában dobogós helyezéseket értem el.
                    Külföldi és hazai oktatók workshopjait is gyakran látogattam. Rendszeres fellépő voltam keleti éttermekben,
                    illetve privát fellépéseket is sokszor vállaltam születésnapokon, esküvőkön, stb."
                               imgPath="/src/assets/images/intro_bellydance_zumba_3.png"
                               imgAlt="Versenyek és fellépések" imgRightSide={true}
                />
                <HighlightedParagraph text="Ha táncolsz, élsz, ha élsz, táncolsz." />
                <HeroParagraph text="2008-tól kezdődően 3,5 éven keresztül tanítottam Dina tánciskolájában,
                    majd 2012-2013-ban vendégszerepeltem Olaszországban."
                               imgPath="/src/assets/images/intro_bellydance_zumba_4.png"
                               imgAlt="Oktatás és külföld" imgRightSide={false}
                />
                <HeroParagraph text="A Zumbáról 2010-ben hallottam először. Beto Perez, a Zumba megalkotójának DVD-je
                    került a kezembe, ami nagyon megfogott. Elkezdtem több oktató óráját is látogatni. 2013-ban döntöttem úgy,
                    hogy a hastáncon kívül a Zumba fitnesszel is szeretnél foglalkozni. Ezért 2013 szeptemberében elvégeztem a
                    Zumba Fitness LLC. hivatalos Basic 1. képzését, majd később a Zumba Kids képzést is.
                    Ezután pedig termet béreltem, és elkezdtem a saját hastánc és Zumba óráim felépítését."
                               imgPath="/src/assets/images/intro_bellydance_zumba_5.png"
                               imgAlt="Zumba az új szenvedély" imgRightSide={true}
                />
                <HeroParagraph text="2015-ben Tóth Bea Amaraya Step by Step Bellydance és A-Dance Oktatóképzőjén vettem részt,
                    amiből nagyon sok újdonságot tanultam. Valamint Amaraya Társulatának tagjává váltam.
                    2-3 évig szerepeltem a társulattal különböző rendezvényeken, versenyeken, táncszínházi előadásokon.
                    Ez egy szuper izgalmas időszak volt az életemben."
                               imgPath="/src/assets/images/intro_bellydance_zumba_6.png"
                               imgAlt="Táncszínház és az A-Dance" imgRightSide={false}
                />
                <HeroParagraph text="2016-tól a tanítványaimnak is elkezdtem fellépő koreográfiákat készíteni, és fellépéseket vállalni.
                    Velük azóta is a Mona Moon és az Ezüst Csillagok néven működünk."
                               imgPath="/src/assets/images/intro_bellydance_zumba_7.png"
                               imgAlt="Mona Moon és az Ezüst Csillagok" imgRightSide={true}
                />
                <HeroParagraph text="2019 tavaszától, a kislányom születése után fél évig nem tartottam órát,
                    illetve fellépésem sem volt. Majd az újrakezdés után nem sokkal kezdődött a covid, ami miatt átálltam online órákra.
                    Jelenleg is tartok online órákat, illetve egy ideje már a személyes órákat is újraindítottam.
                    2022 nyár elején pedig a hosszú kényszerpihenő után újra színpadra állhattunk."
                               imgPath="/src/assets/images/intro_bellydance_zumba_8.png"
                               imgAlt="Napjaink" imgRightSide={false}
                />
                <NormalParagraph text="A tánc adja az erőt a mindennapokhoz. Amikor táncolok, kinyílik a világ,
                    és ilyenkor vagyok igazán önmagam. Csodálatos dolog számomra a színpadon állni, adni a közönségnek magamból,
                    az energiámból a tánc univerzális nyelve által, és közben érezni a szeretetüket." extraClasses="font-bold" />
            </div>
        </div>
    )
}