import React from "react";

function Preview({ data }) {
    const { image, method, cookingTime } = data;
    return (
        <div
            className="hero h-[70vh] w-full"
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="w-full text-white ">
                    <h1 className="mb-5 text-2xl font-bold md:text-3xl lg:text-6xl ">
                        {data.tite}
                    </h1>
                    <p className="  text-xl italic md:text-3xl lg:text-4xl">
                        Ingradients: {data.ingradients}
                    </p>
                    <p className=" text-justify my-5 text-xl md:text-2xl lg:text-3xl">
                        Method: {method}
                    </p>
                    <p className=" text-justify my-5 text-xl md:text-2xl lg:text-3xl">
                        Cooking Time: {cookingTime}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Preview;
