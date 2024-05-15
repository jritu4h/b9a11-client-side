import { createBrowserRouter } from "react-router-dom";
import LayOut from "../LayOut/LayOut"
import Home from "../Pages/Home/Home";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import MyProfile from "../Pages/MyProfile/MyProfile";
import Profile from "../Pages/MyProfile/Profile";
import AddVolunteer from "../Pages/MyProfile/AddVolunteer";
import MyPost from "../Pages/MyProfile/MyPost";
import Update from "../Pages/MyProfile/Update";
import AllData from "../Pages/AllData/AllData";
import PrivateRoute from "../private/Private";
import FullDetils from "../Pages/FullDetails/FullDetils";
import Error from "../Error/Error";
import FullDetils2 from "../Pages/FullDetails/FullDetils2";




const router = createBrowserRouter([
    {
      path: "/",
      element:<LayOut></LayOut> ,
       errorElement:<Error></Error>,
      children: [
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/NeedVolunteerPage',
          element:<AllData></AllData>
        },
        {
          path:'/my-profile',
          element:<PrivateRoute><MyProfile></MyProfile></PrivateRoute>,
          children:[
            {
              path:'/my-profile/profile',
              element:<Profile></Profile>
            },
            {
              path:'/my-profile/addvolunteer',
              element:<AddVolunteer></AddVolunteer>
            },
            {
              path:'/my-profile/mylist',
              element:<MyPost></MyPost>
            },
            {
              path:'/my-profile/update/:id',
              element:<Update></Update>,
              loader:({params})=>fetch(`https://b9a11-server-side-swart.vercel.app/volunteers/${params.id}`)
              
            }
          ]
        },
        {
          path:'/details/:id',
          element:<PrivateRoute><FullDetils></FullDetils></PrivateRoute>,
          loader:({params})=>fetch(`https://b9a11-server-side-swart.vercel.app/volunteers/${params.id}`)
          
        },
        {
          path:'/details2/:id',
          element:<PrivateRoute><FullDetils2></FullDetils2></PrivateRoute>,
          loader:({params})=>fetch(`https://b9a11-server-side-swart.vercel.app/volunteers2/${params.id}`)
          
        },
        {
          path:'/login',
          element:<Login></Login>

        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'*',
          element:<Error></Error>
        }
   
      ]
    },
  ]);

  export default router;