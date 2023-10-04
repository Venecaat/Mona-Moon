import {useState} from "react";

export const Profile = () => {
    const [isProfile, setIsProfile] = useState(true);
    const changeTab = (key) => {
        const profileButton = document.getElementById("profile-btn");
        const settingsButton = document.getElementById("settings-btn");

        const clickedBtn = key.target.innerHTML;

        if (clickedBtn === "Profil") {
            if (!profileButton.classList.contains("tab-active")) {
                settingsButton.classList.remove("tab-active");
                profileButton.classList.add("tab-active");

                setIsProfile(true);
            }
        }
        else {
            if (!settingsButton.classList.contains("tab-active")) {
                profileButton.classList.remove("tab-active");
                settingsButton.classList.add("tab-active");

                setIsProfile(false);
            }
        }
    }

    return (
        <div className="text-2xl font-semibold shadow-2xl pt-2 rounded-box">
            { isProfile ?
                (
                    <div>
                        <div className="tabs tabs-boxed justify-center bg-base-100">
                            <button id="profile-btn" type="button" onClick={ changeTab } className="tab tab-active text-xl text-primary hover:text-accent">Profil</button>
                            <button id="settings-btn" type="button" onClick={ changeTab } className="tab text-xl text-primary hover:text-accent">Beállítások</button>
                        </div>
                        <hr className="xl:w-full my-2 border-2 border-primary rounded" />
                        <div className="hero font-bold">
                            <div className="hero-content flex-col lg:flex-row px-0 md:p-4 w-full justify-normal">
                                <img src="/src/assets/images/profile_img_tmp.jpg" className="max-w-xs sm:max-w-sm rounded-lg shadow-2xl lg:mr-8" />
                                <div className="grid gap-6 my-4 lg:my-0 w-full text-center">
                                    <h3>Focalors alias Lady Furina</h3>
                                    <h3>hydro.archon@fontaine.fo</h3>
                                    <button type="button" className="btn w-11/12 md:w-1/2 lg:w-4/6 h-fit p-1 mx-auto bg-secondary text-primary font-bold border-secondary text-xl hover:bg-accent hover:border-accent">
                                        Név megváltoztatása
                                    </button>
                                    <button type="button" className="btn w-11/12 md:w-1/2 lg:w-4/6 h-fit p-1 mx-auto bg-secondary text-primary font-bold border-secondary text-xl hover:bg-accent hover:border-accent">
                                        E-mail cím megváltoztatása
                                    </button>
                                    <button type="button" className="btn w-11/12 md:w-1/2 lg:w-4/6 h-fit p-1 mx-auto bg-secondary text-primary font-bold border-secondary text-xl hover:bg-accent hover:border-accent">
                                        Jelszó megváltoztatása
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) :
                (
                    <div className="min-h-screen">
                        <div className="tabs tabs-boxed justify-center bg-base-100">
                            <button id="profile-btn" type="button" onClick={ changeTab } className="tab tab-active text-xl text-primary hover:text-accent">Profil</button>
                            <button id="settings-btn" type="button" onClick={ changeTab } className="tab text-xl text-primary hover:text-accent">Beállítások</button>
                        </div>
                        <hr className="xl:w-full my-2 border-2 border-primary rounded" />
                        <div className="grid grid-cols-1 p-4 gap-8">
                            <button type="button" className="btn w-11/12 md:w-1/2 h-fit p-1 mx-auto bg-secondary text-primary font-bold border-secondary text-xl hover:bg-accent hover:border-accent">
                                Név megváltoztatása
                            </button>
                            <button type="button" className="btn w-11/12 md:w-1/2 h-fit p-1 mx-auto bg-secondary text-primary font-bold border-secondary text-xl hover:bg-accent hover:border-accent">
                                E-mail cím megváltoztatása
                            </button>
                            <button type="button" className="btn w-11/12 md:w-1/2 h-fit p-1 mx-auto bg-secondary text-primary font-bold border-secondary text-xl hover:bg-accent hover:border-accent">
                                Jelszó megváltoztatása
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}