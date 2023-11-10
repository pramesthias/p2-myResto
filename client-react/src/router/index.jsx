import { createBrowserRouter, redirect } from "react-router-dom";

import Login from "../views/Login";
import Register from "../views/Register";
import Detail from "../views/Detail";
import Home from "../views/Home";
import Cuisines from "../views/Cuisines";
import Categories from "../views/Categories";
import { Navbar } from "../components/Navbar";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/pub/cuisines",
        element: <Home />,
    },
    {
        loader: () => {
            const access_token = localStorage.getItem("access_token")
            if (access_token) {
                throw redirect("/cuisines")
            }
            return null;
        },
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/pub/cuisines/:id",
        element: <Detail />,
    },
    {
        // loader: () => {
        //     const access_token = localStorage.getItem("access_token")
        //     if (!access_token) {
        //         throw redirect("/pub/cuisines") //("/login")
        //     }
        //     return null;
        // },
        path: "/cuisines",
        element: <Cuisines />,
    },
    {
        path: "/categories",
        element: <Categories />,
    },
]);

export default router