import File from '../../../../db/schema/file'; // Import the File schema
import Judge from '../../../../db/schema/judge';
import nc from 'next-connect';
import { v4 as uuidv4 } from 'uuid'; // Import uuidv4

const handler = nc();

handler.post(async (req, res) => {
    const { fileAddress, userId } = req.body;

    try {
        // Create a new File document
        const fileId = uuidv4();
        const id = userId;
        const file = new File({fileId, fileAddress, id, identification: 'Judge' });
        await file.save();

        // Update the fileId in the Judge schema
        // await Judge.findByIdAndUpdate(id, { $push: { fileId: file._id } });
        const updatedJudge = await Judge.findOneAndUpdate(
            { judgeId: id }, // Filter by the lawyer's ID
            { $push: { fileId: fileId } }, // Push 'fileId' to the 'fileId' array
            { new: true } // Return the updated document
          );
        

        res.status(201).json({ message: 'File uploaded successfully',updatedJudge });

        res.json({ message: 'File uploaded successfully' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default handler;
