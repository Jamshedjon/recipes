import { Link } from "react-router-dom";
function TaomlarList({ taomlar, tur }) {
    return (
        <ul className=" grid lg:grid-cols-3 md:grid-cols-2 gap-4">
            {taomlar.map((taom) => {
                const { id, title, ingredients, image } = taom;
                return (
                    <li
                        key={id}
                        className="card max-w-full md:max-w-full glass"
                    >
                        <figure>
                            <img src={`./${image}`} alt="car!" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{title}</h2>
                            <p>Masalliqlar: {ingredients}</p>
                            <div className="card-actions justify-end">
                                {tur === "uzb" ? (
                                    <Link
                                        to={`/taom/${id}`}
                                        className="btn btn-primary"
                                    >
                                        Batafsil
                                    </Link>
                                ) : (
                                    <Link
                                        to={`/chet/${id}`}
                                        className="btn btn-primary"
                                    >
                                        Batafsil
                                    </Link>
                                )}
                            </div>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}

export default TaomlarList;
