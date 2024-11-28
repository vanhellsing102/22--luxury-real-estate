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

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
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
                element: <CardsDetails></CardsDetails>,
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
            }
        ]
    }
])

export default router;