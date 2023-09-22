import mongoose from 'mongoose';
const { Schema } = mongoose;
mongoose.Promise = global.Promise;
const fileSchema = new Schema(
    {
        fileId: { type: String, required: true },
        fileAddress: { type: String, required: true },
        id: { type: String, required: true },
        identification: { type: String, required: true }
    },
    {
        timestamps: true,
    }
);

const File = mongoose.models.File
    ? mongoose.model('File')
    : mongoose.model('File', fileSchema);

export default File;