import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './Layouts/MainLayout.jsx';
import UserDetail from './Components/UserDetail.jsx';
import Update from './Components/Update.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children:[
      {index:true, Component:App},
      {path:'users/:id',
        loader: ({params})=> fetch(`http://localhost:3000/users/${params.id}`),
        Component:UserDetail
      },
      {
        path:'update/:id',
        loader: ({params})=> fetch(`http://localhost:3000/users/${params.id}`),
        Component:Update
        

      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
        <App />
    </RouterProvider>
  
  </StrictMode>,
)
