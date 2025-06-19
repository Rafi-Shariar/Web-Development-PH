import { createBrowserRouter } from "react-router";
import HomePage from "../Pages/HomePage";
import RootLayout from "../Layouts/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children:[
        {index:true, element:<HomePage></HomePage>},
        
    ]
  },
]);