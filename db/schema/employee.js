import mongoose from 'mongoose';
const { Schema } = mongoose;
mongoose.Promise = global.Promise;
const employeeSchema = new Schema(
    {
        employeeId: { type: String, required: true },
        name: { type: String, required: true },
        companyId: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        mobileNumber: { type: Number, required: true },
    },
    {
        timestamps: true,
    }
);

const Employee = mongoose.models.Employee
    ? mongoose.model('Employee')
    : mongoose.model('Employee', employeeSchema);

export default Employee;