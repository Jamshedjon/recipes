import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function Taom() {
    const { id } = useParams();

    const url = "http://localhost:3000/uzbek_taomlari/" + id;
    const { data: taom, isPanding, error } = useFetch(url);

    return (
        <>
            {taom && (
                <div
                    className="hero h-[75vh]"
                    style={{ backgroundImage: `url(/${taom.title}.jpg)` }}
                >
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="w-full text-white ">
                            <h1 className="mb-5 text-2xl font-bold md:text-3xl lg:text-6xl ">
                                {taom.title}
                            </h1>{" "}
                            <p className="  text-xl italic md:text-3xl lg:text-4xl">
                                Masalliqlar: {taom.ingredients}
                            </p>
                            <p className=" text-justify my-5 text-xl md:text-2xl lg:text-3xl">
                                Tayyorlash usuli: {taom.method} Lorem ipsum
                                dolor sit amet consectetur adipisicing elit.
                                Eligendi reprehenderit dolorem id animi non rem
                                incidunt officiis similique officia illum est
                                mollitia numquam sapiente sint beatae repellat
                                voluptas reiciendis quidem doloribus, saepe
                                totam quas nobis ipsa. Molestias officiis,
                                ullam, libero architecto perspiciatis deserunt
                                fugit ipsa reprehenderit obcaecati amet facilis
                                corporis.
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
