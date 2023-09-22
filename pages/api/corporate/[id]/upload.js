import  connect  from 'next-connect';
import Company from '../../../../db/schema/company'; // Import the Company schema
import File from '../../../../db/schema/file'; // Import the File schema
import { v4 as uuidv4 } from 'uuid'; // Import uuidv4
 
const handler = connect();

// POST request handler for uploading a file and updating the Company schema
handler.post(async (req, res) => {
    if (req.method === 'POST') {
        const { userId,fileAddress } = req.body;

        try {
            // Create a new File document
            const id = userId;
            const fileId = uuidv4();

            const file = new File({fileId, fileAddress, id, identification: 'Company' });
            await file.save();

            // Update the fileId in the Company schema
            // await Company.findByIdAndUpdate(id, { $push: { fileId: file._id } });

            // res.json({ message: 'File uploaded successfully' });
            const updatedCompany = await Company.findOneAndUpdate(
                { companyId: userId }, // Filter by the lawyer's ID
                { $push: { fileId: fileId } }, // Push 'fileId' to the 'fileId' array
                { new: true } // Return the updated document
              );
            
    
            res.status(201).json({ message: 'File uploaded successfully',updatedCompany });
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
});

export default handler;
