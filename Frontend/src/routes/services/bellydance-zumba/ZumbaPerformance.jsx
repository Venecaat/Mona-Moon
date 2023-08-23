
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
            <hr className="w-11/12 xl:w-full mx-auto my-8 border-2 border-primary rounded" />
        </div>
    )
}