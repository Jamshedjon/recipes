import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { AppProvider } from "../context/AppContext";
function MainLayout() {
    return (
        <div className=" relative">
            <Navbar />
            <main className="container py-9 mt-24">
                <AppProvider>
                    <Outlet />
                </AppProvider>
            </main>
        </div>
    );
}
export default MainLayout;
