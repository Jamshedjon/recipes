import { Link, useParams } from "react-router-dom";
import { URL } from "../API";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { createPortal } from "react-dom";
function TaomlarList({ taomlar, tur }) {
    // const { User, changeId } = useContext(AppContext);
    const User = JSON.parse(localStorage.getItem("user"));
    function handleDelete(deleteId) {
        const removeData = (id) => {
            const removeurl =
                tur === "uzb"
                    ? URL + "uzbek_taomlari/" + id
                    : URL + "recipes/" + id;
            console.log(removeurl);
            fetch(removeurl, {
                method: "DELETE",
            })
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => {
                    console.error(err);
                });
        };
        if (User && User.password === "jamshedjon") {
            removeData(deleteId);
        }
    }
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
                            <img src={image} alt="car!" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{title}</h2>
                            <p>Masalliqlar: {ingredients}</p>
                            <div className="card-actions justify-end">
                                {User && User.password === "jamshedjon" ? (
                                    <form>
                                        <button
                                            id={id}
                                            onClick={(e) => {
                                                handleDelete(e.target.id);
                                            }}
                                            className="btn "
                                        >
                                            Delete
                                        </button>
                                    </form>
                                ) : (
                                    <label
                                        htmlFor="my_modal_log_in"
                                        className="btn"
                                    >
                                        Delete
                                    </label>
                                )}
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
            {createPortal(
                <>
                    <input
                        type="checkbox"
                        id="my_modal_log_in"
                        className="modal-toggle"
                    />
                    <div className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-5xl">Ogohlantish!</h3>
                            <p className="py-4 text-3xl">
                                Malumotni o'chirish uchun admin ruxsati kerak!!!
                            </p>
                            <div className="modal-action">
                                <label
                                    htmlFor="my_modal_log_in"
                                    className="btn"
                                >
                                    Close!
                                </label>
                            </div>
                        </div>
                    </div>
                </>,
                document.body
            )}
        </ul>
    );
}

export default TaomlarList;
