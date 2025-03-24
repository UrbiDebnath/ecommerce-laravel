import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
    const [categories, setCategories] = useState([]);
    const [searchQuery, setSearchQuery] = useState(''); // Independent search state
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/category')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, []);

    const links = (
        <>
            <Link to={'/'}><li><a>Home</a></li></Link>
            <Link to={'/logIn'}><li><a>Login</a></li></Link>
            <Link to={'/signUp'}><li><a>SignUp</a></li></Link>
            <Link to={'/helpSupport'}><li><a>Help/Support</a></li></Link>
        </>
    );

    const handleGoProductByCategory = (category) => {
        navigate('/productByCategory', { state: { category } });
    };

    const handleSearch = () => {
        // Find the matching category
        const matchedCategory = categories.find(category => 
            category.category.toLowerCase() === searchQuery.toLowerCase()
        );

        if (matchedCategory) {
            handleGoProductByCategory(matchedCategory);
        } else {
            alert('No matching category found');
        }

        // Clear search input after search
        setSearchQuery('');
    };

    return (
        <div>
            <div className="navbar bg-orange-600 lg:px-20">
                <div className="navbar-start">
                    {/* Mobile Menu Button */}
                    <div className="dropdown lg:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-orange-600 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>

                    {/* Logo */}
                    <a className="btn btn-ghost text-xl">E-SHOP</a>
                </div>

                {/* Navbar Center for Larger Screens */}
                <div className="navbar-center lg:flex md:flex hidden gap-4">
                    {/* Category Dropdown */}
                    <div className="dropdown">
                        <label tabIndex={0} className="btn bg-white text-black hover:bg-black hover:text-white">
                            Categories
                        </label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-orange-600 rounded-box w-52">
                            {categories.map((category) => (
                                <li key={category.id} onClick={() => handleGoProductByCategory(category)}>
                                    <a>{category.category}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Search Input */}
                    <div className="flex items-center gap-2">
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchQuery}  // Controlled input
                            onChange={(e) => setSearchQuery(e.target.value)} // Only updates via user input
                            className="input input-bordered lg:w-96 md:w-72 w-24"
                        />
                        <button 
                            onClick={handleSearch} 
                            className="btn bg-white text-black hover:bg-black hover:text-white">
                            Search
                        </button>
                    </div>
                </div>

                {/* Navbar End for Larger Screens */}
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
            </div>

            {/* Mobile Search and Category */}
            <div className="lg:hidden flex flex-col items-center mt-2">
                {/* Category Dropdown for Mobile */}
                <div className="dropdown w-full mb-2">
                    <label tabIndex={0} className="btn bg-white text-black hover:bg-black hover:text-white w-full">
                        Categories
                    </label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-orange-600 rounded-box w-full">
                        {categories.map((category) => (
                            <li key={category.id} onClick={() => handleGoProductByCategory(category)}>
                                <a>{category.category}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Search Field */}
                <div className="w-full">
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="input input-bordered w-full"
                    />
                    <button 
                        onClick={handleSearch} 
                        className="btn bg-white text-black hover:bg-black hover:text-white w-full mt-2">
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
