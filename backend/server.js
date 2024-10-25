import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const app = express();
const port = 3000;

app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/nutri_wise', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a child schema
const childSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: ['Male', 'Female']
    },
    height: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

// Define a child model using the schema
const Child = mongoose.model('Child', childSchema);

// Define a route to get the logged-in child's data
app.get('/child/data', (req, res) => {
    res.send({name: "Rahul", gender: "male", height: 150, weight: 50});
});



// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});