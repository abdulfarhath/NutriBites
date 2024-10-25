import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '@fontsource/roboto'; // Import Roboto font
import '@fontsource/pacifico'; // Import Pacifico font for logo

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true); // Replace with actual login state

    return (
        <nav className="bg-[#365436] rounded-full m-5  w-[95%]  p-4 shadow-lg mx-auto">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-[#D6533F] text-3xl font-bold font-pacifico">
                    <Link to="/">
                        NutriBites
                    </Link>
                </div>
                <ul className="flex space-x-12">
                    <li><Link className="text-[#D6533F] text-sm font-roboto  transition duration-300" to="/">
                        Home
                    </Link>
                    </li>
                    <li>
                        <Link className="text-[#D6533F] text-sm font-roboto  transition duration-300" to="/calculate-kcal">
                            Calculate Kcal
                        </Link>
                    </li>
                    <li>
                        <Link className="text-[#D6533F] text-sm font-roboto  transition duration-300" to="/add-food">
                            Add Food
                        </Link
                        >
                    </li>
                    <li>
                        <Link className="text-[#D6533F] text-sm font-roboto  transition duration-300" to="/foodbot">
                            FoodBot
                        </Link>
                    </li>
                    <li>
                        <Link className="text-[#D6533F] text-sm font-roboto  transition duration-300" to="/plan">Plan</Link>
                    </li>
                    <li>
                        <Link className="text-[#D6533F] text-sm font-roboto  transition duration-300" to={isLoggedIn ? "/profile" : "/login"}>
                            {isLoggedIn ? "Profile" : "Login"}
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
