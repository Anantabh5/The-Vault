// Import the necessary modules and connect to the database
import connectDb from '../../../db/db';
import Company from '../../../db/schema/company';
import bcrypt from 'bcrypt';

connectDb();

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { companyName, companyId, password } = req.body;

        try {
            // Check if a company with the provided company ID exists
            const company = await Company.findOne({ companyId });

            if (!company) {
                return res.status(404).json({ error: 'Company not found' });
            }

            // Verify the password
            const passwordMatch = await bcrypt.compare(password, company.password);

            if (passwordMatch) {
                // Password is correct, allow login
                return res.status(200).json({ message: 'Login successful' });
            } else {
                // Password is incorrect
                return res.status(401).json({ error: 'Incorrect password' });
            }
        } catch (error) {
            console.error('Login error:', error);
            return res.status(500).json({ error: 'Login failed' });
        }
    } else {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
}
