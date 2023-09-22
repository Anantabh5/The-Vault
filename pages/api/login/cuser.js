// pages/api/login/cuser.js
import connectDb from '../../../db/db';
import CUser from '../../../db/schema/cuser';
import bcrypt from 'bcryptjs';
import nc from 'next-connect';

connectDb();

const handler = nc();

handler.post(async (req, res) => {
    if (req.method === 'POST') {
        const { emailOrUsername, securityPin } = req.body;

        try {
            const user = await CUser.findOne({
                $or: [
                  { email: emailOrUsername },
                  { username: emailOrUsername } // Assuming you have a "username" field, replace it with the actual field name if needed
                ],
                securityPin
              });
              
            if (!user) {
                return res.status(401).json({ error: 'Invalid credentials' });
            }


            return res.status(200).json({text:"verified"});
        } catch (error) {
            console.error('Login error:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
});

export default handler;
