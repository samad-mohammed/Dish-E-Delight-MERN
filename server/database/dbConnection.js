import mongoose from "mongoose";

export const dbConnection = ()=>{
mongoose.connect(process.env.MONGO_URI, {
    dbName : "restro-food-app"
}).then(()=>{
    console.log("Connected to Database Successfully!");
}).catch(err => {
    console.log(`Error connecting the database! ${err}`)
})
}