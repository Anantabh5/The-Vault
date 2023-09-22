import mongoose from 'mongoose';
const { Schema } = mongoose;
mongoose.Promise = global.Promise;
const userSchema = new Schema(
    {
        userId: { type: String, required: true },
        userType: { type: String, required: true, unique: true },
        userIdentification: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.models.User
    ? mongoose.model('User')
    : mongoose.model('User', userSchema);

export default User;