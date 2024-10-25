// const mongoose = require('mongoose');
import mongoose from 'mongoose';

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
    }
});

const Child = mongoose.model('Child', childSchema);

module.exports = Child;