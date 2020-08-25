import React, { useState } from "react";
// import Images from "../components/Images";
import API from '../utils/API';

function UploadImage() {
    const [fileInput, setFileInput] = useState("");
    const [previewSource, setPreviewSource] = useState("");

    const [successMsg, setSuccessMsg] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [choices, setChoices] = useState(
        {
          img: ""
        }
      );


    const fileSelectedHandler = (event) => {
        const file = event.target.files[0];
        console.log(file);
        previewFile(file);
    };

    const previewFile = (file) => {

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result)
        };
    };

    const fileUploadHandler = (event) => {
        console.log("submitting");
        event.preventDefault();
        if (!previewSource)
            return;
        uploadImage(previewSource);
    };

    const uploadImage = async (base64EncodedImage) => {
        try {
            const serverRes = await fetch("/api/upload", {
                method: "POST",
                body: JSON.stringify({ data: base64EncodedImage }),
                headers: { "Content-type": "application/json" },
            })
            // data responce
            const data = await serverRes.json();

            setChoices({"img": data.url});
           
            // Get User id
            const loggedUserLS = localStorage.getItem('loggedUserLS');
            const parsedloggedUser = JSON.parse(loggedUserLS);

            // Update User Url 
           const sendImg = await API.updateImg({ 
                id: parsedloggedUser._id,
                choices
            })
            setFileInput("");
            setPreviewSource("");
            setSuccessMsg("Image uploaded successfully");

        } catch (err) {
            console.error(err);
            setErrMsg("Something went wrong!");
        };
    };

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
                    style={{ height: "200px", width: "200px" }} />
            )}
        </>

    );
};

export default UploadImage;