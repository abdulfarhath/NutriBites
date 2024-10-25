import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '@fontsource/roboto'; // Import Roboto font
import '@fontsource/pacifico'; // Import Pacifico font for logo

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true); // Replace with actual login state

    return (
        <nav className="bg-gradient-to-r from-green-500 to-green-700 p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-3xl font-bold font-pacifico">
                    <Link to="/">NutriBites</Link>
                </div>
                <ul className="flex space-x-8">
                    <li><Link className="text-white text-lg font-roboto hover:text-green-300 transition duration-300" to="/calculate-kcal">Calculate Kcal</Link></li>
                    <li><Link className="text-white text-lg font-roboto hover:text-green-300 transition duration-300" to="/add-food">Add Food</Link></li>
                    <li><Link className="text-white text-lg font-roboto hover:text-green-300 transition duration-300" to="/foodbot">FoodBot</Link></li>
                    <li><Link className="text-white text-lg font-roboto hover:text-green-300 transition duration-300" to="/alternates-suggestions">Alternates & Suggestions</Link></li>
                    <li>
                        <Link className="text-white text-lg font-roboto hover:text-green-300 transition duration-300" to={isLoggedIn ? "/profile" : "/login"}>
                            {isLoggedIn ? "Profile" : "Login"}
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
