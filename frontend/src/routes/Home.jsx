import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <div className="container mx-auto py-8">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
                    Welcome to NutriWise
                </h1>
                <p className="text-lg text-center text-gray-600">
                    Your journey to better nutrition starts here.
                </p>
            </div>
        </div>
    );
};

export default Home;