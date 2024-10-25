import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import Navbar from '../components/Navbar';

const CalculateKcal = () => {
    const [foodItems, setFoodItems] = useState([{ food: '', quantity: '' }]);
    const [nutritionData, setNutritionData] = useState([]);

    const handleAddMore = () => {
        setFoodItems([...foodItems, { food: '', quantity: '' }]);
    };

    const handleDelete = (index) => {
        const values = [...foodItems];
        values.splice(index, 1);
        setFoodItems(values);
    };

    const handleChange = (index, event) => {
        const values = [...foodItems];
        values[index][event.target.name] = event.target.value;
        setFoodItems(values);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const results = [];

        for (const item of foodItems) {
            const response = await fetch(`https://api.edamam.com/api/nutrition-data?app_id=208599f5&app_key=f88e7211c4d123c7fd50881b5585e744&nutrition-type=logging&ingr=${item.quantity}%20${item.food}`);
            const data = await response.json();
            results.push({
                food: item.food,
                quantity: item.quantity,
                calories: data.calories,
                totalNutrients: data.totalNutrients
            });
        }

        setNutritionData(results);
    };

    const calculateTotals = () => {
        const totals = {
            calories: 0,
            totalNutrients: {}
        };

        nutritionData.forEach(data => {
            totals.calories += data.calories;
            Object.keys(data.totalNutrients).forEach(key => {
                if (!totals.totalNutrients[key]) {
                    totals.totalNutrients[key] = { quantity: 0 };
                }
                totals.totalNutrients[key].quantity += data.totalNutrients[key].quantity;
            });
        });

        return totals;
    };

    const totals = calculateTotals();

    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-4xl mx-auto mt-8 bg-white p-6 rounded-lg shadow-md">
                <form onSubmit={handleSubmit}>
                    {foodItems.map((item, index) => (
                        <div key={index} className="flex space-x-4 mb-4">
                            <input
                                type="text"
                                name="food"
                                placeholder="Food"
                                value={item.food}
                                onChange={(event) => handleChange(index, event)}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                            <input
                                type="text"
                                name="quantity"
                                placeholder="Quantity"
                                value={item.quantity}
                                onChange={(event) => handleChange(index, event)}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                            <button
                                type="button"
                                onClick={() => handleDelete(index)}
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                    <div className="flex space-x-4">
                        <button
                            type="button"
                            onClick={handleAddMore}
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Add More
                        </button>
                        <button
                            type="submit"
                            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                        >
                            Submit
                        </button>
                    </div>
                </form>
                <table className="min-w-full mt-8 bg-white border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-2 px-4 border-b">Attribute</th>
                            {nutritionData.map((data, index) => (
                                <th key={index} className="py-2 px-4 border-b">{data.food}</th>
                            ))}
                            <th className="py-2 px-4 border-b">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-2 px-4 border-b">Quantity</td>
                            {nutritionData.map((data, index) => (
                                <td key={index} className="py-2 px-4 border-b">{data.quantity}</td>
                            ))}
                            <td className="py-2 px-4 border-b"></td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">Calories</td>
                            {nutritionData.map((data, index) => (
                                <td key={index} className="py-2 px-4 border-b">{data.calories}</td>
                            ))}
                            <td className="py-2 px-4 border-b">{totals.calories}</td>
                        </tr>
                        {nutritionData.length > 0 && Object.keys(nutritionData[0].totalNutrients).map((key) => (
                            <tr key={key}>
                                <td className="py-2 px-4 border-b">{key}</td>
                                {nutritionData.map((data, index) => (
                                    <td key={index} className="py-2 px-4 border-b">{data.totalNutrients[key].quantity}</td>
                                ))}
                                <td className="py-2 px-4 border-b">{totals.totalNutrients[key].quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CalculateKcal;
