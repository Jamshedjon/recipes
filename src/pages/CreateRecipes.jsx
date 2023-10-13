import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Preview from "../components/Preview";
import { URL } from "../API";
import { useFetch } from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

function CreateRecipes() {
    const [ingradient, setIngr] = useState("");
    const [ingradients, setIngradients] = useState("");
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [method, setMethod] = useState("");
    const [cookingTime, setCookingTime] = useState("");
    const [category, setCategory] = useState("");
    const navigate = useNavigate();
    const { data, isPending, error, postNewDate } = useFetch(
        URL + category,
        "POST"
    );

    const handleAdd = (e) => {
        e.preventDefault();

        if (!ingradients.includes(ingradient) && ingradient !== "") {
            setIngradients((prev) => {
                return [...prev, ingradient];
            });

            setIngr("");
        }
    };

    const handleSubmit = (e) => {
        if (ingradients.length === 0) {
            setIngradients((prev) => {
                return [...prev, ingradient];
            });
        }
        e.preventDefault();
        Array.from(e.target).forEach((e) => (e.value = ""));

        const postData = {
            id: uuidv4(),
            title,
            ingradients,
            image,
            method,
            cookingTime: `${cookingTime} minutes`,
        };

        postNewDate(postData);
    };
    useEffect(() => {
        if (data) {
            navigate("/");
        }
    }, [data]);
    return (
        <div className="flex gap-7">
            <form onSubmit={handleSubmit} className="  w-1/2">
                <div className="form-control w-full max-w-md">
                    <label className="label">
                        <span className="label-text">Title:</span>
                    </label>
                    <input
                        required
                        type="text"
                        placeholder="Pizza"
                        className="input input-bordered input-warning w-full max-w-md"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="form-control w-full max-w-md">
                    <label className="label">
                        <span className="label-text">Ingradients:</span>
                    </label>
                    <div
                        className="flex gap-3"
                        //  onSubmit={addIngradient}
                    >
                        <input
                            type="text"
                            placeholder="Potatos"
                            className="input input-bordered input-warning w-full max-w-md"
                            onChange={(e) => {
                                setIngr(e.target.value);
                            }}
                            value={ingradient}
                        />
                        <button
                            onClick={handleAdd}
                            className="btn btn-secondary"
                        >
                            Add
                        </button>
                    </div>
                    <p>
                        Ingradients:
                        {ingradients &&
                            ingradients.map((ing) => {
                                return <span key={ing}>{ing}, </span>;
                            })}
                    </p>
                </div>
                <div className="form-control w-full max-w-md">
                    <label className="label">
                        <span className="label-text">Image:</span>
                    </label>
                    <input
                        required
                        type="url"
                        placeholder="https://picsum.photos"
                        className="input input-bordered input-warning w-full max-w-md"
                        onChange={(e) => setImage(e.target.value)}
                    />
                </div>
                <div className="form-control w-full max-w-md">
                    <label className="label">
                        <span className="label-text">Method:</span>
                    </label>
                    <textarea
                        type="text"
                        placeholder="Type here"
                        className=" textarea input-bordered input-warning w-full max-w-md"
                        onChange={(e) => setMethod(e.target.value)}
                    />
                </div>
                <div className="form-control w-full max-w-md mb-3">
                    <label className="label">
                        <span className="label-text">Cooking time:</span>
                    </label>
                    <input
                        required
                        type="number"
                        placeholder="5 minutes"
                        className="input input-bordered input-warning w-full max-w-md"
                        onChange={(e) => setCookingTime(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text">Uzbek taomlari</span>
                        <input
                            type="radio"
                            id="uzbek_taomlari"
                            name="radio-10"
                            className="radio checked:bg-blue-500"
                            onChange={(e) => setCategory(e.target.id)}
                        />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text">Chetel taomlari</span>
                        <input
                            type="radio"
                            id="recipes"
                            name="radio-10"
                            className="radio checked:bg-red-500"
                            onChange={(e) => setCategory(e.target.id)}
                        />
                    </label>
                </div>
                <button className="btn btn-success text-2xl   ">Create</button>
            </form>
            <Preview
                data={{ title, ingradients, image, method, cookingTime }}
            />
        </div>
    );
}

export default CreateRecipes;
