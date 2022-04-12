const mongoose = require('mongoose');

const CarSchema = mongoose.Schema({
    Make : {
        type : String, 
        required : true
    },
    Mod : {
        type : String, 
        required : true
    },
    createdDate : {
        type : Date,
        default : Date.now
    }
      
    //Color : {type : String, requied : false},
    //Fuel : {type : String, required : true},
    //Mileage : {type : String, required : true},
   // Price : {type : String, requied : true},
    //PostedOn : {type : Date, default : Date.now}
});

module.exports = mongoose.model('Cars',CarSchema);