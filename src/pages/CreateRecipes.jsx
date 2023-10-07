import React, { useState } from "react";

function CreateRecipes() {
    const [ingradients, setIngradients] = useState("");
    const addBtn = (item) => {
        setIngradients((prev) => {
            if (!prev.includes(item)) prev += item;
        });
    };
    const handleChange = (event) => {
        setIngradients(event.target.value);
    };

    return (
        <div>
            <form>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Title:</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Pizza"
                        className="input input-bordered input-warning w-full max-w-xs"
                    />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Ingradients:</span>
                    </label>
                    <div className="flex gap-3">
                        <input
                            onChange={handleChange}
                            type="text"
                            placeholder="Potatos"
                            className="input input-bordered input-warning w-full max-w-xs"
                            value={ingradients}
                        />
                        <button
                            onClick={() => {
                                addBtn(item);
                            }}
                            className="btn btn-secondary"
                        >
                            Add
                        </button>
                    </div>
                    <p>
                        Ingradients: <span>{ingradients}</span>
                    </p>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Image:</span>
                    </label>
                    <input
                        type="url"
                        placeholder="https://picsum.photos"
                        className="input input-bordered input-warning w-full max-w-xs"
                    />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Method:</span>
                    </label>
                    <textarea
                        type="text"
                        placeholder="Type here"
                        className=" textarea input-bordered input-warning w-full max-w-xs"
                    />
                </div>
                <div className="form-control w-full max-w-xs mb-3">
                    <label className="label">
                        <span className="label-text">Cooking time:</span>
                    </label>
                    <input
                        type="url"
                        placeholder="5 minutes"
                        className="input input-bordered input-warning w-full max-w-xs"
                    />
                </div>
                <button className="btn btn-success text-2xl   ">Create</button>
            </form>
        </div>
    );
}

export default CreateRecipes;
