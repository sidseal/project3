const { cloudinary } = require("./utils/cloudinary");
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
var cors = require('cors');

const mongoose = require("mongoose");

require('dotenv').config();


// Define middleware here
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb" }));
app.use(cors());

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

app.post('/api/upload', async (req, res) => {
  try {
      const fileStr = req.body.data;
 
      const uploadResponse = await cloudinary.uploader.upload(fileStr, {
          upload_preset: 'dev_setups',
      });

      res.json({ url: uploadResponse.url });

  } catch (err) {
      console.error(err);
      res.status(500).json({ err: 'Something went wrong' });
  }
});


app.get("*", (req, res) => {
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
