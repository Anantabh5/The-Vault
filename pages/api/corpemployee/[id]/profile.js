import  connect  from 'next-connect';
import Employee from '../../../../db/schema/employee'; // Import the Employee schema

const handler = connect();

handler.get(async (req, res) => {
    const { userId} = req.query;

    try {
        const employee = await Employee.findOne({employeeId:userId});

        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' });
        }

        // Return the employee profile
        res.json({ profile: employee });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

handler.put(async (req, res) => {
    const { employeeId } = req.query;
    const updatedProfileData = req.body;

    try {
        // Update the employee profile based on employeeId
        const updatedEmployee = await Employee.findByIdAndUpdate(
            employeeId,
            updatedProfileData,
            { new: true } // Return the updated document
        );

        if (!updatedEmployee) {
            return res.status(404).json({ error: 'Employee not found' });
        }

        // Return a success message or the updated employee profile
        res.json({ message: 'Employee profile updated', profile: updatedEmployee });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default handler;
