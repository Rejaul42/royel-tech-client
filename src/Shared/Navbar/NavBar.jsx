import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useState } from "react";
// import { CgProfile } from "react-icons/cg";


const NavBar = () => {
    const [updateUser, setUpdateUser] = useState()
    const { user, logOut } = useAuth()
    const axiosPublic = useAxiosPublic();
    const email = user?.email;

    axiosPublic.get(`/users/${email}`)
        .then(result => {
            setUpdateUser(result.data)
        })
        .catch(error => {
            console.log(error)
        })

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }
    const navLink = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/menu">Product</NavLink></li>
        {user ? <>
            <li tabIndex={0}>
                <details>
                    <summary className="">
                        {updateUser?.photo ? <div className="avatar online">
                            <div className="w-10 rounded-full">
                                <img src={updateUser?.photo} />
                            </div>
                        </div> :
                            <div className="avatar placeholder">
                                <div className="bg-neutral text-neutral-content rounded-full w-10">
                                    <span className="text-3xl">{updateUser?.name}</span>
                                </div>
                            </div>
                        }
                    </summary>
                    <ul className="p-2 text-black w-32">
                        <li><NavLink>{updateUser?.name}</NavLink></li>
                        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                        <li className=""><NavLink onClick={handleLogOut} to="/login">Log Out</NavLink></li>
                    </ul>
                </details>
            </li>
        </> :
            <>
                <li className="btn"><NavLink to="/login">Login</NavLink></li>
            </>
        }

    </>
    return (
        <div>
            <div className="navbar fixed z-20 max-w-7xl bg-opacity-40 bg-stone-900 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <div className="">
                        <h2 className=" flex flex-row items-center gap-3 text-2xl font-medium"><Link to="/">
                            <img className="h-14 w-18 rounded-3xl" src="https://i.ibb.co/rmcYLFP/fox.png" alt="" /></Link> <span className="text-white font-bold">R O Y E L  T E C H</span>
                        </h2>
                    </div>
                </div>

                <div className="navbar-end items-center">
                    <div className="hidden lg:flex justify-center items-center">
                        <ul className="menu menu-horizontal px-1">
                            {navLink}
                        </ul>
                    </div>
                    <div>
                        {/* {
                            user ? <>
                                <li className="btn"><NavLink onClick={handleLogOut} to="/login">Log Out</NavLink></li>
                            </> : <>
                                <li className="btn"><NavLink to="/login">Login</NavLink></li>
                            </>
                        } */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;