import Lawyer from '../../../../db/schema/lawyer'; // Import the Lawyer schema
import File from '../../../../db/schema/file'; // Import the File schema
import { v4 as uuidv4 } from 'uuid'; // Import uuidv4
import nc from 'next-connect';

const handler = nc();

handler.post(async (req, res) => {
    if (req.method === 'POST') {
        const { fileAddress, id } = req.body;

        try {
            // Generate a UUID for the fileId
            const fileId = uuidv4();
            console.log("before file update");            

            // Create a new File document with the generated fileId
            const file = await new File({ fileId, fileAddress, id, identification: "Lawyer" }).save();
            console.log("file update");            

            // Update the fileId in the Lawyer schema
            const updatedLawyer = await Lawyer.findOneAndUpdate(
                { lawyerId: id }, // Filter by the lawyer's ID
                { $push: { fileId: fileId } }, // Push 'fileId' to the 'fileId' array
                { new: true } // Return the updated document
              );
            

            res.status(201).json({ message: 'File uploaded successfully',updatedLawyer });
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
});

export default handler;
