import CUser from '../../../../db/schema/cuser'; // Import the CUser schema
import nc from 'next-connect';

const handler = nc();

// GET request handler for retrieving the CUser profile
handler.get(async (req, res) => {
    const { cUserId } = req.query;

    try {
        const cuser = await CUser.findOne(cUserId);

        if (!cuser) {
            return res.status(404).json({ error: 'CUser not found' });
        }

        // Return the CUser profile
        res.status(200).json({ profile: cuser });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// PUT request handler for updating the CUser profile
handler.put(async (req, res) => {
    const { cUserId } = req.query;
    const updatedProfileData = req.body;

    try {
        // Update the CUser profile based on cUserId
        const updatedCUser = await CUser.findByIdAndUpdate(
            cUserId,
            updatedProfileData,
            { new: true } // Return the updated document
        );

        if (!updatedCUser) {
            return res.status(404).json({ error: 'CUser not found' });
        }

        // Return a success message or the updated CUser profile
        res.json({ message: 'CUser profile updated', profile: updatedCUser });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default handler;
