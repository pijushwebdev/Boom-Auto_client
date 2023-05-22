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
                loader: () => fetch('https://boom-auto-server.vercel.app/allToys')
            },
            {
                path:'allToys/:id',
                element:<PrivateRoute><ToysDetails></ToysDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://boom-auto-server.vercel.app/allToys/${params.id}`)
            },
            {
                path:'/myToys',
                element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path:'/updateMyToys/:id', //myToys
                element:<PrivateRoute><MyToyUpdate></MyToyUpdate></PrivateRoute>,
                loader:({params}) => fetch(`https://boom-auto-server.vercel.app/updateMyToys/${params.id}`)
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
