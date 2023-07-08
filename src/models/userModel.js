const { Schema, model } = require("mongoose")
const bcrypt = require('bcrypt');
const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'User name is missing'],
        trim: true,
        maxLength: [31, 'User name can be maximum 31 character'],
        minLength: [3, 'user name minium character will be 4'],
    },
    email: {
        type: String,
        required: [true, 'User email required'],
        trim: true,
        unique: true,
        lowercase: true,
        validate: {
            validator: function name(v) {
                return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v))
            },
            message: 'please enter a valid email'

        }
    },
    password: {
        type: String,
        required: [true, 'password must required'],
        minLength: [6, 'password minium character will be 6'],
        set: (v) => bcrypt.hashSync(v, bcrypt.genSalt(10))
    },
    image: {
        type: String,
    },
    address: {
        type: String,
        required: [true, 'address is must required']
    },
    phone: {
        type: String,
        required: [true, 'phoneis must required']
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isBanned: {
        type: Boolean,
        default: false
    },
}, { timestamps: true });


const users = model('Users', userSchema)


module.exports = users;