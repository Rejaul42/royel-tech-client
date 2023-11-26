import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaList, FaShoppingCart, FaUtensils } from "react-icons/fa";
import { TbLayoutGridAdd } from "react-icons/tb";
import { AiOutlineMenu } from "react-icons/ai";
import { FaBook, FaUsers } from "react-icons/fa6";


const Dashboard = () => {
    const isAdmin = false;
    return (
        <div className="flex ">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-600 text-white">
                <ul className="menu p-4">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to="/dashboard/adminHome">
                                    <FaHome></FaHome>
                                    Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addItems">
                                    <FaUtensils></FaUtensils>
                                    Add Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageItems">
                                    <FaList></FaList>
                                    Manage Items</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/bookings">
                                    <FaBook></FaBook>
                                    Manage Bookings</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/users">
                                    <FaUsers></FaUsers>
                                    All Users</NavLink>
                            </li>
                        </>
                            :
                            <>
                                <li>
                                    <NavLink to="/dashboard/myProfile">
                                        <FaHome></FaHome>
                                        My Profile</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/addProduct">
                                        <TbLayoutGridAdd />
                                        Add Product</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/myProduct">
                                        <FaShoppingCart></FaShoppingCart>
                                        My Product</NavLink>
                                </li>
                            </>
                    }
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/product">
                            <AiOutlineMenu />
                            Product</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;