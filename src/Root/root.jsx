import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/layout";
import Error from "../components/Error/Error";
import Home from "../components/Home/Home";
import Donations from "../components/Donations/Donations";
import Statistics from "../components/Statistics/Statistics";

const root = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement:<Error/>,
    children:[
        {
            path:'/',
            element:<Home/>,
            loader:()=>fetch(`/public/data.json`)
        },
        {
            path:'/donation',
            element:<Donations/>
        },
        {
            path:'/statistics',
            element:<Statistics/>
        },
    ]
  },
]);

export default root;
