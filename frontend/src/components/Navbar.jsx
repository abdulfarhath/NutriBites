import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '@fontsource/roboto'; // Import Roboto font
import '@fontsource/pacifico'; // Import Pacifico font for logo

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true); // Replace with actual login state

    return (
        <nav className="bg-[#365436] rounded-full m-5  w-[95%]  p-4 shadow-lg mx-auto">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-[#ffffff] text-3xl font-bold font-pacifico">
                    <NavLink to="/">
                        NutriBites
                    </NavLink>
                </div>
                <ul className="flex space-x-12">
                    <li>
                        <NavLink 
                            className={({ isActive }) => 
                                isActive ? "text-[#ffffff] text-sm font-roboto transition duration-300 underline" : "text-[#ffffff] text-sm font-roboto transition duration-300"
                            } 
                            to="/" 
                            exact
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            className={({ isActive }) => 
                                isActive ? "text-[#ffffff] text-sm font-roboto transition duration-300 underline" : "text-[#ffffff] text-sm font-roboto transition duration-300"
                            } 
                            to="/calculate-kcal"
                        >
                            Calculate
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            className={({ isActive }) => 
                                isActive ? "text-[#ffffff] text-sm font-roboto transition duration-300 underline" : "text-[#ffffff] text-sm font-roboto transition duration-300"
                            } 
                            to="/add-food"
                        >
                            Add Food
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            className={({ isActive }) => 
                                isActive ? "text-[#ffffff] text-sm font-roboto transition duration-300 underline" : "text-[#ffffff] text-sm font-roboto transition duration-300"
                            } 
                            to="/foodbot"
                        >
                            FoodBot
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            className={({ isActive }) => 
                                isActive ? "text-[#ffffff] text-sm font-roboto transition duration-300 underline" : "text-[#ffffff] text-sm font-roboto transition duration-300"
                            } 
                            to="/plan"
                        >
                            Plan
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            className={({ isActive }) => 
                                isActive ? "text-[#ffffff] text-sm font-roboto transition duration-300 underline" : "text-[#ffffff] text-sm font-roboto transition duration-300"
                            } 
                            to={isLoggedIn ? "/profile" : "/login"}
                        >
                            {isLoggedIn ? "Profile" : "Login"}
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
