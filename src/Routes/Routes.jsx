import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddToy from "../pages/AddToy/AddToy";
import Blogs from "../pages/Blogs/Blogs";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children: [
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            },
            {
                path:'add-toy',
                element:<PrivateRoute><AddToy></AddToy></PrivateRoute>
            },
            {
                path:'blogs',
                element:<Blogs></Blogs>
            } 
        ]
    },
    {
        path:'*',
        element:<div>This is 404 page</div>
    }
])

export default router;
