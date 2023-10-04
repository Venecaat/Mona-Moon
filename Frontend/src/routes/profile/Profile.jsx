
export const Profile = () => {
    return (
        <div className="text-2xl font-semibold shadow-2xl pt-2">
            <div className="tabs tabs-boxed justify-center bg-base-100">
                <button type="button" className="tab tab-active text-xl">Profil</button>
                <button type="button" className="tab text-xl">Beállítások</button>
            </div>
            <hr className="xl:w-full my-2 border-2 border-primary rounded" />
            <div className="hero font-bold">
                <div className="hero-content flex-col lg:flex-row px-0 md:p-4 w-full justify-normal">
                    <img src="/src/assets/images/profile_img_tmp.jpg" className="max-w-xs sm:max-w-sm rounded-lg shadow-2xl lg:mr-8" />
                    <div className="grid gap-5 my-4 lg:my-0">
                        <h3>Focalors alias Lady Furina</h3>
                        <h3>hydro.archon@fontaine.fo</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}