import React, { useState }from "react";
// import e from "express";
import Images from "../components/Images";



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
    //   event.preventDefault();
      if(!previewSource)
      return; 
      uploadImage(previewSource);
    };

    const uploadImage = async (base64EncodedImage) => {
      console.log(base64EncodedImage);
      try {
        await fetch("api/upload", {
          method: "POST",
          body: JSON.stringify({data: base64EncodedImage}),
          headers: {"Content-type": "application/json"}
        })
      } catch (error) {
        console.log(error);
      };
    };

    return (
      <>
      <form>
          <input type="file" name="image" onChange={fileSelectedHandler} value={fileInput} className="form-input" />
          <button className="btn waves-effect waves-light"
              id="btn"
              type="submit"
              name="image"
              onClick={fileUploadHandler} >Upload My Picture
          </button> 
      </form>
      {/* <Images /> */}
      {previewSource && (
          <img src={previewSource} alt="" 
          style={{height: "300px"}} />
      )}
      </>
    );
};

export default UploadImage;
