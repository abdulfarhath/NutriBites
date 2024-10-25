import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const Plan = () => {
    const [checkedItems, setCheckedItems] = useState({});
    const [treatUnlocked, setTreatUnlocked] = useState(false);

    const categories = {
        breakfast: ['Oatmeal', 'Pancakes', 'Fruit Salad'],
        lunch: ['Grilled Cheese', 'Chicken Salad', 'Veggie Wrap'],
        snacks: ['Yogurt', 'Fruit', 'Nuts'],
        dinner: ['Spaghetti', 'Grilled Chicken', 'Steamed Veggies']
    };

    const handleCheckboxChange = (category, item) => {
        const newCheckedItems = { ...checkedItems, [`${category}-${item}`]: !checkedItems[`${category}-${item}`] };
        setCheckedItems(newCheckedItems);

        const allChecked = Object.keys(newCheckedItems).length === Object.keys(categories).reduce((acc, cat) => acc + categories[cat].length, 0) &&
            Object.values(newCheckedItems).every(value => value);

        setTreatUnlocked(allChecked);
    };

    return (
        <div>
            <Navbar />
            <h1>Alternate Suggestions</h1>
            <p>Here you can find alternate suggestions for your nutritional needs.</p>
            {Object.keys(categories).map(category => (
                <div key={category}>
                    <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
                    {categories[category].map(item => (
                        <div key={item}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={checkedItems[`${category}-${item}`] || false}
                                    onChange={() => handleCheckboxChange(category, item)}
                                />
                                {item}
                            </label>
                        </div>
                    ))}
                </div>
            ))}
            {treatUnlocked && <div className="treat">Congratulations! You've unlocked a special treat!</div>}
        </div>
    );
};

export default Plan;