import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import HomeLayout from './Layouts/HomeLayout.jsx';
import HomePage from './Pages/HomePage.jsx';
import Update from './Components/Update.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children:[
      {index:true, element:<HomePage></HomePage>, loader:()=> fetch('http://localhost:3000/stocks')},
      {path:'update/:id', element:<Update></Update>, loader:({params})=> fetch(`http://localhost:3000/update/${params.id}`)},
      {path:'login', element:<Login></Login>},
      {path:'register', element:<Register></Register>}
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
      <RouterProvider router={router} />
     </AuthProvider>
  </StrictMode>,
)
