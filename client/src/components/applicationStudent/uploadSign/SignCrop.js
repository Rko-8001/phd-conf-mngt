import React, { useState } from "react";
import ReactCrop from "react-image-crop";
import 'react-image-crop/dist/ReactCrop.css'



function SignCrop({ image, setImage }) {
    const [imageRef, setImageRef] = useState(null); // [1
    const [crop, setCrop] = useState({
        unit: '%',
        width: 30,
        aspect: 3
    });

    const getCroppedImg = async (e) => {
        e.preventDefault();
        try {
            const canvas = document.createElement('canvas');
            const scaleX = imageRef?.naturalWidth / imageRef?.width;
            const scaleY = imageRef?.naturalHeight / imageRef?.height;
            canvas.width = crop.width;
            canvas.height = crop.height;
            const ctx = canvas.getContext('2d');

            const pixelRatio = window.devicePixelRatio;
            canvas.width = crop.width * pixelRatio;
            canvas.height = crop.height * pixelRatio;
            ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

            ctx.drawImage(
                imageRef,
                crop.x * scaleX,
                crop.y * scaleY,
                crop.width * scaleX,
                crop.height * scaleY,
                0,
                0,
                crop.width * pixelRatio,
                crop.height * pixelRatio,
            );

            const base64Image = canvas.toDataURL('image/jpeg');
            setImage(base64Image);

        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className="App flex flex-col items-center">
            <button
                onClick={getCroppedImg}
                className="mb-5 px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500"
            >
                Done
            </button>

            <ReactCrop
                src={image}
                crop={crop}
                onChange={c => setCrop(c)
                }

            >
                <img src={image}
                    onLoad={(e) => {
                        setImageRef(e.target);
                    }} alt="" />
            </ReactCrop>



        </div >
    );
}

export default SignCrop;
