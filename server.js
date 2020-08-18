const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();
const multer = require('multer');
const mongoose = require("mongoose")
const router = require("express").Router();

// Define middleware here

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
      cb(null, 'uploads/')
  }
});

const multer = require('multer');
const upload = multer({ storage: storage });

router.route("/img_data")
.post(upload.single("file"), function(req, res) {
  let newImg = new Img;
  newImg.img.data = fs.readFileSync(req.file.path)
  newImg.img.contentType = "image/jpeg";
  newImg.save();
  res.json({ message: "New image added!" });
    }
    .get(function(req, res) {
      Img.findOne({}, "img createdAt", function(err, img) {
          if (err)
              res.send(err);
          // console.log(img);
          res.contentType("json");
          res.send(img);
      }).sort({ createdAt: "desc" });
    })
);

 arrayBufferToBase64 = (buffer) => {
  var binary = '';
  var bytes = [].slice.call(new Uint8Array(buffer));
  bytes.forEach((b) => binary += String.fromCharCode(b));
  return window.btoa(binary);
};

createProfileDidMount = () => {
  fetch('mongodb://localhost/user')
  .then((res) => res.json())
  .then((data) => {
      // console.log(img)
      let image64 = 'data:image/jpeg;base64,';
      var imageStr = React.arrayBufferToBase64(data.img.data.data);
      React.setState({
          img: image64 + imageStr
        })
  })
};





app.use(express.urlencoded({ limit:"50mb", extended: true }));
app.use(express.json({ limit:"50mb" }));
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

app.get("*", (req, res) => {
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
