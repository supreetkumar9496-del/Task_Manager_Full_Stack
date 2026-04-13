
import dotenv from "dotenv";
import { app } from "./src/app.js";
import connectDB from "./src/db/index.js";




dotenv.config({
    path: './.env',
})



connectDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Listening at port ${process.env.PORT}`);
    });

}).catch((error)=>{
    console.log(error);
});



