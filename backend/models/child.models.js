// const mongoose = require('mongoose');
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
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

const User = mongoose.model('User', childSchema);

module.exports = User;