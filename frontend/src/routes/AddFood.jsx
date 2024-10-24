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
        <div >
            <Navbar />
            <h1 className="text-2xl font-bold mb-4">Add Food</h1>
            <form onSubmit={handleSubmit}>
                {['breakfast', 'lunch', 'snacks', 'dinner'].map(mealType => (
                    <div key={mealType} className="mb-6">
                        <h2 className="text-xl font-semibold capitalize">{mealType}</h2>
                        {meals[mealType].map(food => (
                            <div key={food.id} className="flex items-center mb-2">
                                <input
                                    type="text"
                                    placeholder="Food Name"
                                    value={food.foodName}
                                    onChange={(e) => handleChange(mealType, food.id, 'foodName', e.target.value)}
                                    className="border p-2 mr-2"
                                />
                                <input
                                    type="number"
                                    placeholder="Quantity"
                                    value={food.quantity}
                                    onChange={(e) => handleChange(mealType, food.id, 'quantity', e.target.value)}
                                    className="border p-2 mr-2"
                                />
                                <button
                                    type="button"
                                    onClick={() => handleRemoveFood(mealType, food.id)}
                                    className="bg-red-500 text-white p-2"
                                >
                                    Delete
                                </button>
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={() => handleAddFood(mealType)}
                            className="bg-blue-500 text-white p-2"
                        >
                            Add Food
                        </button>
                    </div>
                ))}
                <button type="submit" className="bg-green-500 text-white p-2">Submit</button>
            </form>
            <div className="mt-6">
                <h2 className="text-xl font-semibold">Nutritional Summary</h2>
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="py-2">Nutrient</th>
                            <th className="py-2">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Nutritional data will be populated here */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AddFood;