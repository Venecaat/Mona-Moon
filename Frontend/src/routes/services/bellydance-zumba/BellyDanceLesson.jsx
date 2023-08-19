
export const BellyDanceLesson = () => {
    return (
        <div className="text-xl font-semibold">
            <div className="bg-base">
                <div className="hero-content flex-col md:flex-row gap-0 lg:gap-4">
                    <div>
                        <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left text-primary">Engedd, hogy a kelet misztikus világa magával ragadjon</h1>
                    </div>
                    <img src="/src/assets/images/hastanc-fellepes.jpg" className="max-w-sm shadow-2xl scale-90 lg:scale-100" />
                </div>
            </div>
            <hr className="w-11/12 xl:w-full mx-auto my-8 border-2 border-primary rounded" />
            <div className="grid grid-cols-1 mb-6 text-center md:text-left text-2xl gap-7">
                <div className="px-4 xl:px-0">
                    Ideje, hogy te is felfedezd azt a mozgásformát, ami neked a legjobb! Talán az én órámon találod meg, amit keresel. Várlak kortól és alkattól függetlenül!
                </div>
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
                <div className="grid grid-cols-1 bg-primary p-5 text-warning xl:rounded-box text-center gap-4">
                    <div>
                        Az órákon saját felelősségre veszel részt.
                    </div>
                    <div>
                        Amennyiben egészségügyi problémád, panaszod van, konzultálj kezelőorvosoddal.
                        Az órákon való részvétel nem helyettesíti az orvossal, gyógytornásszal való konzultációt.
                    </div>
                    <div>
                        A fentieket a részvételeddel elfogadottnak tekinted.
                    </div>
                </div>
            </div>
        </div>
    )
}
