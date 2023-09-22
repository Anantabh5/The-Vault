import mongoose from 'mongoose';
const { Schema } = mongoose;
mongoose.Promise = global.Promise;
const judgeSchema = new Schema(
    {
        judgeId: { type: String, required: true },
        name: { type: String, required: true, unique: true },
        judgeUniqueId: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        mobileNumber: { type: Number, required: true },
        fileId: { type: [String], required: false },

    },
    {
        timestamps: true,
    }
);

const Judge = mongoose.models.Judge
    ? mongoose.model('Judge')
    : mongoose.model('Judge', judgeSchema);

export default Judge;