const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const multer = require('multer');
const mongoose = require("mongoose")

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((req,res,next)=>{
  console.log(req.url, req.method, res.statusCode)
  next()
})
// IMG middleware needed here
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

}
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/user");


// Define API routes here
app.use("/api", require("./routes/api"))


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./netfling/public/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
