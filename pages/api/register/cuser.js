// Import the CUser model and connect to the database
import CUser from '../../../db/schema/cuser';
import connectDb from '../../../db/db';
connectDb();
export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            // Ensure the database connection is established
            await connectDb();

            const { fullName, mobileNumber, email, securityPin } = req.body;

            if (!fullName || !mobileNumber || !email || !securityPin) {
                return res.status(400).json({ error: 'All fields are required' });
            }

            // Create a new user document
            const newUser = new CUser({
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
}
