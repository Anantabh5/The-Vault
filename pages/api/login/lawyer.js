// pages/api/login/lawyer.js
import connectDb from '../../../db/db';
import Lawyer from '../../../db/schema/lawyer';
import bcrypt from 'bcryptjs';

connectDb();

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { enrollmentNumber, password } = req.body;

        try {
            const lawyer = await Lawyer.findOne({ lawyerEnrollmentNumber: enrollmentNumber });

            if (!lawyer) {
                return res.status(401).json({ error: 'Invalid credentials' });
            }

            const isMatch = await bcrypt.compare(password, lawyer.password);

            if (isMatch) {
                res.status(200).json({ id: lawyer._id, name: lawyer.name });
            } else {
                res.status(401).json({ error: 'Invalid credentials' });
            }
        } catch (error) {
            console.error('Enrollment error:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
