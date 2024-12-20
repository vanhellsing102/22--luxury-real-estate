import { createBrowserRouter } from "react-router-dom";
import Root from "../componets/Root/Root";
import Home from "../componets/Home/Home";
import Categories from "../componets/Categories/Categories";
import CardsDetails from "../componets/CardsDetails/CardsDetails";
import BeachFront from "../componets/Categories/BeachFront/BeachFront";
import Mansions from "../componets/Categories/Mansions/Mansions";
import PentHouse from "../componets/Categories/PentHouse/PentHouse";
import PrivateIslands from "../componets/Categories/PrivateIslands/PrivateIslands";
import Resorts from "../componets/Categories/Resorts/Resorts";
import Villas from "../componets/Categories/Villas/Villas";
import Login from "../componets/Navbar/Login";
import Register from "../componets/Navbar/Register";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import Blogs from "../componets/Blogs/Blogs";
import Contact from "../componets/Contact/Contact";
import ErrorPage from "../ErrorPage/ErrorPage";
import Profile from "../componets/Profile/Profile";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/penthouse.json')
            },
            {
                path: '/categories',
                element: <Categories></Categories>
            },
            {
                path: '/details/:id',
                element: <PrivateRoutes><CardsDetails></CardsDetails></PrivateRoutes>,
                loader: () => fetch('/categories.json')
            },
            {
                path: '/beachfront',
                element: <BeachFront></BeachFront>,
                loader: () => fetch('/beachfront.json')
            },
            {
                path: '/mansions',
                element: <Mansions></Mansions>,
                loader: () => fetch('/mansions.json')
            },
            {
                path: '/penthouse',
                element: <PentHouse></PentHouse>,
                loader: () => fetch('/penthouse.json')
            },
            {
                path: '/private-islands',
                element: <PrivateIslands></PrivateIslands>,
                loader: () => fetch('/privateislands.json')
            },
            {
                path: '/resorts',
                element: <Resorts></Resorts>,
                loader: () => fetch('/resorts.json')
            },
            {
                path: '/villas',
                element: <Villas></Villas>,
                loader: () => fetch('villas.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/profile',
                element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
            }
        ]
    }
])

export default router;