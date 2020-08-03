const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const multer = require('multer');
const axios = require("axios");
axios({
  "method":"GET",
  "url":"https://netflix-unofficial.p.rapidapi.com/api/search",
  "headers":{
  "content-type":"application/octet-stream",
  "x-rapidapi-host":"netflix-unofficial.p.rapidapi.com",
  "x-rapidapi-key":"bd03197627mshdf8a369cd347b3bp1a2797jsn4466123284cf",
  "useQueryString":true
  },"params":{
  "genre":"comedy"
  }
  })
  .then((response)=>{
    console.log(response)
  })
  .catch((error)=>{
    console.log(error)
  })

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// IMG middleware needed here
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/user", { useNewUrlParser: true });
}

// Define API routes here


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
