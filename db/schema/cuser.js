// ../../../db/schema/cuser.js
import mongoose from 'mongoose';

const cUserSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    fullName: { type: String, required: true },
    mobileNumber: { type: String, required: true },
    email: { type: String, required: true },
    securityPin: { type: String, required: true },
    fileId: { type: [String], required: false },
});

const CUser = mongoose.models.CUser || mongoose.model('CUser', cUserSchema);

export default CUser;
