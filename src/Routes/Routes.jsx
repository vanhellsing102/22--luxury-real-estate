import { createBrowserRouter } from "react-router-dom";
import Root from "../componets/Root/Root";
import Home from "../componets/Home/Home";
import Categories from "../componets/Categories/Categories";
import CardsDetails from "../componets/CardsDetails/CardsDetails";
import BeachFront from "../componets/Categories/BeachFront/BeachFront";
import Mansions from "../componets/Categories/Mansions/Mansions";

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
            // {
            //     path: '/details/:id',
            //     element: <CardsDetails></CardsDetails>,
            //     loader: () => fetch('/penthouse.json')
            // },
            {
                path: '/beachfront',
                element: <BeachFront></BeachFront>,
                loader: () => fetch('/beachfront.json')
            },
            {
                path: '/mansions',
                element: <Mansions></Mansions>,
                loader: () => fetch('/mansions.json')
            }
        ]
    }
])

export default router;