// pages/api/register/lawyer.js
import connectDb from '../../../db/db';
import Lawyer from '../../../db/schema/lawyer'; // Import your Lawyer model
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
                name,
                lawyerEnrollmentNumber,
                email,
                password,
                mobileNumber,
            } = req.body;

            if (
                !name ||
                !lawyerEnrollmentNumber ||
                !email ||
                !password ||
                !mobileNumber
            ) {
                return res.status(400).json({ error: 'All fields are required' });
            }

            // Generate a UUID (v4) for lawyerId
            const lawyerId = uuidv4();

            // Create a new lawyer document with the generated lawyerId
            const newLawyer = new Lawyer({
                lawyerId,
                name,
                lawyerEnrollmentNumber,
                email,
                password,
                mobileNumber,
            }).save();

            // Save the lawyer to the database
            

            res.status(201).json({ message: 'Lawyer registered successfully', id: lawyerId});
        } catch (error) {
            console.error('Error during registration:', error);
            res.status(500).json({ error: 'Registration failed' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
});

export default handler;
