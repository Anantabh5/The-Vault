import File from '../../../../db/schema/file'; // Import the File schema
import CUser from '../../../../db/schema/cuser';
import { v4 as uuidv4 } from 'uuid'; // Import uuidv4

import nc from 'next-connect';

const handler = nc();

// POST request handler for uploading a file for CUser
handler.post(async (req, res) => {
    const { fileAddress, userId } = req.body;
    const fileId = uuidv4();
    const id = userId;

    try {
        // Create a new File document
        const file = new File({ fileId,fileAddress, id, identification: 'CUser' });
        await file.save();

        // Update the fileId in the CUser schema
        // await CUser.findByIdAndUpdate(id, { $push: { fileId: file._id } });
        const updatedCUser = await CUser.findOneAndUpdate(
            { userId: userId }, // Filter by the lawyer's ID
            { $push: { fileId: fileId } }, // Push 'fileId' to the 'fileId' array
            { new: true } // Return the updated document
          );
        

        res.status(201).json({ message: 'File uploaded successfully',updatedCUser });
        // res.json({ message: 'File uploaded successfully' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default handler;
