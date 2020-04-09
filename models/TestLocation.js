import mongoose from 'mongoose';

const TestLocationSchema = mongoose.Schema({
    name: String,
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    }
});

module.exports = mongoose.models.TestLocation || mongoose.model('TestLocation', TestLocationSchema);