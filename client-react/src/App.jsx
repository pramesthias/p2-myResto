import { Navbar } from "./components/Navbar"
import Categories from "./views/Categories"
import Cuisines from "./views/Cuisines"
import Home from "./views/Home"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from "./views/Login";
import Register from "./views/Register";
import Detail from "./views/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
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
    path: "/cuisines",
    element: <Cuisines />,
  },
  {
    path: "/categories",
    element: <Categories />,
  },
]);


function App() {

  return <RouterProvider router={router} />

}

export default App
