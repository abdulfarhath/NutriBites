import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import 'tailwindcss/tailwind.css';

const FoodBot = () => {
    const [messages, setMessages] = useState([
        { text: "Hi! 😊 ", sender: "bot" }
    ]);
    const [inputMessage, setInputMessage] = useState('');

    const apiKey = "AIzaSyCd2rmBw_Ca25AVyTFQdvM5Mz3cVbv-z7s"; // Securely load the API key
    const url = 'https://api.gemini.com/v1/chatbot';

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!inputMessage.trim()) return;

        const userMessage = { text: inputMessage, sender: "user" };
        setMessages(prevMessages => [...prevMessages, userMessage]);
        setInputMessage('');

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${apiKey}`,
                },
                body: JSON.stringify({ message: inputMessage })
            });

            const data = await response.json();
            const botMessage = { text: data.reply, sender: "bot" };
            setMessages(prevMessages => [...prevMessages, botMessage]);
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
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
                    <h1 className="text-2xl font-bold mb-4 text-center">Welcome to FoodBot</h1>
                    <p className="text-gray-600 mb-6 text-center">Your personal nutrition assistant.</p>
                    <div className="bg-gray-200 p-4 rounded-lg mb-4 h-64 overflow-y-scroll">
                        {messages.map((msg, index) => (
                            <div key={index} className={`mb-2 text-left ${msg.sender === 'bot' ? 'text-blue-500' : 'text-green-500'}`}>
                                {msg.text}
                            </div>
                        ))}
                    </div>
                    <form onSubmit={handleSendMessage} className="flex">
                        <textarea
                            className="flex-grow p-2 border rounded-l-lg"
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            placeholder="Type your message..."
                        />
                        <button type="submit" className="bg-blue-500 text-white p-2 rounded-r-lg">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FoodBot;
