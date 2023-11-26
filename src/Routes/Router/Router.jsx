import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import SignUp from "../../Pages/SignUp/SignUp";
import Login from "../../Pages/Login/Login";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import MyProfile from "../../Pages/Dashboard/MyProfile/MyProfile";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import MyProduct from "../../Pages/Dashboard/MyProduct/MyProduct";
import UpdateProduct from "../../Pages/Dashboard/UpdateProduct/UpdateProduct";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/signUp",
            element: <SignUp></SignUp>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
      ]
    },
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: 'myProfile',
          element: <MyProfile></MyProfile>
        },
        {
          path: "addProduct",
          element: <AddProduct></AddProduct>
        },
        {
          path: "myProduct",
          element: <MyProduct></MyProduct>
        },
        {
          path: 'myProduct/update/:id',
          element: <UpdateProduct></UpdateProduct>
        }
      ]
    }
  ]);