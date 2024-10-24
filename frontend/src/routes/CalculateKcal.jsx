import React from 'react';

const CalculateKcal = () => {
    return (
        <div>
            <h1>Calculate Your Daily Caloric Needs</h1>
            <form>
                <div>
                    <label htmlFor="age">Age:</label>
                    <input type="number" id="age" name="age" />
                </div>
                <div>
                    <label htmlFor="weight">Weight (kg):</label>
                    <input type="number" id="weight" name="weight" />
                </div>
                <div>
                    <label htmlFor="height">Height (cm):</label>
                    <input type="number" id="height" name="height" />
                </div>
                <div>
                    <label htmlFor="activity">Activity Level:</label>
                    <select id="activity" name="activity">
                        <option value="sedentary">Sedentary</option>
                        <option value="light">Lightly active</option>
                        <option value="moderate">Moderately active</option>
                        <option value="active">Active</option>
                        <option value="very_active">Very active</option>
                    </select>
                </div>
                <button type="submit">Calculate</button>
            </form>
        </div>
    );
};

export default CalculateKcal;