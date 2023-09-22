import mongoose from 'mongoose';
const { Schema } = mongoose;
mongoose.Promise = global.Promise;
const lawyerSchema = new Schema(
    {
        lawyerId: { type: String, required: true },
        name: { type: String, required: true, unique: true },
        lawyerEnrollmentNumber: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        mobilenumber: { type: Number, required: true },
    },
    {
        timestamps: true,
    }
);

const Lawyer = mongoose.models.Lawyer
    ? mongoose.model('Lawyer')
    : mongoose.model('Lawyer', lawyerSchema);

export default Lawyer;