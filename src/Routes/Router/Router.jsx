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
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Product from "../../Pages/Home/Product/Product"

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
        {
          path: "/products",
          element: <Product></Product>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: 'myProfile',
          element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>
        },
        {
          path: "addProduct",
          element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
        },
        {
          path: "myProduct",
          element: <PrivateRoute><MyProduct></MyProduct></PrivateRoute>
        },
        {
          path: 'myProduct/update/:id',
          element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>
        }
      ]
    }
  ]);