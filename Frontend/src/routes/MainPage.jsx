import { Header } from "../components/mainpage/Header.jsx";
import { ServiceCard } from "../components/mainpage/ServiceCard.jsx";

export const MainPage = () => {
    return (
        <div>
            <div className="carousel w-full xl:rounded-box">
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

            <Header title="Hastánc - Zumba" classes="text-center" />
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-y-5">
                <ServiceCard imageLink="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" linkTitle="Mi is a Hastánc?" />
                <ServiceCard imageLink="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" linkTitle="Mi is a Zumba?" />
                <ServiceCard imageLink="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" linkTitle="Engedd, hogy a kelet misztikus világa magával ragadjon" />
                <ServiceCard imageLink="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" linkTitle="Zumba fitness bemutató rendezvényekre" />
            </div>

            <Header title="Telihold Anyaoltalom" classes="text-center" />
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-y-5">
                <ServiceCard imageLink="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" linkTitle="Fitmommy várandós hastánc" />
                <ServiceCard imageLink="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" linkTitle="Fitmommy várandós latin fitness" />
                <ServiceCard imageLink="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" linkTitle="Dúlai támogatás" />
                <ServiceCard imageLink="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" linkTitle="Gyermekágyas gondoskodás" />
                <ServiceCard imageLink="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" linkTitle="Császármetszés feldolgozó csoport" />
                <ServiceCard imageLink="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" linkTitle="Szülésáldó ünnep" />
            </div>


            <div className="flex w-full mt-6">
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
                    Gyermekágyas gondoskodás<br />
                    Szülésáldó ünnep<br />
                    Fitmommy várandós latin fitness
                </div>
            </div>
        </div>
    )
}