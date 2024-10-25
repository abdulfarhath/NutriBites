import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CalculateKcal from './routes/CalculateKcal';
import AddFood from './routes/AddFood';
import FoodBot from './routes/FoodBot';
import AlternatesSuggestions from './routes/AlternatesSuggestions';
import Profile from './routes/Profile';
import Home from './routes/Home'; // Import the Home component
import Login from './routes/Login'; // Import the Login component
import "./App.css"

const userData = {
  name: "Rahul",
  bmi: 16.5,
  status: "Normal",
  age: 10,
  weight: 30,
  height: 140,
  gender: "Female",
  suggestedCalories: 1800
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Add the Home route */}
        <Route path="/calculate-kcal" element={<CalculateKcal />} />
        <Route path="/add-food" element={<AddFood />} />
        <Route path="/foodbot" element={<FoodBot />} />
        <Route path="/alternates-suggestions" element={<AlternatesSuggestions />} />
        <Route path="/profile" element={<Profile userData={userData} />} /> {/* Pass userData as a prop */}
        <Route path="/login" element={<Login />} /> {/* Add the Login route */}
      </Routes>
    </Router>
  );
}

export default App;
