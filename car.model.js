const mongoose = require('mongoose');
const crypto = require('crypto');

const userSchema = mongoose.Schema({
    uuid: {type: String, required: false},
    email:{type: String, required: true, trim: true, unique: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    username:{type: String, required: true, trim: true, unique: true},
    password:{type: String, required: true},
    countryCode: {type: String, required: true},
    role:{type: String, enum:['admin', 'user'], required: false, default: 'user'},
    mobileNumber:{type: String, required: true},
    DOB:{type: String, required: true},
    address:{type: Array, required: true},
    city:{type: String, required: false},
    state:{type: String, required: false},
    country:{type: String, required: false},
    pincode:{type: String, required: false},
    currentLocation:{type: Object, required: false},
    gender:{type: String, enum : ['male','female', 'transgender'], required: true},
    profileImage:{type: String, required: false},
    verifiedUser: {type: Boolean, required: false, default: false},
    lastedVisited: {type: String, required: false},
    loginStatus:{type: Boolean, required: false, default: false},
    firstLoginStatus:{type: Boolean, required: false, default: false}
},{
    timestamps: true
});

userSchema.pre('save', function(next){
    this.uuid = "USER-" + crypto.pseudoRandomBytes(6).toString('hex').toUpperCase()
    next()
});

module.exports = mongoose.model('user', userSchema, 'user');