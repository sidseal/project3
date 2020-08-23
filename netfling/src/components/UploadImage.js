import React, { useState }from "react";
// import Images from "../components/Images";
// import axios from "axios";



function UploadImage() {
    const [fileInput, setFileInput] = useState("");
    const [previewSource, setPreviewSource] = useState("");

    const fileSelectedHandler = (event) => {
        const file = event.target.files[0];
        console.log(file);
        previewFile(file);
    };

    const previewFile = (file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setPreviewSource(reader.result)
      };
    };

    const fileUploadHandler = (event) => {
      console.log("submitting");
      event.preventDefault();
      if(!previewSource)
      return; 
      uploadImage(previewSource);
    };

    const uploadImage = async(base64EncodedImage) => {
      const Imagedata = base64EncodedImage
      // const fd = new FormData();
      console.log(base64EncodedImage);
      // fd.append("Image", setPreviewSource,)
          // axios.post("/api/upload", fd)
          // .then(res =>{
          //   console.log(res);
          // });
        await fetch("/api/upload", {
          
          method: "POST",
          body: JSON.stringify({data: Imagedata}),
          // headers: {"Content-type": "application/json"}
        });
    };

    // async function uploadImage(base64EncodedImage) {
    //   // console.log(data);
    //       //   console.log(base64EncodedImage);

    //     await fetch("/api/upload", {
    //       method: "POST",
    //       body: JSON.stringify(data)
    //     });
    // };

    return (
      <>
      <form onSubmit={fileUploadHandler} className="form">
          <input type="file" name="image" onChange={fileSelectedHandler} value={fileInput} className="form-input" />
          <button className="btn waves-effect waves-light"
              id="btn"
              type="submit"
              name="image"
              >Upload My Picture
          </button>
      </form>
      {/* <Images /> */}
      {previewSource && (
          <img src={previewSource} alt="preview" 
          style={{height: "200px", width: "200px"}} />
      )}
      </>
    );
};

export default UploadImage;
