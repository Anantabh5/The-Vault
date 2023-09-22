// pages/api/login/cuser.js
import connectDb from '../../../db/db';
import CUser from '../../../db/schema/cuser';
import bcrypt from 'bcryptjs';

connectDb();

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { emailOrUsername, password } = req.body;

        try {
            const user = await CUser.findOne({ $or: [{ email: emailOrUsername }, { username: emailOrUsername }] });

            if (!user) {
                return res.status(401).json({ error: 'Invalid credentials' });
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if (isMatch) {
                res.status(200).json({ id: user._id, fullName: user.fullName });
            } else {
                res.status(401).json({ error: 'Invalid credentials' });
            }
        } catch (error) {
            console.error('Login error:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
