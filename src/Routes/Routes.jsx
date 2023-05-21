import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddToy from "../pages/AddToy/AddToy";
import Blogs from "../pages/Blogs/Blogs";
import PrivateRoute from "./PrivateRoute";
import AllToys from "../pages/AllToys/AllToys";
import ToysDetails from "../pages/ToysDetails/ToysDetails";
import MyToys from "../pages/MyToys/MyToys";
import MyToyUpdate from "../pages/myToyUpdate/MyToyUpdate";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
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
                path:'/allToys',
                element:<AllToys></AllToys>,
                loader: () => fetch('http://localhost:5000/allToys')
            },
            {
                path:'allToys/:id',
                element:<PrivateRoute><ToysDetails></ToysDetails></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/allToys/${params.id}`)
            },
            {
                path:'/myToys',
                element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path:'/myToys/:id',
                element:<PrivateRoute><MyToyUpdate></MyToyUpdate></PrivateRoute>,
                loader:({params}) => fetch(`http://localhost:5000/myToys/${params.id}`)
            },
            {
                path:'blogs',
                element:<Blogs></Blogs>
            } 
        ]
    },
    {
        path:'*',
        element:<ErrorPage></ErrorPage>
    }
])

export default router;
