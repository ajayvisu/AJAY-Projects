const mongoose = require('mongoose');
const crypto = require('crypto');

const carstSchema = mongoose.Schema({
    uuid: {type: String, required:false},
    carName:{type: String, required: true, trim: true},
    quantity:{type: Number, required: true},
    price:{type: String, required: true},
    brand:{type: String, required: true},
    flavor:{type: String, required: false},
    bisCategory: {type: String, required: true},
    incredients: {type: String, required: false},
    expireDate:{type: String, required: true, trim: true},
    carImage: {type: String, required: true},
    active: {type: Boolean, required: false, default: true},
    userUuid: {type: String, required: true},
    categoryUuid:{type: String, required: true}
},
{
    timestamps: true
});

// UUID generation
carsSchema.pre('save', function(next){
    this.uuid = 'PROD-'+crypto.pseudoRandomBytes(6).toString('hex').toUpperCase()
    console.log(this.uuid);
    next();
});

module.exports=mongoose.model('product',productSchema);