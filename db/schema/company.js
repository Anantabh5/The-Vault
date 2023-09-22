import mongoose from 'mongoose';
const { Schema } = mongoose;
mongoose.Promise = global.Promise;
const companySchema = new Schema(
    {
        companyId: { type: String, required: true },
        name: { type: String, required: true, unique: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        mobileNumber: { type: Number, required: true },
        fileId: { type: [String], required: false },
    },
    {
        timestamps: true,
    }
);

const Company = mongoose.models.Company
    ? mongoose.model('Company')
    : mongoose.model('Company', companySchema);

export default Company;