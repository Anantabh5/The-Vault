// Import the Judge model and connect to the database
import Judge from '../../../db/schema/judge'; // Import your Judge model
import connectDb from '../../../db/db';

connectDb();

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            // Ensure the database connection is established
            await connectDb();

            const {
                judgeId,
                name,
                judgeUniqueId,
                email,
                password,
                mobileNumber,
            } = req.body;

            if (
                !judgeId ||
                !name ||
                !judgeUniqueId ||
                !email ||
                !password ||
                !mobileNumber
            ) {
                return res.status(400).json({ error: 'All fields are required' });
            }

            // Create a new judge document
            const newJudge = new Judge({
                judgeId,
                name,
                judgeUniqueId,
                email,
                password,
                mobileNumber,
            });

            // Save the judge to the database
            const savedJudge = await newJudge.save();

            res.status(201).json({ message: 'Judge registered successfully', id: savedJudge._id });
        } catch (error) {
            console.error('Error during registration:', error);
            res.status(500).json({ error: 'Registration failed' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
