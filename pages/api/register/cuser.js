import connectDb from '../../../db/db';
import CUser from '../../../db/schema/cuser'; // Import your CUser model
import { v4 as uuidv4 } from 'uuid'; // Import uuid
import nc from 'next-connect';

connectDb();

const handler = nc();

handler.post(async (req, res) => {
    if (req.method === 'POST') {
        try {
            // Ensure the database connection is established
            await connectDb();

            const { fullName, mobileNumber, email, securityPin } = req.body;

            if (!fullName || !mobileNumber || !email || !securityPin) {
                return res.status(400).json({ error: 'All fields are required' });
            }

            // Generate a UUID (v4) for userId
            const userId = uuidv4();

            // Create a new user document with the generated userId
            const newUser = new CUser({
                userId,
                fullName,
                mobileNumber,
                email,
                securityPin,
            });

            // Save the user to the database
            const savedUser = await newUser.save();

            res.status(201).json({ message: 'User registered successfully', id: savedUser._id });
        } catch (error) {
            console.error('Error during registration:', error);
            res.status(500).json({ error: 'Registration failed' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
});

export default handler;