import { createPortal } from "react-dom";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { useFetch } from "../hooks/useFetch";
import { URL } from "../API";
import { v4 as uuidv4 } from "uuid";
import Modal from "../components/Modal";
import { AppContext } from "../context/AppContext";
function Home() {
    const { id, changeId } = useContext(AppContext);
    const [online, setOnline] = useState(
        JSON.parse(localStorage.getItem("user"))
    );
    const [pastype, setPastype] = useState("password");
    const paselem = document.getElementById("password");
    const navigate = useNavigate();
    if (paselem) {
        paselem.setAttribute("type", pastype);
    }
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [message, setMessage] = useState("");
    const { data, isPending, error, postNewDate } = useFetch(
        URL + "users",
        "POST"
    );
    const {
        data: usersData,
        isPanding,
        error: err,
        postNewDate: sdbjs,
    } = useFetch(URL + "users");
    useEffect(() => {
        if (usersData) {
            let message;
            usersData.forEach((user) => {
                if (username === user.username && password === user.password) {
                    message = "Bu nomdagi user mavjud";
                }
            });
            if (message) {
                setMessage(message);
            } else {
                setMessage("");
            }
        }
    }, [username, password]);
    const handleSubmit = (e) => {
        Array.from(e.target).forEach((e) => (e.value = ""));
        const data = {
            id: uuidv4(),
            username,
            password,
        };
        if (message) {
            localStorage.setItem("user", JSON.stringify(data));
        } else {
            postNewDate(data);
        }
    };
    useEffect(() => {
        if (data) {
            changeId(data);
        }
    }, [online]);

    return (
        <div className="carousel w-full h-[75vh]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="/Osh.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">
                        ❮
                    </a>
                    <Link to={`/uzbTaomlari`} className="btn glass btn-lg">
                        Uzbek Taomlari
                    </Link>
                    <a href="#slide2" className="btn btn-circle">
                        ❯
                    </a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full ">
                <img src="/Salad.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">
                        ❮
                    </a>
                    <Link to={`/chetelTaomlari`} className="btn glass btn-lg">
                        Chetel Taomlari
                    </Link>
                    <a href="#slide1" className="btn btn-circle">
                        ❯
                    </a>
                </div>
            </div>
            {createPortal(
                <>
                    {!online && (
                        <Modal
                            handleSubmit={handleSubmit}
                            setusername={setusername}
                            setpassword={setpassword}
                            setPastype={setPastype}
                            pastype={pastype}
                            message={message}
                            online={setOnline}
                        />
                    )}

                    <>
                        <input
                            type="checkbox"
                            id="my_modal_signed_in"
                            className="modal-toggle"
                        />
                        <div className="modal">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">
                                    You are already signed in!
                                </h3>
                                <p className="py-4">
                                    This modal works with a hidden checkbox!
                                </p>
                                <div className="modal-action">
                                    <label
                                        htmlFor="my_modal_signed_in"
                                        className="btn"
                                    >
                                        Close!
                                    </label>
                                </div>
                            </div>
                        </div>
                    </>
                </>,
                document.body
            )}
        </div>
    );
}

export default Home;
