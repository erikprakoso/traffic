// import mongoose 
import mongoose from "mongoose";
 
// Buat Schema
const Traffic = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    latitude:{
        type: String,
        required: true
    },
    longitude:{
        type: String,
        required: true
    },
});
 
// export model
export default mongoose.model('Traffics', Traffic);