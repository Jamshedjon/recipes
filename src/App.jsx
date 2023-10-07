import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Taom from "./components/Taom";
import ChetTaom from "./components/ChetTaom";
import UzbekTaomlari from "./pages/UzbekTaomlari";
import ChetelTaomlari from "./pages/ChetelTaomlari";
import Error from "./components/Error";
import CreateRecipes from "./pages/CreateRecipes";

function App() {
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <MainLayout />,
            errorElement: <Error />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: "/uzbTaomlari",
                    element: <UzbekTaomlari />,
                },
                {
                    path: "/chetelTaomlari",
                    element: <ChetelTaomlari />,
                },
                {
                    path: "/taom/:id",
                    element: <Taom />,
                },
                {
                    path: "/create",
                    element: <CreateRecipes />,
                },
                {
                    path: "/chet/:id",
                    element: <ChetTaom />,
                },
            ],
        },
    ]);
    return <RouterProvider router={routes} />;
}

export default App;
