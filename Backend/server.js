import app from "./app.js";
import cloudinary from "cloudinary";

cloudinary.v2.config({
    clod_name: process.env.COLUDINARY_CLOUD_NAME,
    api_key: process.env.COLUDINARY_API_KEY,
    api_secret: process.env.COLUDINARY_API_SECRET,

})



app.listen(process.env.PORT, () => {
    console.log(`server started at port:4000`);
});