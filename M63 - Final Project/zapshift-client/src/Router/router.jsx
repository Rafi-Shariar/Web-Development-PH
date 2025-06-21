import { createBrowserRouter } from "react-router";
import HomePage from "../Pages/HomePage";
import RootLayout from "../Layouts/RootLayout";
import LoginPage from "../Pages/LoginPage";
import RegiserPage from "../Pages/RegiserPage";
import BeARiderPage from "../Pages/BeARiderPage";
import AuthLayout from "../Layouts/AuthLayout";
import CoveragePage from "../Pages/CoveragePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children:[
        {index:true, element:<HomePage></HomePage>},
        { path: 'bearider', element:<BeARiderPage></BeARiderPage>},
        { path: 'coverage', element:<CoveragePage></CoveragePage>,
          loader: () => fetch('./warehouses.json')
        },
        
    ]
  },
  {
    path:'/',
    element: <AuthLayout></AuthLayout>,
    children:[
      { path: 'login', element:<LoginPage></LoginPage>},
      { path: 'register', element:<RegiserPage></RegiserPage>},
      { path: 'forgotpass', element:<LoginPage></LoginPage>},
    ]
  },
  
]);