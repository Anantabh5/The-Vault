// pages/api/register/judge.js
import connectDb from '../../../db/db';
import Judge from '../../../db/schema/judge'; // Import your Judge model
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
                judgeUniqueId,
                email,
                
                password,
                mobileNumber,
            } = req.body;

            if (
                !name ||
                !judgeUniqueId ||
                !email ||
                !password ||
                !mobileNumber
            ) {
                return res.status(400).json({ error: 'All fields are required' });
            }

            // Generate a UUID (v4) for judgeId
            const judgeId = uuidv4();

            // Create a new judge document with the generated judgeId
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
});

export default handler;
