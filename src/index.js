import React from "react";
import ReactDOM  from "react-dom/client";
import App from "./Components/App";
import "./styles/index.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Rest_Card from "./Components/Rest_Card";
import RestaurantMenu from "./Components/RestaurantMenu";
import {createBrowserRouter, RouterProvider} from "react-router-dom"
var ele = document.getElementById('root');
const app = ReactDOM.createRoot(ele);

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element :<Rest_Card/>
            },
            {

                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu/>
            }
        ]
    },
]);



app.render(<RouterProvider router={appRouter}/>)