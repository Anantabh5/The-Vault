import Judge from '../../../../db/schema/judge'; // Import the Judge schema
import nc from 'next-connect';

const handler = nc();

// GET request handler for retrieving a Judge's profile
handler.get(async (req, res) => {
    const { userId } = req.query;

    try {
        const judge = await Judge.findOne({judgeId:userId});

        if (!judge) {
            return res.status(404).json({ error: 'Judge not found' });
        }

        // Return the judge profile
        res.json({ profile: judge });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// PUT request handler for updating a Judge's profile
handler.put(async (req, res) => {
    const { judgeId } = req.query;
    const updatedProfileData = req.body;

    try {
        // Update the judge profile based on judgeId
        const updatedJudge = await Judge.findByIdAndUpdate(
            judgeId,
            updatedProfileData,
            { new: true } // Return the updated document
        );

        if (!updatedJudge) {
            return res.status(404).json({ error: 'Judge not found' });
        }

        // Return a success message or the updated judge profile
        res.json({ message: 'Judge profile updated', profile: updatedJudge });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default handler;
