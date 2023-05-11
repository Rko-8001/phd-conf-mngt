import React, { useState } from 'react'
import SignCrop from './SignCrop';


export default function Upload({ setShowModal, setUploadImage, setImageFile }) {
    const [image, setImage] = useState(null);
    function getImage(event) {
        if (event.target.files && event.target.files.length > 0) {
            const reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = function (e) {
                setImage(reader.result);
            };
        }
    }
    return (
        <>
            <div className="items.-center z-1 w-full  px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div className="flex items-center justify-between">
                    <span className="text-md font-bold text-gray-600 dark:text-gray-400">Upload your Signature</span>
                    <button
                        onClick={e => {
                            e.preventDefault();
                            setUploadImage(image);
                            setShowModal(false);
                        }}
                        className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500"
                    >
                        Save
                    </button>
                </div>

                <div className="mt-2 flex-col">

                    <label
                        htmlFor="file-upload"
                        className=" h-20 w-auto px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500"
                    >
                        <span>Upload image</span>
                        <input
                            id="file-upload" name="file-upload"
                            onChange={getImage}
                            type="file" accept="image/*"
                            className="sr-only"
                        />
                    </label>
                    <div className="mt-2">
                        {(image !== null && image !== undefined) &&
                            <SignCrop className='container' image={image} setImage={setImage} />
                        }
                    </div>
                </div>


            </div >
        </>
    )
}
