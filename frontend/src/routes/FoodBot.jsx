import React, { useState, useEffect } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import Navbar from './../components/Navbar';

const FoodBot = () => {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState("");

    const genAI = new GoogleGenerativeAI("AIzaSyCz82p5y_CMBXA3ClotNRIC5LgRq_zfYig");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    useEffect(() => {
        const initialBotMessage = {
            text: "Hi! I'm here to help you with all things nutrition. Let's learn about healthy food choices for growing kids!",
            sender: "bot"
        };
        setMessages([initialBotMessage]);
    }, []);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!inputMessage.trim()) return;

        const userMessage = { text: inputMessage, sender: "user" };
        setMessages(prevMessages => [...prevMessages, userMessage]);
        setInputMessage('');

        try {
            const prompt = `Please respond concisely and in a friendly way about food and nourishment: ${inputMessage}`;
            const result = await model.generateContent(prompt);

            const responseText = result.response?.text?.();
            if (responseText) {
                const cleanedText = responseText.replace(/[*#]/g, '');
                const botMessage = { text: cleanedText, sender: "bot" };
                setMessages(prevMessages => [...prevMessages, botMessage]);
            } else {
                throw new Error("Invalid response format");
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            setMessages(prevMessages => [
                ...prevMessages,
                { text: "Sorry, I couldn't fetch a response.", sender: "bot" }
            ]);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl w-full">
                    <h1 className="text-3xl font-semibold mb-4 text-center text-gray-800">Welcome to FoodBot</h1>
                    <p className="text-gray-600 mb-6 text-center">Your companion for nourishing food choices for kids.</p>
                    <div className="bg-gray-50 p-4 rounded-lg mb-6 h-96 overflow-y-scroll">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`mb-2 flex ${
                                    msg.sender === 'bot' ? 'justify-start' : 'justify-end'
                                }`}
                            >
                                <div
                                    className={`p-3 rounded-lg shadow-sm max-w-xs ${
                                        msg.sender === 'bot'
                                            ? 'bg-blue-100 text-blue-800'
                                            : 'bg-green-100 text-green-800'
                                    }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                    </div>
                    <form onSubmit={handleSendMessage} className="flex">
                        <textarea
                            className="flex-grow p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            placeholder="Type your message..."
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-6 py-2 rounded-r-lg hover:bg-blue-600 transition"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FoodBot;
