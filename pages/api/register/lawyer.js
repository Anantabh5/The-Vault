// Import the Lawyer model and connect to the database
import Lawyer from '../../../db/schema/lawyer'; // Import your Lawyer model
import connectDb from '../../../db/db';

connectDb();

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            // Ensure the database connection is established
            await connectDb();

            const {
                lawyerId,
                name,
                lawyerEnrollmentNumber,
                email,
                password,
                mobilenumber,
            } = req.body;

            if (!lawyerId || !name || !lawyerEnrollmentNumber || !email || !password || !mobilenumber) {
                return res.status(400).json({ error: 'All fields are required' });
            }

            // Create a new lawyer document
            const newLawyer = new Lawyer({
                lawyerId,
                name,
                lawyerEnrollmentNumber,
                email,
                password,
                mobilenumber,
            });

            // Save the lawyer to the database
            const savedLawyer = await newLawyer.save();

            res.status(201).json({ message: 'Lawyer registered successfully', id: savedLawyer._id });
        } catch (error) {
            console.error('Error during registration:', error);
            res.status(500).json({ error: 'Registration failed' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
