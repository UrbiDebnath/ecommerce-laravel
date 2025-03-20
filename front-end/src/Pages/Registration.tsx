
import React from 'react';
import { Link } from 'react-router-dom';

import animation from '../assets/animationRegister.json'
import Lottie from 'lottie-react';
import SharedTitle from '../Shared/SharedTitle';

const SignUp = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
            {/* Top Section */} 
            <SharedTitle heading={"Let's Join Us!"} subHeading={"Create an account to get started"}></SharedTitle>
            {/* Main Section */}
            <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row w-full max-w-4xl overflow-hidden">
                {/* Right Side - Image (Shown on Top in Small Devices, Right on Larger Screens) */}
                <div className="w-full bg-orange-600 flex items-center justify-center p-6 md:w-1/2 md:order-last order-first">
                <Lottie className='rounderd-full' animationData={animation}></Lottie>
                </div>

                {/* Left Side - Form */}
                <div className="w-full lg:p-8 md:p-8 p-4 md:w-1/2">
                    <h2 className="text-2xl font-semibold mb-4 text-orange-600">Sign Up</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700">Name</label>
                            <input type="text" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500 text-white" placeholder="Enter your name" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Email</label>
                            <input type="email" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500 text-white" placeholder="Enter your email" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Password</label>
                            <input type="password" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-500 text-white" placeholder="Enter your password" />
                        </div>
                        <button className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-500">Sign Up</button>
                    </form>
                    <p className="mt-4 text-sm text-gray-600">Already have an account? <Link to={'/login'} className="text-orange-600">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
