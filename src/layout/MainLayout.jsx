import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function MainLayout() {
    return (
        <div className=" relative">
            <Navbar />
            <main className="container py-9 mt-24">
                <Outlet />
            </main>
        </div>
    );
}

export default MainLayout;
