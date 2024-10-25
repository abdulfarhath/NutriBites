import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { v4 as uuidv4 } from 'uuid';

const AddFood = () => {
    const [meals, setMeals] = useState({
        breakfast: [],
        lunch: [],
        snacks: [],
        dinner: []
    });

    const handleAddFood = (mealType) => {
        setMeals({
            ...meals,
            [mealType]: [...meals[mealType], { id: uuidv4(), foodName: '', quantity: '' }]
        });
    };

    const handleRemoveFood = (mealType, id) => {
        setMeals({
            ...meals,
            [mealType]: meals[mealType].filter(food => food.id !== id)
        });
    };

    const handleChange = (mealType, id, field, value) => {
        setMeals({
            ...meals,
            [mealType]: meals[mealType].map(food => 
                food.id === id ? { ...food, [field]: value } : food
            )
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(meals);
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Add Food</h1>
                <form onSubmit={handleSubmit}>
                    {['breakfast', 'lunch', 'snacks', 'dinner'].map((mealType, index) => (
                        <div key={mealType} className="mb-8">
                            <h2 className="text-2xl font-semibold capitalize mb-4 text-gray-700">{mealType}</h2>
                            {meals[mealType].map(food => (
                                <div key={food.id} className="flex items-center mb-4">
                                    <input
                                        type="text"
                                        placeholder="Food Name"
                                        value={food.foodName}
                                        onChange={(e) => handleChange(mealType, food.id, 'foodName', e.target.value)}
                                        className="border p-2 mr-2 rounded-lg flex-1"
                                    />
                                    <input
                                        type="number"
                                        placeholder="Quantity"
                                        value={food.quantity}
                                        onChange={(e) => handleChange(mealType, food.id, 'quantity', e.target.value)}
                                        className="border p-2 mr-2 rounded-lg w-24"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveFood(mealType, food.id)}
                                        className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </div>
                            ))}
                            <button
                                type="button"
                                onClick={() => handleAddFood(mealType)}
                                className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
                            >
                                Add Food
                            </button>
                            {index < 3 && <hr className="my-8 border-t-2 border-gray-300" />}
                        </div>
                    ))}
                    <button type="submit" className="bg-green-500 text-white p-3 rounded-lg w-full hover:bg-green-600">Submit</button>
                </form>
                <div className="mt-8">
                    <h2 className="text-2xl font-semibold text-gray-700">Nutritional Summary</h2>
                    <table className="min-w-full bg-white mt-4 rounded-lg shadow-lg">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 bg-gray-200">Nutrient</th>
                                <th className="py-2 px-4 bg-gray-200">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Nutritional data will be populated here */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AddFood;