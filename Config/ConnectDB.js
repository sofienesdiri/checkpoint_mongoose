const mongoose = require("mongoose")
const ConnectDb =async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("database is connected")
    } catch (error) {
        console.log("database is not connected")
    }
}
module.exports= ConnectDb