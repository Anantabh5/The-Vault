import  connect  from 'next-connect';
import File from '../../../../db/schema/file'; // Import the File schema
import Employee from '../../../../db/schema/employee';
import { v4 as uuidv4 } from 'uuid'; // Import uuidv4

const handler = connect();

handler.post(async (req, res) => {
    if (req.method === 'POST') {
        const { fileAddress, userId } = req.body;

        try {
            // Create a new File document
            const id = userId;
            const fileId = uuidv4();
            const file = new File({ fileId,fileAddress, id, identification: 'Employee' });
            await file.save();

            // Update the fileId in the Employee schema
            // await Employee.findByIdAndUpdate(id, { $push: { fileId: file._id } });
            const updatedEmployee = await Employee.findOneAndUpdate(
                { employeeId: userId }, // Filter by the lawyer's ID
                { $push: { fileId: fileId } }, // Push 'fileId' to the 'fileId' array
                { new: true } // Return the updated document
              );
            
    
            res.status(201).json({ message: 'File uploaded successfully',updatedEmployee });
            // res.json({ message: 'File uploaded successfully' });
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
});

export default handler;
