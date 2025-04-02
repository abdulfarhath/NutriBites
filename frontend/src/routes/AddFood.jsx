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
    const [nutritionData, setNutritionData] = useState({});

    const handleAddFood = (mealType) => {
        setMeals((prevMeals) => ({
            ...prevMeals,
            [mealType]: [...prevMeals[mealType], { id: uuidv4(), foodName: '', quantity: '' }]
        }));
    };

    const handleRemoveFood = (mealType, id) => {
        setMeals((prevMeals) => ({
            ...prevMeals,
            [mealType]: prevMeals[mealType].filter(food => food.id !== id)
        }));
    };

    const handleChange = (mealType, id, field, value) => {
        setMeals((prevMeals) => ({
            ...prevMeals,
            [mealType]: prevMeals[mealType].map(food =>
                food.id === id ? { ...food, [field]: value } : food
            )
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const results = { breakfast: [], lunch: [], snacks: [], dinner: [] };

        for (const mealType in meals) {
            for (const item of meals[mealType]) {
                if (!item.foodName || !item.quantity) continue;
                try {
                    const response = await fetch(
                        `https://api.edamam.com/api/nutrition-data?app_id=208599f5&app_key=f88e7211c4d123c7fd50881b5585e744&nutrition-type=logging&ingr=${item.quantity}%20${item.foodName}`
                    );
                    const data = await response.json();
                    results[mealType].push({
                        food: item.foodName,
                        quantity: item.quantity,
                        calories: data.calories || 0,
                        totalNutrients: data.totalNutrients || {}
                    });
                } catch (error) {
                    console.error("Error fetching nutrition data:", error);
                }
            }
        }

        setNutritionData(results);
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

                {/* Calories Summary Table */}
                {Object.keys(nutritionData).length > 0 && (
                    <div className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-700">Calories Summary</h2>
                        <table className="min-w-full bg-white mt-4 rounded-lg shadow-lg">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 bg-gray-200">Meal</th>
                                    <th className="py-2 px-4 bg-gray-200">Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.keys(nutritionData).map((mealType) => (
                                    <tr key={mealType}>
                                        <td className="py-2 px-4 border-b font-semibold capitalize">{mealType}</td>
                                        <td className="py-2 px-4 border-b">
                                            {nutritionData[mealType].length > 0 ? (
                                                nutritionData[mealType].map((item, index) => (
                                                    <div key={index} className="text-sm">
                                                        {item.food}: {item.calories} kcal
                                                    </div>
                                                ))
                                            ) : (
                                                <span className="text-gray-500">No data available</span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Total Calories Consumed */}
                {Object.keys(nutritionData).length > 0 && (
                    <div className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-700">Total Calories Consumed</h2>
                        <div className="text-lg font-bold text-gray-800">
                            {Object.values(nutritionData).reduce((total, meal) => {
                                return total + meal.reduce((mealTotal, item) => mealTotal + item.calories, 0);
                            }, 0)} kcal
                        </div>
                    </div>
                )}

                {/* Nutritional Details Table */}
                {Object.keys(nutritionData).length > 0 && (
                    <div className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-700">Nutritional Details</h2>
                        <table className="min-w-full bg-white mt-4 rounded-lg shadow-lg">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 bg-gray-200">Meal</th>
                                    <th className="py-2 px-4 bg-gray-200">Food</th>
                                    <th className="py-2 px-4 bg-gray-200">Calories</th>
                                    <th className="py-2 px-4 bg-gray-200">Protein</th>
                                    <th className="py-2 px-4 bg-gray-200">Carbs</th>
                                    <th className="py-2 px-4 bg-gray-200">Fats</th>
                                    <th className="py-2 px-4 bg-gray-200">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.keys(nutritionData).map((mealType) => (
                                    nutritionData[mealType].map((item, index) => (
                                        <tr key={`${mealType}-${index}`}>
                                            <td className="py-2 px-4 border-b capitalize">{mealType}</td>
                                            <td className="py-2 px-4 border-b">{item.food}</td>
                                            <td className="py-2 px-4 border-b">{item.calories} kcal</td>
                                            <td className="py-2 px-4 border-b">
                                                {item.totalNutrients.PROCNT?.quantity?.toFixed(2) || 0} g
                                            </td>
                                            <td className="py-2 px-4 border-b">
                                                {item.totalNutrients.CHOCDF?.quantity?.toFixed(2) || 0} g
                                            </td>
                                            <td className="py-2 px-4 border-b">
                                                {item.totalNutrients.FAT?.quantity?.toFixed(2) || 0} g
                                            </td>
                                            <td className="py-2 px-4 border-b">
                                                {(
                                                    (item.totalNutrients.PROCNT?.quantity || 0) +
                                                    (item.totalNutrients.CHOCDF?.quantity || 0) +
                                                    (item.totalNutrients.FAT?.quantity || 0)
                                                ).toFixed(2)} g
                                            </td>
                                        </tr>
                                    ))
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AddFood;
