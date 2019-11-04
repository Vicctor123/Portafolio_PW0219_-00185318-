const Mongoose = require("mongoose");

const RegisterSchema = Mongoose.Schema({
    carnet : String,
    schedule: String, 
    isLate: Boolean, 
    dateLine: Date, 
});

module.exports = Mongoose.model("Register",RegisterSchema);