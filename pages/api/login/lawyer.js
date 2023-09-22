// pages/api/login/lawyer.js
import connectDb from '../../../db/db';
import Lawyer from '../../../db/schema/lawyer';
//import bcrypt from 'bcryptjs';
import nc from 'next-connect';

connectDb();

const handler = nc();

handler.post(async (req, res) => {
    if (req.method === 'POST') {
        const { lawyerEnrollmentNumber, password } = req.body;

        try {
            const lawyer = await Lawyer.findOne({ lawyerEnrollmentNumber,password });

            if (!lawyer) {
                return res.status(401).json({ error: 'Invalid credentials' });
            }

         //   const isMatch = await bcrypt.compare(password, lawyer.password);

         return res.status(200).json({ id: lawyer._id, name: lawyer.name });
        } catch (error) {
            console.error('Enrollment error:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
});

export default handler;
