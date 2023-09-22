// pages/api/login/employee.js
import connectDb from '../../../db/db';
import Employee from '../../../db/schema/employee';
import bcrypt from 'bcryptjs';

connectDb();

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { employeeId, password } = req.body;

        try {
            const employee = await Employee.findOne({ employeeId });

            if (!employee) {
                return res.status(401).json({ error: 'Invalid credentials' });
            }

            const isMatch = await bcrypt.compare(password, employee.password);

            if (isMatch) {
                res.status(200).json({ id: employee._id, name: employee.name });
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
