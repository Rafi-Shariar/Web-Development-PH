import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Components/Home/Home.jsx'
import Mobiles from './Components/Mobiles/Mobiles.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Components/Root/Root.jsx';
import Laptops from './Components/Laptops/Laptops.jsx'
import Users from './Components/Users/Users.jsx'
import User2 from './Components/User2/User2.jsx'
import UserDetails from './Components/UserDetails/UserDetails.jsx'


const user2Promise = fetch('https://jsonplaceholder.typicode.com/users').then( res => res.json());

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children:[
      { index:true, Component: Home},
      { path: 'mobiles', Component: Mobiles},
      { path: 'Laptops', Component: Laptops},
      
      { 
        path: 'users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users
      },
      { 
        path: 'user2',
        element: <Suspense fallback={<span>loading...</span>}>
                  <User2 user2Promise={user2Promise}></User2>
        </Suspense>
      },
      {
        path: 'users/:userId',
        loader: ({params}) =>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails
      }

    ]
  },

  {
    path: 'about',
    element: <h2>About ME</h2>
  },

  {
    path: 'app',
    Component: App
  }
 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
