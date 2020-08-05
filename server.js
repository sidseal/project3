const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const multer = require('multer');

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
