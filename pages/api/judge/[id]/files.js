import Judge from '../../../../db/schema/judge'; // Import the Judge schema
import File from '../../../../db/schema/file'; // Import the File schema
import nc from 'next-connect';
import connectDb from "../../../../db/db"
connectDb();
const handler = nc();

// GET request handler for retrieving files for a Judge
handler.get(async (req, res) => {
    const { userId } = req.query;

    try {
        const judge = await Judge.findOne({judgeId:userId});

        if (!judge) {
            return res.status(404).json({ error: 'Judge not found' });
        }

        // Assuming each fileId corresponds to a file document
        // Retrieve file details based on Judge's fileId
        const fileDetails = await File.find({ _id: { $in: judge.fileId } });

        if (!fileDetails.length) {
            return res.status(404).json({ error: 'No files found for this Judge' });
        }

        res.json({ files: fileDetails });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default handler;
