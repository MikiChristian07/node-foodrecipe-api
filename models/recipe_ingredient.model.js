import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const recipeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    recipe_id: {
        type: String,
        required: true,
        unique: true
    },
    ingredient_id: {
        type: String,
        unique: true
    },
    unit_id: {
        type: Number
    },
    amount: {
        type: Number
    },
    sort: {
        type: Number
    }
}, { timestamps: true });

const Recipe = mongoose.model('Recipe', recipeSchema);

export default Recipe;
