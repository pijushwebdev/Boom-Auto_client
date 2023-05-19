import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddToy from "../pages/AddToy/AddToy";
import Blogs from "../pages/Blogs/Blogs";
import PrivateRoute from "./PrivateRoute";
import AllToys from "../pages/AllToys/AllToys";
import ToysDetails from "../pages/ToysDetails/ToysDetails";


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
                path:'/all-toys',
                element:<AllToys></AllToys>,
                loader: () => fetch('http://localhost:5000/all-cars')
            },
            {
                path:'all-toys/:id',
                element:<PrivateRoute><ToysDetails></ToysDetails></PrivateRoute>
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
