import CUser from '../../../../db/schema/cuser'; // Import the CUser schema
import File from '../../../../db/schema/file';
import nc from "next-connect";

const handler = nc();

// GET request handler for retrieving files associated with a CUser
handler.get(async (req, res) => {
    const { userId } = req.query;

    try {
        console.log("came here");

        const cuser = await CUser.findOne({userId:userId});

        if (!cuser) {
            return res.status(404).json({ error: 'CUser not found' });
        }
        // console.log("came here");
        // Assuming each fileId corresponds to a file document
        // Retrieve file details based on CUser's fileId
        const fileDetails = await File.find({ id: { $in: cuser.fileId } });

        if (!fileDetails.length) {
            return res.status(404).json({ error: 'No files found for this CUser' });
        }

        res.json({ files: fileDetails });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default handler;
