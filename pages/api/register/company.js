// pages/api/register/company.js
import connectDb from '../../../db/db';
import Company from '../../../db/schema/company'; // Import your Company model
import { v4 as uuidv4 } from 'uuid'; // Import uuid
import nc from 'next-connect';

connectDb();

const handler = nc();

handler.post(async (req, res) => {
    if (req.method === 'POST') {
        try {
            // Ensure the database connection is established
            await connectDb();

            const { companyName, businessEmail, password, industry, companySize,mobileNumber } = req.body;

            if (!companyName || !businessEmail || !password) {
                return res.status(400).json({ error: 'All fields are required' });
            }

            // Generate a UUID (v4) for companyId
            const companyId = uuidv4();

            // Create a new company document with the generated companyId
            const newCompany = new Company({
                companyId,
                name:companyName,
                email:businessEmail,
                mobileNumber,
                password,
            }).save();

            // Save the company to the database

            res.status(201).json({ message: 'Company registered successfully', companyId});
        } catch (error) {
            console.error('Error during registration:', error);
            res.status(500).json({ error: 'Registration failed' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
});

export default handler;
