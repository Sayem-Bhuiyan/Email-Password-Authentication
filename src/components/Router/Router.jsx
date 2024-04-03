import { createBrowserRouter } from "react-router-dom";
import Root from "../../Root/Root";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from '../Register/Register'
import HeroRegister from "../HeroRegister/HeroRegister";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />

            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register></Register>
            },  
        {
            path: '/hero_register',
            element: <HeroRegister />
        }
         
        ]
    }
])