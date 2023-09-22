import Lawyer from '../../../../db/schema/lawyer'; // Import the Lawyer schema
import File from '../../../../db/schema/file'; // Import the File schema
import nc from 'next-connect';
import connectDb from '../../../../db/db';
connectDb();
const handler = nc();

handler.get(async (req, res) => {
    const  {userId}  = req.body;

    try {
        const lawyer = await Lawyer.findOne({lawyerId:userId});
        console.log("lawyer chceked");
        if (!lawyer) {
            return res.status(404).json({ error: 'Lawyer not found' });
        }
        if(!lawyer.fileId)
        {
            return res.status(404).json({ error: 'Lawyer files not there' });
        }

        // Assuming each fileId corresponds to a file document
        // Retrieve file details based on Lawyer's fileId
        const fileDetails = await File.find({ _id: { $in: lawyer.fileId } });

        if (!fileDetails.length) {
            return res.status(404).json({ error: 'No files found for this Lawyer' });
        }

        res.status(200).json({ files: fileDetails });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default handler;
