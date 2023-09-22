// pages/api/login/judge.js
import connectDb from '../../../db/db';
import Judge from '../../../db/schema/judge';
//import bcrypt from 'bcryptjs';
import nc from 'next-connect';

connectDb();

const handler = nc();

handler.post(async (req, res) => {
    if (req.method === 'POST') {
        const { judgeUniqueId, password } = req.body;

        try {
            const judge = await Judge.findOne({ judgeUniqueId,password });

            if (!judge) {
                return res.status(401).json({ error: 'Invalid credentials' });
            }

            
           return     res.status(200).json({ id: judge._id, name: judge.name });
           
        } catch (error) {
            console.error('Login error:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
});

export default handler;
