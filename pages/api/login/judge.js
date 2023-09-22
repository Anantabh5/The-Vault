// pages/api/login/judge.js
import connectDb from '../../../db/db';
import Judge from '../../../db/schema/judge';
import bcrypt from 'bcryptjs';

connectDb();

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { judgesUniqueId, password } = req.body;

        try {
            const judge = await Judge.findOne({ judgeUniqueId: judgesUniqueId });

            if (!judge) {
                return res.status(401).json({ error: 'Invalid credentials' });
            }

            const isMatch = await bcrypt.compare(password, judge.password);

            if (isMatch) {
                res.status(200).json({ id: judge._id, name: judge.name });
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
