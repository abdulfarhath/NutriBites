import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { FaUser, FaWeight, FaRulerVertical, FaVenusMars, FaUtensils } from 'react-icons/fa';

const Profile = ({ userData }) => {
    const [user, setUser] = useState(userData);

    const calculateBMI = (weight, height) => {
        return (weight / ((height / 100) ** 2)).toFixed(2);
    };

    const calculateSuggestedCalories = (age, gender, weight, height, status, activityLevel = 1.2) => {
        const bmr = gender === 'male'
            ? 10 * weight + 6.25 * height - 5 * age + 5
            : 10 * weight + 6.25 * height - 5 * age - 161;
        
        let calorieAdjustmentFactor;
        if (status === 'Undernourished') {
            calorieAdjustmentFactor = 1.2;
        } else if (status === 'Obese') {
            calorieAdjustmentFactor = 0.8;
        } else {
            calorieAdjustmentFactor = 1;
        }

        return Math.round(bmr * activityLevel * calorieAdjustmentFactor);
    };

    const determineStatus = (bmi) => {
        if (bmi < 18.5) {
            return 'Undernourished';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            return 'Normal';
        } else {
            return 'Obese';
        }
    };

    useEffect(() => {
        const newBMI = calculateBMI(user.weight, user.height);
        const newSuggestedCalories = calculateSuggestedCalories(user.age, user.gender, user.weight, user.height);
        const newStatus = determineStatus(newBMI);
        setUser(prevState => ({
            ...prevState,
            bmi: newBMI,
            suggestedCalories: newSuggestedCalories,
            status: newStatus
        }));
    }, [user.age, user.weight, user.height, user.gender]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSave = () => {
        // Add your save logic here
        console.log('Save button clicked', user);
    };

    const { name, bmi, status, age, weight, height, gender, suggestedCalories } = user;

    const statusColor = status === "Normal" ? "text-green-700 bg-green-100" : status === "Undernourished" ? "text-yellow-500 bg-yellow-100" : "text-red-500 bg-red-100";

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <div className="mt-[5vh] max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-6 bg-gradient-to-r from-green-500 to-green-700 text-white">
                    <h1 className="text-3xl font-bold mb-2 flex items-center"><FaUser className="mr-2" />{name}</h1>
                    <p className="text-xl">BMI: <span className="font-semibold">{bmi}</span></p>
                    <p className={`mt-1 text-lg font-semibold ${statusColor} p-2 rounded`}>{status}</p>
                </div>
                <div className="p-6 space-y-4">
                    <div className="flex justify-between items-center border-b pb-2">
                        <p className="text-gray-700 font-medium flex items-center"><FaUser className="mr-2" />Age:</p>
                        <input
                            type="number"
                            name="age"
                            value={age}
                            onChange={handleChange}
                            className="text-gray-900 border rounded p-1"
                        />
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                        <p className="text-gray-700 font-medium flex items-center"><FaWeight className="mr-2" />Weight:</p>
                        <input
                            type="number"
                            name="weight"
                            value={weight}
                            onChange={handleChange}
                            className="text-gray-900 border rounded p-1"
                        /> kg
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                        <p className="text-gray-700 font-medium flex items-center"><FaRulerVertical className="mr-2" />Height:</p>
                        <input
                            type="number"
                            name="height"
                            value={height}
                            onChange={handleChange}
                            className="text-gray-900 border rounded p-1"
                        /> cm
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                        <p className="text-gray-700 font-medium flex items-center"><FaVenusMars className="mr-2" />Gender:</p>
                        <select
                            name="gender"
                            value={gender}
                            onChange={handleChange}
                            className="text-gray-900 border rounded p-1 capitalize"
                        >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div className="flex justify-between items-center bg-green-100 p-2 rounded">
                        <p className="text-gray-700 font-medium flex items-center"><FaUtensils className="mr-2" />Suggested Calorie Intake:</p>
                        <p className="text-gray-900 font-bold">{suggestedCalories} kcal</p>
                    </div>
                    <button
                        onClick={handleSave}
                        className="w-full bg-green-500 text-white py-2 rounded mt-4 hover:bg-green-600"
                    >
                        Update Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
