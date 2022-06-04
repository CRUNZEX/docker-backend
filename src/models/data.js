const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        username: {
            type: String,
            required: true,
            default: 'test'
        }
    },
    {
        timestamps: { currentTime: Date.now },
    },
)

const UserModel = mongoose.model('User', UserSchema)
module.exports = UserModel
