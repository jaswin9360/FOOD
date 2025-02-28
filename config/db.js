const mongoose = require('mongoose')

async function user (){
    try {
       const connect= await mongoose.connect("mongodb://localhost:27017/FOOD")
        console.log("mongodb connected")
    } catch (error) {
        console.log(error.message)
    }
    
}


module.exports = user;