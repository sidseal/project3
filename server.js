const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
// const { cloudinary } = require("./utils/cloudinary");
// const env = require ("dotenv").config;
require('dotenv').config();


// Define middleware here

app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb" }));
app.use((req,res,next)=>{
  console.log(req.url, req.method, res.statusCode)
  next()
})
// IMG middleware needed here
if (process.env.NODE_ENV === "production") {
  app.use(express.static("netfling/build"));

}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/user");

// Define API routes here
app.use("/api", require("./routes/api"))
app.post("/api/upload", async (req,res) => {
    res.json("ok");
    console.log(new Date());

    // try {
    //   const fileString = file.req.data;
    //   console.log(fileString)
    //   const uploadedResponse = await cloudinary.uploader.upload(fileString, {
    //     upload_preset: "dev"
    //   })
    //   console.log(uploadedResponse)
    //   res.json({msg: "Image Uploaded"})
    // } catch (error) {
    //   console.log(error)
    //   res.status(500).json({err: "Oops, Something Went Wrong"})
      
    // }
});
app.get("/api/images", async(req, res) => {
  console.log(new Date());
  res.json("ok");
  // const { resources } = await cloudinary.search
  // .expression("folder: dev")
  // // .sort_by("public_id", desc)
  // // .max_results(30)
  // // .execute();
  // const publicIds =  resources.map(file => file.public_id);
  // res.send(publicIds);
})

app.get("*", (req, res) => {
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
