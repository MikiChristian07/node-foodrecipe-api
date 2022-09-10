import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const unitSchema = mongoose.Schema({
    label: {
        type: String,
        required: true,
        unique: true
    },
    sort: {
        type: Number
    }
}, { timestamps: true });

const Unit = mongoose.model('Unit', unitSchema);

export default Unit;
