import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { URL } from "../API";

function Taom() {
    const { id } = useParams();
    const url = URL + "recipes/" + id;
    const { data: taom, isPending, error, postNewDate } = useFetch(url);

    return (
        <>
            {taom && (
                <div
                    className="hero h-[75vh]"
                    style={{ backgroundImage: `url(${taom.image})` }}
                >
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="w-full text-white ">
                            <h1 className="mb-5 text-2xl font-bold md:text-3xl lg:text-6xl ">
                                {taom.title}
                            </h1>{" "}
                            <div className="  text-xl italic md:text-3xl lg:text-4xl">
                                Masalliqlar:
                                {taom.ingredients.map((item) => {
                                    return <p key={item}>{item}</p>;
                                })}
                            </div>
                            <p className=" text-justify my-5 text-xl md:text-2xl lg:text-3xl">
                                Tayyorlash usuli: {taom.method}
                            </p>
                            <Link to={`/`} className="btn btn-primary">
                                Home
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Taom;
