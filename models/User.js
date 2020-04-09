import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    password2: {
        type: String,
        required: true,
    },
    f_name: {
        type: String,
        required: true
    },
    l_name: {
        type: String,
        required: true
    },
    address: {
        line_1: String,
        line_2: String,
        line_3: String,
        postal_code: String
    },
    dob: {
        month: Number,
        day: Number,
        year: Number
    },
    pre_existing_conditions: [String],
    test_history: {
        when: Date,
        where: String,
        covid_positive: Boolean
    },
    contact: {
        phone: String,
        mobile: String
    },
    emergency_contacts: {
        primary: {
            name: String,
            phone: String
        },
        secondary: {
            name: String,
            phone: String
        }
    },
    user_device_mobile: Boolean
})

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);