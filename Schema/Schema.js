const  mongoose  = require('mongoose');
const Schema = require('mongoose')

const userSchema =  mongoose.Schema({
    name:{type:String},
   description:{type:String},
   img:{type:String},
   link:{type:String}
})

const userDetails = mongoose.model("users",userSchema)
module.exports = userDetails;