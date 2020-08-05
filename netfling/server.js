const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const multer = require('multer');
const axios = require("axios");
var unirest = require("unirest");
var req = unirest("GET", "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup");
req.query({
	"term": "bojack",
	"country": "uk"
});
req.headers({
	"x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
	"x-rapidapi-key": "bd03197627mshdf8a369cd347b3bp1a2797jsn4466123284cf",
	"useQueryString": true
});
req.end(function (res) {
	if (res.error) throw new Error(res.error);
	console.log(res.body);
});

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
