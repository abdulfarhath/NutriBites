import React from 'react';
import Navbar from '../components/Navbar';

const Profile = ({ userData }) => {
    const { name, bmi, status, age, weight, height, gender, suggestedCalories } = userData;

    // Status color and background based on the user's health status
    const statusColor = status === "Normal" ? "text-green-700 bg-green-100" : "text-red-500 bg-red-100";

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <div className="mt-[5vh] max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-6 bg-gradient-to-r from-green-500 to-green-700 text-white">
                    <h1 className="text-3xl font-bold mb-2">{name}</h1>
                    <p className="text-xl">BMI: <span className="font-semibold">{bmi}</span></p>
                    <p className={`mt-1 text-lg font-semibold ${statusColor} p-2 rounded`}>{status}</p>
                </div>
                <div className="p-6 space-y-4">
                    <div className="flex justify-between items-center border-b pb-2">
                        <p className="text-gray-700 font-medium">Age:</p>
                        <p className="text-gray-900">{age}</p>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                        <p className="text-gray-700 font-medium">Weight:</p>
                        <p className="text-gray-900">{weight} kg</p>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                        <p className="text-gray-700 font-medium">Height:</p>
                        <p className="text-gray-900">{height} cm</p>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                        <p className="text-gray-700 font-medium">Gender:</p>
                        <p className="text-gray-900 capitalize">{gender}</p>
                    </div>
                    <div className="flex justify-between items-center bg-green-100 p-2 rounded">
                        <p className="text-gray-700 font-medium">Suggested Calorie Intake:</p>
                        <p className="text-gray-900 font-bold">{suggestedCalories} kcal</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
