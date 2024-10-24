import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import Navbar from '../components/Navbar';

const CalculateKcal = () => {
    const [foodItems, setFoodItems] = useState([{ food: '', quantity: '' }]);

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

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle submit logic here
    };

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
                            <th className="py-2 px-4 border-b">Food</th>
                            <th className="py-2 px-4 border-b">Quantity</th>
                            <th className="py-2 px-4 border-b">Calories</th>
                            <th className="py-2 px-4 border-b">Protein</th>
                            <th className="py-2 px-4 border-b">Carbs</th>
                            <th className="py-2 px-4 border-b">Fats</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Data will be populated here */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CalculateKcal;