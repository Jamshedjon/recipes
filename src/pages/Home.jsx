import { Link } from "react-router-dom";
function Home() {
    return (
        <div className="carousel w-full h-[75vh]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="/Osh.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">
                        ❮
                    </a>
                    <Link to={`/uzbTaomlari`} className="btn glass btn-lg">
                        Uzbek Taomlari
                    </Link>
                    <a href="#slide2" className="btn btn-circle">
                        ❯
                    </a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full ">
                <img src="/Salad.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">
                        ❮
                    </a>
                    <Link to={`/chetelTaomlari`} className="btn glass btn-lg">
                        Chetel Taomlari
                    </Link>
                    <a href="#slide1" className="btn btn-circle">
                        ❯
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;
