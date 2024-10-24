import React from 'react';
import { Link } from 'react-router-dom';
// import './Navbar.css'; // Assuming you have some CSS for styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">NutriWise</Link>
            </div>
            <ul className="navbar-menu">
                <li><Link to="/calculate-kcal">Calculate Kcal</Link></li>
                <li><Link to="/add-food">Add Food</Link></li>
                <li><Link to="/foodbot">FoodBot</Link></li>
                <li><Link to="/alternates-suggestions">Alternates & Suggestions</Link></li>
                <li><Link to="/profile">Profile</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;