import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const recipeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
        unique: true
    },
    instructions: {
        type: String,
        unique: true
    }
}, { timestamps: true });

const Recipe = mongoose.model('Recipe', recipeSchema);

export default Recipe;
