// pages/api/register/employee.js
import connectDb from '../../../db/db';
import Employee from '../../../db/schema/employee'; // Import your Employee model
import { v4 as uuidv4 } from 'uuid'; // Import uuid
import nc from 'next-connect';

connectDb();

const handler = nc();

handler.post(async (req, res) => {
    if (req.method === 'POST') {
        try {
            // Ensure the database connection is established
            await connectDb();

            const {
                employeeId,
                name,
                companyId,
                email,
                password,
                mobileNumber,
                fileId,
            } = req.body;

            if (!employeeId || !name || !companyId || !email || !password || !mobileNumber) {
                return res.status(400).json({ error: 'All fields are required' });
            }

            // Generate a UUID (v4) for userId
            const userId = uuidv4();

            // Create a new employee document with the generated userId
            const newEmployee = new Employee({
                userId,
                employeeId,
                name,
                companyId,
                email,
                password,
                mobileNumber,
                fileId,
            });

            // Save the employee to the database
            const savedEmployee = await newEmployee.save();

            res.status(201).json({ message: 'Employee registered successfully', id: savedEmployee._id });
        } catch (error) {
            console.error('Error during employee registration:', error);
            res.status(500).json({ error: 'Employee registration failed' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
});

export default handler;
