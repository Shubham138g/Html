import mongoose from "mongoose";

const url=`mongodb+srv://tonygupta275:zoAcRqDwTeldGSC2@cluster0.6efrmtj.mongodb.net/`;


const connection= async()=>{
    try {
     await   mongoose.connect(url,{useUnifiedTopology:true, useNewUrlParser:true});
     console.log("database connected sucessfully");
        
    } catch (error) {
        console.log(`error while connection to the database`,error);
    }
}

export default connection;