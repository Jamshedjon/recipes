import React from "react";

function Modal({
    handleSubmit,
    setusername,
    setpassword,
    setPastype,
    pastype,
    message,
}) {
    return (
        <>
            <input
                type="checkbox"
                id="my_modal_sign_up"
                className="modal-toggle"
            />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Sign up</h3>

                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col items-center"
                    >
                        <div className="form-control w-full max-w-md">
                            <label className="label">
                                <span className="label-text font-bold">
                                    User name:
                                </span>
                            </label>
                            <input
                                required
                                type="text"
                                placeholder="John"
                                className="input input-bordered input-warning w-full max-w-md"
                                onChange={(e) => setusername(e.target.value)}
                            />
                        </div>
                        <div className="form-control w-full max-w-md mb-3">
                            <label className="label">
                                <span className="label-text  font-bold">
                                    Password:
                                </span>
                            </label>

                            <div className="flex gap-3">
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="Type here"
                                    className=" input input-bordered input-warning w-full max-w-md"
                                    onChange={(e) =>
                                        setpassword(e.target.value)
                                    }
                                />
                                <div
                                    className="btn"
                                    onClick={() => {
                                        setPastype((prev) => {
                                            if (prev === "password") {
                                                return "text";
                                            } else {
                                                return "password";
                                            }
                                        });
                                    }}
                                >
                                    {pastype === "password" ? "show" : "hide"}
                                </div>
                            </div>
                        </div>
                        <p>{message}</p>
                        {!message ? (
                            <button className="btn btn-secondary w-full">
                                Signup
                            </button>
                        ) : (
                            <button className="btn btn-secondary w-full">
                                Sign in
                            </button>
                        )}
                    </form>
                    <div className="modal-action">
                        <label htmlFor="my_modal_sign_up" className="btn">
                            Close!
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;
