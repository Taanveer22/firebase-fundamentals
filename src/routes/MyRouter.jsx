import { createBrowserRouter } from "react-router-dom";
import MyLayout from "../layouts/MyLayout";
import Home from "../components/Home";
import About from "../components/About";

const MyRouter = createBrowserRouter([
  {
    path: "/",
    element: <MyLayout></MyLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
]);

export default MyRouter;
