import  connect  from 'next-connect';
import Employee from '../../../../db/schema/employee'; // Import the Employee schema
import File from '../../../../db/schema/file'; // Import the File schema

const handler = connect();

handler.get(async (req, res) => {
    var fileDetails = [];

    const { userId } = req.query;

    try {
        const employee = await Employee.findOne({employeeId:userId});

        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' });
        }

        // Assuming each fileId corresponds to a file document
        // Retrieve file details based on Employee's fileId
        fileDetails = await File.find({ id: { $in: employee.fileId } });

        if (!fileDetails.length) {
            return res.status(404).json({ error: 'No files found for this Employee' });
        }

        res.status(200).json({ files: fileDetails });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default handler;
