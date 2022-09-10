import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const ingredientSchema = mongoose.Schema({
    label: {
        type: String,
        required: true,
        unique: true
    },
    sort: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const Ingredient = mongoose.model('Ingredient', ingredientSchema);

export default Ingredient;
