import { createBrowserRouter } from "react-router";
import Root from '../Roots/Root.jsx';
import About from '../Components/About/About.jsx';
import Favourites from '../Components/Favourites/Favourites.jsx';
import Cart from '../Components/Cart/Cart.jsx';
import Home from "../Components/Home/Home.jsx";
export const router = createBrowserRouter([
    { 
        path: "/", 
        Component:Root,
        errorElement: <p>Page Not Found</p>,

      children:[
        { index:true, Component:Home,
          loader: ()=> fetch('phones.json')
        },
        { path:'about', Component: About},
        { path:'favourites', Component: Favourites},
        { path:'cart', Component: Cart}
      ]
    }
    ,
    
  ]);