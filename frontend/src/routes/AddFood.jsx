import React, { useState } from 'react';

const AddFood = () => {
    const [foodName, setFoodName] = useState('');
    const [calories, setCalories] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(`Food: ${foodName}, Calories: ${calories}`);
    };

    return (
        <div>
            <h1>Add Food</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="foodName">Food Name:</label>
                    <input
                        type="text"
                        id="foodName"
                        value={foodName}
                        onChange={(e) => setFoodName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="calories">Calories:</label>
                    <input
                        type="number"
                        id="calories"
                        value={calories}
                        onChange={(e) => setCalories(e.target.value)}
                    />
                </div>
                <button type="submit">Add Food</button>
            </form>
        </div>
    );
};

export default AddFood;