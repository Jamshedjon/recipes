import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Preview from "../components/Preview";

function CreateRecipes() {
    const [ingradientArr, setIngradientArr] = useState([]);
    const [ingradients, setIngradients] = useState({
        tite: "",
        ingradients: ingradientArr,
        image: "",
        method: "",
        cookingTime: "",
        id: uuidv4(),
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        Array.from(e.target).forEach((e) => (e.value = ""));
    };
    // const addIngradient = (e) => {
    //     e.preventDefault();

    //     setIngradientArr((prev) => {
    //         const data = [...prev];
    //         const targetValue = e.target.value;
    //         if (data.includes(!targetValue)) {
    //             data.push(targetValue);
    //         }
    //         return data;
    //     });
    // };
    return (
        <div className="flex gap-7">
            <form onSubmit={handleSubmit} className="  w-1/2">
                <div className="form-control w-full max-w-md">
                    <label className="label">
                        <span className="label-text">Title:</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Pizza"
                        className="input input-bordered input-warning w-full max-w-md"
                        onChange={(e) =>
                            setIngradients((prev) => {
                                return { ...prev, tite: e.target.value };
                            })
                        }
                        required
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
                            onChange={(e) =>
                                setIngradients((prev) => {
                                    return {
                                        ...prev,
                                        ingradients: e.target.value,
                                    };
                                })
                            }
                            required
                        />
                        <button className="btn btn-secondary">Add</button>
                    </div>
                    <p>
                        Ingradients: <span>{ingradientArr}</span>
                    </p>
                </div>
                <div className="form-control w-full max-w-md">
                    <label className="label">
                        <span className="label-text">Image:</span>
                    </label>
                    <input
                        type="url"
                        placeholder="https://picsum.photos"
                        className="input input-bordered input-warning w-full max-w-md"
                        onChange={(e) =>
                            setIngradients((prev) => {
                                return { ...prev, image: e.target.value };
                            })
                        }
                        required
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
                        onChange={(e) =>
                            setIngradients((prev) => {
                                return { ...prev, method: e.target.value };
                            })
                        }
                        required
                    />
                </div>
                <div className="form-control w-full max-w-md mb-3">
                    <label className="label">
                        <span className="label-text">Cooking time:</span>
                    </label>
                    <input
                        type="text"
                        placeholder="5 minutes"
                        className="input input-bordered input-warning w-full max-w-md"
                        onChange={(e) =>
                            setIngradients((prev) => {
                                return { ...prev, cookingTime: e.target.value };
                            })
                        }
                        required
                    />
                </div>
                <button className="btn btn-success text-2xl   ">Create</button>
            </form>
            <Preview data={ingradients} />
        </div>
    );
}

export default CreateRecipes;
