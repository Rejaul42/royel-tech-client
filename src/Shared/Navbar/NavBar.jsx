import { NavLink } from "react-router-dom";


const NavBar = () => {
    const navLink = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/menu">Product</NavLink></li>
    
    </>
    return (
        <div>
            <div className="navbar fixed z-10 max-w-7xl bg-opacity-40 bg-stone-900 text-white">
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
                        <h2 className=" flex flex-row items-center gap-3 text-2xl font-medium"><img className="h-14 w-18 rounded-3xl" src="https://i.ibb.co/rmcYLFP/fox.png" alt="" /><span className="text-orange-700 font-bold">R O Y E L  T E C H</span></h2>
                    </div>
                </div>

                <div className="navbar-end items-center">
                    <div className="hidden lg:flex justify-center items-center">
                        <ul className="menu menu-horizontal px-1">
                            {navLink}
                        </ul>
                    </div>
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;