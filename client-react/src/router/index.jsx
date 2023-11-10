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
        path: "/pub/cuisines/:id",
        element: <Detail />,
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
        loader: () => {
            const access_token = localStorage.getItem("access_token")
            if (!access_token) {
                throw redirect("/login")
            }
            return null;
        },
        children: [
            {
                path: "/add-users",
                element: <Register />,
            },
            {
                path: "/cuisines",
                element: <Cuisines />,
            },
            {
                path: "/categories",
                element: <Categories />,
            },
        ]},
]);

export default router