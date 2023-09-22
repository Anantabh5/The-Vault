import connectDb from '../../../db/db';
import Company from '../../../db/schema/company'; // Import your Company model

connectDb();

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            // Ensure the database connection is established
            await connectDb();

            const { companyName, businessEmail, password, industry, companySize, agreeTerms } = req.body;

            if (!companyName || !businessEmail || !password || !industry || !companySize || !agreeTerms) {
                return res.status(400).json({ error: 'All fields are required' });
            }

            // Create a new company document
            const newCompany = new Company({
                companyName,
                businessEmail,
                password,
                industry,
                companySize,
                agreeTerms,
            });

            // Save the company to the database
            const savedCompany = await newCompany.save();

            res.status(201).json({ message: 'Company registered successfully', id: savedCompany._id });
        } catch (error) {
            console.error('Error during registration:', error);
            res.status(500).json({ error: 'Registration failed' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
