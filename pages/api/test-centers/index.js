import dbConnect from '../../../utils/dbConnect';
import TestLocation from '../../../models/TestLocation';

dbConnect();

export default async (req, res) => {
    const {method} = req;

    switch(method) {
        case 'GET':
            try{
                const testLocation = await TestLocation.find({});

                res.status(200).json({success: true, data: testLocation});
            } catch (error) {
                res.status(400).json({success: false});
            }
            break;

            case 'POST':
                try {
                    const testLocation = await TestLocation.create(req.body);

                    res.status(201).json({ success: true, data: testLocation})
                } catch(error) {
                    res.status(400).json({success: false});
                }
                break;
            default:
                res.status(400).json({success: false});
    }
}