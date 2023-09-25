import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/layout";
import Error from "../components/Error/Error";
import Home from "../components/Home/Home";
import Statistics from "../components/Statistics/Statistics";
import CardDetails from "../components/CardDetails/CardDetails";
import DonationDetails from "../components/DonationDetails/DonationDetails";

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
            path:'/details/:id',
            element:<CardDetails/>,
            loader:()=>fetch(`/public/data.json`)
        },
        {
            path:'/donation',
            element:<DonationDetails/>,
            loader:()=>fetch(`/public/data.json`)
        },
        {
            path:'/statistics',
            element:<Statistics/>
        },
    ]
  },
]);

export default root;
