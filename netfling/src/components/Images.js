import React, { useState, useEffect } from "react";
import { Image } from "cloudinary-react";

export default function Images() {
    const [imageIds, setImageIds] = useState(
       []
    );
    const loadImages = async () => {
        try {
            const res = await fetch("/api/images")
            const data = await res.json;  
            setImageIds(data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        loadImages();
    }, []);
    return(
        <div>
          {imageIds && imageIds
            .map((imageId, index) => (
            <Image
            key= {index}
            cloudName= "dp1mdoypu"
            publicId= {imageId}           
            width= "150"
            crop= "scale"            
            />
            ))
            }
        </div>
    )
};