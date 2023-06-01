
export const MainPage = () => {
    return (
        <div className="max-w-5xl mx-auto my-6">
            <div className="carousel w-full rounded-box">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div className="flex w-full">
                <div className="grid h-auto flex-grow card bg-base-300 rounded-box place-items-center py-4">
                    Hastánc - Zumba<br /><br />
                    Mi is a Zumba<br />
                    Mi is a hastánc<br />
                    Engedd, hogya kelet misztikus világa magával ragadjon<br />
                    Zumba fitness bemutató rendezvényekre
                </div>
                <div className="divider divider-horizontal">OR</div>
                <div className="grid h-auto flex-grow card bg-base-300 rounded-box place-items-center py-4">
                    Telihold Anyaoltalom<br /><br />
                    Fitmommy várandós hastánc<br />
                    Dúlai támogatás<br />
                    Szülésnap császármetszés feldolgozó csoport<br />
                    Gyerkmekágyas gondoskodás<br />
                    Szülésáldó ünnep<br />
                    Fitmommy várandós latin fitness
                </div>
            </div>
        </div>
    )
}