import Lawyer from '../../../../db/schema/lawyer'; // Import the Lawyer schema
import nc from 'next-connect';

const handler = nc();

handler.get(async (req, res) => {
    const { userId } = req.query;

    try {
        const lawyer = await Lawyer.findOne(userId);

        if (!lawyer) {
            return res.status(404).json({ error: 'Lawyer not found' });
        }

        // Return the lawyer profile
        res.json({ profile: lawyer });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

handler.put(async (req, res) => {
    const { lawyerId } = req.query;
    const updatedProfileData = req.body;

    try {
        // Update the lawyer profile based on lawyerId
        const updatedLawyer = await Lawyer.findByIdAndUpdate(
            lawyerId,
            updatedProfileData,
            { new: true } // Return the updated document
        );

        if (!updatedLawyer) {
            return res.status(404).json({ error: 'Lawyer not found' });
        }

        // Return a success message or the updated lawyer profile
        res.status(201).json({ message: 'Lawyer profile updated', profile: updatedLawyer });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default handler;
