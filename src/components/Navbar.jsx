import { Link, NavLink } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa6";
import { useEffect, useState } from "react";
function getItemFromLocalStorage() {
    return localStorage.getItem("theme") || "light";
}

function Navbar() {
    const [mode, setMode] = useState(getItemFromLocalStorage);
    useEffect(() => {
        document.documentElement.dataset.theme = mode;
        localStorage.setItem("theme", mode);
    }, [mode]);

    const changeMode = () => {
        setMode((prev) => {
            return prev == "light" ? "dark" : "light";
        });
    };
    const online = JSON.parse(localStorage.getItem("user"));
    return (
        <nav className="py-6  bg-orange-300 shadow-md fixed top-0 left-0 right-0  z-50">
            <div className="container flex justify-between">
                <h1 className="text-3xl flex items-center justify-center gap-3">
                    UZB Foods
                </h1>
                <div className=" cursor-pointer text-5xl" onClick={changeMode}>
                    {mode == "light" ? <FaMoon /> : <FaSun />}
                </div>
                <div className=" flex gap-5 items-center">
                    <NavLink className="  btn btn-outline " to="/create">
                        Create
                    </NavLink>
                    <NavLink className="  btn btn-outline " to="/">
                        Home
                    </NavLink>
                    {!online && (
                        <label
                            htmlFor="my_modal_sign_up"
                            className="btn btn-outline"
                        >
                            Sign up
                        </label>
                    )}
                    <NavLink className="  btn btn-outline " to="/users">
                        Users
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
