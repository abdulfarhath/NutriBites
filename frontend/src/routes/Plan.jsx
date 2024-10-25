import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const Plan = () => {
    const [categories, setCategories] = useState({
        breakfast: [{ food: '', quantity: '' }],
        lunch: [{ food: '', quantity: '' }],
        snacks: [{ food: '', quantity: '' }],
        dinner: [{ food: '', quantity: '' }]
    });
    const [treatUnlocked, setTreatUnlocked] = useState(false);
    const [planSaved, setPlanSaved] = useState(false);
    const [eaten, setEaten] = useState({
        breakfast: [false],
        lunch: [false],
        snacks: [false],
        dinner: [false]
    });
    const [treatName, setTreatName] = useState('');

    const handleInputChange = (category, index, field, value) => {
        const newCategories = { ...categories };
        newCategories[category][index][field] = value;
        setCategories(newCategories);
    };

    const handleAddField = (category) => {
        const newCategories = { ...categories };
        newCategories[category].push({ food: '', quantity: '' });
        setCategories(newCategories);

        const newEaten = { ...eaten };
        newEaten[category].push(false);
        setEaten(newEaten);
    };

    const handleDeleteField = (category, index) => {
        const newCategories = { ...categories };
        newCategories[category].splice(index, 1);
        setCategories(newCategories);

        const newEaten = { ...eaten };
        newEaten[category].splice(index, 1);
        setEaten(newEaten);
    };

    const handleSavePlan = () => {
        setPlanSaved(true);
    };

    const handleEditPlan = () => {
        setPlanSaved(false);
    };

    const handleCheckboxChange = (category, index) => {
        const newEaten = { ...eaten };
        newEaten[category][index] = !newEaten[category][index];
        setEaten(newEaten);

        const allEaten = Object.values(newEaten).every(cat =>
            cat.every(item => item)
        );

        setTreatUnlocked(allEaten);
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-8">
                <h1 className="text-3xl font-semibold mb-4 text-center">Plan a Meal</h1>
                <p className="text-gray-700 text-center mb-6">
                    Plan a perfect diet plan for your child
                </p>

                {/* Treat Input Section - Visible only in Edit Mode */}
                {!planSaved && (
                    <div className="text-center mb-4">
                        <h2 className="text-lg font-semibold mb-2">Add a Treat</h2>
                        <input
                            type="text"
                            className="p-1 border rounded w-full"
                            placeholder="Enter Treat Name"
                            value={treatName}
                            onChange={(e) => setTreatName(e.target.value)}
                        />
                    </div>
                )}

                {/* Treat Unlock Message */}
                <div className="bg-blue-100 p-4 rounded-lg mb-6 text-center">
                    {treatUnlocked ? (
                        <span className="text-green-600 font-bold text-xl">
                            Congratulations! You've unlocked a special treat: {treatName}
                        </span>
                    ) : (
                        <span className="text-blue-600 font-semibold">
                            Complete your healthy options to unlock a treat!
                        </span>
                    )}
                </div>

                {/* Meal Categories */}
                {Object.keys(categories).map(category => (
                    <div key={category} className="mb-4">
                        <h2 className="text-xl font-semibold mb-2">
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </h2>
                        {categories[category].map((item, index) => (
                            <div key={index} className="flex items-center mb-1">
                                <input
                                    type="text"
                                    className="mr-2 p-1 border rounded w-1/2"
                                    placeholder="Food"
                                    value={item.food}
                                    onChange={(e) => handleInputChange(category, index, 'food', e.target.value)}
                                    disabled={planSaved}
                                />
                                <input
                                    type="text"
                                    className="mr-2 p-1 border rounded w-1/4"
                                    placeholder="Quantity"
                                    value={item.quantity}
                                    onChange={(e) => handleInputChange(category, index, 'quantity', e.target.value)}
                                    disabled={planSaved}
                                />
                                {!planSaved && (
                                    <button
                                        className="mr-2 p-1 bg-red-500 text-white rounded"
                                        onClick={() => handleDeleteField(category, index)}
                                    >
                                        Delete
                                    </button>
                                )}
                                {planSaved && (
                                    <input
                                        type="checkbox"
                                        className="mr-2"
                                        checked={eaten[category][index]}
                                        onChange={() => handleCheckboxChange(category, index)}
                                    />
                                )}
                            </div>
                        ))}
                        {!planSaved && (
                            <button
                                className="p-1 bg-blue-500 text-white rounded"
                                onClick={() => handleAddField(category)}
                            >
                                Add Food
                            </button>
                        )}
                    </div>
                ))}

                {/* Save/Edit Plan Button */}
                {!planSaved ? (
                    <button
                        className="p-2 bg-green-500 text-white rounded mt-4"
                        onClick={handleSavePlan}
                    >
                        Save Plan
                    </button>
                ) : (
                    <button
                        className="p-2 bg-yellow-500 text-white rounded mt-4"
                        onClick={handleEditPlan}
                    >
                        Edit Plan
                    </button>
                )}
            </div>
        </div>
    );
};

export default Plan;
