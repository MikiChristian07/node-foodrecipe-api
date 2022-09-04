import mongoose from 'mongoose';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }

}, { timestamps: true });

// Define static method to be used on User object
userSchema.methods.generateAuthToken = function t() { // t is short for token
    const token = jwt.sign({
        _id: this._id,
        email: this.email,
        role: this.role
    }, process.env.TOKEN_SECRET, { expiresIn: '7 days' });

    return token;
};

// Tells which user properties that are included when converting MongoDB records to
// JSON objects which are returned in API responses
userSchema.set('toJSON', {
    versionKey: false,
    transform(doc, ret) {
        // eslint-disable-next-line no-param-reassign
        delete ret.token;
        delete ret.password;
    }
});

const User = mongoose.model('User', userSchema);

export default User;
