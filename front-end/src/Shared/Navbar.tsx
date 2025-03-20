import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const links =<>
        <Link to={'/'}><li><a>Home</a></li> </Link>  
        <Link to={'/logIn'}><li><a>Login</a></li> </Link>  
        <Link to={'/signUp'}><li><a>SignUp</a></li></Link>  
        <Link to={'/helpSupport'}><li><a>Help/Support</a></li></Link>  
       
        
    </>
    return (
        <div>
            <div className="navbar bg-orange-600 lg:px-20">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-orange-600 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">E-SHOP</a>
                </div>
                 {/* Navbar Center */}
        <div className="navbar-center lg:flex md:flex hidden gap-4">
          {/* Dropdown */}
          <div className="dropdown">
            <label tabIndex={0} className="btn bg-white text-black hover:bg-black hover:text-white">
              Categories
            </label>
            <ul tabIndex={0}  className="dropdown-content menu p-2 shadow bg-orange-600 rounded-box w-52" >
            <Link ><li><a href="#">electronics</a></li></Link>
            <li><a href="#">Clothing & Fashion</a></li>
            <Link ><li><a href="#">Accessories</a></li></Link>
            <li><a href="#">Home & Kitchen</a></li>
            <li><a href="#">Beauty & Personal Care</a></li> 
            <li><a href="#">Sports & Fitness</a></li>
            <li><a href="#">Toys & Games</a></li>
            <li><a href="#">Books & Stationery</a></li> 
            <li><a href="#">Jewelry & Watches</a></li>
            <li><a href="#">Baby Products</a></li> 
            <li><a href="#">Mobile & Gadgets</a></li> 
            <li><a href="#">Music & Instruments</a></li>
            </ul>
          </div>

          {/* Search Field */}
          <input
            type="text"
            placeholder="Search products..."
            className="input input-bordered lg:w-96 md:w-72 w-24"
          />

          {/* Search Button */}
          <button className="btn bg-white text-black hover:bg-black hover:text-white">
            Search
          </button>
        </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                     {links}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;