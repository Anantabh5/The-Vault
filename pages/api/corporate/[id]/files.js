import nc  from 'next-connect';
import Company from '../../../../db/schema/company'; // Import the Company schema

const handler = nc();

// GET request handler for retrieving the company profile
handler.get(async (req, res) => {
    const { userId } = req.query;

    try {
        const company = await Company.findOne({companyId:userId});

        if (!company) {
            return res.status(404).json({ error: 'Company not found' });
        }

        // Return the company profile
        res.json({ profile: company });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// PUT request handler for updating the company profile
handler.put(async (req, res) => {
    const { companyId } = req.query;
    const updatedProfileData = req.body;

    try {
        // Update the company profile based on companyId
        const updatedCompany = await Company.findByIdAndUpdate(
            companyId,
            updatedProfileData,
            { new: true } // Return the updated document
        );

        if (!updatedCompany) {
            return res.status(404).json({ error: 'Company not found' });
        }

        // Return a success message or the updated company profile
        res.json({ message: 'Company profile updated', profile: updatedCompany });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default handler;
